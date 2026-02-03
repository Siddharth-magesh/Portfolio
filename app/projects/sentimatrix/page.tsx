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
  Trophy,
  Calendar,
  Package,
  BookOpen,
  Brain,
  MessageSquare,
  BarChart3,
  Globe,
  Layers,
  Cpu,
  Sparkles,
  Award,
} from "lucide-react"
import { FadeIn, SlideIn, StaggerContainer, StaggerItem } from "@/components/animations"

export default function SentimatrixPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,var(--violet)/0.05,transparent_50%)]" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-violet/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber/5 rounded-full blur-3xl" />

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
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="badge-violet border">
                    AI Platform
                  </Badge>
                  <Badge variant="secondary" className="badge-success border">
                    Published on PyPI
                  </Badge>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <h1 className="font-heading mb-2">Sentimatrix</h1>
                <p className="text-lg text-muted-foreground mb-4">
                  Advanced Sentiment Analysis Toolkit with Multi-Provider LLM Support
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                  A production-ready Python package for comprehensive sentiment analysis featuring support for
                  19 LLM providers, intelligent web scraping across major platforms, and multi-modal analysis
                  capabilities. From emotion detection to visual analytics, Sentimatrix provides enterprise-grade
                  tools for understanding consumer sentiment at scale.
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>2023-2026</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Package className="h-4 w-4" />
                    <span>v0.2.2 (Latest)</span>
                  </div>
                </div>
              </FadeIn>
              <FadeIn delay={0.4}>
                <div className="flex flex-wrap gap-3">
                  <Button className="bg-violet hover:bg-violet/90 text-white" asChild>
                    <Link href="https://pypi.org/project/sentimatrix/" target="_blank">
                      <Package className="mr-2 h-4 w-4" />
                      PyPI Package
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="https://siddharth-magesh.github.io/Sentimatrix/" target="_blank">
                      <BookOpen className="mr-2 h-4 w-4" />
                      Documentation
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="https://github.com/Siddharth-magesh/Sentimatrix-V1" target="_blank">
                      <Github className="mr-2 h-4 w-4" />
                      Source Code
                    </Link>
                  </Button>
                </div>
              </FadeIn>
            </div>
            <SlideIn direction="right" delay={0.3}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-violet/10 to-amber/10 rounded-2xl blur-xl" />
                <div className="aspect-video bg-background rounded-xl flex items-center justify-center border border-border relative overflow-hidden">
                  <img
                    src="/sentimatrix-structure.png"
                    alt="Sentimatrix Platform Architecture"
                    className="w-full h-full object-contain rounded-lg p-2"
                  />
                </div>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Achievement Banner */}
      <section className="py-6 bg-gradient-to-r from-amber/10 to-violet/10 border-y border-amber/20">
        <div className="container-max">
          <FadeIn>
            <div className="flex items-center justify-center gap-4 text-center">
              <Trophy className="h-8 w-8 text-amber" />
              <div>
                <h3 className="font-heading text-xl text-foreground mb-1">First Place Winner - INNOTHAN&apos;24</h3>
                <p className="text-muted-foreground">
                  Prize Amount: ₹25,000 | Recognition for innovative sentiment analysis platform
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
              <Card className="card-accent-violet h-full">
                <CardHeader>
                  <Calendar className="h-6 w-6 text-violet mb-2" />
                  <CardTitle className="text-lg">Development Timeline</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="font-medium text-foreground">2023 - 2024</p>
                    <p className="text-sm text-muted-foreground">
                      Core development and initial PyPI release
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">2024 - 2026</p>
                    <p className="text-sm text-muted-foreground">
                      Multi-provider LLM integration and platform scrapers
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Current: v0.2.2</p>
                    <p className="text-sm text-muted-foreground">
                      Active development with regular feature updates
                    </p>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="card-accent-teal h-full">
                <CardHeader>
                  <Users className="h-6 w-6 text-teal mb-2" />
                  <CardTitle className="text-lg">Development Team</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {[
                    { name: "Siddharth Magesh", role: "Lead Developer" },
                    { name: "Pranesh Kumar", role: "Backend Engineer" },
                    { name: "Arjun VL", role: "AI Integration" },
                    { name: "Yasir", role: "Scraping Systems" },
                    { name: "Sriram", role: "Frontend" },
                    { name: "Waatson", role: "Testing & QA" },
                  ].map((member, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <p className="text-sm text-foreground">{member.name}</p>
                      <p className="text-xs text-muted-foreground">{member.role}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="card-accent-emerald h-full">
                <CardHeader>
                  <Award className="h-6 w-6 text-emerald mb-2" />
                  <CardTitle className="text-lg">Package Stats</CardTitle>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary" className="badge-success border mb-3">
                    Beta (Active Development)
                  </Badge>
                  <div className="space-y-2 mt-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Python Version</span>
                      <span className="text-sm font-medium">3.10+</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">LLM Providers</span>
                      <span className="text-sm font-medium">19</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Platform Scrapers</span>
                      <span className="text-sm font-medium">6+</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Emotion Categories</span>
                      <span className="text-sm font-medium">28</span>
                    </div>
                  </div>
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
                  Sentimatrix began as a college project and evolved into a production-ready PyPI package with
                  extensive documentation. The toolkit enables developers and researchers to perform sophisticated
                  sentiment analysis across multiple modalities—text, images, and audio. With support for 19 LLM
                  providers including OpenAI, Anthropic, Google Gemini, Groq, and local models via Ollama/vLLM,
                  users can leverage the best models for their specific use cases. The integrated scraping engine
                  autonomously collects reviews from Amazon, Steam, YouTube, Reddit, and IMDB, while commercial
                  API integrations provide enterprise-grade data collection capabilities.
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
            <h2 className="font-heading text-3xl mb-8">Core Capabilities</h2>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12" staggerDelay={0.1}>
            {[
              {
                icon: Brain,
                title: "19 LLM Providers",
                description: "OpenAI, Anthropic, Google Gemini, Groq, Ollama, vLLM, and 13 more providers for flexible model selection",
                color: "violet",
              },
              {
                icon: Globe,
                title: "Platform Scrapers",
                description: "Built-in scrapers for Amazon, Steam, YouTube, Reddit, IMDB plus commercial API integrations",
                color: "teal",
              },
              {
                icon: MessageSquare,
                title: "Emotion Detection",
                description: "28-emotion GoEmotions taxonomy or simplified 6-emotion classification for nuanced sentiment understanding",
                color: "amber",
              },
              {
                icon: Layers,
                title: "Multi-Modal Analysis",
                description: "Process text, images, and audio content with specialized models for each modality",
                color: "emerald",
              },
              {
                icon: BarChart3,
                title: "Visual Analytics",
                description: "Generate scoreboards, trend graphs, heatmaps, and comprehensive HTML/Excel reports",
                color: "rose",
              },
              {
                icon: Sparkles,
                title: "Batch Processing",
                description: "Aggregate statistics across large datasets with optimized concurrent processing pipelines",
                color: "violet",
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
                    <Cpu className="h-5 w-5 text-violet" />
                    <span>Access Modes</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <h4 className="font-medium text-sm mb-1">Python Module</h4>
                    <p className="text-xs text-muted-foreground">
                      Import directly into data science workflows for programmatic sentiment analysis
                    </p>
                  </div>
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <h4 className="font-medium text-sm mb-1">REST API</h4>
                    <p className="text-xs text-muted-foreground">
                      Integration-ready endpoints for embedding sentiment analysis into applications
                    </p>
                  </div>
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <h4 className="font-medium text-sm mb-1">Web Dashboard</h4>
                    <p className="text-xs text-muted-foreground">
                      Visual interface for business teams requiring point-and-click analysis
                    </p>
                  </div>
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <h4 className="font-medium text-sm mb-1">Conversational Chatbot</h4>
                    <p className="text-xs text-muted-foreground">
                      Natural language queries for quick insights without technical expertise
                    </p>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Sparkles className="h-5 w-5 text-amber" />
                    <span>Advanced Features</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    { title: "Custom Pipelines", description: "Chain scraping, analysis, and reporting workflows" },
                    { title: "Product Intelligence", description: "Competitor comparison and market positioning" },
                    { title: "Feedback Heatmaps", description: "Visual sentiment distribution across categories" },
                    { title: "Influencer Insights", description: "Content performance tracking and optimization" },
                    { title: "Real-time Monitoring", description: "Live sentiment tracking with alerting" },
                    { title: "Sentimatrix Studio", description: "Cloud-based extension for team collaboration" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-amber rounded-full mt-2 flex-shrink-0" />
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
                  "Python",
                  "LangChain",
                  "OpenAI API",
                  "Anthropic API",
                  "Google Gemini",
                  "Groq",
                  "Ollama",
                  "vLLM",
                  "PyTorch",
                  "Transformers",
                  "BeautifulSoup",
                  "Selenium",
                  "FastAPI",
                  "Pandas",
                  "Matplotlib",
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

      {/* Future Roadmap */}
      <section className="section-padding">
        <div className="container-max">
          <FadeIn>
            <h2 className="font-heading text-3xl mb-8">Future Roadmap</h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn delay={0.1}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="font-heading text-xl">Planned Developments</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    "Enhanced integration with emerging web-integrated AI tools",
                    "Expansion of Sentimatrix Studio cloud-based capabilities",
                    "Open-source contributions to foster collaborative ecosystem",
                    "Enterprise licensing and support tiers",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-violet rounded-full mt-2 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="font-heading text-xl">Technical Enhancements</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    "Advanced agentic scraping engine improvements",
                    "Enhanced plug-and-play architecture for flexible integration",
                    "Expanded support for regional sociolinguistic sentiment trends",
                    "GPU-accelerated batch processing for large-scale analysis",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-teal rounded-full mt-2 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
