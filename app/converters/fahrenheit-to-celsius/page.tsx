import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Convert Fahrenheit to Celsius - °F to °C Converter",
  description:
    "Convert Fahrenheit to Celsius instantly. Free online °F to °C temperature converter with formula and examples. Accurate temperature conversion.",
}

export const revalidate = 0

export default function FahrenheitToCelsiusPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="p-6 lg:p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-foreground">Convert Fahrenheit to Celsius</h1>
            <p className="text-xl text-muted-foreground">Quick and accurate °F to °C temperature converter</p>
          </div>

          <div className="bg-card rounded-lg border p-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Fahrenheit (°F)</label>
                <input
                  type="number"
                  placeholder="Enter temperature in Fahrenheit"
                  className="w-full p-3 border rounded-lg"
                  id="fahrenheit-input"
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
            <p className="text-sm text-muted-foreground mt-4 text-center">Formula: °C = (°F - 32) × 5/9</p>
          </div>

          <article className="prose prose-lg max-w-none">
            <h2>Understanding Fahrenheit to Celsius Conversion</h2>
            <p>
              Converting Fahrenheit to Celsius is essential for international temperature communication, scientific
              work, and weather understanding. The Fahrenheit scale sets water's freezing point at 32°F and boiling
              point at 212°F.
            </p>

            <h2>Conversion Formula</h2>
            <p>
              <strong>°C = (°F - 32) × 5/9</strong>
            </p>

            <table className="w-full border-collapse border border-border">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border p-3 text-left">Fahrenheit</th>
                  <th className="border border-border p-3 text-left">Celsius</th>
                  <th className="border border-border p-3 text-left">Reference</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border p-3">32°F</td>
                  <td className="border border-border p-3">0°C</td>
                  <td className="border border-border p-3">Water freezes</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">68°F</td>
                  <td className="border border-border p-3">20°C</td>
                  <td className="border border-border p-3">Room temperature</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">98.6°F</td>
                  <td className="border border-border p-3">37°C</td>
                  <td className="border border-border p-3">Body temperature</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">212°F</td>
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
            const fahrenheitInput = document.getElementById('fahrenheit-input');
            const celsiusOutput = document.getElementById('celsius-output');
            
            fahrenheitInput.addEventListener('input', function() {
              const fahrenheit = parseFloat(this.value);
              if (!isNaN(fahrenheit)) {
                const celsius = (fahrenheit - 32) * 5/9;
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
