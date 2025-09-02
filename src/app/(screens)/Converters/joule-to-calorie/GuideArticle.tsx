import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function GuideArticle() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Complete Guide: Joule to Calorie Conversion</CardTitle>
      </CardHeader>
      <CardContent className="prose max-w-none">
        <h2 className="text-xl font-semibold mb-4">Understanding Joules and Calories</h2>
        <p className="mb-4">
          The joule (J) is the SI unit of energy, measuring work done or energy transferred. The calorie (cal) is a
          traditional unit of energy, originally defined as the energy needed to raise 1 gram of water by 1°C. One
          calorie equals exactly 4.184 joules.
        </p>

        <h2 className="text-xl font-semibold mb-4">Conversion Formula</h2>
        <div className="bg-muted p-4 rounded-lg mb-4">
          <p>
            <strong>To convert joules to calories:</strong> calories = joules ÷ 4.184
          </p>
          <p>
            <strong>To convert calories to joules:</strong> joules = calories × 4.184
          </p>
        </div>

        <h2 className="text-xl font-semibold mb-4">Types of Calories</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse border border-border">
            <thead>
              <tr className="bg-muted">
                <th className="border border-border p-2 text-left">Type</th>
                <th className="border border-border p-2 text-left">Symbol</th>
                <th className="border border-border p-2 text-left">Joules</th>
                <th className="border border-border p-2 text-left">Usage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border p-2">Small calorie</td>
                <td className="border border-border p-2">cal</td>
                <td className="border border-border p-2">4.184 J</td>
                <td className="border border-border p-2">Scientific</td>
              </tr>
              <tr>
                <td className="border border-border p-2">Large calorie</td>
                <td className="border border-border p-2">Cal, kcal</td>
                <td className="border border-border p-2">4,184 J</td>
                <td className="border border-border p-2">Food energy</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-semibold mb-4">Real-Life Examples</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>
            <strong>Food energy:</strong> 1 food Calorie (kcal) = 4,184 joules
          </li>
          <li>
            <strong>Battery energy:</strong> AA battery stores about 14,400 J (3,440 cal)
          </li>
          <li>
            <strong>Human metabolism:</strong> Basal metabolic rate ≈ 80 J/s (19 cal/s)
          </li>
          <li>
            <strong>Exercise:</strong> 1 hour walking burns ≈ 1,000,000 J (239,000 cal)
          </li>
        </ul>

        <h2 className="text-xl font-semibold mb-4">Energy in Different Contexts</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse border border-border">
            <thead>
              <tr className="bg-muted">
                <th className="border border-border p-2 text-left">Context</th>
                <th className="border border-border p-2 text-left">Joules</th>
                <th className="border border-border p-2 text-left">Calories</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border p-2">Lifting 1kg by 1m</td>
                <td className="border border-border p-2">9.8 J</td>
                <td className="border border-border p-2">2.34 cal</td>
              </tr>
              <tr>
                <td className="border border-border p-2">1 food Calorie</td>
                <td className="border border-border p-2">4,184 J</td>
                <td className="border border-border p-2">1,000 cal</td>
              </tr>
              <tr>
                <td className="border border-border p-2">Lightning bolt</td>
                <td className="border border-border p-2">5×10⁹ J</td>
                <td className="border border-border p-2">1.2×10⁹ cal</td>
              </tr>
              <tr>
                <td className="border border-border p-2">1 kWh electricity</td>
                <td className="border border-border p-2">3.6×10⁶ J</td>
                <td className="border border-border p-2">8.6×10⁵ cal</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">What's the difference between cal and Cal?</h3>
            <p>
              Small "cal" is the gram calorie (4.184 J). Capital "Cal" or "kcal" is the kilocalorie (4,184 J), used for
              food energy. Food labels show kilocalories but call them "Calories."
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Why do scientists prefer joules?</h3>
            <p>
              Joules are part of the International System of Units (SI) and work consistently with other SI units for
              calculations involving energy, work, and power.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">How was the calorie originally defined?</h3>
            <p>
              Originally defined as the energy needed to raise 1 gram of water from 14.5°C to 15.5°C at 1 atmosphere
              pressure. Now it's defined exactly as 4.184 joules.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
