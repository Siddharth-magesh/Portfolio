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
  Heart,
  Phone,
  Mail,
  Activity,
  Bell,
  Shield,
  Database,
  Award,
  Target,
  Sparkles,
} from "lucide-react"
import { FadeIn, SlideIn, StaggerContainer, StaggerItem } from "@/components/animations"

export default function LifeConnectPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,var(--rose)/0.05,transparent_50%)]" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-rose/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

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
                <Badge variant="secondary" className="badge-rose border mb-4">
                  Youth Red Cross Initiative
                </Badge>
              </FadeIn>
              <FadeIn delay={0.2}>
                <h1 className="font-heading mb-2">Life Connect</h1>
                <p className="text-lg text-muted-foreground mb-4">
                  Digital Blood Donation Platform for Community Healthcare
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  A comprehensive digital platform developed by Youth Red Cross at Velammal Engineering College
                  to revolutionize blood donation services. Life Connect bridges the gap between blood donors
                  and recipients through intelligent matching algorithms, real-time notifications, and seamless
                  hospital coordination—potentially saving countless lives through faster response times.
                </p>
              </FadeIn>
              <FadeIn delay={0.4}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-rose hover:bg-rose/90 text-white" asChild>
                    <Link
                      href="https://github.com/Siddharth-magesh/YouthRedCross-BloodRequest"
                      target="_blank"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      View Source Code
                    </Link>
                  </Button>
                </div>
              </FadeIn>
            </div>
            <SlideIn direction="right" delay={0.3}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-rose/10 to-primary/10 rounded-2xl blur-xl" />
                <div className="bg-background rounded-xl border border-border p-6 relative">
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-20 h-20 bg-rose/10 rounded-full flex items-center justify-center">
                      <Heart className="h-10 w-10 text-rose" />
                    </div>
                  </div>
                  <div className="text-center space-y-2">
                    <p className="text-4xl font-bold text-rose">300+</p>
                    <p className="text-muted-foreground">Active Donors Registered</p>
                  </div>
                  <div className="mt-6 grid grid-cols-2 gap-4 text-center">
                    <div className="p-3 bg-muted/50 rounded-lg">
                      <p className="text-2xl font-bold text-foreground">8</p>
                      <p className="text-xs text-muted-foreground">Blood Groups</p>
                    </div>
                    <div className="p-3 bg-muted/50 rounded-lg">
                      <p className="text-2xl font-bold text-foreground">24/7</p>
                      <p className="text-xs text-muted-foreground">Availability</p>
                    </div>
                  </div>
                </div>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Achievement Banner */}
      <section className="py-6 bg-gradient-to-r from-rose/10 to-emerald/10 border-y border-rose/20">
        <div className="container-max">
          <FadeIn>
            <div className="flex items-center justify-center gap-4 text-center">
              <Award className="h-8 w-8 text-rose" />
              <div>
                <h3 className="font-heading text-xl text-foreground mb-1">Community Impact Achievement</h3>
                <p className="text-muted-foreground">
                  Successfully registered 300+ active blood donors and conducted awareness campaigns during college symposium
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Project Details Grid */}
      <section className="section-padding">
        <div className="container-max">
          <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12" staggerDelay={0.1}>
            <StaggerItem>
              <Card className="card-accent-rose h-full">
                <CardHeader>
                  <Calendar className="h-6 w-6 text-rose mb-2" />
                  <CardTitle className="text-lg">Project Timeline</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="font-medium text-foreground">2023 - 2024</p>
                    <p className="text-sm text-muted-foreground">
                      Development and deployment of the Life Connect platform
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Symposium Launch</p>
                    <p className="text-sm text-muted-foreground">
                      Successful booth setup and donor registration drive
                    </p>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="card-accent-emerald h-full">
                <CardHeader>
                  <Users className="h-6 w-6 text-emerald mb-2" />
                  <CardTitle className="text-lg">Development Team</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {["Siddharth Magesh", "Vishva", "Andal", "Dakshan", "Sujhan", "Tarakeshwaran"].map((member, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-emerald rounded-full" />
                      <p className="text-sm text-muted-foreground">{member}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="card-accent-violet h-full">
                <CardHeader>
                  <Target className="h-6 w-6 text-violet mb-2" />
                  <CardTitle className="text-lg">Project Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary" className="badge-success border mb-3">
                    Active & Growing
                  </Badge>
                  <p className="text-sm text-muted-foreground">
                    Established sustainable blood donation network within college community with
                    partnerships with local hospitals and medical facilities. Continuing to expand
                    donor base and improve response times.
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
                  Life Connect addresses the critical challenge of connecting blood donors with recipients during
                  medical emergencies. The platform implements an intelligent donor-matching system that considers
                  blood type compatibility, geographic proximity, and donor availability to minimize response times.
                  With admin oversight ensuring safety and verification, the system maintains a reliable network of
                  verified donors while providing hospitals with a streamlined coordination interface. The platform's
                  impact extends beyond technology—it has fostered a culture of voluntary blood donation within the
                  college community.
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
            <h2 className="font-heading text-3xl mb-8">Platform Features</h2>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12" staggerDelay={0.1}>
            {[
              {
                icon: Activity,
                title: "Blood Request System",
                description: "Streamlined request submission with urgency levels and automatic donor notification based on blood type matching",
                color: "rose",
              },
              {
                icon: Bell,
                title: "Real-time Notifications",
                description: "Instant SMS and email alerts to compatible donors when emergency requests are posted",
                color: "amber",
              },
              {
                icon: Users,
                title: "Donor Management",
                description: "Comprehensive donor profiles with health records, donation history, and availability scheduling",
                color: "emerald",
              },
              {
                icon: Shield,
                title: "Admin Verification",
                description: "Multi-level approval workflow ensuring donor verification and request validation for safety",
                color: "violet",
              },
              {
                icon: Database,
                title: "Analytics Dashboard",
                description: "Real-time statistics on donations, active requests, and community impact metrics",
                color: "teal",
              },
              {
                icon: Sparkles,
                title: "Hospital Coordination",
                description: "Direct integration with hospital blood banks for seamless donation scheduling and tracking",
                color: "rose",
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

          <FadeIn delay={0.3}>
            <div className="mb-8">
              <h3 className="font-heading text-xl mb-4">Technology Stack</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "HTML5",
                  "CSS3",
                  "JavaScript",
                  "Node.js",
                  "Python",
                  "MongoDB",
                  "Email API",
                  "SMS Gateway",
                  "Responsive Design",
                  "RESTful API",
                ].map((tech) => (
                  <Badge key={tech} variant="outline" className="hover:bg-muted transition-colors">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Community Engagement */}
      <section className="section-padding">
        <div className="container-max">
          <FadeIn>
            <h2 className="font-heading text-3xl mb-8">Community Engagement</h2>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <FadeIn delay={0.1}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="font-heading text-xl">Awareness Activities</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                    <img
                      src="/yrc-awareness-booth.jpg"
                      alt="YRC awareness booth during college symposium"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Awareness booth setup during college symposium demonstrating the Life Connect platform
                    and educating students about the importance of blood donation.
                  </p>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="font-heading text-xl">Donor Registration Drive</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                    <img
                      src="/community-engagement-yrc.jpg"
                      alt="Community engagement and donor registration"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Community engagement activities and donor registration drive conducted by the
                    Youth Red Cross team, resulting in 300+ active donor registrations.
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
          </div>

          <FadeIn delay={0.3}>
            <div className="mb-6 flex justify-center">
              <img
                src="/development-team-photo.jpg"
                alt="Life Connect Development Team"
                className="rounded-lg shadow-md max-w-md w-full object-cover"
              />
            </div>
            <p className="text-center text-sm text-muted-foreground">Life Connect Development Team</p>
          </FadeIn>
        </div>
      </section>

      {/* Contact & Future */}
      <section className="section-padding bg-muted/30">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-8">
            <FadeIn>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    For blood donation inquiries or to register as a donor, contact the Life Connect team:
                  </p>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                      <Phone className="h-5 w-5 text-rose" />
                      <span className="text-foreground">9150450401</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                      <Mail className="h-5 w-5 text-rose" />
                      <span className="text-foreground">yrclifeconnect@gmail.com</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={0.1}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl">Future Roadmap</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { title: "Mobile Application", description: "Native apps for iOS and Android with push notifications" },
                      { title: "Government Integration", description: "Connect with national blood bank databases" },
                      { title: "AI-Powered Matching", description: "Intelligent donor-recipient optimization algorithm" },
                      { title: "Emergency Alerts", description: "Critical blood requirement notification system" },
                      { title: "Multi-Institution Expansion", description: "Scale to other colleges and communities" },
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-rose rounded-full mt-2 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-foreground text-sm">{item.title}</p>
                          <p className="text-xs text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
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
