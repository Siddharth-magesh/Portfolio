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
  Play,
  Cpu,
  Network,
  Ambulance,
  Radio,
  Timer,
  Award,
  Activity,
  MapPin,
  Zap,
} from "lucide-react"
import { FadeIn, SlideIn, StaggerContainer, StaggerItem } from "@/components/animations"

export default function MTERBSPage() {
  const handleDownloadPaper = () => {
    const link = document.createElement("a")
    link.href = "/research-papers/MTERBS-Research-Paper.pdf"
    link.download = "MTERBS_Traffic_Management_Research.pdf"
    link.click()
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,var(--teal)/0.05,transparent_50%)]" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-teal/5 rounded-full blur-3xl" />
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
                <Badge variant="secondary" className="badge-teal border mb-4">
                  Ongoing Research Project
                </Badge>
              </FadeIn>
              <FadeIn delay={0.2}>
                <h1 className="font-heading mb-2">MT-ERBS</h1>
                <p className="text-lg text-muted-foreground mb-4">
                  Manipulating Traffic for Effective Rescue by Bypassing the Signals
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  MT-ERBS introduces a revolutionary AI-integrated traffic management system specifically engineered
                  for emergency vehicle priority. Unlike conventional smart traffic solutions, the system employs
                  deep learning, computer vision, and IoT infrastructure to dynamically manipulate traffic signals,
                  creating optimal rescue corridors that maximize golden hour utilization during critical medical emergencies.
                </p>
              </FadeIn>
              <FadeIn delay={0.4}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    className="bg-teal hover:bg-teal/90 text-white"
                    onClick={handleDownloadPaper}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download Research Paper
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="https://github.com/Siddharth-magesh/MT-ERBS/" target="_blank">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Repository
                    </Link>
                  </Button>
                </div>
              </FadeIn>
            </div>
            <SlideIn direction="right" delay={0.3}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-teal/10 to-primary/10 rounded-2xl blur-xl" />
                <div className="aspect-video bg-background rounded-xl flex items-center justify-center p-4 border border-border relative">
                  <img
                    src="/mterbs-system-diagram.jpeg"
                    alt="MT-ERBS Traffic Control System Architecture"
                    className="w-full h-full object-contain rounded-lg"
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
                  <CardTitle className="text-lg">Research Timeline</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="font-medium text-foreground">2023 - 2024</p>
                    <p className="text-sm text-muted-foreground">
                      Theoretical framework development and system architecture design
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">2024 - 2025</p>
                    <p className="text-sm text-muted-foreground">
                      Prototype implementation, benchmarking tool development, and field testing
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">2025 - 2026</p>
                    <p className="text-sm text-muted-foreground">
                      Research documentation, publication preparation, and optimization
                    </p>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="card-accent-emerald h-full">
                <CardHeader>
                  <Users className="h-6 w-6 text-emerald mb-2" />
                  <CardTitle className="text-lg">Research Team</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="font-medium text-foreground">Siddharth Magesh</p>
                    <p className="text-sm text-muted-foreground">AI Researcher & System Architecture Lead</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Arjun V L</p>
                    <p className="text-sm text-muted-foreground">AI Model Development & Algorithm Implementation</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Gokulramanan V</p>
                    <p className="text-sm text-muted-foreground">IoT Integration & Field Testing Engineer</p>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="card-accent-violet h-full">
                <CardHeader>
                  <Brain className="h-6 w-6 text-violet mb-2" />
                  <CardTitle className="text-lg">Current Status</CardTitle>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary" className="badge-violet border mb-3">
                    Paper in Progress
                  </Badge>
                  <p className="text-sm text-muted-foreground">
                    Core algorithms successfully implemented with comprehensive benchmarking framework developed.
                    System demonstrates significant performance improvements over baseline traffic management.
                    Currently in publication preparation phase.
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
                  MT-ERBS addresses the critical challenge of emergency response optimization in congested urban environments,
                  targeting the &ldquo;golden hour&rdquo; period that determines survival outcomes in medical emergencies. The system
                  introduces an emergency-centric traffic management paradigm combining 360-degree AI-powered intersection
                  cameras, centralized server infrastructure with aerial city network visualization, and a multi-layered
                  dynamic AI algorithm. By integrating ambulance telemetry, real-time traffic signals, hospital capacity
                  data, and emergency call processing, MT-ERBS creates optimal rescue pathways while maintaining overall
                  traffic flow efficiency—a fundamental advancement over traditional smart traffic systems that lack
                  emergency prioritization capabilities.
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
                    <span>Core Infrastructure</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium text-sm mb-1">Centralized Server Infrastructure</h4>
                    <p className="text-sm text-muted-foreground">
                      High-performance computing cluster providing real-time decision-making capabilities
                      with aerial city network visualization for comprehensive traffic state awareness.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-1">IoT Vision Network</h4>
                    <p className="text-sm text-muted-foreground">
                      360-degree AI-powered cameras deployed at critical intersections, performing
                      continuous traffic density analysis and vehicle detection at 10 Hz frequency.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-1">Emergency Vehicle Fleet Integration</h4>
                    <p className="text-sm text-muted-foreground">
                      Ambulances equipped with GPS modules, LCD status panels, AI communication systems,
                      and real-time telemetry transmission for dynamic route optimization.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-1">Multi-Source Data Fusion</h4>
                    <p className="text-sm text-muted-foreground">
                      Integration layer combining emergency calls, traffic camera feeds, ambulance GPS,
                      and hospital capacity systems for comprehensive situational awareness.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Network className="h-5 w-5 text-emerald" />
                    <span>AI Processing Pipeline</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-medium text-sm mb-1">Computer Vision Module</h4>
                    <p className="text-xs text-muted-foreground">
                      Deep learning-based traffic analysis for vehicle counting, congestion detection,
                      and emergency vehicle identification with real-time inference.
                    </p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-medium text-sm mb-1">NLP Processing Engine</h4>
                    <p className="text-xs text-muted-foreground">
                      Natural language processing for emergency call transcription and severity assessment,
                      enabling automated dispatch prioritization.
                    </p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-medium text-sm mb-1">Reinforcement Learning Controller</h4>
                    <p className="text-xs text-muted-foreground">
                      Adaptive decision-making system optimizing signal timing and route selection
                      through continuous learning from traffic patterns.
                    </p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-medium text-sm mb-1">Model Predictive Control (MPC)</h4>
                    <p className="text-xs text-muted-foreground">
                      Route refinement and signal coordination using predictive modeling for
                      optimal ambulance corridor creation with minimal traffic disruption.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          </div>

          {/* System Modules */}
          <FadeIn delay={0.3}>
            <h3 className="font-heading text-xl mb-6">Specialized Processing Modules</h3>
          </FadeIn>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8" staggerDelay={0.1}>
            {[
              {
                icon: Activity,
                title: "Perception & Fusion",
                description: "Multi-modal sensor data integration with traffic state forecasting capabilities",
                color: "teal",
              },
              {
                icon: Ambulance,
                title: "Mission Assignment",
                description: "Optimal ambulance-to-emergency matching with intelligent hospital targeting",
                color: "emerald",
              },
              {
                icon: MapPin,
                title: "Route Planning",
                description: "Time-dependent pathfinding with MPC-based continuous route refinement",
                color: "violet",
              },
              {
                icon: Radio,
                title: "Signal Control",
                description: "Green wave generation with upstream traffic gating for corridor creation",
                color: "rose",
              },
              {
                icon: Zap,
                title: "Field Actuation",
                description: "Physical signal control interface with emergency indicator activation",
                color: "amber",
              },
              {
                icon: Network,
                title: "Multi-Agency Coordination",
                description: "Hospital, police, and public transport system integration layer",
                color: "teal",
              },
            ].map((module) => (
              <StaggerItem key={module.title}>
                <Card className={`card-accent-${module.color} hover:shadow-md transition-shadow h-full`}>
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-2">
                      <div className={`w-10 h-10 rounded-lg bg-${module.color}/10 flex items-center justify-center`}>
                        <module.icon className={`h-5 w-5 text-${module.color}`} />
                      </div>
                      <CardTitle className="text-lg">{module.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{module.description}</p>
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
                  "Computer Vision",
                  "Deep Learning",
                  "Reinforcement Learning",
                  "Model Predictive Control",
                  "IoT Sensors",
                  "Real-time Processing",
                  "NLP",
                  "Python",
                  "TensorFlow",
                  "SUMO Simulation",
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

      {/* Performance Validation */}
      <section className="section-padding">
        <div className="container-max">
          <FadeIn>
            <h2 className="font-heading text-3xl mb-8">Performance Validation</h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <FadeIn delay={0.1}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Timer className="h-5 w-5 text-teal" />
                    <span>Benchmarking Results</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-emerald/10 rounded-lg border border-emerald/20">
                    <span className="text-sm font-medium">Ambulance Travel Time</span>
                    <span className="text-sm font-bold text-emerald">35.00 ± 0.00s</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-teal/10 rounded-lg border border-teal/20">
                    <span className="text-sm font-medium">Blocking Time Reduction</span>
                    <span className="text-sm font-bold text-teal">26.13 ± 1.36s</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-violet/10 rounded-lg border border-violet/20">
                    <span className="text-sm font-medium">System Reliability</span>
                    <span className="text-sm font-bold text-violet">100.0% Success</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-amber/10 rounded-lg border border-amber/20">
                    <span className="text-sm font-medium">Traffic Flow Optimization</span>
                    <span className="text-sm font-bold text-amber">1056 ± 9.97 vehicles</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-rose/10 rounded-lg border border-rose/20">
                    <span className="text-sm font-medium">Spillback Control</span>
                    <span className="text-sm font-bold text-rose">65.33 ± 12.00</span>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="font-heading text-xl">Custom Benchmarking Framework</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    A comprehensive Python-based evaluation framework was developed to validate system performance
                    under various urban traffic conditions and emergency scenarios.
                  </p>
                  <div className="space-y-3">
                    {[
                      {
                        title: "Traffic Network Modeling",
                        description: "Urban traffic grid simulation with configurable intersection density",
                      },
                      {
                        title: "Multi-Metric Evaluation",
                        description: "Travel time, blocking time, spillback analysis, signal switching frequency",
                      },
                      {
                        title: "Scenario Testing",
                        description: "Multiple test cases with varying traffic conditions and ambulance routes",
                      },
                      {
                        title: "Real-time Visualization",
                        description: "System state monitoring dashboard with performance analytics",
                      },
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-teal rounded-full mt-2 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-foreground text-sm">{item.title}</p>
                          <p className="text-xs text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Resources & Achievement */}
      <section className="section-padding bg-muted/30">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-8">
            <FadeIn>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl">Project Resources</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-3">
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <Link href="https://github.com/Siddharth-magesh/MT-ERBS/" target="_blank">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Main Repository
                      </Link>
                    </Button>
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <Link
                        href="https://github.com/Siddharth-magesh/MT-ERBS/blob/main/benchmarking_tool.py"
                        target="_blank"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Benchmarking Tool
                      </Link>
                    </Button>
                  </div>

                  <div className="pt-4 border-t">
                    <h3 className="font-heading text-lg mb-3">Demo Videos</h3>
                    <div className="grid gap-3">
                      <Button variant="outline" className="w-full justify-start text-emerald border-emerald/30 hover:bg-emerald/10" asChild>
                        <Link
                          href="https://github.com/Siddharth-magesh/MT-ERBS/blob/main/gui_demo/videos/testcase1.mp4"
                          target="_blank"
                        >
                          <Play className="mr-2 h-4 w-4" />
                          Test Case 1 Demo
                        </Link>
                      </Button>
                      <Button variant="outline" className="w-full justify-start text-emerald border-emerald/30 hover:bg-emerald/10" asChild>
                        <Link
                          href="https://github.com/Siddharth-magesh/MT-ERBS/blob/main/gui_demo/videos/testcase2.mp4"
                          target="_blank"
                        >
                          <Play className="mr-2 h-4 w-4" />
                          Test Case 2 Demo
                        </Link>
                      </Button>
                    </div>
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
                      <p className="text-amber font-medium">1st Place Winner</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    MT-ERBS received 1st Place recognition for its innovative emergency traffic management system
                    at the Ideathon competition. The project was awarded for its groundbreaking approach to AI-integrated
                    traffic manipulation with dynamic ambulance prioritization, demonstrating significant potential to
                    revolutionize emergency response systems and save lives during critical golden hour periods.
                  </p>
                  <div className="p-4 bg-amber/10 rounded-lg border border-amber/20 mb-4">
                    <p className="text-sm mb-1">
                      <span className="font-medium text-foreground">Competition:</span>{" "}
                      <span className="text-muted-foreground">Ideathon at Velammal Engineering College</span>
                    </p>
                    <p className="text-sm mb-1">
                      <span className="font-medium text-foreground">Date:</span>{" "}
                      <span className="text-muted-foreground">February 22, 2023</span>
                    </p>
                    <p className="text-sm">
                      <span className="font-medium text-foreground">Organizer:</span>{" "}
                      <span className="text-muted-foreground">Department of Physics, Velammal Engineering College</span>
                    </p>
                  </div>
                  <div className="flex flex-wrap justify-center gap-4">
                    <div className="bg-white rounded-lg p-3 border max-w-[160px]">
                      <img
                        src="/mterbs-certificate-1.jpg"
                        alt="MT-ERBS Competition Certificate 1"
                        className="w-full h-auto object-contain rounded"
                      />
                    </div>
                    <div className="bg-white rounded-lg p-3 border max-w-[160px]">
                      <img
                        src="/mterbs-certificate-2.jpg"
                        alt="MT-ERBS Competition Certificate 2"
                        className="w-full h-auto object-contain rounded"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Research Impact */}
      <section className="section-padding">
        <div className="container-max">
          <FadeIn>
            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-2xl">Research Impact & Applications</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  MT-ERBS addresses the critical challenge of emergency response optimization in urban traffic systems,
                  specifically targeting the golden hour period that determines survival outcomes in medical emergencies.
                  Unlike traditional smart traffic systems that prioritize general flow optimization, MT-ERBS implements
                  an emergency-centric design philosophy that can potentially save lives through dramatically reduced
                  ambulance response times.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The research establishes a foundation for next-generation intelligent transportation systems with
                  integrated emergency response capabilities. Beyond ambulance prioritization, the system architecture
                  supports extension to fire department rapid response, police emergency dispatch optimization, and
                  large-scale disaster management scenarios. As smart city infrastructure continues to expand globally,
                  MT-ERBS provides a blueprint for embedding life-saving emergency protocols into urban traffic management
                  systems at scale.
                </p>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  )
}
