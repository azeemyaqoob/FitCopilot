import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Dumbbell, Search, Eye } from "lucide-react"

interface ContactForm {
  id: string
  name: string
  email: string
  phone: string | null
  service_type: string
  message: string
  status: string
  created_at: string
}

export default async function AdminContactFormsPage({
  searchParams,
}: {
  searchParams: { status?: string; search?: string }
}) {
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

  // Build query
  let query = supabase.from("contact_forms").select("*").order("created_at", { ascending: false })

  if (searchParams.status && searchParams.status !== "all") {
    query = query.eq("status", searchParams.status)
  }

  if (searchParams.search) {
    query = query.or(
      `name.ilike.%${searchParams.search}%,email.ilike.%${searchParams.search}%,service_type.ilike.%${searchParams.search}%`,
    )
  }

  const { data: contactForms, error } = await query

  if (error) {
    console.error("Error fetching contact forms:", error)
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Contact Forms</h1>
          <p className="text-gray-600">Manage customer inquiries and service requests</p>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg">Filters</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search by name, email, or service..."
                    className="pl-10"
                    defaultValue={searchParams.search || ""}
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <Link
                  href={`/admin/contact-forms?status=all${searchParams.search ? `&search=${searchParams.search}` : ""}`}
                >
                  <Button variant={!searchParams.status || searchParams.status === "all" ? "default" : "outline"}>
                    All
                  </Button>
                </Link>
                <Link
                  href={`/admin/contact-forms?status=pending${searchParams.search ? `&search=${searchParams.search}` : ""}`}
                >
                  <Button variant={searchParams.status === "pending" ? "default" : "outline"}>Pending</Button>
                </Link>
                <Link
                  href={`/admin/contact-forms?status=contacted${searchParams.search ? `&search=${searchParams.search}` : ""}`}
                >
                  <Button variant={searchParams.status === "contacted" ? "default" : "outline"}>Contacted</Button>
                </Link>
                <Link
                  href={`/admin/contact-forms?status=completed${searchParams.search ? `&search=${searchParams.search}` : ""}`}
                >
                  <Button variant={searchParams.status === "completed" ? "default" : "outline"}>Completed</Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Forms List */}
        <Card>
          <CardHeader>
            <CardTitle>Contact Form Submissions</CardTitle>
            <CardDescription>{contactForms ? `${contactForms.length} forms found` : "Loading..."}</CardDescription>
          </CardHeader>
          <CardContent>
            {contactForms && contactForms.length > 0 ? (
              <div className="space-y-4">
                {contactForms.map((form: ContactForm) => (
                  <div key={form.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-semibold text-lg">{form.name}</h3>
                          {getStatusBadge(form.status)}
                        </div>
                        <div className="grid md:grid-cols-2 gap-4 mb-3">
                          <div>
                            <p className="text-sm text-gray-600">
                              <strong>Email:</strong> {form.email}
                            </p>
                            {form.phone && (
                              <p className="text-sm text-gray-600">
                                <strong>Phone:</strong> {form.phone}
                              </p>
                            )}
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">
                              <strong>Service:</strong> {formatServiceType(form.service_type)}
                            </p>
                            <p className="text-sm text-gray-600">
                              <strong>Date:</strong> {new Date(form.created_at).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                        <div className="mb-3">
                          <p className="text-sm text-gray-600">
                            <strong>Message:</strong>
                          </p>
                          <p className="text-sm text-gray-800 mt-1 line-clamp-2">{form.message}</p>
                        </div>
                      </div>
                      <div className="ml-4">
                        <Link href={`/admin/contact-forms/${form.id}`}>
                          <Button variant="outline" size="sm" className="bg-transparent">
                            <Eye className="h-4 w-4 mr-2" />
                            View Details
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No contact forms found</p>
                <p className="text-gray-400 text-sm mt-2">
                  {searchParams.status || searchParams.search
                    ? "Try adjusting your filters"
                    : "Contact forms will appear here when submitted"}
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
