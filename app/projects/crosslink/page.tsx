"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Users,
  QrCode,
  FileText,
  Smartphone,
  Database,
  Shield,
  Calendar,
  Zap,
  CheckCircle,
  ArrowRight,
} from "lucide-react"
import { FadeIn, SlideIn, StaggerContainer, StaggerItem } from "@/components/animations"

export default function CrossLinkProjectPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,var(--emerald)/0.05,transparent_50%)]" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-emerald/5 rounded-full blur-3xl" />

        <div className="container-max relative">
          <FadeIn>
            <Button variant="ghost" asChild className="mb-6 hover:bg-muted">
              <Link href="/projects">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Link>
            </Button>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <FadeIn delay={0.1}>
                <Badge variant="secondary" className="badge-emerald border mb-4">
                  PWA Platform • 2025 - Ongoing
                </Badge>
              </FadeIn>
              <FadeIn delay={0.2}>
                <h1 className="font-heading mb-2">CrossLink</h1>
                <p className="text-lg text-muted-foreground mb-4">
                  YRC Event & Attendance Management PWA
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  A comprehensive Progressive Web Application engineered to digitally transform Youth Red Cross
                  operations at Velammal Engineering College. CrossLink provides an integrated ecosystem for
                  event management, QR-based attendance tracking, automated document generation, and member
                  data administration—all within a mobile-first, installable web experience.
                </p>
              </FadeIn>
              <FadeIn delay={0.4}>
                <div className="flex flex-wrap gap-4">
                  <Button asChild className="bg-emerald hover:bg-emerald/90 text-emerald-foreground">
                    <Link href="https://github.com/Siddharth-magesh/CrossLink" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View Source Code
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="https://siddharth-magesh.github.io/CrossLink/login" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Link>
                  </Button>
                </div>
              </FadeIn>
            </div>
            <SlideIn direction="right" delay={0.3}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-emerald/10 to-teal/10 rounded-2xl blur-xl" />
                <div className="relative aspect-video bg-muted rounded-xl overflow-hidden border border-border">
                  <img
                    src="/crosslink-project-banner.jpg"
                    alt="CrossLink Project Banner"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <FadeIn>
                <h2 className="font-heading text-3xl mb-6">Project Overview</h2>
              </FadeIn>
              <FadeIn delay={0.1}>
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    CrossLink addresses the operational inefficiencies inherent in managing large-scale
                    organizational events through manual processes. The platform leverages modern web
                    technologies to create a seamless digital workflow, eliminating paper-based attendance
                    tracking and reducing administrative overhead by an estimated 70%.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    The system architecture follows a microservices-inspired design pattern, separating
                    concerns between the React-based frontend PWA and the Flask REST API backend. This
                    architectural decision enables independent scaling and maintainability while providing
                    a responsive user experience across devices.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h3 className="font-heading text-xl mb-4 mt-8">Core Capabilities</h3>
              </FadeIn>
              <StaggerContainer className="grid md:grid-cols-2 gap-4" staggerDelay={0.1}>
                <StaggerItem>
                  <Card className="card-accent-emerald hover:shadow-md transition-shadow h-full">
                    <CardHeader className="pb-3">
                      <div className="flex items-center space-x-2">
                        <div className="w-10 h-10 rounded-lg bg-emerald/10 flex items-center justify-center">
                          <QrCode className="h-5 w-5 text-emerald" />
                        </div>
                        <CardTitle className="text-lg">QR-Based Attendance</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Dynamic QR code generation for each event participant with real-time
                        scanning validation, geolocation verification, and instant attendance logging.
                      </p>
                    </CardContent>
                  </Card>
                </StaggerItem>

                <StaggerItem>
                  <Card className="card-accent-teal hover:shadow-md transition-shadow h-full">
                    <CardHeader className="pb-3">
                      <div className="flex items-center space-x-2">
                        <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center">
                          <FileText className="h-5 w-5 text-teal" />
                        </div>
                        <CardTitle className="text-lg">Automated Documentation</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Template-driven on-duty document generation supporting DOCX and PDF
                        formats with automated field population and digital signature integration.
                      </p>
                    </CardContent>
                  </Card>
                </StaggerItem>

                <StaggerItem>
                  <Card className="card-accent-violet hover:shadow-md transition-shadow h-full">
                    <CardHeader className="pb-3">
                      <div className="flex items-center space-x-2">
                        <div className="w-10 h-10 rounded-lg bg-violet/10 flex items-center justify-center">
                          <Smartphone className="h-5 w-5 text-violet" />
                        </div>
                        <CardTitle className="text-lg">Progressive Web App</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Full PWA compliance with service worker caching, offline functionality,
                        push notifications, and native-like home screen installation.
                      </p>
                    </CardContent>
                  </Card>
                </StaggerItem>

                <StaggerItem>
                  <Card className="card-accent-amber hover:shadow-md transition-shadow h-full">
                    <CardHeader className="pb-3">
                      <div className="flex items-center space-x-2">
                        <div className="w-10 h-10 rounded-lg bg-amber/10 flex items-center justify-center">
                          <Database className="h-5 w-5 text-amber" />
                        </div>
                        <CardTitle className="text-lg">Member Management</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Comprehensive CRUD operations with bulk CSV import/export, role-based
                        access control, and detailed activity logging for audit compliance.
                      </p>
                    </CardContent>
                  </Card>
                </StaggerItem>
              </StaggerContainer>
            </div>

            <div>
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>Project Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Calendar className="h-4 w-4 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Timeline</p>
                      <p className="font-medium">2025 - Ongoing</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="h-4 w-4 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Team Size</p>
                      <p className="font-medium">4 Developers</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Zap className="h-4 w-4 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">My Role</p>
                      <p className="font-medium">Lead Developer & Backend Architect</p>
                    </div>
                  </div>
                  <div className="pt-2">
                    <Badge variant="secondary" className="badge-info border">
                      Active Development
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Implementation */}
      <section className="section-padding bg-muted/30">
        <div className="container-max">
          <FadeIn>
            <h2 className="font-heading text-3xl mb-8">Technical Architecture</h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <FadeIn delay={0.1}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-primary" />
                    <span>System Architecture</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-sm mb-1">Frontend Layer</h4>
                      <p className="text-sm text-muted-foreground">
                        React 18 with Vite bundler, implementing component-based architecture
                        with React Router for client-side navigation. Service Workers handle
                        caching strategies for offline support and performance optimization.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm mb-1">Backend Services</h4>
                      <p className="text-sm text-muted-foreground">
                        Flask REST API with Blueprint modularization, implementing JWT-based
                        authentication and Werkzeug password hashing for secure credential management.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm mb-1">Data Persistence</h4>
                      <p className="text-sm text-muted-foreground">
                        MongoDB document store with indexed collections for optimized queries,
                        supporting horizontal scaling and flexible schema evolution.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Integrated Automation Suite</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <h4 className="font-medium text-sm mb-2">YRC ID Card Generator</h4>
                      <p className="text-xs text-muted-foreground mb-3">
                        Automated bulk ID card generation from CSV student data using
                        PIL/Pillow for image manipulation and ReportLab for PDF export.
                      </p>
                      <Button variant="outline" size="sm" asChild>
                        <Link href="https://github.com/Siddharth-magesh/YRC-IDCard-Generator" target="_blank">
                          <Github className="mr-1 h-3 w-3" />
                          View Repository
                        </Link>
                      </Button>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <h4 className="font-medium text-sm mb-2">YRC Drive Manager</h4>
                      <p className="text-xs text-muted-foreground mb-3">
                        Google Drive API integration for automated content organization,
                        folder structure management, and bulk file operations.
                      </p>
                      <Button variant="outline" size="sm" asChild>
                        <Link href="https://github.com/Siddharth-magesh/YRC-Drive-manager" target="_blank">
                          <Github className="mr-1 h-3 w-3" />
                          View Repository
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          </div>

          <FadeIn delay={0.3}>
            <div className="mb-8">
              <h3 className="font-heading text-xl mb-4">Technology Stack</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "React 18",
                  "Vite",
                  "PWA",
                  "Service Workers",
                  "Flask",
                  "Python",
                  "MongoDB",
                  "JWT Auth",
                  "QR Code Generation",
                  "ReportLab",
                  "Google Drive API",
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

      {/* Development Team */}
      <section className="section-padding">
        <div className="container-max">
          <FadeIn>
            <h2 className="font-heading text-3xl mb-8">Development Team</h2>
          </FadeIn>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
            {[
              { name: "Siddharth Magesh", role: "Lead Developer & Backend Architecture" },
              { name: "Vishva", role: "Frontend Development & PWA Implementation" },
              { name: "Andal Priya Dharshani", role: "UI/UX Design & Quality Assurance" },
              { name: "Dakshan", role: "Database Engineering & Integration" },
            ].map((member) => (
              <StaggerItem key={member.name}>
                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{member.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </CardHeader>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Future Roadmap */}
      <section className="section-padding bg-muted/30">
        <div className="container-max">
          <FadeIn>
            <h2 className="font-heading text-3xl mb-8">Development Roadmap</h2>
          </FadeIn>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
            {[
              {
                title: "Native Mobile Capabilities",
                description: "Capacitor integration for native device APIs including camera, biometrics, and push notifications.",
                icon: Smartphone,
              },
              {
                title: "Enterprise Integration",
                description: "College ERP system integration for synchronized student data and academic record linkage.",
                icon: Database,
              },
              {
                title: "Analytics Dashboard",
                description: "Real-time visualization of attendance patterns, event metrics, and member engagement analytics.",
                icon: Zap,
              },
              {
                title: "Multi-language Support",
                description: "Internationalization framework for Tamil, Hindi, and English language support.",
                icon: FileText,
              },
              {
                title: "Public API",
                description: "RESTful API endpoints with OAuth 2.0 for third-party integration and automation workflows.",
                icon: Shield,
              },
              {
                title: "ML-Powered Insights",
                description: "Predictive attendance modeling and anomaly detection for event planning optimization.",
                icon: CheckCircle,
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <Card className="hover:shadow-md transition-shadow h-full">
                  <CardHeader>
                    <div className="flex items-center space-x-2 mb-2">
                      <item.icon className="h-5 w-5 text-primary" />
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
