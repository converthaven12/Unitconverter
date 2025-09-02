import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function GuideArticle() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Complete Guide: Liter to US Gallon Conversion</CardTitle>
      </CardHeader>
      <CardContent className="prose max-w-none">
        <h2 className="text-xl font-semibold mb-4">Understanding Liters and US Gallons</h2>
        <p className="mb-4">
          The liter (L) is a metric unit of volume equal to 1,000 cubic centimeters. The US gallon (gal) is an imperial
          unit used primarily in the United States, equal to 3.78541 liters or 231 cubic inches.
        </p>

        <h2 className="text-xl font-semibold mb-4">Conversion Formula</h2>
        <div className="bg-muted p-4 rounded-lg mb-4">
          <p>
            <strong>To convert liters to US gallons:</strong> US gallons = liters ÷ 3.78541
          </p>
          <p>
            <strong>To convert US gallons to liters:</strong> liters = US gallons × 3.78541
          </p>
        </div>

        <h2 className="text-xl font-semibold mb-4">Real-Life Examples</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>
            <strong>Car fuel tank:</strong> A 60-liter tank holds about 15.9 US gallons
          </li>
          <li>
            <strong>Water bottles:</strong> A 2-liter bottle equals 0.53 US gallons
          </li>
          <li>
            <strong>Swimming pool:</strong> A 20,000-liter pool holds 5,283 US gallons
          </li>
          <li>
            <strong>Milk jug:</strong> A 1-gallon milk jug contains 3.79 liters
          </li>
        </ul>

        <h2 className="text-xl font-semibold mb-4">US vs Imperial Gallons</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse border border-border">
            <thead>
              <tr className="bg-muted">
                <th className="border border-border p-2 text-left">Unit</th>
                <th className="border border-border p-2 text-left">Liters</th>
                <th className="border border-border p-2 text-left">Used In</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border p-2">US Gallon</td>
                <td className="border border-border p-2">3.78541 L</td>
                <td className="border border-border p-2">United States</td>
              </tr>
              <tr>
                <td className="border border-border p-2">Imperial Gallon</td>
                <td className="border border-border p-2">4.54609 L</td>
                <td className="border border-border p-2">UK, Canada</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">How many liters are in a US gallon?</h3>
            <p>There are exactly 3.78541 liters in one US gallon.</p>
          </div>
          <div>
            <h3 className="font-semibold">What's the difference between US and Imperial gallons?</h3>
            <p>
              A US gallon is smaller (3.785 L) than an Imperial gallon (4.546 L). The US gallon is used in the United
              States, while the Imperial gallon is used in the UK and some Commonwealth countries.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Why do gas stations use gallons instead of liters in the US?</h3>
            <p>
              The US has historically used the imperial system and hasn't fully converted to metric units for everyday
              measurements, unlike most other countries.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
