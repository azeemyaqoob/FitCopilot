import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ContactForm } from "@/components/contact-form"
import { Dumbbell, Wind, TrendingUp, BrainCircuit, Target, CheckCircle } from "lucide-react"

export default function YogaPage() {
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
                Yoga Classes
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                Find Your <span className="text-primary neon-pulse">Inner Peace</span> & Flexibility
              </h1>
              <p className="text-xl text-muted-foreground mb-8 text-pretty">
                Join our serene yoga classes to improve flexibility, reduce stress, and cultivate mindfulness. Suitable
                for all levels, from beginners to advanced yogis.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="text-lg px-8 bg-primary hover:bg-primary/90 text-primary-foreground neon-pulse"
                >
                  Join a Class
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 border-primary text-primary hover:bg-primary/10 bg-transparent"
                >
                  View Schedule
                </Button>
              </div>
            </div>
            <div className="relative slide-in-right">
              <img
                src="/yoga-class-peaceful-setting.png"
                alt="Peaceful yoga class setting"
                className="rounded-2xl shadow-2xl border border-border"
              />
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur opacity-75"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Benefits of Our Yoga Classes</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover a holistic approach to wellness that nurtures both body and mind.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-border bg-card hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 text-center group">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors">
                  <Wind className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-foreground">Stress Reduction</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Calm your mind and release tension with meditative breathing and gentle flows.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border bg-card hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/20 text-center group">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/30 transition-colors">
                  <TrendingUp className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-foreground">Improved Flexibility</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Increase your range of motion and release muscle tightness with deep stretches.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border bg-card hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 text-center group">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors">
                  <BrainCircuit className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-foreground">Mindful Awareness</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Cultivate a deeper connection between your mind, body, and breath.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border bg-card hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/20 text-center group">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/30 transition-colors">
                  <Target className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-foreground">Build Core Strength</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Develop a strong and stable core through balanced and controlled movements.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Yoga Class Packages</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find the perfect pass for your practice.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border bg-card hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-foreground">Drop-In</CardTitle>
                <div className="text-3xl font-bold text-primary mt-4">$25</div>
                <CardDescription className="text-muted-foreground">per class</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span className="text-sm text-muted-foreground">Single class pass</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span className="text-sm text-muted-foreground">Perfect for trying it out</span>
                  </li>
                </ul>
                <Button className="w-full bg-muted hover:bg-muted/80 text-foreground">Book Now</Button>
              </CardContent>
            </Card>

            <Card className="border-primary/50 bg-card hover:bg-card/80 shadow-xl shadow-primary/20 relative transform scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground font-semibold neon-pulse">Most Popular</Badge>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-foreground">5-Class Pass</CardTitle>
                <div className="text-3xl font-bold text-primary mt-4">$110</div>
                <CardDescription className="text-muted-foreground">($22 per class)</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span className="text-sm text-muted-foreground">Save on 5 classes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span className="text-sm text-muted-foreground">Valid for 3 months</span>
                  </li>
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground neon-pulse">
                  Buy Pass
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border bg-card hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/20">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-foreground">Unlimited</CardTitle>
                <div className="text-3xl font-bold text-secondary mt-4">$150</div>
                <CardDescription className="text-muted-foreground">per month</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span className="text-sm text-muted-foreground">Unlimited classes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span className="text-sm text-muted-foreground">Best value for dedicated yogis</span>
                  </li>
                </ul>
                <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                  Go Unlimited
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Begin Your Yoga Journey</h2>
            <p className="text-xl text-muted-foreground">Have questions or ready to sign up? Let us know!</p>
          </div>

          <ContactForm
            serviceType="yoga"
            title="Inquire About Yoga Classes"
            description="Fill out the form and our yoga coordinator will get in touch with you."
          />
        </div>
      </section>

        <footer className="bg-card border-t border-border text-foreground py-12 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-4 gap-8">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Dumbbell className="h-6 w-6 text-primary" />
                      <span className="text-lg font-bold">FitCopilot</span>
                    </div>
                    <p className="text-muted-foreground">AI-powered fitness and supplement guidance for a healthier you.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-4 text-foreground">Services</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>
                        <Link href="/services/personal-training" className="hover:text-primary transition-colors">
                          Personal Training
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/yoga" className="hover:text-primary transition-colors">
                          Yoga Classes
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/cycling" className="hover:text-primary transition-colors">
                          Cycling Programs
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/nutrition" className="hover:text-primary transition-colors">
                          Nutrition Coaching
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/strength-training" className="hover:text-primary transition-colors">
                          Strength Training
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/zumba" className="hover:text-primary transition-colors">
                          Zumba Fitness
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-4 text-foreground">Company</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>
                        <Link href="/about" className="hover:text-primary transition-colors">
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link href="/contact" className="hover:text-primary transition-colors">
                          Contact
                        </Link>
                      </li>
                      <li>
                        <Link href="/privacy" className="hover:text-primary transition-colors">
                          Privacy Policy
                        </Link>
                      </li>
                      <li>
                        <Link href="/terms" className="hover:text-primary transition-colors">
                          Terms of Service
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-4 text-foreground">Contact</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>support@fitcopilot.com</li>
                      <li>1-800-FIT-HELP</li>
                      <li>Mon-Fri 9AM-6PM EST</li>
                    </ul>
                  </div>
                </div>
                <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
                  <p>&copy; 2024 FitCopilot. All rights reserved.</p>
                </div>
              </div>
            </footer>
    </div>
  )
}