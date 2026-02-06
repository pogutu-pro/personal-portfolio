export const SITE_CONFIG = {
  name: "Paul Ogutu",
  title: "Paul Ogutu — Frontend Engineer",
  description: "Principal Frontend Engineer building premium web experiences with Next.js, React, and TypeScript.",
  url: "https://paulogutu.com",
  ogImage: "/og.jpg",
  links: {
    github: "https://github.com/paulogutu",
    linkedin: "https://linkedin.com/in/paulogutu",
    email: "paul@ogutu.com",
  },
} as const

export const NAVIGATION = [
  { title: "Work", href: "/work" },
  { title: "About", href: "/about" },
  { title: "Lab", href: "/lab" },
  { title: "Contact", href: "/contact" },
] as const

export const SOCIAL_LINKS = [
  { title: "GitHub", href: SITE_CONFIG.links.github, icon: "github" },
  { title: "LinkedIn", href: SITE_CONFIG.links.linkedin, icon: "linkedin" },
  { title: "Email", href: `mailto:${SITE_CONFIG.links.email}`, icon: "mail" },
] as const
