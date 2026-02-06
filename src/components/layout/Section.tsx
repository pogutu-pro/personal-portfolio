import { cn } from "@/lib/utils"

interface SectionProps {
  children: React.ReactNode
  className?: string
  as?: "section" | "div" | "header" | "footer"
  padding?: "none" | "sm" | "md" | "lg"
  id?: string
}

const paddingClasses: Record<NonNullable<SectionProps["padding"]>, string> = {
  none: "",
  sm: "py-12 md:py-16",
  md: "py-16 md:py-24",
  lg: "py-20 md:py-32",
}

export function Section({
  children,
  className,
  as = "section",
  padding = "md",
  id,
}: SectionProps) {
  const Comp = as
  return (
    <Comp id={id} className={cn(paddingClasses[padding], className)}>
      {children}
    </Comp>
  )
}

