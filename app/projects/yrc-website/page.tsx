import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Globe, Shield, Users, Zap, Search, Smartphone } from "lucide-react"

export default function YRCWebsiteProjectPage() {
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
                WordPress Platform • 2025 - Ongoing
              </Badge>
              <h1 className="font-heading mb-6">YRC Digital Website</h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Official Digital Hub for Youth Red Cross Operations - Built with WordPress Excellence
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild>
                  <Link href="#" target="_blank" rel="noopener noreferrer">
                    <Globe className="mr-2 h-4 w-4" />
                    Visit Website
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <p className="text-center text-muted-foreground px-4">
                  The migration of the YRC website codebase from React to WordPress is currently in progress. This
                  transition aims to leverage WordPress's robust CMS capabilities for easier content management and
                  scalability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="font-heading text-3xl mb-6">Project Overview</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Comprehensive digital platform serving as the main website for the Youth Red Cross team at Velammal
                  Engineering College, designed to showcase activities, manage member information, facilitate
                  communication, and provide resources for the YRC community.
                </p>

                <h3 className="font-heading text-xl mb-4">Key Features</h3>
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  <Card>
                    <CardHeader className="pb-3">
                      <div className="flex items-center space-x-2">
                        <Globe className="h-5 w-5 text-primary" />
                        <CardTitle className="text-lg">Dynamic Content Management</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        WordPress CMS with user-friendly admin interface for easy content updates
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <div className="flex items-center space-x-2">
                        <Smartphone className="h-5 w-5 text-primary" />
                        <CardTitle className="text-lg">Responsive Design</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Optimized for all devices with mobile-first approach
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <div className="flex items-center space-x-2">
                        <Users className="h-5 w-5 text-primary" />
                        <CardTitle className="text-lg">Member Portal</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Secure authentication and member dashboard functionality
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <div className="flex items-center space-x-2">
                        <Search className="h-5 w-5 text-primary" />
                        <CardTitle className="text-lg">SEO Optimization</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        SEO-optimized content structure for better search visibility
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Project Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Working Period</h4>
                    <p className="text-sm text-muted-foreground">2025 - Ongoing</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Platform</h4>
                    <p className="text-sm text-muted-foreground">WordPress CMS</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Hosting</h4>
                    <p className="text-sm text-muted-foreground">Hostinger</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Status</h4>
                    <Badge variant="secondary">Active Development</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Choice Explanation */}
      <section className="section-padding bg-muted/30">
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Globe className="h-5 w-5" />
                  <span>Why WordPress?</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium text-sm mb-1">Ease of Management</h4>
                  <p className="text-xs text-muted-foreground">
                    Intuitive CMS allowing non-technical team members to update content easily
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-sm mb-1">Extensive Plugin Ecosystem</h4>
                  <p className="text-xs text-muted-foreground">
                    Access to thousands of plugins for enhanced functionality
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-sm mb-1">Customization Flexibility</h4>
                  <p className="text-xs text-muted-foreground">
                    Custom themes tailored for YRC branding and requirements
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-sm mb-1">Cost-Effective Solution</h4>
                  <p className="text-xs text-muted-foreground">Open-source platform with enterprise-level features</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Zap className="h-5 w-5" />
                  <span>Why Hostinger?</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium text-sm mb-1">Reliable Performance</h4>
                  <p className="text-xs text-muted-foreground">
                    99.9% uptime guarantee ensuring constant accessibility
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-sm mb-1">WordPress Optimization</h4>
                  <p className="text-xs text-muted-foreground">
                    Specialized hosting with optimized servers and automatic updates
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-sm mb-1">Affordable Pricing</h4>
                  <p className="text-xs text-muted-foreground">
                    Cost-effective solution fitting educational institution budgets
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-sm mb-1">Security Features</h4>
                  <p className="text-xs text-muted-foreground">Built-in SSL, daily backups, and malware protection</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Implementation */}
      <section className="section-padding">
        <div className="container-max">
          <h2 className="font-heading text-3xl mb-8">Technical Implementation</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-5 w-5" />
                  <span>Core Technologies</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-sm">Content Management</h4>
                    <p className="text-sm text-muted-foreground">WordPress CMS with custom theme development</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">Frontend Technologies</h4>
                    <p className="text-sm text-muted-foreground">HTML5, CSS3, JavaScript, PHP</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">Database</h4>
                    <p className="text-sm text-muted-foreground">MySQL for WordPress data management</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">Security</h4>
                    <p className="text-sm text-muted-foreground">SSL encryption, regular updates, backup systems</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Advanced Features</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-sm">Custom Post Types</h4>
                    <p className="text-sm text-muted-foreground">Events, members, and announcements management</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">Search & Filtering</h4>
                    <p className="text-sm text-muted-foreground">Advanced search capabilities for content discovery</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">Third-party Integration</h4>
                    <p className="text-sm text-muted-foreground">APIs and social media platform integration</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">Performance Optimization</h4>
                    <p className="text-sm text-muted-foreground">Caching, image optimization, CDN integration</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mb-8">
            <h3 className="font-heading text-xl mb-4">Technology Stack</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">WordPress</Badge>
              <Badge variant="outline">PHP</Badge>
              <Badge variant="outline">MySQL</Badge>
              <Badge variant="outline">HTML5</Badge>
              <Badge variant="outline">CSS3</Badge>
              <Badge variant="outline">JavaScript</Badge>
              <Badge variant="outline">Hostinger</Badge>
              <Badge variant="outline">SSL</Badge>
              <Badge variant="outline">SEO</Badge>
              <Badge variant="outline">Responsive Design</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Future Roadmap */}
      <section className="section-padding bg-muted/30">
        <div className="container-max">
          <h2 className="font-heading text-3xl mb-8">Future Roadmap</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Enhanced Member Portal</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Advanced member portal with expanded functionality and features
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Mobile App Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Seamless integration with mobile applications for unified experience
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Event Management System</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Enhanced event management with automated workflows</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Newsletter Automation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Automated newsletter system for regular community communication
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">College System Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Integration with college systems for streamlined operations
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Advanced Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Analytics integration for better insights into user engagement
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
