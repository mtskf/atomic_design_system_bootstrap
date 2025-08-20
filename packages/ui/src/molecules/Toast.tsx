import * as React from "react";
import * as ToastPrimitive from "@radix-ui/react-toast";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/cn";
import { Icon } from "../primitives/Icon";
import { Button } from "../primitives/Button";

const toastStyles = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-md p-4 pr-6 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full min-w-[320px] max-w-[420px]",
  {
    variants: {
      variant: {
        default: "border border-mid-grey-400 bg-white text-inky-blue-600",
        success: "border border-radiant-green-500 bg-fresh-mint-500 text-dark-green-600",
        warning: "border border-sunny-yellow-500 bg-sunny-yellow-500 text-inky-blue-600",
        danger: "border border-red-500 bg-white text-red-700",
        info: "border border-mid-blue-500 bg-white text-mid-blue-700",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface ToastProps
  extends React.ComponentPropsWithoutRef<typeof ToastPrimitive.Root>,
    VariantProps<typeof toastStyles> {
  /**
   * Toast title
   */
  title?: string;
  /**
   * Toast description/message
   */
  description?: string;
  /**
   * Action button configuration
   */
  action?: {
    label: string;
    onClick: () => void;
  };
  /**
   * Show close button
   */
  closable?: boolean;
  /**
   * Custom icon
   */
  icon?: React.ReactNode;
  /**
   * Hide default variant icon
   */
  hideIcon?: boolean;
  /**
   * Auto dismiss after duration (for Storybook stories)
   */
  autoDismiss?: boolean;
}

const getVariantIcon = (variant: string) => {
  switch (variant) {
    case "success":
      return (
        <Icon size="sm" className="text-dark-green-600">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </Icon>
      );
    case "warning":
      return (
        <Icon size="sm" className="text-inky-blue-600">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.73-.833-2.5 0L4.268 16.5c-.77.833.192 2.5 1.732 2.5z" />
        </Icon>
      );
    case "danger":
      return (
        <Icon size="sm" className="text-red-700">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </Icon>
      );
    case "info":
      return (
        <Icon size="sm" className="text-mid-blue-700">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </Icon>
      );
    default:
      return (
        <Icon size="sm" className="text-inky-blue-600">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </Icon>
      );
  }
};

/**
 * Toast component for displaying notifications
 *
 * @example
 * ```tsx
 * <Toast
 *   variant="success"
 *   title="Success!"
 *   description="Your changes have been saved."
 * />
 * ```
 */
export const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Root>,
  ToastProps
>(({
  className,
  variant,
  title,
  description,
  action,
  closable = true,
  icon,
  hideIcon = false,
  ...rest
}, ref) => {
  const variantIcon = !hideIcon && !icon ? getVariantIcon(variant || "default") : null;

  return (
    <ToastPrimitive.Root
      ref={ref}
      className={cn(toastStyles({ variant }), className)}
      {...rest}
    >
      <div className="flex items-start space-x-3 flex-1">
        {(icon || variantIcon) && (
          <div className="flex-shrink-0 mt-0.5">
            {icon || variantIcon}
          </div>
        )}

        <div className="flex-1 min-w-0">
          {title && (
            <ToastPrimitive.Title className="text-sm font-medium">
              {title}
            </ToastPrimitive.Title>
          )}
          {description && (
            <ToastPrimitive.Description className={cn(
              "text-sm opacity-90",
              title && "mt-1"
            )}>
              {description}
            </ToastPrimitive.Description>
          )}

          {action && (
            <div className="mt-3">
              <Button
                size="sm"
                intent="ghost"
                onClick={action.onClick}
                className="h-8 px-3 text-xs"
              >
                {action.label}
              </Button>
            </div>
          )}
        </div>
      </div>

      {closable && (
        <ToastPrimitive.Close className="absolute right-1 top-1 rounded-md p-1 text-current/50 opacity-0 transition-opacity hover:text-current focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100">
          <Icon size="xs">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </Icon>
          <span className="sr-only">Close</span>
        </ToastPrimitive.Close>
      )}
    </ToastPrimitive.Root>
  );
});

Toast.displayName = "Toast";

// Toast Viewport for positioning
export const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Viewport>
>(({ className, ...rest }, ref) => (
  <ToastPrimitive.Viewport
    ref={ref}
    className={cn(
      "fixed top-0 z-[9999] flex max-h-screen w-full flex-col-reverse p-4 gap-2 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className
    )}
    {...rest}
  />
));

ToastViewport.displayName = "ToastViewport";

// Toast Provider
export const ToastProvider = ToastPrimitive.Provider;

// Hook for managing toasts
export interface ToastOptions {
  title?: string;
  description?: string;
  variant?: "default" | "success" | "warning" | "danger" | "info";
  action?: {
    label: string;
    onClick: () => void;
  };
  duration?: number;
  closable?: boolean;
}

interface ToastState {
  id: string;
  open: boolean;
  props: ToastOptions;
}

const toastStore = {
  toasts: [] as ToastState[],
  listeners: [] as Array<(toasts: ToastState[]) => void>,

  addToast(props: ToastOptions) {
    const id = Math.random().toString(36).substring(2, 9);
    const toast: ToastState = {
      id,
      open: true,
      props,
    };

    this.toasts.push(toast);
    this.notifyListeners();

    // Auto remove after duration
    if (props.duration !== 0) {
      setTimeout(() => {
        this.removeToast(id);
      }, props.duration || 5000);
    }

    return id;
  },

  removeToast(id: string) {
    const index = this.toasts.findIndex(t => t.id === id);
    if (index > -1) {
      this.toasts[index].open = false;
      this.notifyListeners();

      // Remove from array after animation
      setTimeout(() => {
        this.toasts = this.toasts.filter(t => t.id !== id);
        this.notifyListeners();
      }, 200);
    }
  },

  subscribe(listener: (toasts: ToastState[]) => void) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  },

  notifyListeners() {
    this.listeners.forEach(listener => listener([...this.toasts]));
  }
};

export const useToast = () => {
  const [toasts, setToasts] = React.useState<ToastState[]>([]);

  React.useEffect(() => {
    return toastStore.subscribe(setToasts);
  }, []);

  const toast = React.useCallback((props: ToastOptions) => {
    return toastStore.addToast(props);
  }, []);

  const dismiss = React.useCallback((id: string) => {
    toastStore.removeToast(id);
  }, []);

  return {
    toasts,
    toast,
    dismiss,
  };
};

// Toaster component to render all toasts
export const Toaster: React.FC = () => {
  const { toasts, dismiss } = useToast();

  return (
    <ToastProvider>
      {toasts.map((toastItem) => (
        <Toast
          key={toastItem.id}
          open={toastItem.open}
          onOpenChange={(open) => {
            if (!open) dismiss(toastItem.id);
          }}
          duration={toastItem.props.duration || 5000}
          {...toastItem.props}
        />
      ))}
      <ToastViewport />
    </ToastProvider>
  );
};
