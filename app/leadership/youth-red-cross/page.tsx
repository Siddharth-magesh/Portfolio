import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  ArrowLeft,
  Calendar,
  Users,
  Heart,
  Code,
  Droplets,
  TreePine,
  Shield,
  Smartphone,
  ArrowRight,
} from "lucide-react"

export default function YouthRedCrossPage() {
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
              <h1 className="font-heading mb-6">Youth Red Cross Technical Head</h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Leading digital transformation and technical innovation at Velammal Engineering College's Youth Red
                Cross unit, evolving from volunteer to technical leadership over three years of dedicated service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild>
                  <Link href="/projects">View Projects</Link>
                </Button>
                <Button variant="outline">Community Impact</Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center overflow-hidden">
                <img
                  src="/yrc/yrc-leadership.jpg"
                  alt="Youth Red Cross Leadership Activities"
                  className="w-auto h-full object-contain rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Role Evolution */}
      <section className="section-padding" id="leadership-evolution">
        <div className="container-max">
          <div className="mb-12">
            <h2 className="font-heading text-3xl mb-4">Leadership Evolution</h2>
            <p className="text-xl text-muted-foreground">
              Progressive growth through dedicated service and increasing responsibilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <Users className="h-8 w-8 text-primary" />
                  <Badge variant="outline">2022-2023</Badge>
                </div>
                <CardTitle className="font-heading text-xl">Volunteer</CardTitle>
                <div className="mt-4 aspect-video bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg flex items-center justify-center border-2 border-dashed border-blue-200 overflow-hidden">
                  <img
                    src="/yrc/volunteer-2022-23.jpg"
                    alt="Volunteer Activities 2022-23"
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Started as an active volunteer participating in blood donation drives, community service events, and
                  awareness campaigns. Demonstrated commitment to social service and community welfare.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <Droplets className="h-4 w-4 text-primary" />
                    <span>Blood donation drives</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Heart className="h-4 w-4 text-primary" />
                    <span>Community service events</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Shield className="h-4 w-4 text-primary" />
                    <span>Awareness campaigns</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                  <Badge variant="outline">2023-2024</Badge>
                </div>
                <CardTitle className="font-heading text-xl">Joint Secretary</CardTitle>
                <div className="mt-4 aspect-video bg-gradient-to-br from-red-50 to-red-100 rounded-lg flex items-center justify-center border-2 border-dashed border-red-200 overflow-hidden">
                  <img
                    src="/yrc/joint-secretary-2023-24.jpg"
                    alt="Joint Secretary 2023-24"
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Promoted to Joint Secretary, coordinating major events, managing member activities, and initiating
                  digital transformation projects to modernize organizational operations.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>Event coordination</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Users className="h-4 w-4 text-primary" />
                    <span>Member management</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Code className="h-4 w-4 text-primary" />
                    <span>Digital initiatives</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <Code className="h-8 w-8 text-primary" />
                  <Badge variant="secondary">2024-2025</Badge>
                </div>
                <CardTitle className="font-heading text-xl">Technical Head</CardTitle>
                <div className="mt-4 aspect-video bg-gradient-to-br from-green-50 to-green-100 rounded-lg flex items-center justify-center border-2 border-dashed border-green-200 overflow-hidden">
                  <img
                    src="/yrc/technical-head-2024-25.jpg"
                    alt="Technical Head 2024-25"
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Currently serving as Technical Head, leading all technical initiatives, software development projects,
                  and organizational digitization efforts to enhance operational efficiency.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <Smartphone className="h-4 w-4 text-primary" />
                    <span>Mobile app development</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Code className="h-4 w-4 text-primary" />
                    <span>Website development</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Heart className="h-4 w-4 text-primary" />
                    <span>LifeConnect platform</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Projects */}
      <section className="section-padding bg-muted/30">
        <div className="container-max">
          <div className="mb-12">
            <h2 className="font-heading text-3xl mb-4">Technical Contributions</h2>
            <p className="text-xl text-muted-foreground">
              Software solutions developed to modernize Youth Red Cross operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
              <CardHeader>
                <CardTitle className="font-heading text-xl">LifeConnect Platform</CardTitle>
                <p className="text-muted-foreground">Autonomous blood donor connection system</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Developed a comprehensive platform connecting blood donors with recipients in real-time, streamlining
                  emergency blood request handling and significantly improving response times during critical
                  situations.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Real-time Matching</Badge>
                  <Badge variant="outline">Emergency Response</Badge>
                  <Badge variant="outline">Healthcare Tech</Badge>
                </div>
                <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-700">
                  <Link href="/projects/life-connect">
                    View Project <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
              <CardHeader>
                <CardTitle className="font-heading text-xl">CrossLink Mobile App</CardTitle>
                <p className="text-muted-foreground">YRC operations management application</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Built a mobile application automating Youth Red Cross operations including event scheduling, member
                  tracking, attendance management, and communication, improving organizational efficiency by 60%.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Mobile Development</Badge>
                  <Badge variant="outline">Event Management</Badge>
                  <Badge variant="outline">Automation</Badge>
                </div>
                <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-700">
                  <Link href="/projects/crosslink">
                    View Project <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
              <CardHeader>
                <CardTitle className="font-heading text-xl">Official YRC Website</CardTitle>
                <p className="text-muted-foreground">Centralized information and activities hub</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Developed and maintained the official Youth Red Cross website for centralizing information,
                  activities, announcements, and member resources, serving as the primary digital presence.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Web Development</Badge>
                  <Badge variant="outline">Content Management</Badge>
                  <Badge variant="outline">Information Hub</Badge>
                </div>
                <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-700">
                  <Link href="/projects/yrc-website">
                    View Project <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
      <CardHeader>
        <CardTitle className="font-heading text-xl">Technical Teaching & Mentorship</CardTitle>
        <p className="text-muted-foreground">Empowering peers through knowledge sharing</p>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          Actively contributed to the technical growth of college community by conducting workshops and 
          mentoring sessions on modern technologies including MERN stack, Flask development, REST APIs, 
          AI/ML fundamentals, and emerging tech trends.
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge variant="outline">Workshop Facilitation</Badge>
          <Badge variant="outline">Peer Mentoring</Badge>
          <Badge variant="outline">Technical Training</Badge>
        </div>
        <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-700">
          <a href="/projects">
            View Contributions <ArrowRight className="ml-1 h-3 w-3" />
          </a>
        </Button>
      </CardContent>
    </Card>
          </div>
        </div>
      </section>

      {/* Community Activities */}
      <section className="section-padding">
        <div className="container-max">
          <div className="mb-12">
            <h2 className="font-heading text-3xl mb-4">Community Service Activities</h2>
            <p className="text-xl text-muted-foreground">
              Active participation in social welfare and community development initiatives
            </p>
          </div>

          <div className="mb-8">
            <h3 className="font-heading text-2xl mb-6">Activity Gallery</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {/* Blood Donation Activities */}
              <div className="aspect-square bg-gradient-to-br from-red-50 to-red-100 rounded-lg flex items-center justify-center border-2 border-dashed border-red-200 hover:shadow-lg transition-all duration-300 overflow-hidden">
                <img
                  src="/yrc/blood-donation.jpg"
                  alt="Blood Donation Drive"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Environmental Activities */}
              <div className="aspect-square bg-gradient-to-br from-green-50 to-green-100 rounded-lg flex items-center justify-center border-2 border-dashed border-green-200 hover:shadow-lg transition-all duration-300 overflow-hidden">
                <img
                  src="/yrc/environmental-campaign.jpg"
                  alt="Environmental Campaign"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Safety Awareness */}
              <div className="aspect-square bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg flex items-center justify-center border-2 border-dashed border-blue-200 hover:shadow-lg transition-all duration-300 overflow-hidden">
                <img
                  src="/yrc/safety-awareness.jpg"
                  alt="Safety Awareness"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Community Outreach */}
              <div className="aspect-square bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg flex items-center justify-center border-2 border-dashed border-purple-200 hover:shadow-lg transition-all duration-300 overflow-hidden">
                <img
                  src="/yrc/community-outreach.jpg"
                  alt="Community Outreach"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <Droplets className="h-6 w-6 text-primary" />
                  <h3 className="font-heading text-lg">Blood Donation Drives</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Lions Blood Center donations</li>
                  <li>• 2023 Blood Donation Drive at VEC</li>
                  <li>• LifeConnect Blood Donation Camps (2024, 2025)</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <TreePine className="h-6 w-6 text-primary" />
                  <h3 className="font-heading text-lg">Environmental Initiatives</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Puzhal Lake Cleaning (SWOTT)</li>
                  <li>• Walk For Plastic campaigns (2023, 2024)</li>
                  <li>• Campus Plantation Event participation</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <Shield className="h-6 w-6 text-primary" />
                  <h3 className="font-heading text-lg">Safety & Awareness</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Helmet Awareness Campaign (SWOTT at Redhills)</li>
                  <li>• Fire Safety Awareness initiatives</li>
                  <li>• Cancer Caution Marathon participation</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <Heart className="h-6 w-6 text-primary" />
                  <h3 className="font-heading text-lg">Animal Welfare</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• VPaws animal welfare drive</li>
                  <li>• Community pet care initiatives</li>
                  <li>• Animal awareness campaigns</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <Code className="h-6 w-6 text-primary" />
                  <h3 className="font-heading text-lg">Technical Workshops</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• AI Tools Workshop attendance</li>
                  <li>• Technical skill development sessions</li>
                  <li>• Digital literacy programs</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="section-padding bg-muted/30">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="font-heading mb-4">Leadership Impact</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Quantifying the reach and effectiveness of Youth Red Cross initiatives
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-heading font-bold text-primary mb-2">6</div>
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
              <div className="text-sm text-muted-foreground">Years of Dedicated Service</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
