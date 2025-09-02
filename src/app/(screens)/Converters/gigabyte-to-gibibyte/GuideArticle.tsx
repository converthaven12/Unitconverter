import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function GuideArticle() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Complete Guide: Gigabyte to Gibibyte Conversion</CardTitle>
      </CardHeader>
      <CardContent className="prose max-w-none">
        <h2 className="text-xl font-semibold mb-4">Understanding Gigabytes and Gibibytes</h2>
        <p className="mb-4">
          A gigabyte (GB) is a decimal unit equal to 1,000,000,000 bytes (10³). A gibibyte (GiB) is a binary unit equal
          to 1,073,741,824 bytes (2³⁰). This difference causes confusion in storage capacity reporting.
        </p>

        <h2 className="text-xl font-semibold mb-4">Conversion Formula</h2>
        <div className="bg-muted p-4 rounded-lg mb-4">
          <p>
            <strong>To convert GB to GiB:</strong> GiB = GB × (1000³ ÷ 1024³) ≈ GB × 0.931323
          </p>
          <p>
            <strong>To convert GiB to GB:</strong> GB = GiB × (1024³ ÷ 1000³) ≈ GiB × 1.073742
          </p>
        </div>

        <h2 className="text-xl font-semibold mb-4">Real-Life Examples</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>
            <strong>1TB hard drive:</strong> 1000 GB = 931.3 GiB (why it shows less space)
          </li>
          <li>
            <strong>8GB RAM:</strong> Actually 8 GiB = 8.59 GB in decimal
          </li>
          <li>
            <strong>500GB SSD:</strong> Shows as 465.7 GiB in operating system
          </li>
          <li>
            <strong>32GB USB drive:</strong> Available space is about 29.8 GiB
          </li>
        </ul>

        <h2 className="text-xl font-semibold mb-4">Binary vs Decimal Units</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse border border-border">
            <thead>
              <tr className="bg-muted">
                <th className="border border-border p-2 text-left">Decimal (SI)</th>
                <th className="border border-border p-2 text-left">Binary (IEC)</th>
                <th className="border border-border p-2 text-left">Bytes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border p-2">Kilobyte (KB)</td>
                <td className="border border-border p-2">Kibibyte (KiB)</td>
                <td className="border border-border p-2">1,000 vs 1,024</td>
              </tr>
              <tr>
                <td className="border border-border p-2">Megabyte (MB)</td>
                <td className="border border-border p-2">Mebibyte (MiB)</td>
                <td className="border border-border p-2">1,000² vs 1,024²</td>
              </tr>
              <tr>
                <td className="border border-border p-2">Gigabyte (GB)</td>
                <td className="border border-border p-2">Gibibyte (GiB)</td>
                <td className="border border-border p-2">1,000³ vs 1,024³</td>
              </tr>
              <tr>
                <td className="border border-border p-2">Terabyte (TB)</td>
                <td className="border border-border p-2">Tebibyte (TiB)</td>
                <td className="border border-border p-2">1,000⁴ vs 1,024⁴</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-semibold mb-4">Why the Confusion?</h2>
        <p className="mb-4">
          Storage manufacturers use decimal units (GB) for marketing because the numbers are larger. Operating systems
          traditionally used binary units (GiB) but displayed them as "GB", causing apparent discrepancies in storage
          capacity.
        </p>

        <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">Why does my 1TB drive show less than 1TB?</h3>
            <p>
              Your drive has 1TB (1,000 GB) but your OS shows it in GiB. 1000 GB = 931.3 GiB, which appears as "931 GB"
              in many systems.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Which unit should I use?</h3>
            <p>
              Use GB for storage devices and file sizes (following manufacturer standards). Use GiB for RAM and when
              precision in binary calculations is important.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Are these units standardized?</h3>
            <p>
              Yes. The International Electrotechnical Commission (IEC) standardized binary prefixes (GiB) in 1998 to
              distinguish them from decimal prefixes (GB).
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
