"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Download, ExternalLink, Calendar, MapPin, GraduationCap, CheckCircle } from "lucide-react"

export default function AboutPage() {
  const handleDownloadResume = () => {
    // Create a link to download the resume
    const link = document.createElement("a")
    link.href = "/resume-siddharth-magesh.pdf"
    link.download = "Siddharth_Magesh_Resume.pdf"
    link.click()
  }
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-background to-muted/30">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge
                variant="secondary"
                className="mb-4 px-4 py-2 text-sm font-semibold bg-slate-100 text-slate-800 border-slate-200 rounded-full"
              >
                About Me
              </Badge>
              <h1 className="font-heading mb-6">Siddharth Magesh</h1>
              <div className="mb-8">
                <h2 className="text-2xl font-heading font-bold mb-4">Career Objective</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To pursue advanced research in Artificial Intelligence, with a focus on Natural Language Processing,
                  Computer Vision, and Generative AI systems. I aim to contribute to cutting-edge research in Large
                  Language Models and multimodal AI architectures that bridge theoretical foundations with practical
                  implementations. My ultimate goal is to advance the field toward Artificial General Intelligence
                  through innovative research and development.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild>
                  <Link href="/contact">
                    Get in Touch <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" onClick={handleDownloadResume}>
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[3/4] bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center">
                <img
                  src="/siddharth-profile-vertical.jpg"
                  alt="Siddharth Magesh - Professional Portrait"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="section-padding bg-muted/30">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="font-heading mb-4">Education</h2>
            <p className="text-xl text-muted-foreground">Academic background and qualifications</p>
          </div>

          <div className="space-y-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <GraduationCap className="h-8 w-8 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-heading text-xl font-bold mb-2">
                        B.Tech in Artificial Intelligence and Data Science
                      </h3>
                      <p className="text-muted-foreground text-lg">
                        Velammal Engineering College, Anna University, Chennai
                      </p>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-sm">
                    Expected 2026
                  </Badge>
                </div>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>2022 - 2026</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4" />
                    <span>Chennai, India</span>
                  </div>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    CGPA: 8.91/10.0
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <GraduationCap className="h-8 w-8 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-heading text-xl font-bold mb-2">Minor in Full Stack Development</h3>
                      <p className="text-muted-foreground text-lg">Velammal Engineering College, Anna University</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-sm">
                    Expected 2026
                  </Badge>
                </div>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>2022 - 2026</span>
                  </div>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    CGPA: 8.91/10.0
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <GraduationCap className="h-8 w-8 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-heading text-xl font-bold mb-2">
                        Bachelor's in Programming and Data Science
                      </h3>
                      <p className="text-muted-foreground text-lg">
                        Indian Institute of Technology Madras (Online Degree Programme)
                      </p>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-sm">
                    Expected 2026
                  </Badge>
                </div>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>2022 - 2026</span>
                  </div>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                    CGPA: 6.83/10.0
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <GraduationCap className="h-8 w-8 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-heading text-xl font-bold mb-2">
                        Higher Secondary Certificate (12th Standard)
                      </h3>
                      <p className="text-muted-foreground text-lg">Velammal Vidhyashram, CBSE Board</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-sm">
                    2022
                  </Badge>
                </div>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>2021 - 2022</span>
                  </div>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                    85%
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <GraduationCap className="h-8 w-8 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-heading text-xl font-bold mb-2">
                        Secondary School Certificate (10th Standard)
                      </h3>
                      <p className="text-muted-foreground text-lg">Narayana E-Techno Kolathur, CBSE/IIT</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-sm">
                    2020
                  </Badge>
                </div>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>2019 - 2020</span>
                  </div>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                    82%
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section id="technical-skills" className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="font-heading mb-4">Technical Skills</h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive expertise across AI/ML and software development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardHeader className="pb-4">
                <CardTitle className="font-heading text-xl flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  Programming Languages
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge variant="default" className="bg-green-100 text-green-800 border-green-200">
                      Python
                    </Badge>
                    <span className="text-sm font-medium text-green-600">Experienced</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">C/C++</Badge>
                    <span className="text-sm text-muted-foreground">Intermediate</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">Java</Badge>
                    <span className="text-sm text-muted-foreground">Intermediate</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">Assembly (x86)</Badge>
                    <span className="text-sm text-muted-foreground">Beginner</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardHeader className="pb-4">
                <CardTitle className="font-heading text-xl flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  AI/ML Research
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Deep Learning</Badge>
                  <Badge variant="secondary">Neural Networks</Badge>
                  <Badge variant="secondary">Model Fine-tuning</Badge>
                  <Badge variant="secondary">Transfer Learning</Badge>
                  <Badge variant="secondary">Few-shot Learning</Badge>
                  <Badge variant="secondary">Attention Mechanisms</Badge>
                  <Badge variant="secondary">Transformers</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardHeader className="pb-4">
                <CardTitle className="font-heading text-xl flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  AI Specializations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Large Language Models</Badge>
                  <Badge variant="secondary">Computer Vision</Badge>
                  <Badge variant="secondary">NLP</Badge>
                  <Badge variant="secondary">Generative AI</Badge>
                  <Badge variant="secondary">Model Context Protocol</Badge>
                  <Badge variant="secondary">Agentic AI</Badge>
                  <Badge variant="secondary">RAG</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardHeader className="pb-4">
                <CardTitle className="font-heading text-xl flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  ML Frameworks
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">PyTorch</Badge>
                  <Badge variant="secondary">TensorFlow</Badge>
                  <Badge variant="secondary">Hugging Face</Badge>
                  <Badge variant="secondary">LangChain</Badge>
                  <Badge variant="secondary">OpenAI API</Badge>
                  <Badge variant="secondary">Anthropic Claude</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardHeader className="pb-4">
                <CardTitle className="font-heading text-xl flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  Backend Engineering
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">REST APIs</Badge>
                  <Badge variant="secondary">Flask</Badge>
                  <Badge variant="secondary">FastAPI</Badge>
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">Express.js</Badge>
                  <Badge variant="secondary">Microservices</Badge>
                  <Badge variant="secondary">Postman</Badge>
                  <Badge variant="secondary">Podman</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardHeader className="pb-4">
                <CardTitle className="font-heading text-xl flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  Databases & DevOps
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">MySQL</Badge>
                  <Badge variant="secondary">MongoDB</Badge>
                  <Badge variant="secondary">Git</Badge>
                  <Badge variant="secondary">AWS SageMaker</Badge>
                  <Badge variant="secondary">Docker</Badge>
                  <Badge variant="secondary">Linux</Badge>
                  <Badge variant="secondary">CI/CD</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-muted/30">
        <div className="container-max">
          <div className="text-center">
            <h2 className="font-heading mb-4">Let's Connect</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Interested in collaboration, research opportunities, or discussing AI innovations? I'd love to hear from
              you.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
