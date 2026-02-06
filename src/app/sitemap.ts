import type { MetadataRoute } from "next"
import { SITE_CONFIG } from "@/lib/constants"
import { projects } from "@/features/projects/data"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url

  const routes = [
    { url: baseUrl, priority: 1 as const },
  ].map(({ url, priority }) => ({
    url,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority,
  }))

  const caseStudies = projects
    .filter((p) => p.caseStudy)
    .map((project) => ({
      url: `${baseUrl}/work/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }))

  return [...routes, ...caseStudies]
}
