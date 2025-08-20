import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/cn";

const radioStyles = cva(
  "aspect-square h-4 w-4 rounded-full border border-mid-grey-400 text-mid-blue-500 ring-offset-white focus:outline-none focus-visible:ring-2 focus-visible:ring-mid-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
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

export interface RadioProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>,
    VariantProps<typeof radioStyles> {
  /**
   * The label for the radio button
   */
  label?: string;
  /**
   * Helper text displayed below the radio button
   */
  description?: string;
}

/**
 * Radio component for single selection within a group
 *
 * @example
 * ```tsx
 * <RadioGroup value={value} onValueChange={setValue}>
 *   <Radio value="option1" label="Option 1" />
 *   <Radio value="option2" label="Option 2" />
 * </RadioGroup>
 * ```
 */
export const Radio = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  RadioProps
>(({ className, size, label, description, id, ...rest }, ref) => {
  const radioId = id || React.useId();
  const descriptionId = description ? `${radioId}-description` : undefined;

  return (
    <div className="space-y-2">
      <div className="flex items-center space-x-2">
        <RadioGroupPrimitive.Item
          ref={ref}
          id={radioId}
          className={cn(radioStyles({ size }), className)}
          aria-describedby={descriptionId}
          {...rest}
        >
          <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
            <div className={cn(
              "rounded-full bg-current",
              size === "sm" ? "h-1.5 w-1.5" : size === "lg" ? "h-2.5 w-2.5" : "h-2 w-2"
            )} />
          </RadioGroupPrimitive.Indicator>
        </RadioGroupPrimitive.Item>

        {label && (
          <label
            htmlFor={radioId}
            className="text-sm font-medium leading-tight peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-inky-blue-500"
          >
            {label}
          </label>
        )}
      </div>

      {description && (
        <p
          id={descriptionId}
          className="text-sm text-mid-grey-600 ml-6"
        >
          {description}
        </p>
      )}
    </div>
  );
});

Radio.displayName = "Radio";

// Radio Group
export interface RadioGroupProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> {
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
  /**
   * Orientation of the radio group
   */
  orientation?: "horizontal" | "vertical";
}

export const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  RadioGroupProps
>(({ className, legend, error, errorMessage, orientation = "vertical", children, ...rest }, ref) => {
  const groupId = React.useId();
  const errorId = errorMessage ? `${groupId}-error` : undefined;

  return (
    <fieldset
      className={cn("space-y-3", className)}
      aria-describedby={errorId}
{...(error && { "aria-invalid": true })}
    >
      {legend && (
        <legend className={cn(
          "text-sm font-medium",
          error ? "text-red-700" : "text-inky-blue-500"
        )}>
          {legend}
        </legend>
      )}

      <RadioGroupPrimitive.Root
        ref={ref}
        className={cn(
          "grid gap-2",
          orientation === "horizontal" ? "grid-flow-col auto-cols-max" : "grid-cols-1"
        )}
        {...rest}
      >
        {children}
      </RadioGroupPrimitive.Root>

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
});

RadioGroup.displayName = "RadioGroup";
