// Currency Exchange Rate API Integration
// Using a free API service for real-time exchange rates

export interface ExchangeRates {
  [currency: string]: number
}

export interface CurrencyApiResponse {
  base: string
  rates: ExchangeRates
  timestamp: number
}

// Cache for exchange rates (valid for 1 hour)
let ratesCache: CurrencyApiResponse | null = null
let cacheTimestamp = 0
const CACHE_DURATION = 60 * 60 * 1000 // 1 hour in milliseconds

// Fallback exchange rates (approximate, for offline use)
const fallbackRates: ExchangeRates = {
  USD: 1.0, // Base currency
  EUR: 0.85, // Euro
  GBP: 0.73, // British Pound
  JPY: 110.0, // Japanese Yen
  CAD: 1.25, // Canadian Dollar
  AUD: 1.35, // Australian Dollar
  CHF: 0.92, // Swiss Franc
  CNY: 6.45, // Chinese Yuan
  INR: 74.5, // Indian Rupee
  KRW: 1180.0, // South Korean Won
  BRL: 5.2, // Brazilian Real
  RUB: 73.5, // Russian Ruble
  MXN: 20.1, // Mexican Peso
  SGD: 1.35, // Singapore Dollar
  HKD: 7.8, // Hong Kong Dollar
  NOK: 8.6, // Norwegian Krone
  SEK: 8.9, // Swedish Krona
  DKK: 6.4, // Danish Krone
  PLN: 3.9, // Polish Zloty
  CZK: 22.0, // Czech Koruna
  HUF: 295.0, // Hungarian Forint
  RON: 4.2, // Romanian Leu
  BGN: 1.66, // Bulgarian Lev
  HRK: 6.4, // Croatian Kuna
  TRY: 8.5, // Turkish Lira
  ILS: 3.3, // Israeli Shekel
  AED: 3.67, // UAE Dirham
  SAR: 3.75, // Saudi Riyal
  QAR: 3.64, // Qatari Riyal
  KWD: 0.3, // Kuwaiti Dinar
  BHD: 0.38, // Bahraini Dinar
  OMR: 0.38, // Omani Rial
  JOD: 0.71, // Jordanian Dinar
  LBP: 1507.0, // Lebanese Pound
  EGP: 15.7, // Egyptian Pound
  MAD: 9.0, // Moroccan Dirham
  TND: 2.8, // Tunisian Dinar
  DZD: 135.0, // Algerian Dinar
  ZAR: 14.8, // South African Rand
  NGN: 411.0, // Nigerian Naira
  KES: 108.0, // Kenyan Shilling
  GHS: 6.1, // Ghanaian Cedi
  UGX: 3550.0, // Ugandan Shilling
  TZS: 2320.0, // Tanzanian Shilling
  ETB: 44.0, // Ethiopian Birr
  ZMW: 16.8, // Zambian Kwacha
  BWP: 11.2, // Botswana Pula
  MUR: 40.5, // Mauritian Rupee
  SCR: 13.4, // Seychellois Rupee
  MZN: 63.8, // Mozambican Metical
  AOA: 555.0, // Angolan Kwanza
  XOF: 558.0, // West African CFA Franc
  XAF: 558.0, // Central African CFA Franc
  THB: 33.2, // Thai Baht
  VND: 23100.0, // Vietnamese Dong
  IDR: 14250.0, // Indonesian Rupiah
  MYR: 4.15, // Malaysian Ringgit
  PHP: 50.8, // Philippine Peso
  TWD: 28.0, // Taiwan Dollar
  NZD: 1.42, // New Zealand Dollar
  FJD: 2.1, // Fijian Dollar
  PGK: 3.5, // Papua New Guinea Kina
  WST: 2.6, // Samoan Tala
  TOP: 2.3, // Tongan Pa'anga
  VUV: 113.0, // Vanuatu Vatu
  SBD: 8.1, // Solomon Islands Dollar
  NCL: 107.0, // New Caledonian Franc
  PYG: 6850.0, // Paraguayan Guarani
  UYU: 43.8, // Uruguayan Peso
  CLP: 795.0, // Chilean Peso
  COP: 3850.0, // Colombian Peso
  PEN: 4.0, // Peruvian Sol
  BOB: 6.9, // Bolivian Boliviano
  VES: 4.2, // Venezuelan Bolívar
  GYD: 209.0, // Guyanese Dollar
  SRD: 14.3, // Surinamese Dollar
  TTD: 6.8, // Trinidad and Tobago Dollar
  JMD: 154.0, // Jamaican Dollar
  BBD: 2.0, // Barbadian Dollar
  BSD: 1.0, // Bahamian Dollar
  BZD: 2.0, // Belize Dollar
  XCD: 2.7, // East Caribbean Dollar
  CUP: 24.0, // Cuban Peso
  DOP: 56.8, // Dominican Peso
  GTQ: 7.7, // Guatemalan Quetzal
  HNL: 24.6, // Honduran Lempira
  NIO: 35.4, // Nicaraguan Córdoba
  CRC: 628.0, // Costa Rican Colón
  PAB: 1.0, // Panamanian Balboa
  ISK: 129.0, // Icelandic Króna
  ALL: 104.0, // Albanian Lek
  RSD: 100.0, // Serbian Dinar
  BAM: 1.66, // Bosnia-Herzegovina Convertible Mark
  MKD: 52.4, // Macedonian Denar
  MDL: 17.8, // Moldovan Leu
  UAH: 27.0, // Ukrainian Hryvnia
  BYN: 2.6, // Belarusian Ruble
  GEL: 3.1, // Georgian Lari
  AMD: 520.0, // Armenian Dram
  AZN: 1.7, // Azerbaijani Manat
  KZT: 425.0, // Kazakhstani Tenge
  KGS: 84.7, // Kyrgyzstani Som
  TJS: 11.3, // Tajikistani Somoni
  TMT: 3.5, // Turkmenistani Manat
  UZS: 10650.0, // Uzbekistani Som
  AFN: 87.0, // Afghan Afghani
  PKR: 175.0, // Pakistani Rupee
  BDT: 85.0, // Bangladeshi Taka
  LKR: 200.0, // Sri Lankan Rupee
  MVR: 15.4, // Maldivian Rufiyaa
  BTN: 74.5, // Bhutanese Ngultrum
  NPR: 119.0, // Nepalese Rupee
  MMK: 1780.0, // Myanmar Kyat
  LAK: 9500.0, // Laotian Kip
  KHR: 4080.0, // Cambodian Riel
  BND: 1.35, // Brunei Dollar
  MNT: 2840.0, // Mongolian Tugrik
  KPW: 900.0, // North Korean Won
}

