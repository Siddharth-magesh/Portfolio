"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Trophy, Medal, Users, Mail, Star, Code, Calendar } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

// Component to handle image loading with fallback
const EventImage = ({ src, alt, className = "", width = 600, height = 400 }: {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className={`bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center ${className}`}>
        <div className="text-center p-6">
          <Code className="h-12 w-12 text-slate-500 mx-auto mb-2" />
          <p className="text-sm text-muted-foreground">{alt}</p>
        </div>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={() => setHasError(true)}
    />
  );
};

export default function HackathonsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Header */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 px-4 py-2 bg-slate-100 text-slate-800 border border-slate-200">
              Competitive Programming & Innovation
            </Badge>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">Hackathons & Competitive Events</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              My journey through competitive programming, hackathons, and technical events
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted/30">
        <div className="container-max">
          <div className="mb-8 text-center">
            <h2 className="font-heading text-3xl font-bold mb-4 flex items-center justify-center gap-3">
              <Trophy className="h-8 w-8 text-slate-700" />
              Achievements & Wins
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Title Winner - INNOTHAN'24 */}
            <Card className="border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100 overflow-hidden">
              <div className="aspect-video">
                <EventImage 
                  src="/hackathons/innothan-24.jpg" 
                  alt="INNOTHAN'24 Event" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-slate-700 hover:bg-slate-800 text-white">Title Winner</Badge>
                  <Badge variant="outline">2024</Badge>
                </div>
                <CardTitle className="text-xl">INNOTHAN'24</CardTitle>
                <p className="text-muted-foreground">KCG College of Technology</p>
              </CardHeader>
            </Card>

            {/* Special Winner - PRABHIGNYAN */}
            <Card className="border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100 overflow-hidden">
              <div className="aspect-video">
                <EventImage 
                  src="/hackathons/prabhignyan.jpg" 
                  alt="PRABHIGNYAN Event" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-slate-700 hover:bg-slate-800 text-white">Special Winner</Badge>
                  <Badge variant="outline">2024</Badge>
                </div>
                <CardTitle className="text-xl">PRABHIGNYAN</CardTitle>
                <p className="text-muted-foreground">Prathuyusha Engineering College (PEC)</p>
              </CardHeader>
            </Card>

            {/* Third Prize - Tech Genesis'25 */}
            <Card className="border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100 overflow-hidden">
              <div className="aspect-video">
                <EventImage 
                  src="/hackathons/tech-genesis-25.jpg" 
                  alt="Tech Genesis'25 Event" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-slate-600 hover:bg-slate-700 text-white">Third Prize</Badge>
                  <Badge variant="outline">2025</Badge>
                </div>
                <CardTitle className="text-xl">Tech Genesis'25</CardTitle>
                <p className="text-muted-foreground">Velammal Engineering College</p>
              </CardHeader>
            </Card>

            {/* Second Prize - Ideathon */}
            <Card className="border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100 overflow-hidden">
              <div className="aspect-video">
                <EventImage 
                  src="/hackathons/ideathon.jpg" 
                  alt="Ideathon Event" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-slate-600 hover:bg-slate-700 text-white">Second Prize</Badge>
                  <Badge variant="outline">2024</Badge>
                </div>
                <CardTitle className="text-xl">Ideathon</CardTitle>
                <p className="text-muted-foreground">Ananta Engineering College</p>
              </CardHeader>
            </Card>
          </div>

          {/* Presentations */}
          <div className="mt-6">
            <h3 className="font-semibold text-lg mb-4">Paper Presentations</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <Badge variant="secondary">Presented</Badge>
                    <div>
                      <p className="font-medium">NCAIBIA'25 National Level Conference</p>
                      <p className="text-sm text-muted-foreground">Research Paper Presentation</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <Badge variant="secondary">Presented</Badge>
                    <div>
                      <p className="font-medium">Hackerz, CIT</p>
                      <p className="text-sm text-muted-foreground">Paper Presentation</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="mb-8 text-center">
            <h2 className="font-heading text-3xl font-bold mb-4">Hackathons & Events Participated</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Intel GenAI Hackathon'24 */}
            <Card className="hover:shadow-lg transition-shadow overflow-hidden">
              <div className="aspect-video">
                <EventImage 
                  src="/hackathons/intel-genai-24.jpg" 
                  alt="Intel GenAI Hackathon'24" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <CardHeader className="pb-4">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <Badge variant="outline">2024</Badge>
                </div>
                <CardTitle className="text-lg">Intel GenAI Hackathon'24</CardTitle>
                <p className="text-sm text-muted-foreground">KPR University</p>
              </CardHeader>
            </Card>

            {/* 48hr HackDay Edition 1 */}
            <Card className="hover:shadow-lg transition-shadow overflow-hidden">
              <div className="aspect-video">
                <EventImage 
                  src="/hackathons/48hr-hackday.jpg" 
                  alt="48hr HackDay Edition 1" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <CardHeader className="pb-4">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <Badge variant="outline">2024</Badge>
                </div>
                <CardTitle className="text-lg">48hr HackDay Edition 1</CardTitle>
                <p className="text-sm text-muted-foreground">Sri Manakula Vinayagar College</p>
              </CardHeader>
            </Card>

            {/* INNOWEL */}
            <Card className="hover:shadow-lg transition-shadow overflow-hidden">
              <div className="aspect-video">
                <EventImage 
                  src="/hackathons/innowel.jpg" 
                  alt="INNOWEL" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <CardHeader className="pb-4">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <Badge variant="outline">2024</Badge>
                </div>
                <CardTitle className="text-lg">INNOWEL</CardTitle>
                <p className="text-sm text-muted-foreground">Sri Venkateswara College of Engineering (SVCE)</p>
              </CardHeader>
            </Card>

            {/* HackerOverFlow 3.0 */}
            <Card className="hover:shadow-lg transition-shadow overflow-hidden">
              <div className="aspect-video">
                <EventImage 
                  src="/hackathons/hackeroverflow-30.jpg" 
                  alt="HackerOverFlow 3.0" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <CardHeader className="pb-4">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <Badge variant="outline">2024</Badge>
                </div>
                <CardTitle className="text-lg">HackerOverFlow 3.0</CardTitle>
                <p className="text-sm text-muted-foreground">Rajalakshmi Engineering College (REC)</p>
              </CardHeader>
            </Card>

            {/* Smart Hacks 2K24 */}
            <Card className="hover:shadow-lg transition-shadow overflow-hidden">
              <div className="aspect-video">
                <EventImage 
                  src="/hackathons/smart-hacks-24.jpg" 
                  alt="Smart Hacks 2K24" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <CardHeader className="pb-4">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <Badge variant="outline">2024</Badge>
                </div>
                <CardTitle className="text-lg">Smart Hacks 2K24</CardTitle>
                <p className="text-sm text-muted-foreground">Anurag University</p>
              </CardHeader>
            </Card>

            {/* HackVerse'24 */}
            <Card className="hover:shadow-lg transition-shadow overflow-hidden">
              <div className="aspect-video">
                <EventImage 
                  src="/hackathons/hackverse-24.jpg" 
                  alt="HackVerse'24" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <CardHeader className="pb-4">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <Badge variant="outline">2024</Badge>
                </div>
                <CardTitle className="text-lg">HackVerse'24</CardTitle>
                <p className="text-sm text-muted-foreground">SRM Institute of Science and Technology</p>
              </CardHeader>
            </Card>

            {/* Hackverse 25, NITK */}
            <Card className="hover:shadow-lg transition-shadow overflow-hidden">
              <div className="aspect-video">
                <EventImage 
                  src="/hackathons/hackverse-25-nitk.jpg" 
                  alt="Hackverse 25 NITK" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <CardHeader className="pb-4">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <Badge variant="outline">2025</Badge>
                </div>
                <CardTitle className="text-lg">Hackverse 25</CardTitle>
                <p className="text-sm text-muted-foreground">NITK</p>
              </CardHeader>
            </Card>

            {/* CODEATHON 2K23 */}
            <Card className="hover:shadow-lg transition-shadow overflow-hidden">
              <div className="aspect-video">
                <EventImage 
                  src="/hackathons/codeathon-23.jpg" 
                  alt="CODEATHON 2K23" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <CardHeader className="pb-4">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <Badge variant="outline">2023</Badge>
                </div>
                <CardTitle className="text-lg">CODEATHON 2K23</CardTitle>
                <p className="text-sm text-muted-foreground">Velammal Engineering College</p>
              </CardHeader>
            </Card>

            {/* NITK 23 */}
            <Card className="hover:shadow-lg transition-shadow overflow-hidden">
              <div className="aspect-video">
                <EventImage 
                  src="/hackathons/hackverse-23-nitk.jpg" 
                  alt="Debugging Pattern Printing Event" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <CardHeader className="pb-4">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <Badge variant="outline">2023</Badge>
                </div>
                <CardTitle className="text-lg">Hackverse '23</CardTitle>
                <p className="text-sm text-muted-foreground">NITK</p>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted/30">
        <div className="container-max">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center mr-4 overflow-hidden">
                <EventImage 
                  src="/hackathons/blackops-logo.jpg" 
                  alt="BlackOps Logo" 
                  className="rounded" 
                />
              </div>
              <h2 className="font-heading text-3xl font-bold">Team BlackOps</h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
              The technical powerhouse behind successful hackathon events and competitive programming excellence
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              As one of the founding members of BlackOps, I've been instrumental in building this organization from the
              ground up. Our team specializes in competitive programming, hackathon organization, and technical
              innovation, creating a collaborative environment for developers and tech enthusiasts to excel in
              competitive events.
            </p>
          </div>

          {/* Team Photos Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <Card className="overflow-hidden">
              <div className="aspect-square">
                <EventImage 
                  src="/hackathons/team-photo-1.jpg" 
                  alt="BlackOps Team Photo 1" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </Card>
            <Card className="overflow-hidden">
              <div className="aspect-square">
                <EventImage 
                  src="/hackathons/team-photo-2.jpg" 
                  alt="BlackOps Team Photo 2" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </Card>
            <Card className="overflow-hidden">
              <div className="aspect-square">
                <EventImage 
                  src="/hackathons/team-photo-3.jpg" 
                  alt="BlackOps Team Photo 3" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </Card>
            <Card className="overflow-hidden md:col-span-2">
              <div className="aspect-video">
                <EventImage 
                  src="/hackathons/team-group-photo.jpg" 
                  alt="BlackOps Team Group Photo" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </Card>
            <Card className="overflow-hidden">
              <div className="aspect-square">
                <EventImage 
                  src="/hackathons/team-photo-5.jpg" 
                  alt="BlackOps Team Photo 5" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <CardContent className="p-6">
                <div className="text-center">
                  <h3 className="text-lg font-bold text-slate-800 mb-4">Founding Members</h3>
                  <div className="space-y-2 mb-4">
                    <p className="text-sm font-medium text-slate-700">Siddharth Magesh</p>
                    <p className="text-sm font-medium text-slate-700">Pranesh Kumar V</p>
                    <p className="text-sm font-medium text-slate-700">Samuel Stephen Deva Paul</p>
                    <p className="text-sm font-medium text-slate-700">Waatson J</p>
                    <p className="text-sm font-medium text-slate-700">Arjun V L</p>
                    <p className="text-sm font-medium text-slate-700">Mohammad Yasir</p>
                  </div>
                  <p className="text-xs text-muted-foreground italic leading-relaxed">
                    "And to all those unlisted names, you still are part of this organization and your contributions matter."
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Team Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <Card className="text-center p-6">
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Events Organized</div>
            </Card>
            <Card className="text-center p-6">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Participants</div>
            </Card>
            <Card className="text-center p-6">
              <div className="text-3xl font-bold text-primary mb-2">5</div>
              <div className="text-sm text-muted-foreground">Major Wins</div>
            </Card>
            <Card className="text-center p-6">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Projects</div>
            </Card>
          </div>

          {/* Contact */}
          <Card className="text-center p-8">
            <h3 className="font-heading text-xl font-bold mb-4">Get in Touch with BlackOps</h3>
            <p className="text-muted-foreground mb-6">
              Interested in collaboration, event organization, or technical partnerships?
            </p>
            <div className="flex items-center justify-center gap-2 mb-4">
              <Mail className="h-5 w-5 text-primary" />
              <a href="mailto:blackopsorg2226@gmail.com" className="text-primary hover:underline font-medium">
                blackopsorg2226@gmail.com
              </a>
            </div>
            <Button asChild>
              <Link href="/contact">Contact for More Information</Link>
            </Button>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
