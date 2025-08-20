// Export primitives (Atoms)
export * from "./primitives/Button";
export * from "./primitives/TextField";
export * from "./primitives/Icon";
export * from "./primitives/Spinner";
export * from "./primitives/Badge";
export * from "./primitives/Checkbox";
export * from "./primitives/Radio";
export * from "./primitives/Switch";
export * from "./primitives/Tooltip";
export * from "./primitives/Link";
export * from "./primitives/Select";
export * from "./primitives/Textarea";
export * from "./primitives/Avatar";
export * from "./primitives/Progress";
export * from "./primitives/Skeleton";
export * from "./primitives/EnhancedTextField";
export * from "./primitives/Logo";

// Export molecules
export * from "./molecules/Card";
export * from "./molecules/Alert";
export * from "./molecules/Tabs";
export * from "./molecules/Breadcrumbs";
export * from "./molecules/Accordion";
export * from "./molecules/ButtonGroup";
// Keep legacy export name but ensure no type collisions with investment Document types
export * from "./molecules/Toast";
// (fixed) Modal lives under organisms
export * from "./organisms/Modal";
export * from "./molecules/QuickLinksGrid";

// Export organisms
export { Header as SiteHeader } from "./organisms/Header";
export type { HeaderProps as SiteHeaderProps } from "./organisms/Header";
export * from "./organisms/MenuTrigger";
export * from "./organisms/MegaPanel";
export * from "./organisms/MobileNav";
export { Footer as SiteFooter } from "./organisms/Footer";
export type { FooterProps as SiteFooterProps } from "./organisms/Footer";
export * from "./organisms/ContactUs";
export * from "./organisms/AppDownload";
export * from "./organisms/DocumentList";
export * from "./organisms/InvestmentOptionCard";
export * from "./organisms/InvestmentOptionHeader";
export * from "./organisms/UnitPriceCard";
export * from "./organisms/HeroWithCTAs";
export * from "./molecules/InPageNav";
export * from "./organisms/FAQAccordionGroup";
// export * from "./molecules/AssetAllocation"; // not present
// export * from "./molecules/DocumentsDownloadList"; // not present
export * from "./molecules/GeneralAdviceWarning";
// export * from "./molecules/PerformanceChart"; // not present

// Export templates
export * from "./templates/PageLayout";

// Export utilities
export * from "./utils/cn";
export * from "./utils/format";

// Export types
export * from "./types/navigation";
export * from "./types/investments";

// Export configuration
export * from "./config/navigation";

// Note: Do not export Storybook-only files from library entrypoint
