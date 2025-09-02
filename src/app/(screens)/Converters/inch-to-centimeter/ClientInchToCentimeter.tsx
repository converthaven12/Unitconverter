"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ArrowLeftRight } from "lucide-react"

export default function ClientInchToCentimeter() {
  const [inches, setInches] = useState<string>("")
  const [centimeters, setCentimeters] = useState<string>("")

  const convertInToCm = (inch: number): number => {
    return inch * 2.54
  }

  const convertCmToIn = (cm: number): number => {
    return cm / 2.54
  }

  const handleInchChange = (value: string) => {
    setInches(value)
    if (value && !isNaN(Number(value))) {
      const result = convertInToCm(Number(value))
      setCentimeters(result.toFixed(6))
    } else {
      setCentimeters("")
    }
  }

  const handleCentimeterChange = (value: string) => {
    setCentimeters(value)
    if (value && !isNaN(Number(value))) {
      const result = convertCmToIn(Number(value))
      setInches(result.toFixed(6))
    } else {
      setInches("")
    }
  }

  const swapValues = () => {
    const tempIn = inches
    setInches(centimeters)
    setCentimeters(tempIn)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Convert Inches to Centimeters</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
          <div>
            <label className="block text-sm font-medium mb-2">Inches (in)</label>
            <Input
              type="number"
              value={inches}
              onChange={(e) => handleInchChange(e.target.value)}
              placeholder="Enter inches"
            />
          </div>

          <div className="flex justify-center">
            <Button variant="outline" size="icon" onClick={swapValues}>
              <ArrowLeftRight className="h-4 w-4" />
            </Button>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Centimeters (cm)</label>
            <Input
              type="number"
              value={centimeters}
              onChange={(e) => handleCentimeterChange(e.target.value)}
              placeholder="Enter centimeters"
            />
          </div>
        </div>

        <div className="mt-4 p-4 bg-muted rounded-lg">
          <p className="text-sm text-muted-foreground">
            <strong>Formula:</strong> centimeters = inches × 2.54
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
