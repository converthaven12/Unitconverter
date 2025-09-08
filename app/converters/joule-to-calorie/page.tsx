import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Convert Joules to Calories - J to cal Converter",
  description:
    "Convert joules to calories instantly. Free online J to cal converter for energy and nutrition calculations. 1 cal = 4.184 J.",
  keywords: ["joule to calorie", "J to cal", "energy conversion", "nutrition calculations", "thermodynamics"],
}

export const revalidate = 0

export default function JouleToCaloriePage() {
  return (
    <div className="bg-background">
      <main className="p-6 lg:p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-foreground">Convert Joules to Calories</h1>
            <p className="text-xl text-muted-foreground">Energy conversion for science and nutrition</p>
          </div>

          <div className="bg-card rounded-lg border p-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Joules (J)</label>
                <input
                  type="number"
                  placeholder="Enter joules"
                  className="w-full p-3 border rounded-lg"
                  id="joule-input"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Calories (cal)</label>
                <input
                  type="number"
                  placeholder="Result in calories"
                  className="w-full p-3 border rounded-lg bg-muted"
                  id="calorie-output"
                  readOnly
                />
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4 text-center">Formula: cal = J ÷ 4.184</p>
          </div>

          <article className="prose prose-lg max-w-none">
            <h2>Understanding Joule to Calorie Conversion</h2>
            <p>
              Joules are the SI unit of energy, while calories are commonly used in nutrition and chemistry for
              measuring energy content.
            </p>

            <h2>Conversion Formula</h2>
            <p>
              <strong>Calories = Joules ÷ 4.184</strong>
            </p>
            <p>For example: 1000 J ÷ 4.184 = 239.0 cal</p>

            <table className="w-full border-collapse border border-border">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border p-3 text-left">Joules</th>
                  <th className="border border-border p-3 text-left">Calories</th>
                  <th className="border border-border p-3 text-left">Reference</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border p-3">4.184 J</td>
                  <td className="border border-border p-3">1 cal</td>
                  <td className="border border-border p-3">Definition</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">1000 J</td>
                  <td className="border border-border p-3">239 cal</td>
                  <td className="border border-border p-3">Small snack</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">4184 J</td>
                  <td className="border border-border p-3">1000 cal</td>
                  <td className="border border-border p-3">1 kcal (food calorie)</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">8368 J</td>
                  <td className="border border-border p-3">2000 cal</td>
                  <td className="border border-border p-3">2 kcal</td>
                </tr>
              </tbody>
            </table>

            <h2>Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div>
                <h3>What's the difference between calories and Calories?</h3>
                <p>
                  Small "c" calories are used in chemistry, while capital "C" Calories (kilocalories) are used in
                  nutrition and equal 1000 small calories.
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
          const jouleInput = document.getElementById('joule-input');
          const calorieOutput = document.getElementById('calorie-output');
          
          jouleInput.addEventListener('input', function() {
            const joules = parseFloat(this.value);
            if (!isNaN(joules)) {
              const calories = joules / 4.184;
              calorieOutput.value = calories.toFixed(3);
            } else {
              calorieOutput.value = '';
            }
          });
        });
        `,
        }}
      />
    </div>
  )
}
