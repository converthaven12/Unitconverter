import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function GuideArticle() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Complete Guide: US Gallon to Liter Conversion</CardTitle>
      </CardHeader>
      <CardContent className="prose max-w-none">
        <h2 className="text-xl font-semibold mb-4">Understanding US Gallons and Liters</h2>
        <p className="mb-4">
          The US gallon (gal) is an imperial unit of volume used primarily in the United States, equal to 231 cubic
          inches. The liter (L) is a metric unit of volume equal to 1,000 cubic centimeters and is used worldwide.
        </p>

        <h2 className="text-xl font-semibold mb-4">Conversion Formula</h2>
        <div className="bg-muted p-4 rounded-lg mb-4">
          <p>
            <strong>To convert US gallons to liters:</strong> liters = US gallons × 3.78541
          </p>
          <p>
            <strong>To convert liters to US gallons:</strong> US gallons = liters ÷ 3.78541
          </p>
        </div>

        <h2 className="text-xl font-semibold mb-4">Real-Life Examples</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>
            <strong>Gas tank:</strong> A 15-gallon car tank holds 56.8 liters
          </li>
          <li>
            <strong>Water heater:</strong> A 40-gallon water heater contains 151.4 liters
          </li>
          <li>
            <strong>Paint can:</strong> A 5-gallon paint bucket holds 18.9 liters
          </li>
          <li>
            <strong>Aquarium:</strong> A 20-gallon fish tank contains 75.7 liters
          </li>
        </ul>

        <h2 className="text-xl font-semibold mb-4">Common Volume Conversions</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse border border-border">
            <thead>
              <tr className="bg-muted">
                <th className="border border-border p-2 text-left">Container</th>
                <th className="border border-border p-2 text-left">US Gallons</th>
                <th className="border border-border p-2 text-left">Liters</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border p-2">Water Bottle</td>
                <td className="border border-border p-2">0.53 gal</td>
                <td className="border border-border p-2">2 L</td>
              </tr>
              <tr>
                <td className="border border-border p-2">Milk Jug</td>
                <td className="border border-border p-2">1 gal</td>
                <td className="border border-border p-2">3.79 L</td>
              </tr>
              <tr>
                <td className="border border-border p-2">Small Gas Tank</td>
                <td className="border border-border p-2">12 gal</td>
                <td className="border border-border p-2">45.4 L</td>
              </tr>
              <tr>
                <td className="border border-border p-2">Large Gas Tank</td>
                <td className="border border-border p-2">20 gal</td>
                <td className="border border-border p-2">75.7 L</td>
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
            <h3 className="font-semibold">Is a US gallon the same as an Imperial gallon?</h3>
            <p>
              No, a US gallon (3.785 L) is smaller than an Imperial gallon (4.546 L). Always specify which type of
              gallon you're using for accurate conversions.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Why is fuel efficiency measured differently in the US vs other countries?</h3>
            <p>
              The US uses miles per gallon (MPG), while most countries use liters per 100 kilometers (L/100km). This
              reflects the different measurement systems used in each region.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
