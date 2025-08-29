"use client"

import { useEffect, useState } from "react"
import { useLoading } from "@/contexts/LoadingContext"
import { LoadingScreen } from "@/components/loading-screen"

export function GlobalLoadingOverlay() {
  const [mounted, setMounted] = useState(false)
  const { isLoading } = useLoading()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted || !isLoading) return null

  return <LoadingScreen onComplete={() => {}} />
}
