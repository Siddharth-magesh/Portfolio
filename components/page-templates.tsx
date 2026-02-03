"use client"

import { ReactNode } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Calendar, MapPin, ExternalLink, Github, Download, LucideIcon } from "lucide-react"
import { FadeIn, SlideIn, StaggerContainer, StaggerItem } from "@/components/animations"

// ============================================================================
// PAGE HERO SECTION - Consistent hero for all detail pages
// ============================================================================

interface PageHeroProps {
  backLink: string
  backLabel: string
  badge?: string
  badgeVariant?: "default" | "emerald" | "violet" | "amber" | "teal" | "rose"
  title: string
  subtitle?: string
  description: string
  children?: ReactNode
  image?: string
  imageAlt?: string
  accentColor?: "primary" | "emerald" | "violet" | "amber" | "teal" | "rose"
}

const badgeVariantStyles = {
  default: "category-pill",
  emerald: "badge-emerald border",
  violet: "badge-violet border",
  amber: "badge-amber border",
  teal: "badge-teal border",
  rose: "badge-rose border",
}

export function PageHero({
  backLink,
  backLabel,
  badge,
  badgeVariant = "default",
  title,
  subtitle,
  description,
  children,
  image,
  imageAlt,
  accentColor = "primary",
}: PageHeroProps) {
  return (
    <section className="section-padding bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,var(--primary)/0.05,transparent_50%)]" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

      <div className="container-max relative">
        <FadeIn>
          <Button variant="ghost" asChild className="mb-6 hover:bg-muted">
            <Link href={backLink}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              {backLabel}
            </Link>
          </Button>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            {badge && (
              <FadeIn delay={0.1}>
                <Badge variant="secondary" className={badgeVariantStyles[badgeVariant]}>
                  {badge}
                </Badge>
              </FadeIn>
            )}
            <FadeIn delay={0.2}>
              <h1 className="font-heading mt-4 mb-2">{title}</h1>
              {subtitle && (
                <p className="text-lg text-muted-foreground mb-4">{subtitle}</p>
              )}
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {description}
              </p>
            </FadeIn>
            {children && (
              <FadeIn delay={0.4}>
                {children}
              </FadeIn>
            )}
          </div>

          {image && (
            <SlideIn direction="right" delay={0.3}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl blur-xl" />
                <div className="relative aspect-video bg-muted rounded-xl overflow-hidden border border-border">
                  <img
                    src={image}
                    alt={imageAlt || title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </SlideIn>
          )}
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// INFO CARD - Sidebar card for project/experience details
// ============================================================================

interface InfoItem {
  icon?: LucideIcon
  label: string
  value: string | ReactNode
}

interface InfoCardProps {
  title: string
  items: InfoItem[]
  children?: ReactNode
}

export function InfoCard({ title, items, children }: InfoCardProps) {
  return (
    <Card className="sticky top-24">
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="flex items-start space-x-3">
            {item.icon && <item.icon className="h-4 w-4 text-primary mt-0.5" />}
            <div>
              <p className="text-sm text-muted-foreground">{item.label}</p>
              <p className="font-medium">{item.value}</p>
            </div>
          </div>
        ))}
        {children}
      </CardContent>
    </Card>
  )
}

// ============================================================================
// SECTION WRAPPER - Consistent section styling
// ============================================================================

interface SectionProps {
  title?: string
  subtitle?: string
  children: ReactNode
  variant?: "default" | "muted"
  className?: string
}

export function Section({ title, subtitle, children, variant = "default", className = "" }: SectionProps) {
  return (
    <section className={`section-padding ${variant === "muted" ? "bg-muted/30" : ""} ${className}`}>
      <div className="container-max">
        {(title || subtitle) && (
          <FadeIn className="mb-8">
            {title && <h2 className="font-heading mb-2">{title}</h2>}
            {subtitle && <p className="text-lg text-muted-foreground">{subtitle}</p>}
          </FadeIn>
        )}
        {children}
      </div>
    </section>
  )
}

// ============================================================================
// FEATURE CARD - For highlighting key features/achievements
// ============================================================================

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  tags?: string[]
  accentColor?: "primary" | "emerald" | "violet" | "amber" | "teal"
}

