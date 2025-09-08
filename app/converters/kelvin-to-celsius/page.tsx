import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Convert Kelvin to Celsius - K to °C Converter",
  description:
    "Convert Kelvin to Celsius instantly. Free online K to °C temperature converter with formula and examples. Accurate scientific temperature conversion.",
  keywords: ["kelvin to celsius", "K to °C", "temperature converter", "absolute temperature", "scientific conversion"],
  openGraph: {
    title: "Kelvin to Celsius Converter - K to °C",
    description: "Convert Kelvin to Celsius quickly and accurately with our free online converter.",
    type: "website",
  },
}

export const revalidate = 0

export default function KelvinToCelsiusPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="p-6 lg:p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-foreground">Convert Kelvin to Celsius</h1>
            <p className="text-xl text-muted-foreground">Scientific K to °C temperature converter</p>
          </div>

          <div className="bg-card rounded-lg border p-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Kelvin (K)</label>
                <input
                  type="number"
                  placeholder="Enter temperature in Kelvin"
                  className="w-full p-3 border rounded-lg"
                  id="kelvin-input"
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
            <p className="text-sm text-muted-foreground mt-4 text-center">Formula: °C = K - 273.15</p>
          </div>

          <article className="prose prose-lg max-w-none">
            <h2>Kelvin to Celsius Conversion</h2>
            <p>
              Converting Kelvin to Celsius is useful when translating scientific data to everyday temperature scales or
              when working with laboratory measurements.
            </p>

            <h2>Conversion Formula</h2>
            <p>
              <strong>°C = K - 273.15</strong>
            </p>
            <p>For example: 298.15 K - 273.15 = 25°C</p>

            <table className="w-full border-collapse border border-border">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border p-3 text-left">Kelvin</th>
                  <th className="border border-border p-3 text-left">Celsius</th>
                  <th className="border border-border p-3 text-left">Reference Point</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border p-3">0 K</td>
                  <td className="border border-border p-3">-273.15°C</td>
                  <td className="border border-border p-3">Absolute zero</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">273.15 K</td>
                  <td className="border border-border p-3">0°C</td>
                  <td className="border border-border p-3">Water freezes</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">298.15 K</td>
                  <td className="border border-border p-3">25°C</td>
                  <td className="border border-border p-3">Room temperature</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">373.15 K</td>
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
            const kelvinInput = document.getElementById('kelvin-input');
            const celsiusOutput = document.getElementById('celsius-output');
            
            kelvinInput.addEventListener('input', function() {
              const kelvin = parseFloat(this.value);
              if (!isNaN(kelvin)) {
                const celsius = kelvin - 273.15;
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
