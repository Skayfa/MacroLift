"use client"

import * as React from "react"
import { Section, SectionContainer } from "@/components/section"
import { EmailForm } from "@/components/email-form"
import { Badge } from "@/components/ui/badge"
import { HugeiconsIcon } from "@hugeicons/react"
import { PlusSignIcon } from "@hugeicons/core-free-icons"

export function Hero() {
  return (
    <Section size="lg" className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background -z-10" />

      <SectionContainer className="text-center space-y-8">
        {/* Badge for launch status */}
        <div className="flex justify-center">
          <Badge variant="secondary" className="gap-1.5">
            <HugeiconsIcon icon={PlusSignIcon} strokeWidth={2} className="size-3" />
            Lancement bientôt
          </Badge>
        </div>

        {/* Main headline */}
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight">
          La nutrition pour ceux qui{" "}
          <span className="text-primary">soulèvent</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto">
          Oublie les apps de régime. MacroLift c&apos;est fait pour la prise de masse.
          Scanne ta bouffe, on calcule tes macros, tu progresses. Simple.
        </p>

        {/* Email form */}
        <div className="flex justify-center pt-4">
          <EmailForm />
        </div>

        {/* Trust indicator */}
        <p className="text-sm text-muted-foreground">
          Rejoins la liste d&apos;attente. 3 scans gratuits par jour au lancement.
        </p>
      </SectionContainer>
    </Section>
  )
}
