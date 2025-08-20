import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/cn";
import { Icon } from "./Icon";

const linkStyles = cva(
  "inline-flex items-center gap-1 rounded-sm font-brand-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-mid-blue-500",
  {
    variants: {
      variant: {
        default: "text-mid-blue-500 hover:text-mid-blue-600 active:text-mid-blue-700 underline",
        subtle: "text-inky-blue-500 hover:text-mid-blue-500 hover:underline",
        accent: "text-radiant-green-500 hover:text-radiant-green-600 active:text-radiant-green-700 underline",
        button: "bg-mid-blue-500 text-white hover:bg-mid-blue-600 active:bg-mid-blue-700 px-4 py-2 rounded-md no-underline",
      },
      size: {
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkStyles> {
  /**
   * Whether the link is external (opens in new tab)
   */
  external?: boolean;
  /**
   * Whether to show external link icon
   */
  showExternalIcon?: boolean;
  /**
   * Whether this is a download link
   */
  download?: boolean | string;
  /**
   * Use as child (for Next.js Link wrapper)
   */
  asChild?: boolean;
  /**
   * Custom icon to display
   */
  icon?: React.ReactNode;
  /**
   * Icon position
   */
  iconPosition?: "left" | "right";
}

const ExternalIcon = () => (
  <Icon size="xs" decorative>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
    />
  </Icon>
);

const DownloadIcon = () => (
  <Icon size="xs" decorative>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    />
  </Icon>
);

/**
 * Link component for navigation and external links
 *
 * @example
 * ```tsx
 * <Link href="/about">About Us</Link>
 * <Link href="https://example.com" external>External Site</Link>
 * <Link href="/document.pdf" download>Download PDF</Link>
 * ```
 */
export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({
    className,
    variant,
    size,
    external = false,
    showExternalIcon = true,
    download,
    asChild = false,
    icon,
    iconPosition = "right",
    children,
    href,
    target,
    rel,
    ...rest
  }, ref) => {
    const Comp = asChild ? Slot : "a";

    // Determine if link is external based on href
    const isExternal = external || (href && (href.startsWith("http") || href.startsWith("///")));
    const isDownload = download !== undefined;

    // Set appropriate target and rel attributes
    const linkTarget = target || (isExternal ? "_blank" : undefined);
    const linkRel = rel || (isExternal ? "noopener noreferrer" : undefined);

    // Determine which icon to show
    let displayIcon = icon;
    if (!icon) {
      if (isDownload) {
        displayIcon = <DownloadIcon />;
      } else if (isExternal && showExternalIcon) {
        displayIcon = <ExternalIcon />;
      }
    }

    const content = (
      <>
        {displayIcon && iconPosition === "left" && displayIcon}
        {children}
        {displayIcon && iconPosition === "right" && displayIcon}
      </>
    );

    return (
      <Comp
        ref={ref}
        href={href}
        target={linkTarget}
        rel={linkRel}
        download={download}
        className={cn(linkStyles({ variant, size }), className)}
        aria-label={
          isExternal && !rest["aria-label"]
            ? `${children} (opens in new tab)`
            : rest["aria-label"]
        }
        {...rest}
      >
        {content}
      </Comp>
    );
  }
);

Link.displayName = "Link";

// Next.js Link wrapper component
export interface NextLinkProps extends Omit<LinkProps, "asChild"> {
  /**
   * Next.js Link component
   */
  NextLink?: React.ComponentType<any>;
  /**
   * Next.js Link props
   */
  linkProps?: Record<string, any>;
}

export const NextLink = React.forwardRef<HTMLAnchorElement, NextLinkProps>(
  ({ NextLink: NextLinkComponent, linkProps, href, ...props }, ref) => {
    if (!NextLinkComponent) {
      console.warn("NextLink component not provided, falling back to regular Link");
      return <Link ref={ref} href={href} {...props} />;
    }

    return (
      <NextLinkComponent href={href} {...linkProps}>
        <Link ref={ref} asChild {...props} />
      </NextLinkComponent>
    );
  }
);

NextLink.displayName = "NextLink";
