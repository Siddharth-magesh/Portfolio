"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Skeleton } from "@/components/ui/skeleton"

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  fill?: boolean
  className?: string
  priority?: boolean
  sizes?: string
}

/**
 * Optimized image component using Next.js Image with:
 * - Automatic lazy loading (unless priority is set)
 * - Blur placeholder effect
 * - Loading skeleton
 * - Responsive sizing
 */
export function OptimizedImage({
  src,
  alt,
  width,
  height,
  fill = false,
  className,
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className={cn("relative overflow-hidden", fill && "w-full h-full", className)}>
      {isLoading && (
        <Skeleton className="absolute inset-0 z-10" />
      )}
      <Image
        src={src}
        alt={alt}
        {...(fill ? { fill: true } : { width, height })}
        sizes={sizes}
        priority={priority}
        loading={priority ? "eager" : "lazy"}
        className={cn(
          "object-cover transition-opacity duration-300",
          isLoading ? "opacity-0" : "opacity-100"
        )}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  )
}

/**
 * Simple lazy-loaded img tag with loading skeleton
 * Use when Next.js Image optimization isn't suitable
 */
interface LazyImageProps {
  src: string
  alt: string
  className?: string
}

export function LazyImage({ src, alt, className }: LazyImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {isLoading && !hasError && (
        <Skeleton className="absolute inset-0 z-10" />
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={cn(
          "w-full h-full object-cover transition-opacity duration-300",
          isLoading ? "opacity-0" : "opacity-100"
        )}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false)
          setHasError(true)
        }}
      />
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted text-muted-foreground text-sm">
          Failed to load image
        </div>
      )}
    </div>
  )
}
