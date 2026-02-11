"use client"


import { useEffect, useState } from "react"
import { Moon, Sun, Monitor } from "lucide-react"
import { cn } from "@/lib/utils"

const STORAGE_KEY = "theme"
type Theme = "light" | "dark" | "system"

function getEffectiveTheme(theme: Theme): "light" | "dark" {
  if (theme === "system") {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: light)").matches) {
      return "light"
    }
    return "dark"
  }
  return theme
}

function applyTheme(theme: Theme) {
  const root = document.documentElement
  root.setAttribute("data-theme", theme)
  const effective = getEffectiveTheme(theme)
  root.classList.toggle("dark", effective === "dark")
  root.classList.toggle("light", effective === "light")
}

export function ThemeToggle({ className }: { className?: string }) {
  const [theme, setThemeState] = useState<Theme>("system")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const stored = (localStorage.getItem(STORAGE_KEY) as Theme) || "system"
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setThemeState(stored)
    setMounted(true)
  }, [])


  const setTheme = (next: Theme) => {
    setThemeState(next)
    localStorage.setItem(STORAGE_KEY, next)
    applyTheme(next)
  }

  useEffect(() => {
    if (!mounted) return
    applyTheme(theme)
    const media = window.matchMedia("(prefers-color-scheme: light)")
    const handler = () => {
      // When system theme changes, re-apply the current theme setting
      // If theme is "system", it will re-evaluate based on new system preference
      // If theme is "light" or "dark", it will simply re-apply that specific theme
      applyTheme(theme)
    }
    media.addEventListener("change", handler)
    return () => media.removeEventListener("change", handler)
  }, [mounted, theme]) // Depend on 'theme' to re-run effect if theme state changes

  if (!mounted) {
    return (
      <div className={cn("flex items-center gap-1 rounded-lg bg-muted p-1", className)} aria-hidden>
        <span className="h-8 w-8" />
      </div>
    )
  }

  return (
    <div
      role="group"
      aria-label="Theme"
      className={cn(
        "flex items-center gap-0.5 rounded-lg bg-muted p-1 border border-border",
        className
      )}
    >
      <button
        type="button"
        onClick={() => setTheme("light")}
        title="Light"
        aria-pressed={theme === "light"}
        className={cn(
          "rounded-md p-2 transition-colors",
          theme === "light"
            ? "bg-[var(--color-primary)] text-white"
            : "text-muted-foreground hover:text-foreground hover:bg-muted/80"
        )}
      >
        <Sun className="h-4 w-4" />
      </button>
      <button
        type="button"
        onClick={() => setTheme("dark")}
        title="Dark"
        aria-pressed={theme === "dark"}
        className={cn(
          "rounded-md p-2 transition-colors",
          theme === "dark"
            ? "bg-[var(--color-primary)] text-white"
            : "text-muted-foreground hover:text-foreground hover:bg-muted/80"
        )}
      >
        <Moon className="h-4 w-4" />
      </button>
      <button
        type="button"
        onClick={() => setTheme("system")}
        title="System"
        aria-pressed={theme === "system"}
        className={cn(
          "rounded-md p-2 transition-colors",
          theme === "system"
            ? "bg-[var(--color-primary)] text-white"
            : "text-muted-foreground hover:text-foreground hover:bg-muted/80"
        )}
      >
        <Monitor className="h-4 w-4" />
      </button>
    </div>
  )
}
