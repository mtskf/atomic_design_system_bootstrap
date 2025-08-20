# Component Implementation Checklist

Last Updated: 2025-08-20 / Author: Design Engineering

Essential checklist items for component implementation. Each component must meet the following requirements before production release.

---

## Common Implementation Checklist

### Basic Requirements
- [ ] No errors in TypeScript strict mode
- [ ] ESLint/Prettier formatting rules applied
- [ ] Use design tokens only (no direct color/size values)
- [ ] Variant management with CVA (class-variance-authority)
- [ ] Use Tailwind CSS utility classes only

### Accessibility (A11y)
- [ ] Keyboard navigation support
- [ ] Focus display (focus-visible:ring-2 ring-offset-2)
- [ ] Proper ARIA attributes setup
- [ ] Screen reader support
- [ ] WCAG 2.2 AA contrast ratio compliance
- [ ] Storybook a11y addon green

### API Design
- [ ] Complete props type definitions
- [ ] Default value settings
- [ ] Clear controlled/uncontrolled support
- [ ] Unified event handler naming (onClick, onOpenChange, etc.)
- [ ] aria-* passthrough with ...rest props
- [ ] asChild prop support (when applicable)

### Documentation & Testing
- [ ] Create Storybook stories (CSF3 format)
- [ ] Auto-generated Props table
- [ ] Interaction tests (Play function)
- [ ] React Testing Library unit tests
- [ ] Usage examples in JSDoc
- [ ] Responsive design verification

---

## Atoms (Basic Elements)

### Button
- [ ] **Variants**: primary/secondary/ghost/danger
- [ ] **Sizes**: sm/md/lg
- [ ] **States**: default/hover/focus/active/disabled/loading
- [ ] **Icons**: leftIcon/rightIcon slot support
- [ ] **Accessibility**:
  - [ ] aria-busy when loading
  - [ ] aria-label for icon-only buttons
  - [ ] aria-disabled when disabled
- [ ] **API**: onClick, asChild, fullWidth, loading
- [ ] **Implementation**: Separate Spinner component

### Link
- [ ] **Variants**: default/subtle/accent
- [ ] **External links**: automatic external icon display
- [ ] **Download**: download attribute support
- [ ] **Next.js integration**: Next Link wrapping
- [ ] **Accessibility**:
  - [ ] aria-label for external links
  - [ ] rel="noopener noreferrer" for external
- [ ] **API**: href, external, download, target

### Input/TextField
- [ ] **Composition**: Label + Input + Helper + Error + Counter
- [ ] **Types**: text/email/password/number/search
- [ ] **States**: default/focus/error/disabled/readonly
- [ ] **Decoration**: prefix/suffix support
- [ ] **Accessibility**:
  - [ ] id and aria-describedby coordination
  - [ ] aria-invalid on error
  - [ ] aria-required for required
- [ ] **API**: value/defaultValue, onChange, maxLength, required

### Select/Dropdown
- [ ] **Native select**: mobile support
- [ ] **Custom select**: keyboard navigation
- [ ] **Search functionality**: large option set support
- [ ] **Multi-selection**: Checkbox integration
- [ ] **Accessibility**:
  - [ ] aria-expanded, aria-haspopup
  - [ ] role="combobox" or role="listbox"
- [ ] **API**: options[], value, onSelectionChange

### Checkbox/Radio
- [ ] **Visual states**: checked/unchecked/indeterminate/disabled
- [ ] **Grouping**: fieldset + legend
- [ ] **Custom styling**: brand color application
- [ ] **Accessibility**:
  - [ ] aria-checked, aria-disabled
  - [ ] role="checkbox"/"radio"
- [ ] **API**: checked/defaultChecked, onChange, indeterminate

### Switch/Toggle
- [ ] **Visual**: clear ON/OFF state indication
- [ ] **Sizes**: sm/md/lg
- [ ] **Labels**: internal text display
- [ ] **Accessibility**:
  - [ ] role="switch"
  - [ ] aria-checked
- [ ] **API**: checked, onChange, size

### Tooltip/Popover
- [ ] **Triggers**: hover/focus/click
- [ ] **Placement**: top/bottom/left/right + auto-positioning
- [ ] **ESC key**: close action
- [ ] **Focus trap**: for Popover
- [ ] **Accessibility**:
  - [ ] aria-describedby for Tooltip
  - [ ] role="tooltip"/"dialog"
- [ ] **API**: content, placement, trigger

### Badge/Tag
- [ ] **Variants**: default/primary/success/warning/danger
- [ ] **Sizes**: sm/md/lg
- [ ] **Remove functionality**: removable Tag
- [ ] **Accessibility**:
  - [ ] aria-label for remove button
- [ ] **API**: variant, size, removable, onRemove

### Icon
- [ ] **Sizes**: xs/sm/md/lg/xl (16px-48px)
- [ ] **Color**: currentColor inheritance
- [ ] **SVG optimization**: using @svgr/webpack
- [ ] **Accessibility**:
  - [ ] aria-hidden="true" for decorative
  - [ ] aria-label for semantic icons
- [ ] **API**: name, size, className

### Spinner/Loading
- [ ] **Sizes**: xs/sm/md/lg
- [ ] **Colors**: primary/current/white
- [ ] **Animations**: spin/pulse/bounce
- [ ] **Accessibility**:
  - [ ] aria-live="polite"
  - [ ] aria-label="Loading"
- [ ] **API**: size, color, variant

### Skeleton
- [ ] **Shapes**: text/circle/rectangle
- [ ] **Sizing**: auto-resize support
- [ ] **Animations**: pulse/wave
- [ ] **Accessibility**:
  - [ ] aria-live="polite"
  - [ ] aria-label="Loading content"
