# Design Tokens

Last Updated: 2025-08-20 / Author: Design Engineering

---

## Overview

Design tokens are the foundational design values that maintain consistency across the entire design system. They manage visual attributes such as colors, typography, spacing, border radius, and shadows through a unified system.

**Package Location**: `packages/tokens`

---

## 1. Token Hierarchy

### 1.1 Core Tokens
- `color.primary.500`, `space.4`, `font.size.md`, `radius.lg`, `elevation.2`
- Define basic design values

### 1.2 Semantic Tokens
- `bg.surface`, `fg.muted`, `accent.default`, `state.success.fg`
- Purpose-based tokens

### 1.3 Theme Modes
- `light` / `dark` / `high-contrast`
- CSS variable switching

---

## 2. Implementation

### 2.1 CSS Variables
```css
:root {
  --color-primary-500: #2563eb;
  --space-4: 1rem;
  --font-size-md: 1rem;
  --radius-lg: 0.5rem;
  --elevation-2: 0 4px 6px -1px rgb(0 0 0 / 0.1);
}
```

### 2.2 Tailwind Integration
```ts
// tailwind.config.ts
import { tokens } from "@org/tokens";

export default {
  theme: {
    extend: {
      colors: tokens.colors,
      spacing: tokens.spacing,
      borderRadius: tokens.radius,
      boxShadow: tokens.elevation,
    },
  },
};
```

### 2.3 Theme Switching
- Automatic switching with `prefers-color-scheme`
- Manual switching with `data-theme` attribute

---

## 3. Scale Definitions

### 3.1 Spacing (4px Grid)
```
0, 2, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96
```

### 3.2 Typography
- **Font Family**: `--font-sans` (e.g., Inter/Noto Sans JP)
- **Size Scale**: `xs/sm/base/lg/xl/2xl/3xl/4xl/5xl/6xl/7xl/8xl/9xl`

### 3.3 Color Palette
Scale of 50-900 for each hue:
- `gray` (neutral)
- `primary` (brand color)
- `success` (success state)
- `warning` (warning state)
- `danger` (error state)

### 3.4 Border Radius
```
none, sm, md, lg, xl, 2xl, full
```

### 3.5 Shadow (Elevation)
```
0: none
1: 0 1px 2px 0 rgb(0 0 0 / 0.05)
2: 0 4px 6px -1px rgb(0 0 0 / 0.1)
3: 0 10px 15px -3px rgb(0 0 0 / 0.1)
4: 0 20px 25px -5px rgb(0 0 0 / 0.1)
5: 0 25px 50px -12px rgb(0 0 0 / 0.25)
```

### 3.6 Motion
- **Duration**: `100ms, 200ms, 300ms, 500ms, 700ms, 1000ms`
- **Easing**:
  - `ease-standard`: cubic-bezier(0.4, 0.0, 0.2, 1)
  - `ease-enter`: cubic-bezier(0.0, 0.0, 0.2, 1)
  - `ease-exit`: cubic-bezier(0.4, 0.0, 1, 1)

---

## 4. Semantic Token Examples

### 4.1 Background Colors
```css
--bg-surface: var(--color-white);
--bg-muted: var(--color-gray-50);
--bg-accent: var(--color-primary-50);
```

### 4.2 Text Colors
```css
--fg-default: var(--color-gray-900);
--fg-muted: var(--color-gray-600);
--fg-subtle: var(--color-gray-400);
```

### 4.3 State Colors
```css
--state-success-bg: var(--color-green-50);
--state-success-fg: var(--color-green-700);
--state-warning-bg: var(--color-yellow-50);
--state-warning-fg: var(--color-yellow-700);
--state-danger-bg: var(--color-red-50);
--state-danger-fg: var(--color-red-700);
```

---

## 5. Dark Theme

```css
[data-theme='dark'] {
  --bg-surface: var(--color-gray-900);
  --bg-muted: var(--color-gray-800);
  --fg-default: var(--color-gray-100);
  --fg-muted: var(--color-gray-400);
}
```

---

## 6. Usage Guidelines

### 6.1 Principles
- Always use tokens instead of direct color values (#ffffff)
- Prioritize semantic tokens
- Avoid direct use of core tokens

### 6.2 Naming Conventions
- Kebab-case: `color-primary-500`
- Hierarchical structure: `category-subcategory-variant`
- Meaningful names: `bg-surface` > `gray-50`

### 6.3 Extensibility
- Consider new brand theme additions
- Custom property override support
- Cross-platform consistency

---

## 7. Tool Integration

### 7.1 Figma Variables
- Design tool synchronization
- Automatic token import/export

### 7.2 Storybook
- Token documentation
- Theme switching for visual testing

### 7.3 TypeScript
```ts
// types/tokens.ts
export interface ColorScale {
  50: string;
  100: string;
  // ... up to 900
}

export interface Tokens {
  colors: {
    gray: ColorScale;
    primary: ColorScale;
    // ...
  };
  spacing: Record<string, string>;
  radius: Record<string, string>;
}
```

---

## 8. Validation

### 8.1 Contrast Ratio
- WCAG 2.2 AA compliance
- Text: 4.5:1 or higher
- UI elements: 3:1 or higher

### 8.2 Color Vision Support
- Information conveyance not dependent on color alone
- Verification with simulation tools

### 8.3 Accessibility
- High contrast mode support
- Reduced motion (prefers-reduced-motion) support
