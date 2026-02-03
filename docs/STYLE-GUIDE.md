# Portfolio Style Guide

> Last Updated: 2026-02-03 (Updated with implemented patterns)

This document defines the design system, patterns, and guidelines for maintaining visual consistency across the portfolio.

---

## Color System

### Current Theme (OkLCH Color Space)

```css
/* Light Mode */
--background: oklch(1 0 0);                    /* Pure white */
--foreground: oklch(0.25 0.02 264);           /* Charcoal */
--primary: oklch(0.25 0.15 264);              /* Dark blue */
--primary-foreground: oklch(1 0 0);           /* White */
--secondary: oklch(0.6 0.2 264);              /* Sky blue */
--secondary-foreground: oklch(0.25 0.15 264); /* Dark blue */
--muted: oklch(0.97 0.01 264);                /* Light gray */
--muted-foreground: oklch(0.45 0.02 264);     /* Medium gray */
--accent: oklch(0.6 0.2 264);                 /* Sky blue */
--destructive: oklch(0.55 0.2 25);            /* Red */
--border: oklch(0.9 0.01 264);                /* Light border */

/* Dark Mode */
--background: oklch(0.15 0.02 264);           /* Near black */
--foreground: oklch(0.95 0.01 264);           /* Off white */
--primary: oklch(0.98 0 0);                   /* White */
--primary-foreground: oklch(0.2 0.1 264);     /* Dark navy */
--secondary: oklch(0.2 0.1 264);              /* Dark navy */
--secondary-foreground: oklch(0.95 0 0);      /* Off white */
```

### Semantic Colors (Avoid Hardcoding)

| Purpose | Light Mode | Dark Mode | Usage |
|---------|------------|-----------|-------|
| Primary Action | Dark blue | White | Buttons, links |
| Secondary Action | Sky blue | Dark navy | Secondary buttons |
| Success | Green tones | Green tones | Status badges |
| Warning | Amber tones | Amber tones | Alerts |
| Error | Red tones | Red tones | Validation errors |
| Info | Blue tones | Blue tones | Informational |

### Implemented Theme-Aware Utilities (globals.css)

```css
/* Category pills for page badges */
.category-pill {
  @apply px-4 py-2 text-sm font-semibold bg-muted text-foreground border border-border rounded-full;
}

/* Status badges with dark mode support */
.badge-success { @apply bg-success-muted text-success-foreground border-success/30; }
.badge-warning { @apply bg-warning-muted text-warning-foreground border-warning/30; }
.badge-info { @apply bg-info-muted text-info-foreground border-info/30; }
.badge-neutral { @apply bg-muted text-muted-foreground border-border; }

/* Link cards for certificate lists */
.link-card { @apply block p-2 rounded transition-colors hover:bg-muted; }
```

### Best Practices

```tsx
// BAD - Hardcoded colors (avoid these)
<Badge className="bg-slate-100 text-slate-800">...</Badge>
<Badge className="bg-green-100 text-green-800">...</Badge>

// GOOD - Use theme-aware utilities
<Badge className="category-pill">AI Researcher</Badge>
<Badge className="badge-success">Active</Badge>
<Badge className="badge-info">In Progress</Badge>

// GOOD - Use semantic color variables
<span className="text-success">Experienced</span>
<Icon className="text-primary" />
```

---

## Typography

### Font Stack

```css
/* Headings & Display */
font-family: 'Space Grotesk', sans-serif;
font-weight: 500-700;

/* Body Text */
font-family: 'DM Sans', sans-serif;
font-weight: 400-500;
```

### Type Scale

| Element | Size (Mobile) | Size (Desktop) | Weight | Line Height |
|---------|---------------|----------------|--------|-------------|
| H1 | 2.25rem (text-4xl) | 3rem (text-5xl) | 700 | 1.1 |
| H2 | 1.875rem (text-3xl) | 2.25rem (text-4xl) | 600 | 1.2 |
| H3 | 1.5rem (text-2xl) | 1.875rem (text-3xl) | 600 | 1.3 |
| H4 | 1.25rem (text-xl) | 1.5rem (text-2xl) | 500 | 1.4 |
| Body | 1rem (text-base) | 1rem (text-base) | 400 | 1.6 |
| Small | 0.875rem (text-sm) | 0.875rem (text-sm) | 400 | 1.5 |
| Caption | 0.75rem (text-xs) | 0.75rem (text-xs) | 400 | 1.4 |

