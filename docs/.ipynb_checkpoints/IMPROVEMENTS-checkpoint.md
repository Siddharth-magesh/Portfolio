# Portfolio Improvements Guide

> Last Updated: 2026-02-03

This document outlines all improvements needed to transform this portfolio into a professional, production-ready website.

---

## Priority 1: Critical Fixes

### 1.1 Fix Build Configuration
**File:** `next.config.mjs`

**Problem:** Build errors are silently ignored, hiding bugs.

**Current:**
```javascript
const nextConfig = {
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  images: { unoptimized: true },
};
```

**Fix:**
```javascript
const nextConfig = {
  typescript: { ignoreBuildErrors: false },
  eslint: { ignoreDuringBuilds: false },
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};
```

**Status:** [ ] Not Started

---

### 1.2 Remove Duplicate Styles
**File:** `/styles/globals.css`

**Action:** Delete this file entirely. Only `/app/globals.css` is used.

**Status:** [ ] Not Started

---

### 1.3 Add Form Validation
**File:** `/app/contact/page.tsx`

**Problem:** Contact form has no client-side validation despite React Hook Form and Zod being installed.

**Implementation:**
```typescript
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(20, "Message must be at least 20 characters"),
});
```

**Status:** [ ] Not Started

---

### 1.4 Create Environment Template
**File:** `.env.example` (create new)

**Content:**
```env
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id

# Analytics (optional)
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=your_analytics_id
```

**Status:** [ ] Not Started

---

## Priority 2: Code Quality

### 2.1 Add Error Boundaries
**Files to create:**
- `/app/error.tsx` - Global error boundary
- `/app/not-found.tsx` - Custom 404 page

**Status:** [ ] Not Started

---

### 2.2 Create useMounted Hook
**File:** `/hooks/use-mounted.ts` (create new)

**Purpose:** Centralize hydration safety pattern used across multiple components.

```typescript
import { useState, useEffect } from 'react';

export function useMounted() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
}
```

**Status:** [ ] Not Started

---

### 2.3 Remove Unused shadcn Components
**Location:** `/components/ui/`

**Used (Keep):**
- button.tsx
- card.tsx
- badge.tsx
- carousel.tsx
- input.tsx
- textarea.tsx
- toast.tsx, toaster.tsx, use-toast.ts

**Potentially Remove (40+ files):**
- accordion.tsx
- alert-dialog.tsx
- avatar.tsx
- breadcrumb.tsx
- calendar.tsx
- chart.tsx
- checkbox.tsx
- collapsible.tsx
- command.tsx
- context-menu.tsx
- dialog.tsx
- drawer.tsx
- dropdown-menu.tsx
- form.tsx
- hover-card.tsx
- input-otp.tsx
- label.tsx
- menubar.tsx
- navigation-menu.tsx
- pagination.tsx
- popover.tsx
- progress.tsx
- radio-group.tsx
- resizable.tsx
- scroll-area.tsx
- select.tsx
- separator.tsx
- sheet.tsx
- sidebar.tsx
- skeleton.tsx
- slider.tsx
- sonner.tsx
- switch.tsx
- table.tsx
- tabs.tsx
- toggle.tsx
- toggle-group.tsx
- tooltip.tsx

**Status:** [ ] Not Started

---

### 2.4 Consolidate Theme Colors
**Problem:** Hardcoded colors like `bg-slate-100`, `text-green-800` bypass theme system.

**Fix:** Replace with CSS variables or create semantic color classes.

**Files to update:**
- `/app/page.tsx` - Hero badges
- Various project pages - Status badges
- Navigation - Hover states

**Status:** [ ] Not Started

---

## Priority 3: UX Improvements

### 3.1 Fix Mobile Menu
**File:** `/components/navigation.tsx`

**Problem:** Menu doesn't close when navigating to new page.

**Fix:** Add effect to close menu on route change:
```typescript
import { usePathname } from 'next/navigation';

const pathname = usePathname();

useEffect(() => {
  setIsMenuOpen(false);
}, [pathname]);
```

**Status:** [ ] Not Started

---

### 3.2 Add Skeleton Loaders
**Files:** Project pages, article pages

**Purpose:** Prevent layout shift while images load.

**Status:** [ ] Not Started

---

### 3.3 Add Loading States
**Problem:** No feedback during form submission or page transitions.

**Fix:** Add loading spinners to buttons, skeleton components.

