"use client"

import { usePathname } from "next/navigation"
import { useEffect } from "react"

export function RouteFocus() {
  const pathname = usePathname()

  useEffect(() => {
    const el = document.getElementById("main-content")
    if (!el) return
    el.focus({ preventScroll: true })
  }, [pathname])

  return null
}

