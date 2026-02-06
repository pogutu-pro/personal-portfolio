import { SITE_CONFIG } from "./constants"
import type { Project } from "@/features/projects/data"

export function generateJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE_CONFIG.name,
    jobTitle: "Principal Frontend Engineer",
    url: SITE_CONFIG.url,
    sameAs: [SITE_CONFIG.links.github, SITE_CONFIG.links.linkedin],
    description: SITE_CONFIG.description,
  }
}

export function generateProjectJsonLd(project: Project) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    dateCreated: `${project.year}-01-01`,
    creator: {
      "@type": "Person",
      name: SITE_CONFIG.name,
    },
  }
}
