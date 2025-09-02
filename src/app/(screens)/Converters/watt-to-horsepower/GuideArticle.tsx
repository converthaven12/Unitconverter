import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function GuideArticle() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Complete Guide: Watt to Horsepower Conversion</CardTitle>
      </CardHeader>
      <CardContent className="prose max-w-none">
        <h2 className="text-xl font-semibold mb-4">Understanding Watts and Horsepower</h2>
        <p className="mb-4">
          The watt (W) is the SI unit of power, measuring energy transfer per unit time. Horsepower (hp) is an imperial
          unit of power originally defined by James Watt to compare steam engines with draft horses. One mechanical
          horsepower equals 745.7 watts.
        </p>

        <h2 className="text-xl font-semibold mb-4">Conversion Formula</h2>
        <div className="bg-muted p-4 rounded-lg mb-4">
          <p>
            <strong>To convert watts to horsepower:</strong> hp = watts ÷ 745.7
          </p>
          <p>
            <strong>To convert horsepower to watts:</strong> watts = hp × 745.7
          </p>
        </div>

        <h2 className="text-xl font-semibold mb-4">Real-Life Examples</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>
            <strong>Small car engine:</strong> 100 hp equals 74,570 watts (74.6 kW)
          </li>
          <li>
            <strong>Household microwave:</strong> 1000 watts equals 1.34 hp
          </li>
          <li>
            <strong>Electric drill:</strong> 500 watts equals 0.67 hp
          </li>
          <li>
            <strong>Sports car engine:</strong> 400 hp equals 298,280 watts (298 kW)
          </li>
        </ul>

        <h2 className="text-xl font-semibold mb-4">Types of Horsepower</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse border border-border">
            <thead>
              <tr className="bg-muted">
                <th className="border border-border p-2 text-left">Type</th>
                <th className="border border-border p-2 text-left">Watts</th>
                <th className="border border-border p-2 text-left">Usage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border p-2">Mechanical HP</td>
                <td className="border border-border p-2">745.7 W</td>
                <td className="border border-border p-2">US automotive</td>
              </tr>
              <tr>
                <td className="border border-border p-2">Metric HP (PS)</td>
                <td className="border border-border p-2">735.5 W</td>
                <td className="border border-border p-2">European automotive</td>
              </tr>
              <tr>
                <td className="border border-border p-2">Electrical HP</td>
                <td className="border border-border p-2">746 W</td>
                <td className="border border-border p-2">Electric motors</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-semibold mb-4">Power Applications</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse border border-border">
            <thead>
              <tr className="bg-muted">
                <th className="border border-border p-2 text-left">Device</th>
                <th className="border border-border p-2 text-left">Watts</th>
                <th className="border border-border p-2 text-left">Horsepower</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border p-2">LED Light Bulb</td>
                <td className="border border-border p-2">10 W</td>
                <td className="border border-border p-2">0.013 hp</td>
              </tr>
              <tr>
                <td className="border border-border p-2">Hair Dryer</td>
                <td className="border border-border p-2">1500 W</td>
                <td className="border border-border p-2">2.0 hp</td>
              </tr>
              <tr>
                <td className="border border-border p-2">Lawn Mower</td>
                <td className="border border-border p-2">3728 W</td>
                <td className="border border-border p-2">5.0 hp</td>
              </tr>
              <tr>
                <td className="border border-border p-2">Small Car</td>
                <td className="border border-border p-2">74,570 W</td>
                <td className="border border-border p-2">100 hp</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">Why was horsepower invented?</h3>
            <p>
              James Watt created the horsepower unit in the 1780s to market his steam engines by comparing their power
              to the work output of draft horses, which people could easily understand.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Which unit is more accurate?</h3>
            <p>
              Both are equally accurate for measuring power. Watts are preferred in scientific contexts and
              international standards, while horsepower remains popular in automotive applications.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">How much power does a horse actually produce?</h3>
            <p>
              A horse can produce about 15 horsepower in short bursts, but only sustain about 1 horsepower over long
              periods. Watt's definition was based on sustained work capacity.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
