export interface Project {
  slug: string
  title: string
  description: string
  excerpt: string
  year: number
  role: string
  tags: string[]
  featured: boolean
  image?: string
  externalUrl?: string
  caseStudy?: boolean
}

export const projects: Project[] = [
  {
    slug: "premium-saas-platform",
    title: "Premium SaaS Platform",
    description:
      "Built a modern SaaS platform with real-time collaboration, advanced analytics, and seamless payment integration. Focused on performance, accessibility, and user experience.",
    excerpt:
      "A comprehensive SaaS platform featuring real-time collaboration, analytics, and payment processing.",
    year: 2024,
    role: "Principal Frontend Engineer",
    tags: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Stripe"],
    featured: true,
    caseStudy: true,
  },
  {
    slug: "design-system-library",
    title: "Design System Library",
    description:
      "Created a comprehensive design system library with 50+ reusable components, documentation, and Storybook integration. Used by 20+ teams across the organization.",
    excerpt: "A production-ready design system with 50+ components and full documentation.",
    year: 2024,
    role: "Frontend Architect",
    tags: ["React", "TypeScript", "Storybook", "Design Systems"],
    featured: true,
    caseStudy: true,
  },
  {
    slug: "e-commerce-platform",
    title: "E-Commerce Platform",
    description:
      "Developed a high-performance e-commerce platform with advanced search, filtering, and checkout flow. Achieved 95+ Lighthouse scores and sub-2s LCP.",
    excerpt: "High-performance e-commerce platform with advanced search and checkout.",
    year: 2023,
    role: "Senior Frontend Engineer",
    tags: ["Next.js", "React", "TypeScript", "Performance"],
    featured: true,
    caseStudy: false,
  },
  {
    slug: "analytics-dashboard",
    title: "Analytics Dashboard",
    description:
      "Built a real-time analytics dashboard with interactive charts, data visualization, and export capabilities. Handles millions of data points efficiently.",
    excerpt: "Real-time analytics dashboard with interactive visualizations.",
    year: 2023,
    role: "Frontend Engineer",
    tags: ["React", "D3.js", "TypeScript", "Data Visualization"],
    featured: false,
    caseStudy: false,
  },
  {
    slug: "mobile-app-redesign",
    title: "Mobile App Redesign",
    description:
      "Led the redesign of a mobile-first web application, improving conversion rates by 40% and reducing bounce rate by 25%.",
    excerpt: "Mobile-first redesign that improved conversion rates by 40%.",
    year: 2023,
    role: "Lead Frontend Engineer",
    tags: ["React", "Mobile", "UX", "Performance"],
    featured: false,
    caseStudy: false,
  },
  {
    slug: "developer-tools",
    title: "Developer Tools Suite",
    description:
      "Created a suite of developer tools including CLI, VS Code extension, and web dashboard. Used by thousands of developers daily.",
    excerpt: "Developer tools suite including CLI, VS Code extension, and dashboard.",
    year: 2022,
    role: "Full-Stack Engineer",
    tags: ["TypeScript", "Node.js", "VS Code", "CLI"],
    featured: false,
    caseStudy: false,
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
