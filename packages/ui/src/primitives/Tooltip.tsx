import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/cn";

const tooltipContentStyles = cva(
  "z-50 overflow-hidden rounded-md border border-light-grey-200 bg-white px-3 py-1.5 text-sm text-inky-blue-500 shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
  {
    variants: {
      variant: {
        default: "bg-white border-light-grey-200 text-inky-blue-500",
        dark: "bg-inky-blue-500 border-inky-blue-500 text-white",
        success: "bg-radiant-green-500 border-radiant-green-500 text-white",
        warning: "bg-sunny-yellow-500 border-sunny-yellow-500 text-inky-blue-500",
        danger: "bg-red-500 border-red-500 text-white",
      },
      size: {
        sm: "px-2 py-1 text-xs",
        md: "px-3 py-1.5 text-sm",
        lg: "px-4 py-2 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

const tooltipArrowStyles = cva("drop-shadow-sm", {
  variants: {
    variant: {
      default: "fill-white",
      dark: "fill-inky-blue-500",
      success: "fill-radiant-green-500",
      warning: "fill-sunny-yellow-500",
      danger: "fill-red-500",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface TooltipProps
  extends Omit<React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>, "content">,
    VariantProps<typeof tooltipContentStyles> {
  /**
   * The trigger element that will show the tooltip on hover/focus
   */
  children: React.ReactNode;
  /**
   * The content to display in the tooltip
   */
  content: React.ReactNode;
  /**
   * Whether the tooltip is disabled
   */
  disabled?: boolean;
  /**
   * Delay before showing the tooltip (in milliseconds)
   */
  delayDuration?: number;
  /**
   * Whether to skip the delay when moving between tooltips
   */
  skipDelayDuration?: number;
}

/**
 * Tooltip component for providing contextual information
 *
 * @example
 * ```tsx
 * <Tooltip content="This is a helpful tooltip">
 *   <Button>Hover me</Button>
 * </Tooltip>
 *
 * <Tooltip content="Save your work" variant="dark" side="top">
 *   <Button>Save</Button>
 * </Tooltip>
 * ```
 */
export const Tooltip = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  TooltipProps
>(({
  className,
  variant,
  size,
  children,
  content,
  disabled = false,
  delayDuration = 300,
  skipDelayDuration = 100,
  sideOffset = 4,
  ...rest
}, ref) => {
  if (disabled) {
    return <>{children}</>;
  }

  return (
    <TooltipPrimitive.Provider
      delayDuration={delayDuration}
      skipDelayDuration={skipDelayDuration}
    >
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>
          {children}
        </TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content
            ref={ref}
            sideOffset={sideOffset}
            className={cn(tooltipContentStyles({ variant, size }), className)}
            {...rest}
          >
            {content}
            <TooltipPrimitive.Arrow className={tooltipArrowStyles({ variant })} />
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
});

Tooltip.displayName = "Tooltip";

// Simple tooltip wrapper for convenience
export interface SimpleTooltipProps {
  content: string;
  children: React.ReactNode;
  side?: "top" | "right" | "bottom" | "left";
  variant?: "default" | "dark";
}

export const SimpleTooltip: React.FC<SimpleTooltipProps> = ({
  content,
  children,
  side = "top",
  variant = "dark"
}) => (
  <Tooltip content={content} side={side} variant={variant}>
    {children}
  </Tooltip>
);

// Tooltip provider for global configuration
export const TooltipProvider = TooltipPrimitive.Provider;