### Usage Guidelines

```tsx
// Page Title
<h1 className="text-4xl md:text-5xl font-bold tracking-tight">...</h1>

// Section Title
<h2 className="text-3xl md:text-4xl font-semibold">...</h2>

// Card Title
<h3 className="text-xl md:text-2xl font-semibold">...</h3>

// Body Text
<p className="text-base text-muted-foreground leading-relaxed">...</p>
```

---

## Spacing System

### Base Units (Tailwind)

| Token | Value | Usage |
|-------|-------|-------|
| 1 | 0.25rem (4px) | Micro spacing |
| 2 | 0.5rem (8px) | Tight spacing |
| 3 | 0.75rem (12px) | Compact |
| 4 | 1rem (16px) | Default |
| 6 | 1.5rem (24px) | Comfortable |
| 8 | 2rem (32px) | Spacious |
| 12 | 3rem (48px) | Section padding |
| 16 | 4rem (64px) | Large sections |
| 24 | 6rem (96px) | Hero sections |

### Section Patterns

```tsx
// Page Container
<main className="min-h-screen">
  <section className="py-16 md:py-24 px-4 md:px-8">
    <div className="max-w-7xl mx-auto">
      {/* Content */}
    </div>
  </section>
</main>

// Card Grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Cards */}
</div>
```

---

## Component Patterns

### Buttons

```tsx
// Primary (Main actions)
<Button>Get Started</Button>

// Secondary (Alternative actions)
<Button variant="secondary">Learn More</Button>

// Outline (Subtle actions)
<Button variant="outline">View Details</Button>

// Ghost (Icon buttons, minimal UI)
<Button variant="ghost" size="icon">
  <Icon className="h-5 w-5" />
</Button>

// With Icon
<Button>
  <Icon className="mr-2 h-4 w-4" />
  Label
</Button>
```

### Cards

```tsx
// Standard Card
<Card className="p-6 hover:shadow-lg transition-shadow">
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>
    {/* Content */}
  </CardContent>
  <CardFooter>
    {/* Actions */}
  </CardFooter>
</Card>

// Interactive Card (clickable)
<Card className="p-6 cursor-pointer hover:shadow-lg hover:scale-[1.02] transition-all">
  {/* Content */}
</Card>
```

### Badges

```tsx
// Default
<Badge>Label</Badge>

// Secondary (less emphasis)
<Badge variant="secondary">Category</Badge>

// Outline
<Badge variant="outline">Tag</Badge>

// Status Badges (use semantic colors)
<Badge className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
  Active
</Badge>
```

### Icons

```tsx
// Standard size (inline with text)
<Icon className="h-4 w-4" />

// Medium (buttons, cards)
<Icon className="h-5 w-5" />

// Large (feature icons)
<Icon className="h-8 w-8" />

// Hero/Display
<Icon className="h-12 w-12" />
```

---

## Layout Patterns

### Hero Section

```tsx
<section className="relative min-h-[80vh] flex items-center">
  {/* Background gradient */}
  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/10" />

  <div className="relative z-10 container mx-auto px-4">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Text content */}
      <div className="space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
          Heading
        </h1>
        <p className="text-lg text-muted-foreground">
          Description
        </p>
        <div className="flex gap-4">
          <Button>Primary CTA</Button>
          <Button variant="outline">Secondary CTA</Button>
        </div>
      </div>

      {/* Image/Visual */}
      <div className="relative aspect-square">
        {/* Image or illustration */}
      </div>
    </div>
  </div>
</section>
```

### Content Section

```tsx
<section className="py-16 md:py-24">
  <div className="container mx-auto px-4">
    {/* Section Header */}
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Section Title
      </h2>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        Section description
      </p>
    </div>

    {/* Content Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Items */}
    </div>
  </div>
</section>
```

