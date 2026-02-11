"use client"

import React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface InfiniteCarouselProps {
  children: React.ReactNode[]
  speed?: number
  className?: string
  pauseOnHover?: boolean
}

export function InfiniteCarousel({
  children,
  speed = 40,
  className,
  pauseOnHover = true,
}: InfiniteCarouselProps) {
  const [isPaused, setIsPaused] = React.useState(false)
  
  // Triple the children to ensure seamless looping
  const items = [...children, ...children, ...children]

  return (
    <div className={cn("overflow-hidden whitespace-nowrap relative group/carousel", className)}>
      <motion.div
        className="inline-flex gap-8 py-10"
        initial={{ x: 0 }}
        animate={{
          x: isPaused ? undefined : ["0%", "-33.33%"],
        }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
        style={{
          width: "max-content",
        }}
        onMouseEnter={() => pauseOnHover && setIsPaused(true)}
        onMouseLeave={() => pauseOnHover && setIsPaused(false)}
        onTouchStart={() => pauseOnHover && setIsPaused(true)}
        onTouchEnd={() => pauseOnHover && setIsPaused(false)}
      >
        {items.map((child, index) => (
          <div key={index} className="inline-block flex-shrink-0 w-[240px] sm:w-[300px] md:w-[380px]">
            {child}
          </div>
        ))}
      </motion.div>
    </div>
  )
}
