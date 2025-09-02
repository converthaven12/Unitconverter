import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ConversionTable() {
  const conversions = [
    { joules: 1, calories: 0.239006 },
    { joules: 4.184, calories: 1 },
    { joules: 10, calories: 2.39006 },
    { joules: 50, calories: 11.9503 },
    { joules: 100, calories: 23.9006 },
    { joules: 500, calories: 119.503 },
    { joules: 1000, calories: 239.006 },
    { joules: 4184, calories: 1000 },
    { joules: 10000, calories: 2390.06 },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Joule to Calorie Conversion Table</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-border">
            <thead>
              <tr className="bg-muted">
                <th className="border border-border p-2 text-left">Joules (J)</th>
                <th className="border border-border p-2 text-left">Calories (cal)</th>
              </tr>
            </thead>
            <tbody>
              {conversions.map((conversion, index) => (
                <tr key={index} className="hover:bg-muted/50">
                  <td className="border border-border p-2">{conversion.joules}</td>
                  <td className="border border-border p-2">{conversion.calories}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
