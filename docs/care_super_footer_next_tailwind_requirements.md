# CareSuper Footer — Next.js + Tailwind Implementation Status

Last updated: 20 Dec 2024 (AEST)

## 0) Implementation Status ✅ COMPLETED

Footer component has been fully implemented in Next.js (App Router) with Tailwind CSS. Includes responsive design, accessibility features, and complete component architecture with current IA and compliance content.

---

## 1) Information Architecture (normalised from current site)

### Footer blocks (desktop) ✅ IMPLEMENTED

**Current Layout: 3-column equal width grid (33.33% each)**

1) **About** (Column 1 - 33%)
   - About us → `/members/about-us`
   - Careers → `/members/about-us/careers`
   - Complaints handling → `/members/complaints`
   - Keeping your information safe → `/members/keeping-your-information-safe`
   - Terms of use → `/members/terms-of-use`
   - Whistleblower information → `/members/whistleblower-information`
   - Privacy policy → `/members/privacy-policy`
   - FAQs → `/members/faqs`

2) **Fund details + Connect with us** (Column 2 - 33%)
   - **Fund details:**
     - USI: `MTA0100AU`
     - Fund name: `CareSuper`
     - ABN: `74 559 365 913`
     - Industry SuperFund membership badges
   - **Connect with us:**
     - Socials: LinkedIn, Facebook, X/Twitter, YouTube (icons with SR labels)

3) **Our awards** (Column 3 - 33%)
   - Award listings: CSBA Top 3 Service (2024), SuperRatings, Chant West, Rainmaker ESG Leader, The Heron Partnership
   - Each award links to external methodology/info

**Full-width sections:**
4) **Acknowledgement of Country** (Full width)
   - Indigenous acknowledgement paragraph

5) **Legal/compliance disclosures** (Full width - Collapsible)
   - General advice warning
   - PDS/TMD/FSG links
   - Past performance disclaimer
   - Trustee/AFSL/ABN line
   - Copyright line `© 2025 CareSuper`

**Note:** Support section and CareSuper app section have been moved to separate ContactUs component

### Mobile ✅ IMPLEMENTED

- All content in collapsible accordions: **About**, **Fund details**, **Connect**, **Awards**, **Acknowledgement**, **Disclosures**
- About section opens by default
- Legal disclosures collapsible by default
- Social icons remain accessible in Connect section
- Smooth accordion animations with chevron indicators

---

## 2) Accessibility (WCAG 2.2 AA) ✅ IMPLEMENTED

- **Landmarks:** ✅ Footer wrapped with `<footer aria-labelledby="footer-title">` with visually hidden heading
- **Section headings:** ✅ Proper `<h2>` elements with unique IDs and `aria-labelledby` on groups
- **Keyboard navigation:** ✅ All interactive elements reachable with logical tab order and focus styles
- **Focus management:** ✅ `focus-visible:ring-2 ring-offset-2` implemented throughout
- **Social icons:** ✅ Proper `aria-label` on all social links with descriptive text
- **Accordion ARIA:** ✅ `aria-expanded`, `aria-controls`, and `aria-labelledby` properly implemented
- **Content structure:** ✅ Semantic HTML with proper heading hierarchy and readable line-length
- **Screen reader support:** ✅ `sr-only` classes for hidden descriptive text where needed

---

## 4) Behaviour/Responsive

- Mobile accordions: Headings become buttons with chevrons; default open **Support** & **About**, others collapsed.
- Persist accordion state in memory (optional).
- External links open in new tab with `rel="noopener"`.
- Store badges are external; provide hidden text like `span.sr-only` for store names.

---

## 5) Data Model (JSON)

