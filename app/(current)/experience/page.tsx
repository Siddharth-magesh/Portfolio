import type { Metadata } from "next"
import { Document, Experience } from "@/components/portfolio/content"
export const metadata: Metadata = { title: "Experience", description: "Research and industry experience at SGBC, IIT Madras, Scrapify Ecotech, and Inzpire Solutions.", alternates: { canonical: "/experience" } }
export default function ExperiencePage() {
  return <Document title="Research & industry experience" description="Model adaptation, applied computer vision, and the engineering work around usable AI systems." eyebrow="Experience">
    <Experience />
  </Document>
}
