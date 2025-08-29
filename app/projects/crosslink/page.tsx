import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Github, Users, QrCode, FileText, Smartphone, Database, Shield } from "lucide-react"

export default function CrossLinkProjectPage() {
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
                PWA Platform • 2025 - Ongoing
              </Badge>
              <h1 className="font-heading mb-6">CrossLink - YRC Event & Attendance Management PWA</h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Complete Digital Solution for Youth Red Cross Operations with Integrated Automation Tools
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild>
                  <Link href="https://github.com/Siddharth-magesh/CrossLink" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    View Source Code
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="https://siddharth-magesh.github.io/CrossLink/login" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                <img
                  src="/crosslink-project-banner.jpg"
                  alt="CrossLink Project Banner"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="font-heading text-3xl mb-6">Project Overview</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Modern Progressive Web App (PWA) designed for the Youth Red Cross (YRC) of Velammal Engineering
                  College to streamline event management, QR-based attendance, on-duty document generation, and
                  comprehensive student/member management with mobile-first, installable web experience.
                </p>

                <h3 className="font-heading text-xl mb-4">Key Features</h3>
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  <Card>
                    <CardHeader className="pb-3">
                      <div className="flex items-center space-x-2">
                        <QrCode className="h-5 w-5 text-primary" />
                        <CardTitle className="text-lg">QR Attendance System</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Unique QR codes for each event member with real-time scanning and tracking
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <div className="flex items-center space-x-2">
                        <FileText className="h-5 w-5 text-primary" />
                        <CardTitle className="text-lg">Document Generation</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Automated on-duty document generation in DOCX or PDF format
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <div className="flex items-center space-x-2">
                        <Smartphone className="h-5 w-5 text-primary" />
                        <CardTitle className="text-lg">PWA Support</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Installable web app with offline functionality and home screen installation
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <div className="flex items-center space-x-2">
                        <Database className="h-5 w-5 text-primary" />
                        <CardTitle className="text-lg">Student Management</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Bulk CSV upload support with comprehensive member data management
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Project Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Working Period</h4>
                    <p className="text-sm text-muted-foreground">2025 - Ongoing</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Team Size</h4>
                    <p className="text-sm text-muted-foreground">4 Developers</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">My Role</h4>
                    <p className="text-sm text-muted-foreground">Lead Developer & Backend Architecture</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Status</h4>
                    <Badge variant="secondary">In Development</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Implementation */}
      <section className="section-padding bg-muted/30">
        <div className="container-max">
          <h2 className="font-heading text-3xl mb-8">Technical Implementation</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-5 w-5" />
                  <span>Core Technologies</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-sm">Frontend</h4>
                    <p className="text-sm text-muted-foreground">React + Vite, PWA capabilities, Service Workers</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">Backend</h4>
                    <p className="text-sm text-muted-foreground">Flask (Python), MongoDB for data storage</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">Authentication</h4>
                    <p className="text-sm text-muted-foreground">
                      Werkzeug password hashing, secure session management
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Integrated Automation Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-sm mb-1">YRC ID Card Generator</h4>
                    <p className="text-xs text-muted-foreground mb-2">
                      Automated ID card generation from CSV student data
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="https://github.com/Siddharth-magesh/YRC-IDCard-Generator" target="_blank">
                        <Github className="mr-1 h-3 w-3" />
                        View Code
                      </Link>
                    </Button>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-1">YRC Drive Manager</h4>
                    <p className="text-xs text-muted-foreground mb-2">
                      Automated Google Drive content organization tool
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="https://github.com/Siddharth-magesh/YRC-Drive-manager" target="_blank">
                        <Github className="mr-1 h-3 w-3" />
                        View Code
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mb-8">
            <h3 className="font-heading text-xl mb-4">Technology Stack</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">React</Badge>
              <Badge variant="outline">Vite</Badge>
              <Badge variant="outline">PWA</Badge>
              <Badge variant="outline">Service Workers</Badge>
              <Badge variant="outline">Flask</Badge>
              <Badge variant="outline">Python</Badge>
              <Badge variant="outline">MongoDB</Badge>
              <Badge variant="outline">QR Code Generation</Badge>
              <Badge variant="outline">Document Generation</Badge>
              <Badge variant="outline">Email Services</Badge>
              <Badge variant="outline">Google Drive API</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="section-padding">
        <div className="container-max">
          <h2 className="font-heading text-3xl mb-8">Development Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg">Siddharth Magesh</CardTitle>
                <p className="text-sm text-muted-foreground">Lead Developer & Backend Architecture</p>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg">Vishva</CardTitle>
                <p className="text-sm text-muted-foreground">Frontend Development & PWA Implementation</p>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg">Andal Priya Dharshani</CardTitle>
                <p className="text-sm text-muted-foreground">UI/UX Design & Testing</p>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg">Dakshan</CardTitle>
                <p className="text-sm text-muted-foreground">Database Management & Integration</p>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Future Roadmap */}
      <section className="section-padding bg-muted/30">
        <div className="container-max">
          <h2 className="font-heading text-3xl mb-8">Future Roadmap</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Enhanced Mobile Features</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Native capabilities integration for improved mobile experience
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">System Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Integration with college management systems for seamless data flow
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Analytics Dashboard</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Advanced analytics for event insights and attendance patterns
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Multi-language Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Broader accessibility with multiple language options</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">API Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Third-party integrations and external system connectivity
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">ML Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Machine learning for predictive attendance analysis</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
