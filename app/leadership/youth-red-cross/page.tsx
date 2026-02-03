"use client"

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
  Award,
  Target,
  Lightbulb,
  Github,
} from "lucide-react"
import { FadeIn, SlideIn, StaggerContainer, StaggerItem } from "@/components/animations"

export default function YouthRedCrossPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,var(--rose)/0.05,transparent_50%)]" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-rose/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald/5 rounded-full blur-3xl" />

        <div className="container-max relative">
          <FadeIn>
            <Button variant="ghost" asChild className="mb-6 hover:bg-muted">
              <Link href="/leadership">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Leadership
              </Link>
            </Button>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <FadeIn delay={0.1}>
                <Badge variant="secondary" className="badge-rose border mb-4">
                  Leadership Role
                </Badge>
              </FadeIn>
              <FadeIn delay={0.2}>
                <h1 className="font-heading mb-2">Youth Red Cross Technical Head</h1>
                <p className="text-lg text-muted-foreground mb-4">
                  Digital Transformation & Humanitarian Service
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Leading digital transformation and technical innovation at Velammal Engineering College's Youth Red
                  Cross unit. From volunteer to Technical Head over three years of dedicated service, I've combined
                  technical expertise with humanitarian commitment to modernize YRC operations and amplify community impact.
                </p>
              </FadeIn>
              <FadeIn delay={0.4}>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>2022 - 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart className="h-4 w-4" />
                    <span>3 Years of Service</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button className="bg-rose hover:bg-rose/90 text-white" asChild>
                    <Link href="/projects">
                      <Code className="mr-2 h-4 w-4" />
                      View Projects
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="#community-activities">
                      <Heart className="mr-2 h-4 w-4" />
                      Community Impact
                    </Link>
                  </Button>
                </div>
              </FadeIn>
            </div>
            <SlideIn direction="right" delay={0.3}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-rose/10 to-emerald/10 rounded-2xl blur-xl" />
                <div className="aspect-video bg-background rounded-xl flex items-center justify-center overflow-hidden border border-border relative">
                  <img
                    src="/yrc/yrc-leadership.jpg"
                    alt="Youth Red Cross Leadership Activities"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-8 bg-gradient-to-r from-rose/10 to-emerald/10 border-y border-rose/20">
        <div className="container-max">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8" staggerDelay={0.1}>
            {[
              { value: "6", label: "Software Solutions", color: "rose" },
              { value: "15+", label: "Events Organized", color: "emerald" },
              { value: "500+", label: "Students Impacted", color: "violet" },
              { value: "3", label: "Years of Service", color: "amber" },
            ].map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="text-center">
                  <p className={`text-4xl font-bold text-${stat.color} mb-1`}>{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Role Evolution */}
      <section className="section-padding" id="leadership-evolution">
        <div className="container-max">
          <FadeIn>
            <h2 className="font-heading text-3xl mb-2">Leadership Evolution</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Progressive growth through dedicated service and increasing responsibilities
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={0.15}>
            {/* Volunteer */}
            <StaggerItem>
              <Card className="card-accent-primary h-full">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="badge-primary border">2022-2023</Badge>
                  </div>
                  <CardTitle className="font-heading text-xl">Volunteer</CardTitle>
                </CardHeader>
                <div className="aspect-video bg-muted rounded-lg mx-6 mb-4 overflow-hidden">
                  <img
                    src="/yrc/volunteer-2022-23.jpg"
                    alt="Volunteer Activities 2022-23"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                    Started as an active volunteer participating in blood donation drives, community service events, and
                    awareness campaigns. Demonstrated commitment to social service and community welfare.
                  </p>
                  <div className="space-y-2">
                    {[
                      { icon: Droplets, text: "Blood donation drives" },
                      { icon: Heart, text: "Community service events" },
                      { icon: Shield, text: "Awareness campaigns" },
                    ].map((item) => (
                      <div key={item.text} className="flex items-center space-x-2 text-sm">
                        <item.icon className="h-4 w-4 text-primary" />
                        <span>{item.text}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>

            {/* Joint Secretary */}
            <StaggerItem>
              <Card className="card-accent-rose h-full">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-12 h-12 bg-rose/10 rounded-full flex items-center justify-center">
                      <Heart className="h-6 w-6 text-rose" />
                    </div>
                    <Badge variant="secondary" className="badge-rose border">2023-2024</Badge>
                  </div>
                  <CardTitle className="font-heading text-xl">Joint Secretary</CardTitle>
                </CardHeader>
                <div className="aspect-video bg-muted rounded-lg mx-6 mb-4 overflow-hidden">
                  <img
                    src="/yrc/joint-secretary-2023-24.jpg"
                    alt="Joint Secretary 2023-24"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                    Promoted to Joint Secretary, coordinating major events, managing member activities, and initiating
                    digital transformation projects to modernize organizational operations.
                  </p>
                  <div className="space-y-2">
                    {[
                      { icon: Calendar, text: "Event coordination" },
                      { icon: Users, text: "Member management" },
                      { icon: Code, text: "Digital initiatives" },
                    ].map((item) => (
                      <div key={item.text} className="flex items-center space-x-2 text-sm">
                        <item.icon className="h-4 w-4 text-rose" />
                        <span>{item.text}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>

            {/* Technical Head */}
            <StaggerItem>
              <Card className="card-accent-emerald h-full">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-12 h-12 bg-emerald/10 rounded-full flex items-center justify-center">
                      <Code className="h-6 w-6 text-emerald" />
                    </div>
                    <Badge variant="secondary" className="badge-emerald border">2024-2025</Badge>
                  </div>
                  <CardTitle className="font-heading text-xl">Technical Head</CardTitle>
                </CardHeader>
                <div className="aspect-video bg-muted rounded-lg mx-6 mb-4 overflow-hidden">
                  <img
                    src="/yrc/technical-head-2024-25.jpg"
                    alt="Technical Head 2024-25"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                    Currently serving as Technical Head, leading all technical initiatives, software development projects,
                    and organizational digitization efforts to enhance operational efficiency.
                  </p>
                  <div className="space-y-2">
                    {[
                      { icon: Smartphone, text: "Mobile app development" },
                      { icon: Code, text: "Website development" },
                      { icon: Heart, text: "LifeConnect platform" },
                    ].map((item) => (
                      <div key={item.text} className="flex items-center space-x-2 text-sm">
                        <item.icon className="h-4 w-4 text-emerald" />
                        <span>{item.text}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Technical Projects */}
      <section className="section-padding bg-muted/30">
        <div className="container-max">
          <FadeIn>
            <h2 className="font-heading text-3xl mb-2">Technical Contributions</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Software solutions developed to modernize Youth Red Cross operations
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6" staggerDelay={0.1}>
            {[
              {
                title: "LifeConnect Platform",
                description: "Developed a comprehensive platform connecting blood donors with recipients in real-time, streamlining emergency blood request handling and significantly improving response times.",
                badges: ["Real-time Matching", "Emergency Response", "Healthcare Tech"],
                link: "/projects/life-connect",
                color: "rose",
              },
              {
                title: "CrossLink Mobile App",
                description: "Built a mobile application automating Youth Red Cross operations including event scheduling, member tracking, attendance management, and communication, improving efficiency by 60%.",
                badges: ["Mobile Development", "Event Management", "Automation"],
                link: "/projects/crosslink",
                color: "emerald",
              },
              {
                title: "Official YRC Website",
                description: "Developed and maintained the official Youth Red Cross website for centralizing information, activities, announcements, and member resources, serving as the primary digital presence.",
                badges: ["Web Development", "Content Management", "Information Hub"],
                link: "/projects/yrc-website",
                color: "violet",
              },
              {
                title: "Technical Teaching & Mentorship",
                description: "Actively contributed to technical growth by conducting workshops on MERN stack, Flask development, REST APIs, AI/ML fundamentals, and emerging tech trends.",
                badges: ["Workshop Facilitation", "Peer Mentoring", "Technical Training"],
                link: "/projects",
                color: "amber",
              },
            ].map((project) => (
              <StaggerItem key={project.title}>
                <Card className={`card-accent-${project.color} hover:shadow-md transition-all h-full`}>
                  <CardHeader>
                    <CardTitle className="font-heading text-xl">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 leading-relaxed text-sm">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.badges.map((badge) => (
                        <Badge key={badge} variant="outline" className="text-xs">{badge}</Badge>
                      ))}
                    </div>
                    <Button asChild size="sm" className={`bg-${project.color} hover:bg-${project.color}/90 text-white`}>
                      <Link href={project.link}>
                        View Project <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Community Activities */}
      <section className="section-padding" id="community-activities">
        <div className="container-max">
          <FadeIn>
            <h2 className="font-heading text-3xl mb-2">Community Service Activities</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Active participation in social welfare and community development initiatives
            </p>
          </FadeIn>

          {/* Activity Gallery */}
          <FadeIn delay={0.1}>
            <div className="mb-8">
              <h3 className="font-heading text-xl mb-4">Activity Gallery</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {[
                  { src: "/yrc/blood-donation.jpg", alt: "Blood Donation Drive", color: "rose" },
                  { src: "/yrc/environmental-campaign.jpg", alt: "Environmental Campaign", color: "emerald" },
                  { src: "/yrc/safety-awareness.jpg", alt: "Safety Awareness", color: "primary" },
                  { src: "/yrc/community-outreach.jpg", alt: "Community Outreach", color: "violet" },
                  { src: "/yrc/workshop-activities.jpg", alt: "Workshop Activities", color: "amber" },
                  { src: "/yrc/animal-welfare.jpg", alt: "Animal Welfare Drive", color: "rose" },
                  { src: "/yrc/plantation-event.jpg", alt: "Plantation Event", color: "emerald" },
                  { src: "/yrc/team-building.jpg", alt: "Team Building Activities", color: "teal" },
                  { src: "/yrc/event-coordination.jpg", alt: "Event Coordination", color: "violet" },
                  { src: "/yrc/technical-training.jpg", alt: "Technical Training Session", color: "primary" },
                ].map((item) => (
                  <div
                    key={item.alt}
                    className="aspect-square bg-muted rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Activity Categories */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4" staggerDelay={0.1}>
            {[
              {
                icon: Droplets,
                title: "Blood Donation",
                items: ["Lions Blood Center donations", "2023 Blood Donation Drive at VEC", "LifeConnect Blood Donation Camps (2024, 2025)"],
                color: "rose",
              },
              {
                icon: TreePine,
                title: "Environmental",
                items: ["Puzhal Lake Cleaning (SWOTT)", "Walk For Plastic campaigns (2023, 2024)", "Campus Plantation Event"],
                color: "emerald",
              },
              {
                icon: Shield,
                title: "Safety & Awareness",
                items: ["Helmet Awareness Campaign", "Fire Safety Awareness", "Cancer Caution Marathon"],
                color: "amber",
              },
              {
                icon: Heart,
                title: "Animal Welfare",
                items: ["VPaws animal welfare drive", "Community pet care initiatives", "Animal awareness campaigns"],
                color: "violet",
              },
              {
                icon: Code,
                title: "Technical Workshops",
                items: ["AI Tools Workshop", "Technical skill sessions", "Digital literacy programs"],
                color: "primary",
              },
            ].map((category) => (
              <StaggerItem key={category.title}>
                <Card className={`card-accent-${category.color} h-full`}>
                  <CardContent className="pt-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <category.icon className={`h-5 w-5 text-${category.color}`} />
                      <h3 className="font-heading text-sm">{category.title}</h3>
                    </div>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {category.items.map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Community & Open Source */}
      <section className="section-padding bg-muted/30">
        <div className="container-max">
          <FadeIn>
            <div className="text-center mb-8">
              <h2 className="font-heading text-3xl mb-2">Community & Open Source</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Contributing to open source communities and fostering collaborative development
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto" staggerDelay={0.1}>
            <StaggerItem>
              <Card className="card-accent-primary hover:shadow-md transition-all h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="p-2 bg-foreground text-background rounded-lg">
                      <Github className="h-6 w-6" />
                    </div>
                    GitHub Community
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary" className="badge-emerald border mb-3">Legacy Member</Badge>
                  <p className="text-muted-foreground text-sm mb-4">
                    Active contributor to the GitHub community, sharing open-source projects and collaborating
                    with developers worldwide on innovative humanitarian tech solutions.
                  </p>
                  <Button variant="outline" asChild className="w-full">
                    <Link href="https://github.com/Youth-Red-Cross-VEC" target="_blank">
                      View GitHub Profile
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="card-accent-amber hover:shadow-md transition-all h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-lg">
                      <Users className="h-6 w-6" />
                    </div>
                    Hugging Face Community
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary" className="badge-amber border mb-3">AI/ML Community</Badge>
                  <p className="text-muted-foreground text-sm mb-4">
                    Member of the Hugging Face community, contributing to AI/ML projects and sharing
                    models and datasets for the advancement of artificial intelligence.
                  </p>
                  <Button variant="outline" asChild className="w-full">
                    <Link href="https://huggingface.co/YouthRedCross-VEC" target="_blank">
                      View HF Profile
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className="section-padding">
        <div className="container-max">
          <FadeIn>
            <h2 className="font-heading text-3xl mb-8">Leadership Philosophy</h2>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.1}>
            {[
              {
                icon: Target,
                title: "Service First",
                description: "Combining technical skills with humanitarian values to create solutions that genuinely help communities and save lives",
                color: "rose",
              },
              {
                icon: Lightbulb,
                title: "Innovation for Impact",
                description: "Leveraging modern technology to amplify the reach and efficiency of humanitarian initiatives and social service",
                color: "emerald",
              },
              {
                icon: Award,
                title: "Continuous Growth",
                description: "Evolving from volunteer to leader while mentoring others and building sustainable systems for future generations",
                color: "violet",
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <Card className={`card-accent-${item.color} hover:shadow-md transition-shadow h-full`}>
                  <CardContent className="pt-6">
                    <item.icon className={`h-8 w-8 text-${item.color} mb-4`} />
                    <h3 className="font-heading text-lg mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <Footer />
    </div>
  )
}
