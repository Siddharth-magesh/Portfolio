# Maintaining the portfolio

## Profile and section content

Edit `content/profile.ts` for biography, contact links, education, experience rows, service, awards, and credentials. Shared server components use this data on both the homepage and indexes. Preserve safe wording where the internal ledger flags conflicts.

## Work pages

Add one `WorkEntry` to `content/work.ts` (current work) or `content/earlier-work.ts` (earlier work). Set a stable slug, title, subtitle, summary, kind, ordinary-language status, and supported context/dates. Add substantive sections and verified resource links. Set `publish: true` only when ready. Unpublished entries are excluded from generated routes and sitemap.

`homepage: "research"` or `homepage: "projects"` selects an entry for the homepage. Keep three research and two project entries. The order in the current-work array is the display order. Update the research/projects index grouping when promoting a new entry. Each item retains one canonical `/work/slug` page regardless of which categories reference it.

Use the internal ledger for sources and conflicts; never add internal provenance fields to public content. Label evaluation plans as proposed, distinguish architecture from implementation, and require evidence before adding measurements or publication status.

## Résumé replacement

The supplied `current.pdf` is missing. Until received, the interface labels the existing download “Earlier résumé (PDF).” After reviewing the new file, copy its exact bytes to `public/resume-siddharth-magesh.pdf`, compare SHA-256 hashes, and change `profile.resumeLabel` to `Résumé (PDF)`. Do not change `public/archive-assets/resume-before-redesign.pdf` or the archived links. Do not generate a replacement résumé from website text.

## Links and verification

Store public document links with exact capitalization/spaces; the UI encodes them. Do not publish the entire internal documents directory. Use descriptive link names. Set page-specific metadata/canonical paths for new section pages and add them to the sitemap.

After changes run build, typecheck, lint, and the production verification script. Review generated desktop/mobile screenshots in `docs/redesign`. No deployment or GitHub push is part of this local workflow.
