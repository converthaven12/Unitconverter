import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ConversionTable() {
  const conversions = [
    { gallons: 1, liters: 3.78541 },
    { gallons: 2, liters: 7.57082 },
    { gallons: 5, liters: 18.9271 },
    { gallons: 10, liters: 37.8541 },
    { gallons: 15, liters: 56.7812 },
    { gallons: 20, liters: 75.7082 },
    { gallons: 25, liters: 94.6353 },
    { gallons: 50, liters: 189.271 },
    { gallons: 100, liters: 378.541 },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>US Gallon to Liter Conversion Table</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-border">
            <thead>
              <tr className="bg-muted">
                <th className="border border-border p-2 text-left">US Gallons (gal)</th>
                <th className="border border-border p-2 text-left">Liters (L)</th>
              </tr>
            </thead>
            <tbody>
              {conversions.map((conversion, index) => (
                <tr key={index} className="hover:bg-muted/50">
                  <td className="border border-border p-2">{conversion.gallons}</td>
                  <td className="border border-border p-2">{conversion.liters}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
