"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { NAVIGATION, SITE_CONFIG } from "@/lib/constants"
import { Container } from "./Container"
import { Button } from "@/components/ui"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"

const menuVariants = {
  closed: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.2, ease: "easeIn" as const },
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut" as const,
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  closed: { opacity: 0, x: -10 },
  open: { opacity: 1, x: 0 },
}

function NavLink({
  href,
  children,
  isActive,
  onClick,
}: {
  href: string
  children: string
  isActive: boolean
  onClick?: () => void
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "relative text-sm font-semibold transition-colors py-2 px-1",
        isActive ? "text-primary" : "text-gray-500 hover:text-foreground"
      )}
      aria-current={isActive ? "true" : undefined}
    >
      {children}
      {isActive && (
        <motion.span
          layoutId="nav-underline"
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
    </Link>
  )
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (pathname !== "/") return
    const sections = ["hero", "work", "about", "lab", "services", "contact"]
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

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden"
    else document.body.style.overflow = ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  const isActive = (href: string) => {
    if (pathname !== "/") return false
    const hash = href.replace("/#", "")
    return activeSection === hash
  }

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "h-14 md:h-16 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm"
            : "h-16 md:h-20 bg-transparent"
        )}
      >
        <Container className="h-full">
          <div className="flex h-full items-center justify-between">
            <Link href="/" className="text-base md:text-lg font-black tracking-tight text-foreground transition-opacity hover:opacity-80">
              {SITE_CONFIG.name.toUpperCase()}
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              {NAVIGATION.map((item) => (
                <NavLink
                  key={item.href}
                  href={item.href}
                  isActive={isActive(item.href)}
                >
                  {item.title}
                </NavLink>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-4">
              <Button variant="primary" size="sm" asChild className="rounded-none px-6 font-bold uppercase tracking-widest text-[10px]">
                <Link href="/#contact">Collaborate</Link>
              </Button>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-foreground rounded-none hover:bg-gray-100 transition-colors"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </Container>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[40] bg-white pt-20 flex flex-col md:hidden"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <nav className="flex-1 flex flex-col justify-center items-center gap-8 p-6">
              {NAVIGATION.map((item) => (
                <motion.div key={item.href} variants={itemVariants}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-2xl sm:text-3xl md:text-4xl font-black tracking-tighter uppercase transition-colors block",
                      isActive(item.href) ? "text-primary" : "text-gray-300 hover:text-foreground"
                    )}
                  >
                    {item.title}
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={itemVariants} className="pt-8">
                <Button variant="primary" size="lg" asChild className="rounded-none w-full px-12 font-bold uppercase tracking-widest">
                  <Link href="/#contact" onClick={() => setIsOpen(false)}>
                    Get in Touch
                  </Link>
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
