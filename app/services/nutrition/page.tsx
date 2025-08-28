import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ContactForm } from "@/components/contact-form"
import { Dumbbell, Apple, Target, TrendingUp, CheckCircle, Star, Users } from "lucide-react"

export default function NutritionPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-2">
              <Dumbbell className="h-8 w-8 text-primary neon-pulse" />
              <span className="text-xl font-bold text-foreground">FitCopilot</span>
            </Link>
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-card via-background to-card"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-xl float-animation"></div>
        <div
          className="absolute bottom-20 right-10 w-48 h-48 bg-secondary/20 rounded-full blur-xl float-animation"
          style={{ animationDelay: "1s" }}
        ></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="slide-in-left">
              <Badge variant="secondary" className="mb-4 bg-primary/20 text-primary border-primary/30">
                Nutrition Coaching
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                Fuel Your Body for <span className="text-primary neon-pulse">Optimal Performance</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 text-pretty">
                Transform your relationship with food through personalized nutrition coaching. Our certified
                nutritionists create custom meal plans and provide ongoing support to help you reach your health and
                fitness goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="text-lg px-8 bg-primary hover:bg-primary/90 text-primary-foreground neon-pulse"
                >
                  Start Coaching
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 border-primary text-primary hover:bg-primary/10 bg-transparent"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative slide-in-right">
              <img
                src="/healthy-nutrition-meal-planning.png"
                alt="Healthy nutrition and meal planning"
                className="rounded-2xl shadow-2xl border border-border"
              />
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur opacity-75"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Nutrition Coaching Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Personalized guidance that fits your lifestyle and helps you build lasting healthy habits
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-border bg-card hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 text-center group">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors">
                  <Apple className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-foreground">Personalized Plans</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Custom meal plans based on your goals, preferences, and lifestyle
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border bg-card hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/20 text-center group">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/30 transition-colors">
                  <Target className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-foreground">Goal-Focused</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Whether weight loss, muscle gain, or performance - we've got you covered
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border bg-card hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 text-center group">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-foreground">Sustainable Habits</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Build long-term healthy eating habits that last a lifetime
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border bg-card hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/20 text-center group">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/30 transition-colors">
                  <Users className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-foreground">Expert Support</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Ongoing guidance from certified nutritionists and dietitians
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Coaching Programs Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Nutrition Coaching Programs</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the level of support that's right for your journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border bg-card hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-foreground">Kickstart</CardTitle>
                <div className="text-3xl font-bold text-primary mt-4">4 Weeks</div>
                <CardDescription className="text-muted-foreground">Perfect introduction</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span className="text-sm text-muted-foreground">Initial nutrition assessment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span className="text-sm text-muted-foreground">Custom meal plan</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span className="text-sm text-muted-foreground">Weekly check-ins</span>
                  </li>
                </ul>
                <Button className="w-full bg-muted hover:bg-muted/80 text-foreground">Get Started</Button>
              </CardContent>
            </Card>

            <Card className="border-primary/50 bg-card hover:bg-card/80 shadow-xl shadow-primary/20 relative transform scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground font-semibold neon-pulse">Most Popular</Badge>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-foreground">Transformation</CardTitle>
                <div className="text-3xl font-bold text-primary mt-4">12 Weeks</div>
                <CardDescription className="text-muted-foreground">Comprehensive coaching</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span className="text-sm text-muted-foreground">Detailed body composition analysis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span className="text-sm text-muted-foreground">Personalized meal plans</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span className="text-sm text-muted-foreground">Supplement recommendations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span className="text-sm text-muted-foreground">Bi-weekly coaching calls</span>
                  </li>
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground neon-pulse">
                  Transform Now
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border bg-card hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/20">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-foreground">Elite</CardTitle>
                <div className="text-3xl font-bold text-secondary mt-4">Ongoing</div>
                <CardDescription className="text-muted-foreground">Premium support</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span className="text-sm text-muted-foreground">Monthly plan adjustments</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span className="text-sm text-muted-foreground">24/7 messaging support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span className="text-sm text-muted-foreground">Advanced tracking tools</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span className="text-sm text-muted-foreground">Priority support</span>
                  </li>
                </ul>
                <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">Go Elite</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Start Your Nutrition Journey</h2>
            <p className="text-xl text-muted-foreground">Get personalized nutrition coaching tailored to your goals</p>
          </div>

          <ContactForm
            serviceType="nutrition"
            title="Get Your Nutrition Plan"
            description="Tell us about your goals and dietary preferences, and we'll create the perfect nutrition program for you"
          />
        </div>
      </section>

    </div>
  )
}
