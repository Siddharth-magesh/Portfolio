"use client"

import { useState, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { LoadingScreen } from "@/components/loading-screen"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, Brain, Code, Zap, Award, Users, BookOpen, Download } from "lucide-react"
import { useLoading } from "@/contexts/LoadingContext"
import { FadeIn, StaggerContainer, StaggerItem, SlideIn } from "@/components/animations"

export default function HomePage() {
  const [showLoading, setShowLoading] = useState(true)
  const [isInitialLoad, setIsInitialLoad] = useState(true)
  const { triggerLoading } = useLoading()

  useEffect(() => {
    // Only show loading screen on initial page load
    if (isInitialLoad) {
      const timer = setTimeout(() => {
        setShowLoading(false)
        setIsInitialLoad(false)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [isInitialLoad])

  const handleLogoClick = () => {
    setShowLoading(true)
    setTimeout(() => setShowLoading(false), 3000)
  }

  const handleDownloadResume = () => {
    // Create a placeholder PDF download
    const link = document.createElement("a")
    link.href = "/resume-siddharth-magesh.pdf"
    link.download = "Siddharth_Magesh_Resume.pdf"
    link.click()
  }

  if (showLoading) {
    return <LoadingScreen onComplete={() => setShowLoading(false)} />
  }

  return (
    <div className="min-h-screen">
      <Navigation onLogoClick={handleLogoClick} />

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-background via-muted/20 to-secondary/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,197,253,0.08),transparent_50%)]" />
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="container-max relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <FadeIn delay={0.1}>
                <Badge
                  variant="secondary"
                  className="category-pill"
                >
                  AI Researcher
                </Badge>
              </FadeIn>
              <FadeIn delay={0.2}>
                <h1 className="font-heading mb-6">
                  Advancing the Future of <span className="text-primary bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Artificial Intelligence</span>
                </h1>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Pursuing advanced research in Natural Language Processing, Computer Vision, and Generative AI systems.
                  Contributing to cutting-edge research toward Artificial General Intelligence.
                </p>
              </FadeIn>
              <FadeIn delay={0.4}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" onClick={handleDownloadResume} className="bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-shadow">
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </Button>
                  <Button asChild size="lg" variant="outline" className="hover:bg-primary/5">
                    <Link href="/research">
                      View Research <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild className="hover:bg-primary/5">
                    <Link href="/contact">Get in Touch</Link>
                  </Button>
                </div>
              </FadeIn>
            </div>
            <SlideIn direction="right" delay={0.3}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-2xl blur-2xl opacity-50" />
                <div className="relative mx-auto w-80 h-96">
                  <img
                    src="/siddharth-profile-vertical.png"
                    alt="Siddharth Magesh"
                    className="w-full h-full object-cover rounded-2xl shadow-2xl ring-1 ring-white/10"
                  />
                </div>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-max">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8" staggerDelay={0.1}>
            <StaggerItem>
              <div className="text-center group hover:scale-105 transition-transform p-6 rounded-xl hover:bg-background/50">
                <div className="text-4xl font-heading font-bold text-primary mb-2 group-hover:text-primary/80 transition-colors">
                  3+
                </div>
                <div className="text-sm text-muted-foreground font-medium">Research Works</div>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="text-center group hover:scale-105 transition-transform p-6 rounded-xl hover:bg-background/50">
                <div className="text-4xl font-heading font-bold text-primary mb-2 group-hover:text-primary/80 transition-colors">
                  15+
                </div>
                <div className="text-sm text-muted-foreground font-medium">Hackathons</div>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="text-center group hover:scale-105 transition-transform p-6 rounded-xl hover:bg-background/50">
                <div className="text-4xl font-heading font-bold text-primary mb-2 group-hover:text-primary/80 transition-colors">
                  10+
                </div>
                <div className="text-sm text-muted-foreground font-medium">Certifications</div>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="text-center group hover:scale-105 transition-transform p-6 rounded-xl hover:bg-background/50">
                <div className="text-4xl font-heading font-bold text-primary mb-2 group-hover:text-primary/80 transition-colors">
                  8.91
                </div>
                <div className="text-sm text-muted-foreground font-medium">CGPA</div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="section-padding bg-muted/30">
        <div className="container-max">
          <FadeIn className="text-center mb-12">
            <h2 className="font-heading mb-4">Expertise & Focus Areas</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Specializing in cutting-edge AI research with practical implementations across multiple domains
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
            <StaggerItem>
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-transparent hover:border-primary/20 h-full">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Brain className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl mb-3">Research Projects</h3>
                  <p className="text-muted-foreground mb-4">
                    OSSARTH AI-OS, MTERBS Traffic Control, and Ecofloater autonomous systems
                  </p>
                  <Link
                    href="/research"
                    className="text-primary hover:text-primary/80 font-medium inline-flex items-center group/link"
                  >
                    Explore Research <ArrowRight className="ml-1 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-transparent hover:border-primary/20 h-full">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Code className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl mb-3">Technical Skills</h3>
                  <p className="text-muted-foreground mb-4">
                    PyTorch, TensorFlow, LangChain, Computer Vision, NLP, and MLOps
                  </p>
                  <Link
                    href="/about#technical-skills"
                    className="text-primary hover:text-primary/80 font-medium inline-flex items-center group/link"
                  >
                    View Skills <ArrowRight className="ml-1 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-transparent hover:border-primary/20 h-full">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Zap className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl mb-3">Professional Experience</h3>
                  <p className="text-muted-foreground mb-4">AI internships, backend development, and startup work</p>
                  <Link
                    href="/experience"
                    className="text-primary hover:text-primary/80 font-medium inline-flex items-center group/link"
                  >
                    View Experience <ArrowRight className="ml-1 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-transparent hover:border-primary/20 h-full">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Award className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl mb-3">Hackathons & Events</h3>
                  <p className="text-muted-foreground mb-4">
                    Participated in various events including hackathons, paper presentations, volunteering events
                  </p>
                  <Link
                    href="/hackathons"
                    className="text-primary hover:text-primary/80 font-medium inline-flex items-center group/link"
                  >
                    View Achievements <ArrowRight className="ml-1 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-transparent hover:border-primary/20 h-full">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Users className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl mb-3">Leadership</h3>
                  <p className="text-muted-foreground mb-4">Youth Red Cross Technical Head, WebOps Club Vice Chairman</p>
                  <Link
                    href="/leadership"
                    className="text-primary hover:text-primary/80 font-medium inline-flex items-center group/link"
                  >
                    View Leadership <ArrowRight className="ml-1 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-transparent hover:border-primary/20 h-full">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <BookOpen className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl mb-3">Articles & Insights</h3>
                  <p className="text-muted-foreground mb-4">
                    Thoughts on AI research, AGI development, and technology trends
                  </p>
                  <Link
                    href="/articles"
                    className="text-primary hover:text-primary/80 font-medium inline-flex items-center group/link"
                  >
                    Read Articles <ArrowRight className="ml-1 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-blue-500/5" />
        <div className="container-max relative">
          <FadeIn className="text-center">
            <h2 className="font-heading mb-4">Let's Collaborate</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Interested in AI research collaboration, consulting, or discussing the future of artificial intelligence?
              Let's connect.
            </p>
            <Button size="lg" asChild className="shadow-lg hover:shadow-xl transition-shadow">
              <Link href="/contact">
                Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  )
}
