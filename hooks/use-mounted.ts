import { useState, useEffect } from "react"

/**
 * Hook to safely handle hydration mismatches in Next.js
 * Returns true only after the component has mounted on the client
 *
 * Usage:
 * ```tsx
 * const mounted = useMounted()
 * if (!mounted) return null // or skeleton
 * return <ClientOnlyComponent />
 * ```
 */
export function useMounted() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return mounted
}
