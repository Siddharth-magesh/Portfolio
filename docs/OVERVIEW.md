# Portfolio Codebase Overview

> Last Updated: 2026-02-03

## Project Summary

A modern AI researcher portfolio built with cutting-edge technologies showcasing research projects, professional experience, leadership roles, and technical skills.

---

## Tech Stack

| Category | Technology | Version |
|----------|------------|---------|
| Framework | Next.js | 15.2.4 |
| UI Library | React | 19 |
| Language | TypeScript | 5 |
| Styling | Tailwind CSS | 4.1.9 |
| Components | shadcn/ui | latest |
| Icons | Lucide React | - |
| Forms | React Hook Form | 7.60.0 |
| Validation | Zod | 3.25.67 |
| Email | EmailJS | 4.4.1 |
| Theme | next-themes | 0.4.6 |
| Analytics | Vercel Analytics | 1.5.0 |

---

## Directory Structure

```
Portfolio-main/
├── app/                          # Next.js App Router
│   ├── page.tsx                  # Home page
│   ├── layout.tsx                # Root layout
│   ├── globals.css               # Global styles
│   ├── about/                    # About page
│   ├── research/                 # Research hub (3 projects)
│   │   ├── ossarth/
│   │   ├── mterbs/
│   │   └── ecofloater/
│   ├── projects/                 # Projects (8+ projects)
│   ├── experience/               # Work experience (4 positions)
│   ├── leadership/               # Leadership roles
│   ├── hackathons/               # Events portfolio
│   ├── articles/                 # Blog articles (4 articles)
│   └── contact/                  # Contact form
├── components/                   # React components
│   ├── ui/                       # shadcn/ui (40+ components)
│   ├── navigation.tsx
│   ├── footer.tsx
│   └── loading-screen.tsx
├── contexts/                     # React Context
├── hooks/                        # Custom hooks
├── lib/                          # Utilities
├── styles/                       # Legacy styles (TO REMOVE)
└── public/                       # Static assets
    ├── CERTIFICATIONS/           # PDF certificates
    ├── research-papers/
    ├── images/
    └── hackathons/
```

---

## Pages & Routes

| Route | Description | Status |
|-------|-------------|--------|
| `/` | Home - Hero, stats, features | Active |
| `/about` | Bio, education, resume | Active |
| `/research` | Research hub | Active |
| `/research/ossarth` | OSSARTH AI-OS project | Active |
| `/research/mterbs` | MT-ERBS Traffic Control | Active |
| `/research/ecofloater` | Ecofloater Water Drone | Active |
| `/projects` | Project portfolio | Active |
| `/projects/[slug]` | Individual projects | Active |
| `/experience` | Work history | Active |
| `/leadership` | Leadership roles | Active |
| `/hackathons` | Events & hackathons | Active |
| `/articles` | Blog articles | Active |
| `/contact` | Contact form | Active |

---

## Current State Assessment

### Quality Score: 7.5/10

**Strengths:**
- Modern tech stack (React 19, Next.js 15, Tailwind v4)
- Clean component architecture
- Good responsive design
- Dark mode support
- Comprehensive content

**Weaknesses:**
- Build errors ignored in config
- Unoptimized images
- No form validation
- Bloated unused components
- Hardcoded values scattered
- No error handling
- Zero tests

---

## Configuration Issues

### next.config.mjs (CRITICAL)

```javascript
// Current (PROBLEMATIC)
const nextConfig = {
  typescript: { ignoreBuildErrors: true },  // HIDING ERRORS
  eslint: { ignoreDuringBuilds: true },     // NO QUALITY CHECKS
  images: { unoptimized: true },            // SLOW LOADING
};
```

### Files to Remove

- `/styles/globals.css` - Duplicate, unused

### Missing Files

- `.env.example` - Environment variables template
- `error.tsx` - Error boundary
- `not-found.tsx` - 404 page
- `robots.txt` - SEO
- `sitemap.xml` - SEO

---

## External Links Inventory

### Social Profiles
| Platform | URL | Needs Verification |
|----------|-----|-------------------|
| GitHub | github.com/Siddharth-Magesh | Yes |
| LinkedIn | linkedin.com/in/siddharth-magesh | Yes |
| Dev.to | dev.to/siddharth_magesh_e12b8505 | Yes |
| Medium | medium.com/@siddharthmagesh007 | Yes |
| HackerRank | hackerrank.com/profile/siddharthmagesh2 | Yes |
| HuggingFace | huggingface.co/siddharth-magesh | Yes |
| Kaggle | kaggle.com/siddharthmagesh | Yes |
| Devfolio | devfolio.co/@SiddharthMagesh | Yes |

### Project Links
| Project | External URL | GitHub |
|---------|--------------|--------|
| OSSARTH | siddharth-magesh.github.io/Ossarth-Website | - |
| Sentimatrix | pypi.org/project/Sentimatrix/0.1.7 | - |
| Scrapify | scrapifyecotech.in/ecofloater | - |

---

## Dependencies Audit

### Actively Used (Keep)
- All Radix UI primitives
- next, react, react-dom
- tailwindcss, postcss
- lucide-react
- emailjs-browser
- next-themes
- recharts
- zod, react-hook-form

### Potentially Unused (Review)
- Many shadcn/ui components in `/components/ui/`
- Only ~6 of 40+ components actually used

---

## Next Steps

See [IMPROVEMENTS.md](./IMPROVEMENTS.md) for detailed improvement tasks.
See [TASKS.md](./TASKS.md) for actionable checklist.
See [LINKS-UPDATE.md](./LINKS-UPDATE.md) for link verification tasks.
See [STYLE-GUIDE.md](./STYLE-GUIDE.md) for design system documentation.
