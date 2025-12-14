import { Hero } from "@/components/hero"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { HowItWorksSection } from "@/components/how-it-works"
import { CTASection } from "@/components/cta-section"

export default function Page() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <CTASection />
    </main>
  )
}
