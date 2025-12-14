"use client"

import * as React from "react"
import { Section, SectionContainer } from "@/components/section"
import { EmailForm } from "@/components/email-form"
import { Badge } from "@/components/ui/badge"
import { HugeiconsIcon } from "@hugeicons/react"
import { PlusSignIcon } from "@hugeicons/core-free-icons"

export function CTASection() {
  return (
    <Section size="lg" className="relative overflow-hidden">
      {/* Background pattern/gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-background -z-10" />

      <SectionContainer className="text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Prêt à tracker sans te prendre la tête?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Rejoins la liste d&apos;attente et sois parmi les premiers à essayer MacroLift.
          </p>
        </div>

        <div className="flex justify-center">
          <EmailForm />
        </div>

        <div className="flex justify-center">
          <Badge variant="secondary" className="gap-2">
            <HugeiconsIcon icon={PlusSignIcon} strokeWidth={2} className="size-4" />
            3 scans gratuits par jour au lancement
          </Badge>
        </div>

        <p className="text-sm text-muted-foreground pt-4">
          Pas de spam. Juste une notification quand on lance.
        </p>
      </SectionContainer>
    </Section>
  )
}
