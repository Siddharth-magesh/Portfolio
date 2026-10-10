import type { Metadata } from "next"
import { Space_Grotesk, DM_Sans } from "next/font/google"
import { ClientProvider } from "@/components/client-provider"
import { ScrollToTop } from "@/components/scroll-to-top"
import "./archive/globals.css"

const heading = Space_Grotesk({ subsets: ["latin"], display: "swap", variable: "--font-space-grotesk" })
const body = DM_Sans({ subsets: ["latin"], display: "swap", variable: "--font-dm-sans" })
export const metadata: Metadata = {
  metadataBase: new URL("https://siddharth-magesh.me"),
  title: "Earlier portfolio | Siddharth Magesh",
  description: "Historical portfolio. Some details may be outdated.",
  robots: { index: false, follow: true },
}
export default function LegacyLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" className={`${heading.variable} ${body.variable}`}>
    <body className="font-sans antialiased" style={{ fontFamily: body.style.fontFamily }}>
      <style>{`html { --font-sans: var(--font-dm-sans); --font-heading: var(--font-space-grotesk); }`}</style>
      <aside style={{ padding: "12px 20px", background: "#f2f1ec", color: "#202522", textAlign: "center", fontSize: 14, lineHeight: 1.6 }}>
        Earlier portfolio - preserved as a historical record. Some details may be outdated.{" "}
        <a href="/" style={{ color: "#245b4a", textDecoration: "underline" }}>View the current portfolio.</a>
      </aside>
      <ClientProvider><ScrollToTop />{children}</ClientProvider>
    </body>
  </html>
}
