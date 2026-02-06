"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { NAVIGATION, SITE_CONFIG } from "@/lib/constants"
import { Container } from "./Container"
import { Button } from "@/components/ui"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const [activeSection, setActiveSection] = useState<string>("")

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  useEffect(() => {
    if (pathname !== "/") return
    const sections = ["hero", "work", "about", "lab", "contact"]
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
            break
          }
        }
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    )
    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [pathname])

  const isActive = (href: string) => {
    if (pathname !== "/") return false
    const hash = href.replace("/#", "")
    return activeSection === hash
  }

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-lg font-bold">{SITE_CONFIG.name}</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {NAVIGATION.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "true" : undefined}
                className={
                  isActive(item.href)
                    ? "text-sm font-medium text-foreground transition-colors"
                    : "text-sm font-medium text-muted-foreground transition-colors hover:text-foreground/70"
                }
              >
                {item.title}
              </Link>
            ))}
            <Button asChild size="sm">
              <Link href="/#contact">Get in touch</Link>
            </Button>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              aria-controls="mobile-nav"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </Button>
          </div>
        </div>

        {isOpen && (
          <div id="mobile-nav" className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-3">
              {NAVIGATION.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={
                    isActive(item.href)
                      ? "text-sm font-medium text-foreground"
                      : "text-sm font-medium text-muted-foreground hover:text-foreground/70"
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
              <Button asChild size="sm" className="w-fit">
                <Link href="/#contact" onClick={() => setIsOpen(false)}>
                  Get in touch
                </Link>
              </Button>
            </div>
          </div>
        )}
      </Container>
    </nav>
  )
}
