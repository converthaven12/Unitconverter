import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function GuideArticle() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Complete Guide to Foot to Meter Conversion</CardTitle>
      </CardHeader>
      <CardContent className="prose max-w-none">
        <h2 className="text-2xl font-semibold mb-4">Understanding Foot to Meter Conversion</h2>
        <p className="mb-4">
          Converting feet to meters is a common task when working between imperial and metric systems. The foot is a
          unit of length in the imperial system, while the meter is the base unit of length in the metric system.
        </p>

        <h3 className="text-xl font-semibold mb-3">Conversion Formula</h3>
        <p className="mb-4">
          The conversion from feet to meters uses the exact conversion factor:
          <strong> 1 foot = 0.3048 meters</strong>
        </p>
        <div className="bg-muted p-4 rounded-lg mb-4">
          <p>
            <strong>Formula:</strong> meters = feet × 0.3048
          </p>
        </div>

        <h3 className="text-xl font-semibold mb-3">Real-World Applications</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>
            <strong>Construction:</strong> Converting building heights and room dimensions
          </li>
          <li>
            <strong>Sports:</strong> Track and field measurements, swimming pool lengths
          </li>
          <li>
            <strong>Aviation:</strong> Altitude measurements and runway lengths
          </li>
          <li>
            <strong>Real Estate:</strong> Property dimensions and ceiling heights
          </li>
        </ul>

        <h3 className="text-xl font-semibold mb-3">Common Conversions</h3>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse border">
            <thead>
              <tr className="bg-muted">
                <th className="border p-2 text-left">Feet</th>
                <th className="border p-2 text-left">Meters</th>
                <th className="border p-2 text-left">Common Use</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">6</td>
                <td className="border p-2">1.83</td>
                <td className="border p-2">Average person height</td>
              </tr>
              <tr>
                <td className="border p-2">8</td>
                <td className="border p-2">2.44</td>
                <td className="border p-2">Standard ceiling height</td>
              </tr>
              <tr>
                <td className="border p-2">10</td>
                <td className="border p-2">3.05</td>
                <td className="border p-2">Basketball hoop height</td>
              </tr>
              <tr>
                <td className="border p-2">100</td>
                <td className="border p-2">30.48</td>
                <td className="border p-2">Football field length</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-semibold mb-3">Frequently Asked Questions</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold">How many meters are in a foot?</h4>
            <p>There are exactly 0.3048 meters in one foot. This is the internationally accepted conversion factor.</p>
          </div>
          <div>
            <h4 className="font-semibold">Why is the conversion factor 0.3048?</h4>
            <p>
              This factor was established in 1959 when the international yard and pound agreement defined the foot as
              exactly 0.3048 meters.
            </p>
          </div>
          <div>
            <h4 className="font-semibold">Is the conversion exact or approximate?</h4>
            <p>The conversion is exact. The factor 0.3048 is a defined constant, not an approximation.</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
