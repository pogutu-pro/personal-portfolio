"use client"

import Link from "next/link"
import { SITE_CONFIG, SOCIAL_LINKS } from "@/lib/constants"
import { Container } from "./Container"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  mail: Mail,
}

function SocialIcon({
  href,
  icon,
  label,
}: {
  href: string
  icon: "github" | "linkedin" | "twitter" | "mail"
  label: string
}) {
  const Icon = ICONS[icon]
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-10 h-10 rounded-none bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300"
    >
      {Icon && <Icon className="w-5 h-5" />}
    </a>
  )
}

function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "success">("idle")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("success")
    setEmail("")
    setTimeout(() => setStatus("idle"), 3000)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <div className="relative group">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="ENTER EMAIL FOR UPDATES"
          className="w-full px-4 py-3 rounded-none bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:border-white/30 focus:ring-0 outline-none text-[10px] font-bold tracking-widest uppercase transition-all"
          required
        />
        <div className="absolute bottom-0 left-0 h-0.5 bg-white w-0 group-focus-within:w-full transition-all duration-300" />
      </div>
      <button
        type="submit"
        disabled={status === "success"}
        className={cn(
          "px-4 py-3 rounded-none font-bold text-[10px] tracking-widest uppercase transition-all duration-200 border",
          status === "success" 
            ? "bg-green-success text-white border-green-success" 
            : "bg-white text-black border-white hover:bg-transparent hover:text-white"
        )}
      >
        {status === "success" ? "SENT" : "JOIN LOGS"}
      </button>
    </form>
  )
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/5 bg-[#121212] py-16 md:py-20">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-12 lg:gap-16 mb-16 md:mb-20">
          <div className="sm:col-span-2 lg:col-span-5 mb-4 lg:mb-0">
            <h3 className="text-2xl md:text-3xl font-black tracking-tighter text-white mb-6 uppercase">
              {SITE_CONFIG.name}
            </h3>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-md font-medium">
              Product-focused software engineer specializing in high-performance operational systems and scalable web infrastructure.
            </p>
          </div>
 
          <div className="lg:col-span-2">
            <h4 className="font-black text-[10px] tracking-widest text-white/40 mb-8 uppercase">Navigation</h4>
            <ul className="space-y-4">
              {["Work", "About", "Services", "Laboratory", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    href={`/#${link.toLowerCase()}`}
                    className="text-gray-500 hover:text-white font-bold text-xs uppercase tracking-wider transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
 
          <div className="lg:col-span-2">
            <h4 className="font-black text-[10px] tracking-widest text-white/40 mb-8 uppercase">Competencies</h4>
            <ul className="space-y-4 text-gray-500 font-bold text-xs uppercase tracking-wider">
              <li>Next.js / React</li>
              <li>FastAPI / Python</li>
              <li>PostgreSQL</li>
              <li>Systems Engineering</li>
            </ul>
          </div>
 
          <div className="sm:col-span-2 lg:col-span-3">
            <h4 className="font-black text-[10px] tracking-widest text-white/40 mb-8 uppercase">Intelligence</h4>
            <div className="flex gap-4 mb-8">
              {SOCIAL_LINKS.map((link) => (
                <SocialIcon
                  key={link.href}
                  href={link.href}
                  icon={link.icon as "github" | "linkedin" | "twitter" | "mail"}
                  label={link.title}
                />
              ))}
            </div>
            <NewsletterForm />
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-2">
            <p className="font-bold text-[10px] tracking-widest text-gray-600 uppercase">
              © {currentYear} {SITE_CONFIG.name} / PRODUCTION GRADE
            </p>
          </div>
          <div className="flex items-center gap-8">
            <a
              href={SITE_CONFIG.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[10px] tracking-widest text-gray-500 hover:text-white uppercase transition-colors"
            >
              SOURCE LOGS ↗
            </a>
            <p className="font-bold text-[10px] tracking-widest text-gray-700 uppercase">
              UPDATED: FEB 2026
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
