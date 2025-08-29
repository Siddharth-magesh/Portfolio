import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Calendar, Users, Target, Code, Lightbulb, Heart, Phone, Mail } from "lucide-react"
import Link from "next/link"

export default function LifeConnectPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-red-100 text-red-800 hover:bg-red-200">Youth Red Cross Project</Badge>
          <h1 className="text-4xl font-bold text-foreground mb-4">Life Connect</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Youth Red Cross Blood Donation Platform - Connecting Lives Through Digital Innovation
          </p>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>2023-2024</span>
          </div>
        </div>

        {/* Achievement Banner */}
        <Card className="mb-8 border-green-200 bg-green-50">
          <CardContent className="pt-6">
            <div className="flex items-center justify-center gap-2 text-green-800 mb-2">
              <Heart className="h-5 w-5" />
              <span className="font-semibold">Community Impact Achievement</span>
            </div>
            <p className="text-center text-green-700">
              Successfully registered 300+ active blood donors and conducted awareness campaigns during college
              symposium
            </p>
          </CardContent>
        </Card>

        {/* Project Overview */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-red-600" />
              Project Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              Digital platform created by Youth Red Cross (YRC) at Velammal Engineering College to streamline blood
              donation services and foster a community of active blood donors. The platform makes it easy for people in
              need to find blood donors quickly while maintaining safety standards through proper verification and admin
              oversight.
            </p>
          </CardContent>
        </Card>

        {/* Key Features */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Key Features</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-foreground">Blood Donation Request System</h4>
                  <p className="text-sm text-muted-foreground">Request submission and management system</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Donor Registration & Notifications</h4>
                  <p className="text-sm text-muted-foreground">Comprehensive donor management with alerts</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Request Tracking</h4>
                  <p className="text-sm text-muted-foreground">Real-time status updates with admin oversight</p>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-foreground">Analytics Dashboard</h4>
                  <p className="text-sm text-muted-foreground">Statistics and impact tracking</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Multi-Language Support</h4>
                  <p className="text-sm text-muted-foreground">User-friendly interface for diverse users</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Hospital Coordination</h4>
                  <p className="text-sm text-muted-foreground">Direct hospital and recipient coordination</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Implementation Details */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="h-5 w-5 text-red-600" />
              Implementation Details
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Core Capabilities</h4>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Blood request generation and donor matching based on blood type and location</li>
                  <li>Verified donor management with notification system</li>
                  <li>Real-time request status tracking and updates</li>
                  <li>Admin approval workflow for safety and efficiency</li>
                  <li>Contact management system for queries and support</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Advanced Features</h4>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Automated donor-recipient matching algorithm</li>
                  <li>Request validation and verification system</li>
                  <li>Communication tools for direct donor-recipient contact</li>
                  <li>Analytics dashboard for tracking donation impact and statistics</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Technologies Used */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Technologies Used</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-foreground mb-3">Frontend</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">HTML</Badge>
                  <Badge variant="outline">CSS</Badge>
                  <Badge variant="outline">JavaScript</Badge>
                  <Badge variant="outline">Responsive Design</Badge>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3">Backend & Communication</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Node.js/Python</Badge>
                  <Badge variant="outline">Database Management</Badge>
                  <Badge variant="outline">Email Integration</Badge>
                  <Badge variant="outline">SMS Notifications</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Development Team Section */}
        <section className="section-padding bg-muted/30">
          <div className="container-max">
            <h2 className="font-heading text-3xl mb-8">Development Team</h2>
            <div className="mb-6 flex justify-center">
              <img
                src="/development-team-photo.jpg"
                alt="Development Team Photo"
                className="rounded-lg shadow-md w-1/2 object-cover"
              />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Siddharth Magesh",
                "Vishva",
                "Andal",
                "Dakshan",
                "Sujhan",
                "Tarakeshwaran",
              ].map((member, index) => (
                <div
                  key={index}
                  className="border border-muted rounded-lg p-4 shadow-sm text-center bg-white"
                >
                  <h4 className="font-medium text-lg mb-2">{member}</h4>
                  <p className="text-sm text-muted-foreground">Developer</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-red-600" />
              Achievements & Impact
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Successfully conducted awareness booth during college symposium</li>
                <li>Registered and engaged more than 300 active blood donors</li>
              </ul>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Established partnerships with local hospitals and medical facilities</li>
                <li>Created sustainable blood donation network within college community</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-foreground text-center mb-4">
                Community Engagement & Awareness Activities
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <img
                    src="/yrc-awareness-booth.jpg"
                    alt="Youth Red Cross awareness booth during college symposium showcasing Life Connect platform"
                    className="w-full h-auto max-h-64 object-contain rounded-lg border"
                  />
                  <p className="text-sm text-muted-foreground text-center">
                    Awareness booth setup during college symposium demonstrating the Life Connect platform
                  </p>
                </div>
                <div className="space-y-2">
                  <img
                    src="/community-engagement-yrc.jpg"
                    alt="Community engagement activities and blood donation awareness campaign by Youth Red Cross team"
                    className="w-full h-auto max-h-64 object-contain rounded-lg border"
                  />
                  <p className="text-sm text-muted-foreground text-center">
                    Community engagement activities and donor registration drive
                  </p>
                </div>
              </div>
              <div className="text-center mt-4">
                <div className="inline-flex items-center gap-2 bg-red-50 px-4 py-2 rounded-full">
                  <Heart className="h-4 w-4 text-red-600" />
                  <span className="text-red-800 font-medium">300+ Active Donors Registered</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-6 justify-center">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-red-600" />
                <span className="text-muted-foreground">9150450401</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-red-600" />
                <span className="text-muted-foreground">yrclifeconnect@gmail.com</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Future Roadmap */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-red-600" />
              Future Roadmap
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Mobile application development for enhanced accessibility</li>
                <li>Integration with government blood bank databases</li>
                <li>AI-powered donor matching optimization</li>
              </ul>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Emergency alert system for critical blood requirements</li>
                <li>Expansion to other educational institutions and communities</li>
                <li>Partnership development with regional hospitals and blood banks</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Button asChild>
            <Link
              href="https://github.com/Siddharth-magesh/YouthRedCross-BloodRequest"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-4 w-4" />
              View Source Code
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/projects">Back to Projects</Link>
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  )
}
