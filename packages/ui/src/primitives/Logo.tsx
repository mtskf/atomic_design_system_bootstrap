import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/cn";
import LogoSVG from "../assets/images/logo.svg";

const logoStyles = cva(
  "inline-flex items-center font-brand-bold transition-colors",
  {
    variants: {
      size: {
        sm: "text-lg",
        md: "text-xl",
        lg: "text-2xl",
        xl: "text-3xl",
      },
      variant: {
        default: "text-mid-blue-500",
        white: "text-white",
        dark: "text-inky-blue-500",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "default",
    },
  }
);

export interface LogoProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof logoStyles> {
  /**
   * Custom href for logo link
   */
  href?: string;
  /**
   * Additional className
   */
  className?: string;
}

/**
 * CareSuper Logo component using official SVG
 *
 * @example
 * ```tsx
 * <Logo size="lg" />
 * <Logo variant="white" href="/members" />
 * ```
 */
export const Logo = React.forwardRef<HTMLAnchorElement, LogoProps>(
  ({ size, variant, href = "/", className, ...rest }, ref) => {
    return (
      <a
        ref={ref}
        href={href}
        className={cn(logoStyles({ size, variant }), className)}
        aria-label="CareSuper homepage"
        {...rest}
      >
        <img
          src={LogoSVG}
          alt="CareSuper"
          className={cn(
            "flex-shrink-0",
            size === "sm" && "h-8",
            size === "md" && "h-10",
            size === "lg" && "h-12",
            size === "xl" && "h-16"
          )}
        />
      </a>
    );
  }
);

Logo.displayName = "Logo";