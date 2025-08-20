# AGENTS.md

CareSuper Design System – Guidelines for AI Coding Agents
*Compliant with [Agent Rules v1.0](https://agent-rules.org) community standard*

---

## Purpose

This `AGENTS.md` defines the conventions, requirements, and best practices for the **CareSuper Design System**.
It follows the **Agent Rules v1.0** standard, enabling compatibility with AI coding tools (e.g. Copilot, Claude, Cursor) and ensuring consistent project execution.

* **Location**: Place this file in the project root.
* **Hierarchy**: Subdirectories may also contain their own `AGENTS.md`, which override rules at deeper levels.
* **Integration**: If other files exist (e.g. `CLAUDE.md`, `.cursorrules`, `.github/copilot-instructions.md`), consolidate them here or link them for a single source of truth.

---

## Project Overview

The CareSuper Design System is a React + TypeScript + Tailwind CSS component library built on Atomic Design principles.
It prioritizes **accessibility, consistency, and reusability**.

### Tech Stack

* **Framework**: Next.js (App Router) + TypeScript (strict mode)
* **Styling**: Tailwind CSS 3+ (no CSS-in-JS)
* **Components**: Radix UI Primitives + custom implementations
* **Docs**: Storybook 8+ (CSF3 + autodocs)
* **Testing**: Vitest + React Testing Library
* **Monorepo**: pnpm + Turborepo

---

## Repository Structure

```
packages/
  ui/            # component implementations
    src/
      primitives/  # atoms
      molecules/   # molecules
      organisms/   # organisms
      templates/   # templates
    .storybook/    # Storybook config
docs/              # project documentation
```

---

## Development Commands

### General

```bash
pnpm install     # install dependencies
pnpm dev         # start dev server
pnpm storybook   # run Storybook
pnpm build       # build
pnpm lint        # lint
pnpm test        # run tests
```

### Package-Specific

```bash
pnpm -C packages/ui storybook   # UI package Storybook
pnpm -C packages/ui test        # UI package tests
pnpm -C packages/ui build       # UI package build
```

---

## Coding Conventions

### TypeScript

* Strict mode required
* Single quotes, no semicolons
* Prefer functional patterns
* Strict typing for all props & APIs

### Components

* **Hierarchy**: atoms → molecules → organisms → templates
* **File naming**: PascalCase (e.g. `Button.tsx`)
* **Export**: default React component
* **Props**: minimal, prioritize composition & `children`

### Tailwind CSS

* Utility-first
* Use **CVA** for variants
* Resolve conflicts with `tailwind-merge`
* Use only design tokens (no hard-coded values)

### Accessibility (A11y)

* Follow WAI-ARIA Authoring Practices
* Standard focus ring: `focus-visible:ring-2 ring-offset-2`
* WCAG 2.2 AA contrast ratio compliance
* Keyboard: Tab/Shift+Tab, Esc, arrow keys
* Landmarks: `header/main/nav/footer`, `aria-live`
* Auto-check via Storybook `@storybook/addon-a11y`

---

## Component Implementation Checklist

### Basic

* [ ] No TypeScript errors (strict mode)
* [ ] ESLint/Prettier applied
* [ ] Only design tokens used
* [ ] Variants managed via CVA
* [ ] Tailwind utilities only

### Accessibility

* [ ] Keyboard navigation
* [ ] Focus ring (`focus-visible:ring-2 ring-offset-2`)
* [ ] Correct ARIA attributes
* [ ] Screen reader support
* [ ] WCAG 2.2 AA compliance
* [ ] Storybook a11y addon passes

### API

* [ ] Complete props typing
* [ ] Default values defined
* [ ] Controlled/uncontrolled clarified
* [ ] Consistent event naming
* [ ] `aria-*` passed via `...rest`
* [ ] `asChild` support (if relevant)

### Docs & Tests

* [ ] Storybook stories (CSF3)
* [ ] Auto-generated props table
* [ ] Interaction tests (Play)
* [ ] Unit tests (RTL)
* [ ] JSDoc usage examples
* [ ] Responsive design validated

---

## Testing Strategy

| Type             | Tool                 | Target          | Coverage      |
| ---------------- | -------------------- | --------------- | ------------- |
| **Unit**         | Vitest + RTL         | Atoms/Molecules | 80%+ lines    |
| **Interaction**  | Storybook TestRunner | Play functions  | 70%+ branches |
| **Visual Regr.** | Chromatic            | PR diffs        | -             |
| **A11y**         | axe-core             | addon-a11y      | 100%          |

### Commands

```bash
pnpm test                      # all tests
pnpm -C packages/ui test        # package tests
pnpm -C packages/ui test:watch  # watch mode
pnpm vitest run -t "<test>"     # specific test
```

---

## Quality & Performance

### Performance

* Tree-shaking (ESM export, `sideEffects:false`)
* SSR/CSR (Next.js compatible)
* Optimized icons (@svgr/webpack)

### Security

* CSP compliant (no `unsafe-inline`/`unsafe-eval`)
* Run `pnpm audit` regularly

### Internationalization

* No hardcoded text
* Inject via props
* RTL-friendly (use logical properties)

---

## Pull Request Guidelines

### Title Format

```
[<package>] <Title>
Example: [ui] Add new Button variants
```

### Required Checks

* [ ] `pnpm lint` passes
* [ ] `pnpm test` passes
* [ ] Storybook a11y addon passes
* [ ] No TypeScript errors
* [ ] Responsive design verified

### Pre-Commit

```bash
pnpm lint
pnpm format
pnpm test
pnpm build
```

---

## Troubleshooting

### Common Issues

1. **TS errors** → confirm strict mode
2. **Tailwind not applied** → check `packages/ui/src/styles/tailwind.css`
3. **Storybook error** → check `packages/ui/.storybook/main.ts`
4. **Test failures** → check `packages/ui/vitest.config.ts`

### Debug

```bash
pnpm list          # check deps
pnpm store prune   # clear cache
rm -rf node_modules pnpm-lock.yaml && pnpm install
```

---

## References

* [Atomic Design System Spec](./docs/atomic-design-system-spec.md)
* [Component Checklist](./docs/component-checklist.md)
* [Design Tokens](./docs/tokens.md)
* [Storybook Docs](https://storybook.js.org/docs/react/get-started/introduction)
* [Tailwind Docs](https://tailwindcss.com/docs)
* [Radix UI Docs](https://www.radix-ui.com/docs/primitives/overview/introduction)

---

## Support

If issues arise, check in order:

1. This `AGENTS.md`
2. Project docs (`/docs`)
3. Storybook docs
4. Existing component implementations
