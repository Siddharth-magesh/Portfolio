import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const articles = [
  {
    id: "ai-operating-systems-future",
    title: "The Future of AI-Powered Operating Systems: Lessons from OSSARTH",
    description:
      "Exploring how artificial intelligence can revolutionize operating system design, from intelligent resource management to predictive user interfaces.",
    category: "AI Research",
    readTime: "8 min read",
    publishDate: "2024-12-15",
    featured: true,
  },
  {
    id: "agi-next-step-humanity",
    title: "AGI: The Next Step Towards Humanity",
    description:
      "My perspective on Artificial General Intelligence and why it represents the next evolutionary step for humanity, exploring its transformative impact on our society, ethics, and future.",
    category: "AI Philosophy",
    readTime: "12 min read",
    publishDate: "2025-08-28",
    featured: true,
  },
  {
    id: "ai-sports-commentary-future",
    title: "AI Commentary on Sports: Revolutionizing the Future of Athletic Broadcasting",
    description:
      "Exploring how artificial intelligence will transform sports commentary, analysis, and fan engagement, from real-time insights to personalized viewing experiences.",
    category: "Sports Tech",
    readTime: "10 min read",
    publishDate: "2025-08-28",
    featured: false,
  },
  {
    id: "ai-replacing-humans-jobs",
    title: "Will AI Replace Humans in Jobs? My Perspective on the Future of Work",
    description:
      "An in-depth analysis of whether artificial intelligence will truly replace human workers, exploring collaboration possibilities, job transformation, and the evolving nature of work.",
    category: "Future of Work",
    readTime: "14 min read",
    publishDate: "2025-08-28",
    featured: false,
  }
]

export default function ArticlesPage() {
  const featuredArticles = articles.filter((article) => article.featured)
  const regularArticles = articles.filter((article) => !article.featured)

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="bg-background">
        <div className="max-w-6xl mx-auto px-4 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-foreground mb-4">Research Articles & Insights</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Sharing thoughts on artificial intelligence, research methodologies, and the intersection of technology with
              real-world problem solving.
            </p>
          </div>

          {/* Featured Articles */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-foreground mb-8">Featured Articles</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredArticles.map((article) => (
                <Card key={article.id} className="group hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{article.category}</Badge>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(article.publishDate).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {article.readTime}
                        </div>
                      </div>
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      <Link href={`/articles/${article.id}`}>{article.title}</Link>
                    </CardTitle>
                    <CardDescription className="text-base">{article.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link
                      href={`/articles/${article.id}`}
                      className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
                    >
                      Read Article
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* All Articles */}
          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-8">All Articles</h2>
            <div className="grid gap-6">
              {regularArticles.map((article) => (
                <Card key={article.id} className="group hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-3">
                          <Badge variant="outline">{article.category}</Badge>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {new Date(article.publishDate).toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              })}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {article.readTime}
                            </div>
                          </div>
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                          <Link href={`/articles/${article.id}`}>{article.title}</Link>
                        </h3>
                        <p className="text-muted-foreground mb-4">{article.description}</p>
                        <Link
                          href={`/articles/${article.id}`}
                          className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
                        >
                          Read More
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16">
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-semibold text-foreground mb-4">Stay Updated with Latest Research</h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Get notified when I publish new articles about AI research, innovative projects, and insights from the
                  world of artificial intelligence.
                </p>
                <div className="flex max-w-md mx-auto gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-2 border border-input rounded-md bg-background"
                  />
                  <button className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
                    Subscribe
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
