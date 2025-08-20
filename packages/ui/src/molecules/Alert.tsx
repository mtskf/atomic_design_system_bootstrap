import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/cn";
import { InfoIcon, CheckIcon, AlertTriangleIcon, CloseIcon } from "../primitives/Icon";

const alertStyles = cva(
  "relative rounded-lg border p-4 flex items-start gap-3",
  {
    variants: {
      variant: {
        info: "bg-sky-blue-500/10 border-sky-blue-500/20 text-inky-blue-500",
        success: "bg-radiant-green-500/10 border-radiant-green-500/20 text-inky-blue-500",
        warning: "bg-sunny-yellow-500/10 border-sunny-yellow-500/20 text-inky-blue-500",
        error: "bg-red-500/10 border-red-500/20 text-red-700",
      },
    },
    defaultVariants: {
      variant: "info",
    },
  }
);

const alertIconStyles = cva(
  "w-5 h-5 shrink-0 self-center",
  {
    variants: {
      variant: {
        info: "text-sky-blue-500",
        success: "text-radiant-green-500",
        warning: "text-sunny-yellow-500",
        error: "text-red-500",
      },
    },
    defaultVariants: {
      variant: "info",
    },
  }
);

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertStyles> {
  /**
   * Whether the alert can be dismissed
   */
  dismissible?: boolean;
  /**
   * Callback when alert is dismissed
   */
  onDismiss?: () => void;
  /**
   * Alert title
   */
  title?: string;
  /**
   * Hide the default icon
   */
  hideIcon?: boolean;
}

/**
 * Alert component for displaying important messages
 *
 * @example
 * ```tsx
 * <Alert variant="success" title="Success!" dismissible>
 *   Your changes have been saved successfully.
 * </Alert>
 * ```
 */
export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant, dismissible, onDismiss, title, hideIcon, children, ...rest }, ref) => {
    const [isVisible, setIsVisible] = React.useState(true);

    const handleDismiss = () => {
      setIsVisible(false);
      onDismiss?.();
    };

    const getIcon = () => {
      switch (variant) {
        case "success":
          return <CheckIcon className={alertIconStyles({ variant })} decorative />;
        case "warning":
          return <AlertTriangleIcon className={alertIconStyles({ variant })} decorative />;
        case "error":
          return <AlertTriangleIcon className={alertIconStyles({ variant })} decorative />;
        default:
          return <InfoIcon className={alertIconStyles({ variant })} decorative />;
      }
    };

    if (!isVisible) return null;

    return (
      <div
        ref={ref}
        className={cn(alertStyles({ variant }), className)}
        role={variant === "error" ? "alert" : "status"}
        aria-live={variant === "error" ? "assertive" : "polite"}
        {...rest}
      >
        {!hideIcon && getIcon()}
        <div className="flex-1 min-w-0">
          {title && (
            <h4 className="font-brand-medium text-sm mb-1">
              {title}
            </h4>
          )}
          <div className="text-sm">
            {children}
          </div>
        </div>
        {dismissible && (
          <button
            type="button"
            className="shrink-0 rounded-md p-1 hover:bg-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-current self-center flex items-center justify-center"
            onClick={handleDismiss}
            aria-label="Dismiss alert"
          >
            <CloseIcon size="sm" decorative={false} />
          </button>
        )}
      </div>
    );
  }
);

Alert.displayName = "Alert";
