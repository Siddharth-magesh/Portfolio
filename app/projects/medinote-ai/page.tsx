"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  ArrowLeft,
  Github,
  Calendar,
  Users,
  Mic,
  FileText,
  Languages,
  Brain,
  Database,
  Shield,
  Smartphone,
  Stethoscope,
  ClipboardList,
  Target,
  Lightbulb,
} from "lucide-react"
import { FadeIn, SlideIn, StaggerContainer, StaggerItem } from "@/components/animations"

export default function MediNoteAIPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,var(--teal)/0.05,transparent_50%)]" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-teal/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-violet/5 rounded-full blur-3xl" />

        <div className="container-max relative">
          <FadeIn>
            <Button variant="ghost" asChild className="mb-6 hover:bg-muted">
              <Link href="/projects">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Link>
            </Button>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <FadeIn delay={0.1}>
                <Badge variant="secondary" className="badge-teal border mb-4">
                  Healthcare AI Project
                </Badge>
              </FadeIn>
              <FadeIn delay={0.2}>
                <h1 className="font-heading mb-2">MediNote-AI</h1>
                <p className="text-lg text-muted-foreground mb-4">
                  AI-Powered Medical Documentation System
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Transforming doctor-patient conversations into automated, structured medical reports with AI precision.
                  MediNote-AI leverages advanced speech recognition, GPT-4 processing, and multi-language support to
                  eliminate the time-consuming burden of medical documentation—allowing healthcare professionals to
                  focus on patient care while maintaining comprehensive, accurate records.
                </p>
              </FadeIn>
              <FadeIn delay={0.4}>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>2023-2024</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button className="bg-teal hover:bg-teal/90 text-white" asChild>
                    <Link href="https://github.com/Siddharth-magesh/MediNote-AI" target="_blank">
                      <Github className="mr-2 h-4 w-4" />
                      View Source Code
                    </Link>
                  </Button>
                </div>
              </FadeIn>
            </div>
            <SlideIn direction="right" delay={0.3}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-teal/10 to-violet/10 rounded-2xl blur-xl" />
                <div className="bg-background rounded-xl border border-border p-6 relative">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center">
                      <Stethoscope className="h-8 w-8 text-teal" />
                    </div>
                  </div>
                  <div className="text-center mb-4">
                    <p className="text-2xl font-bold text-teal">Real-time</p>
                    <p className="text-muted-foreground">Medical Documentation</p>
                  </div>
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div className="p-2 bg-muted/50 rounded-lg">
                      <p className="text-lg font-bold text-foreground">3</p>
                      <p className="text-xs text-muted-foreground">Languages</p>
                    </div>
                    <div className="p-2 bg-muted/50 rounded-lg">
                      <p className="text-lg font-bold text-foreground">GPT-4</p>
                      <p className="text-xs text-muted-foreground">AI Engine</p>
                    </div>
                    <div className="p-2 bg-muted/50 rounded-lg">
                      <p className="text-lg font-bold text-foreground">PDF</p>
                      <p className="text-xs text-muted-foreground">Reports</p>
                    </div>
                  </div>
                </div>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Project Details Grid */}
      <section className="section-padding">
        <div className="container-max">
          <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12" staggerDelay={0.1}>
            <StaggerItem>
              <Card className="card-accent-teal h-full">
                <CardHeader>
                  <Calendar className="h-6 w-6 text-teal mb-2" />
                  <CardTitle className="text-lg">Development Timeline</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="font-medium text-foreground">2023 - 2024</p>
                    <p className="text-sm text-muted-foreground">
                      Full development from concept to functional prototype
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Key Milestones</p>
                    <p className="text-sm text-muted-foreground">
                      Speech recognition, GPT-4 integration, PDF generation
                    </p>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="card-accent-violet h-full">
                <CardHeader>
                  <Users className="h-6 w-6 text-violet mb-2" />
                  <CardTitle className="text-lg">Development Team</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {[
                    { name: "Siddharth Magesh", role: "AI Engineer & Backend" },
                    { name: "Pranesh Kumar", role: "Full-Stack Developer" },
                    { name: "Mohamed Yasir", role: "UI/UX Designer" },
                  ].map((member, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <p className="text-sm text-foreground">{member.name}</p>
                      <p className="text-xs text-muted-foreground">{member.role}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="card-accent-emerald h-full">
                <CardHeader>
                  <Target className="h-6 w-6 text-emerald mb-2" />
                  <CardTitle className="text-lg">Project Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary" className="badge-emerald border mb-3">
                    Prototype Complete
                  </Badge>
                  <p className="text-sm text-muted-foreground">
                    Functional AI-powered medical documentation system capable of converting
                    real-time conversations into structured reports. Ready for clinical
                    validation and healthcare integration.
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>
          </StaggerContainer>

          {/* Project Overview */}
          <FadeIn>
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="font-heading text-2xl">Project Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  MediNote-AI addresses one of healthcare&apos;s most persistent challenges: the administrative burden
                  of medical documentation. Physicians spend significant time writing patient notes, often after
                  consultations, leading to documentation fatigue and potential inaccuracies. Our solution captures
                  the natural conversation between doctor and patient, using advanced AI to extract relevant medical
                  information and generate comprehensive, structured reports in real-time. With support for multiple
                  languages and intelligent data extraction, MediNote-AI enables healthcare professionals to maintain
                  focus on patient care while ensuring thorough, accurate documentation.
                </p>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </section>

      {/* Key Features */}
      <section className="section-padding bg-muted/30">
        <div className="container-max">
          <FadeIn>
            <h2 className="font-heading text-3xl mb-8">Key Features</h2>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12" staggerDelay={0.1}>
            {[
              {
                icon: Mic,
                title: "Real-time Speech Recognition",
                description: "Continuous conversation capture with high-accuracy transcription of medical terminology",
                color: "teal",
              },
              {
                icon: Languages,
                title: "Multi-Language Support",
                description: "Built-in support for English, Tamil, and Hindi with expandable language capabilities",
                color: "violet",
              },
              {
                icon: Brain,
                title: "GPT-4 Processing",
                description: "Advanced AI extraction of patient information, symptoms, medications, and care instructions",
                color: "amber",
              },
              {
                icon: FileText,
                title: "PDF Report Generation",
                description: "Structured medical reports with patient details, prescriptions, and dietary plans",
                color: "emerald",
              },
              {
                icon: Database,
                title: "Patient Data Management",
                description: "Secure JSON database storing patient history with phone number lookup capabilities",
                color: "rose",
              },
              {
                icon: Smartphone,
                title: "Responsive Interface",
                description: "Mobile-friendly design for accessibility across devices in clinical settings",
                color: "teal",
              },
            ].map((feature) => (
              <StaggerItem key={feature.title}>
                <Card className={`card-accent-${feature.color} hover:shadow-md transition-shadow h-full`}>
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-2">
                      <div className={`w-10 h-10 rounded-lg bg-${feature.color}/10 flex items-center justify-center`}>
                        <feature.icon className={`h-5 w-5 text-${feature.color}`} />
                      </div>
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <FadeIn delay={0.1}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <ClipboardList className="h-5 w-5 text-teal" />
                    <span>Core Capabilities</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    { title: "Conversation Analysis", description: "Real-time transcription and medical context extraction" },
                    { title: "Information Extraction", description: "AI-powered identification of symptoms, diagnoses, and treatments" },
                    { title: "Report Structuring", description: "Automated organization into standard medical report format" },
                    { title: "Patient History", description: "Secure storage and retrieval of previous visit records" },
                    { title: "Concurrent Processing", description: "Python threading for simultaneous recording and generation" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-teal rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-foreground text-sm">{item.title}</p>
                        <p className="text-xs text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-violet" />
                    <span>Technical Implementation</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium text-sm mb-2">Frontend</h4>
                    <div className="flex flex-wrap gap-2">
                      {["HTML", "CSS", "JavaScript", "Responsive UI"].map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">{tech}</Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-2">Backend & AI</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Python", "Flask", "OpenAI GPT-4", "SpeechRecognition"].map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">{tech}</Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-2">Data & Integration</h4>
                    <div className="flex flex-wrap gap-2">
                      {["MongoDB", "JSON Storage", "PDF Generation", "Cross-Server API"].map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">{tech}</Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Output Examples */}
      <section className="section-padding">
        <div className="container-max">
          <FadeIn>
            <h2 className="font-heading text-3xl mb-8 text-center">System Outputs</h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {["/medinote/product1.png", "/medinote/product2.png", "/medinote/product3.png"].map((image, index) => (
                <div
                  key={index}
                  className="aspect-square bg-white rounded-xl flex items-center justify-center p-4 border border-border shadow-sm hover:shadow-md transition-shadow"
                >
                  <img
                    src={image}
                    alt={`MediNote AI Output ${index + 1}`}
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Future Roadmap */}
      <section className="section-padding bg-muted/30">
        <div className="container-max">
          <FadeIn>
            <h2 className="font-heading text-3xl mb-8">Future Roadmap</h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn delay={0.1}>
              <Card className="card-accent-teal h-full">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Lightbulb className="h-5 w-5 text-teal" />
                    <span>Planned Developments</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    { title: "EHR Integration", description: "Compatibility with electronic health record systems" },
                    { title: "Extended Language Support", description: "Additional languages for diverse patient populations" },
                    { title: "Mobile Application", description: "Native iOS and Android apps for on-the-go usage" },
                    { title: "Enhanced AI Models", description: "Improved accuracy in medical data extraction" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-teal rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-foreground text-sm">{item.title}</p>
                        <p className="text-xs text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Card className="card-accent-violet h-full">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-violet" />
                    <span>Compliance & Security</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    { title: "HIPAA Compliance", description: "Healthcare data protection standards implementation" },
                    { title: "Data Encryption", description: "End-to-end encryption for patient information" },
                    { title: "Audit Trails", description: "Comprehensive logging for regulatory compliance" },
                    { title: "Access Controls", description: "Role-based permissions for healthcare staff" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-violet rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-foreground text-sm">{item.title}</p>
                        <p className="text-xs text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
