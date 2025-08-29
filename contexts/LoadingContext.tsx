"use client"

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react'
import { useRouter } from 'next/navigation'

interface LoadingContextType {
  isLoading: boolean
  triggerLoading: (path?: string) => void
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined)

export function LoadingProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(false)
  const [mounted, setMounted] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setMounted(true)
  }, [])

  const triggerLoading = (path: string = '/') => {
    if (!mounted) return
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      router.push(path)
    }, 3000)
  }

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) {
    return <>{children}</>
  }

  return (
    <LoadingContext.Provider value={{ isLoading, triggerLoading }}>
      {children}
    </LoadingContext.Provider>
  )
}

export function useLoading() {
  const context = useContext(LoadingContext)
  if (context === undefined) {
    // Return a safe default during SSR or before mounting
    return { 
      isLoading: false, 
      triggerLoading: () => {} 
    }
  }
  return context
}
