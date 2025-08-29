"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Calendar, Users, Target, Code, Lightbulb } from "lucide-react"
import Link from "next/link"
import { Carousel } from "@/components/ui/carousel"
import { ArrowLeft, ArrowRight } from "lucide-react"

export default function MediNoteAIPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">Healthcare AI Project</Badge>
          <h1 className="text-4xl font-bold text-foreground mb-4">MediNote-AI</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Transforming Doctor-Patient Conversations into Automated Medical Reports with AI Precision
          </p>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>2023-2024</span>
          </div>
        </div>

        {/* Project Overview */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-blue-600" />
              Project Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              AI-powered web application designed to streamline healthcare documentation by converting doctor-patient
              conversations into structured, comprehensive medical reports. The system leverages advanced speech
              recognition and AI processing to automate the traditionally time-consuming process of medical
              documentation.
            </p>
          </CardContent>
        </Card>

        {/* Key Features */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Key Features</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-foreground">Automated Medical Report Generation</h4>
                  <p className="text-sm text-muted-foreground">
                    Real-time conversion of conversations into structured reports
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Comprehensive Medical Reports</h4>
                  <p className="text-sm text-muted-foreground">
                    Patient details, prescriptions, and dietary plans included
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Intelligent Data Management</h4>
                  <p className="text-sm text-muted-foreground">Patient history stored in JSON database</p>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-foreground">Speech-to-Text Integration</h4>
                  <p className="text-sm text-muted-foreground">Multi-language support (English, Tamil, Hindi)</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">User-Friendly Interface</h4>
                  <p className="text-sm text-muted-foreground">Mobile-responsive design for accessibility</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Security & Compliance</h4>
                  <p className="text-sm text-muted-foreground">Healthcare standards compliance</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Implementation Details */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="h-5 w-5 text-blue-600" />
              Implementation Details
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Core Capabilities</h4>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Real-time speech recognition and conversation analysis</li>
                  <li>AI extraction of patient information, symptoms, medications, and care instructions</li>
                  <li>PDF report generation with structured medical data</li>
                  <li>Secure patient data storage and retrieval system</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Advanced Features</h4>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Cross-server API communication for session management</li>
                  <li>Threading in Python for concurrent recording and report generation</li>
                  <li>Patient lookup using phone number for medical history access</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Technologies Used */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Technologies Used</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-foreground mb-3">Frontend</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">HTML</Badge>
                  <Badge variant="outline">CSS</Badge>
                  <Badge variant="outline">JavaScript</Badge>
                  <Badge variant="outline">Lucide Icons</Badge>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3">Backend & AI</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Python (Flask)</Badge>
                  <Badge variant="outline">MongoDB</Badge>
                  <Badge variant="outline">OpenAI GPT-4</Badge>
                  <Badge variant="outline">SpeechRecognition</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Team Members */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-blue-600" />
              Team Members
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <h4 className="font-semibold text-foreground">Siddharth Magesh</h4>
                <p className="text-sm text-muted-foreground">AI Engineer & Backend Developer</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-foreground">Pranesh Kumar</h4>
                <p className="text-sm text-muted-foreground">Full-Stack Developer</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-foreground">Mohamed Yasir</h4>
                <p className="text-sm text-muted-foreground">UI/UX Designer</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Future Roadmap */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-blue-600" />
              Future Roadmap
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>EHR Integration for compatibility with electronic health records</li>
                <li>Extended Multi-Language Support for diverse patient groups</li>
              </ul>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Mobile App Development for on-the-go usage</li>
                <li>Enhanced AI models for better accuracy in medical data extraction</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Outputs Section */}
        <h2 className="text-2xl font-bold text-center mb-6">Outputs</h2>
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {["/medinote/product1.png", "/medinote/product2.png", "/medinote/product3.png"].map((image, index) => (
              <div
                key={index}
                className="aspect-square bg-white rounded-lg flex items-center justify-center p-4 border border-gray-200 shadow-sm"
              >
                <img
                  src={image}
                  alt={`Medinote AI Product Output ${index + 1}`}
                  className="w-full h-full object-contain rounded-md"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="my-8" />
        
        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <Button asChild>
            <Link href="https://github.com/Siddharth-magesh/MediNote-AI" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              View Source Code
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/projects">Back to Projects</Link>
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  )
}
