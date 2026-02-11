"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { ArrowUpRight } from "lucide-react"

interface FeatureCardProps {
  title: string
  subtitle: string
  description?: string
  tags?: readonly string[]
  href?: string
  className?: string
  index?: number
  accentColor?: "blue" | "red" | "green" | "gold" | "orange" | "maroon"
  solid?: boolean
  image?: string
}

export function FeatureCard({
  title,
  subtitle,
  description,
  tags,
  href,
  className,
  index = 0,
  accentColor = "blue",
  solid = false,
  image,
}: FeatureCardProps) {
  const CardWrapper = href ? "a" : "div"

  const accentClasses = {
    blue: solid ? "bg-blue-brand text-white border-transparent" : "group-hover:text-blue-brand border-blue-brand/20 hover:border-blue-brand bg-white",
    red: solid ? "bg-red-error text-white border-transparent" : "group-hover:text-red-error border-red-error/20 hover:border-red-error bg-white",
    green: solid ? "bg-green-success text-white border-transparent" : "group-hover:text-green-success border-green-success/20 hover:border-green-success bg-white",
    gold: solid ? "bg-gold text-white border-transparent" : "group-hover:text-gold border-gold/20 hover:border-gold bg-white",
    orange: solid ? "bg-orange-accent text-white border-transparent" : "group-hover:text-orange-accent border-orange-accent/20 hover:border-orange-accent bg-white",
    maroon: solid ? "bg-maroon text-white border-transparent" : "group-hover:text-maroon border-maroon/20 hover:border-maroon bg-white",
  }

  const tagClasses = {
    blue: solid ? "text-white/80" : "text-blue-brand/60",
    red: solid ? "text-white/80" : "text-red-error/60",
    green: solid ? "text-white/80" : "text-green-success/60",
    gold: solid ? "text-white/80" : "text-gold/60",
    orange: solid ? "text-white/80" : "text-orange-accent/60",
    maroon: solid ? "text-white/80" : "text-maroon/60",
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={cn("group relative", className)}
    >
      <CardWrapper
        href={href}
        className={cn(
          "flex flex-col h-full border transition-all duration-500 overflow-hidden relative rounded-[1.5rem] md:rounded-[2rem]",
          accentClasses[accentColor],
          href && "hover:translate-y-[-8px] hover:shadow-[0_40px_80px_rgba(0,0,0,0.15)] cursor-pointer",
          solid && "shadow-xl hover:shadow-2xl min-h-[380px] sm:min-h-[450px] md:min-h-[500px]"
        )}
      >
        {/* Glass Effect for Solid variant */}
        {solid && (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
            <div className="absolute -inset-[500px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
          </>
        )}
        {/* Project Image Preview Header */}
        {image && (
          <div className="relative aspect-video overflow-hidden group-hover:aspect-square transition-all duration-700 ease-[0.16,1,0.3,1]">
            <Image 
              src={image} 
              alt={title} 
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110" 
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {!solid && (
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            )}
            {/* Visual Indicator for Image context */}
            <div className="absolute top-4 left-4">
              <div className="w-2 h-8 bg-blue-500/80" />
            </div>
          </div>
        )}

        <div className={cn(
          "flex flex-col flex-grow",
          image ? "p-8 md:p-10" : "p-7 md:p-9",
          solid && "justify-end"
        )}>
          {!solid && (
            <div className="flex justify-between items-start mb-8 transition-colors duration-500">
              <span className={cn(
                "font-black tracking-[0.4em] uppercase text-[10px]",
                tagClasses[accentColor]
              )}>
                {subtitle}
              </span>
              {href && (
                <ArrowUpRight className="w-5 h-5 text-gray-300 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              )}
            </div>
          )}

        <h3 className={cn(
          "font-black tracking-tighter uppercase mb-4 md:mb-5 transition-colors duration-500 relative z-10 leading-[0.9] break-words hyphens-auto whitespace-normal",
          solid ? "text-2xl sm:text-3xl md:text-5xl text-white" : "text-xl sm:text-2xl md:text-3xl lg:text-4xl text-foreground group-hover:text-inherit"
        )}>
          {title}
        </h3>

        {description && (
          <p className={cn(
            "font-bold leading-snug mb-6 md:mb-8 flex-grow relative z-10 break-words hyphens-auto whitespace-normal",
            solid ? "text-sm sm:text-base md:text-lg text-white underline decoration-white/20 underline-offset-4" : "text-[13px] md:text-base text-gray-700"
          )}>
            {description}
          </p>
        )}

          {tags && (
            <div className={cn(
              "flex flex-wrap gap-2 pt-8 border-t",
              solid ? "border-white/10" : "border-gray-100"
            )}>
              {tags.map((tag) => (
                <span
                  key={tag}
                  className={cn(
                    "font-black text-[8px] tracking-widest uppercase px-3 py-1.5 rounded-full transition-all duration-300",
                    solid ? "bg-white text-black shadow-sm" : "bg-gray-50 text-gray-400 group-hover:bg-blue-50 group-hover:text-blue-600",
                  )}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </CardWrapper>
    </motion.div>
  )
}
