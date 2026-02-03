"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  ArrowLeft,
  ExternalLink,
  Users,
  Target,
  TrendingUp,
  Calendar,
  Building2,
  Laptop,
  Brain,
  Database,
  Globe,
  CheckCircle,
  Rocket,
  IndianRupee,
  Clock,
  Phone,
  Mail,
  FileText,
  MessageSquare,
  Search,
  BarChart3,
  Sparkles,
  ShoppingCart,
  Handshake,
  Zap,
  Shield,
} from "lucide-react"
import { FadeIn, SlideIn, StaggerContainer, StaggerItem } from "@/components/animations"

export default function GradGearExperience() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber/10 via-background to-primary/10" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/15 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <Button variant="ghost" asChild className="mb-6 hover:bg-muted">
              <Link href="/experience">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Experience
              </Link>
            </Button>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <SlideIn direction="up">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <Badge className="badge-amber">Co-Founder</Badge>
                  <Badge className="badge-emerald">Active Startup</Badge>
                  <Badge variant="outline">2024 - Present</Badge>
                </div>
              </SlideIn>

              <SlideIn direction="up" delay={0.1}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
                  GradGear
                </h1>
                <p className="text-xl text-amber font-medium mb-4">
                  AI-Powered Laptop Consultancy & Recommendation Service
                </p>
              </SlideIn>

              <SlideIn direction="up" delay={0.2}>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Co-founded an AI-driven consultancy startup that leverages machine learning algorithms and comprehensive
                  market data to deliver personalized, unbiased laptop recommendations. GradGear addresses the overwhelming
                  complexity of laptop selection by providing data-driven insights tailored to individual user requirements,
                  budget constraints, and use-case scenarios.
                </p>
              </SlideIn>

              <SlideIn direction="up" delay={0.3}>
                <div className="flex flex-wrap gap-4">
                  <Button asChild className="bg-amber hover:bg-amber/90 text-white">
                    <Link href="https://gardgear.github.io/GradGear/" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Visit Website
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="mailto:gradgearofficial@gmail.com">
                      <Mail className="mr-2 h-4 w-4" />
                      Contact Us
                    </Link>
                  </Button>
                </div>
              </SlideIn>
            </div>

            <SlideIn direction="right" delay={0.3}>
              <Card className="bg-gradient-to-br from-amber/10 to-background border-amber/20">
                <CardHeader>
                  <CardTitle className="font-heading text-lg flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-amber" />
                    Startup Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-4 w-4 text-amber" />
                    <span className="text-sm">Founded: 2024</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-4 w-4 text-amber" />
                    <span className="text-sm">4 Co-Founders</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <IndianRupee className="h-4 w-4 text-amber" />
                    <span className="text-sm">Service: ₹59/consultation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-4 w-4 text-amber" />
                    <span className="text-sm">Hours: 6 PM - 9 PM (Mon-Fri)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-4 w-4 text-amber" />
                    <span className="text-sm">+91 99404 80312</span>
                  </div>
                  <div className="pt-2">
                    <Badge className="badge-emerald">Actively Serving Customers</Badge>
                  </div>
                </CardContent>
              </Card>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-8 bg-gradient-to-r from-amber/10 to-primary/10 border-y border-amber/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8" staggerDelay={0.1}>
            {[
              { value: "₹59", label: "Per Consultation", color: "amber" },
              { value: "1-2", label: "Days Response Time", color: "emerald" },
              { value: "500+", label: "Laptops in Database", color: "violet" },
              { value: "4", label: "Expert Co-Founders", color: "primary" },
            ].map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="text-center">
                  <p className={`text-3xl md:text-4xl font-bold text-${stat.color} mb-1`}>{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <Badge className="badge-amber mb-4">Our Process</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">How GradGear Works</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A simple 4-step process to find your perfect laptop match
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
            {[
              {
                step: "1",
                title: "Submit Your Requirements",
                desc: "Complete a brief form detailing your needs, preferences, and budget for a ₹59 fee",
                icon: FileText,
                color: "amber"
              },
              {
                step: "2",
                title: "Personal Consultation",
                desc: "Within 1-2 working days, our expert contacts you between 6-9 PM for an in-depth conversation",
                icon: MessageSquare,
                color: "violet"
              },
              {
                step: "3",
                title: "Expert Analysis",
                desc: "Our team analyzes thousands of laptop options against your specific requirements using AI",
                icon: Search,
                color: "emerald"
              },
              {
                step: "4",
                title: "Detailed Report",
                desc: "Receive a curated list of matching laptops with local deals, pricing, and recommendations",
                icon: BarChart3,
                color: "primary"
              }
            ].map((item) => (
              <StaggerItem key={item.step}>
                <Card className={`card-accent-${item.color} h-full hover:shadow-lg transition-shadow`}>
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 rounded-full bg-${item.color}/10 flex items-center justify-center mb-4`}>
                      <span className={`text-xl font-bold text-${item.color}`}>{item.step}</span>
                    </div>
                    <div className={`w-10 h-10 rounded-lg bg-${item.color}/10 flex items-center justify-center mb-3`}>
                      <item.icon className={`h-5 w-5 text-${item.color}`} />
                    </div>
                    <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <Card className="card-accent-amber bg-gradient-to-br from-amber/5 to-background">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Target className="h-6 w-6 text-amber" />
                  Mission & Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <blockquote className="text-lg text-muted-foreground leading-relaxed border-l-4 border-amber pl-6 italic">
                  "At GradGear, we are more than just a laptop recommendation service. We are your personal guide to finding
                  the perfect laptop that fits your unique needs. Our mission is to simplify the process of buying a laptop
                  by leveraging our extensive database and expert knowledge to provide customized recommendations that you
                  can trust. We believe technology purchasing should be transparent, unbiased, and tailored to individual needs."
                </blockquote>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <Badge className="badge-violet mb-4">Why Choose Us</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Value Proposition</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                What makes GradGear different from other recommendation services
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
            {[
              {
                icon: Users,
                title: "Personalized Guidance",
                desc: "We analyze your preferences, needs, and budget to match you with the best laptop options available. Our dynamic database covers gamers, students, content creators, and professionals.",
                color: "teal"
              },
              {
                icon: Handshake,
                title: "Retailer Partnerships",
                desc: "Strong connections with local and branded retailers enable access to competitive pricing, exclusive deals, and negotiated prices you won't find elsewhere.",
                color: "violet"
              },
              {
                icon: Sparkles,
                title: "Expert Knowledge",
                desc: "Our team stays current with the latest laptop technology trends and offers personalized advice across different device categories, from gaming laptops to workstations.",
                color: "emerald"
              },
              {
                icon: Shield,
                title: "Unbiased Analysis",
                desc: "Completely unbiased recommendations driven by data and user requirements rather than brand partnerships or affiliate commissions.",
                color: "rose"
              },
              {
                icon: Zap,
                title: "Time & Money Savings",
                desc: "Stop wasting hours researching laptops. Our service streamlines decision-making and helps you avoid purchase regret through accurate matching.",
                color: "amber"
              },
              {
                icon: Target,
                title: "Domain-Specific Solutions",
                desc: "Specialized recommendation engines for gamers, students, content creators, and professionals with optimized feature prioritization for each use case.",
                color: "primary"
              }
            ].map((item) => (
              <StaggerItem key={item.title}>
                <Card className={`card-accent-${item.color} h-full hover:shadow-lg transition-shadow`}>
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-3">
                      <div className={`w-12 h-12 rounded-xl bg-${item.color}/10 flex items-center justify-center`}>
                        <item.icon className={`h-6 w-6 text-${item.color}`} />
                      </div>
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Technical Architecture */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <Badge className="badge-primary mb-4">Technology</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Technical Architecture</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The AI-powered systems that power our recommendations
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <FadeIn delay={0.1}>
              <Card className="h-full card-accent-amber">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-amber/10 flex items-center justify-center">
                      <Brain className="h-5 w-5 text-amber" />
                    </div>
                    <span>AI Recommendation Engine</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-medium text-sm mb-2 flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-amber" />
                      Custom ML Models
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Proprietary machine learning models trained on extensive laptop specification datasets
                      for accurate requirement-to-product matching.
                    </p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-medium text-sm mb-2 flex items-center gap-2">
                      <MessageSquare className="h-4 w-4 text-amber" />
                      Natural Language Processing
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      NLP capabilities enabling users to describe requirements
                      in conversational terms with intelligent interpretation.
                    </p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-medium text-sm mb-2 flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-amber" />
                      Price Forecasting
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      ML-based price prediction models to identify optimal
                      purchase timing and deal detection.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Card className="h-full card-accent-teal">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center">
                      <Database className="h-5 w-5 text-teal" />
                    </div>
                    <span>Data Infrastructure</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-medium text-sm mb-2 flex items-center gap-2">
                      <Laptop className="h-4 w-4 text-teal" />
                      Dynamic Database
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Comprehensive laptop specification database with regular updates covering 500+ models
                      across all major brands and price segments.
                    </p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-medium text-sm mb-2 flex items-center gap-2">
                      <ShoppingCart className="h-4 w-4 text-teal" />
                      Price Comparison Engine
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Cross-platform price tracking with historical data analysis
                      across multiple e-commerce platforms.
                    </p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-medium text-sm mb-2 flex items-center gap-2">
                      <BarChart3 className="h-4 w-4 text-teal" />
                      Performance Analytics
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Benchmark data integration enabling performance-per-rupee calculations and
                      value-for-money scoring.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          </div>

          <FadeIn delay={0.3}>
            <div className="mb-8">
              <h3 className="font-heading text-xl mb-4 text-center">Technology Stack</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {[
                  "Python",
                  "Machine Learning",
                  "Web Scraping",
                  "BeautifulSoup",
                  "Selenium",
                  "Pandas",
                  "NumPy",
                  "Scikit-learn",
                  "Database Design",
                  "API Development",
                  "React",
                  "NLP",
                  "Data Aggregation",
                  "Market Analysis",
                  "Sentiment Analysis",
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

      {/* Target Audiences */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <Badge className="badge-emerald mb-4">Who We Serve</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Target Audiences</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Specialized recommendations for every type of user
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
            {[
              { title: "Students", desc: "Budget-friendly options with good battery life and portability for academic work", icon: "📚" },
              { title: "Gamers", desc: "High-performance laptops with dedicated GPUs, high refresh displays, and cooling systems", icon: "🎮" },
              { title: "Content Creators", desc: "Color-accurate displays, powerful CPUs, and ample RAM for video editing and design", icon: "🎬" },
              { title: "Professionals", desc: "Business laptops with security features, productivity tools, and enterprise support", icon: "💼" }
            ].map((item) => (
              <StaggerItem key={item.title}>
                <Card className="h-full hover:shadow-lg transition-shadow text-center">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Founding Team */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <Badge className="badge-violet mb-4">Our Team</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Founding Team</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The experts behind GradGear's success
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
            {[
              {
                name: "Siddharth Magesh",
                role: "Technical Co-Founder",
                color: "amber",
                icon: Brain,
                responsibilities: [
                  "Technical architecture & AI model development",
                  "Web development & platform infrastructure",
                  "Data pipeline & scraping systems"
                ]
              },
              {
                name: "Deepak Kumar",
                role: "Operations Co-Founder",
                color: "primary",
                icon: TrendingUp,
                responsibilities: [
                  "Business operations & financial management",
                  "Strategic growth & team coordination",
                  "Vendor negotiations & partnerships"
                ]
              },
              {
                name: "Arjun V L",
                role: "Creative Co-Founder",
                color: "violet",
                icon: Globe,
                responsibilities: [
                  "Design & branding strategy",
                  "Social media presence & marketing",
                  "Visual identity & content creation"
                ]
              },
              {
                name: "Pranesh Kumar",
                role: "Communications Co-Founder",
                color: "rose",
                icon: Users,
                responsibilities: [
                  "Documentation & process management",
                  "Client communications & support",
                  "Resource allocation & optimization"
                ]
              }
            ].map((member) => (
              <StaggerItem key={member.name}>
                <Card className={`card-accent-${member.color} h-full hover:shadow-lg transition-shadow`}>
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className={`w-12 h-12 bg-${member.color}/20 rounded-full flex items-center justify-center`}>
                        <member.icon className={`h-6 w-6 text-${member.color}`} />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{member.name}</CardTitle>
                        <p className={`text-sm text-${member.color} font-medium`}>{member.role}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      {member.responsibilities.map((item, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <CheckCircle className={`h-4 w-4 text-${member.color} mt-0.5 flex-shrink-0`} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Development Status */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <Card className="card-accent-amber bg-gradient-to-br from-amber/5 to-background">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-amber/20 rounded-full flex items-center justify-center">
                    <Rocket className="h-7 w-7 text-amber" />
                  </div>
                  <div>
                    <CardTitle className="font-heading text-2xl">Development Status & Roadmap</CardTitle>
                    <p className="text-amber font-medium">Active Development & Customer Service</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-emerald" />
                      Completed
                    </h4>
                    <ul className="space-y-3">
                      {[
                        "Website and landing page deployed",
                        "Customer intake process established",
                        "Initial database with 500+ laptops",
                        "Vendor network partnerships secured",
                        "Payment processing integration"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-emerald rounded-full mt-2 flex-shrink-0" />
                          <p className="text-muted-foreground">{item}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Rocket className="h-5 w-5 text-amber" />
                      In Progress
                    </h4>
                    <ul className="space-y-3">
                      {[
                        "AI recommendation engine refinement",
                        "Automated price scraping system",
                        "User feedback integration for algorithm improvement",
                        "Mobile app development",
                        "Expanded vendor partnerships"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-amber rounded-full mt-2 flex-shrink-0" />
                          <p className="text-muted-foreground">{item}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-amber/10 to-primary/10 border-t border-amber/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Find Your Perfect Laptop?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get personalized recommendations from our experts for just ₹59
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-amber hover:bg-amber/90 text-white">
                <Link href="https://gardgear.github.io/GradGear/" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Get Started Now
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="tel:+919940480312">
                  <Phone className="mr-2 h-5 w-5" />
                  Call: +91 99404 80312
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  )
}
