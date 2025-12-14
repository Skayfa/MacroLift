"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Field, FieldError } from "@/components/ui/field"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowRight01Icon, Tick02Icon } from "@hugeicons/core-free-icons"

export function EmailForm() {
  const [email, setEmail] = React.useState("")
  const [isLoading, setIsLoading] = React.useState(false)
  const [isSuccess, setIsSuccess] = React.useState(false)
  const [error, setError] = React.useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    // Client-side validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setError("Entre un email valide")
      setIsLoading(false)
      return
    }

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Erreur lors de l'inscription")
      }

      setIsSuccess(true)
      setEmail("")
    } catch (err) {
      setError(err instanceof Error ? err.message : "Une erreur s'est produite")
    } finally {
      setIsLoading(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="flex items-center gap-3 px-6 py-3 rounded-lg bg-primary/10 border border-primary/20 max-w-md">
        <div className="flex items-center justify-center size-8 rounded-full bg-primary text-primary-foreground">
          <HugeiconsIcon icon={Tick02Icon} strokeWidth={2} className="size-5" />
        </div>
        <p className="text-sm font-medium">
          C&apos;est bon! Check tes emails pour confirmer.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <Field className="gap-3">
        <div className="flex gap-2">
          <Input
            type="email"
            placeholder="ton@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
            className="flex-1"
            aria-invalid={!!error}
            aria-describedby={error ? "email-error" : undefined}
          />
          <Button
            type="submit"
            disabled={isLoading || !email}
            className="gap-1.5"
          >
            {isLoading ? "..." : "Rejoindre"}
            {!isLoading && <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} data-icon="inline-end" />}
          </Button>
        </div>
        {error && (
          <FieldError id="email-error">
            {error}
          </FieldError>
        )}
      </Field>
    </form>
  )
}
