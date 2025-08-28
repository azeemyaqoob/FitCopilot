import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Dumbbell, Users, MessageSquare, TrendingUp, LogOut, Settings } from "lucide-react"

export default async function AdminDashboard() {
  const supabase = await createClient()

  // Check if user is authenticated
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser()
  if (authError || !user) {
    redirect("/admin/login")
  }

  // Check if user is admin
  const { data: adminUser, error: adminError } = await supabase
    .from("admin_users")
    .select("*")
    .eq("id", user.id)
    .single()

  if (adminError || !adminUser) {
    redirect("/admin/login?error=unauthorized")
  }

  // Get dashboard statistics
  const [contactFormsResult, usersResult, pendingFormsResult] = await Promise.all([
    supabase.from("contact_forms").select("*", { count: "exact" }),
    supabase.from("profiles").select("*", { count: "exact" }),
    supabase.from("contact_forms").select("*", { count: "exact" }).eq("status", "pending"),
  ])

  const totalContactForms = contactFormsResult.count || 0
  const totalUsers = usersResult.count || 0
  const pendingForms = pendingFormsResult.count || 0

  // Get recent contact forms
  const { data: recentForms } = await supabase
    .from("contact_forms")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(5)

  const handleSignOut = async () => {
    "use server"
    const supabase = await createClient()
    await supabase.auth.signOut()
    redirect("/admin/login")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Navigation */}
      <nav className="border-b bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Dumbbell className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">FitCopilot Admin</span>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="secondary">{adminUser.role === "super_admin" ? "Super Admin" : "Admin"}</Badge>
              <span className="text-sm text-gray-600">{user.email}</span>
              <form action={handleSignOut}>
                <Button variant="ghost" size="sm">
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign Out
                </Button>
              </form>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Manage your fitness platform and user inquiries</p>
        </div>

        {/* Statistics Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalUsers}</div>
              <p className="text-xs text-muted-foreground">Registered users</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Contact Forms</CardTitle>
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalContactForms}</div>
              <p className="text-xs text-muted-foreground">Total submissions</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Forms</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">{pendingForms}</div>
              <p className="text-xs text-muted-foreground">Awaiting response</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Response Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">
                {totalContactForms > 0 ? Math.round(((totalContactForms - pendingForms) / totalContactForms) * 100) : 0}
                %
              </div>
              <p className="text-xs text-muted-foreground">Forms responded to</p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <Link href="/admin/contact-forms">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-blue-600" />
                  Manage Contact Forms
                </CardTitle>
                <CardDescription>View and respond to customer inquiries</CardDescription>
              </CardHeader>
            </Link>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <Link href="/admin/users">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-green-600" />
                  User Management
                </CardTitle>
                <CardDescription>View and manage registered users</CardDescription>
              </CardHeader>
            </Link>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <Link href="/admin/settings">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5 text-purple-600" />
                  System Settings
                </CardTitle>
                <CardDescription>Configure platform settings</CardDescription>
              </CardHeader>
            </Link>
          </Card>
        </div>

        {/* Recent Contact Forms */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Recent Contact Forms</CardTitle>
                <CardDescription>Latest customer inquiries</CardDescription>
              </div>
              <Link href="/admin/contact-forms">
                <Button variant="outline" size="sm" className="bg-transparent">
                  View All
                </Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            {recentForms && recentForms.length > 0 ? (
              <div className="space-y-4">
                {recentForms.map((form) => (
                  <div key={form.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-medium">{form.name}</h4>
                        <Badge
                          variant={
                            form.status === "pending"
                              ? "destructive"
                              : form.status === "contacted"
                                ? "default"
                                : "secondary"
                          }
                        >
                          {form.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600">{form.email}</p>
                      <p className="text-sm text-gray-500 capitalize">{form.service_type.replace("-", " ")}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">{new Date(form.created_at).toLocaleDateString()}</p>
                      <Link href={`/admin/contact-forms/${form.id}`}>
                        <Button variant="ghost" size="sm">
                          View
                        </Button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center py-8">No contact forms yet</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
