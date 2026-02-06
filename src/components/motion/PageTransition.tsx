"use client"

import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion"
import { fadeIn } from "@/lib/motion"

interface PageTransitionProps {
  children: React.ReactNode
}

export function PageTransition({ children }: PageTransitionProps) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) return <>{children}</>

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      >
        {children}
      </m.div>
    </LazyMotion>
  )
}
