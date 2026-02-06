import { Container, Section } from "@/components/layout"
import { Button } from "@/components/ui"
import { Badge } from "@/components/ui"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui"
import { SITE_CONFIG, SOCIAL_LINKS } from "@/lib/constants"
import { Reveal } from "@/components/motion"
import Link from "next/link"
import { ProjectCard } from "@/features/projects/ProjectCard"
import { projects, getFeaturedProjects } from "@/features/projects/data"
import { ContactForm } from "@/features/contact/ContactForm"

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "Design Systems",
  "Performance Optimization",
  "Accessibility",
  "Testing",
  "CI/CD",
]

const values = [
  {
    title: "Performance First",
    description:
      "Every decision is made with performance in mind. Fast experiences aren't optional—they're essential.",
  },
  {
    title: "Accessibility by Default",
    description:
      "Building inclusive products that work for everyone, regardless of ability or device.",
  },
  {
    title: "Clean Architecture",
    description:
      "Code that's maintainable, scalable, and easy to understand. Future developers will thank you.",
  },
  {
    title: "User-Centered Design",
    description:
      "Every feature starts with understanding user needs. Design and engineering work together.",
  },
]

const experiments = [
  {
    title: "CSS Grid Layouts",
    description: "Exploring advanced CSS Grid patterns for complex layouts.",
    tags: ["CSS", "Grid", "Layout"],
    status: "In Progress",
  },
  {
    title: "WebGL Experiments",
    description: "Playing with Three.js and WebGL for interactive 3D experiences.",
    tags: ["WebGL", "Three.js", "3D"],
    status: "Exploration",
  },
  {
    title: "Micro-interactions Library",
    description: "Building a collection of reusable micro-interaction patterns.",
    tags: ["React", "Framer Motion", "UX"],
    status: "Planning",
  },
]

