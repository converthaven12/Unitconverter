import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Convert mph to km/h - Mile per Hour to Kilometer per Hour Converter",
  description:
    "Convert miles per hour to kilometers per hour instantly. Free online mph to km/h speed converter with formula and examples. Accurate imperial to metric conversion.",
  keywords: [
    "mph to km/h",
    "mile per hour to kilometer per hour",
    "speed converter",
    "imperial to metric",
    "vehicle speed",
  ],
  openGraph: {
    title: "mph to km/h Converter - Mile per Hour to Kilometer per Hour",
    description: "Convert mph to km/h quickly and accurately with our free online converter.",
    type: "website",
  },
}

export const revalidate = 0

export default function MilePerHourToKilometerPerHourPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="p-6 lg:p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-foreground">Convert mph to km/h</h1>
            <p className="text-xl text-muted-foreground">Quick mile per hour to kilometer per hour converter</p>
          </div>

          <div className="bg-card rounded-lg border p-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Miles per Hour (mph)</label>
                <input
                  type="number"
                  placeholder="Enter speed in mph"
                  className="w-full p-3 border rounded-lg"
                  id="mph-input"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Kilometers per Hour (km/h)</label>
                <input
                  type="number"
                  placeholder="Result in km/h"
                  className="w-full p-3 border rounded-lg bg-muted"
                  id="kmh-output"
                  readOnly
                />
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4 text-center">Formula: km/h = mph × 1.60934</p>
          </div>

          <article className="prose prose-lg max-w-none">
            <h2>mph to km/h Conversion</h2>
            <p>
              Converting miles per hour to kilometers per hour is essential for international travel, understanding
              speed limits, and vehicle specifications in different countries.
            </p>

            <h2>Conversion Formula</h2>
            <p>
              <strong>km/h = mph × 1.60934</strong>
            </p>
            <p>For example: 60 mph × 1.60934 = 96.56 km/h</p>

            <table className="w-full border-collapse border border-border">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border p-3 text-left">mph</th>
                  <th className="border border-border p-3 text-left">km/h</th>
                  <th className="border border-border p-3 text-left">Common Use</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border p-3">25 mph</td>
                  <td className="border border-border p-3">40.23 km/h</td>
                  <td className="border border-border p-3">Residential speed</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">55 mph</td>
                  <td className="border border-border p-3">88.51 km/h</td>
                  <td className="border border-border p-3">Highway speed</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">70 mph</td>
                  <td className="border border-border p-3">112.65 km/h</td>
                  <td className="border border-border p-3">Interstate speed</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">80 mph</td>
                  <td className="border border-border p-3">128.75 km/h</td>
                  <td className="border border-border p-3">High-speed limit</td>
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
            const mphInput = document.getElementById('mph-input');
            const kmhOutput = document.getElementById('kmh-output');
            
            mphInput.addEventListener('input', function() {
              const mph = parseFloat(this.value);
              if (!isNaN(mph)) {
                const kmh = mph * 1.60934;
                kmhOutput.value = kmh.toFixed(2);
              } else {
                kmhOutput.value = '';
              }
            });
          });
        `,
        }}
      />
    </div>
  )
}
