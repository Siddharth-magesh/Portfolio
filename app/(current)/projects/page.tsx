import type { Metadata } from "next"
import { Document, WorkList } from "@/components/portfolio/content"
import { publishedWork } from "@/content/work"
export const metadata: Metadata = { title: "Projects & open source", description: "Python tools, applied computer vision, backend engineering, and earlier software projects.", alternates: { canonical: "/projects" } }
export default function Projects() {
  const selected = ["sentimatrix", "deep-learning-sandbox", "vec-website"]
  return <Document title="Projects & open source" description="Reusable tools and applied systems, from Python packages and edge perception to production websites and service software." eyebrow="Engineering">
    <section><h2>Selected work</h2><WorkList entries={publishedWork.filter(w => selected.includes(w.slug))} /></section>
  </Document>
}
