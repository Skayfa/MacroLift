"use client"

import * as React from "react"
import { Section, SectionContainer, SectionHeader, SectionTitle, SectionDescription } from "@/components/section"
import { HugeiconsIcon } from "@hugeicons/react"
import { DownloadIcon, SettingsIcon, EyeIcon } from "@hugeicons/core-free-icons"

const steps = [
  {
    number: "01",
    icon: DownloadIcon,
    title: "Snap ta bouffe",
    description: "Prends une photo de ton repas. Ça prend 2 secondes.",
  },
  {
    number: "02",
    icon: SettingsIcon,
    title: "On calcule tes macros",
    description: "Notre IA analyse ton assiette et estime protéines, glucides, lipides.",
  },
  {
    number: "03",
    icon: EyeIcon,
    title: "Tu progresses",
    description: "Suis tes macros, atteins tes objectifs, prends de la masse. Point.",
  },
]

export function HowItWorksSection() {
  return (
    <Section variant="primary">
      <SectionContainer>
        <SectionHeader>
          <SectionTitle>Comment ça marche?</SectionTitle>
          <SectionDescription>
            Trois étapes. Zéro prise de tête.
          </SectionDescription>
        </SectionHeader>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center">
              {/* Connector line (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-1/2 w-full h-0.5 bg-primary/20">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rotate-45 border-t-2 border-r-2 border-primary/40" />
                </div>
              )}

              {/* Step number and icon */}
              <div className="relative z-10 mb-6">
                <div className="flex items-center justify-center size-32 rounded-2xl bg-background border-2 border-primary">
                  <HugeiconsIcon icon={step.icon} strokeWidth={2} className="size-16 text-primary" />
                </div>
                <div className="absolute -top-4 -right-4 flex items-center justify-center size-12 rounded-full bg-primary text-primary-foreground font-bold text-lg">
                  {step.number}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-lg max-w-xs">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </SectionContainer>
    </Section>
  )
}
