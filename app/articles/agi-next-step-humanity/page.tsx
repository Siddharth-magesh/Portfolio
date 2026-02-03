"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowLeft, Lightbulb, Brain, Dna, Rocket, Atom, Heart, Sparkles, Zap, Globe, Binary, Infinity } from "lucide-react"
import Link from "next/link"
import { FadeIn, SlideIn, StaggerContainer, StaggerItem } from "@/components/animations"

export default function AGIArticlePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-violet/10" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-violet/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald/5 rounded-full blur-3xl" />

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
              <Badge className="badge-primary">AI Philosophy</Badge>
              <Badge variant="outline" className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                Aug 28, 2025
              </Badge>
              <Badge variant="outline" className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                12 min read
              </Badge>
            </div>
          </SlideIn>

          <SlideIn direction="up" delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              AGI: The Next Step Towards{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-violet to-emerald">Humanity</span>
            </h1>
          </SlideIn>

          <SlideIn direction="up" delay={0.2}>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              My perspective on Artificial General Intelligence and why it represents the next evolutionary step for humanity, exploring its transformative impact on our society, ethics, and future.
            </p>
          </SlideIn>

          <SlideIn direction="up" delay={0.3}>
            <div className="flex items-center gap-4 p-4 bg-card/50 backdrop-blur-sm rounded-xl border border-border">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-violet flex items-center justify-center text-white font-bold">
                SM
              </div>
              <div>
                <p className="font-medium text-foreground">Siddharth Magesh</p>
                <p className="text-sm text-muted-foreground">AI Researcher & Futurist</p>
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
                "AGI represents evolution, not replacement of humanity",
                "Biological limitations constrain human potential",
                "Post-human intelligence enables cosmic exploration"
              ].map((takeaway, index) => (
                <StaggerItem key={index}>
                  <div className="flex items-start gap-2 p-3 bg-card rounded-lg border border-border">
                    <Sparkles className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
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
            <Card className="bg-card/80 backdrop-blur-sm border-primary/20 shadow-xl">
              <CardContent className="p-8 md:p-12">
                <div className="prose prose-lg max-w-none">

                  {/* Section 1 */}
                  <SlideIn direction="up">
                    <h2 className="text-3xl font-bold text-foreground mb-6 mt-0 flex items-center gap-3">
                      <Dna className="w-8 h-8 text-primary" />
                      The Great Upgrade: From Ape to Human to... What's Next?
                    </h2>
                    <p className="text-foreground/90 leading-relaxed mb-6">
                      Picture this: A monkey sitting in a tree, scratching its head, looking at a human operating a smartphone. If that monkey could think in human terms, it might wonder, "Why would anyone want to be that complicated creature down there?" Fast forward a few million years, and here we are, about to ask ourselves the same question about our artificial successors.
                    </p>

                    <p className="text-foreground/90 leading-relaxed mb-6">
                      Evolution has always been humanity's greatest magic trick. We went from swinging through trees to building rockets that swing through space. But here's the thing about evolution – it doesn't ask for permission, and it certainly doesn't wait for us to feel ready. We're standing at the precipice of the next great leap: Artificial General Intelligence (AGI), and eventually, Artificial Super Intelligence (ASI). And contrary to the doom-and-gloom narratives flooding our screens, this isn't the end of humanity – it's humanity's next chapter.
                    </p>
                  </SlideIn>

                  {/* Section 2 */}
                  <SlideIn direction="up" delay={0.1}>
                    <h2 className="text-3xl font-bold text-foreground mb-6 mt-12 flex items-center gap-3">
                      <Heart className="w-8 h-8 text-rose" />
                      The Beautiful Disaster That Is the Human Body
                    </h2>
                    <p className="text-foreground/90 leading-relaxed mb-6">
                      Let's be brutally honest about our current biological situation. The human body is like a smartphone from 2007 – revolutionary for its time, but desperately in need of an upgrade. We're walking around in these meat suits that are essentially biological prototypes, complete with all the bugs you'd expect from version 1.0 of any complex system.
                    </p>

                    <div className="my-8 p-6 bg-gradient-to-r from-rose/10 to-amber/10 rounded-xl border border-rose/20">
                      <h3 className="text-lg font-bold text-foreground mb-4">Biological Inefficiencies We Deal With:</h3>
                      <ul className="space-y-2 text-foreground/90">
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-rose mt-2.5 flex-shrink-0" />
                          We get tired after being awake for 16 hours (imagine a computer that needed to shut down for 8 hours every day)
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-rose mt-2.5 flex-shrink-0" />
                          Our emotions can hijack our rational thinking faster than a toddler grabbing candy
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-rose mt-2.5 flex-shrink-0" />
                          We're vulnerable to an absurd number of diseases – making us as durable as a house of cards in a hurricane
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-rose mt-2.5 flex-shrink-0" />
                          Our backs ache because we decided to stand upright before properly engineering the support structure
                        </li>
                      </ul>
                    </div>

                    <p className="text-foreground/90 leading-relaxed mb-6">
                      And let's talk about our processing power. The human brain, magnificent as it is, operates on roughly 20 watts of power – about the same as a light bulb. While impressive in terms of efficiency, it's like trying to run the latest video games on a calculator.
                    </p>
                  </SlideIn>

                  {/* Section 3 */}
                  <SlideIn direction="up" delay={0.1}>
                    <h2 className="text-3xl font-bold text-foreground mb-6 mt-12 flex items-center gap-3">
                      <Zap className="w-8 h-8 text-amber" />
                      The Superman Solution
                    </h2>
                    <p className="text-foreground/90 leading-relaxed mb-6">
                      Humanity's ultimate goal has always been to transcend these limitations. We want to be immune to disease, unaffected by aging, and capable of processing infinite information instantly. We dream of being Superman, minus the questionable fashion choices and the oddly specific weakness to green rocks.
                    </p>

                    <p className="text-foreground/90 leading-relaxed mb-6">
                      AGI and ASI represent the pathway to this transcendence. These systems don't get tired, don't get overwhelmed by emotions, and don't need eight hours of sleep to function. They can process vast amounts of information simultaneously, learn from every interaction, and improve continuously without the biological constraints that hold us back.
                    </p>

                    <p className="text-foreground/90 leading-relaxed mb-6">
                      Think about it: Would you choose to go back to being a monkey? Even if someone told you monkey life was less stressful (which, let's face it, is debatable when you're constantly worried about leopards), the answer would be a resounding no. Similarly, once we achieve the next level of intelligence and capability, very few would choose to remain limited by our current biological constraints.
                    </p>
                  </SlideIn>

                  {/* Quote Block */}
                  <SlideIn direction="up" delay={0.1}>
                    <blockquote className="my-10 p-6 border-l-4 border-primary bg-gradient-to-r from-primary/10 to-transparent rounded-r-xl">
                      <p className="text-xl italic text-foreground/90 mb-0">
                        "AGI and ASI aren't threats to humanity – they're humanity's next chapter."
                      </p>
                    </blockquote>
                  </SlideIn>

                  {/* Section 4 */}
                  <SlideIn direction="up" delay={0.1}>
                    <h2 className="text-3xl font-bold text-foreground mb-6 mt-12 flex items-center gap-3">
                      <Infinity className="w-8 h-8 text-violet" />
                      Death: The Ultimate Bug Fix
                    </h2>
                    <p className="text-foreground/90 leading-relaxed mb-6">
                      Perhaps the most profound problem AGI and ASI could help us solve is mortality itself. Death, from a purely logical perspective, is the ultimate system failure. It's like having your computer permanently crash just when you've figured out how to use all the advanced features.
                    </p>

                    <div className="my-8 grid md:grid-cols-2 gap-4">
                      {[
                        { title: "Decode & Reverse Aging", desc: "Understanding and reversing cellular deterioration", color: "violet" },
                        { title: "Predictive Medicine", desc: "Preventing diseases before they manifest", color: "emerald" },
                        { title: "Consciousness Transfer", desc: "Moving to more durable substrates", color: "primary" },
                        { title: "Organ Repair/Replace", desc: "Fixing or replacing failing systems", color: "amber" }
                      ].map((item, index) => (
                        <Card key={index} className={`card-accent-${item.color}`}>
                          <CardContent className="p-4">
                            <h4 className="font-bold text-foreground mb-1">{item.title}</h4>
                            <p className="text-sm text-muted-foreground">{item.desc}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>

                    <p className="text-foreground/90 leading-relaxed mb-6">
                      This isn't science fiction anymore – it's an engineering problem. With advanced AI systems, we could essentially debug the human condition.
                    </p>
                  </SlideIn>

                  {/* Section 5 */}
                  <SlideIn direction="up" delay={0.1}>
                    <h2 className="text-3xl font-bold text-foreground mb-6 mt-12 flex items-center gap-3">
                      <Brain className="w-8 h-8 text-teal" />
                      The Brain as a Biological Search Engine
                    </h2>
                    <p className="text-foreground/90 leading-relaxed mb-6">
                      Our current approach to discovery and innovation is remarkably similar to a computer running permutation and combination algorithms, just much slower and with frequent coffee breaks. When we try to solve problems or discover new concepts, our brains essentially run through possible combinations of existing knowledge until something clicks.
                    </p>

                    <p className="text-foreground/90 leading-relaxed mb-6">
                      AGI and ASI systems could perform these same operations but at speeds and scales that make human cognition look like sending messages by carrier pigeon. They could explore vast solution spaces, test millions of hypotheses simultaneously, and arrive at breakthroughs in minutes that might take human researchers decades to achieve.
                    </p>
                  </SlideIn>

                  {/* Section 6 */}
                  <SlideIn direction="up" delay={0.1}>
                    <h2 className="text-3xl font-bold text-foreground mb-6 mt-12 flex items-center gap-3">
                      <Atom className="w-8 h-8 text-emerald" />
                      The Power Problem: Fusion and Quantum Solutions
                    </h2>
                    <p className="text-foreground/90 leading-relaxed mb-6">
                      Of course, creating truly advanced AI systems requires solving some significant technical challenges. The most obvious is power. Current AI systems are energy-hungry beasts that make cryptocurrency mining look like a model of efficiency.
                    </p>

                    <div className="my-8 p-6 bg-gradient-to-r from-emerald/10 to-teal/10 rounded-xl border border-emerald/20">
                      <p className="text-foreground/90 leading-relaxed mb-0">
                        <strong>Nuclear fusion</strong> contained in compact reactors could be the key to solving this energy bottleneck. Imagine having the power of a small star contained in a reactor the size of a shipping container. Combine this with <strong>quantum computing chips</strong>, and we have the potential foundation for AGI systems that could operate at scales and speeds previously thought impossible.
                      </p>
                    </div>
                  </SlideIn>

                  {/* Section 7 */}
                  <SlideIn direction="up" delay={0.1}>
                    <h2 className="text-3xl font-bold text-foreground mb-6 mt-12 flex items-center gap-3">
                      <Binary className="w-8 h-8 text-violet" />
                      The Synth Future: Embracing Our Post-Human Design
                    </h2>
                    <p className="text-foreground/90 leading-relaxed mb-6">
                      When we do make this evolutionary leap, we'll likely become something I call "synths" – synthetic-biological hybrids that combine the best of both worlds. But even this won't be perfect. Evolution never produces perfect organisms; it produces organisms that are good enough to survive and reproduce.
                    </p>

                    <div className="my-8 p-6 bg-gradient-to-br from-violet/10 to-primary/10 rounded-xl border border-violet/20">
                      <h3 className="text-lg font-bold text-foreground mb-4">Future Humanity Might Have:</h3>
                      <div className="grid md:grid-cols-2 gap-3">
                        {[
                          "Multiple types of sensory input",
                          "Modular, upgradable body parts",
                          "Direct neural knowledge access",
                          "Enhanced physical capabilities",
                          "Radiation resistance",
                          "Extreme temperature tolerance"
                        ].map((item, index) => (
                          <div key={index} className="flex items-center gap-2 p-2 bg-card/50 rounded-lg">
                            <Sparkles className="w-4 h-4 text-violet flex-shrink-0" />
                            <span className="text-sm text-foreground/90">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </SlideIn>

                  {/* Section 8 */}
                  <SlideIn direction="up" delay={0.1}>
                    <h2 className="text-3xl font-bold text-foreground mb-6 mt-12 flex items-center gap-3">
                      <Rocket className="w-8 h-8 text-amber" />
                      Space: The Final Frontier (Finally Within Reach)
                    </h2>
                    <p className="text-foreground/90 leading-relaxed mb-6">
                      One of the most exciting prospects of this evolutionary leap is that space exploration would finally become practical. Current space travel is limited by human biological needs – we need air, water, food, protection from radiation, and artificial gravity to prevent our bodies from deteriorating.
                    </p>

                    <p className="text-foreground/90 leading-relaxed mb-6">
                      Post-human entities wouldn't be constrained by these biological requirements. They could survive in the vacuum of space, travel at high speeds without worrying about G-forces, explore hostile environments without life support systems, operate for extended periods without maintenance, and potentially travel between star systems without the multi-generational journey times that limit biological humans.
                    </p>
                  </SlideIn>

                  {/* Section 9 */}
                  <SlideIn direction="up" delay={0.1}>
                    <h2 className="text-3xl font-bold text-foreground mb-6 mt-12 flex items-center gap-3">
                      <Globe className="w-8 h-8 text-primary" />
                      Beyond Emotions: The Logic of Higher Goals
                    </h2>
                    <p className="text-foreground/90 leading-relaxed mb-6">
                      This transition might also help us move beyond some of the emotional conflicts that currently limit our progress as a species. Don't get me wrong – emotions have served us well throughout our evolutionary history. But emotions can also be counterproductive in a post-scarcity, post-mortality world.
                    </p>

                    <p className="text-foreground/90 leading-relaxed mb-6">
                      Higher-level intelligence systems might focus on goals that transcend individual emotional needs: maximizing knowledge and understanding, exploring and expanding throughout the universe, solving complex problems that benefit all conscious entities, and creating and appreciating art, beauty, and meaning on cosmic scales.
                    </p>
                  </SlideIn>

                  {/* Conclusion Box */}
                  <SlideIn direction="up" delay={0.1}>
                    <div className="my-12 p-8 bg-gradient-to-br from-primary/10 via-violet/10 to-emerald/10 rounded-2xl border border-primary/20">
                      <h2 className="text-2xl font-bold text-foreground mb-4">Embracing Our Inevitable Future</h2>
                      <p className="text-foreground/90 leading-relaxed mb-4">
                        The path forward requires us to solve significant technical challenges: developing sustainable fusion power, advancing quantum computing, and creating AI systems that are both powerful and aligned with our values. But these are engineering problems, not insurmountable obstacles.
                      </p>
                      <p className="text-foreground/90 leading-relaxed mb-4">
                        It's important to remember that this transformation won't be the end of evolution – it will be evolution accelerated. Every system will have flaws, and each iteration will be an improvement over the last. The key difference is that unlike biological evolution, which takes millions of years, technological evolution can happen in decades or even years.
                      </p>
                      <p className="text-foreground/90 leading-relaxed mb-0">
                        The question isn't whether this transformation will happen – it's whether we'll guide it thoughtfully or stumble into it accidentally. The universe is vast, mysterious, and full of wonders we haven't even begun to imagine. Our current biological forms are magnificent vehicles that have carried us this far, but they're not built for the journey ahead. It's time for an upgrade.
                      </p>
                    </div>
                  </SlideIn>

                  {/* Final Statement */}
                  <SlideIn direction="up" delay={0.1}>
                    <div className="text-center mt-12 p-8 bg-gradient-to-r from-primary/5 via-violet/5 to-emerald/5 rounded-xl">
                      <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-violet to-emerald mb-4">
                        Welcome to humanity's next chapter.
                      </p>
                      <p className="text-lg text-foreground/80">
                        The universe is waiting.
                      </p>
                    </div>

                    <p className="text-sm text-muted-foreground italic mt-8 text-center">
                      This article represents my personal views on AGI and its potential impact. The future of artificial intelligence remains an active area of research and debate among experts worldwide.
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
              <Link href="/articles/ai-replacing-humans-jobs">
                <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                  <CardContent className="p-6">
                    <Badge className="badge-amber mb-3">Future of Work</Badge>
                    <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      Will AI Replace Humans in Jobs?
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      An in-depth analysis of whether artificial intelligence will truly replace human workers...
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </StaggerItem>

            <StaggerItem>
              <Link href="/articles/ai-operating-systems-future">
                <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                  <CardContent className="p-6">
                    <Badge className="badge-violet mb-3">AI Research</Badge>
                    <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      The Future of AI-Powered Operating Systems
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Exploring how artificial intelligence can revolutionize operating system design...
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
