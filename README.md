# CareSuper Design System

Complete design system built with CareSuper brand guidelines, including Filson Pro typography, brand colors, gradients, and accessibility compliance.

## ✅ Completed Implementation

### Tech Stack

- **TypeScript strict mode** - Type safety assurance
- **Tailwind CSS 3** - Utility-first CSS
- **React 18** - UI components
- **Storybook 8** - Component documentation (CSF3)
- **CVA (class-variance-authority)** - Variant management
- **clsx + tailwind-merge** - Class conflict resolution
- **pnpm + Turborepo** - Monorepo management

### CareSuper Brand Implementation

#### Typography - Filson Pro (Adobe Fonts)

- **Font Loading**: `https://use.typekit.net/pxw6mfp.css`
- **Filson Pro Bold** - Display and headline text
- **Filson Pro Medium** - Headings and buttons
- **Filson Pro Book** - Body text and captions
- **Complete type scale** - 13 size variations from display-xl to caption-sm
- **Optimal line heights** - Tuned for readability

#### Color System

- **Primary Colors**: Radiant Green, Fresh Mint, Mid Blue, Inky Blue, Sunny Yellow, Sky Blue
- **Secondary Colors**: Mid Green, Dark Green, Dark Mint, comprehensive grey scale
- **Tertiary Colors**: Purple, Red, Pink for accents
- **Accessibility**: All combinations meet WCAG AA (4.5:1+ contrast ratio)
- **14 high-contrast combinations** for text/background pairs

#### Gradients

- **Primary**: Fresh Mint to Radiant Green
- **Secondary**: Fresh to Sky, Sky to Blue, Purple to Blue
- **CSS Classes**: `bg-gradient-fresh-to-radiant`, etc.

### Components (Atoms)

- **Button**: 7 intents including gradient, CareSuper brand styling
- **TextField**: Complete form input with CareSuper typography and colors
- **Typography Showcase**: Interactive display of complete type scale
- **Gradient Showcase**: Visual demonstration of brand gradients
- **Accessibility Showcase**: WCAG-compliant color combinations

### Development Tools

- **ESLint** - Flat Config, React/TypeScript support
- **Prettier** - Code formatting
- **Vitest + RTL** - Unit testing
- **Chromatic** - Visual regression testing setup
- **Storybook** - A11y/Interactions/Docs addons, theme switching

## 🚀 Vercel Deployment

Deploy Storybook to Vercel with the following configuration:

```json
{
  "buildCommand": "pnpm storybook:build",
  "outputDirectory": "packages/ui/storybook-static"
}
```

## 📁 Project Structure

```
caresuper-design-system/
├── packages/
│   ├── tokens/          # Design tokens with CareSuper brand values
│   │   └── src/index.ts # Colors, typography, spacing, gradients
│   └── ui/              # UI components with brand styling
│       ├── src/
│       │   ├── primitives/    # Button, TextField, showcases
│       │   ├── styles/        # Tailwind CSS with brand tokens
│       │   └── utils/cn.ts    # clsx + tailwind-merge
│       ├── .storybook/        # Storybook with Adobe Fonts
│       └── storybook-static/  # Build output
├── vercel.json          # Vercel deployment config
└── turbo.json          # Turborepo configuration
```

## 🎨 Typography Usage

```tsx
// Display text
<h1 className="text-display-xl font-brand-bold text-inky-blue-500">
  Your Super Future
</h1>

// Headings
<h2 className="text-heading-lg font-brand-bold text-inky-blue-500">
  Investment Options
</h2>

// Body text
<p className="text-body-md font-brand-book text-inky-blue-500">
  CareSuper helps you build a secure financial future.
</p>

// Captions
<span className="text-caption-md font-brand-book text-mid-grey-600">
  Last updated: 15 August 2024
</span>
```

## 🌈 Color Usage

```tsx
// Brand colors
<div className="bg-radiant-green-500 text-inky-blue-500">
  High-impact call to action
</div>

// Accessibility-compliant combinations
<div className="bg-fresh-mint-500 text-inky-blue-500">
  12:1 contrast ratio
</div>

// Gradients
<div className="bg-gradient-fresh-to-radiant">
  Hero section background
</div>
```

## 🛠 Development Commands

```bash
# Development
pnpm storybook           # Start Storybook with Adobe Fonts

# Build
pnpm build              # Build all packages
pnpm storybook:build    # Build Storybook static site

# Testing & Quality
pnpm -C packages/ui test     # Unit tests
pnpm -C packages/ui lint     # ESLint
pnpm -C packages/ui format   # Prettier
pnpm -C packages/ui chromatic # Visual regression testing
```

## 🎯 Key Features

### Adobe Fonts Integration

- Automatic loading via `https://use.typekit.net/pxw6mfp.css`
- Fallback to Arial for graceful degradation
- Optimized font weights (400, 500, 700)

### Accessibility First

- WCAG AA compliance throughout
- Focus management with brand colors
- Screen reader optimization
- High contrast mode support

### Brand Consistency

- Single source of truth for all brand values
- Automated token distribution to Tailwind
- Type-safe design tokens
- Comprehensive Storybook documentation

## 📋 Next Steps

- [ ] CI/CD setup (GitHub Actions)
- [ ] Chromatic integration (automated visual regression testing)
- [ ] Molecules/Organisms implementation
- [ ] Performance optimization
- [ ] Multi-brand theme support

---

Built with ❤️ for CareSuper using modern web technologies and best practices.
