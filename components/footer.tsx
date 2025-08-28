import Link from "next/link"
import { Dumbbell } from "lucide-react"

export function Footer() {
  return (
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
  )
}