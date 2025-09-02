"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ArrowLeftRight } from "lucide-react"

export default function ClientJouleToCalorie() {
  const [joules, setJoules] = useState<string>("")
  const [calories, setCalories] = useState<string>("")

  const convertJToCal = (j: number): number => {
    return j / 4.184
  }

  const convertCalToJ = (cal: number): number => {
    return cal * 4.184
  }

  const handleJouleChange = (value: string) => {
    setJoules(value)
    if (value && !isNaN(Number(value))) {
      const result = convertJToCal(Number(value))
      setCalories(result.toFixed(6))
    } else {
      setCalories("")
    }
  }

  const handleCalorieChange = (value: string) => {
    setCalories(value)
    if (value && !isNaN(Number(value))) {
      const result = convertCalToJ(Number(value))
      setJoules(result.toFixed(6))
    } else {
      setJoules("")
    }
  }

  const swapValues = () => {
    const tempJ = joules
    setJoules(calories)
    setCalories(tempJ)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Convert Joules to Calories</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
          <div>
            <label className="block text-sm font-medium mb-2">Joules (J)</label>
            <Input
              type="number"
              value={joules}
              onChange={(e) => handleJouleChange(e.target.value)}
              placeholder="Enter joules"
            />
          </div>

          <div className="flex justify-center">
            <Button variant="outline" size="icon" onClick={swapValues}>
              <ArrowLeftRight className="h-4 w-4" />
            </Button>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Calories (cal)</label>
            <Input
              type="number"
              value={calories}
              onChange={(e) => handleCalorieChange(e.target.value)}
              placeholder="Enter calories"
            />
          </div>
        </div>

        <div className="mt-4 p-4 bg-muted rounded-lg">
          <p className="text-sm text-muted-foreground">
            <strong>Formula:</strong> calories = joules ÷ 4.184
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
