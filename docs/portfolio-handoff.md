# Local redesign handoff

The current portfolio includes a new responsive academic homepage, seven expanded indexes, and 14 substantive case studies. All 31 old pages remain browsable under `/archive`, with their original assets and historical résumé. Exact old detail URLs redirect to current or archived pages through 26 permanent redirects. Current metadata uses `siddharth-magesh.me`; archive HTML is noindex and excluded from the current sitemap.

## Preview

Local production server: <http://127.0.0.1:3000>. Archive: <http://127.0.0.1:3000/archive>. No code was pushed or deployed.

Screenshots: [desktop homepage](redesign/homepage-1440.png), [mobile homepage](redesign/homepage-390.png), [desktop case study](redesign/case-study-1440.png), [mobile case study](redesign/case-study-390.png), [desktop archive](redesign/archive-1440.png), [mobile archive](redesign/archive-390.png). Opening-viewport homepage captures are also included.

## Validation

- Production build passed with all current and historical routes generated.
- TypeScript check and ESLint passed without warnings/errors.
- Automated production verification passed: 53 pages, 26 exact redirects, 132 public assets, unknown-route 404s, résumé byte comparison, current canonical/archive noindex policy, and sitemap scope.
- Homepage and representative case study checked at 320, 390, 768, 1024, and 1440px, with no page-level horizontal overflow.
- Keyboard skip link, visible mobile navigation, anchor navigation, browser Back, reduced motion, and current → archive → current styling checks passed.
- 200% reflow was checked through an equivalent CSS viewport, not native browser zoom. Lighthouse and a full accessibility scanner were not run; no scores are claimed.

The production build reports 109 kB homepage first-load JavaScript compared with the original 158 kB. This is a bundle report, not a measured real-world load time.

## Outstanding source items

`current.pdf` and `Profile (1)(2).pdf` were not supplied. The brief’s safe current copy is implemented, but the existing PDF has intentionally not been represented as the updated résumé. It is labeled “Earlier résumé (PDF)” until the exact replacement is supplied. The old archived copy must remain unchanged.

The [content ledger](portfolio-content-ledger.md) records date/title/credential/manuscript questions and the MT-ERBS evaluation inconsistency. The [maintenance guide](portfolio-content-guide.md), [audit](portfolio-redesign-audit.md), and [migration/rollback notes](portfolio-migration.md) explain the implementation and update workflow.

The dependency install reported 7 vulnerabilities in the resulting npm tree. No framework/security upgrade was mixed into this content redesign; review dependencies before a future public deployment. This task remains a local preview.
