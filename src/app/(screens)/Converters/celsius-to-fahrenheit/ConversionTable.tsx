import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ConversionTable() {
  const conversions = [
    { celsius: -40, fahrenheit: -40 },
    { celsius: -20, fahrenheit: -4 },
    { celsius: 0, fahrenheit: 32 },
    { celsius: 10, fahrenheit: 50 },
    { celsius: 20, fahrenheit: 68 },
    { celsius: 25, fahrenheit: 77 },
    { celsius: 30, fahrenheit: 86 },
    { celsius: 37, fahrenheit: 98.6 },
    { celsius: 100, fahrenheit: 212 },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Celsius to Fahrenheit Conversion Table</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-border">
            <thead>
              <tr className="bg-muted">
                <th className="border border-border p-2 text-left">Celsius (°C)</th>
                <th className="border border-border p-2 text-left">Fahrenheit (°F)</th>
              </tr>
            </thead>
            <tbody>
              {conversions.map((conversion, index) => (
                <tr key={index} className="hover:bg-muted/50">
                  <td className="border border-border p-2">{conversion.celsius}</td>
                  <td className="border border-border p-2">{conversion.fahrenheit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
