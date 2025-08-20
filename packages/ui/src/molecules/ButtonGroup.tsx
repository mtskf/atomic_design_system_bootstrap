import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/cn";

const buttonGroupStyles = cva(
  "inline-flex",
  {
    variants: {
      orientation: {
        horizontal: "flex-row",
        vertical: "flex-col",
      },
      variant: {
        default: "",
        outlined: "[&>button]:border [&>button]:border-mid-grey-400",
        ghost: "",
      },
      size: {
        sm: "[&>button]:h-8 [&>button]:px-3 [&>button]:text-sm",
        md: "[&>button]:h-10 [&>button]:px-4",
        lg: "[&>button]:h-12 [&>button]:px-6 [&>button]:text-lg",
      },
      attached: {
        true: "",
        false: "gap-2",
      },
    },
    compoundVariants: [
      // Horizontal attached styles
      {
        orientation: "horizontal",
        attached: true,
        className: "[&>button:first-child]:rounded-r-none [&>button:last-child]:rounded-l-none [&>button:not(:first-child):not(:last-child)]:rounded-none [&>button:not(:first-child)]:border-l-0",
      },
      // Vertical attached styles
      {
        orientation: "vertical",
        attached: true,
        className: "[&>button:first-child]:rounded-b-none [&>button:last-child]:rounded-t-none [&>button:not(:first-child):not(:last-child)]:rounded-none [&>button:not(:first-child)]:border-t-0",
      },
    ],
    defaultVariants: {
      orientation: "horizontal",
      variant: "default",
      size: "md",
      attached: true,
    },
  }
);

export interface ButtonGroupProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof buttonGroupStyles> {
  /**
   * Additional className for styling
   */
  className?: string;
  /**
   * Button elements to group
   */
  children: React.ReactNode;
}

/**
 * ButtonGroup component for grouping related buttons
 *
 * @example
 * ```tsx
 * <ButtonGroup>
 *   <Button intent="primary">Save</Button>
 *   <Button intent="secondary">Cancel</Button>
 * </ButtonGroup>
 * ```
 */
export const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  ({ className, orientation, variant, size, attached, children, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          buttonGroupStyles({ orientation, variant, size, attached }),
          className
        )}
        role="group"
        {...rest}
      >
        {children}
      </div>
    );
  }
);

ButtonGroup.displayName = "ButtonGroup";

// Radio Button Group for single selection
export interface RadioButtonGroupProps extends Omit<ButtonGroupProps, "children"> {
  /**
   * Options for the radio button group
   */
  options: Array<{
    value: string;
    label: string;
    disabled?: boolean;
  }>;
  /**
   * Selected value
   */
  value?: string;
  /**
   * Default selected value
   */
  defaultValue?: string;
  /**
   * Callback when selection changes
   */
  onValueChange?: (value: string) => void;
  /**
   * Button intent for all buttons
   */
  intent?: "primary" | "secondary" | "ghost" | "danger";
}

export const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({
  options,
  value,
  defaultValue,
  onValueChange,
  intent = "secondary",
  className,
  ...rest
}) => {
  const [internalValue, setInternalValue] = React.useState(defaultValue || "");
  const selectedValue = value ?? internalValue;

  const handleClick = (optionValue: string) => {
    if (value === undefined) {
      setInternalValue(optionValue);
    }
    onValueChange?.(optionValue);
  };

  return (
    <ButtonGroup className={className} {...rest}>
      {options.map((option) => {
        const isSelected = selectedValue === option.value;
        const buttonIntent = isSelected ? "primary" : intent;

        return (
          <button
            key={option.value}
            type="button"
            disabled={option.disabled}
            onClick={() => handleClick(option.value)}
            className={cn(
              "inline-flex items-center justify-center rounded-md font-brand-medium focus:outline-none focus-visible:ring-2 ring-offset-2 disabled:opacity-50 disabled:pointer-events-none transition-colors",
              // Intent styles
              buttonIntent === "primary" && "bg-mid-blue-500 text-white hover:bg-mid-blue-600 active:bg-mid-blue-700 focus-visible:ring-mid-blue-500",
              buttonIntent === "secondary" && "bg-fresh-mint-500 text-inky-blue-500 hover:bg-fresh-mint-600 border border-mid-grey-400 focus-visible:ring-fresh-mint-600",
              buttonIntent === "ghost" && "bg-transparent text-inky-blue-500 hover:bg-light-grey-100 focus-visible:ring-inky-blue-500",
              buttonIntent === "danger" && "bg-red-500 text-white hover:bg-red-600 active:bg-red-700 focus-visible:ring-red-500"
            )}
            aria-pressed={isSelected}
          >
            {option.label}
          </button>
        );
      })}
    </ButtonGroup>
  );
};

RadioButtonGroup.displayName = "RadioButtonGroup";

// Segmented Control variant
export interface SegmentedControlProps extends RadioButtonGroupProps {
  /**
   * Full width segmented control
   */
  fullWidth?: boolean;
}

export const SegmentedControl: React.FC<SegmentedControlProps> = ({
  fullWidth = false,
  className,
  ...rest
}) => {
  return (
    <div className={cn(fullWidth && "w-full")}>
      <RadioButtonGroup
        variant="outlined"
        attached
        className={cn(
          "bg-light-grey-100 p-1 rounded-md",
          fullWidth && "w-full [&>button]:flex-1",
          className
        )}
        {...rest}
      />
    </div>
  );
};

SegmentedControl.displayName = "SegmentedControl";
