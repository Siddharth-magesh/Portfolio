"use client"

import dynamic from 'next/dynamic'

const ClientProvider = dynamic(() => import('./client-provider').then(mod => ({ default: mod.ClientProvider })), {
  ssr: false,
  loading: () => null
})

export { ClientProvider }
