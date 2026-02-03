"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  ArrowLeft,
  Github,
  ExternalLink,
  Calendar,
  Users,
  Globe,
  Server,
  Database,
  Code,
  Layers,
  Cloud,
  GitBranch,
  Shield,
  Target,
} from "lucide-react"
import { FadeIn, SlideIn, StaggerContainer, StaggerItem } from "@/components/animations"

export default function VECWebsitePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,var(--primary)/0.05,transparent_50%)]" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-violet/5 rounded-full blur-3xl" />

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
                <Badge variant="secondary" className="badge-primary border mb-4">
                  Web Development
                </Badge>
              </FadeIn>
              <FadeIn delay={0.2}>
                <h1 className="font-heading mb-2">VEC Website</h1>
                <p className="text-lg text-muted-foreground mb-4">
                  Official Institutional Website for Velammal Engineering College
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  A comprehensive full-stack web platform serving as the digital face of Velammal Engineering College.
                  Built with modern MERN stack architecture, the website provides seamless access to institutional
                  information, events, achievements, and resources for students, faculty, and prospective applicants.
                  Deployed on AWS with CI/CD pipelines ensuring reliability and scalability.
                </p>
              </FadeIn>
              <FadeIn delay={0.4}>
                <div className="flex flex-wrap gap-3">
                  <Button asChild>
                    <Link href="https://github.com/Siddharth-magesh/VEC-Website" target="_blank">
                      <Github className="mr-2 h-4 w-4" />
                      Source Code
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="https://velammal.edu.in/webteam" target="_blank">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Meet the Team
                    </Link>
                  </Button>
                </div>
              </FadeIn>
            </div>
            <SlideIn direction="right" delay={0.3}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-violet/10 rounded-2xl blur-xl" />
                <div className="aspect-video bg-background rounded-xl flex items-center justify-center border border-border relative overflow-hidden">
                  <img
                    src="/vec-website-cover.png"
                    alt="VEC Website Interface"
                    className="w-full h-full object-contain rounded-lg p-2"
                  />
                </div>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Team Highlight */}
      <section className="py-6 bg-gradient-to-r from-primary/10 to-violet/10 border-y border-primary/20">
        <div className="container-max">
          <FadeIn>
            <div className="flex items-center justify-center gap-4 text-center">
              <Users className="h-8 w-8 text-primary" />
              <div>
                <h3 className="font-heading text-xl text-foreground mb-1">17-Member Founding Squad</h3>
                <p className="text-muted-foreground">
                  Pilot Batch that laid the groundwork and mentored the Co-Pilot Batch for continued development
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Project Details Grid */}
      <section className="section-padding">
        <div className="container-max">
          <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12" staggerDelay={0.1}>
            <StaggerItem>
              <Card className="card-accent-primary h-full">
                <CardHeader>
                  <Calendar className="h-6 w-6 text-primary mb-2" />
                  <CardTitle className="text-lg">Development Timeline</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="font-medium text-foreground">2023 - 2024</p>
                    <p className="text-sm text-muted-foreground">
                      Full-stack development, deployment, and launch
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Ongoing Maintenance</p>
                    <p className="text-sm text-muted-foreground">
                      Co-Pilot Batch continues platform evolution and updates
                    </p>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="card-accent-violet h-full">
                <CardHeader>
                  <Users className="h-6 w-6 text-violet mb-2" />
                  <CardTitle className="text-lg">Team Structure</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="font-medium text-foreground">Pilot Batch</p>
                    <p className="text-sm text-muted-foreground">17 founding developers who built the initial platform</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Co-Pilot Batch</p>
                    <p className="text-sm text-muted-foreground">Mentored team continuing development and maintenance</p>
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
                  <Badge variant="secondary" className="badge-success border mb-3">
                    Live
                  </Badge>
                  <p className="text-sm text-muted-foreground">
                    Fully deployed and operational institutional website serving thousands of users
                    including students, faculty, and prospective applicants with continuous updates
                    and improvements.
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
                <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                  The VEC Website serves as the digital face of Velammal Engineering College, providing comprehensive
                  information about events, achievements, academic programs, and institutional resources. Built with
                  a focus on modern web technologies, the website incorporates responsive design principles ensuring
                  compatibility across all devices—from desktops to smartphones.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  The development process emphasized collaboration, scalability, and maintainability. By leveraging
                  the MERN stack with AWS cloud infrastructure, the platform delivers a robust backend with an
                  intuitive frontend. Secure authentication systems ensure personalized access for users while
                  maintaining data integrity and privacy across all institutional operations.
                </p>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </section>

      {/* Technical Architecture */}
      <section className="section-padding bg-muted/30">
        <div className="container-max">
          <FadeIn>
            <h2 className="font-heading text-3xl mb-8">Technical Architecture</h2>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12" staggerDelay={0.1}>
            {[
              {
                icon: Layers,
                title: "MERN Stack",
                description: "Complete MongoDB, Express.js, React.js, and Node.js implementation for full-stack development",
                color: "primary",
              },
              {
                icon: Globe,
                title: "Responsive Design",
                description: "Cross-browser compatible, mobile-optimized interfaces ensuring seamless user experience",
                color: "violet",
              },
              {
                icon: Server,
                title: "RESTful APIs",
                description: "Well-documented API endpoints for frontend-backend communication and third-party integrations",
                color: "emerald",
              },
              {
                icon: Shield,
                title: "Authentication",
                description: "Secure user authentication systems with role-based access control for different user types",
                color: "amber",
              },
              {
                icon: Cloud,
                title: "AWS Deployment",
                description: "Scalable cloud hosting with load balancing and automatic failover for high availability",
                color: "teal",
              },
              {
                icon: GitBranch,
                title: "CI/CD Pipelines",
                description: "Automated testing, building, and deployment workflows using GitHub Actions",
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
                    <Code className="h-5 w-5 text-primary" />
                    <span>Core Capabilities</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    { title: "Website Architecture", description: "Complete platform built from ground up with modular design" },
                    { title: "API Development", description: "RESTful API design with comprehensive documentation" },
                    { title: "Database Modeling", description: "Optimized MongoDB schemas with efficient query patterns" },
                    { title: "Responsive Implementation", description: "Mobile-first design across all device sizes" },
                    { title: "Security Implementation", description: "HTTPS, input validation, and XSS protection" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
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
                    <Database className="h-5 w-5 text-violet" />
                    <span>Technology Stack</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium text-sm mb-2">Frontend</h4>
                    <div className="flex flex-wrap gap-2">
                      {["React.js", "Responsive CSS", "UI/UX Components"].map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">{tech}</Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-2">Backend</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Node.js", "Express.js", "REST APIs", "Authentication"].map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">{tech}</Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-2">Database & DevOps</h4>
                    <div className="flex flex-wrap gap-2">
                      {["MongoDB", "Mongoose ODM", "AWS", "CI/CD", "GitHub"].map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">{tech}</Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Future Roadmap */}
      <section className="section-padding">
        <div className="container-max">
          <FadeIn>
            <h2 className="font-heading text-3xl mb-8">Future Roadmap</h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <Card>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    {[
                      "Continuous platform evolution under Co-Pilot Batch",
                      "Enhanced user experience features",
                      "Integration of advanced college management systems",
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <p className="text-sm text-muted-foreground">{item}</p>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-3">
                    {[
                      "Scalable architecture improvements for growing user base",
                      "Legacy maintenance and knowledge transfer",
                      "Mobile-responsive enhancements",
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-violet rounded-full mt-2 flex-shrink-0" />
                        <p className="text-sm text-muted-foreground">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  )
}
