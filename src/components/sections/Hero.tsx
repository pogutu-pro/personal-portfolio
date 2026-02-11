"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import NextImage from "next/image"
import { Button } from "@/components/ui"
import { GridBackground } from "@/components/three/GridBackground"
import { ChevronDown, ArrowRight } from "lucide-react"
import { BIO } from "@/data/bio"

function ScrollIndicator() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <motion.div
      className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer text-gray-400 hover:text-black transition-colors"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
      onClick={scrollToAbout}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && scrollToAbout()}
      aria-label="Scroll to about section"
    >
      <span className="text-[10px] font-black tracking-[0.3em] uppercase">Initialize</span>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        <ChevronDown className="w-5 h-5" />
      </motion.div>
    </motion.div>
  )
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden bg-[#FFFDF5]"
    >
      <GridBackground />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center py-12 md:py-20">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            <span className="font-black text-[10px] tracking-[0.3em] text-neutral-900 uppercase border-l-2 border-neutral-900 pl-4">
              {BIO.role}
            </span>
          </motion.div>
 
          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-foreground uppercase mb-8 md:mb-12 leading-[0.9] text-responsive"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
           Paul The Builder
          </motion.h1>
 
          <motion.p
            className="text-xl md:text-2xl lg:text-3xl text-neutral-900 font-bold mb-12 md:mb-16 max-w-3xl leading-[1.2] text-pretty tracking-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {BIO.summary}
          </motion.p>
 
          <motion.div
            className="flex flex-col sm:flex-row gap-6 mb-12 lg:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Button variant="primary" size="lg" asChild className="rounded-none px-8 md:px-12 h-14 md:h-16 text-[10px] md:text-xs font-black tracking-widest uppercase w-full sm:w-auto">
              <Link href="/#contact" className="inline-flex items-center gap-3 justify-center">
                Collaborate
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="rounded-none px-8 md:px-12 h-14 md:h-16 text-[10px] md:text-xs font-black tracking-widest uppercase border-gray-900 text-gray-900 border-2 hover:bg-gray-900 hover:text-white transition-all w-full sm:w-auto">
              <Link href="/#work" className="justify-center">Deployments</Link>
            </Button>
          </motion.div>
        </div>
 
        <motion.div 
          className="lg:col-span-5 relative aspect-[4/5] sm:aspect-square max-w-md mx-auto lg:max-w-none w-full group"
          initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <div className="absolute inset-0 bg-gray-50 border border-gray-100 -rotate-3 lg:-rotate-6 transition-transform group-hover:rotate-0 duration-700" />
            <div className="relative w-full h-full overflow-hidden border-2 border-black">
                {/* Default Image */}
                <NextImage 
                    src="/paul.jpeg"
                    alt="Paul Ogutu"
                    fill
                    priority
                    className="object-cover transition-opacity duration-700 group-hover:opacity-0"
                />
                 {/* Hover Image */}
                <NextImage 
                    src="/ogutu.png"
                    alt="Paul Ogutu Professional"
                    fill
                    priority
                    className="object-cover absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                />
            </div>

          <div className="absolute -bottom-4 lg:-bottom-6 -left-4 lg:-left-6 bg-neutral-900 px-6 lg:px-8 py-3 lg:py-4 text-white font-black text-[10px] lg:text-xs tracking-widest uppercase rotate-2 lg:rotate-3 shadow-xl transition-transform group-hover:rotate-0 duration-500">
            Principal Engineer
          </div>
        </motion.div>
      </div>

      <ScrollIndicator />
    </section>
  )
}
