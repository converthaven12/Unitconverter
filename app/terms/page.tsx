import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Terms of Use - All Unit Converter",
  description:
    "Terms of Use for All Unit Converter. Read our terms and conditions for using our unit conversion services and website.",
  keywords: "terms of use, terms and conditions, unit converter terms, service agreement",
  openGraph: {
    title: "Terms of Use - All Unit Converter",
    description: "Terms and conditions for using All Unit Converter services.",
    url: "https://allunitconverter.vercel.app/terms",
    type: "website",
  },
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Terms of Use</h1>
          <p className="text-muted-foreground">
            Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>

        {/* Introduction */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Agreement to Terms</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              By accessing and using All Unit Converter ("we," "our," or "us"), you accept and agree to be bound by the
              terms and provision of this agreement. If you do not agree to abide by the above, please do not use this
              service.
            </p>
          </CardContent>
        </Card>

        {/* Use License */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Use License</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Permission is granted to temporarily use All Unit Converter for personal, non-commercial transitory
              viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Use automated systems to access the service excessively</li>
            </ul>
            <p className="text-muted-foreground">
              This license shall automatically terminate if you violate any of these restrictions and may be terminated
              by us at any time.
            </p>
          </CardContent>
        </Card>

        {/* Disclaimer */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Disclaimer</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              The materials on All Unit Converter are provided on an 'as is' basis. All Unit Converter makes no
              warranties, expressed or implied, and hereby disclaims and negates all other warranties including without
              limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or
              non-infringement of intellectual property or other violation of rights.
            </p>
            <p className="text-muted-foreground">
              Further, All Unit Converter does not warrant or make any representations concerning the accuracy, likely
              results, or reliability of the use of the materials on its website or otherwise relating to such materials
              or on any sites linked to this site.
            </p>
          </CardContent>
        </Card>

        {/* Accuracy of Conversions */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Accuracy of Conversions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              While we strive to provide accurate conversion results, All Unit Converter cannot guarantee the absolute
              accuracy of all conversions. Users should verify critical conversions through additional sources when
              precision is essential.
            </p>

            <div>
              <h3 className="font-semibold mb-2">Important Notes:</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>
                  Currency exchange rates are provided by third-party services and may not reflect real-time market
                  rates
                </li>
                <li>Some conversions involve approximations due to the nature of the units</li>
                <li>Historical or specialized units may have varying definitions</li>
                <li>Always consult official sources for legal, commercial, or safety-critical applications</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Limitations */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Limitations</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              In no event shall All Unit Converter or its suppliers be liable for any damages (including, without
              limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or
              inability to use the materials on All Unit Converter, even if All Unit Converter or an authorized
              representative has been notified orally or in writing of the possibility of such damage. Because some
              jurisdictions do not allow limitations on implied warranties, or limitations of liability for
              consequential or incidental damages, these limitations may not apply to you.
            </p>
          </CardContent>
        </Card>

        {/* Acceptable Use */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Acceptable Use</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground mb-4">You agree not to use the service to:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Violate any applicable laws or regulations</li>
              <li>Transmit any harmful, threatening, or offensive content</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with or disrupt the service or servers</li>
              <li>Use the service for any illegal or unauthorized purpose</li>
              <li>Impersonate any person or entity</li>
              <li>Collect or harvest any personally identifiable information</li>
            </ul>
          </CardContent>
        </Card>

        {/* Intellectual Property */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Intellectual Property Rights</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              The service and its original content, features, and functionality are and will remain the exclusive
              property of All Unit Converter and its licensors. The service is protected by copyright, trademark, and
              other laws. Our trademarks and trade dress may not be used in connection with any product or service
              without our prior written consent.
            </p>
          </CardContent>
        </Card>

        {/* Privacy Policy */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Privacy Policy</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the
              service, to understand our practices.{" "}
              <Link href="/privacy" className="text-primary hover:underline">
                Read our Privacy Policy
              </Link>
            </p>
          </CardContent>
        </Card>

        {/* Termination */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Termination</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              We may terminate or suspend your access immediately, without prior notice or liability, for any reason
              whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the
              service will cease immediately.
            </p>
          </CardContent>
        </Card>

        {/* Changes to Terms */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Changes to Terms</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision
              is material, we will try to provide at least 30 days notice prior to any new terms taking effect. What
              constitutes a material change will be determined at our sole discretion.
            </p>
          </CardContent>
        </Card>

        {/* Governing Law */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Governing Law</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              These Terms shall be interpreted and governed by the laws of the jurisdiction in which All Unit Converter
              operates, without regard to its conflict of law provisions. Our failure to enforce any right or provision
              of these Terms will not be considered a waiver of those rights.
            </p>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              If you have any questions about these Terms of Use, please contact us:
            </p>
            <div className="space-y-2 text-muted-foreground">
              <p>Email: legal@allunitconverter.com</p>
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
