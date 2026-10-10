import type { Metadata } from "next"
import { Credentials, Document } from "@/components/portfolio/content"
export const metadata: Metadata = { title: "Licenses & certifications", description: "Selected verified credentials in NLP, generative AI, TensorFlow, and PyTorch.", alternates: { canonical: "/certifications" } }
export default function Certifications() { return <Document title="Licenses & certifications" description="Selected coursework and professional certificates supporting my work in machine learning and AI systems." eyebrow="Continuing education"><Credentials /></Document> }
