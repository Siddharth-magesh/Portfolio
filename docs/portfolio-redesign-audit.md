# Portfolio redesign audit

Snapshot: October 2, 2026. Original commit: `5695ec7b4f9e2190217861b13a7c50395cc15151` (March 11, 2026). Work remains local on the existing `main` checkout; no commits, pushes, or deployments were made. The two supplied untracked files were preserved.

## Actual application

- Next.js 15.2.6, React 19, TypeScript 5, Tailwind 4. The existing runtime configuration has no static export or basePath. No hosting/DNS change is needed.
- 31 original page routes, all listed in `redesign/original-inventory.json`, with their tracked assets. README is minimal. Existing design/task documents describe the older site and sometimes stale framework/configuration details.
- The old root loaded Google fonts, global Tailwind styles, loading providers, scroll effects, analytics, and obsolete person metadata. Its providers and CSS now belong only to the archive root. Current pages are server rendered and use Georgia/system sans-serif without animation dependencies.
- Routing is explicit in `lib/portfolio-routes.mjs`. Current work is generated from one typed registry. The archive has its own real path segment and root document; crossing the boundary uses document navigation.
- npm is used because a package-lock and installed npm dependencies are present. The pnpm lockfile was preserved but not regenerated; use npm for this working copy. New dev dependencies are lint configuration and Playwright for migration verification. No application framework upgrade was performed.

## Baseline

- The original production build passed after permitting its Google font downloads. Initial sandbox execution failed fetching DM Sans and Space Grotesk; this was an environment access issue, not an application compile failure.
- `npm run lint` originally opened an interactive setup prompt: ESLint was not configured or installed. A Next 15-compatible lint setup now provides a repeatable check. Legacy-only rules suppress existing unescaped prose, raw-image, unused-variable, and `any` noise. The no-HTML-navigation rule is disabled only in files intentionally crossing root documents.
- Baseline desktop/mobile captures are in `redesign/before-*.png`.
- Standalone typechecking immediately after migration saw stale generated `.next/types` imports. Regenerating with the production build is required before the final typecheck.

## Source review

The redesign brief and local source establish current editorial content. S1 (`Profile (1)(2).pdf`) and S2 (`current.pdf`) were not supplied in the checkout. The existing multi-page résumé has old contact/education data and is not S2. Its bytes were retained and separately copied to the archive. The current UI honestly labels the download “Earlier résumé (PDF).”

Read the existing project/experience content and relevant report/certificate text. Verified SGBC internship dates; exact NLP, TensorFlow, Generative AI, and PyTorch credential titles; Breathy Sweet report limitations; MT-ERBS manuscript authorship and conflicting evaluation language. Inspected the existing portrait and two candidate project diagrams. The latter describe wider/historical designs and were not repurposed as evidence of a current implementation.

The reference site was consulted for concise information hierarchy only: <https://spkreddy.org/>. Next root-layout guidance: <https://nextjs.org/docs/app/api-reference/file-conventions/route-groups>. Public package details were checked at <https://pypi.org/project/sentimatrix/>. The live portfolio and some GitHub repositories could not be retrieved through the web reader; no successful remote source-code audit is claimed.

## Verification

Use the final `redesign/verification.json` for actual route/asset/responsive results and the handoff notes for command outcomes. `scripts/verify-portfolio.mjs` checks production HTTP status, original-route coverage, exact 308 destinations, unknown-route 404s, archived résumé bytes, canonical/noindex policy, sitemap scope, responsive overflow, keyboard access, Back navigation, reduced motion, and cross-root style isolation. Screenshots cover the homepage, Sentimatrix case study, and archive at desktop/mobile sizes.

Native browser-control surfaces were unavailable; browser verification uses the installed Edge browser in headless Playwright. The 200% check uses equivalent CSS viewport reflow, not an OS browser zoom interaction. No Lighthouse score or full external-link validation is claimed.
