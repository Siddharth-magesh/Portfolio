import Link from "next/link"
import { Document } from "@/components/portfolio/content"
export default function NotFound() { return <Document title="Page not found" description="This address may have changed. You can explore the current work or find an earlier page in the archive." eyebrow="404"><div className="link-row"><Link href="/">Homepage</Link><Link href="/projects">Projects</Link><a href="/archive">Earlier portfolio</a></div></Document> }
