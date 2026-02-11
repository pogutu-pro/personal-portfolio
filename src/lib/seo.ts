import { SITE_CONFIG } from "./constants"
import { BIO } from "@/data/bio"
import type { Project } from "@/features/projects/data"

export function generateJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: BIO.name,
    jobTitle: BIO.role,
    url: SITE_CONFIG.url,
    sameAs: [
      SITE_CONFIG.links.github,
      SITE_CONFIG.links.linkedin,
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nairobi",
      addressCountry: "KE",
    },
    description: BIO.summary,
    knowsAbout: [...(BIO.competencies.frontend as readonly string[]), ...(BIO.competencies.backend as readonly string[])],
  }
}

export function generateProjectJsonLd(project: Project) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.impact,
    dateCreated: `${project.year}-01-01`,
    creator: {
      "@type": "Person",
      name: BIO.name,
    },
    keywords: project.tags.join(", "),
  }
}
