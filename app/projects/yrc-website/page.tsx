"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  ArrowLeft,
  Globe,
  Shield,
  Users,
  Zap,
  Search,
  Smartphone,
  Calendar,
  Heart,
  Database,
  Settings,
  Target,
  Rocket,
  Lock,
} from "lucide-react"
import { FadeIn, SlideIn, StaggerContainer, StaggerItem } from "@/components/animations"

export default function YRCWebsiteProjectPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,var(--rose)/0.05,transparent_50%)]" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-rose/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

        <div className="container-max relative">
          <FadeIn>
            <Button variant="ghost" asChild className="mb-6 hover:bg-muted">
              <Link href="/projects">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Link>
            </Button>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <FadeIn delay={0.1}>
                <Badge variant="secondary" className="badge-rose border mb-4">
                  WordPress Platform
                </Badge>
              </FadeIn>
              <FadeIn delay={0.2}>
                <h1 className="font-heading mb-2">YRC Digital Website</h1>
                <p className="text-lg text-muted-foreground mb-4">
                  Official Digital Hub for Youth Red Cross Operations
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  A comprehensive digital platform serving as the primary online presence for Youth Red Cross
                  at Velammal Engineering College. Built with WordPress for robust content management, the website
                  showcases YRC activities, manages member information, facilitates community communication,
                  and provides essential resources for humanitarian service coordination.
                </p>
              </FadeIn>
              <FadeIn delay={0.4}>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>2025 - Ongoing</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button className="bg-rose hover:bg-rose/90 text-white" asChild>
                    <Link href="#" target="_blank" rel="noopener noreferrer">
                      <Globe className="mr-2 h-4 w-4" />
                      Visit Website
                    </Link>
                  </Button>
                </div>
              </FadeIn>
            </div>
            <SlideIn direction="right" delay={0.3}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-rose/10 to-primary/10 rounded-2xl blur-xl" />
                <div className="bg-background rounded-xl border border-border p-6 relative">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-16 h-16 bg-rose/10 rounded-full flex items-center justify-center">
                      <Heart className="h-8 w-8 text-rose" />
                    </div>
                  </div>
                  <div className="text-center mb-4">
                    <p className="text-xl font-bold text-rose">Youth Red Cross</p>
                    <p className="text-muted-foreground">Digital Platform</p>
                  </div>
                  <div className="p-4 bg-amber/10 border border-amber/20 rounded-lg">
                    <p className="text-sm text-center text-muted-foreground">
                      Migration from React to WordPress currently in progress for enhanced content management
                      and scalability.
                    </p>
                  </div>
                </div>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Project Details Grid */}
      <section className="section-padding">
        <div className="container-max">
          <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12" staggerDelay={0.1}>
            <StaggerItem>
              <Card className="card-accent-rose h-full">
                <CardHeader>
                  <Calendar className="h-6 w-6 text-rose mb-2" />
                  <CardTitle className="text-lg">Development Timeline</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="font-medium text-foreground">2025 - Ongoing</p>
                    <p className="text-sm text-muted-foreground">
                      Active development and content migration
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Platform Migration</p>
                    <p className="text-sm text-muted-foreground">
                      Transitioning from React to WordPress CMS
                    </p>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="card-accent-teal h-full">
                <CardHeader>
                  <Settings className="h-6 w-6 text-teal mb-2" />
                  <CardTitle className="text-lg">Platform Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="font-medium text-foreground">WordPress CMS</p>
                    <p className="text-sm text-muted-foreground">Custom theme with YRC branding</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Hostinger</p>
                    <p className="text-sm text-muted-foreground">Optimized WordPress hosting with SSL</p>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="card-accent-emerald h-full">
                <CardHeader>
                  <Target className="h-6 w-6 text-emerald mb-2" />
                  <CardTitle className="text-lg">Project Status</CardTitle>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary" className="badge-amber border mb-3">
                    Active Development
                  </Badge>
                  <p className="text-sm text-muted-foreground">
                    Platform migration underway with focus on robust content management,
                    member portal functionality, and seamless user experience for the
                    YRC community.
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>
          </StaggerContainer>

          {/* Project Overview */}
          <FadeIn>
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="font-heading text-2xl">Project Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  The YRC Digital Website serves as the comprehensive online presence for Youth Red Cross operations
                  at Velammal Engineering College. The platform provides a centralized hub for showcasing humanitarian
                  activities, blood donation campaigns, health awareness programs, and community service initiatives.
                  By migrating to WordPress, the website gains enterprise-level content management capabilities while
                  maintaining the flexibility for non-technical team members to update content easily. The platform
                  integrates member management, event coordination, and resource distribution into a unified digital ecosystem.
                </p>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </section>

      {/* Key Features */}
      <section className="section-padding bg-muted/30">
        <div className="container-max">
          <FadeIn>
            <h2 className="font-heading text-3xl mb-8">Platform Features</h2>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12" staggerDelay={0.1}>
            {[
              {
                icon: Globe,
                title: "Dynamic Content Management",
                description: "WordPress CMS with user-friendly admin interface for easy content updates by non-technical staff",
                color: "rose",
              },
              {
                icon: Smartphone,
                title: "Responsive Design",
                description: "Mobile-first approach ensuring optimal experience across all devices and screen sizes",
                color: "teal",
              },
              {
                icon: Users,
                title: "Member Portal",
                description: "Secure authentication system with personalized dashboards for YRC members",
                color: "violet",
              },
              {
                icon: Search,
                title: "SEO Optimization",
                description: "Search engine optimized content structure for improved visibility and discoverability",
                color: "emerald",
              },
              {
                icon: Lock,
                title: "Security Features",
                description: "SSL encryption, regular updates, and backup systems ensuring data protection",
                color: "amber",
              },
              {
                icon: Database,
                title: "Event Management",
                description: "Custom post types for events, announcements, and member activities coordination",
                color: "rose",
              },
            ].map((feature) => (
              <StaggerItem key={feature.title}>
                <Card className={`card-accent-${feature.color} hover:shadow-md transition-shadow h-full`}>
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-2">
                      <div className={`w-10 h-10 rounded-lg bg-${feature.color}/10 flex items-center justify-center`}>
                        <feature.icon className={`h-5 w-5 text-${feature.color}`} />
                      </div>
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <FadeIn delay={0.1}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Globe className="h-5 w-5 text-rose" />
                    <span>Why WordPress?</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    { title: "Ease of Management", description: "Intuitive CMS for non-technical team members" },
                    { title: "Plugin Ecosystem", description: "Thousands of plugins for enhanced functionality" },
                    { title: "Customization Flexibility", description: "Custom themes tailored for YRC branding" },
                    { title: "Cost-Effective", description: "Open-source platform with enterprise features" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-rose rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-foreground text-sm">{item.title}</p>
                        <p className="text-xs text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Zap className="h-5 w-5 text-teal" />
                    <span>Why Hostinger?</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    { title: "Reliable Performance", description: "99.9% uptime guarantee for constant accessibility" },
                    { title: "WordPress Optimization", description: "Specialized hosting with optimized servers" },
                    { title: "Affordable Pricing", description: "Cost-effective for educational institutions" },
                    { title: "Security Features", description: "Built-in SSL, daily backups, malware protection" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-teal rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-foreground text-sm">{item.title}</p>
                        <p className="text-xs text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </FadeIn>
          </div>

          <FadeIn delay={0.3}>
            <div className="mb-8">
              <h3 className="font-heading text-xl mb-4">Technology Stack</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "WordPress",
                  "PHP",
                  "MySQL",
                  "HTML5",
                  "CSS3",
                  "JavaScript",
                  "Hostinger",
                  "SSL",
                  "SEO",
                  "Responsive Design",
                  "Custom Themes",
                  "REST API",
                ].map((tech) => (
                  <Badge key={tech} variant="outline" className="hover:bg-muted transition-colors">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Technical Implementation */}
      <section className="section-padding">
        <div className="container-max">
          <FadeIn>
            <h2 className="font-heading text-3xl mb-8">Technical Implementation</h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <FadeIn delay={0.1}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-violet" />
                    <span>Core Technologies</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <h4 className="font-medium text-sm mb-1">Content Management</h4>
                    <p className="text-xs text-muted-foreground">
                      WordPress CMS with custom theme development and plugin integration
                    </p>
                  </div>
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <h4 className="font-medium text-sm mb-1">Frontend Technologies</h4>
                    <p className="text-xs text-muted-foreground">
                      HTML5, CSS3, JavaScript, PHP for dynamic content rendering
                    </p>
                  </div>
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <h4 className="font-medium text-sm mb-1">Database Management</h4>
                    <p className="text-xs text-muted-foreground">
                      MySQL for WordPress data storage and retrieval
                    </p>
                  </div>
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <h4 className="font-medium text-sm mb-1">Security Implementation</h4>
                    <p className="text-xs text-muted-foreground">
                      SSL encryption, regular updates, automated backup systems
                    </p>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Settings className="h-5 w-5 text-emerald" />
                    <span>Advanced Features</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <h4 className="font-medium text-sm mb-1">Custom Post Types</h4>
                    <p className="text-xs text-muted-foreground">
                      Specialized content types for events, members, and announcements
                    </p>
                  </div>
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <h4 className="font-medium text-sm mb-1">Search & Filtering</h4>
                    <p className="text-xs text-muted-foreground">
                      Advanced search capabilities for content discovery
                    </p>
                  </div>
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <h4 className="font-medium text-sm mb-1">Third-party Integration</h4>
                    <p className="text-xs text-muted-foreground">
                      APIs and social media platform connectivity
                    </p>
                  </div>
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <h4 className="font-medium text-sm mb-1">Performance Optimization</h4>
                    <p className="text-xs text-muted-foreground">
                      Caching, image optimization, CDN integration
                    </p>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Future Roadmap */}
      <section className="section-padding bg-muted/30">
        <div className="container-max">
          <FadeIn>
            <h2 className="font-heading text-3xl mb-8">Future Roadmap</h2>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
            {[
              {
                icon: Users,
                title: "Enhanced Member Portal",
                description: "Advanced member portal with expanded functionality and personalized dashboards",
                color: "rose",
              },
              {
                icon: Smartphone,
                title: "Mobile App Integration",
                description: "Seamless integration with mobile applications for unified experience",
                color: "teal",
              },
              {
                icon: Calendar,
                title: "Event Management System",
                description: "Enhanced event management with automated workflows and notifications",
                color: "violet",
              },
              {
                icon: Zap,
                title: "Newsletter Automation",
                description: "Automated newsletter system for regular community communication",
                color: "amber",
              },
              {
                icon: Database,
                title: "College Integration",
                description: "Integration with college systems for streamlined operations",
                color: "emerald",
              },
              {
                icon: Rocket,
                title: "Advanced Analytics",
                description: "Analytics integration for insights into user engagement and impact",
                color: "rose",
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <Card className={`card-accent-${item.color} hover:shadow-md transition-shadow h-full`}>
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-2">
                      <div className={`w-10 h-10 rounded-lg bg-${item.color}/10 flex items-center justify-center`}>
                        <item.icon className={`h-5 w-5 text-${item.color}`} />
                      </div>
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <Footer />
    </div>
  )
}
