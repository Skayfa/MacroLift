import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const sectionVariants = cva(
  "w-full px-4 md:px-6 lg:px-8",
  {
    variants: {
      variant: {
        default: "bg-background",
        muted: "bg-muted/50",
        primary: "bg-primary/5",
      },
      size: {
        default: "py-12 md:py-16 lg:py-24",
        sm: "py-8 md:py-12 lg:py-16",
        lg: "py-16 md:py-24 lg:py-32",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Section({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<"section"> & VariantProps<typeof sectionVariants>) {
  return (
    <section
      data-slot="section"
      className={cn(sectionVariants({ variant, size }), className)}
      {...props}
    />
  )
}

function SectionContainer({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("mx-auto max-w-7xl", className)}
      {...props}
    />
  )
}

function SectionHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("mx-auto max-w-3xl text-center mb-12", className)}
      {...props}
    />
  )
}

function SectionTitle({ className, ...props }: React.ComponentProps<"h2">) {
  return (
    <h2
      className={cn("text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4", className)}
      {...props}
    />
  )
}

function SectionDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      className={cn("text-lg md:text-xl text-muted-foreground", className)}
      {...props}
    />
  )
}

export { Section, SectionContainer, SectionHeader, SectionTitle, SectionDescription, sectionVariants }
