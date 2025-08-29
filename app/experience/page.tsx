import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Calendar, MapPin, Building, Users } from "lucide-react"

export default function ExperiencePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-background to-muted/30">
        <div className="container-max">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-100 text-slate-800 text-sm font-medium mb-4">
              Professional Experience
            </div>
            <h1 className="font-heading mb-6">Career Journey</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              From AI research internships to backend development and entrepreneurial ventures, building expertise
              across the full spectrum of artificial intelligence and software engineering.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="section-padding">
        <div className="container-max">
          <div className="space-y-8">
            {/* Scrapify AI Intern */}
            <Card className="group hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 border-l-4 border-l-blue-500">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                  <div className="lg:col-span-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="text-sm text-muted-foreground">2024 - 2025</span>
                    </div>
                    <div className="flex items-center space-x-2 mb-4">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span className="text-sm text-muted-foreground">iTNT Hub, Anna University</span>
                    </div>
                    <Badge variant="outline">Completed</Badge>
                  </div>
                  <div className="lg:col-span-3">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-heading text-xl mb-1">
                          AI Research Intern – Scrapify Ecotech (Ecofloater Project)
                        </h3>
                        <p className="text-primary font-medium">Scrapify Ecotech</p>
                      </div>
                      <Building className="h-6 w-6 text-primary" />
                    </div>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Developed fully autonomous self-thinking Ecofloater system for river cleaning utilizing advanced
                      computer vision models and custom synthetic datasets. Implemented sophisticated camera calibration
                      mechanisms including stereovision and depth vision processing with Intel RealSense cameras.
                      Created custom YOLO and Vision Transformer architectures with reinforcement learning for
                      autonomous decision-making, successfully deployed on NVIDIA Jetson Nano with optimized real-time
                      inference.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline">Computer Vision</Badge>
                      <Badge variant="outline">YOLO</Badge>
                      <Badge variant="outline">Vision Transformers</Badge>
                      <Badge variant="outline">Intel RealSense</Badge>
                      <Badge variant="outline">NVIDIA Jetson Nano</Badge>
                      <Badge variant="outline">Reinforcement Learning</Badge>
                      <Badge variant="outline">Stereovision Processing</Badge>
                      <Badge variant="outline">CUDA Optimization</Badge>
                    </div>
                    <Button asChild size="sm" className="hover:bg-blue-600">
                      <Link href="/experience/scrapify">
                        View Details <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Inspire Solutions */}
            <Card className="group hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 border-l-4 border-l-blue-500">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                  <div className="lg:col-span-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="text-sm text-muted-foreground">2023 - 2024</span>
                    </div>
                    <div className="flex items-center space-x-2 mb-4">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span className="text-sm text-muted-foreground">Remote</span>
                    </div>
                    <Badge variant="outline">Completed</Badge>
                  </div>
                  <div className="lg:col-span-3">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-heading text-xl mb-1">
                          AI/ML Intern – Inzpire Solutions (Aladipattiyan Karupatti Coffee)
                        </h3>
                        <p className="text-primary font-medium">Inzpire Solutions</p>
                      </div>
                      <Building className="h-6 w-6 text-primary" />
                    </div>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Built machine learning models for stock handling analysis and developed systems for verifying
                      original supply amounts in restaurant operations. Created computer vision models for automated
                      cleanliness assessment of utensils, implemented sanitization monitoring systems, and developed
                      vision-based systems for real-time shelf inventory monitoring. Contributed to multiple open-source
                      datasets for hospitality industry AI applications.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline">Machine Learning</Badge>
                      <Badge variant="outline">Computer Vision</Badge>
                      <Badge variant="outline">Object Detection</Badge>
                      <Badge variant="outline">Flask API</Badge>
                      <Badge variant="outline">Python</Badge>
                      <Badge variant="outline">Inventory Management</Badge>
                      <Badge variant="outline">Quality Assessment</Badge>
                    </div>
                    <Button asChild size="sm" className="hover:bg-blue-600">
                      <Link href="/experience/inzpire-solutions">
                        View Details <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* VEC Website */}
            <Card className="group hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 border-l-4 border-l-blue-500">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                  <div className="lg:col-span-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="text-sm text-muted-foreground">2023 - 2025</span>
                    </div>
                    <div className="flex items-center space-x-2 mb-4">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span className="text-sm text-muted-foreground">Offline</span>
                    </div>
                    <Badge variant="secondary">Ongoing</Badge>
                  </div>
                  <div className="lg:col-span-3">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-heading text-xl mb-1">Lead Backend Developer</h3>
                        <p className="text-primary font-medium">WebOps Club - Velammal Engineering College</p>
                      </div>
                      <Building className="h-6 w-6 text-primary" />
                    </div>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Led team of backend developers in building comprehensive college website infrastructure as part of
                      the founding Pilot Batch. Designed system architecture for scalable web applications, managed
                      collection and processing of large-scale institutional data, and implemented robust security
                      measures with CI/CD pipelines. Mentored Co-Pilot Batch and established the foundation for future
                      development teams.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline">Team Leadership</Badge>
                      <Badge variant="outline">MERN Stack</Badge>
                      <Badge variant="outline">Node.js</Badge>
                      <Badge variant="outline">MongoDB</Badge>
                      <Badge variant="outline">AWS Deployment</Badge>
                      <Badge variant="outline">CI/CD Pipelines</Badge>
                      <Badge variant="outline">Project Management</Badge>
                    </div>
                    <Button asChild size="sm" className="hover:bg-blue-600">
                      <Link href="/experience/vec-website">
                        View Details <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* GradGear */}
            <Card className="group hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 border-l-4 border-l-blue-500">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                  <div className="lg:col-span-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="text-sm text-muted-foreground">2024 - 2025</span>
                    </div>
                    <div className="flex items-center space-x-2 mb-4">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span className="text-sm text-muted-foreground">Chennai, India</span>
                    </div>
                    <Badge variant="secondary">Ongoing</Badge>
                  </div>
                  <div className="lg:col-span-3">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-heading text-xl mb-1">Co-Founder</h3>
                        <p className="text-primary font-medium">GradGear (AI-Powered Consultancy)</p>
                      </div>
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Co-founded startup developing AI-driven application for personalized laptop recommendations. Built
                      dynamic web scraping tools for real-time market data aggregation, established local vendor network
                      connections, and developed comprehensive analysis algorithms generating detailed reports. Created
                      tailored recommendation systems for optimal technology purchasing decisions serving thousands of
                      users.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline">Entrepreneurship</Badge>
                      <Badge variant="outline">AI Recommendation Systems</Badge>
                      <Badge variant="outline">Web Scraping</Badge>
                      <Badge variant="outline">Market Analysis</Badge>
                      <Badge variant="outline">Vendor Relations</Badge>
                      <Badge variant="outline">Business Strategy</Badge>
                    </div>
                    <Button asChild size="sm" className="hover:bg-blue-600">
                      <Link href="/experience/gradgear">
                        View Details <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Summary */}
      <section className="section-padding bg-muted/30">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="font-heading mb-4">Professional Skills Developed</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive expertise gained through diverse professional experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-lg">AI Research</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Computer Vision</Badge>
                  <Badge variant="secondary">Deep Learning</Badge>
                  <Badge variant="secondary">Model Optimization</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-lg">Backend Development</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">API Design</Badge>
                  <Badge variant="secondary">Database Management</Badge>
                  <Badge variant="secondary">Performance Optimization</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-lg">Entrepreneurship</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Business Strategy</Badge>
                  <Badge variant="secondary">Team Leadership</Badge>
                  <Badge variant="secondary">Client Relations</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-lg">Technical Leadership</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Project Management</Badge>
                  <Badge variant="secondary">Architecture Design</Badge>
                  <Badge variant="secondary">Code Review</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center">
            <h2 className="font-heading mb-4">Let's Work Together</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Interested in AI research collaboration, consulting services, or discussing potential opportunities?
            </p>
            <Button size="lg" asChild>
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
