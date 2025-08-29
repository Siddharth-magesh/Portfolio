import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Github, Users, Trophy, Calendar, Code, Zap } from "lucide-react"

export default function SentimatrixPage() {
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
                AI Platform
              </Badge>
              <h1 className="font-heading mb-4">Sentimatrix</h1>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                A Multipurpose Sentiment Analysis and Product Intelligence Platform
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>2023-2024</span>
                </div>
              </div>
              <div className="flex gap-4">
                <Button asChild>
                  <Link href="https://pypi.org/project/Sentimatrix/0.1.7/" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Product
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link
                    href="https://github.com/Siddharth-magesh/Sentimatrix-V1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Source Code
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link
                    href="https://www.figma.com/design/rhiFmAHlHKoqUxOIiqXfaS/Dashboard-HR--Transactional---Community---Copy-?m=auto&t=Jzup7cQSncOoFJY8-1"
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
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <img
                  src="/sentimatrix-structure.png" // Replace with the actual image path
                  alt="Sentimatrix Platform Interface"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievement Banner */}
      <section className="section-padding bg-gradient-to-r from-yellow-50 to-amber-50 border-y border-yellow-200">
        <div className="container-max">
          <div className="flex items-center justify-center gap-4 text-center">
            <Trophy className="h-8 w-8 text-yellow-600" />
            <div>
              <h3 className="font-heading text-xl text-yellow-800 mb-1">First Place Winner - INNOTHAN'24</h3>
              <p className="text-yellow-700">
                Prize Amount: ₹25,000 | Recognition for innovative sentiment analysis platform
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Description */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="font-heading text-3xl mb-6">Project Description</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  AI-powered sentiment analysis and product intelligence tool designed to help businesses, developers,
                  and individuals understand public sentiment across multiple channels. Originally developed as a
                  college project, it evolved into a comprehensive solution combining multimodal sentiment analysis with
                  autonomous web scraping.
                </p>

                <h3 className="font-heading text-xl mb-4">Key Features</h3>
                <ul className="space-y-2 text-muted-foreground mb-6">
                  <li>• Combines multimodal sentiment analysis with autonomous web scraping</li>
                  <li>• Provides interactive reporting for informed decision-making</li>
                  <li>• Supports product launches, user feedback research, and brand reputation monitoring</li>
                  <li>• Multiple access modes for different user types</li>
                </ul>
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
                    <p className="text-sm text-muted-foreground">6 Developers</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Status</h4>
                    <Badge variant="secondary">Published on PyPI</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Details */}
      <section className="section-padding bg-muted/30">
        <div className="container-max">
          <h2 className="font-heading text-3xl mb-8">Implementation Details</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle>Core Capabilities</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Multimodal Sentiment Analysis</h4>
                  <p className="text-sm text-muted-foreground">
                    Processes text, images, and video formats with multilingual support
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Autonomous Web Scraping</h4>
                  <p className="text-sm text-muted-foreground">
                    Collects data from e-commerce sites, social media, and forums using dynamic category-based scraping
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Review Aggregation</h4>
                  <p className="text-sm text-muted-foreground">
                    Compiles reviews from multiple platforms with internal sentiment model summarization
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Visual Analytics</h4>
                  <p className="text-sm text-muted-foreground">
                    Converts raw sentiment data into clear visual summaries with scoreboards, graphs, and trend maps
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Access Modes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">API Access</h4>
                  <p className="text-sm text-muted-foreground">
                    For developers integrating sentiment analysis into applications
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Python Module</h4>
                  <p className="text-sm text-muted-foreground">
                    For data scientists and researchers conducting analysis
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Web Dashboard</h4>
                  <p className="text-sm text-muted-foreground">
                    For business teams and analysts requiring visual interfaces
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Conversational Chatbot</h4>
                  <p className="text-sm text-muted-foreground">
                    For casual users and influencers seeking quick insights
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Advanced Features</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Custom pipelines combining scraping, analysis, and reporting workflows</li>
                  <li>• Product intelligence tools with competitor comparison</li>
                  <li>• Feedback heatmaps for detailed sentiment visualization</li>
                </ul>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Influencer insight engine for content performance tracking</li>
                  <li>• Sentimatrix Studio (prototype cloud-based extension)</li>
                  <li>• Real-time sentiment monitoring and alerts</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Technologies Used */}
      <section className="section-padding">
        <div className="container-max">
          <h2 className="font-heading text-3xl mb-8">Technologies Used</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Machine Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Advanced ML Algorithms</Badge>
                  <Badge variant="secondary">NLP</Badge>
                  <Badge variant="secondary">Computer Vision</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Development</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">API Frameworks</Badge>
                  <Badge variant="secondary">Web Scraping</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Infrastructure</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Cloud Computing</Badge>
                  <Badge variant="secondary">Database Systems</Badge>
                  <Badge variant="secondary">Data Visualization</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="section-padding bg-muted/30">
        <div className="container-max">
          <h2 className="font-heading text-3xl mb-8">Development Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {["Siddharth Magesh", "Pranesh Kumar", "Arjun VL", "Yasir", "Sriram", "Waatson"].map((member, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">{member}</h4>
                      <p className="text-sm text-muted-foreground">Developer</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Future Roadmap */}
      <section className="section-padding">
        <div className="container-max">
          <h2 className="font-heading text-3xl mb-8">Future Roadmap</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-heading text-xl mb-4">Planned Developments</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• Enhanced integration with emerging web-integrated AI tools</li>
                    <li>• Expansion of Sentimatrix Studio cloud-based capabilities</li>
                    <li>• Open-source contributions to foster collaborative developer ecosystem</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-heading text-xl mb-4">Technical Enhancements</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• Advanced agentic scraping engine improvements</li>
                    <li>• Enhanced plug-and-play architecture for flexible integration</li>
                    <li>• Expanded support for regional sociolinguistic sentiment trends</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
