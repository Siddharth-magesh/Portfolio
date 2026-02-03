import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, DM_Sans } from "next/font/google"
import { Analytics } from '@vercel/analytics/next'
import { ScrollToTop } from "@/components/scroll-to-top"
import { ClientProvider } from "@/components/client-provider"
import { PersonJsonLd, WebsiteJsonLd } from "@/components/json-ld"
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

const siteUrl = "https://siddharthmagesh.com"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Siddharth Magesh | AI Researcher & Developer",
    template: "%s | Siddharth Magesh",
  },
  description:
    "AI Researcher specializing in Natural Language Processing, Computer Vision, and Generative AI systems. Pursuing advanced research toward Artificial General Intelligence.",
  keywords: [
    "AI Researcher",
    "Machine Learning",
    "Natural Language Processing",
    "NLP",
    "Computer Vision",
    "Generative AI",
    "Deep Learning",
    "Artificial Intelligence",
    "Python Developer",
    "Full Stack Developer",
    "OSSARTH",
    "Siddharth Magesh",
  ],
  authors: [{ name: "Siddharth Magesh", url: siteUrl }],
  creator: "Siddharth Magesh",
  publisher: "Siddharth Magesh",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Siddharth Magesh Portfolio",
    title: "Siddharth Magesh | AI Researcher & Developer",
    description:
      "AI Researcher specializing in Natural Language Processing, Computer Vision, and Generative AI systems. Explore my research projects, professional experience, and technical portfolio.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Siddharth Magesh - AI Researcher Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Siddharth Magesh | AI Researcher & Developer",
    description:
      "AI Researcher specializing in NLP, Computer Vision, and Generative AI. Pursuing research toward AGI.",
    images: ["/og-image.png"],
    creator: "@siddharth_magesh",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add verification tokens when available
    // google: "your-google-verification-token",
    // yandex: "your-yandex-verification-token",
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "technology",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <head>
        <style>{`
html {
  font-family: ${dmSans.style.fontFamily};
  --font-sans: ${dmSans.variable};
  --font-heading: ${spaceGrotesk.variable};
}
        `}</style>
        <PersonJsonLd />
        <WebsiteJsonLd />
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:outline-none"
        >
          Skip to main content
        </a>
        <ClientProvider>
          <ScrollToTop />
          {children}
        </ClientProvider>
        <Analytics />
      </body>
    </html>
  )
}
