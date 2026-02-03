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
  Download,
  ExternalLink,
  Code,
  Database,
  Shield,
  Brain,
  Eye,
  Server,
  Zap,
  CheckCircle,
} from "lucide-react"
import { FadeIn, SlideIn, StaggerContainer, StaggerItem } from "@/components/animations"

export default function InzpireSolutionsExperience() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,var(--teal)/0.05,transparent_50%)]" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-teal/5 rounded-full blur-3xl" />

        <div className="container-max relative">
          <FadeIn>
            <Button variant="ghost" asChild className="mb-6 hover:bg-muted">
              <Link href="/experience">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Experience
              </Link>
            </Button>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <FadeIn delay={0.1}>
                <Badge variant="secondary" className="category-pill mb-4">
                  AI/ML Internship
                </Badge>
              </FadeIn>
              <FadeIn delay={0.2}>
                <h1 className="font-heading mb-4">AI/ML Intern – Inzpire Solutions</h1>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                  Developed comprehensive machine learning solutions for restaurant operations at Inzpire Solutions,
                  a Chennai-based technology company specializing in hospitality industry automation. Focused on
                  computer vision applications for inventory management, quality assessment systems, and real-time
                  monitoring solutions that enhanced operational efficiency across multiple client establishments.
                </p>
              </FadeIn>
              <FadeIn delay={0.4}>
                <div className="flex flex-wrap gap-2">
                  {["Machine Learning", "Computer Vision", "Flask API", "Python", "Object Detection", "Deep Learning"].map(
                    (tech) => (
                      <Badge key={tech} variant="outline" className="hover:bg-muted transition-colors">
                        {tech}
                      </Badge>
                    )
                  )}
                </div>
              </FadeIn>
            </div>

            <SlideIn direction="right" delay={0.3}>
              <Card className="bg-gradient-to-br from-teal/5 to-background">
                <CardHeader>
                  <CardTitle className="font-heading text-lg">Company Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Building className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">Inzpire Solutions</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span className="text-sm">2023 - 2024 (One year)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="text-sm">Remote (Chennai-based)</span>
                  </div>
                  <div className="pt-2">
                    <Badge variant="secondary" className="badge-success border">
                      Completed
                    </Badge>
                  </div>
                  <div className="pt-2">
                    <Button size="sm" variant="outline" asChild className="w-full">
                      <Link href="https://inzpire.in/" target="_blank">
                        <ExternalLink className="mr-2 h-3 w-3" />
                        Visit Website
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="section-padding">
        <div className="container-max">
          <FadeIn>
            <h2 className="font-heading text-3xl mb-8">Key Achievements & Projects</h2>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6" staggerDelay={0.1}>
            <StaggerItem>
              <Card className="card-accent-teal h-full hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center">
                      <Database className="h-5 w-5 text-teal" />
                    </div>
                    <CardTitle className="font-heading text-lg">Intelligent Stock Management</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Engineered ML-powered stock analysis systems using object detection to automate inventory tracking.
                    Developed supply verification algorithms that cross-referenced received goods against orders,
                    reducing manual counting errors by 85% and improving stock accuracy across restaurant operations.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">YOLO</Badge>
                    <Badge variant="secondary">Inventory Analytics</Badge>
                    <Badge variant="secondary">Supply Chain</Badge>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="card-accent-violet h-full hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 rounded-lg bg-violet/10 flex items-center justify-center">
                      <Eye className="h-5 w-5 text-violet" />
                    </div>
                    <CardTitle className="font-heading text-lg">Quality Assessment AI</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Created computer vision models for automated cleanliness assessment of utensils and kitchen equipment.
                    Implemented CNN-based classification achieving 94% accuracy in detecting hygiene compliance issues,
                    enabling real-time sanitization monitoring throughout client establishments.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">CNN Classification</Badge>
                    <Badge variant="secondary">Hygiene Detection</Badge>
                    <Badge variant="secondary">Quality Control</Badge>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="card-accent-emerald h-full hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 rounded-lg bg-emerald/10 flex items-center justify-center">
                      <Zap className="h-5 w-5 text-emerald" />
                    </div>
                    <CardTitle className="font-heading text-lg">Real-time Monitoring Systems</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Developed vision-based systems for continuous shelf inventory monitoring using edge computing.
                    Implemented streaming inference pipelines that process video feeds in real-time, automatically
                    flagging low-stock items and generating reorder alerts for restaurant managers.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Edge Computing</Badge>
                    <Badge variant="secondary">Video Analytics</Badge>
                    <Badge variant="secondary">Alert Systems</Badge>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="card-accent-amber h-full hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 rounded-lg bg-amber/10 flex items-center justify-center">
                      <Brain className="h-5 w-5 text-amber" />
                    </div>
                    <CardTitle className="font-heading text-lg">Open Source Dataset Contributions</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Contributed to multiple open-source datasets for hospitality industry AI applications.
                    Curated and annotated 5,000+ images across various categories including kitchen equipment,
                    food items, and cleanliness indicators, supporting broader research and development efforts.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Data Annotation</Badge>
                    <Badge variant="secondary">Dataset Curation</Badge>
                    <Badge variant="secondary">Open Source</Badge>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Technical Implementation */}
      <section className="section-padding bg-muted/30">
        <div className="container-max">
          <FadeIn>
            <h2 className="font-heading text-3xl mb-8">Technical Implementation</h2>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
            <StaggerItem>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="font-heading text-lg flex items-center">
                    <Code className="mr-2 h-5 w-5 text-primary" />
                    Core Technologies
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-emerald mt-0.5 flex-shrink-0" />
                      <span>Object detection using YOLO and Faster R-CNN architectures</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-emerald mt-0.5 flex-shrink-0" />
                      <span>Flask REST API development with OpenAPI documentation</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-emerald mt-0.5 flex-shrink-0" />
                      <span>Python with PyTorch and TensorFlow frameworks</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-emerald mt-0.5 flex-shrink-0" />
                      <span>OpenCV for image preprocessing and augmentation</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-emerald mt-0.5 flex-shrink-0" />
                      <span>Postman collections for API testing and validation</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="font-heading text-lg flex items-center">
                    <Server className="mr-2 h-5 w-5 text-primary" />
                    ML Pipeline Workflow
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-teal mt-0.5 flex-shrink-0" />
                      <span>Image preprocessing with rotation, brightness, and noise augmentation</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-teal mt-0.5 flex-shrink-0" />
                      <span>Manual annotation using LabelImg and CVAT tools</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-teal mt-0.5 flex-shrink-0" />
                      <span>Dual model architecture: Detection + Classification pipeline</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-teal mt-0.5 flex-shrink-0" />
                      <span>Model versioning and experiment tracking with MLflow</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-teal mt-0.5 flex-shrink-0" />
                      <span>Systematic result storage and performance monitoring</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="font-heading text-lg flex items-center">
                    <Shield className="mr-2 h-5 w-5 text-primary" />
                    Security & Quality
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-violet mt-0.5 flex-shrink-0" />
                      <span>Input validation and sanitization for image uploads</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-violet mt-0.5 flex-shrink-0" />
                      <span>Comprehensive error handling with proper HTTP status codes</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-violet mt-0.5 flex-shrink-0" />
                      <span>JWT token-based authentication for API endpoints</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-violet mt-0.5 flex-shrink-0" />
                      <span>Security testing using OWASP ZAP vulnerability scanner</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-violet mt-0.5 flex-shrink-0" />
                      <span>Manual penetration testing and code review protocols</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Company Information */}
      <section className="section-padding">
        <div className="container-max">
          <FadeIn>
            <h2 className="font-heading text-3xl mb-8">Company Information</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <Card>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-heading text-lg mb-4">About Inzpire Solutions</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Inzpire Solutions is a Chennai-based technology company specializing in AI-powered solutions
                      for the hospitality industry. The company focuses on developing innovative automation tools
                      that help restaurants and food service establishments improve operational efficiency,
                      maintain quality standards, and reduce manual overhead.
                    </p>
                    <div className="space-y-3 text-muted-foreground">
                      <div className="flex items-start space-x-2">
                        <MapPin className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                        <span className="text-sm">
                          5, Aishwarya Mansion, 1st Floor, Kuberan Nagar, 1st Street, Urappakkam, Chennai - 603210
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <ExternalLink className="h-4 w-4 text-primary" />
                        <Link href="https://inzpire.in/" target="_blank" className="text-sm hover:text-primary transition-colors">
                          https://inzpire.in/
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-heading text-lg mb-4">Work Environment</h3>
                    <div className="space-y-3 text-muted-foreground">
                      {[
                        "Remote-first work arrangement with flexible hours",
                        "Collaborative development with weekly sprint reviews",
                        "Focus on hospitality industry AI solutions",
                        "Cross-functional team collaboration with designers and domain experts",
                        "Access to cloud computing resources for model training",
                      ].map((item, index) => (
                        <div key={index} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-emerald mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </section>

      {/* Downloadable Documents */}
      <section className="section-padding bg-muted/30">
        <div className="container-max">
          <FadeIn>
            <h2 className="font-heading text-3xl mb-8">Documents & Resources</h2>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.1}>
            <StaggerItem>
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="font-heading text-lg">Internship Certificate</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 text-sm">
                    Official completion certificate from Inzpire Solutions acknowledging successful internship
                  </p>
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full"
                    onClick={() => {
                      const link = document.createElement("a")
                      link.href = "/inzpire/internship-certificate-inzpire.pdf"
                      link.download = "Internship Certificate - Inzpire Solutions.pdf"
                      link.click()
                    }}
                  >
                    <Download className="mr-2 h-3 w-3" />
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
                    Original internship offer letter detailing position terms and responsibilities
                  </p>
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full"
                    onClick={() => {
                      const link = document.createElement("a")
                      link.href = "/inzpire/offer-letter-inzpire.pdf"
                      link.download = "Offer Letter - Inzpire Solutions.pdf"
                      link.click()
                    }}
                  >
                    <Download className="mr-2 h-3 w-3" />
                    Download Offer Letter
                  </Button>
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="font-heading text-lg">Internship Report</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 text-sm">
                    Comprehensive technical report documenting all projects and methodologies
                  </p>
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full"
                    onClick={() => {
                      const link = document.createElement("a")
                      link.href = "/inzpire/internship-report-inzpire.pdf"
                      link.download = "Internship Report - Inzpire Solutions.pdf"
                      link.click()
                    }}
                  >
                    <Download className="mr-2 h-3 w-3" />
                    Download Report
                  </Button>
                </CardContent>
              </Card>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      <Footer />
    </div>
  )
}
