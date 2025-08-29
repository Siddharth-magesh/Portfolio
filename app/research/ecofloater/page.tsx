import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Calendar, Users, Brain } from "lucide-react"

export default function EcofloaterPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-background to-muted/30">
        <div className="container-max">
          <div className="mb-6">
            <Button variant="ghost" asChild>
              <Link href="/research">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Research
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">
                Completed Research Project
              </Badge>
              <h1 className="font-heading mb-6">Ecofloater</h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Fully autonomous self-thinking Ecofloater system for river cleaning using advanced computer vision
                models and custom synthetic datasets with real-time inference on NVIDIA Jetson Nano.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild>
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
            </div>
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center">
                <img
                  src="/ecofloater-system.jpg"
                  alt="Ecofloater Autonomous River Cleaning System"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <Card>
              <CardHeader>
                <Calendar className="h-6 w-6 text-primary mb-2" />
                <CardTitle className="text-lg">Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-semibold">2024 - 2025</p>
                <p className="text-sm text-muted-foreground mt-2">AI Research Internship at Scrapify Ecotech</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-6 w-6 text-primary mb-2" />
                <CardTitle className="text-lg">Role</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-semibold">AI Research Intern</p>
                <p className="text-sm text-muted-foreground mt-2">Lead AI Developer & Computer Vision Specialist</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Brain className="h-6 w-6 text-primary mb-2" />
                <CardTitle className="text-lg">Status</CardTitle>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary" className="mb-2">
                  Successfully Deployed
                </Badge>
                <p className="text-sm text-muted-foreground">Operational autonomous system</p>
              </CardContent>
            </Card>
          </div>

          {/* Project Overview */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="font-heading text-2xl">Project Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed text-muted-foreground">
                The Ecofloater project represents a breakthrough in autonomous environmental cleanup technology. This
                fully autonomous system combines advanced computer vision models, custom synthetic datasets, and
                sophisticated camera calibration mechanisms to create a self-thinking river cleaning solution. The
                system successfully integrates stereovision and depth vision processing with Intel RealSense cameras,
                custom YOLO and Vision Transformer architectures, and reinforcement learning for autonomous
                decision-making.
              </p>
            </CardContent>
          </Card>

          {/* Technical Implementation */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="font-heading text-2xl">Technical Implementation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="font-heading text-lg mb-3">Computer Vision Pipeline</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Developed custom YOLO and Vision Transformer architectures specifically optimized for debris
                    detection in aquatic environments. The system processes real-time video feeds from multiple camera
                    angles to identify, classify, and track floating debris with high accuracy.
                  </p>
                </div>

                <div>
                  <h3 className="font-heading text-lg mb-3">Camera Calibration & Depth Processing</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Implemented sophisticated camera calibration mechanisms including stereovision and depth vision
                    processing using Intel RealSense cameras. This enables precise 3D localization of debris and
                    accurate navigation planning for the autonomous cleaning system.
                  </p>
                </div>

                <div>
                  <h3 className="font-heading text-lg mb-3">Autonomous Decision Making</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Integrated reinforcement learning algorithms that enable the system to make intelligent decisions
                    about cleaning priorities, navigation paths, and resource optimization. The system continuously
                    learns and adapts to different environmental conditions and debris patterns.
                  </p>
                </div>

                <div>
                  <h3 className="font-heading text-lg mb-3">Edge Deployment</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Successfully deployed the entire AI pipeline on NVIDIA Jetson Nano with optimized real-time
                    inference. The system achieves efficient processing while maintaining low power consumption suitable
                    for autonomous aquatic operations.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Technology Stack */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="font-heading text-2xl">Technology Stack</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                <Badge variant="secondary">YOLO</Badge>
                <Badge variant="secondary">Vision Transformers</Badge>
                <Badge variant="secondary">Intel RealSense</Badge>
                <Badge variant="secondary">NVIDIA Jetson Nano</Badge>
                <Badge variant="secondary">Reinforcement Learning</Badge>
                <Badge variant="secondary">Computer Vision</Badge>
                <Badge variant="secondary">Stereovision</Badge>
                <Badge variant="secondary">Depth Processing</Badge>
                <Badge variant="secondary">Real-time Inference</Badge>
                <Badge variant="secondary">Autonomous Navigation</Badge>
                <Badge variant="secondary">Custom Datasets</Badge>
                <Badge variant="secondary">Edge Computing</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Key Achievements */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="font-heading text-2xl">Key Achievements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-heading text-lg mb-3">Autonomous Operation</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Achieved fully autonomous operation with minimal human intervention, capable of continuous river
                    cleaning operations.
                  </p>
                </div>
                <div>
                  <h3 className="font-heading text-lg mb-3">Real-time Processing</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Optimized AI models for real-time inference on edge hardware, maintaining high accuracy while
                    meeting performance requirements.
                  </p>
                </div>
                <div>
                  <h3 className="font-heading text-lg mb-3">Custom AI Models</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Developed specialized computer vision models trained on custom synthetic datasets for aquatic debris
                    detection.
                  </p>
                </div>
                <div>
                  <h3 className="font-heading text-lg mb-3">Environmental Impact</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Created a scalable solution for automated river cleaning that can significantly reduce water
                    pollution and environmental damage.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Impact & Future Work */}
          <Card>
            <CardHeader>
              <CardTitle className="font-heading text-2xl">Impact & Future Applications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  The Ecofloater project demonstrates the practical application of advanced AI technologies in
                  environmental conservation. The system's success opens possibilities for scaling autonomous cleaning
                  operations across multiple water bodies and adapting the technology for different environmental
                  cleanup scenarios.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Future applications include adaptation for ocean cleanup operations, integration with smart city
                  environmental monitoring systems, and development of collaborative multi-robot cleaning networks for
                  large-scale environmental restoration projects.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
