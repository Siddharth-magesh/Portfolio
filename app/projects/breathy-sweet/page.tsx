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
  Heart,
  Cpu,
  Wifi,
  Brain,
  Smartphone,
  Activity,
  Zap,
  Download,
  Target,
  Rocket,
} from "lucide-react"
import { FadeIn, SlideIn, StaggerContainer, StaggerItem } from "@/components/animations"

export default function BreathySweetPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,var(--teal)/0.05,transparent_50%)]" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-teal/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald/5 rounded-full blur-3xl" />

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
                <Badge variant="secondary" className="badge-teal border mb-4">
                  HealthTech Innovation
                </Badge>
              </FadeIn>
              <FadeIn delay={0.2}>
                <h1 className="font-heading mb-2">Breathy Sweet</h1>
                <p className="text-lg text-muted-foreground mb-4">
                  Non-Invasive Glucose Monitoring Through Breath Analysis
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  A revolutionary healthcare device that eliminates the need for blood samples in diabetic
                  monitoring. By analyzing acetone levels in exhaled breath using custom IoT sensors and
                  machine learning algorithms, Breathy Sweet provides continuous glucose insights through
                  a non-invasive, painless approach—transforming daily diabetes management.
                </p>
              </FadeIn>
              <FadeIn delay={0.4}>
                <div className="flex flex-wrap gap-3">
                  <Button className="bg-teal hover:bg-teal/90 text-white" asChild>
                    <Link href="https://github.com/Siddharth-magesh/Breathy-Sweet" target="_blank">
                      <Github className="mr-2 h-4 w-4" />
                      Source Code
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link
                      href="https://www.figma.com/design/yxnHz9ivU2WfGwoDoZbVM2/Mobile-Dashboard-UI--Community-?node-id=0-1&t=ZZfBRwEDfzq7iWqX-1"
                      target="_blank"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Figma Design
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => {
                      const link = document.createElement("a")
                      link.href = "/breathy-sweet-report.pdf"
                      link.download = "breathy-sweet-report.pdf"
                      link.click()
                    }}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download Report
                  </Button>
                </div>
              </FadeIn>
            </div>
            <SlideIn direction="right" delay={0.3}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-teal/10 to-emerald/10 rounded-2xl blur-xl" />
                <div className="aspect-video bg-background rounded-xl flex items-center justify-center border border-border relative overflow-hidden">
                  <img
                    src="/breathy-sweet-interface.png"
                    alt="Breathy Sweet Device and Mobile Interface"
                    className="w-full h-full object-contain rounded-lg p-2"
                  />
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
              <Card className="card-accent-teal h-full">
                <CardHeader>
                  <Calendar className="h-6 w-6 text-teal mb-2" />
                  <CardTitle className="text-lg">Development Timeline</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="font-medium text-foreground">2023 - 2024</p>
                    <p className="text-sm text-muted-foreground">
                      Research, prototyping, and algorithm development
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Hardware Integration</p>
                    <p className="text-sm text-muted-foreground">
                      Custom sensor calibration and breath analysis chamber design
                    </p>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="card-accent-emerald h-full">
                <CardHeader>
                  <Users className="h-6 w-6 text-emerald mb-2" />
                  <CardTitle className="text-lg">Development Team</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {["Siddharth Magesh", "Narayanan", "Santhosh", "Raj Kishan", "Rupesh"].map((member, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-emerald rounded-full" />
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
                  <Badge variant="secondary" className="badge-violet border mb-3">
                    Prototype Complete
                  </Badge>
                  <p className="text-sm text-muted-foreground">
                    Functional prototype demonstrating breath analysis and glucose prediction.
                    Mobile application UI designed and integrated. Planning for clinical validation
                    and commercial development.
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>
          </StaggerContainer>

          {/* Project Overview */}
          <FadeIn>
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="font-heading text-2xl">Innovation Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Breathy Sweet addresses a fundamental challenge in diabetes management—the pain and inconvenience
                  of traditional blood glucose monitoring. By leveraging the scientific principle that elevated
                  blood glucose increases acetone levels in breath, our system provides a completely non-invasive
                  alternative. The custom-built breath analysis chamber uses specialized sensors to measure
                  acetone concentration, while machine learning algorithms correlate these readings with accurate
                  glucose predictions. This breakthrough approach enables diabetic patients to monitor their
                  glucose levels multiple times daily without any discomfort.
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

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <FadeIn delay={0.1}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Cpu className="h-5 w-5 text-teal" />
                    <span>Hardware Components</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium text-sm mb-1">ESP32 Microcontroller</h4>
                    <p className="text-sm text-muted-foreground">
                      Central processing unit handling sensor data acquisition, wireless communication,
                      and real-time data transmission to mobile application.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-1">Breath Sensor Array</h4>
                    <p className="text-sm text-muted-foreground">
                      Specialized acetone detection sensors calibrated for breath analysis with
                      high sensitivity and rapid response time.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-1">Environmental Sensors</h4>
                    <p className="text-sm text-muted-foreground">
                      Temperature, humidity, and pressure sensors for environmental compensation
                      ensuring accurate readings across conditions.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Brain className="h-5 w-5 text-emerald" />
                    <span>AI Processing Pipeline</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <h4 className="font-medium text-sm mb-1">Breath Composition Analysis</h4>
                    <p className="text-xs text-muted-foreground">
                      Multi-component gas analysis extracting acetone concentration from breath samples
                    </p>
                  </div>
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <h4 className="font-medium text-sm mb-1">ML Glucose Prediction</h4>
                    <p className="text-xs text-muted-foreground">
                      Custom trained models correlating acetone levels with blood glucose using patient data
                    </p>
                  </div>
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <h4 className="font-medium text-sm mb-1">Personalization Engine</h4>
                    <p className="text-xs text-muted-foreground">
                      Adaptive algorithms that learn individual patient patterns for improved accuracy
                    </p>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          </div>

          {/* System Workflow */}
          <FadeIn delay={0.3}>
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="font-heading text-xl">System Workflow</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-5 gap-4">
                  {[
                    { step: "1", title: "Breath Sample", description: "Patient breathes into analysis chamber" },
                    { step: "2", title: "Sensor Capture", description: "IoT sensors measure acetone and environment" },
                    { step: "3", title: "AI Processing", description: "Custom algorithms analyze breath composition" },
                    { step: "4", title: "Glucose Prediction", description: "ML models predict blood glucose level" },
                    { step: "5", title: "Mobile Display", description: "Results shown in PWA with insights" },
                  ].map((item) => (
                    <div key={item.step} className="text-center">
                      <div className="w-10 h-10 bg-teal text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">
                        {item.step}
                      </div>
                      <h4 className="font-medium text-sm mb-1">{item.title}</h4>
                      <p className="text-xs text-muted-foreground">{item.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </FadeIn>

          {/* Key Features Grid */}
          <FadeIn delay={0.3}>
            <h3 className="font-heading text-xl mb-6">Key Features</h3>
          </FadeIn>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8" staggerDelay={0.1}>
            {[
              {
                icon: Heart,
                title: "Non-Invasive Testing",
                description: "Painless monitoring without blood samples or finger pricks",
                color: "rose",
              },
              {
                icon: Wifi,
                title: "Wireless Connectivity",
                description: "Bluetooth/WiFi data transmission to mobile application",
                color: "teal",
              },
              {
                icon: Activity,
                title: "Continuous Monitoring",
                description: "Multiple daily readings without discomfort",
                color: "emerald",
              },
              {
                icon: Smartphone,
                title: "Mobile PWA",
                description: "Cross-platform app for viewing results and trends",
                color: "violet",
              },
              {
                icon: Brain,
                title: "AI Insights",
                description: "Generative AI-powered health recommendations",
                color: "amber",
              },
              {
                icon: Zap,
                title: "Real-time Results",
                description: "Instant glucose prediction from breath analysis",
                color: "teal",
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
                  "ESP32",
                  "Breath Sensors",
                  "Environmental Sensors",
                  "Python",
                  "TensorFlow",
                  "Custom ML Models",
                  "Generative AI",
                  "Progressive Web App",
                  "Real-time Processing",
                  "Cloud Computing",
                  "Bluetooth LE",
                  "WiFi IoT",
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

      {/* Commercial Roadmap */}
      <section className="section-padding">
        <div className="container-max">
          <FadeIn>
            <h2 className="font-heading text-3xl mb-8">Commercial Development Roadmap</h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn delay={0.1}>
              <Card className="card-accent-teal h-full">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Rocket className="h-5 w-5 text-teal" />
                    <span>Business Development</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    { title: "Startup Formation", description: "Planning commercial venture development" },
                    { title: "Patent Application", description: "IP protection for breath analysis technology" },
                    { title: "Clinical Trials", description: "Medical device certification validation" },
                    { title: "Seed Funding", description: "Investment for production scale-up" },
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

            <FadeIn delay={0.2}>
              <Card className="card-accent-emerald h-full">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Target className="h-5 w-5 text-emerald" />
                    <span>Market Expansion</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    { title: "FDA Approval", description: "Regulatory compliance for medical devices" },
                    { title: "Healthcare Partnerships", description: "Hospital and clinic integrations" },
                    { title: "International Deployment", description: "Global diabetic care market expansion" },
                    { title: "Insurance Coverage", description: "Working with insurers for coverage inclusion" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-emerald rounded-full mt-2 flex-shrink-0" />
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
        </div>
      </section>

      <Footer />
    </div>
  )
}
