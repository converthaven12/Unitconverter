import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Convert Stone to Pounds - st to lb Converter",
  description:
    "Convert stone to pounds instantly. Free online st to lb converter for UK weight measurements. 1 stone = 14 pounds.",
  keywords: ["stone to pound", "st to lb", "UK weight", "British measurements", "body weight conversion"],
}

export const revalidate = 0

export default function StoneToPoundPage() {
  return (
    <div className="bg-background">
      <main className="p-6 lg:p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-foreground">Convert Stone to Pounds</h1>
            <p className="text-xl text-muted-foreground">UK weight measurement converter</p>
          </div>

          <div className="bg-card rounded-lg border p-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Stone (st)</label>
                <input
                  type="number"
                  placeholder="Enter stone"
                  className="w-full p-3 border rounded-lg"
                  id="stone-input"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Pounds (lb)</label>
                <input
                  type="number"
                  placeholder="Result in pounds"
                  className="w-full p-3 border rounded-lg bg-muted"
                  id="pound-output"
                  readOnly
                />
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4 text-center">Formula: lb = st × 14</p>
          </div>

          <article className="prose prose-lg max-w-none">
            <h2>Understanding Stone to Pound Conversion</h2>
            <p>
              Stone is a traditional British unit of weight commonly used for measuring body weight in the UK and
              Ireland.
            </p>

            <h2>Conversion Formula</h2>
            <p>
              <strong>Pounds = Stone × 14</strong>
            </p>
            <p>For example: 10 st × 14 = 140 lb</p>

            <table className="w-full border-collapse border border-border">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border p-3 text-left">Stone</th>
                  <th className="border border-border p-3 text-left">Pounds</th>
                  <th className="border border-border p-3 text-left">Reference</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border p-3">8 st</td>
                  <td className="border border-border p-3">112 lb</td>
                  <td className="border border-border p-3">Light adult</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">10 st</td>
                  <td className="border border-border p-3">140 lb</td>
                  <td className="border border-border p-3">Average adult</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">12 st</td>
                  <td className="border border-border p-3">168 lb</td>
                  <td className="border border-border p-3">Heavy adult</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">15 st</td>
                  <td className="border border-border p-3">210 lb</td>
                  <td className="border border-border p-3">Large adult</td>
                </tr>
              </tbody>
            </table>

            <h2>Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div>
                <h3>Why do the British use stone for weight?</h3>
                <p>
                  Stone has been used in Britain for centuries as a traditional unit, particularly for measuring people
                  and livestock.
                </p>
              </div>
              <div>
                <h3>How do I convert my weight from stone to pounds?</h3>
                <p>
                  Multiply your weight in stone by 14. For example, if you weigh 11 stone, that's 11 × 14 = 154 pounds.
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
          const stoneInput = document.getElementById('stone-input');
          const poundOutput = document.getElementById('pound-output');
          
          stoneInput.addEventListener('input', function() {
            const stone = parseFloat(this.value);
            if (!isNaN(stone)) {
              const pounds = stone * 14;
              poundOutput.value = pounds.toFixed(2);
            } else {
              poundOutput.value = '';
            }
          });
        });
        `,
        }}
      />
    </div>
  )
}
