import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const Calculator = () => <span className="text-xl">🧮</span>
const Globe = () => <span className="text-xl">🌍</span>
const Zap = () => <span className="text-xl">⚡</span>
const Shield = () => <span className="text-xl">🛡️</span>
const Users = () => <span className="text-xl">👥</span>
const Award = () => <span className="text-xl">🏆</span>

export const metadata: Metadata = {
  title: "About Us - All Unit Converter | Professional Unit Conversion Tool",
  description:
    "Learn about All Unit Converter, the comprehensive online tool for converting between units of measurement. Discover our mission, features, and commitment to accuracy.",
  keywords: "about unit converter, measurement conversion, online calculator, unit conversion tool",
  openGraph: {
    title: "About All Unit Converter - Professional Unit Conversion Tool",
    description: "Learn about our comprehensive unit conversion platform with 150+ units across 27 categories.",
    url: "https://allunitconverter.vercel.app/about",
    type: "website",
  },
}

export default function AboutPage() {
  const features = [
    {
      icon: Calculator,
      title: "150+ Units",
      description: "Comprehensive coverage across 27 different categories of measurement",
    },
    {
      icon: Globe,
      title: "Global Standards",
      description: "Support for international measurement systems and currencies",
    },
    {
      icon: Zap,
      title: "Instant Results",
      description: "Real-time conversion with precise calculations and formulas",
    },
    {
      icon: Shield,
      title: "Accurate & Reliable",
      description: "Mathematically verified conversions with error handling",
    },
    {
      icon: Users,
      title: "User-Friendly",
      description: "Intuitive interface designed for professionals and students",
    },
    {
      icon: Award,
      title: "SEO Optimized",
      description: "Individual pages for each conversion with detailed guides",
    },
  ]

  const team = [
    {
      role: "Development Team",
      description: "Expert developers ensuring accuracy and performance",
    },
    {
      role: "Content Team",
      description: "Technical writers creating comprehensive conversion guides",
    },
    {
      role: "Quality Assurance",
      description: "Rigorous testing to ensure conversion accuracy",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4 text-balance">About All Unit Converter</h1>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            Your trusted companion for accurate unit conversions across all measurement categories
          </p>
        </div>

        {/* Mission Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Our Mission</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              At All Unit Converter, we believe that accurate measurement conversion should be accessible, reliable, and
              effortless. Our mission is to provide the most comprehensive and user-friendly unit conversion platform
              that serves students, professionals, engineers, scientists, and anyone who needs precise measurement
              conversions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We strive to eliminate the confusion and errors that can arise from manual conversions by providing a
              single, trusted source for all your measurement conversion needs.
            </p>
          </CardContent>
        </Card>

        {/* Features Grid */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose All Unit Converter?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  {feature.icon()}
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* What We Offer */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">What We Offer</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Comprehensive Unit Categories</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "Length",
                  "Weight",
                  "Temperature",
                  "Volume",
                  "Area",
                  "Speed",
                  "Pressure",
                  "Energy",
                  "Power",
                  "Data",
                  "Currency",
                  "Time",
                ].map((category) => (
                  <Badge key={category} variant="secondary">
                    {category}
                  </Badge>
                ))}
              </div>
              <p className="text-muted-foreground">
                From basic length and weight conversions to complex engineering units, we cover all major measurement
                categories used worldwide.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Educational Resources</h3>
              <p className="text-muted-foreground">
                Each conversion page includes detailed articles, real-world examples, conversion formulas, and
                frequently asked questions to help you understand the context and applications of different
                measurements.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Real-Time Currency Conversion</h3>
              <p className="text-muted-foreground">
                Our currency converter uses live exchange rates to provide accurate, up-to-date conversions for over 150
                world currencies.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Team Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Our Team</CardTitle>
            <CardDescription>Dedicated professionals committed to accuracy and user experience</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              {team.map((member, index) => (
                <div key={index} className="text-center">
                  <h3 className="font-semibold mb-2">{member.role}</h3>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Contact Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Get in Touch</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Have questions, suggestions, or need help with a specific conversion? We'd love to hear from you and
              continuously improve our platform based on user feedback.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Start Converting
              </Link>
              <Link
                href="/formats"
                className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                View All Formats
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
