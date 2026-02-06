"use client"

import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion"
import { fadeInUp } from "@/lib/motion"

interface RevealProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  className?: string
}

export function Reveal({ children, delay = 0, duration = 0.3, className }: RevealProps) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{
          duration,
          delay,
          ease: [0.4, 0, 0.2, 1],
        }}
        className={className}
      >
        {children}
      </m.div>
    </LazyMotion>
  )
}
