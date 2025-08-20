# Atomic Design System Specification (Tailwind CSS + React + Storybook)

Last Updated: 2025-08-20 / Author: Design Engineering

---

## Overview & Purpose

A standardization framework to rapidly deliver consistent UI/UX through design systems.

### Goals

- Standardize reusable component libraries
- Unified management of design tokens (colors, typography, spacing, motion)
- Provide executable documentation through Storybook
- Clarify responsibility scope based on Atomic Design principles

### Out of Scope

- Product-specific business logic implementation (e.g., payment flow API integration)

---

## Tech Stack

| Category | Technology |
|----------|------------|
| **Language** | TypeScript (strict) |
| **UI** | React 18+, Next.js 14+ |
| **Styling** | Tailwind CSS 3+ |
| **Documentation** | Storybook 8+ (CSF3 / autodocs) |
| **Variant Management** | class-variance-authority (CVA) |
| **Utilities** | clsx, tailwind-merge |
| **Lint/Format** | ESLint, Prettier |
| **Testing** | Vitest + React Testing Library |
| **Visual Regression** | Chromatic |
| **Monorepo** | pnpm + Turborepo |

---

## Project Structure

```
root/
 ├─ apps/
 │   ├─ web/                  # Product application
 │   └─ docs/                 # Storybook host
 ├─ packages/
 │   ├─ ui/                   # Design system (React + Tailwind)
 │   ├─ tokens/               # Design tokens (JSON/TS/CSS vars)
 │   ├─ config/               # Shared config (ESLint/TS/Prettier)
 │   └─ icons/                # Icons (React components)
 └─ tooling/                  # Scripts & CI
```

### packages/ui Internal Structure

```
ui/
 ├─ src/
 │   ├─ atoms/               # Basic elements
 │   ├─ molecules/           # Composite elements
 │   ├─ organisms/           # Complex components
 │   ├─ templates/           # Layout templates
 │   ├─ primitives/          # Primitive elements
 │   ├─ hooks/              # Custom hooks
 │   ├─ utils/              # Utilities
 │   ├─ styles/             # CSS (tailwind.css, theme.css)
 │   └─ index.ts
 ├─ .storybook/             # Storybook configuration
 └─ package.json
```

---

## Atomic Design Hierarchy & Responsibilities

| Level | Component Examples | Responsibilities |
|-------|-------------------|------------------|
| **Atoms** | Button, TextField, Icon, Badge | Basic UI elements, accessibility guarantees |
| **Molecules** | Card, SearchBar, FormField | Combination of multiple Atoms |
| **Organisms** | Header, Navigation, Modal | Complete UI sections |
| **Templates** | PageLayout, GridSystem | Layout structure |
| **Pages** | Specific pages | Managed by app side |

### Principles

- Lower levels don't know about upper levels (prevent circular dependencies)
- Accessibility is guaranteed at Atoms/Molecules level
- Layout (margin) is externally controlled, internal uses `gap`/`padding`

---

## Tailwind CSS Design Guidelines

### Basic Principles

- Utility class-centered composition
- Abstract complex variants with CVA
- Resolve class conflicts with `tailwind-merge`
- Minimize global CSS (CSS variable definitions, reset, font declarations only)

### CVA Usage Example

```ts
const button = cva(
  "inline-flex items-center justify-center rounded-md font-medium focus:outline-none focus-visible:ring-2 disabled:opacity-50",
  {
    variants: {
      intent: {
        primary: "bg-primary-600 text-white hover:bg-primary-700",
        secondary: "bg-surface text-fg hover:bg-muted"
      },
      size: {
        sm: "h-8 px-3 text-sm",
        md: "h-10 px-4",
        lg: "h-12 px-6 text-lg"
      },
    },
    defaultVariants: { intent: "primary", size: "md" },
  }
)
```

---

## Accessibility (A11y)

### Requirements

- Comply with WAI-ARIA Authoring Practices
- Standardized focus ring: `focus-visible:ring-2 ring-offset-2`
- Contrast ratio: WCAG 2.2 AA compliance (text 4.5:1, UI 3:1)
- Keyboard operation: Tab/Shift+Tab, Esc, arrow keys support
- Landmarks: `header/main/nav/footer`, `aria-live`
- Automatic checking with Storybook `@storybook/addon-a11y`

---

## Internationalization (i18n)

- Text injection from outside UI package (via props)
- RTL support: prioritize logical properties
- Prohibition of hardcoded text

---

## API Design Principles

### Props Design

- **Passive UI**: Render only with received props
- **Control mode clarification**: `value/onChange` vs `defaultValue`
- **React-compliant event names**: `onClick`, `onOpenChange`
- **Accessibility props passthrough**: Pass `aria-*` etc. through `...rest`
- **Composition support**: Extensibility with `children`

---

## Component Implementation Requirements

Each component must satisfy the following:

1. **Specification**: Purpose, variants, interactions, A11y requirements
2. **API**: Props table, type definitions, default values, control policy
3. **Design**: Figma link, token reference
4. **Implementation**: TSX, tests, Stories
5. **Usage examples**: Minimal/typical/edge cases
6. **A11y validation**: Storybook a11y addon green
7. **Dependencies**: Other components/external libraries
8. **Versioning impact**: Presence of breaking changes

---

## Storybook Configuration

### Required Addons

- `@storybook/addon-essentials` (controls, docs, actions, viewport)
- `@storybook/addon-a11y`
- `@storybook/addon-interactions`
- `storybook-dark-mode`

### Story Template (CSF3)

```ts
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/packages/ui";

const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
  parameters: { layout: "centered" },
  argTypes: { onClick: { action: "clicked" } },
};
export default meta;
export type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: { intent: "primary", children: "Save" }
};
```

---

## Testing Strategy

| Test Type | Tool | Target | Coverage Goal |
|-----------|------|--------|---------------|
| **Unit** | Vitest + RTL | Atoms/Molecules | Lines 80%+ |
| **Interaction** | Storybook Test Runner | Play functions | Branch 70%+ |
| **Visual Regression** | Chromatic | PR diff detection | - |
| **A11y** | axe-core | addon-a11y | 100% |

---

## Release Management

### Package Publishing

- Independent versioning of `packages/ui`, `packages/tokens`
- SemVer compliance: `fix`=patch, `feat`=minor, breaking=major
- Automatic Changelog with Conventional Commits + Changeset

### Deprecation Policy

- `@deprecated` JSDoc notation
- Maintain compatibility for 2 minor versions ahead

---

## Quality & Performance

### Performance

- Tree-shaking support (ESM export, sideEffects:false)
- SSR/CSR support (Next.js compatible)
- Icon optimization (@svgr/webpack)

### Security

- CSP compliance (avoid `unsafe-inline/unsafe-eval`)
- Dependency vulnerability audit (`pnpm audit`, Dependabot)

---

## Implementation Steps (Minimal Set)

1. **Monorepo initialization**: pnpm + Turborepo
2. **Design token definition**: Output CSS variables in `packages/tokens`
3. **Tailwind setup**: Bind tokens to `theme.extend` in `packages/ui`
4. **Basic Atoms implementation**: `Button`, `TextField`
5. **Storybook introduction**: a11y/controls/viewport setup, Chromatic integration
6. **App integration**: Introduce `packages/ui` to `apps/web`, replace with Templates

---

## Related Documentation

- [Design Tokens](./tokens.md) - Detailed specifications for colors, typography, spacing
- [Component Checklist](./component-checklist.md) - Detailed implementation checklist
- Figma Library: (Insert URL)
- Brand Guide: (URL)
- Coding Standards: (URL)
