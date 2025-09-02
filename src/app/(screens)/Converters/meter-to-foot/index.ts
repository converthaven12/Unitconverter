export { default as MeterToFootPage } from "./page"
export { default as ClientMeterToFoot } from "./ClientMeterToFoot"
export { default as ConversionTable } from "./ConversionTable"
export { default as GuideArticle } from "./GuideArticle"

export const meterToFootConfig = {
  unitA: {
    name: "Meter",
    symbol: "m",
    type: "length",
  },
  unitB: {
    name: "Foot",
    symbol: "ft",
    type: "length",
  },
  conversionFactor: 3.28084,
  formula: "feet = meters × 3.28084",
}
