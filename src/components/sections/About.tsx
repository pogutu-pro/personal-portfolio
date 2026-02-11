"use client"

import { motion } from "framer-motion"
import NextImage from "next/image"
import { Section } from "@/components/layout"
import { Target, Zap, Hammer, TrendingUp } from "lucide-react"
import { BIO } from "@/data/bio"

export function About() {
  return (
    <Section
      id="about"
      className="relative overflow-hidden bg-[#f0fff4] min-h-[600px] md:min-h-[700px] flex items-center justify-center py-16 md:py-24"
      padding="none"
    >
      {/* Corner Images - Adjusting visibility and size for mobile */}
      <div className="absolute top-4 left-4 w-12 h-12 md:w-24 md:h-24 opacity-60 md:opacity-100 transition-opacity z-0 ring-1 ring-emerald-200 bg-white/50 p-2 shadow-sm">
        <NextImage 
          src="/logo.png" 
          alt="Logo" 
          fill 
          sizes="(max-width: 768px) 48px, 96px"
          className="object-contain" 
        />
      </div>
      <div className="absolute top-8 right-8 w-20 h-20 sm:w-32 sm:h-32 md:w-48 md:h-48 opacity-30 md:opacity-100 transition-all z-0 rotate-3 group overflow-hidden border-2 border-emerald-100 bg-white p-1.5 shadow-md hidden xs:block">
        <NextImage 
          src="/paul.jpeg" 
          alt="Paul" 
          fill 
          sizes="(max-width: 768px) 128px, 192px"
          priority
          className="object-cover transition-all duration-700" 
        />
      </div>
      <div className="absolute bottom-8 left-8 w-24 h-32 sm:w-32 sm:h-44 md:w-48 md:h-64 opacity-30 md:opacity-100 transition-all z-0 -rotate-3 border-2 border-emerald-100 bg-white p-1.5 shadow-md hidden sm:block">
        <NextImage 
          src="/ogutu.png" 
          alt="Ogutu" 
          fill 
          sizes="(max-width: 768px) 128px, 192px"
          className="object-cover transition-all duration-700" 
        />
      </div>
      <div className="absolute bottom-4 right-4 w-24 h-32 sm:w-36 sm:h-52 md:w-60 md:h-80 opacity-30 md:opacity-100 transition-all z-0 rotate-2 border-2 border-emerald-100 bg-white p-1.5 shadow-md hidden md:block">
        <NextImage 
          src="/paul ogutu.png" 
          alt="Paul Ogutu" 
          fill 
          sizes="(max-width: 768px) 112px, 240px"
          className="object-contain object-bottom transition-all duration-700" 
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start md:items-center">
          {/* Education Tree Column */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-8"
            >
              <span className="font-black text-[10px] tracking-[0.4em] text-emerald-600 uppercase bg-emerald-50 px-4 py-2 border-l-4 border-emerald-500">
                Education
              </span>
            </motion.div>
            
            <div className="relative pl-6 md:pl-8 space-y-10 md:space-y-12">
              {/* Vertical Line */}
              <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-emerald-100" />

              {/* Milestone 1: High School */}
              <motion.div 
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="absolute -left-[27px] top-2 w-4 h-4 rounded-full bg-white border-2 border-emerald-500 z-10" />
                <div className="space-y-2 md:space-y-3">
                  <h3 className="text-lg md:text-2xl font-black text-foreground uppercase tracking-tight">Homabay School — High School (A-)</h3>
                  <p className="text-[13px] md:text-base text-gray-500 font-medium leading-relaxed">
                    Built discipline, independence, and strong analytical and problem-solving foundations. Graduated with a strong academic record, achieving an **A- grade**.
                  </p>
                </div>
              </motion.div>

              {/* Milestone 2: University */}
              <motion.div 
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className="absolute -left-[27px] top-2 w-4 h-4 rounded-full bg-white border-2 border-emerald-500 z-10" />
                <div className="space-y-2 md:space-y-3">
                  <h3 className="text-lg md:text-2xl font-black text-foreground uppercase tracking-tight">Dedan Kimathi University — BSc CS</h3>
                  <p className="text-[13px] md:text-base text-gray-500 font-medium leading-relaxed">
                    Training in software engineering, algorithms, data structures, networking, and systems design, applied through practical projects and collaborative research.
                  </p>
                </div>
              </motion.div>

              {/* Milestone 3: Self-Education */}
              <motion.div 
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="absolute -left-[27px] top-2 w-4 h-4 rounded-full bg-white border-2 border-emerald-500 z-10" />
                <div className="space-y-3 md:space-y-4">
                  <h3 className="text-lg md:text-2xl font-black text-foreground uppercase tracking-tight">Self-Education</h3>
                  <p className="text-[13px] md:text-base text-gray-500 font-medium leading-relaxed">
                    Independent Learning — Focused on modern technical architectures and startup execution through hands-on building:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "React", "Modern Frontend", "Tailwind CSS", "REST APIs", "FastAPI", "Django", "Python", "Linux/CLI", "Git", "Deployment", "SEO", "Design Systems", "Startup Execution"
                    ].map((skill) => (
                      <span key={skill} className="text-[9px] font-black uppercase tracking-wider px-2.5 py-1.5 bg-emerald-50 text-emerald-700 border border-emerald-100/50">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Philosophy Items (Significantly Enlarged Cards) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {BIO.philosophy.map((item, i) => {
              const Icons = [Target, Zap, Hammer, TrendingUp]
              const Icon = Icons[i] || Target
              
              return (
                <div key={i} className="group p-6 md:p-10 bg-white border-2 border-emerald-50/50 hover:border-emerald-500 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 duration-500">
                  <div className="flex items-center gap-4 md:gap-5 mb-3 md:mb-5">
                    <div className="w-9 h-9 md:w-12 md:h-12 bg-black flex items-center justify-center text-white group-hover:bg-emerald-500 transition-colors shadow-lg">
                      <Icon className="w-4 h-4 md:w-5 md:h-5" />
                    </div>
                    <h4 className="font-black text-xs md:text-sm tracking-[0.2em] text-foreground uppercase">{item.title}</h4>
                  </div>
                  <p className="text-xs md:text-sm text-gray-500 font-bold leading-relaxed">
                    {item.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </Section>
  )
}
