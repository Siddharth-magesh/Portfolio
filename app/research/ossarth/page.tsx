"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Download, ExternalLink, Calendar, Users, Brain } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { useState, useEffect } from "react"

export default function OSSARTHPage() {
  const images = [
    "/ossarth-architecture-diagram.png",
    "/ossarth-interface-1.png",
    "/ossarth-interface-2.png",
    "/ossarth-interface-3.png",
    "/ossarth-interface-4.png"
  ];
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
              <h1 className="font-heading mb-2">Ossarth: An Open-Source Customizable LLMOS</h1>
              <p className="text-lg text-muted-foreground mb-6">
                AI-Powered Operating System with Natural Language Interface
              </p>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Customizable LLM-based Operating System enabling users to modify and extend functionality through
                natural language commands. Features multilingual support, AI-driven customization, and cross-platform
                compatibility.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-blue-600 hover:bg-blue-700"
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href = "/research-papers/OSSARTH-Research-Paper.pdf";
                    link.download = "OSSARTH_AI_Operating_System_Research.pdf";
                    link.click();
                  }}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Research Paper
                </Button>
                <Button
                  variant="outline"
                  className="border-blue-200 text-blue-700 hover:bg-blue-50 bg-transparent"
                  asChild
                >
                  <Link href="https://siddharth-magesh.github.io/Ossarth-Website/" target="_blank">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Project Website
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Carousel className="w-full">
                <CarouselContent>
                  {images.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="aspect-video bg-white rounded-2xl flex items-center justify-center p-6">
                        <img
                          src={image}
                          alt={`OSSARTH Interface ${index + 1}`}
                          className="w-full h-full object-contain rounded-xl"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
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
                <p className="text-muted-foreground font-semibold">2023 - 2024</p>
                <p className="text-sm text-muted-foreground mt-2">Performed Research and built theoretical foundations</p>
                <p className="text-muted-foreground font-semibold">2024 - 2025</p>
                <p className="text-sm text-muted-foreground mt-2">Initial Version and Built Working prototype</p>
                <p className="text-muted-foreground font-semibold">2025 - Ongoing</p>
                <p className="text-sm text-muted-foreground mt-2">Building Production Level Operating System</p>
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
                    <p className="text-sm text-muted-foreground">Lead Developer & AI Systems Architect</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Deepak Kumar M</p>
                    <p className="text-sm text-muted-foreground">AI Model Integration Specialist</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Beno Dharmaraaj P J</p>
                    <p className="text-sm text-muted-foreground">System Architecture & Deployment Engineer</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Priya M</p>
                    <p className="text-sm text-muted-foreground">Faculty Advisor & Research Supervisor</p>
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
                  Research Paper in Publuished in conference
                </Badge>
                <p className="text-sm text-muted-foreground">Active development and testing phase, Version V.0.1 has been released on a Expo Conducted at Velammal Engineering College</p>
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
                Ossarth introduces a revolutionary approach to operating system interaction through a customizable
                LLM-based Operating System (LLMOS) that replaces traditional GUI and CLI interfaces with natural
                language commands. The system enables users to modify and extend functionality according to their
                specific needs, featuring multilingual natural language processing, AI-driven system customization, and
                cross-platform compatibility. Built using the LangChain framework with Llama 3.2 7B for local inference,
                Ossarth provides an intuitive interaction model without traditional GUI constraints while maintaining
                the flexibility of command-line operations.
              </p>
            </CardContent>
          </Card>

          {/* Technical Overview */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="font-heading text-2xl">Technical Implementation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="font-heading text-lg mb-3">Core Technologies</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>
                      <strong>Framework:</strong> LangChain with Function Calling (Tool Calling) capabilities
                    </li>
                    <li>
                      <strong>AI Model:</strong> Llama 3.2 7B with local inference via Ollama
                    </li>
                    <li>
                      <strong>Architecture:</strong> Agent-based AI system with Flask-based web interface
                    </li>
                    <li>
                      <strong>Testing Environment:</strong> AMD Ryzen 7 5000 Series, NVIDIA RTX 3050, 32GB RAM, 1.5TB
                      SSD
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-heading text-lg mb-3">System Components</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>
                      <strong>Base OS:</strong> Ossarth foundation for user-defined modifications
                    </li>
                    <li>
                      <strong>PyPI Module:</strong> Ossarth framework for creating custom AI tools
                    </li>
                    <li>
                      <strong>Imager Application:</strong> For flashing custom OS images
                    </li>
                    <li>
                      <strong>Web Interface:</strong> Flask-based application serving OS-like environment
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-heading text-lg mb-3">Key Features</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Customizable LLM-based Operating System with user-defined modifications</li>
                    <li>Multilingual Natural Language Commands for intuitive interaction</li>
                    <li>AI-driven System Customization allowing custom tools and automation scripts</li>
                    <li>Cross-platform Compatibility (Windows, Linux, macOS)</li>
                    <li>Modular Architecture built with LangChain framework</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-heading text-lg mb-3">Technology Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-blue-50 text-blue-700">
                      LangChain
                    </Badge>
                    <Badge variant="secondary" className="bg-blue-50 text-blue-700">
                      Llama 3.2 7B
                    </Badge>
                    <Badge variant="secondary" className="bg-blue-50 text-blue-700">
                      Ollama
                    </Badge>
                    <Badge variant="secondary" className="bg-blue-50 text-blue-700">
                      Flask
                    </Badge>
                    <Badge variant="secondary" className="bg-blue-50 text-blue-700">
                      Python
                    </Badge>
                    <Badge variant="secondary" className="bg-blue-50 text-blue-700">
                      PyPI
                    </Badge>
                    <Badge variant="secondary" className="bg-blue-50 text-blue-700">
                      Natural Language Processing
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Implementation Methodology */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="font-heading text-2xl">Implementation Methodology</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <h3 className="font-heading text-lg mb-3">Customization Process</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        1
                      </div>
                      <div>
                        <h4 className="font-medium">Installation</h4>
                        <p className="text-sm text-muted-foreground">Via PyPI or GitHub repository</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        2
                      </div>
                      <div>
                        <h4 className="font-medium">Tool Creation</h4>
                        <p className="text-sm text-muted-foreground">
                          Python-based custom AI tools using built-in tool manager
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        3
                      </div>
                      <div>
                        <h4 className="font-medium">Integration</h4>
                        <p className="text-sm text-muted-foreground">Dynamic function generation and storage</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        4
                      </div>
                      <div>
                        <h4 className="font-medium">Deployment</h4>
                        <p className="text-sm text-muted-foreground">Using Ossarth Imager application</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Project Links */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="font-heading text-2xl">Project Resources</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button
                  variant="outline"
                  className="justify-start border-blue-200 text-blue-700 hover:bg-blue-50 bg-transparent"
                  asChild
                >
                  <Link href="https://siddharth-magesh.github.io/Ossarth-Website/" target="_blank">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Main Website
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="justify-start border-blue-200 text-blue-700 hover:bg-blue-50 bg-transparent"
                  asChild
                >
                  <Link href="https://github.com/Siddharth-magesh/OssarthOS" target="_blank">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    OS Repository
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="justify-start border-blue-200 text-blue-700 hover:bg-blue-50 bg-transparent"
                  asChild
                >
                  <Link href="https://github.com/Siddharth-magesh/Ossarth" target="_blank">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    PyPI Module
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="justify-start border-blue-200 text-blue-700 hover:bg-blue-50 bg-transparent"
                  asChild
                >
                  <Link href="https://github.com/Siddharth-magesh/Ossarth-Imager" target="_blank">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Imager Tool
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Future Development */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="font-heading text-2xl">Future Development Roadmap</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-heading text-lg mb-3">Planned Enhancements</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>
                      <strong>Device Expansion:</strong> Raspberry Pi, IoT devices, ARM-based architectures
                    </li>
                    <li>
                      <strong>PyPI Module Ecosystem:</strong> Ossarth-Community for collaborative tools,
                      Ossarth-External for device integration
                    </li>
                    <li>
                      <strong>GUI Platform:</strong> Web-based drag-and-drop system for non-programmers
                    </li>
                    <li>
                      <strong>Performance Optimization:</strong> Multi-threaded processing, enhanced CUDA support,
                      reduced latency
                    </li>
                    <li>
                      <strong>Security Enhancements:</strong> Granular access control, encrypted data handling, secure
                      API integrations
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Competition Achievement */}
          <Card className="mb-8 border-l-4 border-l-amber-500 bg-gradient-to-r from-amber-50 to-background">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🥉</span>
                </div>
                <div>
                  <CardTitle className="font-heading text-2xl text-amber-800">Competition Achievement</CardTitle>
                  <p className="text-amber-700 font-medium">3rd Place Winner</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-heading text-lg mb-2 text-amber-800">Recognition Details</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    OSSARTH received recognition as 3rd Place Winner for its innovative approach to AI-powered operating
                    system development. The project was acknowledged for its groundbreaking implementation of natural
                    language interface in operating systems and its potential to revolutionize human-computer
                    interaction paradigms.
                  </p>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                  <p className="text-sm text-amber-700 mb-2">
                    <strong>Competition:</strong> [Competition details to be updated]
                  </p>
                  <p className="text-sm text-amber-700 mb-2">
                    <strong>Date:</strong> [Date to be updated]
                  </p>
                  <p className="text-sm text-amber-700">
                    <strong>Organizing Body:</strong> Velammal Engineering College
                  </p>
                </div>
                <div className="flex items-center justify-center p-8 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-200 rounded-lg mx-auto mb-3 flex items-center justify-center">
                      <span className="text-2xl text-gray-400">🏆</span>
                    </div>
                    <p className="text-sm text-gray-500">Competition Certificate</p>
                    <p className="text-xs text-gray-400">(Image to be added)</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
