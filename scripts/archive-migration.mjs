// One-time mechanical migration. Run only against the recorded pre-redesign tree.
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const walk = dir => fs.readdirSync(dir, { withFileTypes: true }).flatMap(e => e.isDirectory() ? walk(path.join(dir, e.name)) : [path.join(dir, e.name)]);
if (fs.existsSync('app/(legacy)')) throw new Error('Archive already exists; refusing to repeat migration.');
const pages = walk('app').filter(f => f.endsWith('page.tsx'));
const routes = pages.map(f => '/' + path.dirname(f).replace(/^app[\\/]?/, '').replaceAll('\\', '/')).sort();
const inventory = execFileSync('git', ['ls-files'], { encoding: 'utf8' }).trim().split('\n');
fs.mkdirSync('docs/redesign', { recursive: true });
fs.writeFileSync('docs/redesign/original-inventory.json', JSON.stringify({ commit: execFileSync('git', ['rev-parse', 'HEAD'], { encoding: 'utf8' }).trim(), snapshot: new Date().toISOString(), routes, files: inventory }, null, 2) + '\n');
fs.mkdirSync('public/archive-assets', { recursive: true });
fs.copyFileSync('public/resume-siddharth-magesh.pdf', 'public/archive-assets/resume-before-redesign.pdf');
const mapUrl = url => {
  if (url === '/resume-siddharth-magesh.pdf') return '/archive-assets/resume-before-redesign.pdf';
  const local = url.replace(/^https:\/\/(?:siddharthmagesh\.com|siddharth-magesh\.me)(?=\/|$)/, '') || '/';
  const base = local.split(/[?#]/)[0];
  return routes.includes(base) ? '/archive' + (base === '/' ? '' : base) + local.slice(base.length) : url;
};
const rebase = source => source.replace(/(["'`])((?:\/|https:\/\/(?:siddharthmagesh\.com|siddharth-magesh\.me))[^"'`\s<>]*)\1/g, (match, quote, url) => quote + mapUrl(url) + quote);
for (const file of walk('app').filter(f => !f.endsWith('sitemap.ts'))) {
  const relative = path.relative('app', file);
  const dest = path.join('app/(legacy)/archive', relative);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, rebase(fs.readFileSync(file, 'utf8')));
  fs.unlinkSync(file);
}
for (const dir of ['components', 'contexts']) for (const file of walk(dir).filter(f => /\.(tsx?|jsx?)$/.test(f))) {
  const before = fs.readFileSync(file, 'utf8');
  const after = rebase(before);
  if (before !== after) fs.writeFileSync(file, after);
}
console.log(`Preserved ${routes.length} pages and the original résumé. All route literals rebased; assets stay at original URLs.`);
