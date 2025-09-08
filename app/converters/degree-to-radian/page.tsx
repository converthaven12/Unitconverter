import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Convert Degrees to Radians - ° to rad Converter",
  description:
    "Convert degrees to radians instantly. Free online ° to rad converter for mathematics and engineering. π radians = 180°.",
  keywords: ["degree to radian", "° to rad", "angle conversion", "mathematics", "trigonometry", "engineering"],
}

export const revalidate = 0

export default function DegreeToRadianPage() {
  return (
    <div className="bg-background">
      <main className="p-6 lg:p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-foreground">Convert Degrees to Radians</h1>
            <p className="text-xl text-muted-foreground">Essential angle converter for mathematics and engineering</p>
          </div>

          <div className="bg-card rounded-lg border p-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Degrees (°)</label>
                <input
                  type="number"
                  placeholder="Enter degrees"
                  className="w-full p-3 border rounded-lg"
                  id="degree-input"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Radians (rad)</label>
                <input
                  type="number"
                  placeholder="Result in radians"
                  className="w-full p-3 border rounded-lg bg-muted"
                  id="radian-output"
                  readOnly
                />
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4 text-center">Formula: rad = ° × π/180</p>
          </div>

          <article className="prose prose-lg max-w-none">
            <h2>Understanding Degree to Radian Conversion</h2>
            <p>
              Degrees and radians are both units for measuring angles. Radians are the standard unit in mathematics and
              physics, while degrees are more intuitive for everyday use.
            </p>

            <h2>Conversion Formula</h2>
            <p>
              <strong>Radians = Degrees × π/180</strong>
            </p>
            <p>For example: 90° × π/180 = π/2 ≈ 1.571 rad</p>

            <table className="w-full border-collapse border border-border">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border p-3 text-left">Degrees</th>
                  <th className="border border-border p-3 text-left">Radians</th>
                  <th className="border border-border p-3 text-left">Reference</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border p-3">0°</td>
                  <td className="border border-border p-3">0 rad</td>
                  <td className="border border-border p-3">No rotation</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">30°</td>
                  <td className="border border-border p-3">π/6 ≈ 0.524 rad</td>
                  <td className="border border-border p-3">Common angle</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">90°</td>
                  <td className="border border-border p-3">π/2 ≈ 1.571 rad</td>
                  <td className="border border-border p-3">Right angle</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">180°</td>
                  <td className="border border-border p-3">π ≈ 3.142 rad</td>
                  <td className="border border-border p-3">Straight line</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">360°</td>
                  <td className="border border-border p-3">2π ≈ 6.283 rad</td>
                  <td className="border border-border p-3">Full circle</td>
                </tr>
              </tbody>
            </table>

            <h2>Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div>
                <h3>Why use radians instead of degrees?</h3>
                <p>
                  Radians make calculus and trigonometric calculations simpler because they're based on the radius of a
                  circle, making many formulas more natural.
                </p>
              </div>
            </div>
          </article>
        </div>
      </main>

      <script
        dangerouslySetInnerHTML={{
          __html: `
        document.addEventListener('DOMContentLoaded', function() {
          const degreeInput = document.getElementById('degree-input');
          const radianOutput = document.getElementById('radian-output');
          
          degreeInput.addEventListener('input', function() {
            const degrees = parseFloat(this.value);
            if (!isNaN(degrees)) {
              const radians = degrees * Math.PI / 180;
              radianOutput.value = radians.toFixed(6);
            } else {
              radianOutput.value = '';
            }
          });
        });
        `,
        }}
      />
    </div>
  )
}
