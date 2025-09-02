export interface ArticleOverride {
  title: string
  sections: {
    heading: string
    content: string[]
    table?: {
      headers: string[]
      rows: string[][]
    }
  }[]
  faq: {
    question: string
    answer: string
  }[]
  realLifeExamples: {
    title: string
    description: string
    calculation: string
  }[]
}

export const ARTICLE_OVERRIDES: Record<string, ArticleOverride> = {
  "centimeter-to-inch": {
    title: "Complete Guide to Converting Centimeters to Inches",
    sections: [
      {
        heading: "Understanding the Centimeter to Inch Conversion",
        content: [
          "Converting centimeters to inches is one of the most common unit conversions, especially when dealing with international measurements or working between metric and imperial systems.",
          "The conversion factor is straightforward: 1 inch equals exactly 2.54 centimeters, which means 1 centimeter equals approximately 0.393701 inches.",
          "This conversion is essential in many fields including construction, fashion, engineering, and everyday measurements.",
        ],
      },
      {
        heading: "Conversion Formula and Method",
        content: [
          "To convert centimeters to inches, divide the centimeter value by 2.54:",
          "Inches = Centimeters ÷ 2.54",
          "For example: 10 cm ÷ 2.54 = 3.937 inches",
        ],
        table: {
          headers: ["Centimeters", "Inches", "Common Use"],
          rows: [
            ["1 cm", "0.394 in", "Small measurements"],
            ["2.54 cm", "1 in", "Exact conversion"],
            ["5 cm", "1.969 in", "Small objects"],
            ["10 cm", "3.937 in", "Hand span"],
            ["30.48 cm", "12 in (1 ft)", "Ruler length"],
          ],
        },
      },
      {
        heading: "Historical Background",
        content: [
          "The centimeter is part of the metric system, developed during the French Revolution in the 1790s as a universal measurement system.",
          "The inch has ancient origins, originally based on the width of a human thumb, and was standardized in 1959 as exactly 2.54 centimeters.",
          "Today, most countries use the metric system, but the United States, United Kingdom, and a few others still use imperial measurements in daily life.",
        ],
      },
    ],
    faq: [
      {
        question: "How do I convert 15 centimeters to inches?",
        answer:
          "Divide 15 by 2.54: 15 ÷ 2.54 = 5.906 inches. You can round this to approximately 5.9 inches for most practical purposes.",
      },
      {
        question: "Is there a quick mental math trick for cm to inches?",
        answer:
          "For a rough estimate, divide by 2.5 instead of 2.54. This gives you a close approximation that's easy to calculate mentally. For example, 25 cm ÷ 2.5 = 10 inches (actual: 9.84 inches).",
      },
      {
        question: "Why is the conversion factor 2.54 exactly?",
        answer:
          "In 1959, the international yard and pound agreement defined the inch as exactly 2.54 centimeters. This created a precise relationship between metric and imperial units.",
      },
      {
        question: "When should I use centimeters vs inches?",
        answer:
          "Use centimeters for scientific work, international communication, and in metric countries. Use inches in the US, UK (partially), and when working with imperial-based tools and materials.",
      },
      {
        question: "How accurate do I need to be with this conversion?",
        answer:
          "For everyday use, rounding to 2 decimal places (0.01 inch) is usually sufficient. For precision work like machining or scientific measurements, use more decimal places as needed.",
      },
    ],
    realLifeExamples: [
      {
        title: "Smartphone Screen Size",
        description: "Converting a 15.2 cm phone screen to inches for US specifications",
        calculation: "15.2 cm ÷ 2.54 = 5.98 inches (approximately 6-inch screen)",
      },
      {
        title: "Furniture Measurements",
        description: "A European table that's 75 cm wide needs to fit through a 30-inch doorway",
        calculation: "75 cm ÷ 2.54 = 29.53 inches (will fit with room to spare)",
      },
      {
        title: "Recipe Conversions",
        description: "A European recipe calls for a 23 cm cake pan, but you have inch-marked pans",
        calculation: "23 cm ÷ 2.54 = 9.06 inches (use a 9-inch pan)",
      },
      {
        title: "Height Conversion",
        description: "Converting a height of 175 cm to feet and inches for US forms",
        calculation: "175 cm ÷ 2.54 = 68.9 inches = 5 feet 8.9 inches (5'9\")",
      },
    ],
  },
}
