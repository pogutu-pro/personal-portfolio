export interface Project {
  id: string
  slug: string
  title: string
  subtitle: string
  description?: string
  excerpt?: string
  impact: string
  client: string
  year: string
  role?: string
  tags: string[]
  thumbnail: string
  stats?: { label: string; value: string }[]
  featured: boolean
  caseStudy?: boolean
  externalUrl?: string
}

export const projects: Project[] = [
  {
    id: "rumia",
    slug: "rumia-rental-ops",
    title: "Rumia Technologies",
    subtitle: "SaaS / Operational Software",
    impact: "Architected and deployed a multi-tenant rental operations platform currently managing tenant workflows and payment orchestration.",
    client: "Rumia Technologies Ltd",
    year: "2024",
    role: "Co-Founder & CEO",
    tags: ["React", "FastAPI", "PostgreSQL", "Design Systems", "Payments"],
    thumbnail: "/projects/rumia.png",
    featured: true,
    caseStudy: true,
    stats: [
      { label: "Architecture", value: "Multi-tenant" },
      { label: "Workflows", value: "Automated" },
      { label: "Uptime", value: "99.9%" },
    ],
  },
  {
    id: "cli-tools",
    slug: "cli-system-automation",
    title: "CLI System Automation",
    subtitle: "Systems Engineering / Python",
    impact: "Developed high-performance CLI tools for directory analysis and automated backup systems, optimizing local developer workflows.",
    client: "Open Source / Internal",
    year: "2023",
    role: "Lead Engineer",
    tags: ["Python", "Linux CLI", "Automation", "Systems"],
    thumbnail: "/projects/cli.png",
    featured: true,
    stats: [
      { label: "Language", value: "Python" },
      { label: "Efficiency", value: "+40%" },
    ],
  },
  {
    id: "ai-api",
    slug: "ai-task-automation-api",
    title: "AI Task Automation API",
    subtitle: "Backend / AI Orchestration",
    impact: "Engineered a robust backend system for managing AI-powered task queuing and result storage with proper job tracking.",
    client: "Startup Client",
    year: "2024",
    role: "Backend Architect",
    tags: ["FastAPI", "Job Queuing", "AI Implementation", "API Design"],
    thumbnail: "/projects/ai-api.png",
    featured: true,
    caseStudy: true,
  },
  {
    id: "aqua",
    slug: "aqua-chatbot",
    title: "Aqua Chatbot",
    subtitle: "Product / AI Agent",
    impact: "Built an intelligent conversational agent focused on reducing customer support friction and improving response latency.",
    client: "Proprietary",
    year: "2023",
    role: "Lead Developer",
    tags: ["React", "NLP", "API Integration"],
    thumbnail: "/projects/aqua.png",
    featured: false,
  },
  {
    id: "omniscient",
    slug: "omniscient-automation",
    title: "Omniscient Agent",
    subtitle: "Automation / Intelligence",
    impact: "Designed an automation agent framework for orchestrating complex cross-platform workflows.",
    client: "Internal Lab",
    year: "2024",
    role: "Researcher & Dev",
    tags: ["Automation", "Node.js", "Workflow Design"],
    thumbnail: "/projects/omniscient.png",
    featured: true,
  },
]

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured)
}

export function getCaseStudies(): Project[] {
  return projects.filter((p) => p.caseStudy)
}
