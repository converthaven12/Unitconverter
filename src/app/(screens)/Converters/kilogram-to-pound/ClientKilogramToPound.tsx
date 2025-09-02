"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ArrowLeftRight } from "lucide-react"

export default function ClientKilogramToPound() {
  const [kilograms, setKilograms] = useState<string>("")
  const [pounds, setPounds] = useState<string>("")

  const convertKgToLbs = (kg: number): number => {
    return kg * 2.20462
  }

  const convertLbsToKg = (lbs: number): number => {
    return lbs / 2.20462
  }

  const handleKilogramChange = (value: string) => {
    setKilograms(value)
    if (value && !isNaN(Number(value))) {
      const result = convertKgToLbs(Number(value))
      setPounds(result.toFixed(6))
    } else {
      setPounds("")
    }
  }

  const handlePoundChange = (value: string) => {
    setPounds(value)
    if (value && !isNaN(Number(value))) {
      const result = convertLbsToKg(Number(value))
      setKilograms(result.toFixed(6))
    } else {
      setKilograms("")
    }
  }

  const swapValues = () => {
    const tempKg = kilograms
    setKilograms(pounds)
    setPounds(tempKg)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Convert Kilograms to Pounds</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
          <div>
            <label className="block text-sm font-medium mb-2">Kilograms (kg)</label>
            <Input
              type="number"
              value={kilograms}
              onChange={(e) => handleKilogramChange(e.target.value)}
              placeholder="Enter kilograms"
            />
          </div>

          <div className="flex justify-center">
            <Button variant="outline" size="icon" onClick={swapValues}>
              <ArrowLeftRight className="h-4 w-4" />
            </Button>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Pounds (lbs)</label>
            <Input
              type="number"
              value={pounds}
              onChange={(e) => handlePoundChange(e.target.value)}
              placeholder="Enter pounds"
            />
          </div>
        </div>

        <div className="mt-4 p-4 bg-muted rounded-lg">
          <p className="text-sm text-muted-foreground">
            <strong>Formula:</strong> pounds = kilograms × 2.20462
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
