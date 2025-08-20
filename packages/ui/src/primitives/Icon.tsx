import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/cn";
import * as LucideIcons from "lucide-react";

// Type for Lucide icon names
export type LucideIconName = keyof typeof LucideIcons;

const iconStyles = cva(
  "inline-flex shrink-0",
  {
    variants: {
      size: {
        xs: "w-4 h-4",
        sm: "w-5 h-5",
        md: "w-6 h-6",
        lg: "w-8 h-8",
        xl: "w-12 h-12",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export interface IconProps
  extends Omit<React.SVGProps<SVGSVGElement>, "size">,
    VariantProps<typeof iconStyles> {
  /**
   * Icon name for semantic meaning
   */
  name?: string;
  /**
   * Whether the icon is decorative (aria-hidden) or semantic
   */
  decorative?: boolean;
}

export interface LucideIconProps
  extends Omit<IconProps, "children"> {
  /**
   * Lucide icon name to render
   */
  iconName: LucideIconName;
}

/**
 * Icon component for displaying SVG icons with consistent sizing
 *
 * @example
 * ```tsx
 * <Icon size="lg" aria-label="Close">
 *   <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth={2} />
 * </Icon>
 * ```
 */
export const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, size, decorative = true, children, name, ...rest }, ref) => {
    return (
      <svg
        ref={ref}
        className={cn(iconStyles({ size }), className)}
        fill="none"
        viewBox="0 0 24 24"
        aria-hidden={decorative ? "true" : undefined}
        aria-label={!decorative && !rest["aria-label"] ? name : undefined}
        role={!decorative ? "img" : undefined}
        {...rest}
      >
        {children}
      </svg>
    );
  }
);

Icon.displayName = "Icon";

/**
 * Lucide Icon component for rendering icons from the Lucide icon set
 *
 * @example
 * ```tsx
 * <LucideIcon iconName="Heart" size="lg" className="text-red-500" />
 * <LucideIcon iconName="Settings" size="sm" decorative={false} name="Settings menu" />
 * ```
 */
export const LucideIcon = React.forwardRef<SVGSVGElement, LucideIconProps>(
  ({ iconName, className, size, decorative = true, name, ...rest }, ref) => {
    const IconComponent = LucideIcons[iconName] as React.ComponentType<any>;

    if (!IconComponent) {
      console.warn(`Icon "${iconName}" not found in Lucide icons`);
      return null;
    }

    return (
      <IconComponent
        ref={ref}
        className={cn(iconStyles({ size }), className)}
        aria-hidden={decorative ? "true" : undefined}
        aria-label={!decorative && !rest["aria-label"] ? name || iconName : undefined}
        role={!decorative ? "img" : undefined}
        {...rest}
      />
    );
  }
);

LucideIcon.displayName = "LucideIcon";

// Common icon components
export const ChevronDownIcon = (props: Omit<IconProps, 'children'>) => (
  <Icon {...props}>
    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
  </Icon>
);

export const CloseIcon = (props: Omit<IconProps, 'children'>) => (
  <Icon {...props}>
    <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
  </Icon>
);

export const CheckIcon = (props: Omit<IconProps, 'children'>) => (
  <Icon {...props}>
    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
  </Icon>
);

export const ExternalLinkIcon = (props: Omit<IconProps, 'children'>) => (
  <Icon {...props}>
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15 3h6v6M10 14L21 3" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
  </Icon>
);

export const AlertTriangleIcon = (props: Omit<IconProps, 'children'>) => (
  <Icon {...props}>
    <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    <line x1="12" y1="9" x2="12" y2="13" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    <line x1="12" y1="17" x2="12.01" y2="17" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
  </Icon>
);

export const InfoIcon = (props: Omit<IconProps, 'children'>) => (
  <Icon {...props}>
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={2} />
    <line x1="12" y1="16" x2="12" y2="12" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    <line x1="12" y1="8" x2="12.01" y2="8" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
  </Icon>
);
