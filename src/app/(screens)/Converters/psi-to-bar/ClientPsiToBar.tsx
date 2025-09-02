"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ArrowLeftRight } from "lucide-react"

export default function ClientPsiToBar() {
  const [psi, setPsi] = useState<string>("")
  const [bar, setBar] = useState<string>("")

  const convertPsiToBar = (psiValue: number): number => {
    return psiValue / 14.5038
  }

  const convertBarToPsi = (barValue: number): number => {
    return barValue * 14.5038
  }

  const handlePsiChange = (value: string) => {
    setPsi(value)
    if (value && !isNaN(Number(value))) {
      const result = convertPsiToBar(Number(value))
      setBar(result.toFixed(6))
    } else {
      setBar("")
    }
  }

  const handleBarChange = (value: string) => {
    setBar(value)
    if (value && !isNaN(Number(value))) {
      const result = convertBarToPsi(Number(value))
      setPsi(result.toFixed(6))
    } else {
      setPsi("")
    }
  }

  const swapValues = () => {
    const tempPsi = psi
    setPsi(bar)
    setBar(tempPsi)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Convert PSI to Bar</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
          <div>
            <label className="block text-sm font-medium mb-2">PSI (psi)</label>
            <Input
              type="number"
              value={psi}
              onChange={(e) => handlePsiChange(e.target.value)}
              placeholder="Enter PSI"
            />
          </div>

          <div className="flex justify-center">
            <Button variant="outline" size="icon" onClick={swapValues}>
              <ArrowLeftRight className="h-4 w-4" />
            </Button>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Bar (bar)</label>
            <Input
              type="number"
              value={bar}
              onChange={(e) => handleBarChange(e.target.value)}
              placeholder="Enter bar"
            />
          </div>
        </div>

        <div className="mt-4 p-4 bg-muted rounded-lg">
          <p className="text-sm text-muted-foreground">
            <strong>Formula:</strong> bar = psi ÷ 14.5038
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
