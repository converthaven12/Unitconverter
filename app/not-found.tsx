import Link from "next/link"
import { Calculator, Home, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="max-w-md w-full text-center">
        <CardHeader>
          <div className="flex justify-center mb-4">
            <div className="flex items-center justify-center size-16 rounded-full bg-muted">
              <Calculator className="size-8 text-muted-foreground" />
            </div>
          </div>
          <CardTitle className="text-2xl">Converter Not Found</CardTitle>
          <CardDescription>
            The unit conversion you're looking for doesn't exist or the units are incompatible.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Button asChild className="w-full">
              <Link href="/">
                <Home className="size-4 mr-2" />
                Go Home
              </Link>
            </Button>
            <Button asChild variant="outline" className="w-full bg-transparent">
              <Link href="/">
                <Search className="size-4 mr-2" />
                Browse All Converters
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
