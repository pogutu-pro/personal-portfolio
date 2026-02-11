import { cn } from "@/lib/utils"
import { Container } from "./Container"

interface SectionProps {
  children: React.ReactNode
  className?: string
  as?: "section" | "div" | "header" | "footer"
  padding?: "none" | "sm" | "md" | "lg"
  id?: string
  title?: string
  subtitle?: string
  variant?: "default" | "muted"
  containerSize?: "sm" | "md" | "lg" | "xl" | "full"
}

export function Section({
  children,
  className,
  as: Comp = "section",
  padding = "lg",
  id,
  title,
  subtitle,
  variant = "default",
  containerSize = "lg",
}: SectionProps) {
  const paddingClasses = {
    none: "",
    sm: "py-12",
    md: "py-24",
    lg: "py-16 md:py-32 lg:py-48",
  }

  return (
    <Comp
      id={id}
      className={cn(
        paddingClasses[padding],
        variant === "muted" ? "bg-gray-50" : "bg-white",
        className
      )}
    >
      <Container size={containerSize}>
        {(title || subtitle) && (
          <div className="mb-20">
            {subtitle && (
              <span className="block font-black text-[10px] tracking-[0.3em] text-primary uppercase mb-4">
                {subtitle}
              </span>
            )}
            {title && (
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter text-foreground uppercase max-w-4xl">
                {title}
              </h2>
            )}
          </div>
        )}
        {children}
      </Container>
    </Comp>
  )
}

