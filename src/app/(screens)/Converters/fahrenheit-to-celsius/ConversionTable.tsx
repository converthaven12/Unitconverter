import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ConversionTable() {
  const conversions = [
    { fahrenheit: -40, celsius: -40 },
    { fahrenheit: 0, celsius: -17.78 },
    { fahrenheit: 32, celsius: 0 },
    { fahrenheit: 50, celsius: 10 },
    { fahrenheit: 68, celsius: 20 },
    { fahrenheit: 77, celsius: 25 },
    { fahrenheit: 86, celsius: 30 },
    { fahrenheit: 98.6, celsius: 37 },
    { fahrenheit: 212, celsius: 100 },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Fahrenheit to Celsius Conversion Table</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-border">
            <thead>
              <tr className="bg-muted">
                <th className="border border-border p-2 text-left">Fahrenheit (°F)</th>
                <th className="border border-border p-2 text-left">Celsius (°C)</th>
              </tr>
            </thead>
            <tbody>
              {conversions.map((conversion, index) => (
                <tr key={index} className="hover:bg-muted/50">
                  <td className="border border-border p-2">{conversion.fahrenheit}</td>
                  <td className="border border-border p-2">{conversion.celsius}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
