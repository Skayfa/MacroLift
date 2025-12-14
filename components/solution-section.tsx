"use client"

import * as React from "react"
import { Section, SectionContainer, SectionHeader, SectionTitle, SectionDescription } from "@/components/section"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { HugeiconsIcon } from "@hugeicons/react"
import { DownloadIcon, SettingsIcon, NotificationIcon } from "@hugeicons/core-free-icons"
import { Badge } from "@/components/ui/badge"

const solutions = [
  {
    icon: DownloadIcon,
    badge: "IA Vision",
    title: "Scanne ta bouffe",
    description: "Photo → macros. Notre IA reconnaît ton assiette et estime les macros. Fini le tracking manuel.",
    highlight: "Reconnaissance instantanée",
  },
  {
    icon: SettingsIcon,
    badge: "Smart Calc",
    title: "Calcul automatique",
    description: "Dis-nous ton objectif (masse, sèche, maintien), on calcule tes besoins. Ça s'ajuste automatiquement.",
    highlight: "Basé sur ton activité",
  },
  {
    icon: NotificationIcon,
    badge: "Suggestions",
    title: "Atteins tes macros",
    description: "Il te manque des protéines? On te suggère quoi manger pour compléter. Plus de calculs à la main.",
    highlight: "Recommendations personnalisées",
  },
]

export function SolutionSection() {
  return (
    <Section>
      <SectionContainer>
        <SectionHeader>
          <SectionTitle>
            La solution, <span className="text-primary">simple</span>
          </SectionTitle>
          <SectionDescription>
            Tout ce qu&apos;il te faut pour tracker comme un pro, sans perdre de temps
          </SectionDescription>
        </SectionHeader>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {solutions.map((solution, index) => (
            <Card key={index} className="relative overflow-hidden border-primary/20 hover:border-primary/40 transition-colors">
              {/* Subtle gradient background */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -z-10" />

              <CardHeader className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center justify-center size-12 rounded-xl bg-primary/10 text-primary">
                    <HugeiconsIcon icon={solution.icon} strokeWidth={2} className="size-6" />
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {solution.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{solution.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {solution.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-primary font-medium">
                  → {solution.highlight}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionContainer>
    </Section>
  )
}
