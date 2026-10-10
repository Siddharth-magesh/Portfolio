import type { Metadata } from "next"
import { ContactLinks, Document, Education } from "@/components/portfolio/content"
import { profile } from "@/content/profile"
export const metadata: Metadata = { title: "About", description: "Education, background, and technical interests of Siddharth Magesh, USC M.S. Computer Science student.", alternates: { canonical: "/about" } }
export default function About() {
  return <Document title="About me" description="Working across model behavior, multimodal learning, and the systems that make AI useful." eyebrow="Background">
    {profile.introduction.map(p => <p key={p}>{p}</p>)}
    <section><h2>Education</h2><Education /><p className="meta">B.Tech CGPA: 8.97/10.0</p></section>
    <section><h2>Technical focus</h2><ul>
      <li>Language-model reasoning, verification, calibration, and inference constraints.</li>
      <li>PyTorch, Hugging Face, and vision-language model adaptation.</li>
      <li>Python package development, asynchronous workflows, logging, caching, and batch pipelines.</li>
      <li>Multi-agent orchestration, MCP tool integration, and retrieval-augmented generation.</li>
      <li>REST APIs and production backend engineering; intermediate C++ and CUDA.</li>
    </ul></section><section><h2>Get in touch</h2><p>I’m based in Los Angeles and welcome conversations about research and engineering collaborations.</p><ContactLinks /></section>
  </Document>
}
