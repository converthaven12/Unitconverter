import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Convert Watt to Horsepower - W to hp Power Converter",
  description:
    "Convert watts to horsepower instantly. Free online W to hp power converter with formula and examples. Accurate metric to imperial power conversion.",
  keywords: ["watt to horsepower", "W to hp", "power converter", "metric to imperial", "engine power"],
  openGraph: {
    title: "Watt to Horsepower Converter - W to hp",
    description: "Convert watts to horsepower quickly and accurately with our free online converter.",
    type: "website",
  },
}

export const revalidate = 0

export default function WattToHorsepowerPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="p-6 lg:p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-foreground">Convert Watt to Horsepower</h1>
            <p className="text-xl text-muted-foreground">Quick W to hp power converter</p>
          </div>

          <div className="bg-card rounded-lg border p-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Watts (W)</label>
                <input
                  type="number"
                  placeholder="Enter power in watts"
                  className="w-full p-3 border rounded-lg"
                  id="watt-input"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Horsepower (hp)</label>
                <input
                  type="number"
                  placeholder="Result in horsepower"
                  className="w-full p-3 border rounded-lg bg-muted"
                  id="hp-output"
                  readOnly
                />
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4 text-center">Formula: hp = watts ÷ 745.7</p>
          </div>

          <article className="prose prose-lg max-w-none">
            <h2>Watt to Horsepower Conversion</h2>
            <p>
              Converting watts to horsepower is essential for understanding engine specifications, electric motor
              ratings, and power tool capabilities.
            </p>

            <h2>Conversion Formula</h2>
            <p>
              <strong>hp = watts ÷ 745.7</strong>
            </p>
            <p>For example: 1500 watts ÷ 745.7 = 2.012 hp</p>

            <table className="w-full border-collapse border border-border">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border p-3 text-left">Watts</th>
                  <th className="border border-border p-3 text-left">Horsepower</th>
                  <th className="border border-border p-3 text-left">Common Use</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border p-3">746 W</td>
                  <td className="border border-border p-3">1.00 hp</td>
                  <td className="border border-border p-3">Exact conversion</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">1500 W</td>
                  <td className="border border-border p-3">2.01 hp</td>
                  <td className="border border-border p-3">Small motor</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">3730 W</td>
                  <td className="border border-border p-3">5.00 hp</td>
                  <td className="border border-border p-3">Power tool</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">74570 W</td>
                  <td className="border border-border p-3">100.0 hp</td>
                  <td className="border border-border p-3">Car engine</td>
                </tr>
              </tbody>
            </table>

            <h2>Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div>
                <h3>What is the difference between mechanical and electrical horsepower?</h3>
                <p>
                  Mechanical horsepower (745.7 W) is slightly different from electrical horsepower (746 W). This
                  converter uses mechanical horsepower, which is more commonly used.
                </p>
              </div>
              <div>
                <h3>Why convert watts to horsepower?</h3>
                <p>
                  Horsepower is still widely used in automotive and industrial applications, especially in the US, while
                  watts are the standard SI unit for power.
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
            const wattInput = document.getElementById('watt-input');
            const hpOutput = document.getElementById('hp-output');
            
            wattInput.addEventListener('input', function() {
              const watts = parseFloat(this.value);
              if (!isNaN(watts)) {
                const hp = watts / 745.7;
                hpOutput.value = hp.toFixed(4);
              } else {
                hpOutput.value = '';
              }
            });
          });
        `,
        }}
      />
    </div>
  )
}
