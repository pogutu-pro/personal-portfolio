import { forwardRef } from "react"
import { cn } from "@/lib/utils"

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "default" | "muted" | "accent"
}

const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, variant = "default", ...props }, ref) => {
    const variants = {
      default: "text-foreground hover:text-muted-foreground",
      muted: "text-muted-foreground hover:text-foreground",
      accent: "text-accent hover:text-accent/80 underline-offset-4 hover:underline",
    }

    return (
      <a
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-sm text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          variants[variant],
          className
        )}
        {...props}
      />
    )
  }
)
Link.displayName = "Link"

export { Link }
