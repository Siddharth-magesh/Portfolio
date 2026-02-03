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
  Calendar,
  Users,
  Trophy,
  Leaf,
  ShoppingCart,
  MessageSquare,
  Eye,
  Mic,
  BarChart3,
  CloudSun,
  Brain,
  Database,
  Target,
} from "lucide-react"
import { FadeIn, SlideIn, StaggerContainer, StaggerItem } from "@/components/animations"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const images = [
  "/agrihub/agrihub-interface-1.png",
  "/agrihub/agrihub-interface-2.png",
  "/agrihub/agrihub-interface-3.png",
  "/agrihub/agrihub-interface-4.png",
]

export default function AgriHubPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,var(--emerald)/0.05,transparent_50%)]" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-emerald/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-teal/5 rounded-full blur-3xl" />

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
                <Badge variant="secondary" className="badge-emerald border mb-4">
                  AgTech Platform
                </Badge>
              </FadeIn>
              <FadeIn delay={0.2}>
                <h1 className="font-heading mb-2">AgriHub</h1>
                <p className="text-lg text-muted-foreground mb-4">
                  Comprehensive AI-Powered Farming Platform
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  An all-in-one agricultural technology platform designed to modernize farming operations
                  by connecting farmers directly with buyers, providing AI-powered crop management tools,
                  and integrating computer vision for disease detection. AgriHub brings together marketplace
                  functionality, community networking, and intelligent agricultural insights in a unified ecosystem.
                </p>
              </FadeIn>
              <FadeIn delay={0.4}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-emerald hover:bg-emerald/90 text-white" asChild>
                    <Link href="https://github.com/Siddharth-magesh/Agri-Hub" target="_blank">
                      <Github className="mr-2 h-4 w-4" />
                      View Source Code
                    </Link>
                  </Button>
                </div>
              </FadeIn>
            </div>
            <SlideIn direction="right" delay={0.3}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-emerald/10 to-teal/10 rounded-2xl blur-xl" />
                <Carousel className="w-full relative">
                  <CarouselContent>
                    {images.map((image, index) => (
                      <CarouselItem key={index}>
                        <div className="aspect-video bg-white rounded-xl flex items-center justify-center p-4 border border-border">
                          <img
                            src={image}
                            alt={`AgriHub Interface ${index + 1}`}
                            className="w-full h-full object-contain rounded-lg"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Achievement Banner */}
      <section className="py-6 bg-gradient-to-r from-emerald/10 to-teal/10 border-y border-emerald/20">
        <div className="container-max">
          <FadeIn>
            <div className="flex items-center justify-center gap-4 text-center">
              <Trophy className="h-8 w-8 text-emerald" />
              <div>
                <h3 className="font-heading text-xl text-foreground mb-1">Special Prize Winner - PRABHIGNYAN</h3>
                <p className="text-muted-foreground">
                  Prize Amount: ₹2,000 | Recognition for innovative agricultural platform
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
              <Card className="card-accent-emerald h-full">
                <CardHeader>
                  <Calendar className="h-6 w-6 text-emerald mb-2" />
                  <CardTitle className="text-lg">Development Timeline</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="font-medium text-foreground">2023 - 2024</p>
                    <p className="text-sm text-muted-foreground">
                      Full platform development with AI integration and marketplace features
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Ongoing</p>
                    <p className="text-sm text-muted-foreground">
                      Continuous improvement and feature expansion
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
                  {["Siddharth Magesh", "Pranesh Kumar", "Samuel Stephen", "Arjun VL", "Waatson"].map((member, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-teal rounded-full" />
                      <p className="text-sm text-muted-foreground">{member}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="card-accent-violet h-full">
                <CardHeader>
                  <Target className="h-6 w-6 text-violet mb-2" />
                  <CardTitle className="text-lg">Project Status</CardTitle>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary" className="badge-success border mb-3">
                    Open Source
                  </Badge>
                  <p className="text-sm text-muted-foreground">
                    Complete agricultural platform with marketplace, AI chatbots, computer vision
                    disease detection, and comprehensive farm management tools. Available as
                    open-source for community contributions.
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>
          </StaggerContainer>

          {/* Project Overview */}
          <FadeIn>
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="font-heading text-2xl">Platform Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  AgriHub addresses the fragmentation in agricultural markets by creating a unified digital
                  ecosystem for farmers. The platform eliminates middlemen by enabling direct farmer-to-buyer
                  transactions, while providing powerful AI tools for crop management and disease detection.
                  With features like personalized dashboards, intelligent chatbots, voice-activated navigation,
                  and real-time market data, AgriHub empowers farmers with technology that was previously
                  accessible only to large agricultural enterprises—democratizing smart farming for all.
                </p>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </section>

      {/* Platform Features */}
      <section className="section-padding bg-muted/30">
        <div className="container-max">
          <FadeIn>
            <h2 className="font-heading text-3xl mb-8">Platform Features</h2>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12" staggerDelay={0.1}>
            {[
              {
                icon: ShoppingCart,
                title: "Farmer Marketplace",
                description: "Direct farmer-to-buyer platform eliminating middlemen with integrated payment and logistics",
                color: "emerald",
              },
              {
                icon: Eye,
                title: "Computer Vision",
                description: "YOLO-powered leaf disease detection, fruit counting, and crop classification from images",
                color: "teal",
              },
              {
                icon: MessageSquare,
                title: "QuickFarm Chatbot",
                description: "AI-powered chatbot providing farming strategy recommendations and agricultural advice",
                color: "violet",
              },
              {
                icon: Mic,
                title: "Voice Navigation",
                description: "RAG-powered voice recognition for hands-free interaction with platform features",
                color: "amber",
              },
              {
                icon: CloudSun,
                title: "Weather Integration",
                description: "Real-time weather forecasting and alerts tailored to farm locations",
                color: "rose",
              },
              {
                icon: BarChart3,
                title: "Price Analytics",
                description: "Regional crop price information with market trend analysis and predictions",
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

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <FadeIn delay={0.1}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Brain className="h-5 w-5 text-emerald" />
                    <span>AI-Powered Tools</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <h4 className="font-medium text-sm mb-1">TinyLlama Integration</h4>
                    <p className="text-xs text-muted-foreground">
                      Lightweight LLM for quick farming queries and recommendations
                    </p>
                  </div>
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <h4 className="font-medium text-sm mb-1">Llama-2-7B Processing</h4>
                    <p className="text-xs text-muted-foreground">
                      Advanced language model for complex agricultural analysis
                    </p>
                  </div>
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <h4 className="font-medium text-sm mb-1">Phi-3-mini Assistant</h4>
                    <p className="text-xs text-muted-foreground">
                      Efficient model for SQL query processing and data retrieval
                    </p>
                  </div>
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <h4 className="font-medium text-sm mb-1">YOLOv8 Vision</h4>
                    <p className="text-xs text-muted-foreground">
                      State-of-the-art object detection for crop and disease identification
                    </p>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Database className="h-5 w-5 text-teal" />
                    <span>Platform Components</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    { title: "Personalized Dashboard", description: "Custom accounts for farmers and buyers with tailored interfaces" },
                    { title: "Communication Hub", description: "Community connections, associations, and knowledge sharing" },
                    { title: "Integrated Store", description: "Farming materials with search, filter, and comparison features" },
                    { title: "Financial Services", description: "Insurance, loans, and bank integration with interest rate comparison" },
                    { title: "News Feed", description: "Up-to-date farming news and agricultural announcements" },
                    { title: "Resource Library", description: "Educational content on sustainable farming practices" },
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
                  "Python",
                  "TinyLlama",
                  "Llama-2-7B",
                  "Phi-3-mini",
                  "YOLOv8",
                  "PyTorch",
                  "CUDA",
                  "SQL Database",
                  "Voice Recognition",
                  "RAG",
                  "Web Scraping",
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
                  <CardTitle className="font-heading text-xl">Technical Enhancements</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    "SQL database optimization with extended relationships",
                    "Enhanced LLM training on agricultural datasets",
                    "Dynamic frontend development for all pages",
                    "Increased vector store capacity for RAG",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-emerald rounded-full mt-2 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="font-heading text-xl">Platform Expansion</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    "Mobile application with native iOS and Android apps",
                    "Generalized data structures for scalability",
                    "Complete website redesign with modern UI/UX",
                    "Multi-language support for regional farmers",
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
