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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,197,253,0.05),transparent_50%)]" />
        <div className="container-max relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge
                variant="secondary"
                className="mb-4 px-4 py-2 text-sm font-semibold bg-slate-100 text-slate-800 border-slate-200 rounded-full"
              >
                AI Researcher
              </Badge>
              <h1 className="font-heading mb-6">
                Advancing the Future of <span className="text-primary">Artificial Intelligence</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Pursuing advanced research in Natural Language Processing, Computer Vision, and Generative AI systems.
                Contributing to cutting-edge research toward Artificial General Intelligence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" onClick={handleDownloadResume} className="bg-primary hover:bg-primary/90">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/research">
                    View Research <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative mx-auto w-80 h-96">
                <img
                  src="/siddharth-profile-vertical.png"
                  alt="Siddharth Magesh"
                  className="w-full h-full object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group hover:scale-105 transition-transform">
              <div className="text-4xl font-heading font-bold text-primary mb-2 group-hover:text-blue-600 transition-colors">
                3+
              </div>
              <div className="text-sm text-muted-foreground font-medium">Research Works</div>
            </div>
            <div className="text-center group hover:scale-105 transition-transform">
              <div className="text-4xl font-heading font-bold text-primary mb-2 group-hover:text-blue-600 transition-colors">
                15+
              </div>
              <div className="text-sm text-muted-foreground font-medium">Hackathons</div>
            </div>
            <div className="text-center group hover:scale-105 transition-transform">
              <div className="text-4xl font-heading font-bold text-primary mb-2 group-hover:text-blue-600 transition-colors">
                10+
              </div>
              <div className="text-sm text-muted-foreground font-medium">Certifications</div>
            </div>
            <div className="text-center group hover:scale-105 transition-transform">
              <div className="text-4xl font-heading font-bold text-primary mb-2 group-hover:text-blue-600 transition-colors">
                8.91
              </div>
              <div className="text-sm text-muted-foreground font-medium">CGPA</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="section-padding bg-muted/30">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="font-heading mb-4">Expertise & Focus Areas</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Specializing in cutting-edge AI research with practical implementations across multiple domains
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <Brain className="h-12 w-12 text-primary mb-4 group-hover:text-blue-600 transition-colors" />
                <h3 className="font-heading text-xl mb-3">Research Projects</h3>
                <p className="text-muted-foreground mb-4">
                  OSSARTH AI-OS, MTERBS Traffic Control, and Ecofloater autonomous systems
                </p>
                <Link
                  href="/research"
                  className="text-primary hover:text-primary/80 font-medium inline-flex items-center"
                >
                  Explore Research <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <Code className="h-12 w-12 text-primary mb-4 group-hover:text-blue-600 transition-colors" />
                <h3 className="font-heading text-xl mb-3">Technical Skills</h3>
                <p className="text-muted-foreground mb-4">
                  PyTorch, TensorFlow, LangChain, Computer Vision, NLP, and MLOps
                </p>
                <Link
                  href="/about#technical-skills"
                  className="text-primary hover:text-primary/80 font-medium inline-flex items-center"
                >
                  View Skills <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <Zap className="h-12 w-12 text-primary mb-4 group-hover:text-blue-600 transition-colors" />
                <h3 className="font-heading text-xl mb-3">Professional Experience</h3>
                <p className="text-muted-foreground mb-4">AI internships, backend development, and startup work</p>
                <Link
                  href="/experience"
                  className="text-primary hover:text-primary/80 font-medium inline-flex items-center"
                >
                  View Experience <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <Award className="h-12 w-12 text-primary mb-4 group-hover:text-blue-600 transition-colors" />
                <h3 className="font-heading text-xl mb-3">Hackathons & Events</h3>
                <p className="text-muted-foreground mb-4">
                  Participated in various events including hackathons, paper presentations, volunteering events
                </p>
                <Link
                  href="/hackathons"
                  className="text-primary hover:text-primary/80 font-medium inline-flex items-center"
                >
                  View Achievements <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-primary mb-4 group-hover:text-blue-600 transition-colors" />
                <h3 className="font-heading text-xl mb-3">Leadership</h3>
                <p className="text-muted-foreground mb-4">Youth Red Cross Technical Head, WebOps Club Vice Chairman</p>
                <Link
                  href="/leadership"
                  className="text-primary hover:text-primary/80 font-medium inline-flex items-center"
                >
                  View Leadership <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <BookOpen className="h-12 w-12 text-primary mb-4 group-hover:text-blue-600 transition-colors" />
                <h3 className="font-heading text-xl mb-3">Articles & Insights</h3>
                <p className="text-muted-foreground mb-4">
                  Thoughts on AI research, AGI development, and technology trends
                </p>
                <Link
                  href="/articles"
                  className="text-primary hover:text-primary/80 font-medium inline-flex items-center"
                >
                  Read Articles <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center">
            <h2 className="font-heading mb-4">Let's Collaborate</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Interested in AI research collaboration, consulting, or discussing the future of artificial intelligence?
              Let's connect.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">
                Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
