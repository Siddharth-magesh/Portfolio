import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft, Search } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center space-y-8">
        {/* 404 Display */}
        <div className="space-y-2">
          <h1 className="text-8xl font-bold text-primary/20">404</h1>
          <h2 className="text-2xl font-bold text-foreground">
            Page Not Found
          </h2>
          <p className="text-muted-foreground">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        {/* Helpful Links */}
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Here are some helpful links:
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            <Button variant="outline" size="sm" asChild>
              <Link href="/">Home</Link>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <Link href="/projects">Projects</Link>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <Link href="/research">Research</Link>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <Link href="/about">About</Link>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <Link href="/contact">Contact</Link>
            </Button>
          </div>
        </div>

        {/* Main Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
          <Button asChild>
            <Link href="/">
              <Home className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/contact">
              <Search className="w-4 h-4 mr-2" />
              Contact Me
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
