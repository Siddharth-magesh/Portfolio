import { chromium } from '@playwright/test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import { archiveRoutes, legacyRoutes, redirects } from '../lib/portfolio-routes.mjs'

const base = process.env.PORTFOLIO_URL || 'http://127.0.0.1:3000'
const output = 'docs/redesign'
fs.mkdirSync(output, { recursive: true })
const manifest = JSON.parse(fs.readFileSync('.next/prerender-manifest.json', 'utf8'))
const current = Object.keys(manifest.routes).filter(p => !p.startsWith('/archive') && p !== '/sitemap.xml' && p !== '/_not-found')
const report = { routes: [], redirects: [], assets: [], responsive: [], browserErrors: [] }
for (const route of [...current, ...archiveRoutes]) {
  const response = await fetch(base + route)
  assert.equal(response.status, 200, route)
  const html = await response.text()
  assert.match(html, /<h1[ >]/, `${route}: missing page title`)
  if (route.startsWith('/archive')) assert.match(html, /noindex/, `${route}: archive indexing`)
  else assert.match(html, /rel="canonical"/, `${route}: missing canonical`)
  report.routes.push({ route, status: response.status })
}
for (const { source, destination } of redirects) {
  const response = await fetch(base + source, { redirect: 'manual' })
  assert.equal(response.status, 308, source)
  assert.equal(new URL(response.headers.get('location'), base).href, new URL(destination, base).href, source)
  report.redirects.push({ source, destination, status: response.status })
}
for (const route of ['/work/does-not-exist', '/this-page-does-not-exist', '/archive/does-not-exist']) {
  const response = await fetch(base + route)
  assert.equal(response.status, 404, route)
}
const inventory = JSON.parse(fs.readFileSync(`${output}/original-inventory.json`, 'utf8'))
assert.deepEqual(Object.keys(legacyRoutes).sort(), inventory.routes.sort(), 'Original route coverage')
for (const asset of [...inventory.files.filter(p => p.startsWith('public/')), 'public/archive-assets/resume-before-redesign.pdf']) {
  const url = base + encodeURI(asset.replace(/^public/, ''))
  const response = await fetch(url, { method: 'HEAD' })
  assert.equal(response.status, 200, asset)
  report.assets.push(asset)
}
const archivedResume = Buffer.from(await (await fetch(`${base}/archive-assets/resume-before-redesign.pdf`)).arrayBuffer())
assert.ok(archivedResume.equals(fs.readFileSync('public/archive-assets/resume-before-redesign.pdf')), 'Archived resume bytes')
for (const asset of ['resume-siddharth-magesh.pdf', 'graduate_papers/CSCI_544_PAPER_REPORT.pdf', 'graduate_papers/detailed_verification_report.pdf']) {
  const response = await fetch(`${base}/${asset}`)
  assert.equal(response.status, 200, asset)
  assert.ok(Buffer.from(await response.arrayBuffer()).equals(fs.readFileSync(`public/${asset}`)), `${asset}: current download bytes`)
}
const sitemap = await (await fetch(`${base}/sitemap.xml`)).text()
assert.ok(!sitemap.includes('/archive') && !sitemap.includes('siddharthmagesh.com'), 'Sitemap scope')

