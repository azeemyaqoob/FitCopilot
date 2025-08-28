import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Dumbbell, Pill, Users, Shield, Zap, Target } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Dumbbell className="h-8 w-8 text-primary neon-pulse" />
              <span className="text-xl font-bold text-foreground">FitCopilot</span>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/auth/login">
                <Button
                  variant="ghost"
                  className="text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
                >
                  Login
                </Button>
              </Link>
              <Link href="/auth/sign-up">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground neon-pulse">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background opacity-50"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-xl float-animation"></div>
        <div
          className="absolute bottom-20 right-10 w-48 h-48 bg-secondary/20 rounded-full blur-xl float-animation"
          style={{ animationDelay: "1s" }}
        ></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center slide-in-left">
            {/* <Badge variant="secondary" className="mb-4 bg-secondary/20 text-secondary border-secondary/30">
              AI-Powered Fitness Platform
            </Badge> */}
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Your Personal <span className="text-primary neon-pulse">Fitness & Supplement</span> Copilot
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
              Get personalized workout plans and FDA-compliant supplement recommendations powered by advanced AI.
              Transform your fitness journey with science-backed guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center slide-in-right">
              <Link href="/auth/sign-up">
                <Button
                  size="lg"
                  className="text-lg px-8 bg-primary hover:bg-primary/90 text-primary-foreground neon-pulse"
                >
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="#features">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 border-primary text-primary hover:bg-primary/10 bg-transparent"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose FitCopilot?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Advanced AI technology meets fitness expertise to deliver personalized results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-border bg-card hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-foreground">Personalized Workouts</CardTitle>
                <CardDescription className="text-muted-foreground">
                  AI-generated workout plans tailored to your fitness level, goals, and preferences
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border bg-card hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/20 group">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary/30 transition-colors">
                  <Shield className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-foreground">FDA-Compliant Supplements</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Safe, science-backed supplement recommendations with full FDA compliance information
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border bg-card hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-foreground">AI-Powered Insights</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Advanced algorithms analyze your progress and adapt recommendations in real-time
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border bg-card hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/20 group">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary/30 transition-colors">
                  <Users className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-foreground">Expert Guidance</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Access to certified trainers and nutritionists for personalized support
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border bg-card hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                  <Dumbbell className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-foreground">Multiple Training Styles</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Personal training, yoga, cycling, Zumba, and more - all in one platform
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border bg-card hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/20 group">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary/30 transition-colors">
                  <Pill className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-foreground">Safety First</CardTitle>
                <CardDescription className="text-muted-foreground">
                  All recommendations include safety warnings and medical considerations
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive fitness solutions for every lifestyle and goal
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Personal Training",
                description: "One-on-one coaching with certified trainers",
                image: "/personal-trainer-client.png",
                href: "/services/personal-training",
              },
              {
                title: "Yoga Classes",
                description: "Mindful movement for flexibility and peace",
                image: "/yoga-class-peaceful-setting.png",
                href: "/services/yoga",
              },
              {
                title: "Cycling Programs",
                description: "High-energy cardio and endurance training",
                image: "/indoor-cycling-class.png",
                href: "/services/cycling",
              },
              {
                title: "Zumba Fitness",
                description: "Dance your way to fitness with fun routines",
                image: "/zumba-dance-fitness-class.png",
                href: "/services/zumba",
              },
              {
                title: "Strength Training",
                description: "Build muscle and increase power",
                image: "/strength-training-gym-equipment.png",
                href: "/services/strength-training",
              },
              {
                title: "Nutrition Coaching",
                description: "Personalized meal plans and supplement guidance",
                image: "/healthy-nutrition-meal-planning.png",
                href: "/services/nutrition",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="border-border bg-card hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 overflow-hidden group"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-foreground">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href={service.href}>
                    <Button
                      variant="outline"
                      className="w-full border-primary text-primary hover:bg-primary/10 bg-transparent"
                    >
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10"></div>
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl float-animation"></div>
        <div
          className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/20 rounded-full blur-3xl float-animation"
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Transform Your Fitness Journey?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of users who have achieved their fitness goals with FitCopilot
          </p>
          <Link href="/auth/sign-up">
            <Button
              size="lg"
              className="text-lg px-8 bg-secondary hover:bg-secondary/90 text-secondary-foreground neon-pulse"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

    </div>
  )
}
