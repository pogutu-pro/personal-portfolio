"use client"

import { motion } from "framer-motion"
import { Section } from "@/components/layout"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

export function ContactCTA() {
  return (
    <Section
      id="contact"
      title=""
      subtitle=""
      className="bg-[#faf9f6] overflow-hidden relative border-y border-orange-100"
    >
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #78350f 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="max-w-5xl mx-auto py-4 px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-2"
          >
            <h2 className="text-4xl sm:text-5xl md:text-8xl font-black tracking-tighter text-amber-950 uppercase leading-[0.9] sm:leading-[0.8] mb-4 text-responsive">
              Thinking of <br /> 
              <span className="text-orange-600">Something <br /> Big.</span>
            </h2>
            <p className="max-w-2xl mx-auto text-amber-900/60 font-bold text-xs md:text-sm uppercase tracking-[0.2em]">
              Currently open for strategic infrastructure projects <br /> and full-stack engineering partnerships.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-3xl">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link 
                href="mailto:pogutu010@gmail.com"
                className="group block p-6 bg-white border border-orange-100 hover:border-orange-500/50 transition-all duration-500 text-left shadow-sm hover:shadow-xl"
              >
                <span className="block text-[9px] font-black text-orange-600 uppercase tracking-[0.4em] mb-2">Email Me</span>
                <div className="flex items-center justify-between">
                  <span className="text-lg md:text-xl font-black text-amber-950 truncate">pogutu010@gmail.com</span>
                  <ArrowUpRight className="w-5 h-5 text-amber-900/20 group-hover:text-orange-600 transition-colors" />
                </div>
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link 
                href="https://www.linkedin.com/in/paul-ogutu"
                target="_blank"
                className="group block p-6 bg-white border border-orange-100 hover:border-orange-500/50 transition-all duration-500 text-left shadow-sm hover:shadow-xl"
              >
                <span className="block text-[9px] font-black text-orange-600 uppercase tracking-[0.4em] mb-2">LinkedIn Profile</span>
                <div className="flex items-center justify-between">
                  <span className="text-lg md:text-xl font-black text-amber-950 truncate">Professional Profile</span>
                  <ArrowUpRight className="w-5 h-5 text-amber-900/20 group-hover:text-orange-600 transition-colors" />
                </div>
              </Link>
            </motion.div>
          </div>
          
          <div className="pt-4">
             <span className="text-[9px] font-black text-amber-900/20 uppercase tracking-[0.8em]">Paul Ogutu — 2026</span>
          </div>
        </div>
      </div>
    </Section>
  )
}
