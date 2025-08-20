import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/cn";

const progressStyles = cva(
  "relative h-2 w-full overflow-hidden rounded-full bg-light-grey-200",
  {
    variants: {
      size: {
        sm: "h-1",
        md: "h-2",
        lg: "h-3",
        xl: "h-4",
      },
      variant: {
        default: "bg-light-grey-200",
        success: "bg-radiant-green-100",
        warning: "bg-sunny-yellow-100",
        danger: "bg-red-100",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "default",
    },
  }
);

const progressIndicatorStyles = cva(
  "h-full w-full flex-1 transition-all duration-300 ease-in-out",
  {
    variants: {
      variant: {
        default: "bg-mid-blue-500",
        success: "bg-radiant-green-500",
        warning: "bg-sunny-yellow-500",
        danger: "bg-red-500",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface ProgressProps
  extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>,
    VariantProps<typeof progressStyles> {
  /**
   * The progress value (0-100)
   */
  value?: number;
  /**
   * Maximum value (default: 100)
   */
  max?: number;
  /**
   * Label for the progress bar
   */
  label?: string;
  /**
   * Show percentage text
   */
  showValue?: boolean;
  /**
   * Custom value formatter
   */
  formatValue?: (value: number, max: number) => string;
  /**
   * Additional className for styling
   */
  className?: string;
}

/**
 * Progress component for showing completion status
 *
 * @example
 * ```tsx
 * <Progress value={75} label="Profile completion" showValue />
 * <Progress value={50} variant="warning" />
 * ```
 */
export const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({
  className,
  size,
  variant,
  value = 0,
  max = 100,
  label,
  showValue = false,
  formatValue,
  ...rest
}, ref) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  const displayValue = formatValue
    ? formatValue(value, max)
    : `${Math.round(percentage)}%`;

  return (
    <div className="space-y-2">
      {(label || showValue) && (
        <div className="flex justify-between items-center">
          {label && (
            <span className="text-sm font-medium text-inky-blue-500">
              {label}
            </span>
          )}
          {showValue && (
            <span className="text-sm font-medium text-mid-grey-600 tabular-nums">
              {displayValue}
            </span>
          )}
        </div>
      )}

      <ProgressPrimitive.Root
        ref={ref}
        className={cn(progressStyles({ size, variant }), className)}
        value={value}
        max={max}
        {...rest}
      >
        <ProgressPrimitive.Indicator
          className={cn(progressIndicatorStyles({ variant }))}
          style={{ transform: `translateX(-${100 - percentage}%)` }}
        />
      </ProgressPrimitive.Root>
    </div>
  );
});

Progress.displayName = "Progress";

// Circular Progress variant
export interface CircularProgressProps
  extends Omit<ProgressProps, "size">,
    VariantProps<typeof progressIndicatorStyles> {
  /**
   * Size of the circular progress (diameter in pixels)
   */
  size?: number;
  /**
   * Stroke width
   */
  strokeWidth?: number;
  /**
   * Show percentage in center
   */
  showPercentage?: boolean;
}

export const CircularProgress: React.FC<CircularProgressProps> = ({
  value = 0,
  max = 100,
  size = 40,
  strokeWidth = 3,
  variant = "default",
  showPercentage = false,
  className,
  formatValue,
  ...rest
}) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  const colorMap = {
    default: "stroke-mid-blue-500",
    success: "stroke-radiant-green-500",
    warning: "stroke-sunny-yellow-500",
    danger: "stroke-red-500",
  };

  const bgColorMap = {
    default: "stroke-light-grey-200",
    success: "stroke-radiant-green-100",
    warning: "stroke-sunny-yellow-100",
    danger: "stroke-red-100",
  };

  const displayValue = formatValue
    ? formatValue(value, max)
    : `${Math.round(percentage)}%`;

  const variantKey = (variant ?? "default") as keyof typeof colorMap;
  const bgVariantKey = (variant ?? "default") as keyof typeof bgColorMap;

  return (
    <div className={cn("relative inline-flex items-center justify-center", className)} {...rest}>
      <svg
        width={size}
        height={size}
        className="transform -rotate-90"
      >
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          className={cn("fill-none", bgColorMap[bgVariantKey])}
          strokeWidth={strokeWidth}
        />
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          className={cn("fill-none transition-all duration-300 ease-in-out", colorMap[variantKey])}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
        />
      </svg>

      {showPercentage && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs font-medium text-inky-blue-500 tabular-nums">
            {displayValue}
          </span>
        </div>
      )}
    </div>
  );
};