```json
{
  "support": {
    "phone": "1800 005 166",
    "hours": "8am – 7pm, Monday - Friday (AEST/AEDT)",
    "links": [
      {"label": "Enquire online", "href": "/members/contact-us#enquire"},
      {"label": "Contact Us", "href": "/members/contact-us"}
    ]
  },
  "app": {
    "copy": "Download the CareSuper app and manage your account on the go!",
    "links": [
      {"type": "appstore", "href": "https://apps.apple.com/au/app/caresuper-app/idXXXXXXXX"},
      {"type": "playstore", "href": "https://play.google.com/store/apps/details?id=au.com.caresuper"},
      {"type": "internal", "label": "Learn about the app", "href": "/members/app"}
    ]
  },
  "about": [
    {"label": "About us", "href": "/members/about-us"},
    {"label": "Careers", "href": "/members/about-us/careers"},
    {"label": "Complaints handling", "href": "/members/complaints"},
    {"label": "Keeping your information safe", "href": "/members/keeping-your-information-safe"},
    {"label": "Terms of use", "href": "/members/terms-of-use"},
    {"label": "Whistleblower information", "href": "/members/whistleblower-information"},
    {"label": "Privacy policy", "href": "/members/privacy-policy"},
    {"label": "FAQs", "href": "/members/faqs"}
  ],
  "fundDetails": {
    "usi": "MTA0100AU",
    "name": "CareSuper",
    "abn": "74 559 365 913",
    "badges": [
      {"type": "industry-superfund", "src": "/assets/brand/industry-superfund.svg", "alt": "Industry SuperFund membership"}
    ]
  },
  "awards": [
    {"name": "CSBA Top 3 Service (2024)", "href": "https://www.csba.com.au"},
    {"name": "SuperRatings", "href": "https://www.superratings.com.au"},
    {"name": "Chant West", "href": "https://www.chantwest.com.au"},
    {"name": "Rainmaker ESG Leader", "href": "https://www.rainmaker.com.au"},
    {"name": "The Heron Partnership", "href": "https://www.heronpartners.com.au"}
  ],
  "social": [
    {"icon": "linkedin", "href": "https://www.linkedin.com/company/caresuper"},
    {"icon": "facebook", "href": "https://www.facebook.com/CareSuper"},
    {"icon": "x", "href": "https://twitter.com/CareSuper"},
    {"icon": "youtube", "href": "https://www.youtube.com/@CareSuper"}
  ],
  "acknowledgement": {
    "text": "We acknowledge and pay our respects to Aboriginal and Torres Strait Islander Peoples as the First Peoples of Australia, whose ancestral lands and waters we work and live on throughout Australia. We honour the wisdom of, and pay respects to, Elders past and present."
  },
  "disclosures": {
    "generalAdvice": "This is general information only and doesn’t take into account your objectives, financial situation or needs.",
    "pds": {
      "copy": "Before making a decision about CareSuper, read our Product disclosure statement, Target market determination and Financial services guide.",
      "hrefs": {"pds": "/pds", "tmd": "/pds", "fsg": "/fsg"}
    },
    "pastPerformance": "Past performance isn’t a reliable indicator of future performance.",
    "trustee": "CareSuper Pty Ltd (Trustee) ABN 14 008 650 628, AFSL 238718. CareSuper (Fund) ABN 74 559 365 913. Advice is provided by CareSuper Advice ABN 78 102 167 877, AFSL 284443.",
    "copyright": "© 2025 CareSuper"
  }
}
```

---

## 6) Components ✅ IMPLEMENTED

### `<Footer />` ✅ COMPLETE
- **Props:** `{ data?: FooterData, className?: string }`
- **Data source:** `/config/footer.config.json`
- **Regions:** About, FundDetails, Awards, Social (within FundDetails), Acknowledgement, Disclosures
- **Responsive:** ✅ Automatic accordion behavior on mobile (< lg breakpoint)
- **Layout:** 3-column equal width grid on desktop, stacked on mobile

### `<FooterSection />` ✅ COMPLETE
- **Props:** `{ title, ariaId, children, collapsible?, defaultOpen?, className? }`
- **Features:** Collapsible accordion with smooth animations, proper ARIA attributes
- **Behavior:** Desktop shows all content, mobile shows collapsible sections

### `<SocialLinks />` ✅ COMPLETE
- **Props:** `{ links: Array<{icon, href}>, className? }`
- **Icons:** LinkedIn, Facebook, X/Twitter, YouTube with Lucide icons
- **Accessibility:** ✅ Proper `aria-label` for each platform ("Follow us on LinkedIn", etc.)
- **Styling:** Circular icon buttons with hover states

### `<AwardStrip />` ✅ COMPLETE
- **Props:** `{ awards: Array<{name, href}>, className? }`
- **Layout:** Responsive grid (1 col mobile → 2 col sm → 1 col lg)
- **Features:** External link indicators, hover states, proper focus management
- **Icons:** Award icons with external link indicators

---

## 7) Implementation Notes (Tailwind classes)

- Section titles: `text-sm font-semibold text-slate-900`
- Link list: `space-y-2`
- Phone line: use `<a href="tel:1800005166" class="font-semibold">`
- Badges/logos: `h-10 w-auto` images with `next/image` and `sizes="(max-width: 1024px) 33vw, 200px"`
- Divider between content and legal: `mt-8 pt-8 border-t border-slate-200`
- Legal paragraphs: `text-xs leading-6 text-slate-600 max-w-prose`

---

## 8) Performance

- Optimise badge/logo images; lazy load below the fold.
- Deduplicate icon sprites; inline SVG for crispness.
- Use RSC for static JSON; client-only for accordions.

---

## 9) QA Checklist

- All links work and open correctly (external vs internal handling).
- Phone link dials on mobile.
- Screen readers announce section titles and link purpose.
- Legal copy readable on mobile; not truncated.
- Awards have accessible names; acknowledgement present.

---

## 10) Implementation Complete ✅

### Files Created:
- ✅ `packages/ui/src/organisms/Footer.tsx` - Main footer component
- ✅ `packages/ui/src/organisms/Footer.stories.tsx` - Storybook stories
- ✅ `packages/ui/src/config/footer.config.json` - Footer data configuration
- ✅ `packages/ui/src/organisms/ContactUs.tsx` - Separate contact component (replaces support section)

### Storybook Stories:
- ✅ Default Footer - Desktop grid layout
- ✅ Mobile Footer - Accordion behavior
- ✅ Individual component showcases (FooterSection, SocialLinks, AwardStrip)
- ✅ Accessibility testing integration

### Testing & QA:
- ✅ All links functional and properly attributed
- ✅ Accordion states working correctly
- ✅ Screen reader compatibility verified
- ✅ Mobile responsive behavior confirmed
- ✅ Focus management and keyboard navigation working
