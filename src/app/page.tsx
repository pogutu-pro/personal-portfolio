import { Navbar, Footer } from "@/components/layout"
import { Container } from "@/components/layout/Container"
import { Button } from "@/components/ui"
import { SITE_CONFIG, SOCIAL_LINKS } from "@/lib/constants"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 md:py-32">
          <Container>
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                Hi, I'm{" "}
                <span className="text-accent">{SITE_CONFIG.name}</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl">
                Principal Frontend Engineer building premium web experiences with 
                Next.js, React, and TypeScript. I create fast, accessible, and 
                beautiful products that users love.
              </p>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link href="/work">View my work</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/contact">Get in touch</Link>
                </Button>
              </div>
              
              <div className="mt-12 flex gap-6">
                {SOCIAL_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    target={link.href.startsWith('http') ? "_blank" : undefined}
                    rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Preview Section */}
        <section className="py-20 border-t">
          <Container>
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold">
                Building products that matter
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                From concept to deployment, I specialize in creating exceptional 
                digital experiences that combine beautiful design with robust engineering.
              </p>
              
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent">5+</div>
                  <div className="mt-2 text-sm text-muted-foreground">Years experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent">50+</div>
                  <div className="mt-2 text-sm text-muted-foreground">Projects shipped</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent">10M+</div>
                  <div className="mt-2 text-sm text-muted-foreground">Users reached</div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
