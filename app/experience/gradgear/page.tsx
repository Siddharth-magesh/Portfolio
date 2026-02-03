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
  Download,
  Users,
  Target,
  Lightbulb,
  TrendingUp,
  Calendar,
  Building2,
  Laptop,
  Brain,
  Database,
  Globe,
  CheckCircle,
  Rocket,
} from "lucide-react"
import { FadeIn, SlideIn, StaggerContainer, StaggerItem } from "@/components/animations"

export default function GradGearExperience() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,var(--amber)/0.05,transparent_50%)]" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-amber/5 rounded-full blur-3xl" />

        <div className="container-max relative">
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
              <FadeIn delay={0.1}>
                <div className="flex items-center gap-3 mb-4">
                  <Badge variant="secondary" className="badge-amber border">
                    Co-Founder
                  </Badge>
                  <Badge variant="secondary" className="badge-success border">
                    Ongoing
                  </Badge>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <h1 className="font-heading mb-4">Co-Founder – GradGear</h1>
                <p className="text-lg text-muted-foreground mb-4">
                  AI-Powered Consultancy for Personalized Laptop Recommendations
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                  Co-founded an AI-driven consultancy startup that leverages machine learning algorithms and comprehensive
                  market data to deliver personalized, unbiased laptop recommendations. GradGear addresses the overwhelming
                  complexity of laptop selection by providing data-driven insights tailored to individual user requirements,
                  budget constraints, and use-case scenarios.
                </p>
              </FadeIn>
              <FadeIn delay={0.4}>
                <div className="flex flex-wrap gap-4">
                  <Button asChild className="bg-amber hover:bg-amber/90 text-amber-foreground">
                    <Link href="https://gardgear.github.io/GradGear/" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Visit Website
                    </Link>
                  </Button>
                </div>
              </FadeIn>
            </div>

            <SlideIn direction="right" delay={0.3}>
              <Card className="bg-gradient-to-br from-amber/5 to-background">
                <CardHeader>
                  <CardTitle className="font-heading text-lg">Startup Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Building2 className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">GradGear</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span className="text-sm">2024 - Present</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-primary" />
                    <span className="text-sm">4 Co-Founders</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Laptop className="h-4 w-4 text-primary" />
                    <span className="text-sm">Tech Consultancy</span>
                  </div>
                  <div className="pt-2">
                    <Badge variant="secondary" className="badge-info border">
                      Early Development
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container-max">
          <FadeIn>
            <Card className="mb-8 card-accent-amber">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-amber" />
                  Mission & Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  "At GradGear, we are more than just a laptop recommendation service. We are your personal guide to finding
                  the perfect laptop that fits your unique needs. Our mission is to simplify the process of buying a laptop
                  by leveraging our extensive database and expert knowledge to provide customized recommendations that you
                  can trust. We believe technology purchasing should be transparent, unbiased, and tailored to individual needs."
                </p>
              </CardContent>
            </Card>
          </FadeIn>

          {/* Value Proposition */}
          <FadeIn delay={0.1}>
            <h2 className="font-heading text-3xl mb-8">Value Proposition</h2>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12" staggerDelay={0.1}>
            <StaggerItem>
              <Card className="card-accent-teal h-full hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center">
                      <Users className="h-5 w-5 text-teal" />
                    </div>
                    <CardTitle className="text-lg">Personalized Guidance</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Helped thousands of students, professionals, and tech enthusiasts find their ideal laptops through
                    AI-driven analysis of individual requirements, usage patterns, and budget constraints.
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="card-accent-violet h-full hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 rounded-lg bg-violet/10 flex items-center justify-center">
                      <Target className="h-5 w-5 text-violet" />
                    </div>
                    <CardTitle className="text-lg">Specialized Recommendations</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Domain-specific recommendation engines for gamers, students, content creators, and professionals
                    with optimized feature prioritization for each use case.
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="card-accent-emerald h-full hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 rounded-lg bg-emerald/10 flex items-center justify-center">
                      <TrendingUp className="h-5 w-5 text-emerald" />
                    </div>
                    <CardTitle className="text-lg">Vendor Network</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Strong connections with local and branded retailers enabling access to competitive pricing,
                    exclusive deals, and reliable after-sales support for our clients.
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="card-accent-rose h-full hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 rounded-lg bg-rose/10 flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-rose" />
                    </div>
                    <CardTitle className="text-lg">Unbiased Analysis</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Completely unbiased recommendations driven by data and user requirements rather than brand
                    partnerships or affiliate commissions, ensuring trust and transparency.
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Technical Features */}
      <section className="section-padding bg-muted/30">
        <div className="container-max">
          <FadeIn>
            <h2 className="font-heading text-3xl mb-8">Technical Architecture</h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <FadeIn delay={0.1}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Brain className="h-5 w-5 text-amber" />
                    <span>AI Recommendation Engine</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium text-sm mb-1">Custom ML Models</h4>
                    <p className="text-sm text-muted-foreground">
                      Proprietary machine learning models trained on extensive laptop specification datasets
                      for accurate requirement-to-product matching.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-1">Multi-Query Processing</h4>
                    <p className="text-sm text-muted-foreground">
                      Natural language processing capabilities enabling users to describe requirements
                      in conversational terms with intelligent interpretation.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-1">Real-time Pricing</h4>
                    <p className="text-sm text-muted-foreground">
                      Automated web scraping and price aggregation across multiple e-commerce platforms
                      for up-to-date pricing information.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Database className="h-5 w-5 text-teal" />
                    <span>Data Infrastructure</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium text-sm mb-1">Dynamic Database</h4>
                    <p className="text-sm text-muted-foreground">
                      Comprehensive laptop specification database with regular updates covering 500+ models
                      across all major brands and price segments.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-1">Price Comparison Engine</h4>
                    <p className="text-sm text-muted-foreground">
                      Cross-platform price tracking with historical data analysis for identifying optimal
                      purchase timing and deal detection.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-1">Performance Analytics</h4>
                    <p className="text-sm text-muted-foreground">
                      Benchmark data integration enabling performance-per-rupee calculations and
                      value-for-money scoring across product categories.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          </div>

          <FadeIn delay={0.3}>
            <div className="mb-8">
              <h3 className="font-heading text-xl mb-4">Technology Stack</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Python",
                  "Machine Learning",
                  "Web Scraping",
                  "BeautifulSoup",
                  "Selenium",
                  "Pandas",
                  "Database Design",
                  "API Development",
                  "React",
                  "Market Analysis",
                  "NLP",
                  "Data Aggregation",
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

      {/* Team Structure */}
      <section className="section-padding">
        <div className="container-max">
          <FadeIn>
            <h2 className="font-heading text-3xl mb-8">Founding Team</h2>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6" staggerDelay={0.1}>
            <StaggerItem>
              <Card className="card-accent-amber hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-amber/20 rounded-full flex items-center justify-center">
                      <Brain className="h-6 w-6 text-amber" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Siddharth Magesh</CardTitle>
                      <p className="text-sm text-amber font-medium">Technical Co-Founder</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-emerald mt-0.5 flex-shrink-0" />
                      <span>Technical architecture and AI model development</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-emerald mt-0.5 flex-shrink-0" />
                      <span>Web development and platform infrastructure</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-emerald mt-0.5 flex-shrink-0" />
                      <span>Data pipeline and scraping systems</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <TrendingUp className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Deepak Kumar</CardTitle>
                      <p className="text-sm text-muted-foreground font-medium">Operations Co-Founder</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-teal mt-0.5 flex-shrink-0" />
                      <span>Business operations and financial management</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-teal mt-0.5 flex-shrink-0" />
                      <span>Strategic growth and team coordination</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-teal mt-0.5 flex-shrink-0" />
                      <span>Vendor negotiations and partnerships</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Globe className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Arjun V L</CardTitle>
                      <p className="text-sm text-muted-foreground font-medium">Creative Co-Founder</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-violet mt-0.5 flex-shrink-0" />
                      <span>Design and branding strategy</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-violet mt-0.5 flex-shrink-0" />
                      <span>Social media presence and marketing</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-violet mt-0.5 flex-shrink-0" />
                      <span>Visual identity and content creation</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Pranesh Kumar</CardTitle>
                      <p className="text-sm text-muted-foreground font-medium">Communications Co-Founder</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-rose mt-0.5 flex-shrink-0" />
                      <span>Documentation and process management</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-rose mt-0.5 flex-shrink-0" />
                      <span>Client communications and support</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-rose mt-0.5 flex-shrink-0" />
                      <span>Resource allocation and optimization</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Development Status */}
      <section className="section-padding bg-muted/30">
        <div className="container-max">
          <FadeIn>
            <Card className="card-accent-amber bg-gradient-to-br from-amber/5 to-background">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-amber/20 rounded-full flex items-center justify-center">
                    <Rocket className="h-6 w-6 text-amber" />
                  </div>
                  <div>
                    <CardTitle className="font-heading text-2xl">Development Status</CardTitle>
                    <p className="text-amber font-medium">Early Development Phase</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    "AI recommendation engine development and training in progress",
                    "Database infrastructure and price aggregation systems operational",
                    "Website and user interface under active development",
                    "Vendor network expansion and partnership negotiations ongoing",
                    "User testing and feedback integration for algorithm refinement",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-amber rounded-full mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  )
}
