import Link from "next/link"
import { SITE_CONFIG, SOCIAL_LINKS } from "@/lib/constants"
import { Container } from "./Container"

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <Container>
        <div className="py-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="col-span-1 md:col-span-2">
              <Link href="/" className="flex items-center space-x-2">
                <span className="text-lg font-bold">{SITE_CONFIG.name}</span>
              </Link>
              <p className="mt-4 max-w-md text-sm text-muted-foreground">
                {SITE_CONFIG.description}
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold">Navigation</h3>
              <nav>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link
                      href="/#work"
                      className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                      Work
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#about"
                      className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#lab"
                      className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                      Lab
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#contact"
                      className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold">Connect</h3>
              <ul className="space-y-2 text-sm">
                {SOCIAL_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground transition-colors hover:text-foreground"
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
            <p>
              &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
