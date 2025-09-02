import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function GuideArticle() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Complete Guide: Celsius to Fahrenheit Conversion</CardTitle>
      </CardHeader>
      <CardContent className="prose max-w-none">
        <h2 className="text-xl font-semibold mb-4">Understanding Celsius and Fahrenheit</h2>
        <p className="mb-4">
          Celsius (°C) is a temperature scale where 0°C is the freezing point of water and 100°C is the boiling point.
          Fahrenheit (°F) is primarily used in the United States, where water freezes at 32°F and boils at 212°F.
        </p>

        <h2 className="text-xl font-semibold mb-4">Conversion Formula</h2>
        <div className="bg-muted p-4 rounded-lg mb-4">
          <p>
            <strong>To convert Celsius to Fahrenheit:</strong> °F = (°C × 9/5) + 32
          </p>
          <p>
            <strong>To convert Fahrenheit to Celsius:</strong> °C = (°F - 32) × 5/9
          </p>
        </div>

        <h2 className="text-xl font-semibold mb-4">Real-Life Examples</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>
            <strong>Body temperature:</strong> Normal human body temperature is 37°C (98.6°F)
          </li>
          <li>
            <strong>Room temperature:</strong> Comfortable room temperature is around 20-22°C (68-72°F)
          </li>
          <li>
            <strong>Cooking:</strong> Baking temperature of 180°C equals 356°F
          </li>
          <li>
            <strong>Weather:</strong> A hot summer day of 35°C is 95°F
          </li>
        </ul>

        <h2 className="text-xl font-semibold mb-4">Key Temperature Points</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse border border-border">
            <thead>
              <tr className="bg-muted">
                <th className="border border-border p-2 text-left">Description</th>
                <th className="border border-border p-2 text-left">Celsius</th>
                <th className="border border-border p-2 text-left">Fahrenheit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border p-2">Absolute Zero</td>
                <td className="border border-border p-2">-273.15°C</td>
                <td className="border border-border p-2">-459.67°F</td>
              </tr>
              <tr>
                <td className="border border-border p-2">Water Freezes</td>
                <td className="border border-border p-2">0°C</td>
                <td className="border border-border p-2">32°F</td>
              </tr>
              <tr>
                <td className="border border-border p-2">Room Temperature</td>
                <td className="border border-border p-2">20°C</td>
                <td className="border border-border p-2">68°F</td>
              </tr>
              <tr>
                <td className="border border-border p-2">Body Temperature</td>
                <td className="border border-border p-2">37°C</td>
                <td className="border border-border p-2">98.6°F</td>
              </tr>
              <tr>
                <td className="border border-border p-2">Water Boils</td>
                <td className="border border-border p-2">100°C</td>
                <td className="border border-border p-2">212°F</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">Why are there different temperature scales?</h3>
            <p>
              Different temperature scales were developed by different scientists. Celsius is based on water's freezing
              and boiling points, while Fahrenheit was originally based on the lowest temperature achievable with salt
              and ice.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Which countries use Fahrenheit?</h3>
            <p>
              Only the United States, Bahamas, Belize, Cayman Islands, and Palau still use Fahrenheit for everyday
              temperature measurements. Most of the world uses Celsius.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">At what temperature are Celsius and Fahrenheit equal?</h3>
            <p>Celsius and Fahrenheit are equal at -40 degrees (-40°C = -40°F).</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
