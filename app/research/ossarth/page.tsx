"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  ArrowLeft,
  Download,
  ExternalLink,
  Calendar,
  Users,
  Brain,
  Cpu,
  Terminal,
  Globe,
  Layers,
  Sparkles,
  Award,
} from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { FadeIn, SlideIn, StaggerContainer, StaggerItem } from "@/components/animations"

export default function OSSARTHPage() {
  const images = [
    "/ossarth-architecture-diagram.png",
    "/ossarth-interface-1.png",
    "/ossarth-interface-2.png",
    "/ossarth-interface-3.png",
    "/ossarth-interface-4.png",
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,var(--violet)/0.05,transparent_50%)]" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-violet/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

        <div className="container-max relative">
          <FadeIn>
            <Button variant="ghost" asChild className="mb-6 hover:bg-muted">
              <Link href="/research">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Research
              </Link>
            </Button>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <FadeIn delay={0.1}>
                <Badge variant="secondary" className="badge-violet border mb-4">
                  Ongoing Research Project
                </Badge>
              </FadeIn>
              <FadeIn delay={0.2}>
                <h1 className="font-heading mb-2">OSSARTH</h1>
                <p className="text-lg text-muted-foreground mb-4">
                  An Open-Source Customizable LLM-Based Operating System
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  OSSARTH represents a paradigm shift in human-computer interaction, introducing a natural
                  language interface layer that replaces traditional GUI and CLI paradigms. Built on the
                  LangChain framework with Llama 3.2, it enables users to control their operating system
                  through conversational commands while maintaining the efficiency of native system operations.
                </p>
              </FadeIn>
              <FadeIn delay={0.4}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    className="bg-violet hover:bg-violet/90 text-violet-foreground"
                    onClick={() => {
                      const link = document.createElement("a")
                      link.href = "/research-papers/OSSARTH-Research-Paper.pdf"
                      link.download = "OSSARTH_AI_Operating_System_Research.pdf"
                      link.click()
                    }}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download Research Paper
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="https://siddharth-magesh.github.io/Ossarth-Website/" target="_blank">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Project Website
                    </Link>
                  </Button>
                </div>
              </FadeIn>
            </div>
            <SlideIn direction="right" delay={0.3}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-violet/10 to-primary/10 rounded-2xl blur-xl" />
                <Carousel className="w-full relative">
                  <CarouselContent>
                    {images.map((image, index) => (
                      <CarouselItem key={index}>
                        <div className="aspect-video bg-background rounded-xl flex items-center justify-center p-4 border border-border">
                          <img
                            src={image}
                            alt={`OSSARTH Interface ${index + 1}`}
                            className="w-full h-full object-contain rounded-lg"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2" />
                  <CarouselNext className="right-2" />
                </Carousel>
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
              <Card className="card-accent-violet h-full">
                <CardHeader>
                  <Calendar className="h-6 w-6 text-violet mb-2" />
                  <CardTitle className="text-lg">Research Timeline</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="font-medium text-foreground">2023 - 2024</p>
                    <p className="text-sm text-muted-foreground">
                      Theoretical foundations and literature review on LLM-OS integration
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">2024 - 2025</p>
                    <p className="text-sm text-muted-foreground">
                      Prototype development and V0.1 release at VEC Expo
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">2025 - Ongoing</p>
                    <p className="text-sm text-muted-foreground">
                      Production-grade system development and optimization
                    </p>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="card-accent-teal h-full">
                <CardHeader>
                  <Users className="h-6 w-6 text-teal mb-2" />
                  <CardTitle className="text-lg">Research Team</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="font-medium text-foreground">Siddharth Magesh</p>
                    <p className="text-sm text-muted-foreground">Lead Developer & AI Systems Architect</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Deepak Kumar M</p>
                    <p className="text-sm text-muted-foreground">AI Model Integration Specialist</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Beno Dharmaraaj P J</p>
                    <p className="text-sm text-muted-foreground">System Architecture & Deployment</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Priya M</p>
                    <p className="text-sm text-muted-foreground">Faculty Advisor & Research Supervisor</p>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="card-accent-emerald h-full">
                <CardHeader>
                  <Brain className="h-6 w-6 text-emerald mb-2" />
                  <CardTitle className="text-lg">Current Status</CardTitle>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary" className="badge-success border mb-3">
                    Paper Published
                  </Badge>
                  <p className="text-sm text-muted-foreground">
                    Research paper published in national conference proceedings. Version 0.1 demonstrated
                    at Velammal Engineering College Expo with positive reception. Active development
                    continues toward production release.
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>
          </StaggerContainer>

          {/* Abstract */}
          <FadeIn>
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="font-heading text-2xl">Research Abstract</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  OSSARTH introduces a revolutionary approach to operating system interaction through a customizable
                  LLM-based Operating System (LLMOS) that transcends traditional GUI and CLI limitations. The system
                  enables users to modify and extend functionality according to their specific requirements through
                  natural language commands, featuring multilingual natural language processing, AI-driven system
                  customization, and cross-platform compatibility. Built using the LangChain framework with Llama 3.2
                  7B for local inference, OSSARTH provides an intuitive interaction model without traditional GUI
                  constraints while preserving the efficiency and power of command-line operations.
                </p>
              </CardContent>
            </Card>
          </FadeIn>
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
                    <Cpu className="h-5 w-5 text-violet" />
                    <span>Core Technologies</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium text-sm mb-1">AI Framework</h4>
                    <p className="text-sm text-muted-foreground">
                      LangChain with Function Calling (Tool Calling) capabilities for structured
                      AI-system interaction and dynamic tool orchestration.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-1">Language Model</h4>
                    <p className="text-sm text-muted-foreground">
                      Llama 3.2 7B with local inference via Ollama, ensuring privacy-preserving
                      computation without cloud dependency.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-1">System Architecture</h4>
                    <p className="text-sm text-muted-foreground">
                      Agent-based AI system with Flask web interface, supporting modular tool
                      integration and extensible command patterns.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-1">Test Environment</h4>
                    <p className="text-sm text-muted-foreground">
                      AMD Ryzen 7 5000 Series, NVIDIA RTX 3050 (4GB VRAM), 32GB RAM, demonstrating
                      consumer-grade hardware viability.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Layers className="h-5 w-5 text-teal" />
                    <span>System Components</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-medium text-sm mb-1">Base OS Layer</h4>
                    <p className="text-xs text-muted-foreground">
                      OSSARTH foundation layer providing user-defined modification capabilities
                      and system-level integration hooks.
                    </p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-medium text-sm mb-1">PyPI Module</h4>
                    <p className="text-xs text-muted-foreground">
                      Ossarth Python framework enabling developers to create custom AI tools
                      and extend system functionality programmatically.
                    </p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-medium text-sm mb-1">Imager Application</h4>
                    <p className="text-xs text-muted-foreground">
                      Deployment tool for flashing customized OSSARTH images to target devices
                      with configuration persistence.
                    </p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-medium text-sm mb-1">Web Interface</h4>
                    <p className="text-xs text-muted-foreground">
                      Flask-based application serving an OS-like environment accessible via
                      browser with full system control capabilities.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          </div>

          {/* Key Features */}
          <FadeIn delay={0.3}>
            <h3 className="font-heading text-xl mb-6">Key Innovation Areas</h3>
          </FadeIn>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8" staggerDelay={0.1}>
            {[
              {
                icon: Terminal,
                title: "Natural Language Commands",
                description: "Execute system operations through conversational interfaces in multiple languages",
                color: "violet",
              },
              {
                icon: Sparkles,
                title: "AI-Driven Customization",
                description: "Create custom tools and automation scripts through natural language descriptions",
                color: "teal",
              },
              {
                icon: Globe,
                title: "Cross-Platform Support",
                description: "Compatible with Windows, Linux, and macOS through unified abstraction layer",
                color: "emerald",
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

          <FadeIn delay={0.4}>
            <div className="mb-8">
              <h3 className="font-heading text-xl mb-4">Technology Stack</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "LangChain",
                  "Llama 3.2 7B",
                  "Ollama",
                  "Flask",
                  "Python",
                  "PyPI",
                  "Natural Language Processing",
                  "Function Calling",
                  "Agent Architecture",
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

      {/* Implementation Methodology */}
      <section className="section-padding">
        <div className="container-max">
          <FadeIn>
            <h2 className="font-heading text-3xl mb-8">Implementation Methodology</h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <FadeIn delay={0.1}>
              <h3 className="font-heading text-xl mb-6">Customization Workflow</h3>
              <div className="space-y-4">
                {[
                  {
                    step: "1",
                    title: "Installation",
                    description: "Deploy via PyPI package manager or clone from GitHub repository",
                  },
                  {
                    step: "2",
                    title: "Tool Creation",
                    description: "Define Python-based custom AI tools using the built-in tool manager API",
                  },
                  {
                    step: "3",
                    title: "Integration",
                    description: "Dynamic function generation with automatic storage and LangChain binding",
                  },
                  {
                    step: "4",
                    title: "Deployment",
                    description: "Flash customized configuration using the OSSARTH Imager application",
                  },
                ].map((item) => (
                  <div key={item.step} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-violet text-violet-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-medium">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="font-heading text-xl">Project Resources</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <Link href="https://siddharth-magesh.github.io/Ossarth-Website/" target="_blank">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Official Website
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <Link href="https://github.com/Siddharth-magesh/OssarthOS" target="_blank">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      OS Repository
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <Link href="https://github.com/Siddharth-magesh/Ossarth" target="_blank">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      PyPI Module Source
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <Link href="https://github.com/Siddharth-magesh/Ossarth-Imager" target="_blank">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Imager Tool
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Future Development & Achievement */}
      <section className="section-padding bg-muted/30">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-8">
            <FadeIn>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl">Future Development Roadmap</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        title: "Device Expansion",
                        description: "Raspberry Pi, IoT devices, ARM-based architectures",
                      },
                      {
                        title: "PyPI Module Ecosystem",
                        description: "Ossarth-Community for collaborative tools, Ossarth-External for device integration",
                      },
                      {
                        title: "GUI Platform",
                        description: "Web-based drag-and-drop system for non-programmers",
                      },
                      {
                        title: "Performance Optimization",
                        description: "Multi-threaded processing, enhanced CUDA support, reduced inference latency",
                      },
                      {
                        title: "Security Enhancements",
                        description: "Granular access control, encrypted data handling, secure API integrations",
                      },
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-violet rounded-full mt-2 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-foreground">{item.title}</p>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={0.1}>
              <Card className="card-accent-amber bg-gradient-to-br from-amber/5 to-background h-full">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-amber/20 rounded-full flex items-center justify-center">
                      <Award className="h-6 w-6 text-amber" />
                    </div>
                    <div>
                      <CardTitle className="font-heading text-2xl">Competition Achievement</CardTitle>
                      <p className="text-amber font-medium">3rd Place Winner</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    OSSARTH received recognition as 3rd Place Winner for its innovative approach to AI-powered
                    operating system development. The project was acknowledged for its groundbreaking implementation
                    of natural language interface in operating systems and its potential to revolutionize
                    human-computer interaction paradigms.
                  </p>
                  <div className="p-4 bg-amber/10 rounded-lg border border-amber/20">
                    <p className="text-sm mb-1">
                      <span className="font-medium text-foreground">Organizing Body:</span>{" "}
                      <span className="text-muted-foreground">Velammal Engineering College</span>
                    </p>
                    <p className="text-sm">
                      <span className="font-medium text-foreground">Category:</span>{" "}
                      <span className="text-muted-foreground">AI/ML Innovation</span>
                    </p>
                  </div>
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
