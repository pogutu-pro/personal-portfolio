export const BIO = {
  name: "Paul Ogutu",
  role: "Product Engineer & Startup Founder",
  summary: "A product-focused software engineer and startup founder specializing in building scalable web applications and operational systems. My work focuses on real-world execution — designing, engineering, and deploying production-ready software that powers payments, workflows, and business operations.",
  philosophy: [
    { title: "Build assets, not demos", description: "Every line of code should contribute to a working system that provides real-world value." },
    { title: "Ship working systems", description: "Prioritizing production readiness over slides or prototypes." },
    { title: "Simplicity beats complexity", description: "Engineering for maintainability and ownership." },
    { title: "Master problems, not tools", description: "Using technology as a lever to solve business constraints." }
  ],
  competencies: {
    frontend: [
      "React",
      "JavaScript (ES6+)",
      "HTML",
      "CSS",
      "Next.js (App Router)",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Query (React Query)",
      "Zustand",
      "Redux Toolkit",
      "React Hook Form",
      "Zod",
      "Framer Motion",
      "shadcn/ui",
      "Radix UI",
      "Vite",
      "ESLint",
      "Prettier"
    ],
    backend: [
      "Django",
      "Django REST Framework",
      "FastAPI",
      "Node.js",
      "Express / NestJS",
      "PostgreSQL",
      "SQL",
      "Redis",
      "Prisma / Django ORM",
      "Celery / Background Jobs",
      "OpenAPI / Swagger",
      "Postman / Insomnia"
    ],
    mobile: [
      "React Native",
      "Expo",
      "Expo Router",
      "React Navigation",
      "TypeScript",
      "Expo Secure Store",
      "Firebase (Auth, Push Notifications, Crashlytics)",
      "Sentry (Mobile)"
    ],
    devops: [
      "Git",
      "GitHub / GitLab",
      "pnpm",
      "Docker",
      "Docker Compose",
      "GitHub Actions",
      "Vercel",
      "Render / Fly.io",
      "Nginx",
      "Sentry",
      "Prometheus",
      "Grafana",
      "PostgreSQL (managed: Supabase / Neon)",
      "Cloudflare",
      "Stripe (payments infra)"
    ],
    testing: [
      "Jest",
      "Vitest",
      "Playwright",
      "Cypress",
      "Testing Library",
      "Pytest"
    ]
  },
  experience: [
    {
      company: "Rumia Technologies Ltd",
      role: "Co-Founder & CEO",
      description: "Student-focused hostel and rental operations platform reducing friction between landlords and tenants.",
      outcomes: [
        "Architected and deployed full-stack rental management dashboards.",
        "Built the 'Living Campus' design system and student onboarding engine.",
        "Engineered payment + receipt workflows and marketplace infrastructure."
      ]
    }
  ]
} as const;
