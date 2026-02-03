"use client"

import { useLoading } from "@/contexts/LoadingContext"
import { LoadingScreen } from "@/components/loading-screen"
import { useMounted } from "@/hooks/use-mounted"

export function GlobalLoadingOverlay() {
  const mounted = useMounted()
  const { isLoading } = useLoading()

  if (!mounted || !isLoading) return null

  return <LoadingScreen onComplete={() => {}} />
}