**Status:** [ ] Not Started

---

### 3.4 Improve Accessibility
**Tasks:**
- [ ] Add skip-to-content link
- [ ] Ensure all images have alt text
- [ ] Add focus visible styles
- [ ] Test with screen reader
- [ ] Add aria-labels to icon-only buttons

**Status:** [ ] Not Started

---

## Priority 4: SEO & Performance

### 4.1 Add SEO Files
**Create:**
- `/public/robots.txt`
- `/app/sitemap.ts` (dynamic sitemap)

**Status:** [ ] Not Started

---

### 4.2 Add Meta Tags
**File:** `/app/layout.tsx`

**Add:**
```typescript
export const metadata: Metadata = {
  metadataBase: new URL('https://your-domain.com'),
  title: {
    default: 'Siddharth Magesh | AI Researcher & Developer',
    template: '%s | Siddharth Magesh',
  },
  description: 'AI researcher specializing in...',
  keywords: ['AI', 'Machine Learning', 'Research', ...],
  authors: [{ name: 'Siddharth Magesh' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    // ...
  },
  twitter: {
    card: 'summary_large_image',
    // ...
  },
};
```

**Status:** [ ] Not Started

---

### 4.3 Optimize Images
**Tasks:**
- [ ] Convert large PNGs to WebP
- [ ] Add proper dimensions to all images
- [ ] Use Next.js Image component with fill/sizes
- [ ] Add blur placeholders

**Status:** [ ] Not Started

---

### 4.4 Add Structured Data
**Purpose:** Improve search engine understanding.

**Add JSON-LD for:**
- Person schema
- Organization schema
- Article schema (for blog posts)
- Project schema

**Status:** [ ] Not Started

---

## Priority 5: Professional Polish

### 5.1 Improve Animations
**Current:** Basic hover transitions
**Goal:** Subtle, professional micro-interactions

**Add:**
- Page transition animations (Framer Motion)
- Staggered list animations
- Scroll-triggered reveals
- Button click feedback

**Status:** [ ] Not Started

---

### 5.2 Enhance Typography
**Tasks:**
- [ ] Review font scale consistency
- [ ] Add proper line-height for readability
- [ ] Ensure heading hierarchy
- [ ] Add text-balance for headings

**Status:** [ ] Not Started

---

### 5.3 Improve Card Designs
**Goal:** More distinctive, less "AI-generated" look

**Ideas:**
- Asymmetric layouts
- Varied card sizes
- Image focal points
- Subtle gradients/overlays
- Custom hover states per section

**Status:** [ ] Not Started

---

### 5.4 Add Interactive Elements
**Ideas:**
- Skills visualization (animated chart)
- Project timeline
- Interactive code snippets
- GitHub contribution graph
- Live project previews

**Status:** [ ] Not Started

---

## Priority 6: Content Updates

### 6.1 Verify All External Links
See [LINKS-UPDATE.md](./LINKS-UPDATE.md)

**Status:** [ ] Not Started

---

### 6.2 Update Project Information
**Tasks:**
- [ ] Review all project descriptions
- [ ] Update GitHub repository links
- [ ] Add latest project screenshots
- [ ] Update tech stacks used

**Status:** [ ] Not Started

---

### 6.3 Refresh Certifications
**Tasks:**
- [ ] Add any new certificates
- [ ] Remove expired/irrelevant ones
- [ ] Organize by category
- [ ] Add dates to all certificates

**Status:** [ ] Not Started

---

## Implementation Order

1. **Week 1:** Priority 1 (Critical fixes)
2. **Week 2:** Priority 2 (Code quality)
3. **Week 3:** Priority 3 (UX improvements)
4. **Week 4:** Priority 4 (SEO & Performance)
5. **Ongoing:** Priority 5-6 (Polish & Content)

---

## Progress Tracking

| Priority | Total Tasks | Completed | Remaining |
|----------|-------------|-----------|-----------|
| P1 | 4 | 0 | 4 |
| P2 | 4 | 0 | 4 |
| P3 | 4 | 0 | 4 |
| P4 | 4 | 0 | 4 |
| P5 | 4 | 0 | 4 |
| P6 | 3 | 0 | 3 |
| **Total** | **23** | **0** | **23** |

---

## Notes

- Always test changes locally before deploying
- Create feature branches for major changes
- Update this document as tasks are completed
- Reference specific file:line when documenting issues
