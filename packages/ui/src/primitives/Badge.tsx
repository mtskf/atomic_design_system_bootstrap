import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/cn";
import { CloseIcon } from "./Icon";

const badgeStyles = cva(
  "inline-flex items-center rounded-full font-brand-medium transition-colors",
  {
    variants: {
      variant: {
        default: "bg-light-grey-200 text-inky-blue-500",
        primary: "bg-mid-blue-500 text-white",
        success: "bg-radiant-green-500 text-inky-blue-500",
        warning: "bg-sunny-yellow-500 text-inky-blue-500",
        danger: "bg-red-500 text-white",
      },
      size: {
        sm: "px-2 py-0.5 text-xs",
        md: "px-2.5 py-0.5 text-sm",
        lg: "px-3 py-1 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeStyles> {
  /**
   * Whether the badge can be removed
   */
  removable?: boolean;
  /**
   * Callback when remove button is clicked
   */
  onRemove?: () => void;
}

/**
 * Badge component for labels, tags, and status indicators
 *
 * @example
 * ```tsx
 * <Badge variant="success">Active</Badge>
 * <Badge variant="warning" removable onRemove={() => {}}>Draft</Badge>
 * ```
 */
export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, size, removable, onRemove, children, ...rest }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(badgeStyles({ variant, size }), className)}
        {...rest}
      >
        {children}
        {removable && (
          <button
            type="button"
            className="ml-1 inline-flex rounded-full p-0.5 hover:bg-black/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-current"
            onClick={onRemove}
            aria-label="Remove"
          >
            <CloseIcon size="xs" decorative={false} />
          </button>
        )}
      </span>
    );
  }
);

Badge.displayName = "Badge";
