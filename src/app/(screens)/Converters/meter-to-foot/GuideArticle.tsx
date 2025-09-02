import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function GuideArticle() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Complete Guide: Meter to Foot Conversion</CardTitle>
      </CardHeader>
      <CardContent className="prose max-w-none">
        <h2 className="text-2xl font-semibold mb-4">Understanding Meters and Feet</h2>
        <p className="mb-4">
          The meter is the base unit of length in the International System of Units (SI), while the foot is a unit of
          length in the imperial and US customary systems. One meter equals exactly 3.28084 feet.
        </p>

        <h3 className="text-xl font-semibold mb-3">Conversion Formula</h3>
        <div className="bg-muted p-4 rounded-lg mb-4">
          <p className="font-mono">feet = meters × 3.28084</p>
          <p className="font-mono">meters = feet ÷ 3.28084</p>
        </div>

        <h3 className="text-xl font-semibold mb-3">Real-Life Examples</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>A standard door height: 2 meters = 6.56 feet</li>
          <li>Olympic swimming pool length: 50 meters = 164 feet</li>
          <li>Basketball court length: 28 meters = 92 feet</li>
          <li>Football field length: 100 meters = 328 feet</li>
        </ul>

        <h3 className="text-xl font-semibold mb-3">Frequently Asked Questions</h3>

        <h4 className="text-lg font-medium mb-2">How many feet are in a meter?</h4>
        <p className="mb-3">
          There are exactly 3.28084 feet in one meter. This conversion factor is based on the international definition
          where 1 foot = 0.3048 meters.
        </p>

        <h4 className="text-lg font-medium mb-2">Why is the conversion factor 3.28084?</h4>
        <p className="mb-3">
          This precise number comes from the international agreement that defines 1 foot as exactly 0.3048 meters. The
          reciprocal of 0.3048 gives us 3.28084.
        </p>

        <h4 className="text-lg font-medium mb-2">When should I use meters vs feet?</h4>
        <p className="mb-3">
          Meters are used in most countries worldwide and in scientific contexts. Feet are primarily used in the United
          States for everyday measurements like height, room dimensions, and construction.
        </p>

        <h3 className="text-xl font-semibold mb-3">Practical Applications</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-muted p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Construction & Architecture</h4>
            <p className="text-sm">Converting building plans between metric and imperial systems</p>
          </div>
          <div className="bg-muted p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Sports & Athletics</h4>
            <p className="text-sm">Track and field events, swimming pool dimensions</p>
          </div>
          <div className="bg-muted p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Travel & Geography</h4>
            <p className="text-sm">Understanding distances and elevations in different countries</p>
          </div>
          <div className="bg-muted p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Science & Engineering</h4>
            <p className="text-sm">Converting measurements in research and technical documentation</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
