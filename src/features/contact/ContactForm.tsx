"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui"
import { contactFormSchema, type ContactFormData } from "./validation"
import { Send } from "lucide-react"

const inputClass =
  "w-full rounded-xl bg-muted border border-border px-4 py-3 text-foreground placeholder-muted-foreground focus:border-[var(--color-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)] transition-colors"

export function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus("submitting")
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) })
      if (!res.ok) throw new Error()
      setSubmitStatus("success")
      reset()
    } catch {
      setSubmitStatus("error")
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-white">Your Name *</label>
        <input id="name" type="text" placeholder="John Kamau" {...register("name")} className={inputClass} aria-invalid={!!errors.name} />
        {errors.name && <p className="mt-1 text-sm text-red-400" role="alert">{errors.name.message}</p>}
      </div>
      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-white">Email Address *</label>
        <input id="email" type="email" placeholder="john@company.com" {...register("email")} className={inputClass} aria-invalid={!!errors.email} />
        {errors.email && <p className="mt-1 text-sm text-red-400" role="alert">{errors.email.message}</p>}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="projectType" className="mb-2 block text-sm font-medium text-white">Project Type</label>
          <select id="projectType" {...register("projectType")} className={inputClass}>
            <option value="">Select...</option>
            <option value="web-app">Web Application</option>
            <option value="mobile-app">Mobile App</option>
            <option value="ecommerce">E-Commerce</option>
            <option value="dashboard">Dashboard/Analytics</option>
            <option value="api">API Development</option>
            <option value="consulting">Consulting</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="budget" className="mb-2 block text-sm font-medium text-white">Budget Range</label>
          <select id="budget" {...register("budget")} className={inputClass}>
            <option value="">Select...</option>
            <option value="under-5k">Under $5K</option>
            <option value="5k-10k">$5K - $10K</option>
            <option value="10k-25k">$10K - $25K</option>
            <option value="25k-plus">$25K+</option>
            <option value="flexible">Flexible</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="timeline" className="mb-2 block text-sm font-medium text-white">Desired Timeline</label>
        <input id="timeline" type="text" placeholder="e.g., ASAP, 3 months" {...register("timeline")} className={inputClass} />
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-white">Project Details *</label>
        <textarea id="message" rows={5} placeholder="Tell me about your project..." {...register("message")} className={inputClass + " resize-none"} aria-invalid={!!errors.message} />
        {errors.message && <p className="mt-1 text-sm text-red-400" role="alert">{errors.message.message}</p>}
      </div>
      <Button type="submit" variant="primary" size="lg" className="w-full inline-flex items-center justify-center gap-2" disabled={submitStatus === "submitting"}>
        {submitStatus === "submitting" ? "Sending..." : "Send Message"}
        <Send className="w-4 h-4" />
      </Button>
      {submitStatus === "success" && <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-sm" role="alert">✓ Message sent! I&apos;ll get back to you within 24 hours.</div>}
      {submitStatus === "error" && <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm" role="alert">✗ Something went wrong. Please try emailing me directly.</div>}
    </form>
  )
}
