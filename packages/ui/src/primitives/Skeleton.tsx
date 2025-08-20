import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/cn";

const skeletonStyles = cva(
  "animate-pulse rounded-md bg-light-grey-200",
  {
    variants: {
      variant: {
        default: "bg-light-grey-200",
        subtle: "bg-light-grey-100",
        pulse: "bg-gradient-to-r from-light-grey-200 via-light-grey-100 to-light-grey-200 bg-[length:200%_100%] animate-[shimmer_2s_infinite]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface SkeletonProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof skeletonStyles> {
  /**
   * Width of the skeleton
   */
  width?: string | number;
  /**
   * Height of the skeleton
   */
  height?: string | number;
  /**
   * Whether the skeleton should be circular
   */
  circle?: boolean;
  /**
   * Number of lines for text skeleton
   */
  lines?: number;
  /**
   * Additional className for styling
   */
  className?: string;
}

/**
 * Skeleton component for loading placeholders
 *
 * @example
 * ```tsx
 * <Skeleton width="200px" height="20px" />
 * <Skeleton circle width="40px" height="40px" />
 * <Skeleton lines={3} />
 * ```
 */
export const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, variant, width, height, circle, lines = 1, style, ...rest }, ref) => {
    // If lines is specified and greater than 1, render multiple skeleton lines
    if (lines > 1) {
      return (
        <div className="space-y-2" ref={ref} {...rest}>
          {Array.from({ length: lines }, (_, index) => (
            <div
              key={index}
              className={cn(
                skeletonStyles({ variant }),
                "h-4",
                // Last line is typically shorter
                index === lines - 1 ? "w-3/4" : "w-full",
                className
              )}
              style={style}
            />
          ))}
        </div>
      );
    }

    return (
      <div
        ref={ref}
        className={cn(
          skeletonStyles({ variant }),
          circle && "rounded-full",
          className
        )}
        style={{
          width,
          height,
          ...style,
        }}
        {...rest}
      />
    );
  }
);

Skeleton.displayName = "Skeleton";

// Predefined skeleton shapes
export interface SkeletonTextProps extends Omit<SkeletonProps, "lines"> {
  /**
   * Number of text lines
   */
  lines?: number;
}

export const SkeletonText: React.FC<SkeletonTextProps> = ({
  lines = 1,
  className,
  ...rest
}) => (
  <Skeleton
    lines={lines}
    className={cn("h-4", className)}
    {...rest}
  />
);

export interface SkeletonAvatarProps extends Omit<SkeletonProps, "circle" | "width" | "height"> {
  /**
   * Size of the avatar skeleton
   */
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
}

export const SkeletonAvatar: React.FC<SkeletonAvatarProps> = ({
  size = "md",
  className,
  ...rest
}) => {
  const sizeMap = {
    xs: "h-6 w-6",
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-12 w-12",
    xl: "h-16 w-16",
    "2xl": "h-20 w-20",
  };

  return (
    <Skeleton
      circle
      className={cn(sizeMap[size], className)}
      {...rest}
    />
  );
};

export interface SkeletonCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Show avatar in the card
   */
  avatar?: boolean;
  /**
   * Number of text lines in the card
   */
  lines?: number;
  /**
   * Show action buttons area
   */
  actions?: boolean;
  /**
   * Additional className for styling
   */
  className?: string;
}

export const SkeletonCard: React.FC<SkeletonCardProps> = ({
  avatar = false,
  lines = 3,
  actions = false,
  className,
  ...rest
}) => (
  <div
    className={cn("p-4 border border-light-grey-200 rounded-md space-y-4", className)}
    {...rest}
  >
    {avatar && (
      <div className="flex items-center space-x-3">
        <SkeletonAvatar size="md" />
        <div className="space-y-2 flex-1">
          <Skeleton className="h-4 w-1/3" />
          <Skeleton className="h-3 w-1/2" />
        </div>
      </div>
    )}

    <div className="space-y-2">
      <SkeletonText lines={lines} />
    </div>

    {actions && (
      <div className="flex space-x-2 pt-2 border-t border-light-grey-200">
        <Skeleton className="h-8 w-20" />
        <Skeleton className="h-8 w-16" />
      </div>
    )}
  </div>
);

export interface SkeletonTableProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Number of rows to show
   */
  rows?: number;
  /**
   * Number of columns to show
   */
  columns?: number;
  /**
   * Show table header
   */
  header?: boolean;
  /**
   * Additional className for styling
   */
  className?: string;
}

export const SkeletonTable: React.FC<SkeletonTableProps> = ({
  rows = 5,
  columns = 4,
  header = true,
  className,
  ...rest
}) => (
  <div className={cn("space-y-3", className)} {...rest}>
    {header && (
      <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
        {Array.from({ length: columns }, (_, index) => (
          <Skeleton key={`header-${index}`} className="h-4 w-3/4" />
        ))}
      </div>
    )}

    <div className="space-y-2">
      {Array.from({ length: rows }, (_, rowIndex) => (
        <div
          key={`row-${rowIndex}`}
          className="grid gap-4"
          style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
        >
          {Array.from({ length: columns }, (_, colIndex) => (
            <Skeleton
              key={`cell-${rowIndex}-${colIndex}`}
              className="h-4"
              style={{ width: `${Math.random() * 50 + 50}%` }}
            />
          ))}
        </div>
      ))}
    </div>
  </div>
);
