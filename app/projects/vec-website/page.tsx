import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Github, Calendar, Code, ExternalLink } from "lucide-react"

export default function VECWebsitePage() {
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
                Web Development
              </Badge>
              <h1 className="font-heading mb-4">VEC Website</h1>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                Official website for VEC showcasing events, achievements, and resources.
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
                    href="https://github.com/Siddharth-magesh/VEC-Website"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Source Code
                  </Link>
                </Button>
                <Button asChild>
                  <Link
                    href="https://www.figma.com/design/vec-website-design"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Figma Design
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                <img
                  src="/vec-website-cover.png"
                  alt="VEC Website Cover Image"
                  className="object-contain w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Description */}
      <section className="section-padding pb-8">
        <div className="container-max">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="font-heading text-3xl mb-6">Project Description</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  The VEC Website serves as the digital face of the institution, providing information about events,
                  achievements, and resources. It is designed to be user-friendly and accessible, ensuring seamless
                  navigation for students, faculty, and visitors.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Built with a focus on modern web technologies, the website incorporates responsive design principles to
                  ensure compatibility across devices, from desktops to smartphones. The platform highlights the institution's
                  milestones, upcoming events, and essential resources, making it a one-stop destination for all stakeholders.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  The development process emphasized collaboration and scalability, leveraging the MERN stack for a robust
                  backend and an intuitive frontend. The website also integrates secure authentication systems, ensuring
                  personalized access for users while maintaining data integrity and privacy.
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
                    <p className="text-sm text-muted-foreground">4 Developers</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Status</h4>
                    <Badge variant="secondary">Live</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="section-padding pt-8">
        <div className="container-max">
          <h2 className="font-heading text-3xl mb-6">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-medium mb-2">Full-Stack Web Architecture</h4>
              <p className="text-sm text-muted-foreground">Complete MERN stack implementation</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Responsive UI Design</h4>
              <p className="text-sm text-muted-foreground">Cross-browser compatibility and mobile optimization</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Comprehensive Backend API</h4>
              <p className="text-sm text-muted-foreground">RESTful API development and integration</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">GitHub Collaboration</h4>
              <p className="text-sm text-muted-foreground">Collaborative development workflow</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">AWS Cloud Deployment</h4>
              <p className="text-sm text-muted-foreground">Scalable cloud hosting and deployment</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">CI/CD Pipelines</h4>
              <p className="text-sm text-muted-foreground">Automated deployment and maintenance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Details */}
      <section className="section-padding bg-muted/30">
        <div className="container-max">
          <h2 className="font-heading text-3xl mb-6">Implementation Details</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-medium mb-2">Core Capabilities</h4>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Complete website architecture built from ground up</li>
                <li>RESTful API development and integration</li>
                <li>Authentication systems for secure access</li>
                <li>Database modeling and query optimization</li>
                <li>Responsive design implementation across all devices</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Advanced Features</h4>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>CI/CD pipelines for automated deployment</li>
                <li>GitHub workflows for team collaboration</li>
                <li>AWS deployment with scalable infrastructure</li>
                <li>Automation scripts for maintenance and updates</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Used */}
      <section className="section-padding">
        <div className="container-max">
          <h2 className="font-heading text-3xl mb-6">Technologies Used</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-medium mb-2">Backend Technologies</h4>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Node.js</li>
                <li>Express.js</li>
                <li>RESTful APIs</li>
                <li>Authentication Systems</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Database & Storage</h4>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>MongoDB</li>
                <li>Mongoose ODM</li>
                <li>Data Modeling</li>
                <li>Query Optimization</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Frontend & Full-Stack</h4>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>React.js</li>
                <li>Responsive Design</li>
                <li>UI/UX Implementation</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">DevOps & Deployment</h4>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>AWS Deployment</li>
                <li>CI/CD Pipelines</li>
                <li>GitHub Workflows</li>
                <li>Automation Scripts</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Information */}
      <section className="section-padding bg-muted/30">
        <div className="container-max">
          <h2 className="font-heading text-3xl mb-6">Team Information</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            17-Member Founding Squad: Pilot Batch that laid the groundwork and mentored the Co-Pilot Batch.
          </p>
          <h3 className="font-heading text-xl mb-4">Meet the Complete Team</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            A dedicated team of developers, designers, and strategists who collaborated to bring the VEC Website to life.
          </p>
          <a
            href="https://velammal.edu.in/webteam"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 bg-primary text-white font-medium rounded-md hover:bg-primary-dark transition-colors"
          >
            Visit the Web Team
          </a>
        </div>
      </section>

      {/* Future Roadmap */}
      <section className="section-padding">
        <div className="container-max">
          <h2 className="font-heading text-3xl mb-6">Future Roadmap</h2>
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li>Continuous platform evolution under Co-Pilot Batch maintenance</li>
            <li>Enhanced user experience features</li>
            <li>Integration of advanced college management systems</li>
            <li>Scalable architecture improvements for growing user base</li>
            <li>Legacy maintenance and knowledge transfer to future batches</li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
