"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowLeft, Lightbulb, Sparkles, Brain, Wrench, Users, TrendingUp, Scale, AlertTriangle, CheckCircle, XCircle, Handshake, GraduationCap, Cpu } from "lucide-react"
import Link from "next/link"
import { FadeIn, SlideIn, StaggerContainer, StaggerItem } from "@/components/animations"

export default function AIReplacingHumansJobsArticlePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber/10 via-background to-rose/10" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-rose/15 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-4">
          <FadeIn>
            <Link href="/articles">
              <Button variant="ghost" className="mb-8 -ml-2 text-muted-foreground hover:text-primary">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Articles
              </Button>
            </Link>
          </FadeIn>

          <SlideIn direction="up">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <Badge className="badge-amber">Future of Work</Badge>
              <Badge variant="outline" className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                Aug 28, 2025
              </Badge>
              <Badge variant="outline" className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                14 min read
              </Badge>
            </div>
          </SlideIn>

          <SlideIn direction="up" delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Will AI Replace Humans in Jobs?{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber to-rose">My Perspective</span>
            </h1>
          </SlideIn>

          <SlideIn direction="up" delay={0.2}>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              An in-depth analysis of whether artificial intelligence will truly replace human workers, exploring collaboration possibilities, job transformation, and the evolving nature of work.
            </p>
          </SlideIn>

          <SlideIn direction="up" delay={0.3}>
            <div className="flex items-center gap-4 p-4 bg-card/50 backdrop-blur-sm rounded-xl border border-border">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber to-rose flex items-center justify-center text-white font-bold">
                SM
              </div>
              <div>
                <p className="font-medium text-foreground">Siddharth Magesh</p>
                <p className="text-sm text-muted-foreground">AI Researcher & Workforce Analyst</p>
              </div>
            </div>
          </SlideIn>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="py-8 border-y border-border bg-muted/30">
        <div className="max-w-4xl mx-auto px-4">
          <FadeIn>
            <div className="flex items-center gap-2 mb-4">
              <Lightbulb className="w-5 h-5 text-amber" />
              <h2 className="font-semibold text-foreground">Key Takeaways</h2>
            </div>
            <StaggerContainer className="grid md:grid-cols-3 gap-4" staggerDelay={0.1}>
              {[
                "AI targets cognitive tasks; physical jobs remain largely safe",
                "Hybrid human-AI collaboration is the most likely future",
                "Brain jobs face higher risk than muscle jobs currently"
              ].map((takeaway, index) => (
                <StaggerItem key={index}>
                  <div className="flex items-start gap-2 p-3 bg-card rounded-lg border border-border">
                    <Sparkles className="w-4 h-4 text-amber mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">{takeaway}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </FadeIn>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <FadeIn>
            <Card className="bg-card/80 backdrop-blur-sm border-amber/20 shadow-xl">
              <CardContent className="p-8 md:p-12">
                <div className="prose prose-lg max-w-none">

                  {/* Section 1 */}
                  <SlideIn direction="up">
                    <h2 className="text-3xl font-bold text-foreground mb-6 mt-0 flex items-center gap-3">
                      <Scale className="w-8 h-8 text-amber" />
                      The Great Replacement Debate: Brain vs. Muscle
                    </h2>
                    <p className="text-foreground/90 leading-relaxed mb-6">
                      Every few months, another headline screams about AI coming for our jobs, usually accompanied by a dystopian image of robots in hard hats or algorithms wearing business suits. But here's the thing everyone seems to be missing in this conversation: we're not building AI to replace humans wholesale. We're specifically targeting one half of human capability – the brain – while largely ignoring the other half – the muscle.
                    </p>

                    <p className="text-foreground/90 leading-relaxed mb-6">
                      This distinction isn't just semantic; it's the key to understanding which jobs will actually be displaced by AI and which will remain stubbornly, irreplaceably human. The current AI revolution is fundamentally about cognitive automation, not physical replacement. And that changes everything about how we should think about the future of work.
                    </p>
                  </SlideIn>

                  {/* Section 2 */}
                  <SlideIn direction="up" delay={0.1}>
                    <h2 className="text-3xl font-bold text-foreground mb-6 mt-12 flex items-center gap-3">
                      <Brain className="w-8 h-8 text-violet" />
                      The Cognitive Revolution: When Thinking Becomes Automated
                    </h2>
                    <p className="text-foreground/90 leading-relaxed mb-6">
                      Let's start with the obvious: AI is exceptionally good at thinking-heavy tasks. Large language models can write, analyze, code, and reason through complex problems. Computer vision systems can diagnose medical conditions from X-rays more accurately than experienced radiologists. Machine learning algorithms can predict market trends, optimize supply chains, and detect fraud patterns that would take human analysts months to uncover.
                    </p>

                    <p className="text-foreground/90 leading-relaxed mb-6">
                      These are all "brain jobs" – positions where the primary value comes from cognitive processing rather than physical manipulation of the world. A financial analyst spends their day thinking through data, not moving boxes. A lawyer researches precedents and constructs arguments, not assembling machinery. A radiologist interprets medical images, not performing surgery.
                    </p>

                    <div className="my-8 p-6 bg-gradient-to-r from-violet/10 to-primary/10 rounded-xl border border-violet/20">
                      <p className="text-foreground/90 leading-relaxed mb-0">
                        <strong>Here's where it gets interesting:</strong> Jobs that are purely cognitive are genuinely at risk of replacement. When a task requires only thinking, pattern recognition, and information processing – and doesn't require physical interaction with the unpredictable real world – AI systems can often match or exceed human performance while working faster, cheaper, and without needing coffee breaks.
                      </p>
                    </div>
                  </SlideIn>

                  {/* Section 3 */}
                  <SlideIn direction="up" delay={0.1}>
                    <h2 className="text-3xl font-bold text-foreground mb-6 mt-12 flex items-center gap-3">
                      <Wrench className="w-8 h-8 text-emerald" />
                      The Physical World Problem
                    </h2>
                    <p className="text-foreground/90 leading-relaxed mb-6">
                      Despite decades of advancement in robotics, we still don't have machines that can reliably perform many tasks that a five-year-old human can master. Folding laundry, cleaning a messy room, fixing a leaky pipe, or preparing a meal in a real kitchen – these seemingly simple tasks remain incredibly challenging for artificial systems.
                    </p>

                    <p className="text-foreground/90 leading-relaxed mb-6">
                      The reason isn't lack of trying or investment. It's that the physical world is messy, unpredictable, and requires a type of intelligence that we've barely begun to crack. When a plumber encounters a unique pipe configuration in a 100-year-old house, they don't just apply memorized procedures – they improvise, adapt, and use spatial reasoning that current AI systems simply can't match.
                    </p>

                    <p className="text-foreground/90 leading-relaxed mb-6">
                      This is why a radiologist (brain-heavy job) might be more vulnerable to AI replacement than a plumber (muscle-heavy job), even though we generally consider radiology to be more skilled and higher-paying work. The radiologist's job is primarily about pattern recognition in standardized medical images. The plumber's job is about manipulating physical objects in unpredictable environments.
                    </p>
                  </SlideIn>

                  {/* Quote Block */}
                  <SlideIn direction="up" delay={0.1}>
                    <blockquote className="my-10 p-6 border-l-4 border-amber bg-gradient-to-r from-amber/10 to-transparent rounded-r-xl">
                      <p className="text-xl italic text-foreground/90 mb-0">
                        "We're replacing the brain before the muscle. This creates a unique moment where traditional relationships between skill level and job security may be temporarily inverted."
                      </p>
                    </blockquote>
                  </SlideIn>

                  {/* Vulnerability Spectrum */}
                  <SlideIn direction="up" delay={0.1}>
                    <h2 className="text-3xl font-bold text-foreground mb-6 mt-12 flex items-center gap-3">
                      <AlertTriangle className="w-8 h-8 text-rose" />
                      The Spectrum of Vulnerability
                    </h2>
                    <p className="text-foreground/90 leading-relaxed mb-8">
                      To understand which jobs are most vulnerable to AI replacement, we need to think about them along a spectrum from pure cognitive work to pure physical work:
                    </p>

                    <div className="grid md:grid-cols-3 gap-4 my-8">
                      <Card className="border-rose/30 bg-rose/5">
                        <CardContent className="p-5">
                          <div className="flex items-center gap-2 mb-3">
                            <XCircle className="w-5 h-5 text-rose" />
                            <h4 className="font-bold text-rose">High Vulnerability</h4>
                          </div>
                          <p className="text-xs text-muted-foreground mb-3">(Brain-Heavy)</p>
                          <ul className="text-sm text-foreground/80 space-y-1">
                            <li>• Data analysts</li>
                            <li>• Basic content writers</li>
                            <li>• Simple customer service</li>
                            <li>• Financial advisors</li>
                            <li>• Routine radiologists</li>
                          </ul>
                        </CardContent>
                      </Card>

                      <Card className="border-amber/30 bg-amber/5">
                        <CardContent className="p-5">
                          <div className="flex items-center gap-2 mb-3">
                            <AlertTriangle className="w-5 h-5 text-amber" />
                            <h4 className="font-bold text-amber">Medium Vulnerability</h4>
                          </div>
                          <p className="text-xs text-muted-foreground mb-3">(Hybrid)</p>
                          <ul className="text-sm text-foreground/80 space-y-1">
                            <li>• Teachers</li>
                            <li>• Doctors</li>
                            <li>• Lawyers</li>
                            <li>• Engineers</li>
                            <li>• Managers</li>
                          </ul>
                        </CardContent>
                      </Card>

                      <Card className="border-emerald/30 bg-emerald/5">
                        <CardContent className="p-5">
                          <div className="flex items-center gap-2 mb-3">
                            <CheckCircle className="w-5 h-5 text-emerald" />
                            <h4 className="font-bold text-emerald">Low Vulnerability</h4>
                          </div>
                          <p className="text-xs text-muted-foreground mb-3">(Muscle-Heavy)</p>
                          <ul className="text-sm text-foreground/80 space-y-1">
                            <li>• Plumbers & electricians</li>
                            <li>• Physical therapists</li>
                            <li>• Skilled chefs</li>
                            <li>• Maintenance workers</li>
                            <li>• Construction workers</li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </SlideIn>

                  {/* Section 4 */}
                  <SlideIn direction="up" delay={0.1}>
                    <h2 className="text-3xl font-bold text-foreground mb-6 mt-12 flex items-center gap-3">
                      <Handshake className="w-8 h-8 text-primary" />
                      The Collaboration Revolution
                    </h2>
                    <p className="text-foreground/90 leading-relaxed mb-6">
                      Rather than outright replacement, many jobs will evolve into human-AI collaboration models. This is already happening in various fields:
                    </p>

                    <div className="my-8 p-6 bg-gradient-to-r from-primary/10 to-violet/10 rounded-xl border border-primary/20">
                      <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                        <Users className="w-5 h-5 text-primary" />
                        Current AI Collaboration Examples
                      </h3>
                      <div className="space-y-3">
                        {[
                          { title: "Augmented Medicine", desc: "Radiologists using AI for routine scans while focusing on complex cases" },
                          { title: "AI-Assisted Writing", desc: "Content creators using AI for research and drafts while focusing on strategy" },
                          { title: "Enhanced Finance", desc: "Advisors using AI for data processing while focusing on client relationships" }
                        ].map((item, index) => (
                          <div key={index} className="flex items-start gap-3 p-3 bg-card/50 rounded-lg">
                            <Sparkles className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                            <div>
                              <span className="font-semibold text-foreground">{item.title}:</span>
                              <span className="text-foreground/80 ml-1">{item.desc}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </SlideIn>

                  {/* Section 5 */}
                  <SlideIn direction="up" delay={0.1}>
                    <h2 className="text-3xl font-bold text-foreground mb-6 mt-12 flex items-center gap-3">
                      <Cpu className="w-8 h-8 text-teal" />
                      The Physical Bottleneck
                    </h2>
                    <p className="text-foreground/90 leading-relaxed mb-6">
                      The timeline for job replacement is ultimately limited by our progress in mechanical automation. Even if we achieve artificial general intelligence tomorrow, most jobs would remain safe until we also achieve mechanical general capability.
                    </p>

                    <p className="text-foreground/90 leading-relaxed mb-6">
                      Current robotics faces fundamental challenges: dexterity limitations, environmental adaptability, cost factors, and energy efficiency. Human hands can perform thousands of manipulation tasks with incredible precision. Robots typically require controlled, predictable environments and often cost significantly more than human labor.
                    </p>
                  </SlideIn>

                  {/* Timeline Section */}
                  <SlideIn direction="up" delay={0.1}>
                    <h2 className="text-3xl font-bold text-foreground mb-6 mt-12 flex items-center gap-3">
                      <TrendingUp className="w-8 h-8 text-amber" />
                      The Timeline Question
                    </h2>
                    <p className="text-foreground/90 leading-relaxed mb-8">
                      The pace of job transformation will vary significantly by sector and role type. We're likely to see:
                    </p>

                    <div className="space-y-4 my-8">
                      {[
                        { phase: "Immediate Changes", period: "Next 2-5 Years", desc: "Continued automation of routine cognitive tasks and enhanced AI assistance tools", color: "rose" },
                        { phase: "Medium-Term Evolution", period: "5-15 Years", desc: "Sophisticated AI collaboration tools and emergence of new hybrid job categories", color: "amber" },
                        { phase: "Long-Term Transformation", period: "15+ Years", desc: "Potentially significant advances in robotics, though timeline remains uncertain", color: "emerald" }
                      ].map((item, index) => (
                        <Card key={index} className={`card-accent-${item.color}`}>
                          <CardContent className="p-5">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-bold text-foreground">{item.phase}</h4>
                              <Badge className={`badge-${item.color}`}>{item.period}</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">{item.desc}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </SlideIn>

                  {/* Section 6 */}
                  <SlideIn direction="up" delay={0.1}>
                    <h2 className="text-3xl font-bold text-foreground mb-6 mt-12 flex items-center gap-3">
                      <GraduationCap className="w-8 h-8 text-violet" />
                      The Skills Evolution
                    </h2>
                    <p className="text-foreground/90 leading-relaxed mb-6">
                      As the job market evolves, certain skills will become increasingly valuable:
                    </p>

                    <div className="grid md:grid-cols-2 gap-4 my-8">
                      {[
                        { skill: "AI Collaboration", desc: "Working effectively with AI tools and systems" },
                        { skill: "Physical World Expertise", desc: "Hands-on skills that require real-world manipulation" },
                        { skill: "Emotional Intelligence", desc: "Understanding and managing human emotions" },
                        { skill: "Creative Problem-Solving", desc: "Novel approaches to unique challenges" },
                        { skill: "Systems Thinking", desc: "Understanding complex interconnected systems" },
                        { skill: "Adaptability", desc: "Continuous learning and role evolution" }
                      ].map((item, index) => (
                        <div key={index} className="flex items-start gap-3 p-4 bg-violet/5 rounded-lg border border-violet/20">
                          <CheckCircle className="w-5 h-5 text-violet mt-0.5 flex-shrink-0" />
                          <div>
                            <h4 className="font-semibold text-foreground">{item.skill}</h4>
                            <p className="text-sm text-muted-foreground">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <p className="text-foreground/90 leading-relaxed mb-6">
                      These represent the distinctly human capabilities that will remain relevant in an AI-enhanced world.
                    </p>
                  </SlideIn>

                  {/* Conclusion Box */}
                  <SlideIn direction="up" delay={0.1}>
                    <div className="my-12 p-8 bg-gradient-to-br from-amber/10 via-rose/10 to-primary/10 rounded-2xl border border-amber/20">
                      <h2 className="text-2xl font-bold text-foreground mb-4">Conclusion: The Future is Hybrid, Not Replacement</h2>
                      <p className="text-foreground/90 leading-relaxed mb-4">
                        The question "Will AI replace humans in jobs?" is missing the point. The real question is: "How will human work evolve as we automate cognitive tasks while physical tasks remain largely human?"
                      </p>
                      <p className="text-foreground/90 leading-relaxed mb-4">
                        We're heading toward a hybrid future where pure cognitive roles see the most transformation, physical roles remain largely human, and most jobs evolve into human-AI collaboration rather than pure replacement.
                      </p>
                      <p className="text-foreground/90 leading-relaxed mb-0">
                        Rather than fearing this future, we should prepare for it by developing skills that complement AI capabilities and recognizing that the most secure jobs may be those that require both thinking and doing in the messy, unpredictable real world.
                      </p>
                    </div>
                  </SlideIn>

                  {/* Final Statement */}
                  <SlideIn direction="up" delay={0.1}>
                    <div className="text-center mt-12 p-8 bg-gradient-to-r from-amber/5 to-rose/5 rounded-xl">
                      <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber to-rose mb-4">
                        The robots aren't coming for all our jobs.
                      </p>
                      <p className="text-lg text-foreground/80">
                        They're coming for the thinking parts first, and they're going to need our help with everything else.
                      </p>
                    </div>

                    <p className="text-sm text-muted-foreground italic mt-8 text-center">
                      This article represents my analysis of AI's impact on employment. The future of work continues to evolve as technology advances and new forms of human-AI collaboration emerge.
                    </p>
                  </SlideIn>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </article>

      {/* Related Articles */}
      <section className="py-16 bg-muted/30 border-t border-border">
        <div className="max-w-4xl mx-auto px-4">
          <FadeIn>
            <h3 className="text-2xl font-bold text-foreground mb-8">Related Articles</h3>
          </FadeIn>
          <StaggerContainer className="grid md:grid-cols-2 gap-6" staggerDelay={0.1}>
            <StaggerItem>
              <Link href="/articles/agi-next-step-humanity">
                <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                  <CardContent className="p-6">
                    <Badge className="badge-primary mb-3">AI Philosophy</Badge>
                    <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      AGI: The Next Step Towards Humanity
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      My perspective on Artificial General Intelligence and why it represents the next evolutionary step for humanity...
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </StaggerItem>

            <StaggerItem>
              <Link href="/articles/ai-sports-commentary-future">
                <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                  <CardContent className="p-6">
                    <Badge className="badge-emerald mb-3">Sports Tech</Badge>
                    <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      AI Commentary on Sports
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Exploring how artificial intelligence will transform sports commentary, analysis, and fan engagement...
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>
    </div>
  )
}
