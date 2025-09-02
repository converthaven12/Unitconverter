import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function GuideArticle() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Complete Guide: Fahrenheit to Celsius Conversion</CardTitle>
      </CardHeader>
      <CardContent className="prose max-w-none">
        <h2 className="text-xl font-semibold mb-4">Understanding Fahrenheit and Celsius</h2>
        <p className="mb-4">
          Fahrenheit (°F) is a temperature scale primarily used in the United States, where water freezes at 32°F and
          boils at 212°F. Celsius (°C) is used worldwide and is based on water freezing at 0°C and boiling at 100°C.
        </p>

        <h2 className="text-xl font-semibold mb-4">Conversion Formula</h2>
        <div className="bg-muted p-4 rounded-lg mb-4">
          <p>
            <strong>To convert Fahrenheit to Celsius:</strong> °C = (°F - 32) × 5/9
          </p>
          <p>
            <strong>To convert Celsius to Fahrenheit:</strong> °F = (°C × 9/5) + 32
          </p>
        </div>

        <h2 className="text-xl font-semibold mb-4">Real-Life Examples</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>
            <strong>Fever temperature:</strong> 100.4°F equals 38°C
          </li>
          <li>
            <strong>Comfortable weather:</strong> 75°F is approximately 24°C
          </li>
          <li>
            <strong>Oven temperature:</strong> 350°F for baking equals 177°C
          </li>
          <li>
            <strong>Cold weather:</strong> 20°F is approximately -7°C
          </li>
        </ul>

        <h2 className="text-xl font-semibold mb-4">Quick Mental Conversion Tips</h2>
        <div className="bg-muted p-4 rounded-lg mb-4">
          <p className="mb-2">
            <strong>Quick approximation:</strong> Subtract 30 from Fahrenheit, then divide by 2
          </p>
          <p className="mb-2">
            <strong>Example:</strong> 80°F → (80-30)÷2 = 25°C (actual: 26.7°C)
          </p>
          <p>This method gives you a rough estimate that's usually within a few degrees.</p>
        </div>

        <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">Why does the US still use Fahrenheit?</h3>
            <p>
              The US adopted Fahrenheit before the metric system was established. Changing would require updating all
              infrastructure, education, and daily practices, making it a complex transition.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Which scale is more accurate?</h3>
            <p>
              Both scales are equally accurate for measuring temperature. Celsius is more convenient for scientific work
              because it aligns with the metric system and has simpler reference points.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">What's the origin of the Fahrenheit scale?</h3>
            <p>
              Daniel Gabriel Fahrenheit created this scale in 1724, originally setting 0°F as the lowest temperature he
              could achieve with salt and ice, and 96°F as human body temperature.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
