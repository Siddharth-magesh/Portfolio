"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Building,
  ExternalLink,
  Download,
  Eye,
  Cpu,
  Camera,
  Brain,
  Zap,
  CheckCircle,
  Waves,
  Award,
} from "lucide-react"
import { FadeIn, SlideIn, StaggerContainer, StaggerItem } from "@/components/animations"

export default function ScrapifyPage() {
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
              <Link href="/experience">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Experience
              </Link>
            </Button>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <FadeIn delay={0.1}>
                <Badge variant="secondary" className="badge-emerald border mb-4">
                  AI Research Internship
                </Badge>
              </FadeIn>
              <FadeIn delay={0.2}>
                <h1 className="font-heading mb-2">AI Research Intern</h1>
                <p className="text-lg text-muted-foreground mb-4">
                  Scrapify Ecotech – Ecofloater Project
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Led the development of a revolutionary autonomous Ecofloater system for river cleaning at Scrapify Ecotech,
                  an environmental technology startup incubated at iTNT Hub, Anna University. Pioneered computer vision
                  solutions using custom YOLO architectures and Vision Transformers for real-time debris detection,
                  integrating Intel RealSense depth cameras and reinforcement learning for autonomous navigation
                  on NVIDIA Jetson edge hardware.
                </p>
              </FadeIn>
              <FadeIn delay={0.4}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild className="bg-emerald hover:bg-emerald/90 text-emerald-foreground">
                    <Link href="/research/ecofloater">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Research Details
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="https://scrapifyecotech.in/" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Company Website
                    </a>
                  </Button>
                </div>
              </FadeIn>
            </div>
            <SlideIn direction="right" delay={0.3}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-emerald/10 to-teal/10 rounded-2xl blur-xl" />
                <div className="relative aspect-video bg-muted rounded-xl overflow-hidden border border-border">
                  <img
                    src="/scrapify-internship.jpg"
                    alt="Scrapify Ecotech AI Research Internship"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Role Details */}
      <section className="section-padding">
        <div className="container-max">
          <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12" staggerDelay={0.1}>
            <StaggerItem>
              <Card className="card-accent-emerald h-full">
                <CardHeader>
                  <Calendar className="h-6 w-6 text-emerald mb-2" />
                  <CardTitle className="text-lg">Duration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground font-medium">2024 - 2025</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    6-month intensive AI research internship with hands-on system development
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="card-accent-teal h-full">
                <CardHeader>
                  <MapPin className="h-6 w-6 text-teal mb-2" />
                  <CardTitle className="text-lg">Location</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground font-medium">iTNT Hub, Anna University</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Guindy, Chennai - 600015 (On-site)
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="card-accent-violet h-full">
                <CardHeader>
                  <Building className="h-6 w-6 text-violet mb-2" />
                  <CardTitle className="text-lg">Company</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground font-medium">Scrapify Ecotech</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Environmental technology startup focused on autonomous water body cleaning solutions
                  </p>
                  <Badge variant="secondary" className="badge-success border mt-3">
                    Completed
                  </Badge>
                </CardContent>
              </Card>
            </StaggerItem>
          </StaggerContainer>

          {/* Role Overview */}
          <FadeIn>
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="font-heading text-2xl">Role Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  As the lead AI Research Intern at Scrapify Ecotech, I spearheaded the development of the complete
                  autonomous intelligence stack for the Ecofloater river cleaning system. This role involved cutting-edge
                  research in computer vision, autonomous systems, and environmental technology. I was responsible for
                  the entire AI pipeline—from synthetic dataset generation and model architecture design to edge deployment
                  optimization—resulting in a fully functional self-thinking cleaning system capable of real-time debris
                  detection and autonomous navigation in dynamic aquatic environments.
                </p>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </section>

      {/* Key Responsibilities */}
      <section className="section-padding bg-muted/30">
        <div className="container-max">
          <FadeIn>
            <h2 className="font-heading text-3xl mb-8">Key Responsibilities</h2>
          </FadeIn>
          <StaggerContainer className="grid md:grid-cols-2 gap-6" staggerDelay={0.1}>
            <StaggerItem>
              <Card className="card-accent-emerald h-full hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 rounded-lg bg-emerald/10 flex items-center justify-center">
                      <Eye className="h-5 w-5 text-emerald" />
                    </div>
                    <CardTitle className="text-lg">Computer Vision Development</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Developed custom YOLO (You Only Look Once) and Vision Transformer architectures specifically
                    optimized for debris detection in aquatic environments. Achieved high accuracy in real-world
                    conditions with varying lighting, water turbidity, and debris types through extensive
                    augmentation and synthetic data generation.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">YOLOv8</Badge>
                    <Badge variant="secondary">Vision Transformers</Badge>
                    <Badge variant="secondary">Custom Datasets</Badge>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="card-accent-teal h-full hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center">
                      <Camera className="h-5 w-5 text-teal" />
                    </div>
                    <CardTitle className="text-lg">Camera System Integration</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Implemented sophisticated camera calibration mechanisms including stereovision and depth
                    vision processing with Intel RealSense D435i cameras. Developed precise 3D environmental
                    mapping algorithms for accurate debris localization and distance estimation in real-time.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Intel RealSense</Badge>
                    <Badge variant="secondary">Stereovision</Badge>
                    <Badge variant="secondary">Depth Processing</Badge>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="card-accent-violet h-full hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 rounded-lg bg-violet/10 flex items-center justify-center">
                      <Brain className="h-5 w-5 text-violet" />
                    </div>
                    <CardTitle className="text-lg">Autonomous Decision Making</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Integrated reinforcement learning algorithms enabling the system to make intelligent decisions
                    about cleaning priorities, navigation paths, and resource optimization. The system continuously
                    learns and adapts to different environmental conditions and debris patterns without human intervention.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Reinforcement Learning</Badge>
                    <Badge variant="secondary">Path Planning</Badge>
                    <Badge variant="secondary">Decision Systems</Badge>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="card-accent-amber h-full hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 rounded-lg bg-amber/10 flex items-center justify-center">
                      <Cpu className="h-5 w-5 text-amber" />
                    </div>
                    <CardTitle className="text-lg">Edge Deployment</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Successfully deployed the complete AI pipeline on NVIDIA Jetson Nano with optimized real-time
                    inference achieving 15+ FPS. Implemented TensorRT optimization, model quantization, and
                    memory-efficient processing for resource-constrained edge environments.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">NVIDIA Jetson</Badge>
                    <Badge variant="secondary">TensorRT</Badge>
                    <Badge variant="secondary">Edge Computing</Badge>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Technical Environment */}
      <section className="section-padding">
        <div className="container-max">
          <FadeIn>
            <h2 className="font-heading text-3xl mb-8">Technical Environment</h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <FadeIn delay={0.1}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Cpu className="h-5 w-5 text-emerald" />
                    <span>Hardware Infrastructure</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium text-sm mb-1">Training Systems</h4>
                    <p className="text-sm text-muted-foreground">
                      High-end workstations with NVIDIA RTX GPUs, CUDA-optimized configurations,
                      and 64GB+ RAM for large-scale model training and synthetic data generation.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-1">Edge Deployment</h4>
                    <p className="text-sm text-muted-foreground">
                      NVIDIA Jetson Nano for primary inference, Raspberry Pi 4 for auxiliary
                      processing, and custom PCBs for sensor integration.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-1">Sensor Suite</h4>
                    <p className="text-sm text-muted-foreground">
                      Intel RealSense D435i depth cameras, custom stereo camera rigs, and
                      environmental sensors for comprehensive situational awareness.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Zap className="h-5 w-5 text-teal" />
                    <span>Software Stack</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium text-sm mb-1">Deep Learning Frameworks</h4>
                    <p className="text-sm text-muted-foreground">
                      PyTorch for model development, Ultralytics for YOLO implementations,
                      and Hugging Face Transformers for Vision Transformer architectures.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-1">Computer Vision</h4>
                    <p className="text-sm text-muted-foreground">
                      OpenCV for image processing, Open3D for point cloud manipulation,
                      and custom RealSense SDK integration for depth stream processing.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-1">Optimization Tools</h4>
                    <p className="text-sm text-muted-foreground">
                      NVIDIA TensorRT for inference acceleration, ONNX for model portability,
                      and custom CUDA kernels for performance-critical operations.
                    </p>
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
                  "Python",
                  "PyTorch",
                  "YOLO",
                  "Vision Transformers",
                  "Intel RealSense",
                  "NVIDIA Jetson Nano",
                  "TensorRT",
                  "Reinforcement Learning",
                  "OpenCV",
                  "Stereovision",
                  "Depth Processing",
                  "Edge Computing",
                  "Raspberry Pi",
                  "CUDA",
                  "Synthetic Datasets",
                  "Camera Calibration",
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
      <section className="section-padding bg-muted/30">
        <div className="container-max">
          <FadeIn>
            <h2 className="font-heading text-3xl mb-8">Key Achievements</h2>
          </FadeIn>
          <StaggerContainer className="grid md:grid-cols-2 gap-6 mb-12" staggerDelay={0.1}>
            {[
              {
                title: "Autonomous System Deployment",
                description: "Successfully developed and deployed a fully autonomous river cleaning system with real-time debris detection achieving 95%+ accuracy in field conditions.",
                icon: Waves,
                color: "emerald",
              },
              {
                title: "Edge Optimization",
                description: "Achieved optimized real-time inference at 15+ FPS on NVIDIA Jetson Nano through TensorRT optimization and model quantization techniques.",
                icon: Zap,
                color: "teal",
              },
              {
                title: "Custom Dataset Creation",
                description: "Created comprehensive synthetic and real-world datasets with 10,000+ annotated images specifically designed for aquatic debris detection.",
                icon: Eye,
                color: "violet",
              },
              {
                title: "Multi-Technology Integration",
                description: "Integrated computer vision, reinforcement learning, depth sensing, and edge computing into a cohesive autonomous system architecture.",
                icon: Brain,
                color: "amber",
              },
            ].map((achievement) => (
              <StaggerItem key={achievement.title}>
                <Card className={`card-accent-${achievement.color} h-full hover:shadow-md transition-shadow`}>
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-2">
                      <div className={`w-10 h-10 rounded-lg bg-${achievement.color}/10 flex items-center justify-center`}>
                        <achievement.icon className={`h-5 w-5 text-${achievement.color}`} />
                      </div>
                      <CardTitle className="text-lg">{achievement.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{achievement.description}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Documents */}
      <section className="section-padding">
        <div className="container-max">
          <FadeIn>
            <h2 className="font-heading text-3xl mb-8">Documents & Resources</h2>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6" staggerDelay={0.1}>
            <StaggerItem>
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="font-heading text-lg">Internship Certificate</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 text-sm">
                    Official completion certificate from Scrapify Ecotech acknowledging AI research contributions
                  </p>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => {
                      const link = document.createElement("a")
                      link.href = "/scrapify-internship-certificate.pdf"
                      link.download = "Scrapify Internship Certificate.pdf"
                      link.click()
                    }}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download Certificate
                  </Button>
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="font-heading text-lg">Offer Letter</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 text-sm">
                    Original internship offer letter detailing position terms and research responsibilities
                  </p>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => {
                      const link = document.createElement("a")
                      link.href = "/scrapify-offer-letter.pdf"
                      link.download = "Scrapify Offer Letter.pdf"
                      link.click()
                    }}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download Offer Letter
                  </Button>
                </CardContent>
              </Card>
            </StaggerItem>
          </StaggerContainer>

          <FadeIn delay={0.2}>
            <Card className="mt-8 card-accent-emerald bg-gradient-to-br from-emerald/5 to-background">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-emerald/20 rounded-full flex items-center justify-center">
                    <Award className="h-6 w-6 text-emerald" />
                  </div>
                  <div>
                    <CardTitle className="font-heading text-xl">Related Research</CardTitle>
                    <p className="text-emerald font-medium">Ecofloater Autonomous System</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  This internship resulted in a comprehensive research project on autonomous aquatic cleaning systems.
                  View the complete technical documentation, architecture details, and deployment specifications.
                </p>
                <Button asChild>
                  <Link href="/research/ecofloater">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Full Research Details
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  )
}
