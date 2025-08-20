# CareSuper Header Navigation — Next.js + Tailwind Implementation Status

Last updated: 20 Dec 2024 (AEST)

## 0) Implementation Status ✅ COMPLETED

Header navigation has been fully implemented in Next.js (App Router) with Tailwind CSS. Includes mega menu navigation, mobile drawer, context switching, accessibility features, and complete component architecture.

---

## 1) Information Architecture (current, normalised)

### Global primitives

- **Top-level sections (primary tabs):**
  - For Members
  - For Employers
  - Forms & Publications (direct link)
  - Contact Us (direct link)
  - About Us (direct link)
  - Phone number `1800 005 166` (tel link)
  - Search trigger
  - Auth CTAs (contextual):
    - Members: Login → `online.caresuper.com.au`, Join now → same domain
    - Employers: Login/Join → QuickSuper (quicksuper.caresuper.com.au)

### For Members → mega menu groups

- **Why us**
  - Compare super
  - Industry SuperFund
  - Member benefits
  - Awards
  - Fees and costs
- **Super** ("Manage super")
  - Grow your super
    - Salary sacrifice
    - After‑tax contributions
    - Super co‑contribution
    - Contribution limits
    - Spouse contributions
  - Combine your super
  - Changing jobs
  - Accessing your super
  - Life changes
    - Downsizer contributions
    - First home buyers super scheme
    - Nominating beneficiaries
- **Insurance**
  - Insurance through super
    - Change your cover
    - Make a claim
- **Investments** ("Your investments")
  - Investment performance (→ Unit pricing)
  - Your investment options (→ Direct Investment option)
  - MySuper Product Dashboard
  - Choosing your investment (→ Volatility‑proof your super)
- **Our investing**
  - How we invest (→ Investment philosophy, Responsible investing, Sustainable Balanced Option, Portfolio holdings)
- **Retirement**
  - Plan my retirement
    - When can I retire (→ Retirement readiness checklist)
    - How much do I need to retire (→ Compare my spend)
    - Age pension
    - Access your super in retirement
  - Start my retirement
    - Income options (→ TTR, Flexible Income, Managed Income)
    - Open an account (→ Retirement fees and costs)
    - Retirement Bonus
    - Manage my account
- **Advice & Resources**
  - Resources
    - Extra care & support for vulnerable members
    - Tools & calculators
    - Forms & publications (dup link)
    - Education Hub
    - News
  - Advice
    - Get super advice
    - Events & webinars (→ Leadership tour 2025)
    - For Advisers (→ Resources to support your advice)

### For Employers → menu groups

- **Partner with us**
  - How we support your business
  - Make CareSuper your default fund
  - Employee benefits
- **Meet the team**
  - Meet our super experts
- **Your super responsibilities**
  - Your super obligations
  - Super for the self‑employed
- **Super payments**
  - How to make super payments (→ What you need to know about super payments)
  - Register your business
  - Important USI information
- **FAQs**
  - QuickSuper FAQs
- **Auth CTAs:** Login / Join (QuickSuper)

---

## 2) UX/Interaction Requirements

### Desktop (lg ≥ 1024px) ✅ IMPLEMENTED

- **Menubar pattern:** ✅ Primary navigation items with hover-triggered mega panels
- **Mega menu panels:** ✅ Multi-column layout with section headings and grouped links
- **Hover behavior:** ✅ Intent delays and proper focus management implemented
- **Keyboard navigation:** ✅ Full keyboard support with Escape to close, tab management
- **Sticky header:** ✅ Sticky positioning with shadow and condensed variant
- **CTAs:** ✅ Context-aware Login/Join buttons (Members vs Employers)
- **Logo integration:** ✅ CareSuper logo with proper sizing and accessibility
- **Phone number:** ✅ Clickable tel: link in header

### Mobile/Tablet ( < 1024px ) ✅ IMPLEMENTED

- **Hamburger menu:** ✅ Full-height drawer from left with body scroll lock
- **Accordion navigation:** ✅ Collapsible sections with smooth animations
- **Touch targets:** ✅ Minimum 44×44px tap targets throughout
- **Mobile CTAs:** ✅ Login & Join buttons in drawer footer
- **Phone access:** ✅ Quick access to phone number in mobile header
- **Nested navigation:** ✅ Proper indentation and grouping for sub-items

### Cross‑cutting

- **Active state:** Highlight current section based on URL prefix; breadcrumb optional.
- **Announcement bar:** Optional top strip for alerts; dismissible; notifies screen readers.
- **Internationalisation placeholder:** IA keys rather than hardcoded strings.

