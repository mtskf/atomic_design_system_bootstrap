import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/cn";
import { CheckIcon } from "./Icon";

const checkboxStyles = cva(
  "peer h-4 w-4 shrink-0 rounded-sm border border-mid-grey-400 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mid-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-mid-blue-500 data-[state=checked]:text-white data-[state=checked]:border-mid-blue-500",
  {
    variants: {
      size: {
        sm: "h-3 w-3",
        md: "h-4 w-4",
        lg: "h-5 w-5",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
    VariantProps<typeof checkboxStyles> {
  /**
   * The label for the checkbox
   */
  label?: string;
  /**
   * Helper text displayed below the checkbox
   */
  description?: string;
  /**
   * Whether the checkbox is in an error state
   */
  error?: boolean;
  /**
   * Error message to display
   */
  errorMessage?: string;
}

/**
 * Checkbox component for binary selection
 *
 * @example
 * ```tsx
 * <Checkbox label="Accept terms and conditions" />
 * <Checkbox checked={checked} onCheckedChange={setChecked} label="Subscribe to newsletter" />
 * ```
 */
export const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, size, label, description, error, errorMessage, id, ...rest }, ref) => {
  const checkboxId = id || React.useId();
  const descriptionId = description ? `${checkboxId}-description` : undefined;
  const errorId = errorMessage ? `${checkboxId}-error` : undefined;

  return (
    <div className="space-y-2">
      <div className="flex items-center space-x-2">
        <CheckboxPrimitive.Root
          ref={ref}
          id={checkboxId}
          className={cn(
            checkboxStyles({ size }),
            error && "border-red-500 focus-visible:ring-red-500",
            className
          )}
          aria-describedby={cn(descriptionId, errorId)}
{...(error && { "aria-invalid": true })}
          {...rest}
        >
          <CheckboxPrimitive.Indicator className="flex items-center justify-center text-current">
            <CheckIcon size={size === "sm" ? "xs" : size === "lg" ? "sm" : "xs"} decorative />
          </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>

        {label && (
          <label
            htmlFor={checkboxId}
            className={cn(
              "text-sm font-medium leading-tight peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
              error ? "text-red-700" : "text-inky-blue-500"
            )}
          >
            {label}
          </label>
        )}
      </div>

      {description && (
        <p
          id={descriptionId}
          className={cn(
            "text-sm ml-6",
            error ? "text-red-600" : "text-mid-grey-600"
          )}
        >
          {description}
        </p>
      )}

      {errorMessage && (
        <p
          id={errorId}
          className="text-sm text-red-600 ml-6"
          role="alert"
        >
          {errorMessage}
        </p>
      )}
    </div>
  );
});

Checkbox.displayName = "Checkbox";

// Checkbox Group for multiple checkboxes
export interface CheckboxGroupProps extends React.HTMLAttributes<HTMLFieldSetElement> {
  /**
   * Group label
   */
  legend?: string;
  /**
   * Whether the group is in an error state
   */
  error?: boolean;
  /**
   * Error message for the group
   */
  errorMessage?: string;
}

export const CheckboxGroup = React.forwardRef<HTMLFieldSetElement, CheckboxGroupProps>(
  ({ className, legend, error, errorMessage, children, ...rest }, ref) => {
    const groupId = React.useId();
    const errorId = errorMessage ? `${groupId}-error` : undefined;

    return (
      <fieldset
        ref={ref}
        className={cn("space-y-3", className)}
        aria-describedby={errorId}
{...(error && { "aria-invalid": true })}
        {...rest}
      >
        {legend && (
          <legend className={cn(
            "text-sm font-medium",
            error ? "text-red-700" : "text-inky-blue-500"
          )}>
            {legend}
          </legend>
        )}

        <div className="space-y-2">
          {children}
        </div>

        {errorMessage && (
          <p
            id={errorId}
            className="text-sm text-red-600"
            role="alert"
          >
            {errorMessage}
          </p>
        )}
      </fieldset>
    );
  }
);

CheckboxGroup.displayName = "CheckboxGroup";
