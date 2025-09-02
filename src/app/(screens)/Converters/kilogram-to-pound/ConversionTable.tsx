import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ConversionTable() {
  const conversions = [
    { kg: 1, lbs: 2.20462 },
    { kg: 5, lbs: 11.0231 },
    { kg: 10, lbs: 22.0462 },
    { kg: 25, lbs: 55.1156 },
    { kg: 50, lbs: 110.231 },
    { kg: 75, lbs: 165.347 },
    { kg: 100, lbs: 220.462 },
    { kg: 150, lbs: 330.693 },
    { kg: 200, lbs: 440.925 },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Kilogram to Pound Conversion Table</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-border">
            <thead>
              <tr className="bg-muted">
                <th className="border border-border p-2 text-left">Kilograms (kg)</th>
                <th className="border border-border p-2 text-left">Pounds (lbs)</th>
              </tr>
            </thead>
            <tbody>
              {conversions.map((conversion, index) => (
                <tr key={index} className="hover:bg-muted/50">
                  <td className="border border-border p-2">{conversion.kg}</td>
                  <td className="border border-border p-2">{conversion.lbs}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
