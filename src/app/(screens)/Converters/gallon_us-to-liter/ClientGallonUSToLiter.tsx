"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ArrowLeftRight } from "lucide-react"

export default function ClientGallonUSToLiter() {
  const [gallons, setGallons] = useState<string>("")
  const [liters, setLiters] = useState<string>("")

  const convertGalToL = (gal: number): number => {
    return gal * 3.78541
  }

  const convertLToGal = (l: number): number => {
    return l / 3.78541
  }

  const handleGallonChange = (value: string) => {
    setGallons(value)
    if (value && !isNaN(Number(value))) {
      const result = convertGalToL(Number(value))
      setLiters(result.toFixed(6))
    } else {
      setLiters("")
    }
  }

  const handleLiterChange = (value: string) => {
    setLiters(value)
    if (value && !isNaN(Number(value))) {
      const result = convertLToGal(Number(value))
      setGallons(result.toFixed(6))
    } else {
      setGallons("")
    }
  }

  const swapValues = () => {
    const tempGal = gallons
    setGallons(liters)
    setLiters(tempGal)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Convert US Gallons to Liters</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
          <div>
            <label className="block text-sm font-medium mb-2">US Gallons (gal)</label>
            <Input
              type="number"
              value={gallons}
              onChange={(e) => handleGallonChange(e.target.value)}
              placeholder="Enter gallons"
            />
          </div>

          <div className="flex justify-center">
            <Button variant="outline" size="icon" onClick={swapValues}>
              <ArrowLeftRight className="h-4 w-4" />
            </Button>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Liters (L)</label>
            <Input
              type="number"
              value={liters}
              onChange={(e) => handleLiterChange(e.target.value)}
              placeholder="Enter liters"
            />
          </div>
        </div>

        <div className="mt-4 p-4 bg-muted rounded-lg">
          <p className="text-sm text-muted-foreground">
            <strong>Formula:</strong> liters = US gallons × 3.78541
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
