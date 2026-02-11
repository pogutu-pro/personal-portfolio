export const SITE_CONFIG = {
  name: "Paul Ogutu",
  title: "Paul Ogutu | Product Engineer & Startup Founder",
  description:
    "Product-focused software engineer specializing in building scalable web applications and operational systems. Designing, engineering, and deploying production-ready software.",
  url: "https://ogutu.dev",
  ogImage: "/og.png",
  links: {
    github: "https://github.com/pogutu",
    linkedin: "https://linkedin.com/in/paulogutu",
    email: "paul@ogutu.dev",
  },
} as const

export const SECTION_IDS = ["hero", "work", "about", "services", "contact"] as const

export const NAVIGATION = [
  { title: "Engineering", href: "/#work" },
  { title: "Philosophy", href: "/#about" },
  { title: "Strategy", href: "/#services" },
  { title: "Collaborate", href: "/#contact" },
] as const

export const SOCIAL_LINKS = [
  {
    title: "Github",
    href: "https://github.com/pogutu-pro",
    icon: "github",
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/paul-ogutu",
    icon: "linkedin",
  },
  {
    title: "Email",
    href: "mailto:pogutu010@gmail.com",
    icon: "mail",
  },
] as const
