"use client"

import { LoadingProvider } from "@/contexts/LoadingContext"
import { GlobalLoadingOverlay } from "@/components/global-loading-overlay"
import { useMounted } from "@/hooks/use-mounted"

export function ClientProvider({ children }: { children: React.ReactNode }) {
  const mounted = useMounted()

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
