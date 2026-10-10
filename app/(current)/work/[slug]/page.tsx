import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { findWork, publishedWork, workPath } from "@/content/work"
import { Document } from "@/components/portfolio/content"

export const dynamicParams = false
export function generateStaticParams() { return publishedWork.map(({ slug }) => ({ slug })) }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const entry = findWork((await params).slug)
  if (!entry) return {}
  return { title: entry.title, description: entry.summary, alternates: { canonical: workPath(entry) }, openGraph: { title: entry.title, description: entry.summary, url: workPath(entry) } }
}
export default async function WorkPage({ params }: { params: Promise<{ slug: string }> }) {
  const entry = findWork((await params).slug)
  if (!entry) notFound()
  const section = entry.kind === "research" ? "research" : "projects"
  return <Document title={entry.title} description={entry.subtitle} eyebrow={entry.status}>
    {(entry.context || entry.date) && <p className="meta">{[entry.context, entry.date].filter(Boolean).join(" · ")}</p>}
    <nav className="contents" aria-label="On this page">On this page<ol>{entry.sections.map((s, i) => <li key={s.title}><a href={`#section-${i}`}>{s.title}</a></li>)}</ol></nav>
    {entry.sections.map((s, i) => <section id={`section-${i}`} key={s.title}><h2>{s.title}</h2>{s.paragraphs.map(p => <p key={p}>{p}</p>)}</section>)}
    {entry.links.length > 0 && <section><h2>Resources</h2><ul>{entry.links.map(link => <li key={link.href}><a href={encodeURI(link.href)}>{link.label} ↗</a></li>)}</ul></section>}
    {entry.related && <section><h2>Related work</h2><ul>{entry.related.map(slug => { const related = findWork(slug); return related ? <li key={slug}><Link href={workPath(related)}>{related.title}</Link></li> : null })}</ul></section>}
    <div className="reading-footer link-row"><Link href={`/${section}`}>← Back to {section}</Link><Link href={`/#${section}`}>Homepage {section} →</Link></div>
  </Document>
}