---

## 3) Accessibility (WCAG 2.2 AA) ✅ IMPLEMENTED

- **ARIA Roles:** ✅
  - Primary navigation with `<nav aria-label="Primary">`
  - Menu items with proper `role="menuitem"` and `aria-haspopup`
  - Mega panels with `role="menu"` and `aria-labelledby`
  - Mobile accordion with `aria-expanded` and `aria-controls`
- **Keyboard Navigation:** ✅
  - Tab navigation between triggers
  - Enter/Space to open panels
  - Escape to close and return focus
  - Arrow key navigation within panels
- **Focus Management:** ✅
  - Focus trap within open panels
  - Visible focus rings throughout
  - Proper focus return on close
- **Screen Reader Support:** ✅
  - Descriptive labels and landmarks
  - Hidden content properly marked
  - State announcements for dynamic content
- **Contrast & Motion:** ✅
  - WCAG AA compliant color contrast
  - Reduced motion preferences respected

---

## 5) Data Model (JSON) — single source for Members/Employers

```json
{
  "globals": {
    "phone": "1800 005 166",
    "cta": {
      "members": {"loginUrl": "https://online.caresuper.com.au/aol/", "joinUrl": "https://online.caresuper.com.au/aol/"},
      "employers": {"loginUrl": "https://quicksuper.caresuper.com.au/", "joinUrl": "https://quicksuper.caresuper.com.au/"}
    }
  },
  "topLinks": [
    {"label": "Forms & Publications", "href": "/forms-publications"},
    {"label": "Contact Us", "href": "/members/contact-us"},
    {"label": "About Us", "href": "/members/about-us"}
  ],
  "menus": {
    "members": [
      {"label": "Why us", "columns": [
        {"items": [
          {"label": "Compare super", "href": "/members/why-us/compare-super"},
          {"label": "Industry SuperFund", "href": "/members/why-us/industry-super"},
          {"label": "Member benefits", "href": "/members/why-us/member-benefits"},
          {"label": "Awards", "href": "/members/why-us/awards"},
          {"label": "Fees and costs", "href": "/members/why-us/fees-and-costs"}
        ]}
      ]},
      {"label": "Super", "columns": [
        {"title": "Grow your super", "items": [
          {"label": "Salary sacrifice", "href": "/members/super/grow/salary-sacrifice"},
          {"label": "After-tax contributions", "href": "/members/super/grow/after-tax"},
          {"label": "Super co-contribution", "href": "/members/super/grow/co-contribution"},
          {"label": "Contribution limits", "href": "/members/super/grow/limits"},
          {"label": "Spouse contributions", "href": "/members/super/grow/spouse"}
        ]},
        {"items": [
          {"label": "Combine your super", "href": "/members/super/combine"},
          {"label": "Changing jobs", "href": "/members/super/changing-jobs"},
          {"label": "Accessing your super", "href": "/members/retirement/access-your-super-in-retirement"}
        ]},
        {"title": "Life changes", "items": [
          {"label": "Downsizer contributions", "href": "/members/super/life/downsizer"},
          {"label": "First home buyers super scheme", "href": "/members/super/life/fhss"},
          {"label": "Nominating beneficiaries", "href": "/members/super/life/beneficiaries"}
        ]}
      ]},
      {"label": "Insurance", "columns": [
        {"items": [
          {"label": "Insurance through super", "href": "/members/insurance"},
          {"label": "Change your cover", "href": "/members/insurance/change-cover"},
          {"label": "Make a claim", "href": "/members/insurance/make-a-claim"}
        ]}
      ]},
      {"label": "Investments", "columns": [
        {"title": "Your investments", "items": [
          {"label": "Investment performance", "href": "/members/investments/performance"},
          {"label": "Unit pricing", "href": "/members/investments/performance/unit-pricing"},
          {"label": "Your investment options", "href": "/members/investments/options"},
          {"label": "Direct Investment option", "href": "/members/investments/options/direct"},
          {"label": "MySuper Product Dashboard", "href": "/members/investments/mysuper"},
          {"label": "Choosing your investment", "href": "/members/investments/choosing"}
        ]}
      ]},
      {"label": "Our investing", "columns": [
        {"items": [
          {"label": "How we invest", "href": "/members/investments/how-we-invest"},
          {"label": "Investment philosophy", "href": "/members/investments/how-we-invest/philosophy"},
          {"label": "Responsible investing", "href": "/members/investments/how-we-invest/responsible"},
          {"label": "Sustainable Balanced Option", "href": "/members/investments/how-we-invest/sustainable-balanced"},
          {"label": "Portfolio holdings", "href": "/members/investments/holdings"}
        ]}
      ]},
      {"label": "Retirement", "columns": [
        {"title": "Plan my retirement", "items": [
          {"label": "When can I retire", "href": "/members/retirement/when-can-i-retire"},
          {"label": "Retirement readiness checklist", "href": "/members/retirement/readiness-checklist"},
          {"label": "How much do I need to retire", "href": "/members/retirement/how-much"},
          {"label": "Compare my spend", "href": "/members/retirement/compare-my-spend"},
          {"label": "Age pension", "href": "/members/retirement/age-pension"},
          {"label": "Access your super in retirement", "href": "/members/retirement/access-your-super-in-retirement"}
        ]},
        {"title": "Start my retirement", "items": [
          {"label": "Income options", "href": "/members/retirement/income-options"},
          {"label": "Transition to Retirement", "href": "/members/retirement/income-options/ttr"},
          {"label": "Flexible Income", "href": "/members/retirement/income-options/flexible-income"},
          {"label": "Managed Income", "href": "/members/retirement/income-options/managed-income"},
          {"label": "Open an account", "href": "/members/retirement/open"},
          {"label": "Retirement fees and costs", "href": "/members/retirement/fees"},
          {"label": "Retirement Bonus", "href": "/members/retirement/bonus"},
          {"label": "Manage my account", "href": "/members/retirement/manage-my-account"}
        ]}
      ]},
      {"label": "Advice & Resources", "columns": [
        {"title": "Resources", "items": [
          {"label": "Extra care & support for vulnerable members", "href": "/members/advice-and-resources/extra-care"},
          {"label": "Tools & calculators", "href": "/members/advice-and-resources/tools-calculators"},
          {"label": "Forms & publications", "href": "/forms-publications"},
          {"label": "Education Hub", "href": "/members/advice-and-resources/education-hub"},
          {"label": "News", "href": "/members/advice-and-resources/news"}
        ]},
        {"title": "Advice", "items": [
          {"label": "Get super advice", "href": "/members/advice-and-resources/get-advice"},
          {"label": "Events & webinars", "href": "/members/advice-and-resources/events"},
          {"label": "For Advisers", "href": "/members/advice-and-resources/for-advisers"}
        ]}
      ]}
    ],
    "employers": [
      {"label": "Partner with us", "columns": [
        {"items": [
          {"label": "How we support your business", "href": "/employers/partner-with-us/how-we-support-your-business"},
          {"label": "Make CareSuper your default fund", "href": "/employers/partner-with-us/make-care-super-your-default-fund"},
          {"label": "Employee benefits", "href": "/employers/partner-with-us/employee-benefits"}
        ]}
      ]},
      {"label": "Meet the team", "columns": [
        {"items": [
          {"label": "Meet our super experts", "href": "/employers/meet-the-team"}
        ]}
      ]},
      {"label": "Your super responsibilities", "columns": [
        {"items": [
          {"label": "Your super obligations", "href": "/employers/your-super-responsibilities/your-super-obligations"},
          {"label": "Super for the self-employed", "href": "/employers/your-super-responsibilities/self-employed"}
        ]}
      ]},
      {"label": "Super payments", "columns": [
        {"items": [
          {"label": "How to make super payments", "href": "/employers/super-payments/how-to-make-super-payments"},
          {"label": "What you need to know about super payments", "href": "/employers/super-payments/how-to-make-super-payments#learn-more"},
          {"label": "Register your business", "href": "/employers/super-payments/register"},
          {"label": "Important USI information", "href": "/employers/super-payments/usi"}
        ]}
      ]},
      {"label": "FAQs", "columns": [
        {"items": [
          {"label": "QuickSuper FAQs", "href": "/employers/super-payments/quicksuper-faqs"}
        ]}
      ]}
    ]
  }
}
```

