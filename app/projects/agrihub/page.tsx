import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Github, Users, Trophy, Calendar, Code, Leaf } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const images = [
  "/agrihub/agrihub-interface-1.png",
  "/agrihub/agrihub-interface-2.png",
  "/agrihub/agrihub-interface-3.png",
  "/agrihub/agrihub-interface-4.png"
]

export default function AgriHubPage() {
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
                AgTech Platform
              </Badge>
              <h1 className="font-heading mb-4">AgriHub</h1>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                Comprehensive Farming Platform Connecting Farmers and Buyers
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>2023-2024</span>
                </div>
              </div>
              <div className="flex gap-4">
                <Button asChild>
                  <Link href="https://github.com/Siddharth-magesh/Agri-Hub" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Source Code
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Carousel className="w-full">
                <CarouselContent>
                  {images.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="aspect-video bg-white rounded-2xl flex items-center justify-center p-6">
                        <img
                          src={image}
                          alt={`AgriHub Interface ${index + 1}`}
                          className="w-full h-full object-contain rounded-xl"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      {/* Achievement Banner */}
      <section className="section-padding bg-gradient-to-r from-green-50 to-emerald-50 border-y border-green-200">
        <div className="container-max">
          <div className="flex items-center justify-center gap-4 text-center">
            <Trophy className="h-8 w-8 text-green-600" />
            <div>
              <h3 className="font-heading text-xl text-green-800 mb-1">Special Prize Winner - PRABHIGNYAN</h3>
              <p className="text-green-700">Prize Amount: ₹2,000 | Recognition for innovative agricultural platform</p>
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
                  All-in-one platform designed to make farming easier and more connected by bringing farmers and buyers
                  together, helping manage farms, connect with communities, and find necessary resources. The platform
                  integrates marketplace functionality with farm management tools and agricultural intelligence.
                </p>

                <h3 className="font-heading text-xl mb-4">Key Features</h3>
                <ul className="space-y-2 text-muted-foreground mb-6">
                  <li>• Farmer-buyer marketplace integration</li>
                  <li>• Farm management tools and resources</li>
                  <li>• Community connection and networking</li>
                  <li>• Resource discovery and procurement</li>
                  <li>• Agricultural intelligence and insights</li>
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
                    <p className="text-sm text-muted-foreground">4 Developers</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Status</h4>
                    <Badge variant="secondary">Open Source</Badge>
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
                <CardTitle>Core Features</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Personalized Dashboard</h4>
                  <p className="text-sm text-muted-foreground">
                    Dedicated accounts for farmers and buyers with customizable interfaces
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Communication Hub</h4>
                  <p className="text-sm text-muted-foreground">
                    Community connections, associations, and knowledge sharing platform
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Integrated Store</h4>
                  <p className="text-sm text-muted-foreground">
                    Wide range of farming materials with search and sorting capabilities
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Financial Services</h4>
                  <p className="text-sm text-muted-foreground">
                    Insurance and loan information with bank details and interest rates
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>AI-Powered Tools</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">QuickFarm Chatbot</h4>
                  <p className="text-sm text-muted-foreground">
                    Intelligent chatbot for farming strategy recommendations
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Computer Vision</h4>
                  <p className="text-sm text-muted-foreground">
                    Leaf disease detection, fruit counting, and crop classification
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Advanced Chatbots</h4>
                  <p className="text-sm text-muted-foreground">
                    Web scraping, SQL query processing, and farming techniques advice
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Voice Access with RAG</h4>
                  <p className="text-sm text-muted-foreground">Voice recognition for dynamic webpage interaction</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Additional Features</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-2 text-muted-foreground">
                  <li>• News Integration with up-to-date farming news</li>
                  <li>• Regional crop price information</li>
                  <li>• Weather forecasting and alerts</li>
                </ul>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Market trend analysis and predictions</li>
                  <li>• Crop yield optimization recommendations</li>
                  <li>• Sustainable farming practice guidance</li>
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
                <CardTitle className="text-lg">AI Models</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">TinyLlama</Badge>
                  <Badge variant="secondary">Llama-2-7B</Badge>
                  <Badge variant="secondary">Phi-3-mini</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Computer Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">YOLOV8</Badge>
                  <Badge variant="secondary">PyTorch</Badge>
                  <Badge variant="secondary">CUDA</Badge>
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
                  <Badge variant="secondary">SQL Database</Badge>
                  <Badge variant="secondary">Voice Recognition</Badge>
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {["Siddharth Magesh", "Pranesh Kumar", "Samuel Stephen","Arjun VL", "Waatson"].map((member, index) => (
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
                  <h3 className="font-heading text-xl mb-4">Technical Enhancements</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• SQL database optimization and extended relationships</li>
                    <li>• Enhanced LLM integration and training on agricultural datasets</li>
                    <li>• Dynamic frontend development for all pages</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-heading text-xl mb-4">Platform Expansion</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• Mobile application development with separate GUI</li>
                    <li>• Increased vector store capacity and generalized data structures</li>
                    <li>• Complete website redesign with enhanced CSS and navigation</li>
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
