import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, ExternalLink, Github, Brain, Stethoscope, Leaf, Users, Heart, Globe } from "lucide-react"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-background to-muted/30">
        <div className="container-max">
          <div className="text-center">
            <Badge
                variant="secondary"
                className="mb-4 px-4 py-2 text-sm bg-slate-100 text-slate-800 border-slate-200 rounded-full"
              >
              Project Portfolio
            </Badge>
            <h1 className="font-heading mb-6">Innovation Through Code</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              A comprehensive collection of AI-powered applications, web platforms, and social impact projects
              demonstrating technical expertise and commitment to solving real-world problems.
            </p>
          </div>
        </div>
      </section>

      {/* Main Projects */}
      <section className="section-padding">
        <div className="container-max">
          <div className="mb-12">
            <h2 className="font-heading text-3xl mb-4">Main Projects</h2>
            <p className="text-xl text-muted-foreground">
              Flagship applications showcasing advanced AI and full-stack development capabilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Sentimatrix */}
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Brain className="h-8 w-8 text-primary" />
                  <Badge variant="outline">AI Platform</Badge>
                </div>
                <CardTitle className="font-heading text-xl mb-2">Sentimatrix</CardTitle>
                <p className="text-sm text-muted-foreground">Multi-modal Sentiment Analysis Suite</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Comprehensive sentiment analysis platform integrating PyPI module, interactive web interface (BAT –
                  Business Analytics Tools), chatbot, and API services for product reviews and customer feedback
                  evaluation.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">NLP</Badge>
                  <Badge variant="secondary">Sentiment Analysis</Badge>
                  <Badge variant="secondary">API Development</Badge>
                  <Badge variant="secondary">Web Interface</Badge>
                </div>
                <div className="flex space-x-2">
                  <Button asChild size="sm" className="flex-1">
                    <Link href="/projects/sentimatrix">
                      View Details <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm">
                    <Link href="https://github.com/Siddharth-magesh/Sentimatrix-V1" target="_blank" rel="noopener noreferrer">
                      <Github className="h-3 w-3" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm">
                    <Link href="https://pypi.org/project/Sentimatrix/0.1.7/" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* AgriHub */}
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Leaf className="h-8 w-8 text-primary" />
                  <Badge variant="outline">AgTech Platform</Badge>
                </div>
                <CardTitle className="font-heading text-xl mb-2">AgriHub</CardTitle>
                <p className="text-sm text-muted-foreground">Integrated Digital Platform for Farmers</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Comprehensive digital platform for farmers managing retail, research, education, and peer-to-peer
                  guidance, enhancing agricultural accessibility and productivity through technology integration.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">Agriculture</Badge>
                  <Badge variant="secondary">E-commerce</Badge>
                  <Badge variant="secondary">Education Platform</Badge>
                  <Badge variant="secondary">Community</Badge>
                </div>
                <div className="flex space-x-2">
                  <Button asChild size="sm" className="flex-1">
                    <Link href="/projects/agrihub">
                      View Details <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm">
                    <Link href="https://github.com/Siddharth-magesh/Agri-Hub" target="_blank" rel="noopener noreferrer">
                      <Github className="h-3 w-3" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm">
                    <ExternalLink className="h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Breathy-Sweet */}
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Stethoscope className="h-8 w-8 text-primary" />
                  <Badge variant="outline">HealthTech</Badge>
                </div>
                <CardTitle className="font-heading text-xl mb-2">Breathy-Sweet</CardTitle>
                <p className="text-sm text-muted-foreground">Non-invasive Glucose Monitoring System</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Revolutionary non-invasive glucose monitoring system using IoT devices and advanced AI models,
                  accessible via mobile PWA for improved diabetic care and continuous health monitoring.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">IoT</Badge>
                  <Badge variant="secondary">Healthcare AI</Badge>
                  <Badge variant="secondary">Mobile PWA</Badge>
                  <Badge variant="secondary">Medical Devices</Badge>
                </div>
                <div className="flex space-x-2">
                  <Button asChild size="sm" className="flex-1">
                    <Link href="/projects/breathy-sweet">
                      View Details <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm">
                    <Link href="https://github.com/Siddharth-magesh/Breathy-Sweet" target="_blank" rel="noopener noreferrer">
                      <Github className="h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* MediNote-AI */}
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Stethoscope className="h-8 w-8 text-primary" />
                  <Badge variant="outline">Medical AI</Badge>
                </div>
                <CardTitle className="font-heading text-xl mb-2">MediNote-AI</CardTitle>
                <p className="text-sm text-muted-foreground">AI-driven Medical Assistant</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Intelligent medical assistant for prescription interpretation, diagnosis assistance, and patient
                  treatment record management, leveraging advanced NLP and medical knowledge bases.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">Medical AI</Badge>
                  <Badge variant="secondary">NLP</Badge>
                  <Badge variant="secondary">Healthcare</Badge>
                  <Badge variant="secondary">Diagnosis Support</Badge>
                </div>
                <div className="flex space-x-2">
                  <Button asChild size="sm" className="flex-1">
                    <Link href="/projects/medinote-ai">
                      View Details <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm">
                    <Link href="https://github.com/Siddharth-magesh/MediNote-AI" target="_blank" rel="noopener noreferrer">
                      <Github className="h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* VEC Website */}
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Globe className="h-8 w-8 text-primary" />
                  <Badge variant="outline">Web Platform</Badge>
                </div>
                <CardTitle className="font-heading text-xl mb-2">VEC Website</CardTitle>
                <p className="text-sm text-muted-foreground">College Website Backend Development</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Backend development contribution for Velammal Engineering College website ensuring robust database
                  handling, API integration, and performance optimization for thousands of concurrent users.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">Backend Development</Badge>
                  <Badge variant="secondary">API Design</Badge>
                  <Badge variant="secondary">Database</Badge>
                  <Badge variant="secondary">Performance</Badge>
                </div>
                <div className="flex space-x-2">
                  <Button asChild size="sm" className="flex-1">
                    <Link href="/projects/vec-website">
                      View Details <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm">
                    <Link href="https://github.com/Web-Developer-VEC/VEC_Web_Engine" target="_blank" rel="noopener noreferrer">
                      <Github className="h-3 w-3" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm">
                    <Link href="https://velammal.edu.in/" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Youth Red Cross Projects */}
      <section className="section-padding bg-muted/30">
        <div className="container-max">
          <div className="mb-12">
            <h2 className="font-heading text-3xl mb-4">Youth Red Cross Projects</h2>
            <p className="text-xl text-muted-foreground">
              Social impact applications developed during leadership role at Youth Red Cross
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* LifeConnect */}
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                  <Badge variant="outline">Social Impact</Badge>
                </div>
                <CardTitle className="font-heading text-xl mb-2">LifeConnect</CardTitle>
                <p className="text-sm text-muted-foreground">Blood Donor Connection Platform</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Autonomous platform connecting blood donors with recipients in real-time, streamlining emergency blood
                  request handling and saving lives through efficient donor-recipient matching.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">Healthcare</Badge>
                  <Badge variant="secondary">Real-time Matching</Badge>
                  <Badge variant="secondary">Emergency Response</Badge>
                </div>
                <div className="flex space-x-2">
                  <Button asChild size="sm" className="flex-1">
                    <Link href="/projects/life-connect">
                      View Details <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm">
                    <Link href="https://github.com/Siddharth-magesh/YouthRedCross-BloodRequest" target="_blank" rel="noopener noreferrer">
                      <Github className="h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Crosslink App */}
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Users className="h-8 w-8 text-primary" />
                  <Badge variant="outline">PWA Platform</Badge>
                </div>
                <CardTitle className="font-heading text-xl mb-2">
                  CrossLink Mobile Application and Automations
                </CardTitle>
                <p className="text-sm text-muted-foreground">YRC Event & Attendance Management PWA</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Complete Digital Solution for Youth Red Cross Operations with Integrated Automation Tools including
                  QR-based attendance, event management, and document generation with PWA capabilities.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">PWA</Badge>
                  <Badge variant="secondary">Event Management</Badge>
                  <Badge variant="secondary">QR Attendance</Badge>
                  <Badge variant="secondary">Automation</Badge>
                </div>
                <div className="flex space-x-2">
                  <Button asChild size="sm" className="flex-1">
                    <Link href="/projects/crosslink">
                      View Details <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm">
                    <Link href="https://github.com/Siddharth-magesh/CrossLink" target="_blank" rel="noopener noreferrer">
                      <Github className="h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Additional YRC Projects */}
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Globe className="h-8 w-8 text-primary" />
                  <Badge variant="outline">WordPress Platform</Badge>
                </div>
                <CardTitle className="font-heading text-xl mb-2">YRC Digital Website</CardTitle>
                <p className="text-sm text-muted-foreground">WordPress Platform with Hostinger Hosting</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Official Digital Hub for Youth Red Cross Operations built with WordPress excellence and hosted on
                  Hostinger, providing comprehensive content management and member portal functionality.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">WordPress</Badge>
                  <Badge variant="secondary">Hostinger</Badge>
                  <Badge variant="secondary">CMS</Badge>
                  <Badge variant="secondary">Web Platform</Badge>
                </div>
                <div className="flex space-x-2">
                  <Button asChild size="sm" className="flex-1">
                    <Link href="/projects/yrc-website">
                      View Details <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm">
                    <Globe className="h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Project Stats */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="font-heading mb-4">Project Impact</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Quantifying the reach and impact of developed applications and platforms
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-heading font-bold text-primary mb-2">10+</div>
              <div className="text-sm text-muted-foreground">Total Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-heading font-bold text-primary mb-2">5</div>
              <div className="text-sm text-muted-foreground">AI-Powered Applications</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-heading font-bold text-primary mb-2">3</div>
              <div className="text-sm text-muted-foreground">Healthcare Solutions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-heading font-bold text-primary mb-2">6</div>
              <div className="text-sm text-muted-foreground">Social Impact Projects</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-max">
          <div className="text-center">
            <h2 className="font-heading mb-4">Explore More Projects</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Discover additional projects and contributions on GitHub, or get in touch to discuss collaborations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                <Link
                  href="https://github.com/Siddharth-magesh?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" />
                  View All My Projects
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">
                  Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