---

## 6) Components & Contracts

### `<Header />` ✅ COMPLETE

- **Props:** `{ context: "members" | "employers", navigationData: NavigationData, currentPath?: string, sticky?: boolean, condensed?: boolean }`
- **Data source:** `/config/navigation.ts`
- **Features:** Context switching, sticky behavior, responsive design
- **Logo:** Integrated CareSuper logo component
- **Analytics ready:** Event hooks for tracking (optional)

### `<MenuTrigger />` ✅ COMPLETE

- **Props:** `{ label, isActive, isExpanded, onMouseEnter, onMouseLeave, onClick, children }`
- **ARIA:** Complete keyboard & screen reader support
- **Behavior:** Hover intent delays, focus management
- **Styling:** Active states, hover effects, focus rings

### `<MegaPanel />` ✅ COMPLETE

- **Props:** `{ data: MenuGroup, isOpen, onMouseEnter, onMouseLeave }`
- **Layout:** Responsive grid with column support
- **Features:** Section titles, nested navigation, external link indicators
- **Animation:** Smooth open/close transitions

### `<MobileNav />` ✅ COMPLETE

- **Props:** `{ isOpen, onClose, context, navigationData }`
- **Features:** Full-screen drawer, accordion sections, search integration
- **CTAs:** Context-aware login/join buttons in footer
- **Accessibility:** Complete keyboard and screen reader support

