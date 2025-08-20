import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/cn";

const spinnerStyles = cva(
  "animate-spin inline-flex shrink-0",
  {
    variants: {
      size: {
        xs: "w-4 h-4",
        sm: "w-5 h-5",
        md: "w-6 h-6",
        lg: "w-8 h-8",
      },
      color: {
        primary: "text-mid-blue-500",
        current: "text-current",
        white: "text-white",
      },
    },
    defaultVariants: {
      size: "md",
      color: "primary",
    },
  }
);

export interface SpinnerProps
  extends Omit<React.SVGProps<SVGSVGElement>, "size" | "color">,
    VariantProps<typeof spinnerStyles> {
  /**
   * Screen reader label for the loading state
   */
  label?: string;
}

/**
 * Spinner component for loading states
 *
 * @example
 * ```tsx
 * <Spinner size="lg" label="Loading content" />
 * ```
 */
export const Spinner = React.forwardRef<SVGSVGElement, SpinnerProps>(
  ({ className, size, color, label = "Loading", ...rest }, ref) => {
    return (
      <>
        <svg
          ref={ref}
          className={cn(spinnerStyles({ size, color }), className)}
          fill="none"
          viewBox="0 0 24 24"
          aria-live="polite"
          aria-label={label}
          role="status"
          {...rest}
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
        <span className="sr-only">{label}</span>
      </>
    );
  }
);

Spinner.displayName = "Spinner";
