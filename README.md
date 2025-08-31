# Unit Converter - Production-Ready Next.js Application

A comprehensive, production-ready unit converter built with Next.js 15, TypeScript, and Tailwind CSS. Supports 150+ units across 27 categories with accurate conversions, SEO optimization, and a responsive design.

## 🚀 Features

- **150+ Units** across 27 categories (Length, Weight, Temperature, Volume, Speed, Pressure, Energy, Power, Data, and more)
- **Accurate Conversions** using base-unit conversion model with proper formula handling
- **SEO Optimized** with dynamic sitemaps, structured data, and unique metadata for each converter
- **Responsive Design** with sidebar navigation and mobile-friendly interface
- **Real-time Conversion** with instant results and formula display
- **Popular Shortcuts** for commonly used conversions
- **Related Converters** with internal linking for better UX and SEO

## 📁 Project Structure

\`\`\`
├── app/
│   ├── converters/[slug]/page.tsx    # Dynamic converter pages
│   ├── layout.tsx                    # Root layout with metadata
│   ├── page.tsx                      # Home page
│   ├── sitemap.ts                    # Dynamic sitemap generation
│   ├── robots.ts                     # SEO robots.txt
│   └── not-found.tsx                 # 404 page
├── components/
│   ├── ui/                           # Reusable UI components
│   ├── unit-converter-sidebar.tsx    # Main navigation sidebar
│   ├── converter-page.tsx            # Individual converter page
│   ├── featured-converter.tsx        # Homepage featured converter
│   └── structured-data.tsx           # SEO structured data
├── lib/
│   ├── units-registry.ts             # Complete unit definitions
│   ├── conversion-engine.ts          # Core conversion logic
│   └── seo-utils.ts                  # SEO helper functions
└── README.md                         # This file
\`\`\`

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Quick Start

1. **Clone or download** the project files
2. **Install dependencies:**
   \`\`\`bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   \`\`\`

3. **Run development server:**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   \`\`\`

4. **Open** [http://localhost:3000](http://localhost:3000) in your browser

### Deployment

Deploy to Vercel (recommended):
\`\`\`bash
npm run build
vercel --prod
\`\`\`

Or build for other platforms:
\`\`\`bash
npm run build
npm start
\`\`\`

## 📊 Popular Converter Examples

The following popular converters are pre-generated and optimized:

### Length Conversions
- [Centimeter to Inch](/converters/centimeter-to-inch) - `cm → in`
- [Inch to Centimeter](/converters/inch-to-centimeter) - `in → cm`
- [Meter to Foot](/converters/meter-to-foot) - `m → ft`
- [Foot to Meter](/converters/foot-to-meter) - `ft → m`
- [Kilometer to Mile](/converters/kilometer-to-mile) - `km → mi`
- [Mile to Kilometer](/converters/mile-to-kilometer) - `mi → km`

### Weight Conversions
- [Kilogram to Pound](/converters/kilogram-to-pound) - `kg → lb`
- [Pound to Kilogram](/converters/pound-to-kilogram) - `lb → kg`

### Temperature Conversions
- [Celsius to Fahrenheit](/converters/celsius-to-fahrenheit) - `°C → °F`
- [Fahrenheit to Celsius](/converters/fahrenheit-to-celsius) - `°F → °C`

### Volume Conversions
- [Liter to Gallon US](/converters/liter-to-gallon_us) - `L → gal US`
- [Gallon US to Liter](/converters/gallon_us-to-liter) - `gal US → L`
- [Liter to Gallon UK](/converters/liter-to-gallon_uk) - `L → gal UK`

### Pressure Conversions
- [PSI to Bar](/converters/psi-to-bar) - `psi → bar`
- [Bar to PSI](/converters/bar-to-psi) - `bar → psi`

### Speed Conversions
- [Meter per Second to Kilometer per Hour](/converters/meter_per_second-to-kilometer_per_hour) - `m/s → km/h`
- [Kilometer per Hour to Mile per Hour](/converters/kilometer_per_hour-to-mile_per_hour) - `km/h → mph`

### Power Conversions
- [Watt to Horsepower](/converters/watt-to-horsepower) - `W → hp`
- [Horsepower to Watt](/converters/horsepower-to-watt) - `hp → W`

## ➕ Adding New Units

### Step 1: Add Unit Definition

Edit `lib/units-registry.ts` and add your unit to the `units` array:

\`\`\`typescript
{
  id: "your_unit_id",           // Unique identifier (lowercase, underscores)
  name: "Your Unit Name",       // Display name
  symbol: "YU",                 // Unit symbol/abbreviation
  category: "existing_category", // Must match existing category
  toBase: (v) => v * factor,    // Convert TO base unit
  fromBase: (v) => v / factor,  // Convert FROM base unit
  aliases: ["alt1", "alt2"]     // Optional: alternative names
}
\`\`\`

### Step 2: Add to Popular Pairs (Optional)

If it's a commonly used conversion, add to `popularPairs`:

\`\`\`typescript
{ from: "your_unit_id", to: "target_unit_id", label: "YU → TU" }
\`\`\`

### Step 3: Test the Conversion

Visit `/converters/your_unit_id-to-target_unit_id` to test.

## 📂 Adding New Categories

### Step 1: Add Category Definition

Add to the `categories` array in `lib/units-registry.ts`:

\`\`\`typescript
{
  id: "new_category",
  name: "New Category",
  baseUnit: "base_unit_id",     // The reference unit for this category
  description: "Description of what this category measures"
}
\`\`\`

### Step 2: Add Base Unit

Ensure the base unit exists in the `units` array with conversion functions that return the input value unchanged:

\`\`\`typescript
{
  id: "base_unit_id",
  name: "Base Unit",
  symbol: "BU",
  category: "new_category",
  toBase: (v) => v,    // Base unit: no conversion needed
  fromBase: (v) => v   // Base unit: no conversion needed
}
\`\`\`

### Step 3: Add Related Units

Add other units in the same category, with conversions relative to your base unit.

### Step 4: Add Use Cases

Update the `generateUseCases` function in `app/converters/[slug]/page.tsx`:

\`\`\`typescript
const categoryUseCases: Record<string, string[]> = {
  // ... existing categories
  new_category: [
    "Use case 1 for this category",
    "Use case 2 for this category",
    "Use case 3 for this category",
    "Use case 4 for this category",
  ],
}
\`\`\`

## 🔧 Conversion Engine Details

### Base-Unit Model

All conversions use a base-unit approach:
1. Convert input value TO the base unit using `toBase()`
2. Convert base unit value TO target unit using `fromBase()`

This ensures accuracy and consistency across all conversions.

### Special Cases

#### Temperature (Offset Conversions)
Temperature conversions handle offsets properly:
\`\`\`typescript
// Celsius to Kelvin (base)
toBase: (c) => c + 273.15
fromBase: (k) => k - 273.15

// Fahrenheit to Kelvin
toBase: (f) => ((f - 32) * 5) / 9 + 273.15
fromBase: (k) => ((k - 273.15) * 9) / 5 + 32
\`\`\`

#### Fuel Economy (Inverse Relationships)
Fuel economy units have inverse relationships:
\`\`\`typescript
// L/100km to mpg US
toBase: (v) => v
fromBase: (v) => 235.214 / v  // Inverse calculation
\`\`\`

## 🎨 Customization

### Styling
- Built with Tailwind CSS v4
- Uses shadcn/ui components
- Responsive design with mobile-first approach
- Dark/light mode support via CSS variables

### SEO Configuration
- URLs are now hardcoded
- Modify structured data in `lib/seo-utils.ts`
- Customize meta descriptions and titles as needed

### Branding
- Update site name and description in `app/layout.tsx`
- Modify the calculator icon and branding in components
- Customize color scheme in `app/globals.css`

## 📈 SEO Features

- **Dynamic Sitemap** - Automatically generates sitemap.xml with all converter pages
- **Structured Data** - Rich snippets for better search results
- **Canonical URLs** - Prevents duplicate content issues
- **Meta Tags** - Unique titles, descriptions, and keywords for each page
- **Internal Linking** - Related converters and category navigation
- **Mobile Optimization** - Responsive design for all devices

## 🚀 Performance

- **Static Generation** - Popular converters are pre-built at build time
- **Dynamic Routes** - Less common converters generated on-demand
- **Optimized Images** - Placeholder system for any images
- **Minimal JavaScript** - Client-side interactivity only where needed
- **Fast Loading** - Optimized bundle size and lazy loading

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Add your units/categories following the guide above
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For questions or issues:
- Check the code comments for implementation details
- Review the unit registry structure
- Test conversions manually to verify accuracy
- Ensure SEO metadata is properly configured

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
