import Link from "next/link"
import { Github, Linkedin, Mail, Coffee, User, BarChart3, Code, GraduationCap, FileText, BookOpen, Trophy } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Siddharth Magesh</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              AI Researcher specializing in Natural Language Processing, Computer Vision, and Generative AI systems.
              Pursuing advanced research toward Artificial General Intelligence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link
                href="/research"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Research Projects
              </Link>
              <Link
                href="/experience"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Professional Experience
              </Link>
              <Link
                href="/hackathons"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Hackathons & Events
              </Link>
              <Link
                href="/contact"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Connect</h3>
            <div className="flex flex-wrap gap-3" role="list" aria-label="Social media links">
              <Link
                href="https://github.com/Siddharth-Magesh"
                className="text-muted-foreground hover:text-primary transition-colors p-1 rounded-md"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
              >
                <Github className="h-5 w-5" aria-hidden="true" />
              </Link>
              <Link
                href="https://linkedin.com/in/siddharth-magesh"
                className="text-muted-foreground hover:text-primary transition-colors p-1 rounded-md"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="h-5 w-5" aria-hidden="true" />
              </Link>
              <Link
                href="mailto:siddharthmagesh007@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors p-1 rounded-md"
                aria-label="Send email"
              >
                <Mail className="h-5 w-5" aria-hidden="true" />
              </Link>
              <Link
                href="https://app.onlinedegree.iitm.ac.in/student/22F3002579"
                className="text-muted-foreground hover:text-primary transition-colors p-1 rounded-md"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="IITM Online Degree portal"
              >
                <GraduationCap className="h-5 w-5" aria-hidden="true" />
              </Link>
              <Link
                href="https://dev.to/siddharth_magesh_e12b8505"
                className="text-muted-foreground hover:text-primary transition-colors p-1 rounded-md"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Dev.to blog"
              >
                <FileText className="h-5 w-5" aria-hidden="true" />
              </Link>
              <Link
                href="https://medium.com/@siddharthmagesh007"
                className="text-muted-foreground hover:text-primary transition-colors p-1 rounded-md"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Medium blog"
              >
                <BookOpen className="h-5 w-5" aria-hidden="true" />
              </Link>
              <Link
                href="https://www.hackerrank.com/profile/siddharthmagesh2"
                className="text-muted-foreground hover:text-primary transition-colors p-1 rounded-md"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="HackerRank profile"
              >
                <Trophy className="h-5 w-5" aria-hidden="true" />
              </Link>
              <Link
                href="https://buymeacoffee.com/Siddharth_Magesh"
                className="text-muted-foreground hover:text-primary transition-colors p-1 rounded-md"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Buy me a coffee"
              >
                <Coffee className="h-5 w-5" aria-hidden="true" />
              </Link>
              <Link
                href="https://huggingface.co/siddharth-magesh"
                className="text-muted-foreground hover:text-primary transition-colors p-1 rounded-md"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Hugging Face profile"
              >
                <User className="h-5 w-5" aria-hidden="true" />
              </Link>
              <Link
                href="https://www.kaggle.com/siddharthmagesh"
                className="text-muted-foreground hover:text-primary transition-colors p-1 rounded-md"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Kaggle profile"
              >
                <BarChart3 className="h-5 w-5" aria-hidden="true" />
              </Link>
              <Link
                href="https://devfolio.co/@SiddharthMagesh"
                className="text-muted-foreground hover:text-primary transition-colors p-1 rounded-md"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Devfolio profile"
              >
                <Code className="h-5 w-5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">© 2024 Siddharth Magesh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
