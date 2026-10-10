import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { profile } from "@/content/profile"
import { publishedWork } from "@/content/work"
import { Award, ContactLinks, Credentials, Education, Experience, Section, WorkList } from "@/components/portfolio/content"

export const metadata: Metadata = { alternates: { canonical: "/" } }
export default function Home() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Person", name: profile.name, url: "https://siddharth-magesh.me", email: profile.email, sameAs: [profile.github, profile.linkedin], description: profile.affiliation }) }} />
    <section id="overview" className="overview" aria-labelledby="name">
      <div className="eyebrow">Research & engineering</div>
      <div className="identity"><div>
        <h1 id="name">{profile.name}</h1><p className="affiliation">{profile.affiliation}</p>
        <p className="focus-line">Language Model Reasoning & Verification · Multimodal Learning · AI Systems</p>
        <div className="intro-copy">{profile.introduction.map(p => <p key={p}>{p}</p>)}</div>
        <ContactLinks />
        <section id="awards" className="intro-awards" aria-labelledby="awards-heading">
          <h2 id="awards-heading">Awards & Recognition</h2>
          <Award />
          <Link className="inline-link" href="/awards">All recognition →</Link>
        </section>
      </div><aside className="profile-sidebar"><div className="portrait-block"><Image className="portrait" src="/professional-ai-researcher-portrait.JPG" alt="Siddharth Magesh" width={1280} height={1920} sizes="(max-width: 600px) 220px, 260px" priority /><p className="portrait-caption">Los Angeles, California</p></div><section id="education" className="sidebar-education" aria-labelledby="education-heading"><h2 id="education-heading">Education</h2><Education /></section></aside></div>
    </section>
    <Section id="research" number="01" title="Research & Current Work" href="/research" label="Research details"><WorkList entries={publishedWork.filter(w => w.homepage === "research")} /></Section>
    <Section id="projects" number="02" title="Selected Projects & Open Source" href="/projects" label="Project details"><WorkList entries={publishedWork.filter(w => w.homepage === "projects")} /></Section>
    <Section id="experience" number="03" title="Experience" href="/experience" label="Full experience"><Experience /></Section>
    <Section id="certifications" number="04" title="Licenses & Certifications" href="/certifications" label="All certifications"><Credentials selected /></Section>
    <Section id="contact" number="05" title="Let’s connect"><p>I’m happy to connect about language-model reasoning, verification, multimodal learning, and AI systems. Email is the best way to reach me.</p><a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}</a><ContactLinks /></Section>
  </>
}
