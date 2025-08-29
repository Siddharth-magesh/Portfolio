import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Calendar, MapPin, Building, Download, ExternalLink, Users, Code, Award } from "lucide-react"

export default function VECWebsiteExperience() {
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
                Lead Backend Developer
              </div>
              <h1 className="font-heading mb-4">WebOps Club - Velammal Engineering College</h1>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                Leading the founding Pilot Batch in building the official college website infrastructure using MERN
                stack, establishing the foundation for future development teams and mentoring the next generation of
                developers.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Team Leadership</Badge>
                <Badge variant="outline">MERN Stack</Badge>
                <Badge variant="outline">AWS Deployment</Badge>
                <Badge variant="outline">Project Management</Badge>
                <Badge variant="outline">Mentoring</Badge>
              </div>
            </div>

            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading text-lg">Organization Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Building className="h-4 w-4 text-primary" />
                    <span className="text-sm">WebOps Club - VEC</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span className="text-sm">2023 - 2025 (2 years ongoing)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="text-sm">Chennai, India (Offline)</span>
                  </div>
                  <div className="pt-2">
                    <Badge variant="secondary">Ongoing</Badge>
                  </div>
                  <div className="pt-2 space-y-2">
                    <Button size="sm" variant="outline" asChild>
                      <Link href="https://velammal.edu.in/" target="_blank">
                        <ExternalLink className="mr-2 h-3 w-3" />
                        Visit Website
                      </Link>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <Link href="https://velammal.edu.in/webteam" target="_blank">
                        <ExternalLink className="mr-2 h-3 w-3" />
                        WebOps Team
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Founding Team Legacy */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4">
              <Award className="mr-2 h-4 w-4" />
              Founding Team Legacy
            </div>
            <h2 className="font-heading mb-4">The Pilot Batch Initiative</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We are the founding force behind Velammal Engineering College's official website—the Pilot Batch of the
              VEC Web Development Team. As the first-ever team to take on this initiative, our 17-member squad laid the
              groundwork for the college's digital presence.
            </p>
          </div>

          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-heading text-lg mb-4 flex items-center">
                    <Users className="mr-2 h-5 w-5 text-primary" />
                    Team Structure
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>
                      • <strong>17-member founding squad</strong> - Pilot Batch
                    </li>
                    <li>
                      • <strong>Lead Backend Developer</strong> - Architecture & Team Leadership
                    </li>
                    <li>
                      • <strong>Full-stack development</strong> - MERN stack implementation
                    </li>
                    <li>
                      • <strong>GitHub collaboration</strong> - Version control & code review
                    </li>
                    <li>
                      • <strong>AWS deployment</strong> - Cloud infrastructure setup
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-heading text-lg mb-4 flex items-center">
                    <Code className="mr-2 h-5 w-5 text-primary" />
                    Technical Foundation
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>
                      • <strong>Built from scratch</strong> - Complete system architecture
                    </li>
                    <li>
                      • <strong>Responsive UI design</strong> - Mobile-first approach
                    </li>
                    <li>
                      • <strong>Backend APIs</strong> - RESTful service architecture
                    </li>
                    <li>
                      • <strong>Database design</strong> - Scalable data management
                    </li>
                    <li>
                      • <strong>Security implementation</strong> - Authentication & authorization
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="section-padding bg-muted/30">
        <div className="container-max">
          <h2 className="font-heading mb-8">Key Achievements & Responsibilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-lg">Team Leadership</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Led team of backend developers in building comprehensive college website infrastructure, coordinating
                  multiple development streams and ensuring code quality standards.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Project Management</Badge>
                  <Badge variant="secondary">Code Review</Badge>
                  <Badge variant="secondary">Team Coordination</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-lg">System Architecture</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Designed system architecture for scalable web applications, implementing robust security measures and
                  performance optimization features with CI/CD pipeline integration.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Architecture Design</Badge>
                  <Badge variant="secondary">Security Implementation</Badge>
                  <Badge variant="secondary">Performance Optimization</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-lg">Data Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Managed collection and processing of large-scale institutional data, implementing efficient database
                  schemas and data validation processes for college operations.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Database Design</Badge>
                  <Badge variant="secondary">Data Processing</Badge>
                  <Badge variant="secondary">Validation Systems</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-lg">Mentoring & Legacy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Mentored Co-Pilot Batch and established the foundation for future development teams, creating
                  documentation and onboarding processes for sustainable development.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Mentoring</Badge>
                  <Badge variant="secondary">Documentation</Badge>
                  <Badge variant="secondary">Knowledge Transfer</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Stack */}
      <section className="section-padding">
        <div className="container-max">
          <h2 className="font-heading mb-8">Technical Stack & Tools</h2>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-lg">Backend Technologies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="outline">Node.js</Badge>
                  <Badge variant="outline">Express.js</Badge>
                  <Badge variant="outline">RESTful APIs</Badge>
                  <Badge variant="outline">Authentication Systems</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-lg">Database & Storage</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="outline">MongoDB</Badge>
                  <Badge variant="outline">Mongoose ODM</Badge>
                  <Badge variant="outline">Data Modeling</Badge>
                  <Badge variant="outline">Query Optimization</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-lg">Frontend & Full-Stack</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="outline">React.js</Badge>
                  <Badge variant="outline">Responsive Design</Badge>
                  <Badge variant="outline">UI/UX Implementation</Badge>
                  <Badge variant="outline">Cross-browser Compatibility</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-lg">DevOps & Deployment</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="outline">AWS Deployment</Badge>
                  <Badge variant="outline">CI/CD Pipelines</Badge>
                  <Badge variant="outline">GitHub Workflows</Badge>
                  <Badge variant="outline">Automation Scripts</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* College Information */}
      <section className="section-padding bg-muted/30">
        <div className="container-max">
          <h2 className="font-heading mb-8">Organization Information</h2>
          <Card>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-heading text-lg mb-4">Velammal Engineering College</h3>
                  <div className="space-y-3 text-muted-foreground">
                    <div className="flex items-start space-x-2">
                      <MapPin className="h-4 w-4 mt-1 text-primary" />
                      <span className="text-sm">
                        Velammal Engineering College (Autonomous)
                        <br />
                        (Unit of Velammal Educational Trust)
                        <br />
                        Ambattur Red-hills Road, Surapet
                        <br />
                        Chennai – 600 066, Tamil Nadu, India
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <ExternalLink className="h-4 w-4 text-primary" />
                      <Link href="https://velammal.edu.in/" target="_blank" className="text-sm hover:text-primary">
                        https://velammal.edu.in/
                      </Link>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-heading text-lg mb-4">WebOps Club</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p className="text-sm">• Official web development team of VEC</p>
                    <p className="text-sm">• Responsible for college's digital presence</p>
                    <p className="text-sm">• Student-led development initiatives</p>
                    <p className="text-sm">• Collaboration with college administration</p>
                    <div className="pt-2">
                      <Link
                        href="https://velammal.edu.in/webteam"
                        target="_blank"
                        className="text-sm text-primary hover:underline"
                      >
                        Visit WebOps Team Page →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Documents */}
      <section className="section-padding">
        <div className="container-max">
          <h2 className="font-heading mb-8">Documents & Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-lg">Leadership Certificate</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 text-sm">
                  Official certificate recognizing leadership role in WebOps Club
                </p>
                <Button size="sm" variant="outline" disabled>
                  <Download className="mr-2 h-3 w-3" />
                  Coming Soon
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-lg">Project Documentation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 text-sm">
                  Comprehensive technical documentation of the website development project
                </p>
                <Button size="sm" variant="outline" asChild>
                  <Link href="/projects/vec-website">
                    <ExternalLink className="mr-2 h-3 w-3" />
                    View Project Details
                  </Link>
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