---

## Animation Guidelines

### Transitions

```css
/* Standard transition */
transition: all 200ms ease-out;

/* Hover effects */
transition: transform 200ms ease-out, box-shadow 200ms ease-out;

/* Color transitions */
transition: color 150ms ease-out, background-color 150ms ease-out;
```

### Hover States

```tsx
// Card hover
className="hover:shadow-lg hover:scale-[1.02] transition-all duration-200"

// Button hover (handled by shadcn)
// Link hover
className="hover:text-primary transition-colors"

// Image hover
className="hover:scale-105 transition-transform duration-300"
```

### Loading States

```tsx
// Spinner
<Loader2 className="h-4 w-4 animate-spin" />

// Skeleton
<Skeleton className="h-4 w-[250px]" />

// Progress
<Progress value={progress} className="w-full" />
```

---

## Responsive Design

### Breakpoints

| Breakpoint | Width | Usage |
|------------|-------|-------|
| Default | 0+ | Mobile first base styles |
| sm | 640px+ | Small tablets |
| md | 768px+ | Tablets |
| lg | 1024px+ | Laptops |
| xl | 1280px+ | Desktops |
| 2xl | 1536px+ | Large screens |

### Pattern Examples

```tsx
// Text sizing
className="text-2xl md:text-3xl lg:text-4xl"

// Grid columns
className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"

// Padding
className="px-4 md:px-8 lg:px-12"

// Visibility
className="hidden md:block"        // Show on md+
className="block md:hidden"        // Hide on md+

// Flex direction
className="flex-col md:flex-row"
```

---

## Accessibility Standards

### Focus States

```tsx
// All interactive elements should have visible focus
className="focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
```

### Color Contrast

- Text on background: minimum 4.5:1 ratio
- Large text: minimum 3:1 ratio
- Interactive elements: minimum 3:1 ratio

### ARIA Guidelines

```tsx
// Icon-only buttons
<Button aria-label="Close menu">
  <X className="h-5 w-5" />
</Button>

// Loading states
<Button disabled aria-busy="true">
  <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
  <span>Loading...</span>
</Button>

// Navigation
<nav aria-label="Main navigation">
  {/* Nav items */}
</nav>
```

---

## Dark Mode

### Implementation

```tsx
// Using next-themes
import { useTheme } from "next-themes";

const { theme, setTheme } = useTheme();

// Toggle
<Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
  {theme === "dark" ? <Sun /> : <Moon />}
</Button>
```

### Color Usage

```tsx
// Use CSS variables that auto-switch
className="bg-background text-foreground"
className="border-border"
className="text-muted-foreground"

// Explicit dark mode (when needed)
className="bg-white dark:bg-gray-900"
className="text-gray-900 dark:text-gray-100"
```

---

## Do's and Don'ts

### Do's

- Use CSS variables for colors (`bg-primary`, `text-foreground`)
- Follow mobile-first approach
- Use semantic HTML elements
- Maintain consistent spacing
- Test in both light and dark modes
- Use Tailwind's built-in utilities

### Don'ts

- Don't hardcode colors (`bg-blue-500`, `text-gray-700`)
- Don't use inline styles
- Don't skip heading levels (h1 → h3)
- Don't use `!important` unless absolutely necessary
- Don't create new colors outside the system
- Don't mix rem and px units

---

## File Organization

```
components/
├── ui/                 # shadcn/ui primitives
├── navigation.tsx      # Site navigation
├── footer.tsx          # Site footer
├── hero.tsx           # Hero sections
├── card-*.tsx         # Custom card variants
└── section-*.tsx      # Section components

app/
├── globals.css        # Global styles & CSS variables
├── layout.tsx         # Root layout with providers
└── [page]/
    └── page.tsx       # Page components
```

---

## Resources

- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com)
- [Radix UI Primitives](https://www.radix-ui.com)
- [Lucide Icons](https://lucide.dev)
- [Next.js Image Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/images)
