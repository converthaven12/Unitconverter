import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ConversionTable() {
  const conversions = [
    { lbs: 1, kg: 0.453592 },
    { lbs: 5, kg: 2.26796 },
    { lbs: 10, kg: 4.53592 },
    { lbs: 25, kg: 11.3398 },
    { lbs: 50, kg: 22.6796 },
    { lbs: 100, kg: 45.3592 },
    { lbs: 150, kg: 68.0389 },
    { lbs: 200, kg: 90.7185 },
    { lbs: 250, kg: 113.398 },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Pound to Kilogram Conversion Table</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-border">
            <thead>
              <tr className="bg-muted">
                <th className="border border-border p-2 text-left">Pounds (lbs)</th>
                <th className="border border-border p-2 text-left">Kilograms (kg)</th>
              </tr>
            </thead>
            <tbody>
              {conversions.map((conversion, index) => (
                <tr key={index} className="hover:bg-muted/50">
                  <td className="border border-border p-2">{conversion.lbs}</td>
                  <td className="border border-border p-2">{conversion.kg}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
