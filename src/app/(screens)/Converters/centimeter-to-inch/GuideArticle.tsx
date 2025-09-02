import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function GuideArticle() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Complete Guide: Centimet to Inch Conversion</CardTitle>
      </CardHeader>
      <CardContent className="prose max-w-none">
        <h2 className="text-xl font-semibold mb-4">Understanding Centimeters and Inches</h2>
        <p className="mb-4">
          The centimeter (cm) is a metric unit of length equal to one hundredth of a meter. The inch (in) is an imperial
          unit of length equal to 1/12 of a foot or 2.54 centimeters exactly.
        </p>

        <h2 className="text-xl font-semibold mb-4">Conversion Formula</h2>
        <div className="bg-muted p-4 rounded-lg mb-4">
          <p>
            <strong>To convert centimeters to inches:</strong> inches = centimeters ÷ 2.54
          </p>
          <p>
            <strong>To convert inches to centimeters:</strong> centimeters = inches × 2.54
          </p>
        </div>

        <h2 className="text-xl font-semibold mb-4">Real-Life Examples</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>
            <strong>Screen sizes:</strong> A 15.6-inch laptop screen is approximately 39.6 cm
          </li>
          <li>
            <strong>Paper sizes:</strong> A4 paper is 21 cm wide (8.27 inches)
          </li>
          <li>
            <strong>Height measurement:</strong> A person who is 180 cm tall is about 70.9 inches
          </li>
          <li>
            <strong>Clothing:</strong> A 32-inch waist is approximately 81.3 cm
          </li>
        </ul>

        <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">How many inches are in a centimeter?</h3>
            <p>There are approximately 0.393701 inches in one centimeter.</p>
          </div>
          <div>
            <h3 className="font-semibold">Is 2.54 cm exactly equal to 1 inch?</h3>
            <p>Yes, by international agreement, 1 inch is defined as exactly 2.54 centimeters.</p>
          </div>
          <div>
            <h3 className="font-semibold">Which countries use centimeters vs inches?</h3>
            <p>
              Most countries worldwide use centimeters (metric system), while the United States, Myanmar, and Liberia
              primarily use inches (imperial system).
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
