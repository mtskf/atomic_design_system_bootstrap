import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/cn";

const layoutStyles = cva(
  "min-h-screen bg-white flex flex-col",
  {
    variants: {
      sidebar: {
        none: "",
        left: "lg:flex-row",
        right: "lg:flex-row-reverse",
      },
    },
    defaultVariants: {
      sidebar: "none",
    },
  }
);

const sidebarStyles = cva(
  "bg-light-grey-50 border-light-grey-200",
  {
    variants: {
      sidebar: {
        none: "hidden",
        left: "hidden lg:block lg:w-64 border-r",
        right: "hidden lg:block lg:w-64 border-l",
      },
      width: {
        sm: "lg:w-48",
        md: "lg:w-64",
        lg: "lg:w-80",
      },
    },
    defaultVariants: {
      sidebar: "none",
      width: "md",
    },
  }
);

export interface PageLayoutProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof layoutStyles> {
  /**
   * Header content
   */
  header?: React.ReactNode;
  /**
   * Footer content
   */
  footer?: React.ReactNode;
  /**
   * Sidebar content
   */
  sidebarContent?: React.ReactNode;
  /**
   * Sidebar width
   */
  sidebarWidth?: VariantProps<typeof sidebarStyles>["width"];
}

/**
 * PageLayout template for consistent page structure
 *
 * @example
 * ```tsx
 * <PageLayout
 *   header={<Header />}
 *   footer={<Footer />}
 *   sidebar="left"
 *   sidebarContent={<Navigation />}
 * >
 *   <main>Page content</main>
 * </PageLayout>
 * ```
 */
const PageLayoutRoot = React.forwardRef<HTMLDivElement, PageLayoutProps>(
  ({
    className,
    sidebar,
    sidebarWidth,
    header,
    footer,
    sidebarContent,
    children,
    ...rest
  }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(layoutStyles({ sidebar }), className)}
        {...rest}
      >
        {/* Skip to content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-mid-blue-500 text-white px-4 py-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          Skip to main content
        </a>

        {/* Header */}
        {header && (
          <header role="banner" className="shrink-0">
            {header}
          </header>
        )}

        {/* Main content area with optional sidebar */}
        <div className="flex-1 flex">
          {/* Sidebar */}
          {sidebarContent && (
            <aside
              className={cn(sidebarStyles({ sidebar, width: sidebarWidth }))}
              role="complementary"
            >
              <div className="p-6">
                {sidebarContent}
              </div>
            </aside>
          )}

          {/* Main content */}
          <main
            id="main-content"
            role="main"
            className="flex-1 min-w-0"
          >
            {children}
          </main>
        </div>

        {/* Footer */}
        {footer && (
          <footer role="contentinfo" className="shrink-0">
            {footer}
          </footer>
        )}
      </div>
    );
  }
);

PageLayoutRoot.displayName = "PageLayout";

// Sub-components for common layout elements
export interface HeaderProps extends React.HTMLAttributes<HTMLElement> {}

export const Header = React.forwardRef<HTMLElement, HeaderProps>(
  ({ className, children, ...rest }, ref) => {
    return (
      <header
        ref={ref}
        className={cn(
          "bg-white border-b border-light-grey-200 px-6 py-4",
          className
        )}
        {...rest}
      >
        {children}
      </header>
    );
  }
);

Header.displayName = "Header";

export interface FooterProps extends React.HTMLAttributes<HTMLElement> {}

export const Footer = React.forwardRef<HTMLElement, FooterProps>(
  ({ className, children, ...rest }, ref) => {
    return (
      <footer
        ref={ref}
        className={cn(
          "bg-light-grey-50 border-t border-light-grey-200 px-6 py-8",
          className
        )}
        {...rest}
      >
        {children}
      </footer>
    );
  }
);

Footer.displayName = "Footer";

export interface MainContentProps extends React.HTMLAttributes<HTMLElement> {}

export const MainContent = React.forwardRef<HTMLElement, MainContentProps>(
  ({ className, children, ...rest }, ref) => {
    return (
      <main
        ref={ref}
        className={cn("px-6 py-8", className)}
        {...rest}
      >
        {children}
      </main>
    );
  }
);

MainContent.displayName = "MainContent";

type PageLayoutComponent = React.ForwardRefExoticComponent<PageLayoutProps & React.RefAttributes<HTMLDivElement>> & {
  Header: typeof Header;
  Footer: typeof Footer;
  MainContent: typeof MainContent;
};

export const PageLayout = Object.assign(PageLayoutRoot, {
  Header,
  Footer,
  MainContent,
}) as PageLayoutComponent;
