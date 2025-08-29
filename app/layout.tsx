import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, DM_Sans } from "next/font/google"
import { ScrollToTop } from "@/components/scroll-to-top"
import { ClientProvider } from "@/components/client-provider"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: "Siddharth Magesh - AI Researcher",
  description:
    "Professional portfolio of Siddharth Magesh, AI Researcher specializing in Natural Language Processing, Computer Vision, and Generative AI systems.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable}`}>
      <head>
        <style>{`
html {
  font-family: ${dmSans.style.fontFamily};
  --font-sans: ${dmSans.variable};
  --font-heading: ${spaceGrotesk.variable};
}
        `}</style>
      </head>
      <body className="font-sans antialiased">
        <ClientProvider>
          <ScrollToTop />
          {children}
        </ClientProvider>
      </body>
    </html>
  )
}
