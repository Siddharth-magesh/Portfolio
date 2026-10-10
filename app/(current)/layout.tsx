import type { Metadata } from "next"
import Link from "next/link"
import { profile } from "@/content/profile"
import "./portfolio.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://siddharth-magesh.me"),
  title: { default: "Siddharth Magesh | Language Models & AI Systems", template: "%s | Siddharth Magesh" },
  description: "USC M.S. Computer Science student working on language-model reasoning and verification, multimodal learning, and AI systems engineering.",
  robots: { index: true, follow: true },
  openGraph: { type: "website", siteName: "Siddharth Magesh", locale: "en_US" },
  twitter: { card: "summary" },
}
export default function CurrentLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>
    <a href="#main-content" className="skip-link">Skip to content</a>
    <header className="folio-header"><div className="folio-width folio-header-inner">
      <Link href="/" className="folio-brand">Siddharth Magesh</Link>
      <nav className="folio-nav" aria-label="Main navigation">
        <Link href="/#research">Research</Link><Link href="/#projects">Projects</Link>
        <Link href="/#experience">Experience</Link><Link href="/#education">About</Link><Link href="/#contact">Contact</Link>
      </nav>
    </div></header>
    <main id="main-content" className="folio-width" tabIndex={-1}>{children}</main>
    <footer className="folio-footer"><div className="folio-width footer-inner">
      <span>{profile.name} · {profile.location}</span>
      <a href="/archive">Earlier portfolio (archive) ↗</a>
    </div></footer>
  </body></html>
}
