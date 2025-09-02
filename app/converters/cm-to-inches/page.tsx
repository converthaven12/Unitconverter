import type { Metadata } from "next"
import { UnitConverterSidebar } from "@/components/unit-converter-sidebar"

export const metadata: Metadata = {
  title: "Convert Centimeters to Inches - CM to IN Converter",
  description:
    "Convert centimeters to inches instantly. Free online CM to IN converter with conversion formula, examples, and practical applications. 1 cm = 0.394 inches.",
}

export default function CmToInchesPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        <UnitConverterSidebar />
        <main className="flex-1 p-6 lg:p-8">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Header */}
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold text-foreground">Convert Centimeters to Inches</h1>
              <p className="text-xl text-muted-foreground">Quick and accurate CM to IN conversion tool</p>
            </div>

            {/* Converter Tool */}
            <div className="bg-card rounded-lg border p-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Centimeters</label>
                  <input
                    type="number"
                    placeholder="Enter centimeters"
                    className="w-full p-3 border rounded-lg"
                    id="cm-input"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Inches</label>
                  <input
                    type="number"
                    placeholder="Result in inches"
                    className="w-full p-3 border rounded-lg bg-muted"
                    id="inches-output"
                    readOnly
                  />
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-4 text-center">Formula: Inches = Centimeters ÷ 2.54</p>
            </div>

            {/* Article Content */}
            <article className="prose prose-lg max-w-none">
              <h2>Understanding the Centimeter to Inch Conversion</h2>
              <p>
                Converting centimeters to inches is one of the most common unit conversions, especially when dealing
                with international measurements or working between metric and imperial systems.
              </p>
              <p>
                The conversion factor is straightforward: 1 inch equals exactly 2.54 centimeters, which means 1
                centimeter equals approximately 0.393701 inches.
              </p>
              <p>
                This conversion is essential in many fields including construction, fashion, engineering, and everyday
                measurements.
              </p>

              <h2>Conversion Formula and Method</h2>
              <p>To convert centimeters to inches, divide the centimeter value by 2.54:</p>
              <p>
                <strong>Inches = Centimeters ÷ 2.54</strong>
              </p>
              <p>For example: 10 cm ÷ 2.54 = 3.937 inches</p>

              <table className="w-full border-collapse border border-border">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-border p-3 text-left">Centimeters</th>
                    <th className="border border-border p-3 text-left">Inches</th>
                    <th className="border border-border p-3 text-left">Common Use</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border p-3">1 cm</td>
                    <td className="border border-border p-3">0.394 in</td>
                    <td className="border border-border p-3">Small measurements</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">2.54 cm</td>
                    <td className="border border-border p-3">1 in</td>
                    <td className="border border-border p-3">Exact conversion</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">5 cm</td>
                    <td className="border border-border p-3">1.969 in</td>
                    <td className="border border-border p-3">Small objects</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">10 cm</td>
                    <td className="border border-border p-3">3.937 in</td>
                    <td className="border border-border p-3">Hand span</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">30.48 cm</td>
                    <td className="border border-border p-3">12 in (1 ft)</td>
                    <td className="border border-border p-3">Ruler length</td>
                  </tr>
                </tbody>
              </table>

              <h2>Historical Background</h2>
              <p>
                The centimeter is part of the metric system, developed during the French Revolution in the 1790s as a
                universal measurement system.
              </p>
              <p>
                The inch has ancient origins, originally based on the width of a human thumb, and was standardized in
                1959 as exactly 2.54 centimeters.
              </p>
              <p>
                Today, most countries use the metric system, but the United States, United Kingdom, and a few others
                still use imperial measurements in daily life.
              </p>

              <h2>Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div>
                  <h3>How do I convert 15 centimeters to inches?</h3>
                  <p>
                    Divide 15 by 2.54: 15 ÷ 2.54 = 5.906 inches. You can round this to approximately 5.9 inches for most
                    practical purposes.
                  </p>
                </div>
                <div>
                  <h3>Is there a quick mental math trick for cm to inches?</h3>
                  <p>
                    For a rough estimate, divide by 2.5 instead of 2.54. This gives you a close approximation that's
                    easy to calculate mentally. For example, 25 cm ÷ 2.5 = 10 inches (actual: 9.84 inches).
                  </p>
                </div>
                <div>
                  <h3>Why is the conversion factor 2.54 exactly?</h3>
                  <p>
                    In 1959, the international yard and pound agreement defined the inch as exactly 2.54 centimeters.
                    This created a precise relationship between metric and imperial units.
                  </p>
                </div>
              </div>

              <h2>Real-Life Examples</h2>
              <div className="space-y-4">
                <div className="bg-muted p-4 rounded-lg">
                  <h3>Smartphone Screen Size</h3>
                  <p>Converting a 15.2 cm phone screen to inches for US specifications</p>
                  <p>
                    <strong>Calculation:</strong> 15.2 cm ÷ 2.54 = 5.98 inches (approximately 6-inch screen)
                  </p>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <h3>Furniture Measurements</h3>
                  <p>A European table that's 75 cm wide needs to fit through a 30-inch doorway</p>
                  <p>
                    <strong>Calculation:</strong> 75 cm ÷ 2.54 = 29.53 inches (will fit with room to spare)
                  </p>
                </div>
              </div>
            </article>
          </div>
        </main>
      </div>

      <script
        dangerouslySetInnerHTML={{
          __html: `
          document.addEventListener('DOMContentLoaded', function() {
            const cmInput = document.getElementById('cm-input');
            const inchesOutput = document.getElementById('inches-output');
            
            cmInput.addEventListener('input', function() {
              const cm = parseFloat(this.value);
              if (!isNaN(cm)) {
                const inches = cm / 2.54;
                inchesOutput.value = inches.toFixed(4);
              } else {
                inchesOutput.value = '';
              }
            });
          });
        `,
        }}
      />
    </div>
  )
}
