import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function GuideArticle() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Complete Guide: Kilogram to Pound Conversion</CardTitle>
      </CardHeader>
      <CardContent className="prose max-w-none">
        <h2 className="text-xl font-semibold mb-4">Understanding Kilograms and Pounds</h2>
        <p className="mb-4">
          The kilogram (kg) is the base unit of mass in the International System of Units (SI). The pound (lb or lbs) is
          an imperial unit of weight commonly used in the United States, equal to approximately 0.453592 kilograms.
        </p>

        <h2 className="text-xl font-semibold mb-4">Conversion Formula</h2>
        <div className="bg-muted p-4 rounded-lg mb-4">
          <p>
            <strong>To convert kilograms to pounds:</strong> pounds = kilograms × 2.20462
          </p>
          <p>
            <strong>To convert pounds to kilograms:</strong> kilograms = pounds ÷ 2.20462
          </p>
        </div>

        <h2 className="text-xl font-semibold mb-4">Real-Life Examples</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>
            <strong>Body weight:</strong> A person weighing 70 kg is approximately 154.3 lbs
          </li>
          <li>
            <strong>Luggage:</strong> A 23 kg suitcase weighs about 50.7 lbs
          </li>
          <li>
            <strong>Groceries:</strong> A 5 kg bag of flour weighs 11.0 lbs
          </li>
          <li>
            <strong>Fitness:</strong> A 20 kg dumbbell weighs 44.1 lbs
          </li>
        </ul>

        <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">How many pounds are in a kilogram?</h3>
            <p>There are approximately 2.20462 pounds in one kilogram.</p>
          </div>
          <div>
            <h3 className="font-semibold">Is weight the same as mass?</h3>
            <p>
              Technically, mass (kg) measures the amount of matter, while weight (lbs) measures gravitational force.
              However, they're often used interchangeably in everyday contexts.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Which countries use kilograms vs pounds?</h3>
            <p>
              Most countries worldwide use kilograms, while the United States, Myanmar, and Liberia primarily use pounds
              for body weight and everyday measurements.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
