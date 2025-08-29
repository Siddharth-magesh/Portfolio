import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Users, Heart, Globe, Code, Blocks, Brain } from "lucide-react"

export default function LeadershipPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-background to-muted/30">
        <div className="container-max">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 border border-slate-200 rounded-full text-sm font-medium text-slate-700 mb-4">
              <Brain className="h-4 w-4" />
              Leadership & Service
            </div>
            <h1 className="font-heading mb-6">Leading Through Innovation</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Driving positive change through technical leadership, community service, and organizational development
              across multiple student organizations and professional communities.
            </p>
          </div>
        </div>
      </section>

      {/* Current Leadership Roles */}
      <section className="section-padding">
        <div className="container-max">
          <div className="mb-12">
            <h2 className="font-heading text-3xl mb-4">Current Leadership Positions</h2>
            <p className="text-xl text-muted-foreground">
              Active roles driving technical innovation and community impact
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Youth Red Cross Technical Head */}
            <Card className="group hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 border-l-4 border-l-blue-500">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Heart className="h-8 w-8 text-blue-600" />
                  <Badge variant="secondary">2024-2025</Badge>
                </div>
                <CardTitle className="font-heading text-xl mb-2 font-bold">Technical Head</CardTitle>
                <p className="text-blue-600 font-medium">Youth Red Cross, Velammal Engineering College</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Leading technical initiatives and digital transformation projects for the college's Youth Red Cross
                  unit. Evolved from Volunteer (2022-23) to Joint Secretary (2023-24) to current Technical Head role.
                </p>
                <div className="space-y-3 mb-4">
                  <div>
                    <h4 className="font-medium text-sm mb-1">Key Achievements</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Developed LifeConnect blood donor platform</li>
                      <li>• Built automated event management system</li>
                      <li>• Created official YRC website and mobile app</li>
                      <li>• Authored comprehensive operational protocols</li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Digital Transformation</Badge>
                  <Badge variant="outline">Healthcare Tech</Badge>
                  <Badge variant="outline">Community Service</Badge>
                </div>
                <div className="flex gap-2">
                  <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-700">
                    <Link href="/leadership/youth-red-cross">
                      View Details <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                  <Button asChild size="sm" variant="outline">
                    <Link href="/leadership/youth-red-cross#leadership-evolution">
                      View My Journey <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* WebOps Club Vice Chairman */}
            <Card className="group hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 border-l-4 border-l-blue-500">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Globe className="h-8 w-8 text-blue-600" />
                  <Badge variant="secondary">2024-2026</Badge>
                </div>
                <CardTitle className="font-heading text-xl mb-2 font-bold">Vice Chairman</CardTitle>
                <p className="text-blue-600 font-medium">WebOps Club, Velammal Engineering College</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Overseeing web development projects and technical workshops while mentoring junior students in
                  full-stack development and guiding deployment practices for the student community.
                </p>
                <div className="space-y-3 mb-4">
                  <div>
                    <h4 className="font-medium text-sm mb-1">Responsibilities</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Oversee web development projects</li>
                      <li>• Conduct technical workshops</li>
                      <li>• Mentor junior students</li>
                      <li>• Guide deployment practices</li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Web Development</Badge>
                  <Badge variant="outline">Mentorship</Badge>
                  <Badge variant="outline">Technical Workshops</Badge>
                </div>
                <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-700">
                  <Link href="/leadership/webops">
                    View Details <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Evolution */}
      <section className="section-padding bg-muted/30">
        <div className="container-max">
          <div className="mb-12">
            <h2 className="font-heading text-3xl mb-4">Leadership Journey</h2>
            <p className="text-xl text-muted-foreground">
              Progressive growth through various organizational roles and responsibilities
            </p>
          </div>

          <div className="space-y-6">
            {/* YRC Evolution Timeline */}
            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-xl">Youth Red Cross Leadership Evolution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-heading text-lg mb-2">Volunteer</h3>
                    <p className="text-sm text-muted-foreground mb-2">2022-2023</p>
                    <p className="text-sm text-muted-foreground">
                      Active participation in blood donation drives, community service events, and awareness campaigns
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Heart className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-heading text-lg mb-2">Joint Secretary</h3>
                    <p className="text-sm text-muted-foreground mb-2">2023-2024</p>
                    <p className="text-sm text-muted-foreground">
                      Coordinated major events, managed member activities, and initiated digital transformation projects
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Code className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-heading text-lg mb-2">Technical Head</h3>
                    <p className="text-sm text-muted-foreground mb-2">2024-2025</p>
                    <p className="text-sm text-muted-foreground">
                      Leading all technical initiatives, software development, and organizational digitization efforts
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Other Memberships */}
      <section className="section-padding">
        <div className="container-max">
          <div className="mb-12">
            <h2 className="font-heading text-3xl mb-4">Professional Memberships</h2>
            <p className="text-xl text-muted-foreground">
              Active participation in technical communities and professional organizations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Blockchain Club */}
            <Card className="group hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Blocks className="h-6 w-6 text-blue-600" />
                  </div>
                  <Badge variant="outline" className="text-blue-600 border-blue-200">
                    2022-2023
                  </Badge>
                </div>
                <CardTitle className="font-heading text-xl mb-2 font-bold">Member</CardTitle>
                <p className="text-blue-600 font-medium">Blockchain Club, Velammal Engineering College</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Participated in blockchain workshops, DApp development projects, cryptocurrency research, and smart
                  contract development initiatives.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Blockchain</Badge>
                  <Badge variant="outline">Smart Contracts</Badge>
                  <Badge variant="outline">DApp Development</Badge>
                  <Badge variant="outline">Cryptocurrency</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Coders Club */}
            <Card className="group hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Code className="h-6 w-6 text-blue-600" />
                  </div>
                  <Badge variant="outline" className="text-blue-600 border-blue-200">
                    2022-2026
                  </Badge>
                </div>
                <CardTitle className="font-heading text-xl mb-2 font-bold">Active Member</CardTitle>
                <p className="text-blue-600 font-medium">Coders Club, Velammal Engineering College</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Active participation in competitive programming contests, algorithm challenges, and open-source
                  contribution projects throughout college tenure.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Competitive Programming</Badge>
                  <Badge variant="outline">Algorithms</Badge>
                  <Badge variant="outline">Open Source</Badge>
                  <Badge variant="outline">Code Challenges</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Impact */}
      <section className="section-padding bg-muted/30">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="font-heading mb-4">Leadership Impact</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Quantifying the reach and impact of leadership initiatives and community service
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-heading font-bold text-primary mb-2">6+</div>
              <div className="text-sm text-muted-foreground">Software Solutions Developed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-heading font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Community Events Organized</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-heading font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Students Impacted</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-heading font-bold text-primary mb-2">3</div>
              <div className="text-sm text-muted-foreground">Years of Service</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center">
            <h2 className="font-heading mb-4">Leadership Collaboration</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Interested in leadership opportunities, community initiatives, or organizational development projects?
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">
                Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
