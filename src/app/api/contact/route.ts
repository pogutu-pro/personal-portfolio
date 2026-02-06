import { NextResponse } from "next/server"
import { contactFormSchema } from "@/features/contact/validation"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const validated = contactFormSchema.parse(body)

    // TODO: Integrate with your email service (Resend, SendGrid, etc.)
    // For now, this is a stub that validates and returns success
    console.log("Contact form submission:", validated)

    // Example: Send email via Resend
    // await resend.emails.send({
    //   from: 'onboarding@resend.dev',
    //   to: 'your-email@example.com',
    //   subject: validated.subject,
    //   html: `<p>From: ${validated.name} (${validated.email})</p><p>${validated.message}</p>`,
    // })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
  }
}
