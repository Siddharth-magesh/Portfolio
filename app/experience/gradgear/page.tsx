"use client"

import { ArrowLeft, ExternalLink, Download, Users, Target, Lightbulb, TrendingUp } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function GradGearExperience() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Navigation */}
        <div className="mb-8">
          <Link
            href="/experience"
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Experience
          </Link>
        </div>

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Badge className="bg-primary/10 text-primary border-primary/20 px-3 py-1 text-sm font-medium">
              CO-FOUNDER
            </Badge>
            <Badge className="bg-green-100 text-green-800 border-green-200 px-3 py-1 text-sm font-medium">
              ONGOING
            </Badge>
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">Co-Founder – GradGear</h1>
          <p className="text-xl text-muted-foreground mb-6">
            AI-Powered Consultancy for Personalized Laptop Recommendations
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div>
              <h3 className="font-semibold text-foreground mb-2">Duration</h3>
              <p className="text-muted-foreground">2024-2025 (Ongoing)</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Company Type</h3>
              <p className="text-muted-foreground">Startup</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Work Mode</h3>
              <p className="text-muted-foreground">Remote</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link href="https://gardgear.github.io/GradGear/" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Visit Website
              </Link>
            </Button>
            <Button variant="outline" className="border-primary/20 text-primary hover:bg-primary/5 bg-transparent">
              <Download className="w-4 h-4 mr-2" />
              Download Certificate
            </Button>
          </div>
        </div>

        {/* Company Mission and Vision */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5 text-primary" />
              Mission & Vision
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              "At GradGear, we are more than just a laptop recommendation service. We are your personal guide to finding
              the perfect laptop that fits your unique needs. Our mission is to simplify the process of buying a laptop
              by leveraging our extensive database and expert knowledge to provide customized recommendations that you
              can trust."
            </p>
          </CardContent>
        </Card>

        {/* Value Proposition */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              Value Proposition
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-muted-foreground">
                    Helped thousands of students, professionals, and tech enthusiasts
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-muted-foreground">
                    Specialized recommendations for gamers, students, and content creators
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-muted-foreground">
                    Strong connections with local and branded retailers for best deals
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-muted-foreground">Stress-free, smooth, and simple buying process</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Technical Features */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Technical Features & Achievements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-foreground mb-3">Core Features</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                    <span className="text-muted-foreground">
                      Dynamic database with comprehensive laptop specifications
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                    <span className="text-muted-foreground">
                      Advanced custom AI models trained for recommendation tasks
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                    <span className="text-muted-foreground">Multi-query processing capabilities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                    <span className="text-muted-foreground">Detailed UNBIASED laptop recommendations</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3">Advanced Capabilities</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                    <span className="text-muted-foreground">Price range comparisons across multiple vendors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                    <span className="text-muted-foreground">Add-on recommendations with minimal charge fees</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                    <span className="text-muted-foreground">Real-time pricing data aggregation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                    <span className="text-muted-foreground">Personalized reports based on user requirements</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Team Structure */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              Founding Team Structure
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <h4 className="font-semibold text-primary mb-2">Siddharth Magesh - Technical Co-Founder</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Technical core of the company</li>
                    <li>• Web development and content curation</li>
                    <li>• Complex technical challenges and solutions</li>
                    <li>• Digital platforms technical excellence</li>
                  </ul>
                </div>
                <div className="p-4 bg-muted/30 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Deepak Kumar - Operations Co-Founder</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Business operations and financial management</li>
                    <li>• Team coordination and strategic growth</li>
                    <li>• Leadership and organizational oversight</li>
                    <li>• Critical decision-making and financial stability</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-muted/30 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Arjun V L - Creative Co-Founder</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Design and branding efforts</li>
                    <li>• Social media presence and visual content</li>
                    <li>• Logos, posters, and visual identity</li>
                    <li>• Engaging online content and marketing</li>
                  </ul>
                </div>
                <div className="p-4 bg-muted/30 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Pranesh Kumar - Communications Co-Founder</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Documentation, forms, and communications</li>
                    <li>• Streamlining internal processes</li>
                    <li>• Clear stakeholder communication</li>
                    <li>• Resource allocation and process optimization</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Skills Developed */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-primary" />
              Skills & Learning Outcomes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-foreground mb-3">Technical Skills Developed</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-primary/20 text-primary">
                    AI Model Development
                  </Badge>
                  <Badge variant="outline" className="border-primary/20 text-primary">
                    Web Scraping
                  </Badge>
                  <Badge variant="outline" className="border-primary/20 text-primary">
                    Database Design
                  </Badge>
                  <Badge variant="outline" className="border-primary/20 text-primary">
                    Market Analysis
                  </Badge>
                  <Badge variant="outline" className="border-primary/20 text-primary">
                    Algorithm Development
                  </Badge>
                  <Badge variant="outline" className="border-primary/20 text-primary">
                    Data Aggregation
                  </Badge>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3">Professional Skills</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-green-200 text-green-700">
                    Startup Operations
                  </Badge>
                  <Badge variant="outline" className="border-green-200 text-green-700">
                    Business Development
                  </Badge>
                  <Badge variant="outline" className="border-green-200 text-green-700">
                    Team Coordination
                  </Badge>
                  <Badge variant="outline" className="border-green-200 text-green-700">
                    Co-founding
                  </Badge>
                  <Badge variant="outline" className="border-green-200 text-green-700">
                    Vendor Management
                  </Badge>
                  <Badge variant="outline" className="border-green-200 text-green-700">
                    Network Building
                  </Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Development Status */}
        <Card>
          <CardHeader>
            <CardTitle>Development Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h4 className="font-semibold text-yellow-800 mb-2">Current Stage: Early Development</h4>
              <ul className="text-yellow-700 space-y-1">
                <li>• Gradual build-up and feature implementation ongoing</li>
                <li>• Continuous improvement of AI recommendation algorithms</li>
                <li>• Expanding vendor network and database capabilities</li>
                <li>• User testing and feedback integration in progress</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
