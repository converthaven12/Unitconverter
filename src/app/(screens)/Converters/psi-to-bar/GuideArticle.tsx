import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function GuideArticle() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Complete Guide: PSI to Bar Conversion</CardTitle>
      </CardHeader>
      <CardContent className="prose max-w-none">
        <h2 className="text-xl font-semibold mb-4">Understanding PSI and Bar</h2>
        <p className="mb-4">
          PSI (pounds per square inch) is an imperial unit of pressure commonly used in the United States. Bar is a
          metric unit of pressure approximately equal to atmospheric pressure at sea level (14.5038 psi = 1 bar).
        </p>

        <h2 className="text-xl font-semibold mb-4">Conversion Formula</h2>
        <div className="bg-muted p-4 rounded-lg mb-4">
          <p>
            <strong>To convert PSI to bar:</strong> bar = psi ÷ 14.5038
          </p>
          <p>
            <strong>To convert bar to PSI:</strong> psi = bar × 14.5038
          </p>
        </div>

        <h2 className="text-xl font-semibold mb-4">Real-Life Examples</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>
            <strong>Car tires:</strong> 32 psi equals approximately 2.2 bar
          </li>
          <li>
            <strong>Bicycle tires:</strong> 80 psi equals approximately 5.5 bar
          </li>
          <li>
            <strong>Scuba tanks:</strong> 3000 psi equals approximately 207 bar
          </li>
          <li>
            <strong>Espresso machines:</strong> 130 psi equals approximately 9 bar
          </li>
        </ul>

        <h2 className="text-xl font-semibold mb-4">Common Pressure Applications</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse border border-border">
            <thead>
              <tr className="bg-muted">
                <th className="border border-border p-2 text-left">Application</th>
                <th className="border border-border p-2 text-left">PSI</th>
                <th className="border border-border p-2 text-left">Bar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border p-2">Atmospheric Pressure</td>
                <td className="border border-border p-2">14.7 psi</td>
                <td className="border border-border p-2">1.01 bar</td>
              </tr>
              <tr>
                <td className="border border-border p-2">Car Tire</td>
                <td className="border border-border p-2">32 psi</td>
                <td className="border border-border p-2">2.2 bar</td>
              </tr>
              <tr>
                <td className="border border-border p-2">Pressure Washer</td>
                <td className="border border-border p-2">2000 psi</td>
                <td className="border border-border p-2">138 bar</td>
              </tr>
              <tr>
                <td className="border border-border p-2">Hydraulic System</td>
                <td className="border border-border p-2">3000 psi</td>
                <td className="border border-border p-2">207 bar</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">What does PSI stand for?</h3>
            <p>PSI stands for "pounds per square inch," measuring force per unit area.</p>
          </div>
          <div>
            <h3 className="font-semibold">Is bar the same as atmospheric pressure?</h3>
            <p>
              Almost. One bar (100,000 Pa) is slightly less than atmospheric pressure (101,325 Pa or 14.7 psi), but it's
              close enough for most practical purposes.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Which unit is more commonly used worldwide?</h3>
            <p>
              Bar is more commonly used internationally, especially in scientific and industrial applications, while PSI
              is primarily used in the United States.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
