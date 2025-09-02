"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ArrowLeftRight } from "lucide-react"

export default function ClientGigabyteToGibibyte() {
  const [gigabytes, setGigabytes] = useState<string>("")
  const [gibibytes, setGibibytes] = useState<string>("")

  const convertGBToGiB = (gb: number): number => {
    return (gb * 1000 ** 3) / 1024 ** 3
  }

  const convertGiBToGB = (gib: number): number => {
    return (gib * 1024 ** 3) / 1000 ** 3
  }

  const handleGigabyteChange = (value: string) => {
    setGigabytes(value)
    if (value && !isNaN(Number(value))) {
      const result = convertGBToGiB(Number(value))
      setGibibytes(result.toFixed(6))
    } else {
      setGibibytes("")
    }
  }

  const handleGibibyteChange = (value: string) => {
    setGibibytes(value)
    if (value && !isNaN(Number(value))) {
      const result = convertGiBToGB(Number(value))
      setGigabytes(result.toFixed(6))
    } else {
      setGigabytes("")
    }
  }

  const swapValues = () => {
    const tempGB = gigabytes
    setGigabytes(gibibytes)
    setGibibytes(tempGB)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Convert Gigabytes to Gibibytes</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
          <div>
            <label className="block text-sm font-medium mb-2">Gigabytes (GB)</label>
            <Input
              type="number"
              value={gigabytes}
              onChange={(e) => handleGigabyteChange(e.target.value)}
              placeholder="Enter gigabytes"
            />
          </div>

          <div className="flex justify-center">
            <Button variant="outline" size="icon" onClick={swapValues}>
              <ArrowLeftRight className="h-4 w-4" />
            </Button>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Gibibytes (GiB)</label>
            <Input
              type="number"
              value={gibibytes}
              onChange={(e) => handleGibibyteChange(e.target.value)}
              placeholder="Enter gibibytes"
            />
          </div>
        </div>

        <div className="mt-4 p-4 bg-muted rounded-lg">
          <p className="text-sm text-muted-foreground">
            <strong>Formula:</strong> GiB = GB × (1000³ ÷ 1024³) ≈ GB × 0.931323
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
