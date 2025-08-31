import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Globe, Code, Users, Award, Target, Lightbulb, GitBranch, Cloud, Database } from "lucide-react"

export default function WebOpsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-background to-muted/30">
        <div className="container-max">
          <div className="mb-6">
            <Button variant="ghost" asChild>
              <Link href="/leadership">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Leadership
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">
                Leadership Role
              </Badge>
              <h1 className="font-heading mb-6">Vice Chairman - WebOps</h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Leading Digital Innovation at Velammal Engineering College through collaborative web development,
                technical mentorship, and pioneering full-stack solutions that serve our college community and beyond.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button>
                  <Link href="https://github.com/Web-Developer-VEC" target="_blank">View Projects</Link>
                </Button>
                <Button variant="outline"><Link href="https://velammal.edu.in/webteam" target="_blank">Team Gallery</Link></Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center border-2 border-dashed border-blue-200">
                <img src="/webops/webops-team-logo.png" alt="WebOps Leadership" className="rounded-2xl object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding">
        <div className="container-max">
          <Card>
            <CardContent className="p-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I was the initial head honcho of the backend for this website, which basically means I lived in the land of APIs, databases, and caffeine. I designed the entire database architecture and crafted the system design like it was a LEGO set for grown-ups. From building scalable endpoints to managing all sorts of wild, raw data, I made sure it all flowed smoothly through custom modules I built specifically to tame the chaos.
                On top of that, I handled the server-side logic like a backend wizard, optimizing performance, integrating chatbot features (yes, I made it talk!), and making sure everything stayed secure and reliable. If something broke at 3AM, chances are I was already fixing it... or at least yelling at my console lovingly.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* WebOps Evolution Timeline */}
      <section className="section-padding bg-muted/30">
        <div className="container-max">
          <div className="mb-12">
            <h2 className="font-heading text-3xl mb-4">WebOps Evolution Timeline</h2>
            <p className="text-xl text-muted-foreground">
              The journey of building a comprehensive web development ecosystem
            </p>
          </div>

          <div className="space-y-8">
            {/* Phase 1 */}
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <Badge variant="outline">Phase 1</Badge>
                </div>
                <CardTitle className="font-heading text-xl">Foundation Era</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  The WebOps journey began with a vision to establish a robust web development ecosystem within VEC.
                  Starting with a small group of passionate developers, we laid the groundwork for what would become a
                  comprehensive digital development initiative.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-2 text-sm">
                    <Target className="h-4 w-4 text-blue-600" />
                    <span>Core team formation</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Code className="h-4 w-4 text-blue-600" />
                    <span>Development standards</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Lightbulb className="h-4 w-4 text-blue-600" />
                    <span>Project planning</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Phase 2 */}
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <GitBranch className="h-6 w-6 text-green-600" />
                  </div>
                  <Badge variant="outline">Phase 2</Badge>
                </div>
                <CardTitle className="font-heading text-xl">Growth and Expansion</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Building upon our foundation, WebOps expanded its scope to encompass full-stack development, cloud
                  infrastructure, and collaborative development practices. This phase marked our transition from a small
                  team to a structured organization.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="flex items-center space-x-2 text-sm">
                    <Database className="h-4 w-4 text-green-600" />
                    <span>MERN stack adoption</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <GitBranch className="h-4 w-4 text-green-600" />
                    <span>GitHub workflows</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Cloud className="h-4 w-4 text-green-600" />
                    <span>AWS integration</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Users className="h-4 w-4 text-green-600" />
                    <span>Team structure</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Phase 3 */}
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Award className="h-6 w-6 text-purple-600" />
                  </div>
                  <Badge variant="secondary">Phase 3</Badge>
                </div>
                <CardTitle className="font-heading text-xl">Innovation and Leadership</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  The current era of WebOps is characterized by innovation, leadership, and community impact. We've
                  evolved into a team that not only develops exceptional web solutions but also mentors future
                  developers and contributes to the broader tech community.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="flex items-center space-x-2 text-sm">
                    <Globe className="h-4 w-4 text-purple-600" />
                    <span>VEC website deployment</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Target className="h-4 w-4 text-purple-600" />
                    <span>Project management</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Users className="h-4 w-4 text-purple-600" />
                    <span>Mentorship programs</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Award className="h-4 w-4 text-purple-600" />
                    <span>Industry partnerships</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className="section-padding">
        <div className="container-max">
          <div className="mb-12">
            <h2 className="font-heading text-3xl mb-4">Leadership Philosophy</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Target className="h-8 w-8 text-blue-600 mb-4" />
                <CardTitle className="font-heading text-xl">Vision Statement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Empowering digital transformation through collaborative development and innovative web solutions
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-8 w-8 text-blue-600 mb-4" />
                <CardTitle className="font-heading text-xl">Leadership Approach</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Collaborative leadership style emphasizing team growth, technical excellence, and creating
                  opportunities for every member to excel and contribute meaningfully.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Lightbulb className="h-8 w-8 text-blue-600 mb-4" />
                <CardTitle className="font-heading text-xl">Team Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Focus on skill development, knowledge sharing, and creating opportunities for team members to excel in
                  their technical and professional growth.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Group Photo Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl mb-4">The WebOps Team</h2>
            <p className="text-xl text-muted-foreground">Pioneers of Digital Innovation at VEC</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="aspect-video bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center border-2 border-dashed border-blue-200 shadow-lg">
              <img src="/webops/development-team-photo.png" alt="WebOps Team Photo" className="rounded-2xl object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Technical Contributions */}
      <section className="section-padding">
        <div className="container-max">
          <div className="mb-12">
            <h2 className="font-heading text-3xl mb-4">Technical Contributions and Expertise</h2>
            <p className="text-xl text-muted-foreground">Leading technical initiatives across multiple domains</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-xl">Backend Architecture Leadership</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Node.js and Express.js server architecture design</li>
                  <li>• RESTful API development and optimization</li>
                  <li>• Database design and management (MongoDB focus)</li>
                  <li>• Authentication and security implementation</li>
                  <li>• Server deployment and maintenance strategies</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-xl">DevOps and Deployment</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• AWS cloud infrastructure management</li>
                  <li>• CI/CD pipeline development and maintenance</li>
                  <li>• GitHub workflow optimization</li>
                  <li>• Automation script development</li>
                  <li>• Performance monitoring and optimization</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Major Projects */}
      <section className="section-padding bg-muted/30">
        <div className="container-max">
          <div className="mb-12">
            <h2 className="font-heading text-3xl mb-4">Major Projects and Achievements</h2>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-xl">VEC Official Website</CardTitle>
                <p className="text-muted-foreground">Complete digital infrastructure development</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Led the complete development of Velammal Engineering College's official website, coordinating a
                  17-member team through full-stack development, AWS deployment, and ongoing maintenance.
                </p>
                <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-700">
                  <Link href="/projects/vec-website">
                    View Project Details <ArrowLeft className="ml-1 h-3 w-3 rotate-180" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading text-lg">Development Standards</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Established coding standards, review processes, and best practices that became the foundation for
                    all WebOps projects.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-heading text-lg">Team Mentorship</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Developed and implemented mentorship programs that successfully onboarded new team members and
                    enhanced existing members' skills.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl mb-4">Future Vision and Goals</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Strategic outlook for continued evolution and impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <Target className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="font-heading text-lg mb-2">Capability Evolution</h3>
                <p className="text-sm text-muted-foreground">
                  Continued evolution of WebOps capabilities and services to meet emerging technological demands
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Lightbulb className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="font-heading text-lg mb-2">Innovation Adoption</h3>
                <p className="text-sm text-muted-foreground">
                  Advanced technology adoption and innovation in web development practices and methodologies
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Award className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="font-heading text-lg mb-2">Legacy Planning</h3>
                <p className="text-sm text-muted-foreground">
                  Knowledge transfer initiatives and legacy planning for sustainable organizational growth
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
