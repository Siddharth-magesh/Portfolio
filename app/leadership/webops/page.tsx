"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  Globe,
  Code,
  Users,
  Award,
  Target,
  Lightbulb,
  GitBranch,
  Cloud,
  Database,
  Calendar,
  Server,
  Shield,
  Rocket,
} from "lucide-react"
import { OptimizedImage } from "@/components/optimized-image"
import { FadeIn, SlideIn, StaggerContainer, StaggerItem } from "@/components/animations"

export default function WebOpsPage() {
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
              <Link href="/leadership">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Leadership
              </Link>
            </Button>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <FadeIn delay={0.1}>
                <Badge variant="secondary" className="badge-primary border mb-4">
                  Leadership Role
                </Badge>
              </FadeIn>
              <FadeIn delay={0.2}>
                <h1 className="font-heading mb-2">Vice Chairman - WebOps</h1>
                <p className="text-lg text-muted-foreground mb-4">
                  Leading Digital Innovation at Velammal Engineering College
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Spearheading the digital transformation of Velammal Engineering College through collaborative
                  web development, technical mentorship, and pioneering full-stack solutions. As Vice Chairman,
                  I led the backend architecture for the official college website and established development
                  standards that continue to guide the team's technical practices.
                </p>
              </FadeIn>
              <FadeIn delay={0.4}>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>2023 - 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>17-Member Team</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button asChild>
                    <Link href="https://github.com/Web-Developer-VEC" target="_blank">
                      <Code className="mr-2 h-4 w-4" />
                      View Projects
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="https://velammal.edu.in/webteam" target="_blank">
                      <Users className="mr-2 h-4 w-4" />
                      Team Gallery
                    </Link>
                  </Button>
                </div>
              </FadeIn>
            </div>
            <SlideIn direction="right" delay={0.3}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-violet/10 rounded-2xl blur-xl" />
                <div className="aspect-video bg-background rounded-xl overflow-hidden border border-border relative">
                  <OptimizedImage
                    src="/webops/webops-team-logo.png"
                    alt="WebOps Leadership"
                    fill
                    className="rounded-xl object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Introduction Card */}
      <section className="section-padding">
        <div className="container-max">
          <FadeIn>
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="font-heading text-2xl">My Role & Contributions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  As the initial head of backend development for the VEC website, I architected the entire database
                  infrastructure and crafted the system design from the ground up. From building scalable API endpoints
                  to managing complex data flows, I developed custom modules to handle diverse data requirements while
                  ensuring optimal performance. My responsibilities extended to server-side logic optimization, chatbot
                  feature integration, and maintaining robust security protocols—essentially serving as the backbone
                  of the college's digital infrastructure.
                </p>
              </CardContent>
            </Card>
          </FadeIn>

          {/* Stats */}
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12" staggerDelay={0.1}>
            {[
              { value: "17", label: "Team Members Led", color: "primary" },
              { value: "1", label: "Major Platform Deployed", color: "violet" },
              { value: "50+", label: "APIs Developed", color: "emerald" },
              { value: "2+", label: "Years of Leadership", color: "amber" },
            ].map((stat) => (
              <StaggerItem key={stat.label}>
                <Card className={`card-accent-${stat.color} text-center`}>
                  <CardContent className="pt-6">
                    <p className={`text-4xl font-bold text-${stat.color} mb-2`}>{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* WebOps Evolution Timeline */}
      <section className="section-padding bg-muted/30">
        <div className="container-max">
          <FadeIn>
            <h2 className="font-heading text-3xl mb-2">WebOps Evolution Timeline</h2>
            <p className="text-xl text-muted-foreground mb-8">
              The journey of building a comprehensive web development ecosystem
            </p>
          </FadeIn>

          <div className="space-y-6">
            {/* Phase 1 */}
            <FadeIn delay={0.1}>
              <Card className="card-accent-primary">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="badge-primary border">Phase 1</Badge>
                  </div>
                  <CardTitle className="font-heading text-xl">Foundation Era</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    The WebOps journey began with a vision to establish a robust web development ecosystem within VEC.
                    Starting with a small group of passionate developers, we laid the groundwork for what would become a
                    comprehensive digital development initiative serving the entire college community.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      { icon: Target, text: "Core team formation" },
                      { icon: Code, text: "Development standards" },
                      { icon: Lightbulb, text: "Project planning" },
                    ].map((item) => (
                      <div key={item.text} className="flex items-center space-x-2 text-sm">
                        <item.icon className="h-4 w-4 text-primary" />
                        <span>{item.text}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </FadeIn>

            {/* Phase 2 */}
            <FadeIn delay={0.2}>
              <Card className="card-accent-emerald">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-12 h-12 bg-emerald/10 rounded-full flex items-center justify-center">
                      <GitBranch className="h-6 w-6 text-emerald" />
                    </div>
                    <Badge variant="secondary" className="badge-emerald border">Phase 2</Badge>
                  </div>
                  <CardTitle className="font-heading text-xl">Growth and Expansion</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Building upon our foundation, WebOps expanded its scope to encompass full-stack development, cloud
                    infrastructure, and collaborative development practices. This phase marked our transition from a small
                    team to a structured organization with defined roles and responsibilities.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {[
                      { icon: Database, text: "MERN stack adoption" },
                      { icon: GitBranch, text: "GitHub workflows" },
                      { icon: Cloud, text: "AWS integration" },
                      { icon: Users, text: "Team structure" },
                    ].map((item) => (
                      <div key={item.text} className="flex items-center space-x-2 text-sm">
                        <item.icon className="h-4 w-4 text-emerald" />
                        <span>{item.text}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </FadeIn>

            {/* Phase 3 */}
            <FadeIn delay={0.3}>
              <Card className="card-accent-violet">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-12 h-12 bg-violet/10 rounded-full flex items-center justify-center">
                      <Award className="h-6 w-6 text-violet" />
                    </div>
                    <Badge variant="secondary" className="badge-violet border">Phase 3 - Current</Badge>
                  </div>
                  <CardTitle className="font-heading text-xl">Innovation and Leadership</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    The current era of WebOps is characterized by innovation, leadership, and community impact. We've
                    evolved into a team that not only develops exceptional web solutions but also mentors future
                    developers and contributes to the broader tech community through knowledge sharing and open collaboration.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {[
                      { icon: Globe, text: "VEC website deployment" },
                      { icon: Target, text: "Project management" },
                      { icon: Users, text: "Mentorship programs" },
                      { icon: Award, text: "Industry partnerships" },
                    ].map((item) => (
                      <div key={item.text} className="flex items-center space-x-2 text-sm">
                        <item.icon className="h-4 w-4 text-violet" />
                        <span>{item.text}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className="section-padding">
        <div className="container-max">
          <FadeIn>
            <h2 className="font-heading text-3xl mb-8">Leadership Philosophy</h2>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={0.1}>
            {[
              {
                icon: Target,
                title: "Vision Statement",
                description: "Empowering digital transformation through collaborative development and innovative web solutions that serve the college community",
                color: "primary",
              },
              {
                icon: Users,
                title: "Leadership Approach",
                description: "Collaborative leadership emphasizing team growth, technical excellence, and creating opportunities for every member to contribute meaningfully",
                color: "violet",
              },
              {
                icon: Lightbulb,
                title: "Team Development",
                description: "Focus on skill development, knowledge sharing, and creating pathways for team members to excel in their technical and professional growth",
                color: "emerald",
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <Card className={`card-accent-${item.color} h-full`}>
                  <CardHeader>
                    <item.icon className={`h-8 w-8 text-${item.color} mb-4`} />
                    <CardTitle className="font-heading text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Group Photo Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-max">
          <FadeIn>
            <div className="text-center mb-8">
              <h2 className="font-heading text-3xl mb-2">The WebOps Team</h2>
              <p className="text-xl text-muted-foreground">Pioneers of Digital Innovation at VEC</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="max-w-4xl mx-auto">
              <div className="aspect-video bg-background rounded-xl overflow-hidden border border-border shadow-lg relative">
                <OptimizedImage
                  src="/webops/development-team-photo.png"
                  alt="WebOps Team Photo"
                  fill
                  className="rounded-xl object-cover"
                  sizes="(max-width: 768px) 100vw, 896px"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Technical Contributions */}
      <section className="section-padding">
        <div className="container-max">
          <FadeIn>
            <h2 className="font-heading text-3xl mb-2">Technical Contributions</h2>
            <p className="text-xl text-muted-foreground mb-8">Leading technical initiatives across multiple domains</p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <FadeIn delay={0.1}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Server className="h-5 w-5 text-primary" />
                    <span>Backend Architecture Leadership</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    "Node.js and Express.js server architecture design",
                    "RESTful API development and optimization",
                    "Database design and management (MongoDB focus)",
                    "Authentication and security implementation",
                    "Server deployment and maintenance strategies",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Cloud className="h-5 w-5 text-violet" />
                    <span>DevOps and Deployment</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    "AWS cloud infrastructure management",
                    "CI/CD pipeline development and maintenance",
                    "GitHub workflow optimization",
                    "Automation script development",
                    "Performance monitoring and optimization",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-violet rounded-full mt-2 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </FadeIn>
          </div>

          <FadeIn delay={0.3}>
            <div className="mb-8">
              <h3 className="font-heading text-xl mb-4">Technology Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Node.js",
                  "Express.js",
                  "MongoDB",
                  "React.js",
                  "AWS",
                  "CI/CD",
                  "REST APIs",
                  "GitHub Actions",
                  "Docker",
                  "System Design",
                  "Database Architecture",
                  "Security",
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

      {/* Major Projects */}
      <section className="section-padding bg-muted/30">
        <div className="container-max">
          <FadeIn>
            <h2 className="font-heading text-3xl mb-8">Major Projects & Achievements</h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <Card className="card-accent-primary mb-6">
              <CardHeader>
                <CardTitle className="font-heading text-xl">VEC Official Website</CardTitle>
                <p className="text-muted-foreground">Complete digital infrastructure development</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Led the complete development of Velammal Engineering College's official website, coordinating a
                  17-member team through full-stack development, AWS deployment, and ongoing maintenance. The platform
                  serves thousands of users including students, faculty, and prospective applicants.
                </p>
                <Button asChild>
                  <Link href="/projects/vec-website">
                    View Project Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6" staggerDelay={0.1}>
            <StaggerItem>
              <Card className="h-full">
                <CardHeader>
                  <Shield className="h-6 w-6 text-emerald mb-2" />
                  <CardTitle className="font-heading text-lg">Development Standards</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Established coding standards, review processes, and best practices that became the foundation for
                    all WebOps projects, ensuring code quality and maintainability across the team.
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="h-full">
                <CardHeader>
                  <Users className="h-6 w-6 text-violet mb-2" />
                  <CardTitle className="font-heading text-lg">Team Mentorship</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Developed and implemented mentorship programs (Pilot and Co-Pilot batches) that successfully
                    onboarded new team members and ensured knowledge transfer for sustainable growth.
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Future Vision */}
      <section className="section-padding">
        <div className="container-max">
          <FadeIn>
            <div className="text-center mb-8">
              <h2 className="font-heading text-3xl mb-2">Future Vision & Goals</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Strategic outlook for continued evolution and impact
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.1}>
            {[
              {
                icon: Rocket,
                title: "Capability Evolution",
                description: "Continued evolution of WebOps capabilities and services to meet emerging technological demands",
                color: "primary",
              },
              {
                icon: Lightbulb,
                title: "Innovation Adoption",
                description: "Advanced technology adoption and innovation in web development practices and methodologies",
                color: "amber",
              },
              {
                icon: Award,
                title: "Legacy Planning",
                description: "Knowledge transfer initiatives and legacy planning for sustainable organizational growth",
                color: "violet",
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <Card className={`card-accent-${item.color} hover:shadow-md transition-shadow h-full`}>
                  <CardContent className="pt-6">
                    <item.icon className={`h-8 w-8 text-${item.color} mb-4`} />
                    <h3 className="font-heading text-lg mb-2">{item.title}</h3>
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
