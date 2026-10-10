"use client"
import Link from "next/link"
export default function ErrorPage({ reset }: { reset: () => void }) {
  return <section className="document"><div className="eyebrow">Something went wrong</div><h1>This page couldn’t load.</h1><p className="document-deck">Please try again, or return to the overview.</p><div className="link-row"><button onClick={reset}>Try again</button><Link href="/">Return to overview</Link></div></section>
}
