import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Convert Gigabytes to Gibibytes - GB to GiB Converter",
  description:
    "Convert gigabytes to gibibytes instantly. Free online GB to GiB converter for data storage calculations. 1 GB = 0.931 GiB.",
  keywords: ["gigabyte to gibibyte", "GB to GiB", "data storage", "binary vs decimal", "computer storage"],
}

export const revalidate = 0

export default function GigabyteToGibibytePage() {
  return (
    <div className="bg-background">
      <main className="p-6 lg:p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-foreground">Convert Gigabytes to Gibibytes</h1>
            <p className="text-xl text-muted-foreground">Decimal to binary data storage converter</p>
          </div>

          <div className="bg-card rounded-lg border p-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Gigabytes (GB)</label>
                <input
                  type="number"
                  placeholder="Enter gigabytes"
                  className="w-full p-3 border rounded-lg"
                  id="gigabyte-input"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Gibibytes (GiB)</label>
                <input
                  type="number"
                  placeholder="Result in gibibytes"
                  className="w-full p-3 border rounded-lg bg-muted"
                  id="gibibyte-output"
                  readOnly
                />
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4 text-center">
              Formula: GiB = GB × 1,000,000,000 ÷ 1,073,741,824
            </p>
          </div>

          <article className="prose prose-lg max-w-none">
            <h2>Understanding Gigabyte to Gibibyte Conversion</h2>
            <p>
              Gigabytes (GB) use decimal prefixes (1000³), while gibibytes (GiB) use binary prefixes (1024³). This
              difference explains why storage devices show less capacity than advertised.
            </p>

            <h2>Conversion Formula</h2>
            <p>
              <strong>Gibibytes = Gigabytes × 0.9313</strong>
            </p>
            <p>For example: 500 GB × 0.9313 = 465.66 GiB</p>

            <table className="w-full border-collapse border border-border">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border p-3 text-left">Gigabytes</th>
                  <th className="border border-border p-3 text-left">Gibibytes</th>
                  <th className="border border-border p-3 text-left">Common Use</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border p-3">1 GB</td>
                  <td className="border border-border p-3">0.93 GiB</td>
                  <td className="border border-border p-3">Small file</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">100 GB</td>
                  <td className="border border-border p-3">93.13 GiB</td>
                  <td className="border border-border p-3">Game download</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">500 GB</td>
                  <td className="border border-border p-3">465.66 GiB</td>
                  <td className="border border-border p-3">SSD drive</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">1000 GB</td>
                  <td className="border border-border p-3">931.32 GiB</td>
                  <td className="border border-border p-3">1TB drive</td>
                </tr>
              </tbody>
            </table>

            <h2>Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div>
                <h3>Why do storage devices show less space than advertised?</h3>
                <p>
                  Manufacturers use decimal gigabytes (1000³ bytes) while operating systems use binary gibibytes (1024³
                  bytes), creating a ~7% difference.
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
          const gigabyteInput = document.getElementById('gigabyte-input');
          const gibibyteOutput = document.getElementById('gibibyte-output');
          
          gigabyteInput.addEventListener('input', function() {
            const gigabytes = parseFloat(this.value);
            if (!isNaN(gigabytes)) {
              const gibibytes = gigabytes * 1000000000 / 1073741824;
              gibibyteOutput.value = gibibytes.toFixed(4);
            } else {
              gibibyteOutput.value = '';
            }
          });
        });
        `,
        }}
      />
    </div>
  )
}