const browser = await chromium.launch({ channel: 'msedge', headless: true })
try {
  const page = await browser.newPage()
  page.on('pageerror', e => report.browserErrors.push(e.message))
  const links = new Set()
  for (const width of [320, 390, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 960 })
    for (const route of ['/', '/work/sentimatrix']) {
      await page.goto(base + route)
      await page.locator('h1').waitFor()
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth > innerWidth)
      assert.equal(overflow, false, `${route} overflows at ${width}`)
      assert.equal(await page.locator('h1').count(), 1, `${route}: heading hierarchy`)
      if (route === '/') {
        assert.equal(await page.locator('#research .work-entry').count(), 2)
        assert.equal(await page.locator('#projects .work-entry').count(), 3)
        assert.equal(await page.locator('#awards').count(), 1)
        assert.equal(await page.locator('#overview #awards').count(), 1)
        const awards = await page.locator('#awards').boundingBox()
        const research = await page.locator('#research').boundingBox()
        assert.ok(awards.y + awards.height <= research.y, `Awards precede research at ${width}`)
        assert.equal(await page.locator('#experience .experience-row').count(), 6)
        assert.equal(await page.locator('.service-timeline h4').count(), 3)
        assert.ok(await page.locator('.portrait').isVisible(), `Portrait visible at ${width}`)
        await page.locator('.portrait').evaluate(img => img.decode())
        const portrait = await page.locator('.portrait').boundingBox()
        const education = await page.locator('#education').boundingBox()
        assert.ok(portrait.width >= 200 && education.y >= portrait.y + portrait.height, `Photo/education layout at ${width}`)
        for (const href of ['http://sentimatrix.siddharth-magesh.me/', 'https://github.com/Siddharth-magesh/deep-learning-sandbox', 'https://github.com/Web-Developer-VEC', 'https://velammal.edu.in/webteam']) assert.equal(await page.locator(`#projects a[href="${href}"]`).count(), 1)
      }
      report.responsive.push({ route, width, overflow })
      if (width === 390 || width === 1440) {
        await page.screenshot({ path: `${output}/${route === '/' ? 'homepage' : 'case-study'}-${width}.png`, fullPage: true })
        if (route === '/') await page.screenshot({ path: `${output}/homepage-opening-${width}.png` })
      }
      for (const href of await page.locator('a[href]').evaluateAll(as => as.map(a => a.getAttribute('href')))) if (href.startsWith('/')) links.add(href)
    }
  }
  // Native wrapping navigation: every link is visible at the narrowest viewport.
  await page.setViewportSize({ width: 320, height: 800 })
  await page.goto(base)
  for (const link of await page.locator('nav[aria-label="Main navigation"] a').all()) assert.ok(await link.isVisible())
  await page.keyboard.press('Tab')
  assert.equal(await page.locator(':focus').innerText(), 'Skip to content')
  await page.keyboard.press('Enter')
  assert.equal(await page.locator(':focus').getAttribute('id'), 'main-content')
  await page.locator('nav[aria-label="Main navigation"]').getByRole('link', { name: 'Research', exact: true }).click()
  await page.waitForURL('**/#research')
  assert.ok(await page.locator('#research').evaluate(e => e.getBoundingClientRect().top >= -2))
  await page.goto(base + '/work/sentimatrix')
  await page.getByRole('link', { name: '← Back to projects' }).click()
  await page.waitForURL('**/projects')
  await page.goBack()
  assert.equal(new URL(page.url()).pathname, '/work/sentimatrix')

  // Cross-root navigation must reset the document's CSS and providers.
  for (const width of [390, 1440]) {
    await page.setViewportSize({ width, height: 960 })
    await page.goto(base)
    const before = await page.locator('body').evaluate(e => getComputedStyle(e).backgroundColor)
    await page.getByRole('link', { name: /Earlier portfolio \(archive\)/ }).click()
    await page.waitForURL('**/archive')
    await page.getByText('Earlier portfolio - preserved as a historical record.', { exact: false }).waitFor()
    // Legacy homepage intentionally retains its original short loading sequence.
    await page.getByRole('heading', { name: /Advancing the Future/ }).waitFor()
    const height = await page.evaluate(() => document.documentElement.scrollHeight)
    for (let y = 0; y < height; y += 600) {
      await page.evaluate(y => window.scrollTo(0, y), y)
      await page.waitForTimeout(150)
    }
    await page.evaluate(() => window.scrollTo(0, 0))
    await page.waitForTimeout(800)
    await page.screenshot({ path: `${output}/archive-${width}.png`, fullPage: true })
    const badLinks = await page.locator('a[href^="/"]').evaluateAll(as => as.map(a => a.getAttribute('href')).filter(h => h !== '/' && !h.startsWith('/archive') && !/\.[a-z0-9]+(?:[?#].*)?$/i.test(h)))
    assert.deepEqual(badLinks, [], 'Archive navigation escaped')
    await page.getByRole('link', { name: 'View the current portfolio.' }).click()
    await page.waitForURL(base + '/')
    const after = await page.locator('body').evaluate(e => getComputedStyle(e).backgroundColor)
    assert.equal(before, after, 'Cross-root style leakage')
  }
  // 200% zoom-equivalent layout: a 1280 CSS-pixel window becomes 640 CSS pixels.
  await page.setViewportSize({ width: 640, height: 450 })
  await page.goto(base)
  assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false)
  await page.emulateMedia({ reducedMotion: 'reduce' })
  assert.equal(await page.locator('html').evaluate(e => getComputedStyle(e).scrollBehavior), 'auto')
  for (const href of links) assert.equal((await fetch(base + href)).status, 200, href)
  assert.deepEqual(report.browserErrors, [], 'Browser runtime errors')
} finally { await browser.close() }
fs.writeFileSync(`${output}/verification.json`, JSON.stringify(report, null, 2) + '\n')
console.log(`PASS: ${report.routes.length} pages, ${report.redirects.length} redirects, ${report.assets.length} assets, responsive/keyboard/navigation checks, and six screenshots.`)
