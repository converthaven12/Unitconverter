import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "Privacy Policy - All Unit Converter",
  description:
    "Privacy Policy for All Unit Converter. Learn how we protect your data and respect your privacy while using our unit conversion services.",
  keywords: "privacy policy, data protection, user privacy, unit converter privacy",
  openGraph: {
    title: "Privacy Policy - All Unit Converter",
    description: "Our commitment to protecting your privacy and data while using our conversion services.",
    url: "https://allunitconverter.vercel.app/privacy",
    type: "website",
  },
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground">
            Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>

        {/* Introduction */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Our Commitment to Privacy</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              At All Unit Converter, we are committed to protecting your privacy and ensuring the security of any
              information you provide while using our services. This Privacy Policy explains how we collect, use, and
              protect your information when you visit our website and use our conversion tools.
            </p>
          </CardContent>
        </Card>

        {/* Information We Collect */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Information We Collect</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Information You Provide</h3>
              <p className="text-muted-foreground">
                We do not require you to create an account or provide personal information to use our conversion tools.
                Any conversion data you enter is processed locally in your browser and is not stored on our servers.
              </p>
            </div>

            <Separator />

            <div>
              <h3 className="font-semibold mb-2">Automatically Collected Information</h3>
              <p className="text-muted-foreground mb-2">
                When you visit our website, we may automatically collect certain information, including:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>IP address (anonymized)</li>
                <li>Pages visited and time spent on our site</li>
                <li>Referring website</li>
                <li>Device information (screen size, device type)</li>
              </ul>
            </div>

            <Separator />

            <div>
              <h3 className="font-semibold mb-2">Cookies and Tracking Technologies</h3>
              <p className="text-muted-foreground">
                We use essential cookies to ensure our website functions properly. We may also use analytics cookies to
                understand how visitors interact with our site to improve user experience. You can control cookie
                settings through your browser preferences.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* How We Use Information */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>How We Use Your Information</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">We use the collected information to:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Provide and maintain our conversion services</li>
              <li>Improve website functionality and user experience</li>
              <li>Analyze usage patterns to enhance our tools</li>
              <li>Ensure website security and prevent abuse</li>
              <li>Comply with legal obligations</li>
            </ul>
          </CardContent>
        </Card>

        {/* Data Security */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Data Security</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              We implement appropriate technical and organizational security measures to protect your information
              against unauthorized access, alteration, disclosure, or destruction.
            </p>

            <div>
              <h3 className="font-semibold mb-2">Security Measures Include:</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>HTTPS encryption for all data transmission</li>
                <li>Regular security updates and monitoring</li>
                <li>Limited access to personal information</li>
                <li>Secure hosting infrastructure</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Third-Party Services */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Third-Party Services</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Analytics</h3>
              <p className="text-muted-foreground">
                We may use third-party analytics services to help us understand how our website is used. These services
                may collect information about your use of our site and other websites.
              </p>
            </div>

            <Separator />

            <div>
              <h3 className="font-semibold mb-2">Currency Exchange Rates</h3>
              <p className="text-muted-foreground">
                For currency conversions, we use third-party APIs to fetch real-time exchange rates. These services may
                have their own privacy policies and data handling practices.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Your Rights */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Your Rights and Choices</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">You have the right to:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Access information about how your data is processed</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information (where applicable)</li>
              <li>Object to processing of your information</li>
              <li>Control cookie settings in your browser</li>
              <li>Opt-out of analytics tracking</li>
            </ul>
          </CardContent>
        </Card>

        {/* Children's Privacy */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Children's Privacy</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Our service is not directed to children under the age of 13. We do not knowingly collect personal
              information from children under 13. If you are a parent or guardian and believe your child has provided us
              with personal information, please contact us.
            </p>
          </CardContent>
        </Card>

        {/* Changes to Privacy Policy */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Changes to This Privacy Policy</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy
              Policy periodically for any changes.
            </p>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="space-y-2 text-muted-foreground">
              <p>Email: privacy@allunitconverter.com</p>
              <p>
                Website:{" "}
                <Link href="/" className="text-primary hover:underline">
                  allunitconverter.vercel.app
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Back to Home */}
        <div className="text-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
