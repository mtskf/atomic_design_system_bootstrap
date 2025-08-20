import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/cn";

const textareaStyles = cva(
  "flex w-full rounded-md border border-mid-grey-400 bg-white px-3 py-2 font-brand-book text-sm text-inky-blue-500 placeholder:text-mid-grey-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mid-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none",
  {
    variants: {
      size: {
        sm: "min-h-[60px] px-2 py-1 text-xs",
        md: "min-h-[80px] px-3 py-2 text-sm",
        lg: "min-h-[120px] px-4 py-3 text-base",
      },
      resize: {
        none: "resize-none",
        vertical: "resize-y",
        horizontal: "resize-x",
        both: "resize",
      },
      error: {
        true: "border-red-500 focus-visible:ring-red-500",
        false: "",
      },
    },
    defaultVariants: {
      size: "md",
      resize: "vertical",
      error: false,
    },
  }
);

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaStyles> {
  /**
   * Label for the textarea
   */
  label?: string;
  /**
   * Helper text displayed below the textarea
   */
  description?: string;
  /**
   * Whether the textarea is in an error state
   */
  error?: boolean;
  /**
   * Error message to display
   */
  errorMessage?: string;
  /**
   * Show character count
   */
  showCount?: boolean;
  /**
   * Maximum number of characters allowed
   */
  maxLength?: number;
  /**
   * Additional className for styling
   */
  className?: string;
  /**
   * HTML id attribute
   */
  id?: string;
}

/**
 * Textarea component for multi-line text input
 *
 * @example
 * ```tsx
 * <Textarea
 *   label="Comments"
 *   placeholder="Enter your feedback..."
 *   maxLength={500}
 *   showCount
 * />
 * ```
 */
export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({
    className,
    size,
    resize,
    error,
    label,
    description,
    errorMessage,
    showCount = false,
    maxLength,
    value,
    defaultValue,
    required,
    id,
    ...rest
  }, ref) => {
    const textareaId = id || React.useId();
    const descriptionId = description ? `${textareaId}-description` : undefined;
    const errorId = errorMessage ? `${textareaId}-error` : undefined;
    const countId = showCount ? `${textareaId}-count` : undefined;

    // Calculate character count
    const currentValue = value ?? defaultValue ?? "";
    const charCount = typeof currentValue === "string" ? currentValue.length : 0;
    const isOverLimit = maxLength ? charCount > maxLength : false;

    const describedBy = [descriptionId, errorId, countId]
      .filter(Boolean)
      .join(" ") || undefined;

    return (
      <div className="space-y-2">
        {label && (
          <label
            htmlFor={textareaId}
            className={cn(
              "text-sm font-medium",
              error ? "text-red-700" : "text-inky-blue-500"
            )}
          >
            {label}
            {required && <span aria-hidden="true" className="text-red-500 ml-1">*</span>}
          </label>
        )}

        <textarea
          ref={ref}
          id={textareaId}
          className={cn(
            textareaStyles({ size, resize, error: error || isOverLimit }),
            className
          )}
          aria-describedby={describedBy}
          aria-invalid={error || isOverLimit ? "true" : undefined}
          maxLength={maxLength}
          value={value}
          defaultValue={defaultValue}
          required={required}
          {...rest}
        />

        <div className="flex justify-between items-start">
          <div className="space-y-1 flex-1">
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

Textarea.displayName = "Textarea";
