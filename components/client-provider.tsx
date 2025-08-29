"use client"

import { useEffect, useState } from "react"
import { LoadingProvider } from "@/contexts/LoadingContext"
import { GlobalLoadingOverlay } from "@/components/global-loading-overlay"

export function ClientProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <>{children}</>
  }

  return (
    <LoadingProvider>
      <GlobalLoadingOverlay />
      {children}
    </LoadingProvider>
  )
}
