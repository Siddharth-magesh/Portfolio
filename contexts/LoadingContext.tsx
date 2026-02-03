"use client"

import React, { createContext, useContext, useState, ReactNode } from 'react'
import { useRouter } from 'next/navigation'
import { useMounted } from '@/hooks/use-mounted'

interface LoadingContextType {
  isLoading: boolean
  triggerLoading: (path?: string) => void
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined)

export function LoadingProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(false)
  const mounted = useMounted()
  const router = useRouter()

  const triggerLoading = (path: string = '/') => {
    if (!mounted) return
    setIsLoading(true)
    // Reduced from 3000ms to 1650ms to match faster loading screen
    setTimeout(() => {
      setIsLoading(false)
      router.push(path)
    }, 1650)
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
