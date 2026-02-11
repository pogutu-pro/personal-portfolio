"use client"

import { motion } from "framer-motion"
import { FeatureCard, InfiniteCarousel } from "@/components/ui"

export function Capabilities() {
  return (
    <div className="py-20 bg-[#fff7ed] overflow-hidden border-y border-orange-200/50 relative">
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-200/40 to-transparent opacity-60" />
      
      <div className="max-w-7xl mx-auto px-6 mb-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-3"
        >
          <span className="font-black text-[10px] tracking-[0.4em] text-orange-600 uppercase bg-orange-100 px-4 py-2 border-l-4 border-orange-500">
            Capabilities
          </span>
        </motion.div>
        <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-foreground uppercase leading-none text-responsive">
          High-Performance <br />
          <span className="text-orange-400">Execution.</span>
        </h2>
      </div>

      <InfiniteCarousel speed={55}>
        <FeatureCard
          title="Ownership First"
          subtitle="Philosophy"
          description="Deep commitment to product outcomes and technical maintainability."
          accentColor="gold"
          className="w-full"
          solid={false}
        />
        <FeatureCard
          title="Scalable Ops"
          subtitle="Execution"
          description="Building multi-tenant systems handling complex real-world workflows."
          accentColor="blue"
          className="w-full"
          solid={false}
        />
        <FeatureCard
          title="Production Latency"
          subtitle="Optimization"
          description="Focusing on Core Web Vitals and backend speed for best-in-class CX."
          accentColor="green"
          className="w-full"
          solid={false}
        />
        <FeatureCard
          title="FastAPI Expert"
          subtitle="Backend"
          description="Architecting high-concurrency APIs with Python and async patterns."
          accentColor="maroon"
          className="w-full"
          solid={false}
        />
      </InfiniteCarousel>
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </div>
  )
}
