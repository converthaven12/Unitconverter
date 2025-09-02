import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function GuideArticle() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Complete Guide: Pound to Kilogram Conversion</CardTitle>
      </CardHeader>
      <CardContent className="prose max-w-none">
        <h2 className="text-xl font-semibold mb-4">Understanding Pounds and Kilograms</h2>
        <p className="mb-4">
          The pound (lb or lbs) is an imperial unit of weight used primarily in the United States. The kilogram (kg) is
          the base unit of mass in the metric system and is used worldwide for scientific and everyday measurements.
        </p>

        <h2 className="text-xl font-semibold mb-4">Conversion Formula</h2>
        <div className="bg-muted p-4 rounded-lg mb-4">
          <p>
            <strong>To convert pounds to kilograms:</strong> kilograms = pounds ÷ 2.20462
          </p>
          <p>
            <strong>To convert kilograms to pounds:</strong> pounds = kilograms × 2.20462
          </p>
        </div>

        <h2 className="text-xl font-semibold mb-4">Real-Life Examples</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>
            <strong>Baby weight:</strong> A 7 lb newborn weighs approximately 3.18 kg
          </li>
          <li>
            <strong>Sports equipment:</strong> A 45 lb Olympic barbell weighs 20.4 kg
          </li>
          <li>
            <strong>Cooking:</strong> A 2 lb chicken weighs about 0.91 kg
          </li>
          <li>
            <strong>Shipping:</strong> A 50 lb package weighs 22.7 kg
          </li>
        </ul>

        <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">How many kilograms are in a pound?</h3>
            <p>There are approximately 0.453592 kilograms in one pound.</p>
          </div>
          <div>
            <h3 className="font-semibold">Why do Americans use pounds instead of kilograms?</h3>
            <p>
              The United States has historically used the imperial system and hasn't fully adopted the metric system for
              everyday measurements, unlike most other countries.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Is it better to use pounds or kilograms?</h3>
            <p>
              Kilograms are more precise and universally used in science and medicine. Pounds are familiar to Americans
              but less precise for scientific calculations.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
