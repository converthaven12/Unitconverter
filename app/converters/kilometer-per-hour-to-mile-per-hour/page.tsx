import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Convert km/h to mph - Kilometer per Hour to Mile per Hour Converter",
  description:
    "Convert kilometers per hour to miles per hour instantly. Free online km/h to mph speed converter with formula and examples. Accurate metric to imperial conversion.",
  keywords: [
    "km/h to mph",
    "kilometer per hour to mile per hour",
    "speed converter",
    "metric to imperial",
    "vehicle speed",
  ],
  openGraph: {
    title: "km/h to mph Converter - Kilometer per Hour to Mile per Hour",
    description: "Convert km/h to mph quickly and accurately with our free online converter.",
    type: "website",
  },
}

export const revalidate = 0

export default function KilometerPerHourToMilePerHourPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="p-6 lg:p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-foreground">Convert km/h to mph</h1>
            <p className="text-xl text-muted-foreground">Quick kilometer per hour to mile per hour converter</p>
          </div>

          <div className="bg-card rounded-lg border p-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Kilometers per Hour (km/h)</label>
                <input
                  type="number"
                  placeholder="Enter speed in km/h"
                  className="w-full p-3 border rounded-lg"
                  id="kmh-input"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Miles per Hour (mph)</label>
                <input
                  type="number"
                  placeholder="Result in mph"
                  className="w-full p-3 border rounded-lg bg-muted"
                  id="mph-output"
                  readOnly
                />
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4 text-center">Formula: mph = km/h × 0.621371</p>
          </div>

          <article className="prose prose-lg max-w-none">
            <h2>km/h to mph Conversion</h2>
            <p>
              Converting kilometers per hour to miles per hour is essential for international travel, vehicle
              specifications, and understanding speed limits in different countries.
            </p>

            <h2>Conversion Formula</h2>
            <p>
              <strong>mph = km/h × 0.621371</strong>
            </p>
            <p>For example: 100 km/h × 0.621371 = 62.137 mph</p>

            <table className="w-full border-collapse border border-border">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border p-3 text-left">km/h</th>
                  <th className="border border-border p-3 text-left">mph</th>
                  <th className="border border-border p-3 text-left">Common Use</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border p-3">50 km/h</td>
                  <td className="border border-border p-3">31.07 mph</td>
                  <td className="border border-border p-3">City speed limit</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">80 km/h</td>
                  <td className="border border-border p-3">49.71 mph</td>
                  <td className="border border-border p-3">Rural road</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">100 km/h</td>
                  <td className="border border-border p-3">62.14 mph</td>
                  <td className="border border-border p-3">Highway speed</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">130 km/h</td>
                  <td className="border border-border p-3">80.78 mph</td>
                  <td className="border border-border p-3">Autobahn speed</td>
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
            const kmhInput = document.getElementById('kmh-input');
            const mphOutput = document.getElementById('mph-output');
            
            kmhInput.addEventListener('input', function() {
              const kmh = parseFloat(this.value);
              if (!isNaN(kmh)) {
                const mph = kmh * 0.621371;
                mphOutput.value = mph.toFixed(2);
              } else {
                mphOutput.value = '';
              }
            });
          });
        `,
        }}
      />
    </div>
  )
}
