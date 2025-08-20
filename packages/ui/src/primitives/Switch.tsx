import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/cn";

const switchStyles = cva(
  "peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mid-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-mid-blue-500 data-[state=unchecked]:bg-mid-grey-400",
  {
    variants: {
      size: {
        sm: "h-5 w-9",
        md: "h-6 w-11",
        lg: "h-7 w-12",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

const switchThumbStyles = cva(
  "pointer-events-none block rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0",
  {
    variants: {
      size: {
        sm: "h-4 w-4 data-[state=checked]:translate-x-4",
        md: "h-5 w-5 data-[state=checked]:translate-x-5",
        lg: "h-6 w-6 data-[state=checked]:translate-x-5",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export interface SwitchProps
  extends React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>,
    VariantProps<typeof switchStyles> {
  /**
   * The label for the switch
   */
  label?: string;
  /**
   * Helper text displayed below the switch
   */
  description?: string;
  /**
   * Whether the switch is in an error state
   */
  error?: boolean;
  /**
   * Error message to display
   */
  errorMessage?: string;
  /**
   * Show ON/OFF text on the switch
   */
  showLabels?: boolean;
}

/**
 * Switch component for binary state toggle
 *
 * @example
 * ```tsx
 * <Switch label="Enable notifications" />
 * <Switch checked={enabled} onCheckedChange={setEnabled} label="Dark mode" />
 * ```
 */
export const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  SwitchProps
>(({ className, size, label, description, error, errorMessage, showLabels, id, ...rest }, ref) => {
  const switchId = id || React.useId();
  const descriptionId = description ? `${switchId}-description` : undefined;
  const errorId = errorMessage ? `${switchId}-error` : undefined;

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <SwitchPrimitive.Root
            ref={ref}
            id={switchId}
            className={cn(
              switchStyles({ size }),
              error && "data-[state=unchecked]:bg-red-400 focus-visible:ring-red-500",
              className
            )}
            aria-describedby={cn(descriptionId, errorId)}
            aria-invalid={error ? "true" : undefined}
            {...rest}
          >
            <SwitchPrimitive.Thumb className={cn(switchThumbStyles({ size }))}>
              {showLabels && (
                <span className="sr-only">
                  {rest.checked ? "ON" : "OFF"}
                </span>
              )}
            </SwitchPrimitive.Thumb>
          </SwitchPrimitive.Root>

          {label && (
            <label
              htmlFor={switchId}
              className={cn(
                "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
                error ? "text-red-700" : "text-inky-blue-500"
              )}
            >
              {label}
            </label>
          )}
        </div>

        {showLabels && (
          <span className={cn(
            "text-xs font-medium",
            rest.checked ? "text-mid-blue-500" : "text-mid-grey-500"
          )}>
            {rest.checked ? "ON" : "OFF"}
          </span>
        )}
      </div>

      {description && (
        <p
          id={descriptionId}
          className={cn(
            "text-sm",
            error ? "text-red-600" : "text-mid-grey-600"
          )}
        >
          {description}
        </p>
      )}

      {errorMessage && (
        <p
          id={errorId}
          className="text-sm text-red-600"
          role="alert"
        >
          {errorMessage}
        </p>
      )}
    </div>
  );
});

Switch.displayName = "Switch";
