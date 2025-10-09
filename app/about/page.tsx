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
                  src="/siddharth-profile-vertical.png"
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

      {/* Certifications */}
      <section className="section-padding bg-muted/30">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="font-heading mb-4">Certifications & Achievements</h2>
            <p className="text-xl text-muted-foreground">
              Professional certifications, hackathon achievements, and research publications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Professional Certificates (scrollable list) */}
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-blue-600" />
                  Professional Certificates
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm text-muted-foreground mb-1">Scroll to view all certificates</div>
                <div className="max-h-56 overflow-y-auto space-y-2 pr-2">
                  <Link href="/CERTIFICATIONS/professional certificates/ADJP Diploma.pdf" target="_blank" className="block p-2 rounded hover:bg-gray-50 transition-colors">
                    <div className="font-medium">ADJP Diploma</div>
                    <div className="text-xs text-muted-foreground">Professional Diploma</div>
                  </Link>
                  <Link href="/CERTIFICATIONS/professional certificates/Coursera GENAI.pdf" target="_blank" className="block p-2 rounded hover:bg-gray-50 transition-colors">
                    <div className="font-medium">Generative AI with Large Language Models</div>
                    <div className="text-xs text-muted-foreground">Coursera</div>
                  </Link>
                  <Link href="/CERTIFICATIONS/professional certificates/Coursera ML1.pdf" target="_blank" className="block p-2 rounded hover:bg-gray-50 transition-colors">
                    <div className="font-medium">Machine Learning (Coursera)</div>
                    <div className="text-xs text-muted-foreground">Coursera</div>
                  </Link>
                  <Link href="/CERTIFICATIONS/professional certificates/GenAI.pdf" target="_blank" className="block p-2 rounded hover:bg-gray-50 transition-colors">
                    <div className="font-medium">Generative AI (Course)</div>
                    <div className="text-xs text-muted-foreground">Certificate</div>
                  </Link>
                  <Link href="/CERTIFICATIONS/professional certificates/IITM Foundation.pdf" target="_blank" className="block p-2 rounded hover:bg-gray-50 transition-colors">
                    <div className="font-medium">IIT Madras Foundation Course</div>
                    <div className="text-xs text-muted-foreground">IIT Madras</div>
                  </Link>
                  <Link href="/CERTIFICATIONS/professional certificates/Java course e-certificate.pdf" target="_blank" className="block p-2 rounded hover:bg-gray-50 transition-colors">
                    <div className="font-medium">Java Course e-Certificate</div>
                    <div className="text-xs text-muted-foreground">Programming</div>
                  </Link>
                  <Link href="/CERTIFICATIONS/professional certificates/Power BI and Tableau.pdf" target="_blank" className="block p-2 rounded hover:bg-gray-50 transition-colors">
                    <div className="font-medium">Power BI & Tableau</div>
                    <div className="text-xs text-muted-foreground">Data Visualization</div>
                  </Link>
                  <Link href="/CERTIFICATIONS/professional certificates/Python for Data Science.pdf" target="_blank" className="block p-2 rounded hover:bg-gray-50 transition-colors">
                    <div className="font-medium">Python for Data Science</div>
                    <div className="text-xs text-muted-foreground">IBM</div>
                  </Link>
                  <Link href="/CERTIFICATIONS/professional certificates/TensorFlow Certification.pdf" target="_blank" className="block p-2 rounded hover:bg-gray-50 transition-colors">
                    <div className="font-medium">TensorFlow Developer Certificate</div>
                    <div className="text-xs text-muted-foreground">Google</div>
                  </Link>
                  <Link href="/CERTIFICATIONS/professional certificates/transformers certificate.pdf" target="_blank" className="block p-2 rounded hover:bg-gray-50 transition-colors">
                    <div className="font-medium">Transformers Certificate</div>
                    <div className="text-xs text-muted-foreground">NLP</div>
                  </Link>
                  <Link href="/CERTIFICATIONS/professional certificates/x86 assembly.pdf" target="_blank" className="block p-2 rounded hover:bg-gray-50 transition-colors">
                    <div className="font-medium">x86 Assembly</div>
                    <div className="text-xs text-muted-foreground">Low-level Programming</div>
                  </Link>

                  {/* NLP subfolder certificates */}
                  <div className="pt-2">
                    <div className="text-xs text-muted-foreground uppercase font-semibold mb-2">NLP Certificates</div>
                    <Link href="/CERTIFICATIONS/professional certificates/NLP/Coursera NLP.pdf" target="_blank" className="block p-2 rounded hover:bg-gray-50 transition-colors">
                      <div className="font-medium">Coursera NLP - Part 1</div>
                      <div className="text-xs text-muted-foreground">Coursera</div>
                    </Link>
                    <Link href="/CERTIFICATIONS/professional certificates/NLP/Coursera NLP1.pdf" target="_blank" className="block p-2 rounded hover:bg-gray-50 transition-colors">
                      <div className="font-medium">Coursera NLP - Part 2</div>
                      <div className="text-xs text-muted-foreground">Coursera</div>
                    </Link>
                    <Link href="/CERTIFICATIONS/professional certificates/NLP/Coursera NLP2.pdf" target="_blank" className="block p-2 rounded hover:bg-gray-50 transition-colors">
                      <div className="font-medium">Coursera NLP - Part 3</div>
                      <div className="text-xs text-muted-foreground">Coursera</div>
                    </Link>
                    <Link href="/CERTIFICATIONS/professional certificates/NLP/Coursera NLP3.pdf" target="_blank" className="block p-2 rounded hover:bg-gray-50 transition-colors">
                      <div className="font-medium">Coursera NLP - Part 4</div>
                      <div className="text-xs text-muted-foreground">Coursera</div>
                    </Link>
                    <Link href="/CERTIFICATIONS/professional certificates/NLP/Coursera NLP4.pdf" target="_blank" className="block p-2 rounded hover:bg-gray-50 transition-colors">
                      <div className="font-medium">Coursera NLP - Part 5</div>
                      <div className="text-xs text-muted-foreground">Coursera</div>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Hackathon Achievements */}
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  Hackathon Wins
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <Link href="/CERTIFICATIONS/Hackathons/KCG Winner Certificate.pdf" target="_blank" className="block p-2 rounded hover:bg-gray-50 transition-colors">
                    <div className="text-sm font-medium flex items-center gap-2">
                      <Badge variant="secondary" className="bg-gold text-yellow-800">Winner</Badge>
                      KCG Hackathon
                    </div>
                  </Link>
                  <Link href="/CERTIFICATIONS/Hackathons/PEC Special Prize.pdf" target="_blank" className="block p-2 rounded hover:bg-gray-50 transition-colors">
                    <div className="text-sm font-medium flex items-center gap-2">
                      <Badge variant="secondary" className="bg-orange-100 text-orange-800">Special Prize</Badge>
                      PEC Hackathon
                    </div>
                  </Link>
                  <Link href="/CERTIFICATIONS/Hackathons/Velammal Hackathon.pdf" target="_blank" className="block p-2 rounded hover:bg-gray-50 transition-colors">
                    <div className="text-sm font-medium">Velammal Engineering College Hackathon</div>
                  </Link>
                  <Link href="/CERTIFICATIONS/Hackathons/SRM Hackathon.pdf" target="_blank" className="block p-2 rounded hover:bg-gray-50 transition-colors">
                    <div className="text-sm font-medium">SRM Institute Hackathon</div>
                  </Link>
                  <Link href="/CERTIFICATIONS/Hackathons/Anatha Ideathon.pdf" target="_blank" className="block p-2 rounded hover:bg-gray-50 transition-colors">
                    <div className="text-sm font-medium">Anatha Ideathon</div>
                  </Link>
                </div>
                <Button variant="outline" size="sm" asChild className="w-full">
                  <Link href="/hackathons">View All Hackathon Certificates</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Research Publications */}
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ExternalLink className="h-5 w-5 text-purple-600" />
                  Research Publications
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <Link href="/CERTIFICATIONS/Publications/MTERBS-Research-Paper.pdf" target="_blank" className="block p-2 rounded hover:bg-gray-50 transition-colors">
                    <div className="text-sm font-medium">MTERBS: Medical Text Entity Recognition</div>
                    <div className="text-xs text-muted-foreground">IEEE Conference Publication</div>
                  </Link>
                  <Link href="/CERTIFICATIONS/Publications/OSSARTH-Research-Paper.pdf" target="_blank" className="block p-2 rounded hover:bg-gray-50 transition-colors">
                    <div className="text-sm font-medium">OSSARTH: Open Source System for Arthritis Detection</div>
                    <div className="text-xs text-muted-foreground">Research Publication</div>
                  </Link>
                </div>
                <Button variant="outline" size="sm" asChild className="w-full">
                  <Link href="/research">View Research Projects</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Internship Certifications */}
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-indigo-600" />
                  Internship Certifications
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <Link href="/CERTIFICATIONS/Intern Certifications/scrapify-internship-certificate.pdf" target="_blank" className="block p-2 rounded hover:bg-gray-50 transition-colors">
                    <div className="text-sm font-medium">Scrapify - Data Science Intern</div>
                    <div className="text-xs text-muted-foreground">AI/ML Development</div>
                  </Link>
                  <Link href="/CERTIFICATIONS/Intern Certifications/inzpire/internship-certificate-inzpire.pdf" target="_blank" className="block p-2 rounded hover:bg-gray-50 transition-colors">
                    <div className="text-sm font-medium">Inzpire Solutions - AI Research Intern</div>
                    <div className="text-xs text-muted-foreground">Research & Development</div>
                  </Link>
                </div>
                <Button variant="outline" size="sm" asChild className="w-full">
                  <Link href="/experience">View Experience Details</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Paper Presentations */}
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ExternalLink className="h-5 w-5 text-orange-600" />
                  Paper Presentations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <Link href="/CERTIFICATIONS/Paper Presentations/CIT Paper Presentation.pdf" target="_blank" className="block p-2 rounded hover:bg-gray-50 transition-colors">
                    <div className="text-sm font-medium">CIT Conference Paper Presentation</div>
                    <div className="text-xs text-muted-foreground">AI Research</div>
                  </Link>
                  <Link href="/CERTIFICATIONS/Paper Presentations/Velammal Engineering College Expo.pdf" target="_blank" className="block p-2 rounded hover:bg-gray-50 transition-colors">
                    <div className="text-sm font-medium">VEC Engineering Expo</div>
                    <div className="text-xs text-muted-foreground">Technology Showcase</div>
                  </Link>
                  <Link href="/CERTIFICATIONS/Paper Presentations/Velammal Engineering College Paper Presentation.pdf" target="_blank" className="block p-2 rounded hover:bg-gray-50 transition-colors">
                    <div className="text-sm font-medium">VEC Paper Presentation</div>
                    <div className="text-xs text-muted-foreground">Research Symposium</div>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Social Impact & Community Service */}
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-red-600" />
                  Community Service
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <Link href="/CERTIFICATIONS/Social Awareness/Blood Donation Camp.pdf" target="_blank" className="block p-2 rounded hover:bg-gray-50 transition-colors">
                    <div className="text-sm font-medium">Blood Donation Camp Volunteer</div>
                    <div className="text-xs text-muted-foreground">Youth Red Cross</div>
                  </Link>
                  <Link href="/CERTIFICATIONS/Social Awareness/Helmet Awareness.pdf" target="_blank" className="block p-2 rounded hover:bg-gray-50 transition-colors">
                    <div className="text-sm font-medium">Road Safety Awareness Campaign</div>
                    <div className="text-xs text-muted-foreground">Traffic Safety Initiative</div>
                  </Link>
                  <Link href="/CERTIFICATIONS/Social Awareness/Lake Cleaning.pdf" target="_blank" className="block p-2 rounded hover:bg-gray-50 transition-colors">
                    <div className="text-sm font-medium">Environmental Conservation</div>
                    <div className="text-xs text-muted-foreground">Lake Cleaning Drive</div>
                  </Link>
                  <Link href="/CERTIFICATIONS/extra/COSTAL CLEANUP CERTIFICATE.pdf" target="_blank" className="block p-2 rounded hover:bg-gray-50 transition-colors">
                    <div className="text-sm font-medium">Coastal Cleanup Certificate</div>
                    <div className="text-xs text-muted-foreground">Environmental Conservation</div>
                  </Link>
                </div>
                <Button variant="outline" size="sm" asChild className="w-full">
                  <Link href="/leadership/youth-red-cross">View Leadership Role</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Achievement Statistics */}
          <div className="mt-16">
            <div className="text-center mb-8">
              <h3 className="font-heading text-2xl mb-4">Achievement Summary</h3>
              <p className="text-muted-foreground">Quantified impact across various domains</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-heading font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Professional Certificates</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-heading font-bold text-primary mb-2">10+</div>
                <div className="text-sm text-muted-foreground">Hackathon Participations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-heading font-bold text-primary mb-2">2</div>
                <div className="text-sm text-muted-foreground">Research Publications</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-heading font-bold text-primary mb-2">5+</div>
                <div className="text-sm text-muted-foreground">Community Service Activities</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding">
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
