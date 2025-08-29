"use client";

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Calendar, MapPin, Building, ExternalLink, Download } from "lucide-react"

export default function ScrapifyPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-background to-muted/30">
        <div className="container-max">
          <div className="mb-6">
            <Button variant="ghost" asChild>
              <Link href="/experience">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Experience
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-slate-100 text-slate-800 rounded-full text-sm font-medium mb-4">
                AI RESEARCH
              </div>
              <h1 className="font-heading mb-6">Scrapify Ecotech</h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Developed a fully autonomous self-thinking Ecofloater system for river cleaning using advanced computer
                vision models and custom synthetic datasets.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild>
                  <Link href="/research/ecofloater">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Project Details
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <a href="https://scrapifyecotech.in/" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Company Website
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center">
                <img
                  src="/scrapify-internship.jpg"
                  alt="Scrapify Ecotech AI Research Internship"
                  className="w-full h-full object-contain rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Role Details */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <Card>
              <CardHeader>
                <Calendar className="h-6 w-6 text-primary mb-2" />
                <CardTitle className="text-lg">Duration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">2024 - 2025</p>
                <p className="text-sm text-muted-foreground mt-2">Completed AI Research Internship</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <MapPin className="h-6 w-6 text-primary mb-2" />
                <CardTitle className="text-lg">Location</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">iTNT Hub, Anna University</p>
                <p className="text-sm text-muted-foreground mt-2">Guindy - 600015, Offline</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Building className="h-6 w-6 text-primary mb-2" />
                <CardTitle className="text-lg">Company</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Scrapify Ecotech</p>
                <p className="text-sm text-muted-foreground mt-2">Environmental Technology Startup</p>
              </CardContent>
            </Card>
          </div>

          {/* Role Overview */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="font-heading text-2xl">Role Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed text-muted-foreground">
                As an AI Research Intern at Scrapify Ecotech, I led the development of a revolutionary autonomous
                Ecofloater system designed for river cleaning operations. This role involved cutting-edge research in
                computer vision, autonomous systems, and environmental technology, resulting in a fully functional
                self-thinking cleaning system deployed on edge hardware.
              </p>
            </CardContent>
          </Card>

          {/* Key Responsibilities */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="font-heading text-2xl">Key Responsibilities</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-heading text-lg mb-2">Computer Vision Development</h3>
                  <p className="text-muted-foreground">
                    Developed custom YOLO and Vision Transformer architectures specifically optimized for debris
                    detection in aquatic environments, achieving high accuracy in real-world conditions.
                  </p>
                </div>
                <div>
                  <h3 className="font-heading text-lg mb-2">Camera System Integration</h3>
                  <p className="text-muted-foreground">
                    Implemented sophisticated camera calibration mechanisms including stereovision and depth vision
                    processing with Intel RealSense cameras for precise 3D environmental mapping.
                  </p>
                </div>
                <div>
                  <h3 className="font-heading text-lg mb-2">Autonomous Decision Making</h3>
                  <p className="text-muted-foreground">
                    Integrated reinforcement learning algorithms for autonomous decision-making, enabling the system to
                    adapt to different environmental conditions and optimize cleaning efficiency.
                  </p>
                </div>
                <div>
                  <h3 className="font-heading text-lg mb-2">Edge Deployment</h3>
                  <p className="text-muted-foreground">
                    Successfully deployed the complete AI pipeline on NVIDIA Jetson Nano with optimized real-time
                    inference, ensuring efficient operation in resource-constrained environments.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="font-heading text-2xl">Technical Environment</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-heading text-lg mb-2">Hardware Infrastructure</h3>
                  <p className="text-muted-foreground">
                    Worked with high-end PC systems featuring high-definition graphics drivers and CUDA-optimized memory
                    configurations for AI model training. Implemented solutions on various edge devices including NVIDIA
                    Jetson Nano and Raspberry Pi platforms.
                  </p>
                </div>
                <div>
                  <h3 className="font-heading text-lg mb-2">Camera Systems</h3>
                  <p className="text-muted-foreground">
                    Configured custom stereo camera setups with Intel RealSense cameras for advanced depth perception
                    and 3D environmental mapping capabilities.
                  </p>
                </div>
                <div>
                  <h3 className="font-heading text-lg mb-2">IoT Integration</h3>
                  <p className="text-muted-foreground">
                    Integrated various IoT and embedded system components for comprehensive autonomous operation and
                    real-time data processing.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Technologies Used */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="font-heading text-2xl">Technologies & Tools</CardTitle>
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
                <Badge variant="secondary">PyTorch</Badge>
                <Badge variant="secondary">OpenCV</Badge>
                <Badge variant="secondary">Python</Badge>
                <Badge variant="secondary">Edge Computing</Badge>
                <Badge variant="secondary">Raspberry Pi</Badge>
                <Badge variant="secondary">CUDA Programming</Badge>
                <Badge variant="secondary">Synthetic Datasets</Badge>
                <Badge variant="secondary">Camera Calibration</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="font-heading text-2xl">Key Achievements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    Successfully developed and deployed a fully autonomous river cleaning system with real-time debris
                    detection and collection capabilities.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    Achieved optimized real-time inference on edge hardware, enabling continuous autonomous operation
                    without external computing resources.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    Created custom synthetic datasets and training pipelines specifically designed for aquatic
                    environmental applications.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    Integrated multiple advanced technologies (computer vision, reinforcement learning, edge computing)
                    into a cohesive autonomous system.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-heading text-2xl">Documents</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button
                  variant="outline"
                  className="justify-start h-auto p-4 bg-transparent"
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/scrapify-internship-certificate.pdf'; // Update with the actual file path
                    link.download = 'Scrapify Internship Certificate.pdf';
                    link.click();
                  }}
                >
                  <Download className="mr-3 h-5 w-5" />
                  <div className="text-left">
                    <div className="font-medium">Internship Certificate</div>
                    <div className="text-sm text-muted-foreground">Official completion certificate</div>
                  </div>
                </Button>
                <Button
                  variant="outline"
                  className="justify-start h-auto p-4 bg-transparent"
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/scrapify-offer-letter.pdf'; // Update with the actual file path
                    link.download = 'Scrapify Offer Letter.pdf';
                    link.click();
                  }}
                >
                  <Download className="mr-3 h-5 w-5" />
                  <div className="text-left">
                    <div className="font-medium">Offer Letter</div>
                    <div className="text-sm text-muted-foreground">Original appointment letter</div>
                  </div>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
