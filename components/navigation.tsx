"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useLoading } from "@/contexts/LoadingContext"

const navigationItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Research", href: "/research" },
  { name: "Experience", href: "/experience" },
  { name: "Projects", href: "/projects" },
  { name: "Leadership", href: "/leadership" },
  { name: "Hackathons", href: "/hackathons" },
  { name: "Articles", href: "/articles" },
  { name: "Contact", href: "/contact" },
]

interface NavigationProps {
  onLogoClick?: () => void
}

export function Navigation({ onLogoClick }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { triggerLoading } = useLoading()

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault()
    if (!mounted) return
    
    if (onLogoClick) {
      onLogoClick()
    } else {
      triggerLoading('/')
    }
  }

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container-max">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2" onClick={handleLogoClick}>
            <span className="font-heading font-bold text-2xl lg:text-3xl text-primary hover:text-primary/80 transition-colors">
              Siddharth Magesh
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-all duration-200 hover:scale-105 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
