import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function GuideArticle() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Complete Guide: Inch to Centimeter Conversion</CardTitle>
      </CardHeader>
      <CardContent className="prose max-w-none">
        <h2 className="text-xl font-semibold mb-4">Understanding Inches and Centimeters</h2>
        <p className="mb-4">
          The inch (in) is an imperial unit of length traditionally defined as 1/12 of a foot. The centimeter (cm) is a
          metric unit equal to one hundredth of a meter and exactly 1/2.54 inches.
        </p>

        <h2 className="text-xl font-semibold mb-4">Conversion Formula</h2>
        <div className="bg-muted p-4 rounded-lg mb-4">
          <p>
            <strong>To convert inches to centimeters:</strong> centimeters = inches × 2.54
          </p>
          <p>
            <strong>To convert centimeters to inches:</strong> inches = centimeters ÷ 2.54
          </p>
        </div>

        <h2 className="text-xl font-semibold mb-4">Real-Life Examples</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>
            <strong>TV screens:</strong> A 55-inch TV is 139.7 cm diagonally
          </li>
          <li>
            <strong>Smartphone screens:</strong> A 6-inch phone screen is 15.24 cm
          </li>
          <li>
            <strong>Furniture:</strong> A standard door is 80 inches tall (203.2 cm)
          </li>
          <li>
            <strong>Photography:</strong> An 8×10 inch photo is 20.32×25.4 cm
          </li>
        </ul>

        <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">How many centimeters are in an inch?</h3>
            <p>There are exactly 2.54 centimeters in one inch.</p>
          </div>
          <div>
            <h3 className="font-semibold">Why is the conversion factor 2.54?</h3>
            <p>In 1959, the international yard and pound agreement defined the inch as exactly 2.54 centimeters.</p>
          </div>
          <div>
            <h3 className="font-semibold">When should I use inches vs centimeters?</h3>
            <p>
              Use inches in the US for construction, clothing, and everyday measurements. Use centimeters for scientific
              work and in metric countries.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