const iconBgStyles = {
  primary: "bg-primary/10 text-primary",
  emerald: "bg-emerald/10 text-emerald",
  violet: "bg-violet/10 text-violet",
  amber: "bg-amber/10 text-amber",
  teal: "bg-teal/10 text-teal",
}

export function FeatureCard({ icon: Icon, title, description, tags, accentColor = "primary" }: FeatureCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
      <CardHeader className="pb-3">
        <div className="flex items-center space-x-3">
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${iconBgStyles[accentColor]}`}>
            <Icon className="h-5 w-5" />
          </div>
          <CardTitle className="text-lg">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4 leading-relaxed">{description}</p>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

// ============================================================================
// TECH STACK DISPLAY - Consistent technology badges
// ============================================================================

interface TechStackProps {
  technologies: string[]
  title?: string
}

export function TechStack({ technologies, title = "Technology Stack" }: TechStackProps) {
  return (
    <div>
      <h3 className="font-heading text-lg mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <Badge key={index} variant="outline" className="hover:bg-muted transition-colors">
            {tech}
          </Badge>
        ))}
      </div>
    </div>
  )
}

// ============================================================================
// ACTION BUTTONS - Consistent button group for links
// ============================================================================

interface ActionButtonsProps {
  github?: string
  demo?: string
  website?: string
  download?: { url: string; label: string }
  children?: ReactNode
}

export function ActionButtons({ github, demo, website, download, children }: ActionButtonsProps) {
  return (
    <div className="flex flex-wrap gap-4">
      {github && (
        <Button asChild>
          <Link href={github} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" />
            View Source Code
          </Link>
        </Button>
      )}
      {demo && (
        <Button variant="outline" asChild>
          <Link href={demo} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-2 h-4 w-4" />
            Live Demo
          </Link>
        </Button>
      )}
      {website && (
        <Button variant="outline" asChild>
          <Link href={website} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-2 h-4 w-4" />
            Visit Website
          </Link>
        </Button>
      )}
      {download && (
        <Button
          variant="outline"
          onClick={() => {
            const link = document.createElement("a")
            link.href = download.url
            link.download = download.label
            link.click()
          }}
        >
          <Download className="mr-2 h-4 w-4" />
          {download.label}
        </Button>
      )}
      {children}
    </div>
  )
}

// ============================================================================
// STATS GRID - For displaying metrics/statistics
// ============================================================================

interface Stat {
  value: string
  label: string
}

interface StatsGridProps {
  stats: Stat[]
}

export function StatsGrid({ stats }: StatsGridProps) {
  return (
    <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6" staggerDelay={0.1}>
      {stats.map((stat, index) => (
        <StaggerItem key={index}>
          <Card className="text-center p-6 hover:shadow-md transition-shadow">
            <div className="text-3xl font-heading font-bold text-primary mb-2">{stat.value}</div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </Card>
        </StaggerItem>
      ))}
    </StaggerContainer>
  )
}

// ============================================================================
// TEAM MEMBER CARD - For displaying team members
// ============================================================================

interface TeamMemberProps {
  name: string
  role: string
  icon?: LucideIcon
}

export function TeamMemberCard({ name, role, icon: Icon }: TeamMemberProps) {
  const DefaultIcon = Icon || Calendar
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="text-center">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <DefaultIcon className="h-8 w-8 text-primary" />
        </div>
        <CardTitle className="text-lg">{name}</CardTitle>
        <p className="text-sm text-muted-foreground">{role}</p>
      </CardHeader>
    </Card>
  )
}

// ============================================================================
// TIMELINE ITEM - For displaying chronological events
// ============================================================================

interface TimelineItemProps {
  year: string
  title: string
  description: string
  isCurrent?: boolean
}

export function TimelineItem({ year, title, description, isCurrent }: TimelineItemProps) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <div className={`w-3 h-3 rounded-full ${isCurrent ? "bg-primary" : "bg-muted-foreground"}`} />
        <div className="w-px h-full bg-border" />
      </div>
      <div className="pb-8">
        <Badge variant={isCurrent ? "default" : "outline"} className="mb-2">
          {year}
        </Badge>
        <h4 className="font-heading text-lg mb-1">{title}</h4>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}

// ============================================================================
// PAGE LAYOUT WRAPPER - Full page wrapper with navigation and footer
// ============================================================================

interface PageLayoutProps {
  children: ReactNode
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen">
      <Navigation />
      {children}
      <Footer />
    </div>
  )
}
