import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/cn";
import { Icon } from "./Icon";

const textFieldStyles = cva(
  "flex w-full rounded-md border border-mid-grey-400 bg-white font-brand-book text-inky-blue-500 focus-within:ring-2 focus-within:ring-mid-blue-500 focus-within:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      size: {
        sm: "h-8 text-xs",
        md: "h-10 text-sm",
        lg: "h-12 text-base",
      },
      error: {
        true: "border-red-500 focus-within:ring-red-500",
        false: "",
      },
    },
    defaultVariants: {
      size: "md",
      error: false,
    },
  }
);

const inputStyles = cva(
  "flex-1 bg-transparent px-3 py-2 placeholder:text-mid-grey-500 focus:outline-none disabled:cursor-not-allowed",
  {
    variants: {
      size: {
        sm: "px-2 py-1 text-xs",
        md: "px-3 py-2 text-sm",
        lg: "px-4 py-3 text-base",
      },
      hasPrefix: {
        true: "pl-0",
        false: "",
      },
      hasSuffix: {
        true: "pr-0",
        false: "",
      },
    },
    defaultVariants: {
      size: "md",
      hasPrefix: false,
      hasSuffix: false,
    },
  }
);

const affixStyles = cva(
  "flex items-center text-mid-grey-500",
  {
    variants: {
      size: {
        sm: "px-2 text-xs",
        md: "px-3 text-sm",
        lg: "px-4 text-base",
      },
      position: {
        prefix: "border-r border-light-grey-200",
        suffix: "border-l border-light-grey-200",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export interface EnhancedTextFieldProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "prefix" | "suffix">,
    VariantProps<typeof textFieldStyles> {
  /**
   * Label for the text field
   */
  label?: string;
  /**
   * Helper text displayed below the input
   */
  description?: string;
  /**
   * Whether the input is in an error state
   */
  error?: boolean;
  /**
   * Error message to display
   */
  errorMessage?: string;
  /**
   * Prefix element (text, icon, or component)
   */
  prefix?: React.ReactNode;
  /**
   * Suffix element (text, icon, or component)
   */
  suffix?: React.ReactNode;
  /**
   * Show character count
   */
  showCount?: boolean;
  /**
   * Loading state with spinner
   */
  loading?: boolean;
  /**
   * Additional className for the container
   */
  className?: string;
  /**
   * Additional className for the input element
   */
  inputClassName?: string;
}

const LoadingIcon = () => (
  <Icon size="sm" decorative className="animate-spin">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
  </Icon>
);

/**
 * Enhanced TextField with prefix/suffix support
 *
 * @example
 * ```tsx
 * <EnhancedTextField
 *   label="Amount"
 *   prefix="$"
 *   suffix="AUD"
 *   placeholder="0.00"
 * />
 * ```
 */
export const EnhancedTextField = React.forwardRef<HTMLInputElement, EnhancedTextFieldProps>(
  ({
    className,
    inputClassName,
    size,
    error,
    label,
    description,
    errorMessage,
    prefix,
    suffix,
    showCount = false,
    loading = false,
    maxLength,
    value,
    defaultValue,
    required,
    id,
    ...rest
  }, ref) => {
    const textFieldId = id || React.useId();
    const descriptionId = description ? `${textFieldId}-description` : undefined;
    const errorId = errorMessage ? `${textFieldId}-error` : undefined;
    const countId = showCount ? `${textFieldId}-count` : undefined;

    // Calculate character count
    const currentValue = value ?? defaultValue ?? "";
    const charCount = typeof currentValue === "string" ? currentValue.length : 0;
    const isOverLimit = maxLength ? charCount > maxLength : false;

    const describedBy = [descriptionId, errorId, countId]
      .filter(Boolean)
      .join(" ") || undefined;

    // Add loading suffix if loading
    const finalSuffix = loading ? (
      <div className="flex items-center gap-2">
        {suffix}
        <LoadingIcon />
      </div>
    ) : suffix;

    return (
      <div className="space-y-2">
        {label && (
          <label
            htmlFor={textFieldId}
            className={cn(
              "text-sm font-medium",
              error || isOverLimit ? "text-red-700" : "text-inky-blue-500"
            )}
          >
            {label}
            {required && <span aria-hidden="true" className="text-red-500 ml-1">*</span>}
          </label>
        )}

        <div className={cn(textFieldStyles({ size, error: error || isOverLimit }), className)}>
          {prefix && (
            <div className={cn(affixStyles({ size, position: "prefix" }))}>
              {prefix}
            </div>
          )}

          <input
            ref={ref}
            id={textFieldId}
            className={cn(
              inputStyles({
                size,
                hasPrefix: !!prefix,
                hasSuffix: !!(finalSuffix)
              }),
              inputClassName
            )}
            aria-describedby={describedBy}
            aria-invalid={error || isOverLimit ? "true" : undefined}
            maxLength={maxLength}
            value={value}
            defaultValue={defaultValue}
            required={required}
            disabled={loading || rest.disabled}
            {...rest}
          />

          {finalSuffix && (
            <div className={cn(affixStyles({ size, position: "suffix" }))}>
              {finalSuffix}
            </div>
          )}
        </div>

        <div className="flex justify-between items-start">
          <div className="space-y-1 flex-1">
            {description && (
              <p
                id={descriptionId}
                className={cn(
                  "text-sm",
                  error || isOverLimit ? "text-red-600" : "text-mid-grey-600"
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

          {showCount && (
            <p
              id={countId}
              className={cn(
                "text-xs font-medium tabular-nums",
                isOverLimit
                  ? "text-red-600"
                  : charCount >= (maxLength || 0) * 0.8
                    ? "text-sunny-yellow-600"
                    : "text-mid-grey-500"
              )}
              aria-live="polite"
            >
              {charCount}
              {maxLength && ` / ${maxLength}`}
            </p>
          )}
        </div>
      </div>
    );
  }
);

EnhancedTextField.displayName = "EnhancedTextField";

// Common prefix/suffix components
export const CurrencyPrefix: React.FC<{ currency?: string }> = ({ currency = "$" }) => (
  <span className="font-medium">{currency}</span>
);

export const PercentageSuffix: React.FC = () => (
  <span className="font-medium">%</span>
);

export const SearchIcon: React.FC = () => (
  <Icon size="sm" decorative>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </Icon>
);

export const ClearButton: React.FC<{ onClear: () => void }> = ({ onClear }) => (
  <button
    type="button"
    onClick={onClear}
    className="p-1 rounded-full hover:bg-light-grey-100 focus:outline-none focus:ring-2 focus:ring-mid-blue-500"
    aria-label="Clear input"
  >
    <Icon size="xs" decorative>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </Icon>
  </button>
);
