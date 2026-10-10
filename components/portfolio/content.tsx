import Link from "next/link"
import type { ReactNode } from "react"
import { credentials, education, experience, organizations, profile, award } from "@/content/profile"
import { type WorkEntry, workPath } from "@/content/work"

export function ContactLinks() {
  return <div className="link-row"><a href={`mailto:${profile.email}`}>Email ↗</a><a href={profile.github}>GitHub ↗</a><a href={profile.linkedin}>LinkedIn ↗</a><a href={profile.resume}>{profile.resumeLabel} ↓</a></div>
}
export function Section({ id, number, title, children, href, label }: { id: string; number: string; title: string; children: ReactNode; href?: string; label?: string }) {
  return <section id={id} aria-labelledby={`${id}-heading`} className="folio-section">
    <div className="section-label"><span className="section-number" aria-hidden="true">{number}</span><h2 id={`${id}-heading`}>{title}</h2></div>
    <div>{children}{href && <Link className="section-more" href={href}>{label} <span aria-hidden="true">→</span></Link>}</div>
  </section>
}
export function WorkList({ entries }: { entries: WorkEntry[] }) {
  return <>{entries.map(entry => <article className="work-entry" key={entry.slug}>
    <h3><Link href={workPath(entry)}>{entry.title} <span aria-hidden="true">↗</span></Link></h3>
    {!entry.title.includes("Language") && <div className="work-subtitle">{entry.subtitle}</div>}
    <div className="meta"><span className="status">{entry.status}</span>{entry.context && ` · ${entry.context}`}{entry.date && ` · ${entry.date}`}</div>
    <p>{entry.summary}</p>
    {entry.homepage && <div className="work-links">{entry.links.map(link => <a key={link.href} href={link.href}>{link.label} ↗</a>)}</div>}
  </article>)}</>
}
export function Education() {
  return <>{education.map(entry => <article className="row" key={entry.name}>
    <div className="row-title"><h3>{entry.name}</h3><span className="row-date">{entry.date}</span></div>
    <p>{entry.degree}</p>{entry.detail && <p className="detail">{entry.detail}</p>}
  </article>)}</>
}
export function Experience() {
  return <>{experience.map(entry => <article className="row experience-row" key={entry.name}>
    <div className="row-title"><h3>{entry.name}</h3>{entry.date && <span className="row-date">{entry.date}</span>}</div>
    <p className="role">{entry.role} <span className="experience-location">· {entry.location}</span></p><p>{entry.summary}</p>
    {entry.roles && <div className="service-timeline">{entry.roles.map(role => <div key={role.role}><div className="row-title"><h4>{role.role}</h4><span className="row-date">{role.date}</span></div><p>{role.summary}</p></div>)}</div>}
    {entry.slug && <Link className="inline-link" href={`/work/${entry.slug}`}>Explore the work →</Link>}
  </article>)}</>
}
export function Organizations() {
  return <>{organizations.map(entry => <article className="row" key={entry.id} id={entry.id}>
    <h3>{entry.name}</h3><p className="role">{entry.role}</p><p>{entry.summary}</p>
    <Link className="inline-link" href={`/work/${entry.slug}`}>{entry.linkLabel} →</Link>
  </article>)}</>
}
export function Award() {
  return <article className="row"><h3>{award.title}</h3><p className="meta">{award.context} · {award.date}</p><p>{award.description}</p></article>
}
export function Credentials({ selected = false }: { selected?: boolean }) {
  return <ul className="credentials">{credentials.filter(item => !selected || item.selected).map(item => <li key={item.title}>
    <a className="credential-title" href={encodeURI(item.href)}>{item.title} <span aria-label="PDF">↗</span></a>
    <div className="meta">{item.type} · {item.issuer} · {item.date}</div>
  </li>)}</ul>
}
export function Document({ title, description, eyebrow, children }: { title: string; description: string; eyebrow: string; children: ReactNode }) {
  return <article className="document"><div className="breadcrumb"><Link href="/">← Overview</Link></div>
    <header className="document-heading"><div className="eyebrow">{eyebrow}</div><h1>{title}</h1><p className="document-deck">{description}</p></header>
    <div className="document-content">{children}</div>
  </article>
}
