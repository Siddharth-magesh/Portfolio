# Migration and rollback

Original commit: `5695ec7b4f9e2190217861b13a7c50395cc15151`. Actual snapshot timestamp and complete tracked inventory: `redesign/original-inventory.json`. The checkout originally had only two untracked owner-supplied documents. They remain untouched. No GitHub write or deployment occurred.

## Archive

All 31 original `page.tsx` routes now live in `app/(legacy)/archive`. The legacy root imports its original CSS, Google fonts, providers, and animations. Shared old components are archive-only consumers and their internal links were mechanically rebased. Assets retain their original case-sensitive public URLs. The original résumé is copied to `/archive-assets/resume-before-redesign.pdf` and archived download links point there.

Current and legacy roots each own their HTML document. Explicit anchors at the boundary force a clean document navigation; the two style/provider systems are not stacked. The archive notice is a deliberate addition. Archive HTML has `noindex, follow`, stays crawlable, and is excluded from the sitemap. PDF indexing is unchanged; host-level PDF indexing headers would be a separate deployment decision.

## Route map

`lib/portfolio-routes.mjs` is the authoritative map of every original path, its archive equivalent, and incoming-URL destination. Old detail URLs issue exact HTTP 308 redirects. Current section indexes retain their familiar paths. Leadership goes to organizations; articles and hackathons stay archived; all supported project pages go to `/work/[slug]`. No wildcard redirect can capture a current index. Unknown work slugs and unknown paths return 404.

## Local operation

Use `npm.cmd run build`, then `npm.cmd run start -- --hostname 127.0.0.1 --port 3000` on Windows. Run `npm.cmd run typecheck`, `npm.cmd run lint`, and `npm.cmd run verify:portfolio` against that production server. `PORTFOLIO_URL` selects another local port. Headless screenshot checks use installed Microsoft Edge. Development remains available with `npm.cmd run dev`.

## Recovery

The original tracked source is recoverable from the recorded commit. To review or restore it, create a separate checkout of that commit outside this working copy, install from its package-lock, and build it. Preserve the redesign working tree and user documents before any later replacement. Do not use a destructive reset or overwrite this checkout as a shortcut. The original assets remain intact, and the historical résumé copy can be compared byte for byte.

The one-time `scripts/archive-migration.mjs` refuses to run when an archive already exists. Do not rerun it on the redesigned application. New work belongs in current content files, not the historical snapshot.
