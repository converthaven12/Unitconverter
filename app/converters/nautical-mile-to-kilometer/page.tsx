import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Convert Nautical Miles to Kilometers - nmi to km Converter",
  description:
    "Convert nautical miles to kilometers instantly. Free online nmi to km converter for maritime and aviation navigation. 1 nmi = 1.852 km.",
  keywords: ["nautical mile to kilometer", "nmi to km", "maritime navigation", "aviation distance"],
}

export const revalidate = 0

export default function NauticalMileToKilometerPage() {
  return (
    <div className="bg-background">
      <main className="p-6 lg:p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-foreground">Convert Nautical Miles to Kilometers</h1>
            <p className="text-xl text-muted-foreground">Maritime and aviation distance converter</p>
          </div>

          <div className="bg-card rounded-lg border p-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Nautical Miles (nmi)</label>
                <input
                  type="number"
                  placeholder="Enter nautical miles"
                  className="w-full p-3 border rounded-lg"
                  id="nautical-input"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Kilometers (km)</label>
                <input
                  type="number"
                  placeholder="Result in kilometers"
                  className="w-full p-3 border rounded-lg bg-muted"
                  id="kilometer-output"
                  readOnly
                />
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4 text-center">Formula: km = nmi × 1.852</p>
          </div>

          <article className="prose prose-lg max-w-none">
            <h2>Understanding Nautical Mile to Kilometer Conversion</h2>
            <p>
              Nautical miles are used in maritime and aviation navigation, based on the Earth's circumference. One
              nautical mile equals one minute of latitude.
            </p>

            <h2>Conversion Formula</h2>
            <p>
              <strong>Kilometers = Nautical Miles × 1.852</strong>
            </p>
            <p>For example: 10 nmi × 1.852 = 18.52 km</p>

            <table className="w-full border-collapse border border-border">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border p-3 text-left">Nautical Miles</th>
                  <th className="border border-border p-3 text-left">Kilometers</th>
                  <th className="border border-border p-3 text-left">Usage</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border p-3">1 nmi</td>
                  <td className="border border-border p-3">1.852 km</td>
                  <td className="border border-border p-3">Short distance</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">10 nmi</td>
                  <td className="border border-border p-3">18.52 km</td>
                  <td className="border border-border p-3">Coastal navigation</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">100 nmi</td>
                  <td className="border border-border p-3">185.2 km</td>
                  <td className="border border-border p-3">Regional flights</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">1000 nmi</td>
                  <td className="border border-border p-3">1852 km</td>
                  <td className="border border-border p-3">Ocean crossing</td>
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
          const nauticalInput = document.getElementById('nautical-input');
          const kilometerOutput = document.getElementById('kilometer-output');
          
          nauticalInput.addEventListener('input', function() {
            const nauticalMiles = parseFloat(this.value);
            if (!isNaN(nauticalMiles)) {
              const kilometers = nauticalMiles * 1.852;
              kilometerOutput.value = kilometers.toFixed(3);
            } else {
              kilometerOutput.value = '';
            }
          });
        });
        `,
        }}
      />
    </div>
  )
}
