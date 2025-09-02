import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ConversionTable() {
  const conversions = [
    { inch: 1, cm: 2.54 },
    { inch: 2, cm: 5.08 },
    { inch: 3, cm: 7.62 },
    { inch: 6, cm: 15.24 },
    { inch: 12, cm: 30.48 },
    { inch: 24, cm: 60.96 },
    { inch: 36, cm: 91.44 },
    { inch: 48, cm: 121.92 },
    { inch: 60, cm: 152.4 },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Inch to Centimeter Conversion Table</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-border">
            <thead>
              <tr className="bg-muted">
                <th className="border border-border p-2 text-left">Inches (in)</th>
                <th className="border border-border p-2 text-left">Centimeters (cm)</th>
              </tr>
            </thead>
            <tbody>
              {conversions.map((conversion, index) => (
                <tr key={index} className="hover:bg-muted/50">
                  <td className="border border-border p-2">{conversion.inch}</td>
                  <td className="border border-border p-2">{conversion.cm}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
