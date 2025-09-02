import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function GuideArticle() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Complete Guide: m/s to km/h Conversion</CardTitle>
      </CardHeader>
      <CardContent className="prose max-w-none">
        <h2 className="text-xl font-semibold mb-4">Understanding m/s and km/h</h2>
        <p className="mb-4">
          Meters per second (m/s) is the SI unit of speed, measuring distance traveled per unit time. Kilometers per
          hour (km/h) is commonly used for vehicle speeds and weather reports, especially in countries using the metric
          system.
        </p>

        <h2 className="text-xl font-semibold mb-4">Conversion Formula</h2>
        <div className="bg-muted p-4 rounded-lg mb-4">
          <p>
            <strong>To convert m/s to km/h:</strong> km/h = m/s × 3.6
          </p>
          <p>
            <strong>To convert km/h to m/s:</strong> m/s = km/h ÷ 3.6
          </p>
          <p className="mt-2 text-sm">
            <strong>Why 3.6?</strong> 1 m/s = 1 m/s × (3600 s/h) ÷ (1000 m/km) = 3.6 km/h
          </p>
        </div>

        <h2 className="text-xl font-semibold mb-4">Real-Life Examples</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>
            <strong>Walking speed:</strong> 1.4 m/s equals 5 km/h
          </li>
          <li>
            <strong>Running speed:</strong> 5 m/s equals 18 km/h
          </li>
          <li>
            <strong>Cycling speed:</strong> 8.3 m/s equals 30 km/h
          </li>
          <li>
            <strong>Car in city:</strong> 13.9 m/s equals 50 km/h
          </li>
        </ul>

        <h2 className="text-xl font-semibold mb-4">Speed Comparisons</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse border border-border">
            <thead>
              <tr className="bg-muted">
                <th className="border border-border p-2 text-left">Activity/Object</th>
                <th className="border border-border p-2 text-left">m/s</th>
                <th className="border border-border p-2 text-left">km/h</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border p-2">Human Walking</td>
                <td className="border border-border p-2">1.4 m/s</td>
                <td className="border border-border p-2">5 km/h</td>
              </tr>
              <tr>
                <td className="border border-border p-2">Bicycle (casual)</td>
                <td className="border border-border p-2">4.2 m/s</td>
                <td className="border border-border p-2">15 km/h</td>
              </tr>
              <tr>
                <td className="border border-border p-2">City Speed Limit</td>
                <td className="border border-border p-2">13.9 m/s</td>
                <td className="border border-border p-2">50 km/h</td>
              </tr>
              <tr>
                <td className="border border-border p-2">Highway Speed</td>
                <td className="border border-border p-2">27.8 m/s</td>
                <td className="border border-border p-2">100 km/h</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">Why do we use different speed units?</h3>
            <p>
              m/s is used in scientific contexts because it's the SI base unit. km/h is more intuitive for everyday
              speeds like driving because the numbers are more relatable to human experience.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Which unit is more accurate?</h3>
            <p>
              Both units are equally accurate. The choice depends on context: m/s for physics and engineering, km/h for
              transportation and weather.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">How do I remember the conversion factor?</h3>
            <p>
              Remember that 1 m/s = 3.6 km/h. Think: "3.6 times faster in km/h numbers." For quick estimates, multiply
              m/s by 4 for an approximate km/h value.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
