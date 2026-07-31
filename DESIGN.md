---
name: Authentic Heritage Snack System
colors:
  surface: '#fbf9f5'
  surface-dim: '#dbdad6'
  surface-bright: '#fbf9f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3ef'
  surface-container: '#efeeea'
  surface-container-high: '#eae8e4'
  surface-container-highest: '#e4e2de'
  on-surface: '#1b1c1a'
  on-surface-variant: '#524534'
  inverse-surface: '#30312e'
  inverse-on-surface: '#f2f0ed'
  outline: '#847562'
  outline-variant: '#d7c4ae'
  surface-tint: '#825500'
  primary: '#825500'
  on-primary: '#ffffff'
  primary-container: '#d99101'
  on-primary-container: '#4d3100'
  inverse-primary: '#ffb950'
  secondary: '#934937'
  on-secondary: '#ffffff'
  secondary-container: '#ffa08a'
  on-secondary-container: '#793424'
  tertiary: '#496640'
  on-tertiary: '#ffffff'
  tertiary-container: '#89a97d'
  on-tertiary-container: '#223d1c'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffddb3'
  primary-fixed-dim: '#ffb950'
  on-primary-fixed: '#291800'
  on-primary-fixed-variant: '#624000'
  secondary-fixed: '#ffdad2'
  secondary-fixed-dim: '#ffb4a3'
  on-secondary-fixed: '#3c0701'
  on-secondary-fixed-variant: '#763222'
  tertiary-fixed: '#caecbc'
  tertiary-fixed-dim: '#afd0a1'
  on-tertiary-fixed: '#062104'
  on-tertiary-fixed-variant: '#324e2a'
  background: '#fbf9f5'
  on-background: '#1b1c1a'
  surface-variant: '#e4e2de'
typography:
  display-lg:
    fontFamily: Source Serif 4
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Source Serif 4
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Source Serif 4
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  title-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  container-max: 1200px
  gutter: 24px
---

## Brand & Style
The design system is built to elevate a traditional home-based snack business into a professional, modern UMKM (Micro, Small, and Medium Enterprise) brand. The personality is **warm, authentic, and hardworking**, evoking the sensory experience of a savory, crispy snack while maintaining an air of professional hygiene and reliability.

The design style is **Modern Organic**. It blends clean, systematic layouts with soft, tactile elements that feel "handmade" but disciplined. We avoid clinical coldness in favor of a "food-safe" warmth, using generous white space to allow the vibrant product photography to take center stage. The emotional response should be one of nostalgia meeting modern quality standards—reminding the customer of home-cooked authenticity.

## Colors
The palette is derived from the natural lifecycle of the product: from the earth to the fryer to the table.

- **Primary (Deep Golden Yellow):** Used for primary actions, highlights, and price tags. It represents the "Barokah" (blessing) and the perfect crispness of the fried crackers.
- **Secondary (Warm Terracotta):** Used for grounding elements, footers, and heritage-related storytelling. It reinforces the connection to Desa Kedali and traditional roots.
- **Background (Off-White/Cream):** Replaces pure white to reduce eye strain and provide a softer, more "culinary" canvas that feels clean and wholesome.
- **Accent (Fresh Green):** Reserved for "Freshness" indicators, hygiene badges, and organic benefit icons.
- **Text:** Deep charcoal (#2D2926) is used for body text to maintain high contrast against the cream background without the harshness of pure black.

## Typography
This design system uses a pairing of a sturdy Serif and a friendly Sans-serif to bridge the gap between tradition and modern commerce.

- **Headlines (Source Serif 4):** This font carries the "Since 2014" authority. It is used for product names, section headers, and brand storytelling. Its classic proportions suggest trustworthiness and heritage.
- **Body & Interface (Plus Jakarta Sans):** A contemporary, soft-geometric sans-serif used for descriptions, navigation, and labels. Its high x-height and open counters ensure legibility even on small mobile screens.
- **Editorial Touch:** Use "Display" sizes for marketing hero sections with tight letter-spacing to create a premium, "editorial" food magazine feel.

## Layout & Spacing
The layout follows a **Fluid Grid** philosophy with generous breathing room to evoke a sense of "premium quality."

- **Desktop:** 12-column grid with 24px gutters. Use large "hero" margins (80px+) to focus on the artisanal nature of the product.
- **Mobile:** 4-column grid with 16px margins.
- **Rhythm:** All spacing (padding, margins, gap) must be multiples of 8px. Use `lg` (48px) spacing between major sections to prevent the UI from feeling "cluttered," which can subconsciously translate to "unhygienic" in a food context.
- **Alignment:** Center-align brand-heavy sections (Heritage/About) and left-align functional sections (Product details/Checkout).

## Elevation & Depth
To mimic the physical presence of a snack bag on a table, the design system utilizes **Ambient Shadows**.

- **Shadow Profile:** Use low-opacity, wide-dispersion shadows. Avoid black shadows; instead, use a deep terracotta or umber tint (`rgba(140, 67, 50, 0.08)`) to maintain the warmth of the palette.
- **Interactive Depth:** Buttons and cards should have a subtle "lift" on hover, increasing the shadow blur rather than its opacity.
- **Surfaces:** Use Tonal Layers. The main background is the off-white cream. Elevated cards should be pure white to create a crisp, clean distinction for product information.

## Shapes
The shape language is **Organic and Welcoming**. 

- **Corners:** Consistent use of `rounded-md` (8px) for standard UI elements like inputs and cards. Large containers like hero images or product showcases use `rounded-xl` (24px) to mimic the soft edges of traditional snacks.
- **Buttons:** Buttons should be more rounded than containers (pill-shaped or `rounded-lg`) to make them feel "squishy" and approachable.
- **Iconography:** Icons should be drawn with a 2px stroke and rounded caps/joins. Avoid sharp 90-degree angles to maintain the "home-made" friendly vibe.

## Components
- **Buttons:**
  - *Primary:* Deep Golden Yellow background, white text, bold weight. Softly rounded.
  - *Secondary:* Terracotta border with a transparent background.
- **Product Cards:** Pure white background, soft shadow, with a large image area. The price is always displayed in the Primary Golden color.
- **Process Chips:** Used to show production steps (e.g., "Sun Dried," "No Preservatives"). These use the Fresh Green accent with a light green tint background.
- **Benefit Icons:** A custom set of icons representing "Barokah" (Blessing), "Authentic Lamongan," and "Hygienic Production."
- **Input Fields:** Off-white background with a subtle 1px border in a lightened terracotta. Focus state uses a Golden Yellow border.
- **Lists:** Traditional list markers are replaced with small Golden Yellow "cracker" dots or checkmarks in Green for benefit lists.