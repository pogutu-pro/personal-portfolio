"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui"
import { contactFormSchema, type ContactFormData } from "./validation"
import { Reveal } from "@/components/motion"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error("Failed to send message")
      }

      setSubmitStatus("success")
      reset()
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <Reveal>
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Name <span className="text-destructive">*</span>
          </label>
          <input
            id="name"
            type="text"
            {...register("name")}
            className="w-full rounded-lg border border-input bg-background px-4 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            aria-invalid={errors.name ? "true" : "false"}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p id="name-error" className="mt-1 text-sm text-destructive" role="alert">
              {errors.name.message}
            </p>
          )}
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            Email <span className="text-destructive">*</span>
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            className="w-full rounded-lg border border-input bg-background px-4 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-sm text-destructive" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>
      </Reveal>

      <Reveal delay={0.2}>
        <div>
          <label htmlFor="subject" className="mb-2 block text-sm font-medium">
            Subject <span className="text-destructive">*</span>
          </label>
          <input
            id="subject"
            type="text"
            {...register("subject")}
            className="w-full rounded-lg border border-input bg-background px-4 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            aria-invalid={errors.subject ? "true" : "false"}
            aria-describedby={errors.subject ? "subject-error" : undefined}
          />
          {errors.subject && (
            <p id="subject-error" className="mt-1 text-sm text-destructive" role="alert">
              {errors.subject.message}
            </p>
          )}
        </div>
      </Reveal>

      <Reveal delay={0.3}>
        <div>
          <label htmlFor="message" className="mb-2 block text-sm font-medium">
            Message <span className="text-destructive">*</span>
          </label>
          <textarea
            id="message"
            rows={8}
            {...register("message")}
            className="w-full rounded-lg border border-input bg-background px-4 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            aria-invalid={errors.message ? "true" : "false"}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message && (
            <p id="message-error" className="mt-1 text-sm text-destructive" role="alert">
              {errors.message.message}
            </p>
          )}
        </div>
      </Reveal>

      <Reveal delay={0.4}>
        <div>
          <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>

          {submitStatus === "success" && (
            <p className="mt-4 text-sm text-green-600 dark:text-green-400" role="alert">
              Message sent successfully! I&apos;ll get back to you soon.
            </p>
          )}

          {submitStatus === "error" && (
            <p className="mt-4 text-sm text-destructive" role="alert">
              Failed to send message. Please try again or email me directly.
            </p>
          )}
        </div>
      </Reveal>
    </form>
  )
}
