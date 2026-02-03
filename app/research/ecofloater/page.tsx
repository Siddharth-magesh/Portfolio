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
  Calendar,
  Users,
  Brain,
  Cpu,
  Camera,
  Leaf,
  Waves,
  Target,
  Zap,
  Award,
  Eye,
  Navigation2,
} from "lucide-react"
import { FadeIn, SlideIn, StaggerContainer, StaggerItem } from "@/components/animations"

export default function EcofloaterPage() {
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
              <Link href="/research">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Research
              </Link>
            </Button>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <FadeIn delay={0.1}>
                <Badge variant="secondary" className="badge-emerald border mb-4">
                  Completed Research Project
                </Badge>
              </FadeIn>
              <FadeIn delay={0.2}>
                <h1 className="font-heading mb-2">Ecofloater</h1>
                <p className="text-lg text-muted-foreground mb-4">
                  Autonomous AI-Powered River Cleaning System
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  A fully autonomous, self-thinking environmental cleanup system that combines state-of-the-art
                  computer vision, custom synthetic datasets, and edge AI inference on NVIDIA Jetson Nano.
                  The system employs stereovision depth processing with Intel RealSense cameras and reinforcement
                  learning for intelligent debris collection in aquatic environments.
                </p>
              </FadeIn>
              <FadeIn delay={0.4}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-emerald hover:bg-emerald/90 text-white" asChild>
                    <Link href="https://scrapifyecotech.in/ecofloater" target="_blank">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Project Demo
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="https://github.com/Siddharth-magesh/Scrapify-Automation" target="_blank">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Code Repository
                    </Link>
                  </Button>
                </div>
              </FadeIn>
            </div>
            <SlideIn direction="right" delay={0.3}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-emerald/10 to-teal/10 rounded-2xl blur-xl" />
                <div className="aspect-video bg-background rounded-xl flex items-center justify-center border border-border relative overflow-hidden">
                  <img
                    src="/ecofloater-system.jpg"
                    alt="Ecofloater Autonomous River Cleaning System"
                    className="w-full h-full object-cover rounded-lg"
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
              <Card className="card-accent-emerald h-full">
                <CardHeader>
                  <Calendar className="h-6 w-6 text-emerald mb-2" />
                  <CardTitle className="text-lg">Research Timeline</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="font-medium text-foreground">2024 - 2025</p>
                    <p className="text-sm text-muted-foreground">
                      AI Research Internship at Scrapify Ecotech
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Project Duration</p>
                    <p className="text-sm text-muted-foreground">
                      6 months of intensive development, testing, and deployment
                    </p>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="card-accent-teal h-full">
                <CardHeader>
                  <Users className="h-6 w-6 text-teal mb-2" />
                  <CardTitle className="text-lg">Role & Contribution</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="font-medium text-foreground">AI Research Intern</p>
                    <p className="text-sm text-muted-foreground">Lead AI Developer & Computer Vision Specialist</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Key Responsibilities</p>
                    <p className="text-sm text-muted-foreground">
                      Model architecture design, dataset creation, edge deployment optimization
                    </p>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="card-accent-violet h-full">
                <CardHeader>
                  <Brain className="h-6 w-6 text-violet mb-2" />
                  <CardTitle className="text-lg">Project Status</CardTitle>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary" className="badge-success border mb-3">
                    Successfully Deployed
                  </Badge>
                  <p className="text-sm text-muted-foreground">
                    Fully operational autonomous system with real-time debris detection and collection
                    capabilities. Currently in active environmental monitoring and cleanup operations.
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>
          </StaggerContainer>

          {/* Abstract */}
          <FadeIn>
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="font-heading text-2xl">Project Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  The Ecofloater project represents a paradigm shift in autonomous environmental cleanup technology,
                  combining cutting-edge artificial intelligence with practical ecological conservation. This fully
                  autonomous system integrates advanced computer vision pipelines, custom synthetic training datasets,
                  and sophisticated stereoscopic camera calibration to enable self-directed river cleaning operations.
                  By leveraging Intel RealSense depth cameras, custom YOLO and Vision Transformer architectures, and
                  reinforcement learning-based decision making, Ecofloater demonstrates how AI can address real-world
                  environmental challenges at scale with minimal human intervention.
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
                    <Eye className="h-5 w-5 text-emerald" />
                    <span>Computer Vision Pipeline</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium text-sm mb-1">Custom YOLO Architecture</h4>
                    <p className="text-sm text-muted-foreground">
                      Specifically optimized object detection model for aquatic debris identification,
                      trained on proprietary synthetic datasets simulating various water conditions and debris types.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-1">Vision Transformer Integration</h4>
                    <p className="text-sm text-muted-foreground">
                      Hybrid architecture combining CNN-based detection with transformer attention mechanisms
                      for improved contextual understanding of complex debris patterns.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-1">Multi-Camera Fusion</h4>
                    <p className="text-sm text-muted-foreground">
                      Real-time processing of multiple video streams with synchronized detection and tracking
                      across overlapping camera fields of view.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Camera className="h-5 w-5 text-teal" />
                    <span>Depth Processing System</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-medium text-sm mb-1">Intel RealSense Integration</h4>
                    <p className="text-xs text-muted-foreground">
                      Industrial-grade depth cameras providing accurate 3D spatial data for debris
                      localization and navigation planning in dynamic aquatic environments.
                    </p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-medium text-sm mb-1">Stereovision Calibration</h4>
                    <p className="text-xs text-muted-foreground">
                      Sophisticated camera calibration pipeline ensuring precise depth estimation
                      across varying lighting and water surface conditions.
                    </p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-medium text-sm mb-1">3D Object Localization</h4>
                    <p className="text-xs text-muted-foreground">
                      Point cloud processing for accurate debris positioning, enabling precise
                      collection arm targeting and path planning optimization.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          </div>

          {/* Key Components */}
          <FadeIn delay={0.3}>
            <h3 className="font-heading text-xl mb-6">System Components</h3>
          </FadeIn>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8" staggerDelay={0.1}>
            {[
              {
                icon: Target,
                title: "Debris Detection",
                description: "High-accuracy object detection trained on custom synthetic aquatic debris datasets",
                color: "emerald",
              },
              {
                icon: Navigation2,
                title: "Autonomous Navigation",
                description: "RL-based path planning with obstacle avoidance and efficient coverage patterns",
                color: "teal",
              },
              {
                icon: Cpu,
                title: "Edge Computing",
                description: "Optimized inference on NVIDIA Jetson Nano for real-time autonomous operation",
                color: "violet",
              },
              {
                icon: Waves,
                title: "Aquatic Adaptation",
                description: "Robust operation in varying water conditions, currents, and visibility levels",
                color: "rose",
              },
              {
                icon: Zap,
                title: "Real-time Processing",
                description: "Low-latency inference pipeline maintaining continuous detection and response",
                color: "amber",
              },
              {
                icon: Leaf,
                title: "Eco-Friendly Design",
                description: "Power-efficient operation with minimal environmental impact during cleanup",
                color: "emerald",
              },
            ].map((component) => (
              <StaggerItem key={component.title}>
                <Card className={`card-accent-${component.color} hover:shadow-md transition-shadow h-full`}>
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-2">
                      <div className={`w-10 h-10 rounded-lg bg-${component.color}/10 flex items-center justify-center`}>
                        <component.icon className={`h-5 w-5 text-${component.color}`} />
                      </div>
                      <CardTitle className="text-lg">{component.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{component.description}</p>
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
                  "YOLO",
                  "Vision Transformers",
                  "Intel RealSense",
                  "NVIDIA Jetson Nano",
                  "Reinforcement Learning",
                  "Computer Vision",
                  "Stereovision",
                  "Depth Processing",
                  "PyTorch",
                  "TensorRT",
                  "OpenCV",
                  "ROS2",
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

      {/* Key Achievements */}
      <section className="section-padding">
        <div className="container-max">
          <FadeIn>
            <h2 className="font-heading text-3xl mb-8">Key Achievements</h2>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 gap-6 mb-12" staggerDelay={0.1}>
            {[
              {
                title: "Fully Autonomous Operation",
                description: "Achieved continuous river cleaning operations with minimal human intervention. The system independently navigates, detects, and collects debris based on real-time environmental analysis.",
                color: "emerald",
              },
              {
                title: "Edge-Optimized Inference",
                description: "Successfully deployed complex AI models on NVIDIA Jetson Nano, maintaining high detection accuracy while meeting strict latency requirements for real-time autonomous control.",
                color: "teal",
              },
              {
                title: "Custom Synthetic Datasets",
                description: "Developed proprietary training datasets simulating diverse aquatic conditions, debris types, and lighting scenarios to ensure robust model performance in real-world deployments.",
                color: "violet",
              },
              {
                title: "Environmental Impact",
                description: "Created a scalable solution for automated water body cleanup that significantly reduces manual intervention costs while increasing cleanup efficiency and coverage area.",
                color: "amber",
              },
            ].map((achievement) => (
              <StaggerItem key={achievement.title}>
                <Card className={`card-accent-${achievement.color} h-full`}>
                  <CardHeader>
                    <CardTitle className="font-heading text-lg">{achievement.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">{achievement.description}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Impact & Future */}
      <section className="section-padding bg-muted/30">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-8">
            <FadeIn>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl">Research Impact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    The Ecofloater project demonstrates the practical application of advanced AI technologies
                    in addressing critical environmental challenges. By combining state-of-the-art computer vision
                    with efficient edge deployment, the system proves that autonomous environmental cleanup
                    is not only technically feasible but economically viable.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    The research contributes to the growing field of environmental robotics, providing insights
                    into synthetic dataset generation for specialized domains, edge AI optimization techniques,
                    and the integration of multiple sensing modalities for robust autonomous operation.
                  </p>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={0.1}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl">Future Applications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        title: "Ocean Cleanup Operations",
                        description: "Adapting the technology for larger-scale marine debris collection systems",
                      },
                      {
                        title: "Smart City Integration",
                        description: "Connecting with urban environmental monitoring and management platforms",
                      },
                      {
                        title: "Multi-Robot Coordination",
                        description: "Developing collaborative swarm systems for large-scale cleanup projects",
                      },
                      {
                        title: "Biodiversity Monitoring",
                        description: "Extending vision capabilities to monitor aquatic ecosystem health",
                      },
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-emerald rounded-full mt-2 flex-shrink-0" />
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

      {/* Project Resources */}
      <section className="section-padding">
        <div className="container-max">
          <FadeIn>
            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-2xl">Project Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Button variant="outline" className="w-full justify-start h-auto py-4" asChild>
                    <Link href="https://scrapifyecotech.in/ecofloater" target="_blank">
                      <div className="flex items-center">
                        <ExternalLink className="mr-3 h-5 w-5 text-emerald" />
                        <div className="text-left">
                          <p className="font-medium">Project Demo</p>
                          <p className="text-xs text-muted-foreground">Live demonstration and documentation</p>
                        </div>
                      </div>
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full justify-start h-auto py-4" asChild>
                    <Link href="https://github.com/Siddharth-magesh/Scrapify-Automation" target="_blank">
                      <div className="flex items-center">
                        <ExternalLink className="mr-3 h-5 w-5 text-violet" />
                        <div className="text-left">
                          <p className="font-medium">Source Code</p>
                          <p className="text-xs text-muted-foreground">GitHub repository and documentation</p>
                        </div>
                      </div>
                    </Link>
                  </Button>
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
