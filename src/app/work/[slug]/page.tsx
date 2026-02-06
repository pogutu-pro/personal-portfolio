import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Script from "next/script"
import { Container, Section } from "@/components/layout"
import { Badge } from "@/components/ui"
import { getProject, projects } from "@/features/projects/data"
import { SITE_CONFIG } from "@/lib/constants"
import { generateProjectJsonLd } from "@/lib/seo"
import { Reveal } from "@/components/motion"
import { MDXRemote } from "next-mdx-remote/rsc"
import { readFile } from "fs/promises"
import { join } from "path"
import rehypeSlug from "rehype-slug"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import remarkGfm from "remark-gfm"

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>
}

async function getCaseStudyContent(slug: string) {
  try {
    const filePath = join(process.cwd(), "src/content/case-studies", `${slug}.mdx`)
    const source = await readFile(filePath, "utf-8")
    return source
  } catch {
    return null
  }
}

export async function generateStaticParams() {
  return projects
    .filter((p) => p.caseStudy)
    .map((project) => ({
      slug: project.slug,
    }))
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)

  if (!project) {
    return {
      title: "Case Study Not Found",
    }
  }

  return {
    title: `${project.title} | Case Study`,
    description: project.description,
    openGraph: {
      title: `${project.title} | ${SITE_CONFIG.name}`,
      description: project.description,
      type: "article",
    },
  }
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params
  const project = getProject(slug)

  if (!project || !project.caseStudy) {
    notFound()
  }

  const mdxSource = await getCaseStudyContent(slug)
  const jsonLd = generateProjectJsonLd(project)

  return (
    <>
      <Script
        id="project-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Section padding="lg" className="pt-20 md:pt-28">
        <Container size="md">
          <Reveal>
            <div className="mb-8">
              <a
                href="/work"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                ← Back to Work
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mb-8">
              <div className="mb-4 flex flex-wrap items-center gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                {project.title}
              </h1>
              <p className="mt-4 text-lg text-muted-foreground md:text-xl">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-6 text-sm text-muted-foreground">
                <div>
                  <span className="font-medium">Year:</span> {project.year}
                </div>
                <div>
                  <span className="font-medium">Role:</span> {project.role}
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      {mdxSource ? (
        <Section className="border-t">
          <Container size="md">
            <Reveal delay={0.2}>
              <article className="prose prose-neutral dark:prose-invert max-w-none">
                <MDXRemote
                  source={mdxSource}
                  options={{
                    mdxOptions: {
                      remarkPlugins: [remarkGfm],
                      rehypePlugins: [
                        rehypeSlug,
                        [
                          rehypeAutolinkHeadings,
                          {
                            behavior: "wrap",
                            properties: {
                              className: ["anchor"],
                            },
                          },
                        ],
                      ],
                    },
                  }}
                />
              </article>
            </Reveal>
          </Container>
        </Section>
      ) : (
        <Section className="border-t">
          <Container size="md">
            <Reveal delay={0.2}>
              <div className="rounded-lg border bg-muted/50 p-12 text-center">
                <p className="text-muted-foreground">
                  Case study content coming soon. Check back later!
                </p>
              </div>
            </Reveal>
          </Container>
        </Section>
      )}
    </>
  )
}
