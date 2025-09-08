import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Convert Celsius to Kelvin - °C to K Converter",
  description:
    "Convert Celsius to Kelvin instantly. Free online °C to K temperature converter with formula and examples. Accurate scientific temperature conversion.",
  keywords: ["celsius to kelvin", "°C to K", "temperature converter", "scientific temperature", "absolute temperature"],
  openGraph: {
    title: "Celsius to Kelvin Converter - °C to K",
    description: "Convert Celsius to Kelvin quickly and accurately with our free online converter.",
    type: "website",
  },
}

export const revalidate = 0

export default function CelsiusToKelvinPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="p-6 lg:p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-foreground">Convert Celsius to Kelvin</h1>
            <p className="text-xl text-muted-foreground">Scientific °C to K temperature converter</p>
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
                <label className="block text-sm font-medium mb-2">Kelvin (K)</label>
                <input
                  type="number"
                  placeholder="Result in Kelvin"
                  className="w-full p-3 border rounded-lg bg-muted"
                  id="kelvin-output"
                  readOnly
                />
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4 text-center">Formula: K = °C + 273.15</p>
          </div>

          <article className="prose prose-lg max-w-none">
            <h2>Celsius to Kelvin Conversion</h2>
            <p>
              Converting Celsius to Kelvin is essential for scientific calculations, thermodynamics, and physics
              applications where absolute temperature is required.
            </p>

            <h2>Conversion Formula</h2>
            <p>
              <strong>K = °C + 273.15</strong>
            </p>
            <p>For example: 25°C + 273.15 = 298.15 K</p>

            <table className="w-full border-collapse border border-border">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border p-3 text-left">Celsius</th>
                  <th className="border border-border p-3 text-left">Kelvin</th>
                  <th className="border border-border p-3 text-left">Reference Point</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border p-3">-273.15°C</td>
                  <td className="border border-border p-3">0 K</td>
                  <td className="border border-border p-3">Absolute zero</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">0°C</td>
                  <td className="border border-border p-3">273.15 K</td>
                  <td className="border border-border p-3">Water freezes</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">25°C</td>
                  <td className="border border-border p-3">298.15 K</td>
                  <td className="border border-border p-3">Room temperature</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">100°C</td>
                  <td className="border border-border p-3">373.15 K</td>
                  <td className="border border-border p-3">Water boils</td>
                </tr>
              </tbody>
            </table>

            <h2>Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div>
                <h3>What is the Kelvin scale?</h3>
                <p>
                  The Kelvin scale is an absolute temperature scale starting at absolute zero (-273.15°C). It's the base
                  unit of temperature in the International System of Units (SI).
                </p>
              </div>
              <div>
                <h3>Why use Kelvin in scientific calculations?</h3>
                <p>
                  Kelvin is used because it starts at absolute zero, making it proportional to molecular kinetic energy.
                  This is essential for gas laws and thermodynamic equations.
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
            const celsiusInput = document.getElementById('celsius-input');
            const kelvinOutput = document.getElementById('kelvin-output');
            
            celsiusInput.addEventListener('input', function() {
              const celsius = parseFloat(this.value);
              if (!isNaN(celsius)) {
                const kelvin = celsius + 273.15;
                kelvinOutput.value = kelvin.toFixed(2);
              } else {
                kelvinOutput.value = '';
              }
            });
          });
        `,
        }}
      />
    </div>
  )
}
