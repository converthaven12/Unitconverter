import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function GuideArticle() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Complete Guide: Degree to Radian Conversion</CardTitle>
      </CardHeader>
      <CardContent className="prose max-w-none">
        <h2 className="text-xl font-semibold mb-4">Understanding Degrees and Radians</h2>
        <p className="mb-4">
          Degrees (°) divide a circle into 360 equal parts, a system dating back to ancient Babylon. Radians (rad) are
          based on the radius of a circle: one radian is the angle subtended by an arc equal in length to the radius.
          There are 2π radians in a full circle.
        </p>

        <h2 className="text-xl font-semibold mb-4">Conversion Formula</h2>
        <div className="bg-muted p-4 rounded-lg mb-4">
          <p>
            <strong>To convert degrees to radians:</strong> radians = degrees × (π ÷ 180)
          </p>
          <p>
            <strong>To convert radians to degrees:</strong> degrees = radians × (180 ÷ π)
          </p>
          <p className="mt-2 text-sm">
            <strong>Why π/180?</strong> Since 360° = 2π radians, 1° = π/180 radians
          </p>
        </div>

        <h2 className="text-xl font-semibold mb-4">Common Angle Conversions</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse border border-border">
            <thead>
              <tr className="bg-muted">
                <th className="border border-border p-2 text-left">Angle Name</th>
                <th className="border border-border p-2 text-left">Degrees</th>
                <th className="border border-border p-2 text-left">Radians</th>
                <th className="border border-border p-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border p-2">Acute</td>
                <td className="border border-border p-2">0° - 90°</td>
                <td className="border border-border p-2">0 - π/2</td>
                <td className="border border-border p-2">Less than right angle</td>
              </tr>
              <tr>
                <td className="border border-border p-2">Right</td>
                <td className="border border-border p-2">90°</td>
                <td className="border border-border p-2">π/2</td>
                <td className="border border-border p-2">Quarter circle</td>
              </tr>
              <tr>
                <td className="border border-border p-2">Obtuse</td>
                <td className="border border-border p-2">90° - 180°</td>
                <td className="border border-border p-2">π/2 - π</td>
                <td className="border border-border p-2">Greater than right angle</td>
              </tr>
              <tr>
                <td className="border border-border p-2">Straight</td>
                <td className="border border-border p-2">180°</td>
                <td className="border border-border p-2">π</td>
                <td className="border border-border p-2">Half circle</td>
              </tr>
              <tr>
                <td className="border border-border p-2">Full</td>
                <td className="border border-border p-2">360°</td>
                <td className="border border-border p-2">2π</td>
                <td className="border border-border p-2">Complete circle</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-semibold mb-4">Real-Life Applications</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>
            <strong>Navigation:</strong> GPS coordinates use degrees, but calculations often use radians
          </li>
          <li>
            <strong>Engineering:</strong> Mechanical rotations and oscillations measured in radians
          </li>
          <li>
            <strong>Physics:</strong> Angular velocity and acceleration use radians per second
          </li>
          <li>
            <strong>Computer graphics:</strong> 3D rotations and animations use radians
          </li>
        </ul>

        <h2 className="text-xl font-semibold mb-4">Why Use Radians?</h2>
        <p className="mb-4">
          Radians are the "natural" unit for angles because they make many mathematical formulas simpler. In calculus,
          derivatives and integrals of trigonometric functions work cleanly with radians. For example, the derivative of
          sin(x) is cos(x) only when x is in radians.
        </p>

        <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">Why are there 360 degrees in a circle?</h3>
            <p>
              The 360-degree system likely comes from ancient Babylonian astronomy, where 360 approximated the days in a
              year and was easily divisible by many numbers.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">When should I use degrees vs radians?</h3>
            <p>
              Use degrees for everyday applications, navigation, and when communicating with non-technical audiences.
              Use radians for mathematical calculations, physics, and programming.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">How do I remember the conversion?</h3>
            <p>
              Remember that π radians = 180°. So to convert degrees to radians, multiply by π/180. To convert radians to
              degrees, multiply by 180/π.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
