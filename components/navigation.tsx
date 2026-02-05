"use client"

import type React from "react"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useLoading } from "@/contexts/LoadingContext"
import { useMounted } from "@/hooks/use-mounted"

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

// Helper to check if a nav item is active
function isActiveLink(pathname: string, href: string): boolean {
  if (href === "/") {
    return pathname === "/"
  }
  return pathname.startsWith(href)
}

export function Navigation({ onLogoClick }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const mounted = useMounted()
  const pathname = usePathname()
  const { triggerLoading } = useLoading()

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Close mobile menu on Escape key
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape" && isOpen) {
      setIsOpen(false)
    }
  }, [isOpen])

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [handleKeyDown])

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
    <nav
      className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Left aligned */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center" onClick={handleLogoClick}>
              <span className="font-heading font-bold text-xl sm:text-2xl text-primary hover:text-primary/80 transition-colors whitespace-nowrap">
                Siddharth Magesh
              </span>
            </Link>
          </div>

          {/* Navigation items - Right aligned */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {navigationItems.map((item) => {
              const isActive = isActiveLink(pathname, item.href)
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-all duration-200 relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm px-1 ${
                    isActive
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-200 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              )
            })}
          </div>

          {/* Mobile menu button - Right aligned on mobile */}
          <div className="flex-shrink-0 md:hidden">
            <Button
              variant="ghost"
              size="sm"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
              <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
              {isOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          id="mobile-menu"
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
            {navigationItems.map((item) => {
              const isActive = isActiveLink(pathname, item.href)
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 text-base font-medium rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                    isActive
                      ? "text-primary bg-primary/5 border-l-2 border-primary"
                      : "text-foreground hover:text-primary hover:bg-muted"
                  }`}
                  onClick={() => setIsOpen(false)}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.name}
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
