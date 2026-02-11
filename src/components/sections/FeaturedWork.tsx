"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { getFeaturedProjects } from "@/features/projects/data"
import { Button } from "@/components/ui"
import { Section } from "@/components/layout"
import { FeatureCard } from "@/components/ui/FeatureCard"
import { InfiniteCarousel } from "@/components/ui/InfiniteCarousel"
import { ArrowUpRight } from "lucide-react"

export function FeaturedWork() {
  const featuredProjects = getFeaturedProjects()

  return (
    <Section
      id="work"
      title="Engineering Assets"
      subtitle="Selected Projects"
      className="bg-blue-50/50 overflow-hidden relative py-16 border-y border-blue-100/50"
    >
      {/* Dynamic Background Element */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, #2563eb 1.5px, transparent 0)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 mb-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="font-black text-[10px] tracking-[0.4em] text-blue-600 uppercase bg-blue-600/5 px-4 py-2 border-l-4 border-blue-600">
            Internal Systems
          </span>
        </motion.div>
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-blue-950 uppercase leading-[0.85]">
          Strategic <br />
          <span className="text-blue-600">Infrastructure.</span>
        </h2>
      </div>

      <div className="relative z-10">
        <InfiniteCarousel speed={45} pauseOnHover={true}>
          {featuredProjects.map((project, index) => (
            <div key={project.id} className="px-4">
              <FeatureCard
                index={index}
                title={project.title}
                subtitle={project.subtitle}
                description={project.impact}
                tags={project.tags}
                href="https://github.com/pogutu-pro"
                image={project.thumbnail}
                accentColor="blue"
                className="w-[280px] md:w-[350px] shadow-2xl shadow-blue-900/5"
                solid={false}
              />
            </div>
          ))}
        </InfiniteCarousel>
      </div>

      <motion.div
        className="mt-16 flex justify-center relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Button variant="outline" size="lg" asChild className="rounded-none border-blue-900/10 text-blue-900 border-2 font-black text-[11px] tracking-[0.4em] uppercase px-16 h-16 hover:bg-blue-950 hover:text-white transition-all duration-500">
          <Link href="https://github.com/pogutu-pro" className="inline-flex items-center gap-4" target="_blank" rel="noopener noreferrer">
            Engineering Logs
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </Button>
      </motion.div>
    </Section>
  )
}
