# Portfolio Tasks Tracker

> Last Updated: 2026-02-03

Use this document to track progress on all portfolio improvements. Update checkboxes as tasks are completed.

---

## Phase 1: Critical Fixes

### Configuration & Build
- [ ] **T1.1** Fix `next.config.mjs` - Enable TypeScript error checking
- [ ] **T1.2** Fix `next.config.mjs` - Enable ESLint during builds
- [ ] **T1.3** Fix `next.config.mjs` - Configure image optimization
- [ ] **T1.4** Remove `/styles/globals.css` duplicate file
- [ ] **T1.5** Create `.env.example` with required variables

### Form Validation
- [ ] **T1.6** Add Zod schema to contact form
- [ ] **T1.7** Integrate React Hook Form properly
- [ ] **T1.8** Add validation error messages UI
- [ ] **T1.9** Add loading state to submit button

---

## Phase 2: Code Quality

### Error Handling
- [ ] **T2.1** Create `/app/error.tsx` global error boundary
- [ ] **T2.2** Create `/app/not-found.tsx` custom 404 page
- [ ] **T2.3** Add error boundary to each major route

### Code Cleanup
- [ ] **T2.4** Create `/hooks/use-mounted.ts` custom hook
- [ ] **T2.5** Refactor components using mounted pattern
- [ ] **T2.6** Audit and remove unused shadcn components
- [ ] **T2.7** Remove any dead code or unused imports

### Theme Consistency
- [ ] **T2.8** Replace hardcoded colors with CSS variables
- [ ] **T2.9** Audit all badge colors for theme compliance
- [ ] **T2.10** Ensure consistent dark mode across all pages

---

## Phase 3: UX Improvements

### Navigation
- [ ] **T3.1** Fix mobile menu auto-close on route change
- [ ] **T3.2** Add active state indicator to nav items
- [ ] **T3.3** Improve mobile menu animation
- [ ] **T3.4** Add keyboard navigation support

### Loading States
- [ ] **T3.5** Add skeleton loaders to project cards
- [ ] **T3.6** Add skeleton loaders to article cards
- [ ] **T3.7** Add loading spinner to form submission
- [ ] **T3.8** Review loading screen timing (currently 3s)

### Accessibility
- [ ] **T3.9** Add skip-to-content link
- [ ] **T3.10** Audit all images for alt text
- [ ] **T3.11** Add focus-visible styles globally
- [ ] **T3.12** Test with keyboard navigation
- [ ] **T3.13** Add aria-labels to icon buttons

---

## Phase 4: SEO & Performance

### SEO
- [ ] **T4.1** Create `/public/robots.txt`
- [ ] **T4.2** Create `/app/sitemap.ts` dynamic sitemap
- [ ] **T4.3** Add comprehensive metadata to layout
- [ ] **T4.4** Add OpenGraph images
- [ ] **T4.5** Add Twitter card metadata
- [ ] **T4.6** Add structured data (JSON-LD)

### Performance
- [ ] **T4.7** Convert large images to WebP format
- [ ] **T4.8** Add proper width/height to all images
- [ ] **T4.9** Implement blur placeholders for images
- [ ] **T4.10** Review and optimize bundle size
- [ ] **T4.11** Add lazy loading to below-fold content

---

## Phase 5: Professional Polish

### Animations
- [ ] **T5.1** Add page transition animations
- [ ] **T5.2** Add scroll-triggered animations
- [ ] **T5.3** Add staggered list animations
- [ ] **T5.4** Improve card hover interactions
- [ ] **T5.5** Add micro-interactions to buttons

### Visual Design
- [ ] **T5.6** Redesign hero section for uniqueness
- [ ] **T5.7** Add asymmetric layouts to break monotony
- [ ] **T5.8** Improve card designs with varied styles
- [ ] **T5.9** Add subtle gradients and overlays
- [ ] **T5.10** Review and improve typography hierarchy

### Interactive Elements
- [ ] **T5.11** Add skills visualization chart
- [ ] **T5.12** Create interactive project timeline
- [ ] **T5.13** Add GitHub activity integration
- [ ] **T5.14** Consider adding project live previews

---

## Phase 6: Content Updates

### Link Verification
- [ ] **T6.1** Verify all GitHub repository links
- [ ] **T6.2** Verify all social media profile links
- [ ] **T6.3** Verify all external project links
- [ ] **T6.4** Update any broken or outdated links
- [ ] **T6.5** Add new projects/repos as needed

### Content Review
- [ ] **T6.6** Review and update project descriptions
- [ ] **T6.7** Update tech stacks on project pages
- [ ] **T6.8** Add latest project screenshots
- [ ] **T6.9** Review experience descriptions
- [ ] **T6.10** Update certifications list

### New Content
- [ ] **T6.11** Add any new research projects
- [ ] **T6.12** Add recent hackathon participations
- [ ] **T6.13** Add new blog articles
- [ ] **T6.14** Update resume PDF

---

## Quick Reference

### Files to Modify
| Task | File Path |
|------|-----------|
| T1.1-T1.3 | `/next.config.mjs` |
| T1.4 | `/styles/globals.css` (delete) |
| T1.5 | `/.env.example` (create) |
| T1.6-T1.9 | `/app/contact/page.tsx` |
| T2.1 | `/app/error.tsx` (create) |
| T2.2 | `/app/not-found.tsx` (create) |
| T2.4 | `/hooks/use-mounted.ts` (create) |
| T3.1 | `/components/navigation.tsx` |
| T4.1 | `/public/robots.txt` (create) |
| T4.2 | `/app/sitemap.ts` (create) |
| T4.3-T4.5 | `/app/layout.tsx` |

### Commands
```bash
# Run development server
npm run dev

# Build (check for errors)
npm run build

# Lint code
npm run lint

# Type check
npx tsc --noEmit
```

---

## Progress Summary

| Phase | Total | Done | Progress |
|-------|-------|------|----------|
| Phase 1: Critical | 9 | 0 | 0% |
| Phase 2: Quality | 10 | 0 | 0% |
| Phase 3: UX | 13 | 0 | 0% |
| Phase 4: SEO | 11 | 0 | 0% |
| Phase 5: Polish | 14 | 0 | 0% |
| Phase 6: Content | 14 | 0 | 0% |
| **TOTAL** | **71** | **0** | **0%** |

---

## Working Notes

Use this section to track notes, blockers, and decisions during implementation.

### Notes
-

### Blockers
-

### Decisions Made
-

---

## Changelog

| Date | Tasks Completed | Notes |
|------|-----------------|-------|
| 2026-02-03 | Created docs | Initial documentation setup |
| | | |

---

*Update this document after completing each task or group of tasks.*
