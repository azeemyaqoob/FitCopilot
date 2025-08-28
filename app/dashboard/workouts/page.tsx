import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dumbbell, ArrowLeft, Plus, Clock, Target } from "lucide-react"
import Link from "next/link"

export default async function WorkoutsPage() {
  const supabase = await createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect("/auth/login")
  }

  const { data: profile } = await supabase.from("profiles").select("*").eq("id", data.user.id).single()

  const { data: workouts } = await supabase
    .from("workouts")
    .select("*")
    .eq("user_id", data.user.id)
    .order("created_at", { ascending: false })

  // AI-powered workout recommendations based on user profile
  const getRecommendedWorkouts = (profile: any) => {
    const recommendations = []

    if (profile?.fitness_goal === "weight_loss") {
      recommendations.push(
        { name: "HIIT Cardio Blast", type: "cardio", duration: 30, difficulty: "intermediate" },
        { name: "Fat Burning Circuit", type: "circuit", duration: 45, difficulty: "beginner" },
      )
    } else if (profile?.fitness_goal === "muscle_gain") {
      recommendations.push(
        { name: "Upper Body Strength", type: "strength", duration: 60, difficulty: "intermediate" },
        { name: "Progressive Overload Push", type: "strength", duration: 75, difficulty: "advanced" },
      )
    } else {
      recommendations.push(
        { name: "Full Body Functional", type: "functional", duration: 45, difficulty: "intermediate" },
        { name: "Flexibility & Mobility", type: "flexibility", duration: 30, difficulty: "beginner" },
      )
    }

    return recommendations
  }

  const recommendedWorkouts = getRecommendedWorkouts(profile)

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
            <Link href="/dashboard/workouts/create">
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Create Workout
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Workouts</h1>
          <p className="text-gray-600">Track your fitness progress and discover new routines</p>
        </div>

        {/* AI Recommendations */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recommended for You</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendedWorkouts.map((workout, index) => (
              <Card key={index} className="border-blue-200 bg-blue-50/50">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{workout.name}</CardTitle>
                    <Badge variant="secondary">{workout.type}</Badge>
                  </div>
                  <CardDescription>
                    AI-recommended based on your {profile?.fitness_goal || "fitness"} goal
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {workout.duration} min
                    </div>
                    <div className="flex items-center gap-1">
                      <Target className="h-4 w-4" />
                      {workout.difficulty}
                    </div>
                  </div>
                  <Button className="w-full">Start Workout</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* User's Workouts */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Workouts</h2>
          {workouts && workouts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {workouts.map((workout) => (
                <Card key={workout.id}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{workout.name}</CardTitle>
                      <Badge>{workout.type}</Badge>
                    </div>
                    <CardDescription>{workout.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {workout.duration} min
                      </div>
                      <div className="flex items-center gap-1">
                        <Target className="h-4 w-4" />
                        {workout.difficulty}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button className="flex-1">Start</Button>
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="text-center py-12">
                <Dumbbell className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No workouts yet</h3>
                <p className="text-gray-600 mb-4">Create your first workout or try our AI recommendations above</p>
                <Link href="/dashboard/workouts/create">
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Create Your First Workout
                  </Button>
                </Link>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
