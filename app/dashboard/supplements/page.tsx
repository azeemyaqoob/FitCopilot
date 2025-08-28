import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Dumbbell, ArrowLeft, Plus, AlertTriangle, Star } from "lucide-react"
import Link from "next/link"

export default async function SupplementsPage() {
  const supabase = await createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect("/auth/login")
  }

  const { data: profile } = await supabase.from("profiles").select("*").eq("id", data.user.id).single()

  const { data: userSupplements } = await supabase
    .from("user_supplements")
    .select(`
      *,
      supplements (
        id,
        name,
        category,
        description,
        benefits,
        dosage,
        warnings
      )
    `)
    .eq("user_id", data.user.id)

  const { data: allSupplements } = await supabase.from("supplements").select("*").order("name")

  // AI-powered supplement recommendations
  const getRecommendedSupplements = (profile: any, allSupplements: any[]) => {
    if (!allSupplements) return []

    const recommendations = []

    if (profile?.fitness_goal === "weight_loss") {
      recommendations.push(
        ...allSupplements
          .filter(
            (s) =>
              s.category === "fat_burner" ||
              s.category === "metabolism" ||
              s.name.toLowerCase().includes("green tea") ||
              s.name.toLowerCase().includes("l-carnitine"),
          )
          .slice(0, 3),
      )
    } else if (profile?.fitness_goal === "muscle_gain") {
      recommendations.push(
        ...allSupplements
          .filter(
            (s) =>
              s.category === "protein" ||
              s.category === "amino_acids" ||
              s.name.toLowerCase().includes("creatine") ||
              s.name.toLowerCase().includes("whey"),
          )
          .slice(0, 3),
      )
    } else {
      recommendations.push(
        ...allSupplements
          .filter(
            (s) =>
              s.category === "vitamins" ||
              s.category === "general_health" ||
              s.name.toLowerCase().includes("multivitamin"),
          )
          .slice(0, 3),
      )
    }

    return recommendations
  }

  const recommendedSupplements = getRecommendedSupplements(profile, allSupplements)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/dashboard" className="flex items-center gap-2">
              <ArrowLeft className="h-5 w-5 text-gray-600" />
              <Dumbbell className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">FitCopilot</span>
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Supplement Recommendations</h1>
          <p className="text-gray-600">AI-powered supplement suggestions tailored to your fitness goals</p>
        </div>

        {/* FDA Compliance Warning */}
        <Alert className="mb-8 border-amber-200 bg-amber-50">
          <AlertTriangle className="h-4 w-4 text-amber-600" />
          <AlertDescription className="text-amber-800">
            <strong>Important:</strong> These statements have not been evaluated by the Food and Drug Administration.
            These products are not intended to diagnose, treat, cure, or prevent any disease. Always consult with a
            healthcare professional before starting any supplement regimen.
          </AlertDescription>
        </Alert>

        {/* AI Recommendations */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Recommended for Your {profile?.fitness_goal?.replace("_", " ") || "Fitness"} Goal
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendedSupplements.map((supplement) => (
              <Card key={supplement.id} className="border-purple-200 bg-purple-50/50">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{supplement.name}</CardTitle>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <Badge variant="secondary">{supplement.category}</Badge>
                    </div>
                  </div>
                  <CardDescription>{supplement.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-sm text-gray-900 mb-1">Benefits:</h4>
                      <p className="text-sm text-gray-600">{supplement.benefits}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm text-gray-900 mb-1">Recommended Dosage:</h4>
                      <p className="text-sm text-gray-600">{supplement.dosage}</p>
                    </div>
                    {supplement.warnings && (
                      <div>
                        <h4 className="font-medium text-sm text-red-700 mb-1">Warnings:</h4>
                        <p className="text-sm text-red-600">{supplement.warnings}</p>
                      </div>
                    )}
                    <Button className="w-full">Add to My Supplements</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Current Supplements */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">My Current Supplements</h2>
          {userSupplements && userSupplements.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {userSupplements.map((userSup) => (
                <Card key={userSup.id}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{userSup.supplements?.name}</CardTitle>
                      <Badge>{userSup.supplements?.category}</Badge>
                    </div>
                    <CardDescription>{userSup.supplements?.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Started:</span>
                        <span className="font-medium">{new Date(userSup.started_at).toLocaleDateString()}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Status:</span>
                        <Badge variant={userSup.status === "active" ? "default" : "secondary"}>{userSup.status}</Badge>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" className="flex-1 bg-transparent">
                        View Details
                      </Button>
                      <Button variant="outline" size="sm">
                        Remove
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="text-center py-12">
                <Plus className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No supplements yet</h3>
                <p className="text-gray-600 mb-4">
                  Add supplements from our AI recommendations above to start tracking
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
