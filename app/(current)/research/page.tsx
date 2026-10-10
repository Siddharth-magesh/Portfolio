import type { Metadata } from "next"
import { Document, WorkList } from "@/components/portfolio/content"
import { publishedWork } from "@/content/work"
export const metadata: Metadata = { title: "Research", description: "Current investigations in language-model verification, multimodal research experience, and research prototypes.", alternates: { canonical: "/research" } }
export default function Research() {
  const entries = (slugs: string[]) => publishedWork.filter(w => slugs.includes(w.slug))
  return <Document title="Research & current work" description="Questions about how models reason, how their answers can be verified, and how intelligent systems behave under practical constraints." eyebrow="Research">
    <section><h2>Current investigations</h2><WorkList entries={entries(["reasoning-verification"])} /></section>
    <section><h2>Research prototypes</h2><WorkList entries={entries(["ossarth"])} /></section>
  </Document>
}
