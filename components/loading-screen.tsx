"use client"

import { useEffect, useState } from "react"

interface LoadingScreenProps {
  onComplete: () => void
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(onComplete, 200)
          return 100
        }
        return prev + 2
      })
    }, 60)

    return () => clearInterval(timer)
  }, [onComplete])

  return (
    <div className="fixed inset-0 z-50 bg-background flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-heading text-4xl lg:text-6xl font-bold text-primary mb-4">Siddharth Magesh</h1>
        <p className="text-xl text-muted-foreground mb-8">Portfolio</p>
        <div className="w-64 h-2 bg-muted rounded-full overflow-hidden mx-auto">
          <div className="h-full bg-primary transition-all duration-300 ease-out" style={{ width: `${progress}%` }} />
        </div>
      </div>
    </div>
  )
}
