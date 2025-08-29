"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Github, Users, Calendar, Code, Heart, ExternalLink } from "lucide-react"

export default function BreathySweetPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-background to-muted/30">
        <div className="container-max">
          <div className="mb-8">
            <Button variant="ghost" asChild className="mb-4">
              <Link href="/projects">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Link>
            </Button>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">
                HealthTech Innovation
              </Badge>
              <h1 className="font-heading mb-4">Breathy Sweet</h1>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                Non-invasive Glucose Monitoring System for Diabetic Care
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>2023-2024</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild>
                  <Link
                    href="https://github.com/Siddharth-magesh/Breathy-Sweet"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Source Code
                  </Link>
                </Button>
                <Button asChild>
                  <Link
                    href="https://www.figma.com/design/yxnHz9ivU2WfGwoDoZbVM2/Mobile-Dashboard-UI--Community-?node-id=0-1&t=ZZfBRwEDfzq7iWqX-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Figma Design
                  </Link>
                </Button>
                <Button
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/breathy-sweet-report.pdf';
                    link.download = 'breathy-sweet-report.pdf';
                    link.click();
                  }}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Download Report
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                <img
                  src="/breathy-sweet-interface.png"
                  alt="Breathy Sweet Device Interface"
                  className="object-contain w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Description */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="font-heading text-3xl mb-6">Project Description</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Non-invasive glucose monitoring system leveraging IoT sensors and advanced machine learning algorithms
                  for diabetic care management through breath analysis technology. This innovative solution eliminates
                  the need for blood samples while providing continuous health insights.
                </p>

                <h3 className="font-heading text-xl mb-4">Key Innovation</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Utilizes breath analysis technology combined with environmental sensors to predict glucose levels
                  without blood samples, providing continuous health insights and personalized diabetic management
                  through custom-built hardware and AI algorithms.
                </p>
              </div>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="h-5 w-5" />
                    Quick Facts
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Working Period</h4>
                    <p className="text-sm text-muted-foreground">2023-2024</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Team Size</h4>
                    <p className="text-sm text-muted-foreground">5 Developers</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Status</h4>
                    <Badge variant="secondary">Prototype Complete</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Details */}
      <section className="section-padding bg-muted/30">
        <div className="container-max">
          <h2 className="font-heading text-3xl mb-8">Technical Approach</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle>System Components</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Breath Analysis Technology</h4>
                  <p className="text-sm text-muted-foreground">
                    Custom machine built to analyze acetone levels in breath for glucose prediction
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">IoT Integration</h4>
                  <p className="text-sm text-muted-foreground">
                    Environmental sensors combined with breath analysis for comprehensive health monitoring
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">AI Processing</h4>
                  <p className="text-sm text-muted-foreground">
                    Custom artificial intelligence algorithms for glucose level extraction and prediction
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Mobile Application</h4>
                  <p className="text-sm text-muted-foreground">
                    Specialized Progressive Web Application for health insights visualization
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>System Workflow</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-medium text-primary">1</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Patient breathes into custom-built analysis machine</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-medium text-primary">2</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      IoT sensors capture acetone levels and environmental data
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-medium text-primary">3</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Custom AI algorithms process breath composition data
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-medium text-primary">4</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Machine learning models predict glucose levels</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-medium text-primary">5</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Mobile application displays insights and recommendations
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technologies Used */}
      <section className="section-padding">
        <div className="container-max">
          <h2 className="font-heading text-3xl mb-8">Technologies Used</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">IoT Hardware</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">ESP32</Badge>
                  <Badge variant="secondary">Breath Sensors</Badge>
                  <Badge variant="secondary">Environmental Sensors</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">AI & ML</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Custom AI Algorithms</Badge>
                  <Badge variant="secondary">ML Models</Badge>
                  <Badge variant="secondary">Generative AI</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Development</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Progressive Web App</Badge>
                  <Badge variant="secondary">Real-time Processing</Badge>
                  <Badge variant="secondary">Cloud Computing</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="section-padding bg-muted/30">
        <div className="container-max">
          <h2 className="font-heading text-3xl mb-8">Development Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {["Siddharth Magesh", "Narayanan", "Santhosh", "Raj Kishan", "Rupesh"].map((member, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">{member}</h4>
                      <p className="text-sm text-muted-foreground">Developer</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Future Roadmap */}
      <section className="section-padding">
        <div className="container-max">
          <h2 className="font-heading text-3xl mb-8">Commercial Development Roadmap</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Business Development</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Startup Development</h4>
                  <p className="text-sm text-muted-foreground">Planning to develop into commercial startup venture</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Patent Application</h4>
                  <p className="text-sm text-muted-foreground">
                    Pursuing intellectual property protection for breath analysis technology
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Clinical Validation</h4>
                  <p className="text-sm text-muted-foreground">
                    Conducting clinical trials for medical device certification
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Market Expansion</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Regulatory Approval</h4>
                  <p className="text-sm text-muted-foreground">Seeking FDA and medical device regulatory approval</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Commercial Partnerships</h4>
                  <p className="text-sm text-muted-foreground">
                    Establishing partnerships with healthcare providers and device manufacturers
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">International Deployment</h4>
                  <p className="text-sm text-muted-foreground">
                    Scaling to broader diabetic care market and international deployment
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
