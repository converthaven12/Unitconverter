import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Convert Rankine to Celsius - °R to °C Converter",
  description:
    "Convert Rankine to Celsius instantly. Free online °R to °C temperature converter for engineering and scientific applications.",
  keywords: [
    "rankine to celsius",
    "°R to °C",
    "engineering temperature",
    "scientific conversion",
    "absolute temperature",
  ],
}

export const revalidate = 0

export default function RankineToCelsiusPage() {
  return (
    <div className="bg-background">
      <main className="p-6 lg:p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-foreground">Convert Rankine to Celsius</h1>
            <p className="text-xl text-muted-foreground">Engineering temperature scale converter</p>
          </div>

          <div className="bg-card rounded-lg border p-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Rankine (°R)</label>
                <input
                  type="number"
                  placeholder="Enter temperature in Rankine"
                  className="w-full p-3 border rounded-lg"
                  id="rankine-input"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Celsius (°C)</label>
                <input
                  type="number"
                  placeholder="Result in Celsius"
                  className="w-full p-3 border rounded-lg bg-muted"
                  id="celsius-output"
                  readOnly
                />
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4 text-center">Formula: °C = (°R - 491.67) × 5/9</p>
          </div>

          <article className="prose prose-lg max-w-none">
            <h2>Understanding Rankine to Celsius Conversion</h2>
            <p>
              Rankine is an absolute temperature scale used in engineering, particularly in thermodynamics. It uses
              Fahrenheit-sized degrees but starts at absolute zero.
            </p>

            <h2>Conversion Formula</h2>
            <p>
              <strong>°C = (°R - 491.67) × 5/9</strong>
            </p>
            <p>For example: 671.67°R = (671.67 - 491.67) × 5/9 = 100°C</p>

            <table className="w-full border-collapse border border-border">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border p-3 text-left">Rankine</th>
                  <th className="border border-border p-3 text-left">Celsius</th>
                  <th className="border border-border p-3 text-left">Reference</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border p-3">0°R</td>
                  <td className="border border-border p-3">-273.15°C</td>
                  <td className="border border-border p-3">Absolute zero</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">491.67°R</td>
                  <td className="border border-border p-3">0°C</td>
                  <td className="border border-border p-3">Water freezes</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">671.67°R</td>
                  <td className="border border-border p-3">100°C</td>
                  <td className="border border-border p-3">Water boils</td>
                </tr>
              </tbody>
            </table>
          </article>
        </div>
      </main>

      <script
        dangerouslySetInnerHTML={{
          __html: `
        document.addEventListener('DOMContentLoaded', function() {
          const rankineInput = document.getElementById('rankine-input');
          const celsiusOutput = document.getElementById('celsius-output');
          
          rankineInput.addEventListener('input', function() {
            const rankine = parseFloat(this.value);
            if (!isNaN(rankine)) {
              const celsius = (rankine - 491.67) * 5/9;
              celsiusOutput.value = celsius.toFixed(2);
            } else {
              celsiusOutput.value = '';
            }
          });
        });
        `,
        }}
      />
    </div>
  )
}
