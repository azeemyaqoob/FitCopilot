import { redirect, notFound } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Dumbbell, ArrowLeft, Mail, Phone, Calendar, User } from "lucide-react"
import { ContactFormActions } from "@/components/admin/contact-form-actions"

export default async function ContactFormDetailPage({ params }: { params: { id: string } }) {
  const supabase = await createClient()

  // Check if user is authenticated and admin
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser()
  if (authError || !user) {
    redirect("/admin/login")
  }

  const { data: adminUser, error: adminError } = await supabase
    .from("admin_users")
    .select("*")
    .eq("id", user.id)
    .single()

  if (adminError || !adminUser) {
    redirect("/admin/login?error=unauthorized")
  }

  // Get contact form details
  const { data: contactForm, error } = await supabase.from("contact_forms").select("*").eq("id", params.id).single()

  if (error || !contactForm) {
    notFound()
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return <Badge variant="destructive">Pending</Badge>
      case "contacted":
        return <Badge variant="default">Contacted</Badge>
      case "completed":
        return <Badge variant="secondary">Completed</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  const formatServiceType = (serviceType: string) => {
    return serviceType
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Navigation */}
      <nav className="border-b bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/admin" className="flex items-center gap-2">
              <Dumbbell className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">FitCopilot Admin</span>
            </Link>
            <div className="flex items-center gap-4">
              <Badge variant="secondary">{adminUser.role === "super_admin" ? "Super Admin" : "Admin"}</Badge>
              <span className="text-sm text-gray-600">{user.email}</span>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/admin/contact-forms"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-500 mb-4"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Contact Forms
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Contact Form Details</h1>
              <p className="text-gray-600">Submitted on {new Date(contactForm.created_at).toLocaleDateString()}</p>
            </div>
            {getStatusBadge(contactForm.status)}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-500">Full Name</label>
                    <p className="text-lg font-semibold">{contactForm.name}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Service Interest</label>
                    <p className="text-lg">{formatServiceType(contactForm.service_type)}</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-gray-400" />
                    <div>
                      <label className="text-sm font-medium text-gray-500">Email</label>
                      <p className="text-lg">{contactForm.email}</p>
                    </div>
                  </div>
                  {contactForm.phone && (
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-gray-400" />
                      <div>
                        <label className="text-sm font-medium text-gray-500">Phone</label>
                        <p className="text-lg">{contactForm.phone}</p>
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-gray-400" />
                  <div>
                    <label className="text-sm font-medium text-gray-500">Submitted</label>
                    <p className="text-lg">
                      {new Date(contactForm.created_at).toLocaleDateString()} at{" "}
                      {new Date(contactForm.created_at).toLocaleTimeString()}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Message</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-800 whitespace-pre-wrap">{contactForm.message}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Actions */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Actions</CardTitle>
                <CardDescription>Update the status of this contact form</CardDescription>
              </CardHeader>
              <CardContent>
                <ContactFormActions contactForm={contactForm} />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Contact</CardTitle>
                <CardDescription>Reach out to the customer directly</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <a href={`mailto:${contactForm.email}`} className="block">
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <Mail className="h-4 w-4 mr-2" />
                    Send Email
                  </Button>
                </a>
                {contactForm.phone && (
                  <a href={`tel:${contactForm.phone}`} className="block">
                    <Button variant="outline" className="w-full justify-start bg-transparent">
                      <Phone className="h-4 w-4 mr-2" />
                      Call Phone
                    </Button>
                  </a>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
