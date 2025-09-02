import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ConversionTable() {
  const conversions = [
    { degrees: 0, radians: 0, fraction: "0" },
    { degrees: 30, radians: 0.523599, fraction: "π/6" },
    { degrees: 45, radians: 0.785398, fraction: "π/4" },
    { degrees: 60, radians: 1.047198, fraction: "π/3" },
    { degrees: 90, radians: 1.570796, fraction: "π/2" },
    { degrees: 120, radians: 2.094395, fraction: "2π/3" },
    { degrees: 180, radians: 3.141593, fraction: "π" },
    { degrees: 270, radians: 4.712389, fraction: "3π/2" },
    { degrees: 360, radians: 6.283185, fraction: "2π" },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Degree to Radian Conversion Table</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-border">
            <thead>
              <tr className="bg-muted">
                <th className="border border-border p-2 text-left">Degrees (°)</th>
                <th className="border border-border p-2 text-left">Radians (decimal)</th>
                <th className="border border-border p-2 text-left">Radians (π fraction)</th>
              </tr>
            </thead>
            <tbody>
              {conversions.map((conversion, index) => (
                <tr key={index} className="hover:bg-muted/50">
                  <td className="border border-border p-2">{conversion.degrees}</td>
                  <td className="border border-border p-2">{conversion.radians}</td>
                  <td className="border border-border p-2">{conversion.fraction}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
