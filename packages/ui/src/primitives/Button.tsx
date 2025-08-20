import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/cn";
import { Spinner } from "./Spinner";

const buttonStyles = cva(
  "inline-flex items-center justify-center rounded-md font-brand-bold focus:outline-none focus-visible:ring-2 ring-offset-2 disabled:opacity-50 disabled:pointer-events-none transition-colors",
  {
    variants: {
      intent: {
        primary: "bg-mid-blue-500 text-white hover:bg-mid-blue-600 active:bg-mid-blue-700 focus-visible:ring-mid-blue-500",
        secondary: "bg-white text-mid-blue-500 hover:bg-mid-blue-50 border border-mid-blue-500 focus-visible:ring-mid-blue-500",
        success: "bg-radiant-green-500 text-inky-blue-500 hover:bg-radiant-green-600 active:bg-radiant-green-700 focus-visible:ring-radiant-green-600",
        warning: "bg-sunny-yellow-500 text-inky-blue-500 hover:bg-sunny-yellow-600 active:bg-sunny-yellow-700 focus-visible:ring-sunny-yellow-600",
        ghost: "bg-transparent text-inky-blue-500 hover:bg-light-grey-100 focus-visible:ring-inky-blue-500",
        danger: "bg-red-500 text-white hover:bg-red-600 active:bg-red-700 focus-visible:ring-red-500",
        gradient: "bg-gradient-fresh-to-radiant text-inky-blue-500 hover:opacity-90 focus-visible:ring-radiant-green-500",
      },
      size: {
        sm: "h-8 px-3 text-sm",
        md: "h-10 px-4",
        lg: "h-12 px-6 text-lg",
      },
      fullWidth: { true: "w-full", false: "" },
    },
    defaultVariants: { intent: "primary", size: "md", fullWidth: false },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  loading?: boolean;
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, intent, size, fullWidth, loading, leftIcon, rightIcon, children, disabled, asChild, ...rest },
    ref
  ) => {
    const Comp = asChild ? (Slot as unknown as React.ElementType) : "button";
    return (
      <Comp
        ref={ref as any}
        className={cn(buttonStyles({ intent, size, fullWidth }), className)}
        aria-busy={loading || undefined}
        disabled={disabled || loading}
        {...(!asChild ? { type: (rest as any).type ?? "button" } : {})}
        {...rest}
      >
        {loading && <Spinner size="sm" color={intent === "primary" || intent === "danger" ? "white" : "current"} className="mr-2" />}
        {!loading && leftIcon && <span className="mr-2 inline-flex items-center">{leftIcon}</span>}
        {children}
        {!loading && rightIcon && <span className="ml-2 inline-flex items-center">{rightIcon}</span>}
      </Comp>
    );
  }
);
Button.displayName = "Button";
