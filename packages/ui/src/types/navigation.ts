/**
 * Navigation data types for CareSuper Header
 */

export interface NavItem {
  label: string;
  href: string;
}

export interface NavColumn {
  title?: string;
  items: NavItem[];
}

export interface NavSection {
  label: string;
  columns: NavColumn[];
}

export interface TopLink {
  label: string;
  href: string;
}

export interface CTAUrls {
  loginUrl: string;
  joinUrl: string;
}

export interface NavigationData {
  globals: {
    phone: string;
    cta: {
      members: CTAUrls;
      employers: CTAUrls;
    };
  };
  topLinks: TopLink[];
  menus: {
    members: NavSection[];
    employers: NavSection[];
  };
}

export type NavigationContext = "members" | "employers";
