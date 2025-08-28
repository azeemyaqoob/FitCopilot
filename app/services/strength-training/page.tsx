import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ContactForm } from "@/components/contact-form"
import { Dumbbell, Zap, Target, TrendingUp, CheckCircle } from "lucide-react"

export default function StrengthTrainingPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="border-b border-gray-800 bg-black/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-2">
              <Dumbbell className="h-8 w-8 text-cyan-400" />
              <span className="text-xl font-bold text-white">FitCopilot</span>
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/auth/login">
                <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-gray-800">
                  Login
                </Button>
              </Link>
              <Link href="/auth/sign-up">
                <Button className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-red-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-orange-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4 bg-gray-800 text-red-400 border-red-400/20">
                Strength Training
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
                Build <span className="text-red-400 animate-pulse">Serious Strength</span> & Power
              </h1>
              <p className="text-xl text-gray-300 mb-8 text-pretty">
                Transform your body with our comprehensive strength training programs. From beginner-friendly bodyweight
                exercises to advanced powerlifting, we'll help you build muscle, increase power, and boost your
                metabolism.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="text-lg px-8 bg-red-500 hover:bg-red-600 text-black font-semibold shadow-lg shadow-red-500/25 hover:shadow-red-500/40 transition-all duration-300"
                >
                  Start Building
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white bg-transparent"
                >
                  View Programs
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/strength-training-gym-equipment.png"
                alt="Modern strength training gym equipment"
                className="rounded-2xl shadow-2xl border border-gray-800"
              />
              <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-2xl blur opacity-75"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Strength Training Benefits</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Build more than just muscle - transform your entire physique and health
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-gray-800 border-gray-700 shadow-xl hover:shadow-red-500/10 transition-all duration-300 text-center group">
              <CardHeader>
                <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-red-500/30 transition-colors">
                  <Dumbbell className="h-6 w-6 text-red-400" />
                </div>
                <CardTitle className="text-white">Muscle Growth</CardTitle>
                <CardDescription className="text-gray-400">
                  Build lean muscle mass and increase overall strength
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-800 border-gray-700 shadow-xl hover:shadow-orange-500/10 transition-all duration-300 text-center group">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-500/30 transition-colors">
                  <Zap className="h-6 w-6 text-orange-400" />
                </div>
                <CardTitle className="text-white">Metabolism Boost</CardTitle>
                <CardDescription className="text-gray-400">
                  Increase calorie burn even at rest with more muscle mass
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-800 border-gray-700 shadow-xl hover:shadow-blue-500/10 transition-all duration-300 text-center group">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500/30 transition-colors">
                  <Target className="h-6 w-6 text-blue-400" />
                </div>
                <CardTitle className="text-white">Bone Health</CardTitle>
                <CardDescription className="text-gray-400">
                  Strengthen bones and reduce risk of osteoporosis
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-800 border-gray-700 shadow-xl hover:shadow-green-500/10 transition-all duration-300 text-center group">
              <CardHeader>
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-green-500/30 transition-colors">
                  <TrendingUp className="h-6 w-6 text-green-400" />
                </div>
                <CardTitle className="text-white">Functional Strength</CardTitle>
                <CardDescription className="text-gray-400">
                  Improve daily activities and reduce injury risk
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Training Programs Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Training Programs</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Progressive programs designed for every experience level
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-900 border-gray-700 shadow-xl hover:shadow-red-500/20 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-white">Foundation Program</CardTitle>
                <CardDescription className="text-gray-400">Perfect for strength training beginners</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-2xl font-bold text-red-400">8 weeks</div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-sm text-gray-300">Bodyweight & light weights</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-sm text-gray-300">Form and technique focus</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-sm text-gray-300">3 sessions per week</span>
                  </li>
                </ul>
                <Button className="w-full bg-gray-700 hover:bg-gray-600 text-white">Start Foundation</Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-red-500/50 shadow-xl shadow-red-500/20 relative transform scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-red-500 text-black font-semibold animate-pulse">Most Popular</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-white">Power Builder</CardTitle>
                <CardDescription className="text-gray-400">Intermediate strength and muscle building</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-2xl font-bold text-red-400">12 weeks</div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-sm text-gray-300">Progressive overload</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-sm text-gray-300">Compound movements</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-sm text-gray-300">4-5 sessions per week</span>
                  </li>
                </ul>
                <Button className="w-full bg-red-500 hover:bg-red-600 text-black font-semibold shadow-lg shadow-red-500/25">
                  Build Power
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-700 shadow-xl hover:shadow-orange-500/20 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-white">Elite Strength</CardTitle>
                <CardDescription className="text-gray-400">Advanced powerlifting and strength focus</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-2xl font-bold text-orange-400">16 weeks</div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-sm text-gray-300">Competition preparation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-sm text-gray-300">Advanced techniques</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-sm text-gray-300">5-6 sessions per week</span>
                  </li>
                </ul>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-black font-semibold">Go Elite</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Start Your Strength Journey</h2>
            <p className="text-xl text-gray-400">
              Get matched with the perfect strength training program for your goals
            </p>
          </div>

          <ContactForm
            serviceType="strength-training"
            title="Build Your Strength Program"
            description="Tell us about your experience level and goals, and we'll create the perfect strength training plan"
          />
        </div>
      </section>

    </div>
  )
}
