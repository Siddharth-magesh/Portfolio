"use client";

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Calendar, MapPin, Building, Download, ExternalLink, Code, Database, Shield } from "lucide-react"

export default function InzpireSolutionsExperience() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Header */}
      <section className="section-padding bg-gradient-to-b from-background to-muted/30">
        <div className="container-max">
          <Button variant="ghost" asChild className="mb-6">
            <Link href="/experience">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Experience
            </Link>
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-100 text-slate-800 text-sm font-medium mb-4">
                AI/ML Internship
              </div>
              <h1 className="font-heading mb-4">AI/ML Intern – Inzpire Solutions</h1>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                Developed comprehensive machine learning solutions for restaurant operations, focusing on inventory
                management, quality assessment, and automation systems for the hospitality industry.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Machine Learning</Badge>
                <Badge variant="outline">Computer Vision</Badge>
                <Badge variant="outline">Flask API</Badge>
                <Badge variant="outline">Python</Badge>
                <Badge variant="outline">Object Detection</Badge>
              </div>
            </div>

            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading text-lg">Company Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Building className="h-4 w-4 text-primary" />
                    <span className="text-sm">Inzpire Solutions</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span className="text-sm">2023 - 2024 (One year)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="text-sm">Remote</span>
                  </div>
                  <div className="pt-2">
                    <Badge variant="outline">Completed</Badge>
                  </div>
                  <div className="pt-2">
                    <Button size="sm" variant="outline" asChild>
                      <Link href="https://inzpire.in/" target="_blank">
                        <ExternalLink className="mr-2 h-3 w-3" />
                        Visit Website
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="section-padding">
        <div className="container-max">
          <h2 className="font-heading mb-8">Key Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-lg">Stock Management Systems</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Built machine learning models for stock handling analysis and developed systems for verifying original
                  supply amounts in restaurant operations.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Inventory Analysis</Badge>
                  <Badge variant="secondary">Supply Verification</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-lg">Quality Assessment AI</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Created computer vision models for automated cleanliness assessment of utensils and implemented
                  sanitization monitoring systems throughout establishments.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Computer Vision</Badge>
                  <Badge variant="secondary">Quality Control</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-lg">Real-time Monitoring</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Developed vision-based systems for real-time shelf inventory monitoring and implemented various
                  automation tasks for restaurant management efficiency.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Real-time Processing</Badge>
                  <Badge variant="secondary">Automation</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-lg">Open Source Contributions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Contributed to multiple open-source datasets for hospitality industry AI applications, supporting
                  broader research and development efforts.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Dataset Creation</Badge>
                  <Badge variant="secondary">Open Source</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Implementation */}
      <section className="section-padding bg-muted/30">
        <div className="container-max">
          <h2 className="font-heading mb-8">Technical Implementation</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-lg flex items-center">
                  <Code className="mr-2 h-5 w-5" />
                  Core Technology
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Object detection and classification using deep learning models</li>
                  <li>• Flask API development for user interaction</li>
                  <li>• Python with cross-platform compatibility</li>
                  <li>• Visual Studio Code development environment</li>
                  <li>• Postman for comprehensive API testing</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-lg flex items-center">
                  <Database className="mr-2 h-5 w-5" />
                  Project Workflow
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Image preprocessing with rotation and brightness adjustments</li>
                  <li>• Manual annotation using bounding box labeling tools</li>
                  <li>• Dual model approach: Detection + Classification</li>
                  <li>• API endpoints for image processing</li>
                  <li>• Systematic storage and result categorization</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-lg flex items-center">
                  <Shield className="mr-2 h-5 w-5" />
                  Security Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Data validation for proper image file acceptance</li>
                  <li>• Robust error handling with HTTP status codes</li>
                  <li>• Future token-based authentication capabilities</li>
                  <li>• Security testing using OWASP ZAP</li>
                  <li>• Manual penetration testing protocols</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Information */}
      <section className="section-padding">
        <div className="container-max">
          <h2 className="font-heading mb-8">Company Information</h2>
          <Card>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-heading text-lg mb-4">Inzpire Solutions</h3>
                  <div className="space-y-3 text-muted-foreground">
                    <div className="flex items-start space-x-2">
                      <MapPin className="h-4 w-4 mt-1 text-primary" />
                      <span className="text-sm">
                        5, Aishwarya Mansion, 1st Floor, Kuberan Nagar, 1st Street, Urappakkam, Chennai - 603210
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <ExternalLink className="h-4 w-4 text-primary" />
                      <Link href="https://inzpire.in/" target="_blank" className="text-sm hover:text-primary">
                        https://inzpire.in/
                      </Link>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-heading text-lg mb-4">Work Environment</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p className="text-sm">• Remote work arrangement</p>
                    <p className="text-sm">• Collaborative development environment</p>
                    <p className="text-sm">• Focus on hospitality industry AI solutions</p>
                    <p className="text-sm">• Cross-functional team collaboration</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Downloadable Documents */}
      <section className="section-padding bg-muted/30">
        <div className="container-max">
          <h2 className="font-heading mb-8">Documents & Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-lg">Internship Certificate</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 text-sm">
                  Official completion certificate from Inzpire Solutions
                </p>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/inzpire/internship-certificate-inzpire.pdf'; // Update with the actual file path
                    link.download = 'Internship Certificate - Inzpire Solutions.pdf';
                    link.click();
                  }}
                >
                  <Download className="mr-2 h-3 w-3" />
                  Download
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-lg">Offer Letter</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 text-sm">Original internship offer letter and terms</p>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/inzpire/offer-letter-inzpire.pdf'; // Update with the actual file path
                    link.download = 'Offer Letter - Inzpire Solutions.pdf';
                    link.click();
                  }}
                >
                  <Download className="mr-2 h-3 w-3" />
                  Download
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-lg">Internship Report</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 text-sm">
                  Comprehensive technical report of projects completed
                </p>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/inzpire/internship-report-inzpire.pdf'; // Update with the actual file path
                    link.download = 'Internship Report - Inzpire Solutions.pdf';
                    link.click();
                  }}
                >
                  <Download className="mr-2 h-3 w-3" />
                  Download
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
