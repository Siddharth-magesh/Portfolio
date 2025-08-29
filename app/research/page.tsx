"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, FileText, Calendar, ExternalLink, Brain, Car, Waves } from "lucide-react"

export default function ResearchPage() {
  const handleDownloadOSSARTH = () => {
    // Download OSSARTH research paper
    const link = document.createElement("a")
    link.href = "/research-papers/OSSARTH-Research-Paper.pdf"
    link.download = "OSSARTH_AI_Operating_System_Research.pdf"
    link.click()
  }

  const handleDownloadMTERBS = () => {
    // Download MTERBS research paper
    const link = document.createElement("a")
    link.href = "/research-papers/MTERBS-Research-Paper.pdf"
    link.download = "MTERBS_Traffic_Management_Research.pdf"
    link.click()
  }
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-background to-muted/30">
        <div className="container-max">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-100 text-slate-800 text-sm font-medium mb-4">
              Research Portfolio
            </div>
            <h1 className="font-heading mb-6">AI Research Projects</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Advancing the frontiers of Artificial Intelligence through innovative research in autonomous systems,
              natural language processing, and intelligent infrastructure solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Research Projects */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {/* OSSARTH Project */}
            <Card className="group hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 border-0 shadow-md hover:scale-[1.02]">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Brain className="h-8 w-8 text-blue-600" />
                  <Badge variant="outline" className="border-blue-200 text-blue-700">
                    Ongoing Research
                  </Badge>
                </div>
                <CardTitle className="font-heading text-xl mb-2">OSSARTH</CardTitle>
                <p className="text-sm text-muted-foreground">AI-Powered Operating System</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Revolutionary operating system replacing traditional GUI and CLI with natural language interaction
                  powered by large language models. Optimized for low-powered hardware with intelligent command
                  interpretation.
                </p>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-4">
                  <Calendar className="h-4 w-4" />
                  <span>2024 - 2026</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100">
                    LLMs
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100">
                    NLP
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100">
                    OS Design
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100">
                    Raspberry Pi
                  </Badge>
                </div>
                <div className="flex space-x-2">
                  <Button asChild size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700">
                    <Link href="/research/ossarth">
                      View Details <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-blue-200 text-blue-700 hover:bg-blue-50 bg-transparent"
                    onClick={handleDownloadOSSARTH}
                  >
                    <FileText className="h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* MTERBS Project */}
            <Card className="group hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 border-0 shadow-md hover:scale-[1.02]">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Car className="h-8 w-8 text-blue-600" />
                  <Badge variant="outline" className="border-blue-200 text-blue-700">
                    Ongoing Research
                  </Badge>
                </div>
                <CardTitle className="font-heading text-xl mb-2">MT-ERBS</CardTitle>
                <p className="text-sm text-muted-foreground">Intelligent Emergency Traffic Control System</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  AI-integrated traffic manipulation framework with deep learning and IoT-enabled vision sensors for
                  real-time monitoring. Dynamic ambulance prioritization with minimal delay during golden hour.
                </p>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-4">
                  <Calendar className="h-4 w-4" />
                  <span>2023 - 2026</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100">
                    Computer Vision
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100">
                    IoT
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100">
                    Deep Learning
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100">
                    Traffic AI
                  </Badge>
                </div>
                <div className="flex space-x-2">
                  <Button asChild size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700">
                    <Link href="/research/mterbs">
                      View Details <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-blue-200 text-blue-700 hover:bg-blue-50 bg-transparent"
                    onClick={handleDownloadMTERBS}
                  >
                    <FileText className="h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Ecofloater Project */}
            <Card className="group hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 border-0 shadow-md hover:scale-[1.02]">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Waves className="h-8 w-8 text-blue-600" />
                  <Badge variant="outline" className="border-green-200 text-green-700">
                    Completed
                  </Badge>
                </div>
                <CardTitle className="font-heading text-xl mb-2">Ecofloater</CardTitle>
                <p className="text-sm text-muted-foreground">Autonomous River Cleaning System</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Fully autonomous self-thinking system for river cleaning using advanced computer vision models and
                  custom synthetic datasets. Deployed on NVIDIA Jetson Nano with real-time inference.
                </p>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-4">
                  <Calendar className="h-4 w-4" />
                  <span>2024 - 2025</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100">
                    YOLO
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100">
                    Vision Transformers
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100">
                    NVIDIA Jetson
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100">
                    Reinforcement Learning
                  </Badge>
                </div>
                <div className="flex space-x-2">
                  <Button asChild size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700">
                    <Link href="/research/ecofloater">
                      View Details <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-blue-200 text-blue-700 hover:bg-blue-50 bg-transparent"
                    onClick={() => window.open('https://www.thehindu.com/news/national/tamil-nadu/chennais-scrapify-ecotech-to-showcase-ecofloater-water-drone-at-denmark/article68800671.ece', '_blank')}
                  >
                    <ExternalLink className="h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Research Impact */}
      <section className="section-padding bg-muted/30">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="font-heading mb-4">Research Impact</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Contributing to the advancement of AI through practical implementations and theoretical innovations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-heading font-bold text-blue-600 mb-2">3</div>
              <div className="text-sm text-muted-foreground">Active Research Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-heading font-bold text-blue-600 mb-2">2</div>
              <div className="text-sm text-muted-foreground">Research Papers in Progress</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-heading font-bold text-blue-600 mb-2">5+</div>
              <div className="text-sm text-muted-foreground">AI Domains Explored</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center">
            <h2 className="font-heading mb-4">Collaborate on Research</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Interested in collaborating on AI research or discussing these projects? Let's connect and explore
              opportunities together.
            </p>
            {/* Enhanced button styling with blue theme */}
            <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700">
              <Link href="/contact">
                Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
