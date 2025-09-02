import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function GuideArticle() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Complete Guide to Kilometer to Mile Conversion</CardTitle>
      </CardHeader>
      <CardContent className="prose max-w-none">
        <h2 className="text-2xl font-semibold mb-4">Understanding Kilometer to Mile Conversion</h2>
        <p className="mb-4">
          Converting kilometers to miles is essential for international travel, sports, and scientific applications. The
          kilometer is a metric unit of distance, while the mile is used primarily in the United States and United
          Kingdom.
        </p>

        <h3 className="text-xl font-semibold mb-3">Conversion Formula</h3>
        <p className="mb-4">
          The conversion from kilometers to miles uses the conversion factor:
          <strong> 1 kilometer = 0.621371 miles</strong>
        </p>
        <div className="bg-muted p-4 rounded-lg mb-4">
          <p>
            <strong>Formula:</strong> miles = kilometers × 0.621371
          </p>
        </div>

        <h3 className="text-xl font-semibold mb-3">Real-World Applications</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>
            <strong>Travel:</strong> Converting distances on maps and GPS systems
          </li>
          <li>
            <strong>Running/Cycling:</strong> Marathon distances and race measurements
          </li>
          <li>
            <strong>Automotive:</strong> Fuel efficiency calculations and odometer readings
          </li>
          <li>
            <strong>Aviation:</strong> Flight distances and navigation
          </li>
        </ul>

        <h3 className="text-xl font-semibold mb-3">Common Distance Conversions</h3>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse border">
            <thead>
              <tr className="bg-muted">
                <th className="border p-2 text-left">Kilometers</th>
                <th className="border p-2 text-left">Miles</th>
                <th className="border p-2 text-left">Reference</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">5</td>
                <td className="border p-2">3.11</td>
                <td className="border p-2">5K race</td>
              </tr>
              <tr>
                <td className="border p-2">10</td>
                <td className="border p-2">6.21</td>
                <td className="border p-2">10K race</td>
              </tr>
              <tr>
                <td className="border p-2">21.1</td>
                <td className="border p-2">13.1</td>
                <td className="border p-2">Half marathon</td>
              </tr>
              <tr>
                <td className="border p-2">42.2</td>
                <td className="border p-2">26.2</td>
                <td className="border p-2">Full marathon</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-semibold mb-3">Frequently Asked Questions</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold">How many miles are in a kilometer?</h4>
            <p>
              There are approximately 0.621371 miles in one kilometer. This is the standard conversion factor used
              internationally.
            </p>
          </div>
          <div>
            <h4 className="font-semibold">Which countries use miles vs kilometers?</h4>
            <p>
              Most countries use kilometers (metric system), while the United States, United Kingdom, and a few others
              primarily use miles.
            </p>
          </div>
          <div>
            <h4 className="font-semibold">Is there a quick mental conversion method?</h4>
            <p>
              A rough approximation is to multiply kilometers by 0.6 for a quick estimate, though 0.621371 is more
              accurate.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
