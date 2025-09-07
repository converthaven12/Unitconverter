import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Convert Celsius to Fahrenheit - °C to °F Converter",
  description:
    "Convert Celsius to Fahrenheit instantly. Free online °C to °F temperature converter with formula and examples. Accurate temperature conversion.",
}

export const revalidate = 0

export default function CelsiusToFahrenheitPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="p-6 lg:p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-foreground">Convert Celsius to Fahrenheit</h1>
            <p className="text-xl text-muted-foreground">Quick and accurate °C to °F temperature converter</p>
          </div>

          <div className="bg-card rounded-lg border p-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Celsius (°C)</label>
                <input
                  type="number"
                  placeholder="Enter temperature in Celsius"
                  className="w-full p-3 border rounded-lg"
                  id="celsius-input"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Fahrenheit (°F)</label>
                <input
                  type="number"
                  placeholder="Result in Fahrenheit"
                  className="w-full p-3 border rounded-lg bg-muted"
                  id="fahrenheit-output"
                  readOnly
                />
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4 text-center">Formula: °F = (°C × 9/5) + 32</p>
          </div>

          <article className="prose prose-lg max-w-none">
            <h2>Understanding Celsius to Fahrenheit Conversion</h2>
            <p>
              Converting between Celsius and Fahrenheit is essential for international communication, weather reports,
              cooking, and scientific applications.
            </p>
            <p>
              The Celsius scale sets water's freezing point at 0°C and boiling point at 100°C, while Fahrenheit sets
              them at 32°F and 212°F respectively.
            </p>

            <h2>Conversion Formula</h2>
            <p>
              <strong>°F = (°C × 9/5) + 32</strong>
            </p>
            <p>For example: 25°C × 9/5 + 32 = 77°F</p>

            <table className="w-full border-collapse border border-border">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border p-3 text-left">Celsius</th>
                  <th className="border border-border p-3 text-left">Fahrenheit</th>
                  <th className="border border-border p-3 text-left">Reference</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border p-3">0°C</td>
                  <td className="border border-border p-3">32°F</td>
                  <td className="border border-border p-3">Water freezes</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">20°C</td>
                  <td className="border border-border p-3">68°F</td>
                  <td className="border border-border p-3">Room temperature</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">37°C</td>
                  <td className="border border-border p-3">98.6°F</td>
                  <td className="border border-border p-3">Body temperature</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">100°C</td>
                  <td className="border border-border p-3">212°F</td>
                  <td className="border border-border p-3">Water boils</td>
                </tr>
              </tbody>
            </table>

            <h2>Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div>
                <h3>How do I convert 30°C to Fahrenheit?</h3>
                <p>Use the formula: (30 × 9/5) + 32 = 54 + 32 = 86°F</p>
              </div>
              <div>
                <h3>What's a quick mental conversion trick?</h3>
                <p>Double the Celsius temperature, subtract 10%, then add 32. For 20°C: (20×2) - 4 + 32 = 68°F</p>
              </div>
            </div>
          </article>
        </div>
      </main>

      <script
        dangerouslySetInnerHTML={{
          __html: `
          document.addEventListener('DOMContentLoaded', function() {
            const celsiusInput = document.getElementById('celsius-input');
            const fahrenheitOutput = document.getElementById('fahrenheit-output');
            
            celsiusInput.addEventListener('input', function() {
              const celsius = parseFloat(this.value);
              if (!isNaN(celsius)) {
                const fahrenheit = (celsius * 9/5) + 32;
                fahrenheitOutput.value = fahrenheit.toFixed(2);
              } else {
                fahrenheitOutput.value = '';
              }
            });
          });
        `,
        }}
      />
    </div>
  )
}
