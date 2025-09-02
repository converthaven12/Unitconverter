import Link from "next/link"
import { Calculator } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Calculator className="size-5 text-primary" />
              <span className="font-semibold text-lg">Unit Converter</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Professional unit converter supporting 27 categories and 150+ units. Convert between metric, imperial, and
              specialized units instantly.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link
                href="/converters/meter-to-foot"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                All Converters
              </Link>
              <Link href="/formats" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                All Formats
              </Link>
              <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                About Us
              </Link>
            </nav>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Legal</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Use
              </Link>
            </nav>
          </div>

          {/* Popular Categories */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Popular Categories</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/converters/meter-to-foot"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Length
              </Link>
              <Link
                href="/converters/kilogram-to-pound"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Weight
              </Link>
              <Link
                href="/converters/celsius-to-fahrenheit"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Temperature
              </Link>
              <Link
                href="/converters/liter-to-gallon_us"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Volume
              </Link>
            </nav>
          </div>
        </div>

        <Separator className="my-6" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© 2024 Unit Converter. All rights reserved.</p>
          <p className="text-sm text-muted-foreground">Made with precision for accurate conversions worldwide.</p>
        </div>
      </div>
    </footer>
  )
}
