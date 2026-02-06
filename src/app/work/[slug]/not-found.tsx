import { Container, Section } from "@/components/layout"
import { Button } from "@/components/ui"
import Link from "next/link"

export default function NotFound() {
  return (
    <Section padding="lg" className="pt-20 md:pt-28">
      <Container size="md">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Case Study Not Found</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            The case study you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <div className="mt-8">
            <Button asChild>
              <Link href="/work">Back to Work</Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}
