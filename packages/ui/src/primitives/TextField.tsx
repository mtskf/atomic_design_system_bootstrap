import * as React from "react";
import { cn } from "../utils/cn";

export interface TextFieldProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  helperText?: string;
  errorText?: string;
  id?: string;
}

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  ({ className, label, helperText, errorText, id, required, ...rest }, ref) => {
    const inputId = React.useId();
    const resolvedId = id ?? inputId;
    const describedBy = [helperText ? `${resolvedId}-help` : null, errorText ? `${resolvedId}-err` : null]
      .filter(Boolean)
      .join(" ");

    return (
      <div className="flex flex-col gap-1">
        {label && (
          <label htmlFor={resolvedId} className="text-body-sm font-brand-medium text-inky-blue-500">
            {label}
            {required && <span aria-hidden className="text-red-500">*</span>}
          </label>
        )}
        <input
          id={resolvedId}
          ref={ref}
          className={cn(
            "h-10 px-3 rounded-md border border-mid-grey-400 bg-surface text-inky-blue-500 placeholder:text-mid-grey-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mid-blue-500 ring-offset-2 font-brand-book",
            errorText && "border-red-500 focus-visible:ring-red-500",
            className
          )}
          aria-invalid={!!errorText || undefined}
          aria-describedby={describedBy || undefined}
          {...rest}
        />
        {helperText && !errorText && (
          <p id={`${resolvedId}-help`} className="text-caption-md font-brand-book text-mid-grey-600">
            {helperText}
          </p>
        )}
        {errorText && (
          <p id={`${resolvedId}-err`} role="alert" className="text-caption-md font-brand-book text-red-500">
            {errorText}
          </p>
        )}
      </div>
    );
  }
);
TextField.displayName = "TextField";
