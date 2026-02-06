"use client"

import { motion } from "framer-motion"
import { fadeInUp, shouldReduceMotion } from "@/lib/motion"

interface RevealProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  className?: string
}

export function Reveal({ children, delay = 0, duration = 0.3, className }: RevealProps) {
  if (shouldReduceMotion()) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      transition={{ 
        duration, 
        delay,
        ease: [0.4, 0, 0.2, 1] 
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