export async function getExchangeRates(): Promise<ExchangeRates> {
  // Check cache first
  const now = Date.now()
  if (ratesCache && now - cacheTimestamp < CACHE_DURATION) {
    return ratesCache.rates
  }

  try {
    // Try to fetch from a free API (using exchangerate-api.com as example)
    // Note: In production, you might want to use a paid service for better reliability
    const response = await fetch("https://api.exchangerate-api.com/v4/latest/USD")

    if (!response.ok) {
      throw new Error("API request failed")
    }

    const data = await response.json()

    // Cache the response
    ratesCache = {
      base: "USD",
      rates: data.rates,
      timestamp: now,
    }
    cacheTimestamp = now

    return data.rates
  } catch (error) {
    console.warn("Failed to fetch live exchange rates, using fallback rates:", error)
    // Return fallback rates if API fails
    return fallbackRates
  }
}

export function convertCurrency(
  amount: number,
  fromCurrency: string,
  toCurrency: string,
  rates: ExchangeRates,
): number {
  const fromRate = rates[fromCurrency.toUpperCase()]
  const toRate = rates[toCurrency.toUpperCase()]

  if (!fromRate || !toRate) {
    throw new Error(`Exchange rate not available for ${fromCurrency} or ${toCurrency}`)
  }

  // Convert to USD first, then to target currency
  const usdAmount = amount / fromRate
  return usdAmount * toRate
}