export default function HomePage() {
  const featuredProjects = getFeaturedProjects()
  const allProjects = projects

  return (
    <>
      {/* Hero */}
      <Section id="hero" padding="lg" className="pt-20 md:pt-28 scroll-mt-20">
        <Container>
          <div className="max-w-4xl">
            <Reveal>
              <h1 className="text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
                Hi, I&apos;m <span className="text-accent">{SITE_CONFIG.name}</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
                Principal Frontend Engineer building premium web experiences with Next.js, React,
                and TypeScript. I create fast, accessible, and beautiful products that users love.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="#work">View my work</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="#contact">Get in touch</Link>
                </Button>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3">
                {SOCIAL_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section className="border-t">
        <Container>
          <Reveal>
            <div className="text-center">
              <h2 className="text-3xl font-bold md:text-4xl">Building products that matter</h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                From concept to deployment, I specialize in creating exceptional digital experiences
                that combine beautiful design with robust engineering.
              </p>
              <dl className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
                <Reveal delay={0.1}>
                  <div>
                    <dt className="sr-only">Years experience</dt>
                    <dd className="text-4xl font-bold text-accent">5+</dd>
                    <p className="mt-2 text-sm text-muted-foreground">Years experience</p>
                  </div>
                </Reveal>
                <Reveal delay={0.2}>
                  <div>
                    <dt className="sr-only">Projects shipped</dt>
                    <dd className="text-4xl font-bold text-accent">50+</dd>
                    <p className="mt-2 text-sm text-muted-foreground">Projects shipped</p>
                  </div>
                </Reveal>
                <Reveal delay={0.3}>
                  <div>
                    <dt className="sr-only">Users reached</dt>
                    <dd className="text-4xl font-bold text-accent">10M+</dd>
                    <p className="mt-2 text-sm text-muted-foreground">Users reached</p>
                  </div>
                </Reveal>
              </dl>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Work */}
      <Section id="work" className="border-t scroll-mt-20" padding="lg">
        <Container>
          <Reveal>
            <div className="max-w-3xl mb-12">
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                Selected Work
              </h2>
              <p className="mt-6 text-lg text-muted-foreground md:text-xl">
                A collection of projects I&apos;ve worked on, from SaaS platforms to design systems.
              </p>
            </div>
          </Reveal>
          {featuredProjects.length > 0 && (
            <Reveal delay={0.1}>
              <h3 className="mb-6 text-2xl font-semibold">Featured Projects</h3>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
                {featuredProjects.map((project, index) => (
                  <ProjectCard key={project.slug} project={project} index={index} />
                ))}
              </div>
            </Reveal>
          )}
          <Reveal delay={0.2}>
            <h3 className="mb-6 text-2xl font-semibold">All Projects</h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {allProjects.map((project, index) => (
                <ProjectCard key={project.slug} project={project} index={index} />
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* About */}
      <Section id="about" className="border-t scroll-mt-20" padding="lg">
        <Container size="md">
          <Reveal>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              About Me
            </h2>
            <p className="mt-6 text-lg text-muted-foreground md:text-xl">
              I&apos;m a Principal Frontend Engineer passionate about building exceptional web
              experiences. I specialize in creating fast, accessible, and beautiful products using
              modern web technologies.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h3 className="mt-12 mb-6 text-2xl font-semibold">My Approach</h3>
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <p>
                I believe great products are built at the intersection of design, engineering, and
                user experience. Every project starts with understanding the problem, then finding
                the most elegant solution.
              </p>
              <p>
                My work focuses on performance, accessibility, and maintainability. I&apos;m
                passionate about creating design systems that scale, writing code that other
                engineers respect, and building products that users love.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <h3 className="mt-12 mb-6 text-2xl font-semibold">Skills & Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <h3 className="mt-12 mb-8 text-2xl font-semibold">Core Values</h3>
            <div className="grid gap-8 md:grid-cols-2">
              {values.map((value) => (
                <div key={value.title}>
                  <h4 className="mb-2 text-lg font-semibold">{value.title}</h4>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Lab */}
      <Section id="lab" className="border-t scroll-mt-20" padding="lg">
        <Container>
          <Reveal>
            <div className="max-w-3xl mb-12">
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">Lab</h2>
              <p className="mt-6 text-lg text-muted-foreground md:text-xl">
                A space for experiments, side projects, and explorations. Here&apos;s where I try
                new ideas, test concepts, and push boundaries.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h3 className="mb-8 text-2xl font-semibold">Current Experiments</h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {experiments.map((experiment, index) => (
                <Reveal key={experiment.title} delay={0.1 * (index + 1)}>
                  <Card>
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4">
                        <CardTitle className="text-lg">{experiment.title}</CardTitle>
                        <Badge variant="outline" className="shrink-0 text-xs">
                          {experiment.status}
                        </Badge>
                      </div>
                      <CardDescription>{experiment.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {experiment.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Reveal>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-12 rounded-lg border bg-muted/50 p-12 text-center">
              <p className="text-muted-foreground">
                More experiments coming soon. Check back later or{" "}
                <Link href="#contact" className="text-foreground underline hover:no-underline">
                  get in touch
                </Link>{" "}
                to discuss ideas.
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Contact */}
      <Section id="contact" className="border-t scroll-mt-20" padding="lg">
        <Container size="md">
          <Reveal>
            <div className="mb-12">
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                Get in Touch
              </h2>
              <p className="mt-6 text-lg text-muted-foreground md:text-xl">
                Have a project in mind? Want to collaborate? Or just want to say hello? I&apos;d love
                to hear from you.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-lg border bg-card p-8">
              <ContactForm />
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-12 text-center">
              <p className="text-sm text-muted-foreground">
                Prefer email? Reach me at{" "}
                <a
                  href={`mailto:${SITE_CONFIG.links.email}`}
                  className="text-foreground underline hover:no-underline"
                >
                  {SITE_CONFIG.links.email}
                </a>
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  )
}
