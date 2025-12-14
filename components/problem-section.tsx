"use client"

import * as React from "react"
import { Section, SectionContainer, SectionHeader, SectionTitle, SectionDescription } from "@/components/section"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { HugeiconsIcon } from "@hugeicons/react"
import { SearchIcon, LayoutIcon, ComputerIcon } from "@hugeicons/core-free-icons"

const problems = [
  {
    icon: SearchIcon,
    title: "Tracker manuellement, c'est chiant",
    description: "Rechercher chaque aliment, peser, calculer... T'as mieux à faire qu'être esclave de MyFitnessPal.",
  },
  {
    icon: LayoutIcon,
    title: "Les apps sont faites pour maigrir",
    description: "Déficit calorique par-ci, perte de poids par-là. Mais pour la prise de masse? Rien.",
  },
  {
    icon: ComputerIcon,
    title: "Calculer ses besoins, c'est compliqué",
    description: "Combien de protéines? Et les glucides? Chaque jour tu te poses la question.",
  },
]

export function ProblemSection() {
  return (
    <Section variant="muted">
      <SectionContainer>
        <SectionHeader>
          <SectionTitle>Tu connais le problème</SectionTitle>
          <SectionDescription>
            La nutrition pour la muscu, c&apos;est pas fait pour être relou
          </SectionDescription>
        </SectionHeader>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {problems.map((problem, index) => (
            <Card key={index} className="border-muted-foreground/20">
              <CardHeader className="space-y-4">
                <div className="flex items-center justify-center size-12 rounded-xl bg-destructive/10 text-destructive">
                  <HugeiconsIcon icon={problem.icon} strokeWidth={2} className="size-6" />
                </div>
                <CardTitle className="text-xl">{problem.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {problem.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </SectionContainer>
    </Section>
  )
}
