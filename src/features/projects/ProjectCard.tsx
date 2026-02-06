"use client"

import Link from "next/link"
import { type Project } from "./data"
import { Badge } from "@/components/ui"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui"
import { Reveal } from "@/components/motion"
import { cn } from "@/lib/utils"

interface ProjectCardProps {
  project: Project
  index?: number
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const href = project.caseStudy ? `/work/${project.slug}` : project.externalUrl || "#"

  return (
    <Reveal delay={index * 0.1} className="h-full">
      <Card className="group h-full transition-all hover:shadow-lg">
        <Link href={href} className="block h-full">
          <CardHeader>
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <CardTitle className="group-hover:text-accent transition-colors">
                  {project.title}
                </CardTitle>
                <p className="mt-1 text-xs text-muted-foreground">{project.year}</p>
              </div>
              {project.featured && (
                <Badge variant="secondary" className="shrink-0">
                  Featured
                </Badge>
              )}
            </div>
            <CardDescription className="mt-2">{project.excerpt}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">{project.description}</p>
          </CardContent>
          <CardFooter className="flex flex-wrap gap-2">
            {project.tags.slice(0, 4).map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
            {project.tags.length > 4 && (
              <Badge variant="outline" className="text-xs">
                +{project.tags.length - 4}
              </Badge>
            )}
          </CardFooter>
        </Link>
      </Card>
    </Reveal>
  )
}