---

## 7) State & Behaviour

- Use **controlled state** at header level: `openIndex` (`null | number`).
- Close on `Escape`, outside click, route change.
- Persist last active context (members/employers) in URL or localStorage (optional).

---

## 8) Performance

- Avoid layout shift: reserve panel space with `transform` + `opacity` transitions only.
- Lazy‑render panel content (portals) after first open; prefetch route hrefs on hover (`next/link prefetch`).
- Use `next/image` for icons if bitmap; otherwise inline SVG.

---

## 9) Theming & Tokens

- Centralise colours/spacing/typography via Tailwind config tokens (`theme.extend.colors.caresuper.*`).
- Map brand green (~emerald) + neutrals; ensure AA contrast variants.

---

## 10) Analytics & Telemetry

- Data attributes: `data-nav="{context}"`, `data-group="{label}"`, `data-item="{label}"`.
- Fire events on open/close/item click; include depth, index, href.

---

## 11) Next.js Integration

- App Router (RSC) with client components for interactive parts only (Header, MobileNav, SearchDialog).
- Edge‑cache static menu JSON; ISR 24h.
- `prefetch={false}` for external links; `target="_blank" rel="noopener"` when crossing domains.

---

## 12) QA Checklist (go‑live)

- Keyboard trace covers all menu items on both contexts.
- Screen reader labels read group headings before links.
- Hover intent & close delay tuned; no accidental closes.
- Mobile accordion persists scroll position; no body scroll while open.
- Sticky variant applied post‑scroll; shadow visible.
- Links and CTAs verified (Members → AOL; Employers → QuickSuper).

---

## 13) Out‑of‑scope (for now)

- Personalisation of IA per user segment.
- Search indexing and autosuggest backend.
- Dark mode visuals beyond baseline support.

---

## 14) Nice‑to‑haves

- User context switcher (Members ↔ Employers) with remembered preference.
- CMS‑driven menu JSON with preview mode.

---

## 15) Implementation Complete ✅

### Files Created:
- ✅ `packages/ui/src/organisms/Header.tsx` - Main header component
- ✅ `packages/ui/src/organisms/Header.stories.tsx` - Storybook stories
- ✅ `packages/ui/src/organisms/MegaPanel.tsx` - Mega menu panels
- ✅ `packages/ui/src/organisms/MobileNav.tsx` - Mobile navigation drawer
- ✅ `packages/ui/src/organisms/MenuTrigger.tsx` - Menu trigger buttons
- ✅ `packages/ui/src/config/navigation.ts` - Navigation data
- ✅ `packages/ui/src/types/navigation.ts` - TypeScript type definitions

### Storybook Stories:
- ✅ Members Context - Full mega menu navigation
- ✅ Employers Context - Context-switched navigation
- ✅ Mobile Navigation - Drawer and accordion behavior
- ✅ Sticky Header - Condensed sticky variant
- ✅ Interactive Examples - Hover states and animations

### Features Implemented:
- ✅ Context switching between Members/Employers
- ✅ Mega menu with multi-column layouts
- ✅ Mobile accordion navigation
- ✅ Sticky header with condensed variant
- ✅ Complete accessibility implementation
- ✅ Logo integration with official SVG
- ✅ Phone number integration
- ✅ External link indicators
- ✅ Hover intent delays and focus management

### Testing & QA:
- ✅ Keyboard navigation fully functional
- ✅ Screen reader compatibility verified
- ✅ Mobile touch targets meet requirements
- ✅ Context switching working correctly
- ✅ All links and CTAs functional
- ✅ Responsive behavior confirmed across breakpoints
