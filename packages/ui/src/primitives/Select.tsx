import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/cn";
import { Icon } from "./Icon";

const selectTriggerStyles = cva(
  "flex h-10 w-full items-center justify-between rounded-md border border-mid-grey-400 bg-white px-3 py-2 text-sm font-brand-book placeholder:text-mid-grey-500 focus:outline-none focus:ring-2 focus:ring-mid-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      size: {
        sm: "h-8 px-2 text-xs",
        md: "h-10 px-3 text-sm",
        lg: "h-12 px-4 text-base",
      },
      error: {
        true: "border-red-500 focus:ring-red-500",
        false: "",
      },
    },
    defaultVariants: {
      size: "md",
      error: false,
    },
  }
);

const selectContentStyles = cva(
  "relative z-50 min-w-[8rem] overflow-hidden rounded-md border border-light-grey-200 bg-white text-inky-blue-500 shadow-md animate-in fade-in-80 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
  {
    variants: {
      position: {
        popper: "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        "item-aligned": "",
      },
    },
    defaultVariants: {
      position: "popper",
    },
  }
);

const selectItemStyles = cva(
  "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-light-grey-100 focus:text-inky-blue-500 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
  {
    variants: {
      size: {
        sm: "py-1 text-xs",
        md: "py-1.5 text-sm",
        lg: "py-2 text-base",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Root>,
    VariantProps<typeof selectTriggerStyles> {
  /**
   * Options to display in the select
   */
  options?: SelectOption[];
  /**
   * Placeholder text when no value is selected
   */
  placeholder?: string;
  /**
   * Label for the select
   */
  label?: string;
  /**
   * Helper text displayed below the select
   */
  description?: string;
  /**
   * Whether the select is in an error state
   */
  error?: boolean;
  /**
   * Error message to display
   */
  errorMessage?: string;
  /**
   * Additional className for styling
   */
  className?: string;
  /**
   * HTML id attribute
   */
  id?: string;
}

const ChevronDownIcon = () => (
  <Icon size="sm" decorative>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </Icon>
);

const CheckIcon = () => (
  <Icon size="sm" decorative>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </Icon>
);

/**
 * Select component for choosing from a list of options
 *
 * @example
 * ```tsx
 * <Select
 *   placeholder="Choose an option"
 *   options={[
 *     { value: "option1", label: "Option 1" },
 *     { value: "option2", label: "Option 2" }
 *   ]}
 * />
 * ```
 */
export const Select = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  SelectProps
>(({
  className,
  size,
  error,
  options = [],
  placeholder = "Select an option...",
  label,
  description,
  errorMessage,
  id,
  children,
  ...rest
}, ref) => {
  const selectId = id || React.useId();
  const descriptionId = description ? `${selectId}-description` : undefined;
  const errorId = errorMessage ? `${selectId}-error` : undefined;

  return (
    <div className="space-y-2">
      {label && (
        <label
          htmlFor={selectId}
          className={cn(
            "text-sm font-medium",
            error ? "text-red-700" : "text-inky-blue-500"
          )}
        >
          {label}
        </label>
      )}

      <SelectPrimitive.Root {...rest}>
        <SelectPrimitive.Trigger
          ref={ref}
          id={selectId}
          className={cn(selectTriggerStyles({ size, error }), className)}
          aria-describedby={cn(descriptionId, errorId)}
          aria-invalid={error ? "true" : undefined}
        >
          <SelectPrimitive.Value placeholder={placeholder} />
          <SelectPrimitive.Icon asChild>
            <ChevronDownIcon />
          </SelectPrimitive.Icon>
        </SelectPrimitive.Trigger>

        <SelectPrimitive.Portal>
          <SelectPrimitive.Content className={selectContentStyles()}>
            <SelectPrimitive.Viewport className="p-1">
              {children || (
                options.map((option) => (
                  <SelectPrimitive.Item
                    key={option.value}
                    value={option.value}
                    disabled={option.disabled}
                    className={selectItemStyles({ size })}
                  >
                    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
                      <SelectPrimitive.ItemIndicator>
                        <CheckIcon />
                      </SelectPrimitive.ItemIndicator>
                    </span>
                    <SelectPrimitive.ItemText>{option.label}</SelectPrimitive.ItemText>
                  </SelectPrimitive.Item>
                ))
              )}
            </SelectPrimitive.Viewport>
          </SelectPrimitive.Content>
        </SelectPrimitive.Portal>
      </SelectPrimitive.Root>

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

Select.displayName = "Select";

// Individual Select components for custom usage
export const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> &
  VariantProps<typeof selectTriggerStyles>
>(({ className, size, error, children, ...rest }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(selectTriggerStyles({ size, error }), className)}
    {...rest}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDownIcon />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = "SelectTrigger";

export const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content> &
  VariantProps<typeof selectContentStyles>
>(({ className, children, position = "popper", ...rest }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(selectContentStyles({ position }), className)}
      position={position}
      {...rest}
    >
      <SelectPrimitive.Viewport className="p-1">
        {children}
      </SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = "SelectContent";

export const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item> &
  VariantProps<typeof selectItemStyles>
>(({ className, children, size, ...rest }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(selectItemStyles({ size }), className)}
    {...rest}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <CheckIcon />
      </SelectPrimitive.ItemIndicator>
    </span>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
SelectItem.displayName = "SelectItem";

export const SelectValue = SelectPrimitive.Value;
export const SelectGroup = SelectPrimitive.Group;
export const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...rest }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className)}
    {...rest}
  />
));
SelectLabel.displayName = "SelectLabel";

export const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...rest }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-light-grey-200", className)}
    {...rest}
  />
));
SelectSeparator.displayName = "SelectSeparator";
