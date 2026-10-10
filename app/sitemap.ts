import type { MetadataRoute } from "next"
import { publishedWork, workPath } from "@/content/work"

export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", "/about", "/research", "/projects", "/experience", "/organizations", "/awards", "/certifications", ...publishedWork.map(workPath)].map(route => ({
    url: `https://siddharth-magesh.me${route}`,
    changeFrequency: "monthly",
    priority: route === "/" ? 1 : .7,
  }))
}