- [ ] **API**: variant, width, height, lines

---

## Molecules (Composite Elements)

### Card
- [ ] **Variants**: default/outlined/elevated/interactive
- [ ] **Composition**: Header + Body + Footer
- [ ] **Interaction**: clickable card support
- [ ] **Accessibility**:
  - [ ] role="article" or "region"
  - [ ] tabindex="0" for interactive
- [ ] **API**: variant, clickable, onClick

### Tabs
- [ ] **Orientation**: horizontal/vertical
- [ ] **Styles**: default/pills/underline
- [ ] **Keyboard navigation**: Arrow keys
- [ ] **Accessibility**:
  - [ ] role="tablist", "tab", "tabpanel"
  - [ ] aria-selected, aria-controls
- [ ] **API**: orientation, variant, activeTab, onTabChange

### Accordion
- [ ] **Expand mode**: single/multiple
- [ ] **Animation**: collapse/expand
- [ ] **Icon**: expand state indicator
- [ ] **Accessibility**:
  - [ ] aria-expanded, aria-controls
  - [ ] role="button" for trigger
- [ ] **API**: type, defaultExpanded, onExpandedChange

### Breadcrumbs
- [ ] **Separator**: customizable
- [ ] **Truncation**: long path support
- [ ] **Current page**: aria-current="page"
- [ ] **Accessibility**:
  - [ ] nav landmark
  - [ ] aria-label="Breadcrumb"
- [ ] **API**: items[], separator, maxItems

### Pagination
- [ ] **Display format**: numbers/simple/compact
- [ ] **Page jump**: direct input
- [ ] **Info display**: "1-10 of 100 items"
- [ ] **Accessibility**:
  - [ ] aria-label for page links
  - [ ] aria-current for current page
- [ ] **API**: total, pageSize, current, onChange

### SearchBar
- [ ] **Features**: search/clear/suggestions
- [ ] **Shortcuts**: ⌘K support
- [ ] **History**: recent searches
- [ ] **Accessibility**:
  - [ ] role="search"
  - [ ] aria-label, aria-describedby
- [ ] **API**: value, onChange, onSearch, suggestions

### Alert
- [ ] **Variants**: info/success/warning/error
- [ ] **Actions**: dismiss/CTA button
- [ ] **Icons**: variant-specific
- [ ] **Accessibility**:
  - [ ] role="alert" for errors
  - [ ] aria-live for updates
- [ ] **API**: variant, dismissible, onDismiss

---

## Organisms (Complex Components)

### Header + Navigation
- [ ] **Responsive**: mobile drawer
- [ ] **Mega menu**: multi-level
- [ ] **Search**: integrated search form
- [ ] **Keyboard navigation**: Tab/Arrow/Escape
- [ ] **Accessibility**:
  - [ ] role="navigation"
  - [ ] aria-expanded for dropdowns
- [ ] **API**: items[], user, onSearch

### Footer
- [ ] **Sections**: links/legal/contact
- [ ] **Legal info**: ABN/AFSL numbers
- [ ] **Social links**: icons + links
- [ ] **Accessibility**:
  - [ ] contentinfo landmark
  - [ ] heading structure
- [ ] **API**: sections[], legal, social[]

### Modal/Dialog
- [ ] **Focus trap**: internal circulation
- [ ] **ESC key**: close
- [ ] **Background click**: close (optional)
- [ ] **Scroll control**: body scroll-lock
- [ ] **Accessibility**:
  - [ ] aria-modal="true"
  - [ ] aria-labelledby, aria-describedby
  - [ ] role="dialog"
- [ ] **API**: open, onOpenChange, size, closeOnOverlay

### Toast/Notification
- [ ] **Positioning**: top-right/bottom-left etc.
- [ ] **Auto-dismiss**: timer functionality
- [ ] **Actions**: Undo/Retry
- [ ] **Stack management**: multiple display
- [ ] **Accessibility**:
  - [ ] aria-live="polite"/"assertive"
  - [ ] role="status"/"alert"
- [ ] **API**: message, variant, duration, actions[]

---

## Templates (Layouts)

### Page Layout
- [ ] **Structure**: Header + Main + Footer
- [ ] **Sidebar**: fixed/variable width
- [ ] **Responsive**: mobile-first
- [ ] **Accessibility**:
  - [ ] landmark roles
  - [ ] skip to content link
- [ ] **API**: sidebar, header, footer

### Grid System
- [ ] **Columns**: 1-12 columns
- [ ] **Gutter**: variable spacing
- [ ] **Breakpoints**: sm/md/lg/xl/2xl
- [ ] **Accessibility**:
  - [ ] logical reading order
- [ ] **API**: columns, gap, responsive

---

## Quality Assurance Checklist

### Performance
- [ ] Tree-shaking support (sideEffects: false)
- [ ] Bundle size optimization
- [ ] Lazy loading support
- [ ] Memoization applied (React.memo, useMemo)

### Security
- [ ] XSS prevention (avoid dangerouslySetInnerHTML)
- [ ] CSP compliance (avoid inline style/script)
- [ ] External links rel attribute

### Internationalization (i18n)
- [ ] Avoid hardcoded text
- [ ] RTL (right-to-left) support
- [ ] Date/number formatting
- [ ] Locale-specific fonts

### Browser Support
- [ ] Modern browser support (Chrome, Firefox, Safari, Edge)
- [ ] Mobile browser support
- [ ] Fallback implementation

### Documentation
- [ ] README.md update
- [ ] CHANGELOG.md record
- [ ] Usage example code
- [ ] Migration guide (for breaking changes)
