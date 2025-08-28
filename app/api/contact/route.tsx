import { type NextRequest, NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, serviceType, message } = body

    // Validate required fields
    if (!name || !email || !serviceType || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Create Supabase client
    const supabase = await createClient()

    // Insert contact form submission
    const { data, error } = await supabase.from("contact_forms").insert({
      name,
      email,
      phone: phone || null,
      service_type: serviceType,
      message,
      status: "pending",
    })

    if (error) {
      console.error("Database error:", error)
      return NextResponse.json({ error: "Failed to save contact form" }, { status: 500 })
    }

    // Send email notification (simplified version)
    try {
      await sendEmailNotification({
        name,
        email,
        phone,
        serviceType,
        message,
      })
    } catch (emailError) {
      console.error("Email notification failed:", emailError)
      // Don't fail the request if email fails
    }

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

// Simple email notification function
async function sendEmailNotification(formData: {
  name: string
  email: string
  phone?: string
  serviceType: string
  message: string
}) {
  // In a real application, you would integrate with an email service like:
  // - SendGrid
  // - Mailgun
  // - AWS SES
  // - Resend

  // For now, we'll just log the email content
  console.log("📧 New Contact Form Submission:")
  console.log("Name:", formData.name)
  console.log("Email:", formData.email)
  console.log("Phone:", formData.phone || "Not provided")
  console.log("Service:", formData.serviceType)
  console.log("Message:", formData.message)
  console.log("---")

  // Example of what you would do with a real email service:
  /*
  const emailContent = {
    to: "support@fitcopilot.com",
    from: "noreply@fitcopilot.com",
    subject: `New Contact Form: ${formData.serviceType}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${formData.name}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Phone:</strong> ${formData.phone || "Not provided"}</p>
      <p><strong>Service Interest:</strong> ${formData.serviceType}</p>
      <p><strong>Message:</strong></p>
      <p>${formData.message}</p>
    `
  };
  
  await emailService.send(emailContent);
  */
}
