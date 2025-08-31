export interface SerializableUnit {
  id: string
  name: string
  symbol: string
  category: string
}

export interface SerializableConverter {
  fromUnit: SerializableUnit
  toUnit: SerializableUnit
  slug: string
  label: string
}
