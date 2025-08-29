"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Download, ExternalLink, Calendar, Users, Brain, Play } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"

export default function MTERBSPage() {
  const handleDownloadPaper = () => {
    const link = document.createElement("a");
    link.href = "/research-papers/MTERBS-Research-Paper.pdf";
    link.download = "MTERBS_Traffic_Management_Research.pdf";
    link.click();
  };

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
                Ongoing Research Project
              </Badge>
              <h1 className="font-heading mb-2">
                Manipulating Traffic for Effective Rescue by Bypassing the Signals (MT-ERBS)
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                AI-Integrated Traffic Management System for Emergency Vehicle Priority
              </p>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                AI-integrated traffic manipulation system with dynamic ambulance prioritization through intelligent
                signal control. Reduces ambulance delays during critical golden hour period using IoT-enabled
                infrastructure and real-time emergency response optimization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-blue-600 hover:bg-blue-700"
                  onClick={handleDownloadPaper}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Research Paper
                </Button>
                <Button
                  variant="outline"
                  className="border-blue-200 text-blue-700 hover:bg-blue-50 bg-transparent"
                  asChild
                >
                  <Link href="https://github.com/Siddharth-magesh/MT-ERBS/" target="_blank">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Repository
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center p-6">
                <img
                  src="/mterbs-system-diagram.jpeg"
                  alt="MT-ERBS Traffic Control System"
                  className="w-full h-full object-contain rounded-xl"
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
                <p className="text-muted-foreground">2023 - 2026</p>
                <div className="space-y-2 mt-2">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium">2023-2024:</span> Theoretical framework development and system design
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium">2024-2025:</span> Prototype implementation and field testing
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium">2025-2026:</span> Research documentation and publication
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-6 w-6 text-blue-600 mb-2" />
                <CardTitle className="text-lg">Team</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-foreground">Siddharth Magesh</p>
                    <p className="text-sm text-muted-foreground">AI Researcher & System Architecture</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Arjun V L</p>
                    <p className="text-sm text-muted-foreground">AI Model Development & Implementation</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Gokulramanan V</p>
                    <p className="text-sm text-muted-foreground">IoT Integration & Field Testing</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Brain className="h-6 w-6 text-primary mb-2" />
                <CardTitle className="text-lg">Status</CardTitle>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary" className="mb-2">
                  Research Paper in Progress
                </Badge>
                <p className="text-sm text-muted-foreground">Core algorithms implemented and benchmarking tools developed, currently in publication preparation phase</p>
              </CardContent>
            </Card>
          </div>

          {/* Abstract */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="font-heading text-2xl">Abstract</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed text-muted-foreground">
                MT-ERBS introduces an AI-integrated traffic management system specifically designed for emergency
                vehicle priority, unlike traditional smart traffic systems. The system combines deep learning, computer
                vision, and IoT for comprehensive traffic management with emergency-centric design. Featuring 360-degree
                AI cameras at intersections, centralized server infrastructure, and dynamic AI algorithms, MT-ERBS
                processes ambulance telemetry, traffic signals, hospital data, and emergency calls in real-time to
                create optimal rescue pathways while maintaining traffic flow efficiency.
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
                  <h3 className="font-heading text-lg mb-3">System Architecture Components</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>
                      <strong>Centralized Server Infrastructure:</strong> High-performance computing for real-time
                      decision-making with aerial city network view
                    </li>
                    <li>
                      <strong>IoT Vision Network:</strong> 360-degree AI cameras at intersections with live traffic
                      analysis
                    </li>
                    <li>
                      <strong>Emergency Vehicle Fleet:</strong> Optimized ambulances with LCD panels, AI communication,
                      GPS modules, and medical equipment
                    </li>
                    <li>
                      <strong>Dynamic AI Algorithm:</strong> Multi-layered framework processing ambulance telemetry,
                      traffic signals, hospital data, and emergency calls
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-heading text-lg mb-3">Core Technologies</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>
                      <strong>AI Models:</strong> Computer vision for traffic analysis, NLP for emergency call
                      processing, reinforcement learning for decision-making
                    </li>
                    <li>
                      <strong>Real-time Processing:</strong> 10 Hz operation frequency with continuous state monitoring
                    </li>
                    <li>
                      <strong>Multi-source Integration:</strong> Emergency calls, traffic cameras, ambulance GPS,
                      hospital capacity systems
                    </li>
                    <li>
                      <strong>Optimization Engine:</strong> Model Predictive Control (MPC) for route refinement and
                      signal coordination
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-heading text-lg mb-3">Technology Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-blue-50 text-blue-700">
                      Computer Vision
                    </Badge>
                    <Badge variant="secondary" className="bg-blue-50 text-blue-700">
                      Deep Learning
                    </Badge>
                    <Badge variant="secondary" className="bg-blue-50 text-blue-700">
                      IoT Sensors
                    </Badge>
                    <Badge variant="secondary" className="bg-blue-50 text-blue-700">
                      Real-time Processing
                    </Badge>
                    <Badge variant="secondary" className="bg-blue-50 text-blue-700">
                      Model Predictive Control
                    </Badge>
                    <Badge variant="secondary" className="bg-blue-50 text-blue-700">
                      Reinforcement Learning
                    </Badge>
                    <Badge variant="secondary" className="bg-blue-50 text-blue-700">
                      Python
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* System Modules */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="font-heading text-2xl">Specialized Processing Modules</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <h4 className="font-medium text-foreground">Perception & Fusion</h4>
                  <p className="text-sm text-muted-foreground">
                    Multi-modal sensor data integration with forecasting capabilities
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-foreground">Mission Assignment</h4>
                  <p className="text-sm text-muted-foreground">
                    Optimal ambulance-to-emergency matching with hospital targeting
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-foreground">Route Planning</h4>
                  <p className="text-sm text-muted-foreground">Time-dependent pathfinding with MPC refinement</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-foreground">Signal Control</h4>
                  <p className="text-sm text-muted-foreground">Green wave creation with upstream traffic gating</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-foreground">Field Actuation</h4>
                  <p className="text-sm text-muted-foreground">Physical signal control and emergency indicators</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-foreground">Multi-Agency Coordination</h4>
                  <p className="text-sm text-muted-foreground">Hospital, police, and public transport integration</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Performance Validation */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="font-heading text-2xl">Performance Validation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="font-heading text-lg mb-3">Benchmarking Results</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                        <span className="text-sm font-medium">Ambulance Travel Time</span>
                        <span className="text-sm font-bold text-green-700">35.00 ± 0.00s</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                        <span className="text-sm font-medium">Blocking Time Reduction</span>
                        <span className="text-sm font-bold text-blue-700">26.13 ± 1.36s</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                        <span className="text-sm font-medium">System Reliability</span>
                        <span className="text-sm font-bold text-purple-700">100.0% Success</span>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                        <span className="text-sm font-medium">Traffic Flow Optimization</span>
                        <span className="text-sm font-bold text-orange-700">1056 ± 9.97 vehicles</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                        <span className="text-sm font-medium">Spillback Control</span>
                        <span className="text-sm font-bold text-red-700">65.33 ± 12.00</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <span className="text-sm font-medium">vs Baseline</span>
                        <span className="text-sm font-bold text-gray-700">Significant Improvement</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-heading text-lg mb-3">Custom Benchmarking Framework</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>
                      <strong>Traffic Network Modeling:</strong> Python-based urban traffic grid simulation
                    </li>
                    <li>
                      <strong>Performance Metrics:</strong> Travel time, blocking time, spillback analysis, signal
                      switching frequency
                    </li>
                    <li>
                      <strong>Evaluation Scenarios:</strong> Multiple test cases with varying traffic conditions and
                      ambulance routes
                    </li>
                    <li>
                      <strong>Visualization Tools:</strong> Real-time system state monitoring and performance analytics
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Project Resources */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="font-heading text-2xl">Project Resources</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button
                    variant="outline"
                    className="justify-start border-blue-200 text-blue-700 hover:bg-blue-50 bg-transparent"
                    asChild
                  >
                    <Link href="https://github.com/Siddharth-magesh/MT-ERBS/" target="_blank">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Main Repository
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="justify-start border-blue-200 text-blue-700 hover:bg-blue-50 bg-transparent"
                    asChild
                  >
                    <Link
                      href="https://github.com/Siddharth-magesh/MT-ERBS/blob/main/benchmarking_tool.py"
                      target="_blank"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Benchmarking Tool
                    </Link>
                  </Button>
                </div>

                <div>
                  <h3 className="font-heading text-lg mb-3">Demo Videos</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Button
                      variant="outline"
                      className="justify-start border-green-200 text-green-700 hover:bg-green-50 bg-transparent"
                      asChild
                    >
                      <Link
                        href="https://github.com/Siddharth-magesh/MT-ERBS/blob/main/gui_demo/videos/testcase1.mp4"
                        target="_blank"
                      >
                        <Play className="mr-2 h-4 w-4" />
                        Test Case 1 Demo
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      className="justify-start border-green-200 text-green-700 hover:bg-green-50 bg-transparent"
                      asChild
                    >
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
              </div>
            </CardContent>
          </Card>

          {/* Competition Achievement */}
          <Card className="mb-8 border-l-4 border-l-yellow-500 bg-gradient-to-r from-yellow-50 to-background">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🥇</span>
                </div>
                <div>
                  <CardTitle className="font-heading text-2xl text-yellow-800">Competition Achievement</CardTitle>
                  <p className="text-yellow-700 font-medium">1st Place Winner</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-heading text-lg mb-2 text-yellow-800">Recognition Details</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    MT-ERBS achieved 1st Place recognition for its innovative emergency traffic management system
                    innovation. The project was awarded for its groundbreaking approach to AI-integrated traffic
                    manipulation with dynamic ambulance prioritization, demonstrating significant potential to
                    revolutionize emergency response systems and save lives during critical golden hour periods.
                  </p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <p className="text-sm text-yellow-700 mb-2">
                    <strong>Competition:</strong> Ideathon at Velammal Engineering College
                  </p>
                  <p className="text-sm text-yellow-700 mb-2">
                    <strong>Date:</strong> February 22, 2023
                  </p>
                  <p className="text-sm text-yellow-700">
                    <strong>Organizing Body:</strong> Department of Physics, Velammal Engineering College
                  </p>
                </div>
                <div className="flex flex-wrap justify-center gap-4">
                  <div className="aspect-square bg-white rounded-lg flex items-center justify-center p-4 border max-w-xs">
                    <img
                      src="/mterbs-certificate-1.jpg"
                      alt="MT-ERBS Competition Certificate 1"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="aspect-square bg-white rounded-lg flex items-center justify-center p-4 border max-w-xs">
                    <img
                      src="/mterbs-certificate-2.jpg"
                      alt="MT-ERBS Competition Certificate 2"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Research Impact */}
          <Card>
            <CardHeader>
              <CardTitle className="font-heading text-2xl">Research Impact & Applications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  MT-ERBS addresses the critical challenge of emergency response optimization in urban traffic systems,
                  specifically targeting the golden hour period crucial for medical emergencies. Unlike traditional
                  smart traffic systems, this research focuses exclusively on emergency-centric design, potentially
                  saving lives through reduced ambulance response times.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The system's applications extend beyond ambulance prioritization to include fire department response,
                  police emergency dispatch, and disaster management scenarios. The research provides a foundation for
                  next-generation intelligent transportation systems with emergency response capabilities integrated
                  into smart city infrastructure.
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
