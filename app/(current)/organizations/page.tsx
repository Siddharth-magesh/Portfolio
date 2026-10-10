import type { Metadata } from "next"
import Link from "next/link"
import { Document, Organizations } from "@/components/portfolio/content"
import { serviceRoles } from "@/content/profile"
export const metadata: Metadata = { title: "Organizations & service", description: "WebOps engineering leadership and Youth Red Cross service at Velammal Engineering College.", alternates: { canonical: "/organizations" } }
export default function OrganizationsPage() {
  return <Document title="Organizations & service" description="Building useful software, supporting teams, and making technical work maintainable beyond one cohort." eyebrow="Leadership & community">
    <Organizations />
    <section><h2>Youth Red Cross progression</h2>{serviceRoles.map(role => <article className="row" key={role.role}><div className="row-title"><h3>{role.role}</h3><span className="row-date">{role.date}</span></div><p>{role.description}</p></article>)}</section>
    <section><h2>Related tools</h2><ul><li><Link href="/work/crosslink">CrossLink - event and attendance management</Link></li><li><Link href="/work/yrc-website">YRC website - content and communication</Link></li></ul></section>
  </Document>
}
