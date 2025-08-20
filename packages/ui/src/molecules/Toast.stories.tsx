import type { Meta, StoryObj } from "@storybook/react";
import { Toast, ToastProvider, ToastViewport, useToast, Toaster } from "./Toast";
import { Button } from "../primitives/Button";
import { Card } from "../molecules/Card";
import * as React from "react";

const meta: Meta<typeof Toast> = {
  title: "Molecules/Toast",
  component: Toast,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <ToastProvider>
        <Story />
        <ToastViewport />
      </ToastProvider>
    ),
  ],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "success", "warning", "danger", "info"],
    },
    closable: {
      control: { type: "boolean" },
    },
    hideIcon: {
      control: { type: "boolean" },
    },
    duration: {
      control: { type: "number" },
      description: "Auto-dismiss duration in milliseconds. Set to 0 to persist until manually closed.",
    },
    autoDismiss: {
      control: { type: "boolean" },
      description: "Whether the toast should auto-dismiss after a duration",
    },
  },
  args: {
    variant: "default",
    title: "Notification",
    description: "This is a sample notification message.",
    closable: true,
    hideIcon: false,
    duration: 0,
    autoDismiss: false,
  },
};

export default meta;
export type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  render: (args) => {
    const [open, setOpen] = React.useState(true);
    const [timeoutId, setTimeoutId] = React.useState<NodeJS.Timeout | null>(null);

    React.useEffect(() => {
      // Clear existing timeout
      if (timeoutId) {
        clearTimeout(timeoutId);
        setTimeoutId(null);
      }

      // Set new timeout if autoDismiss is enabled
      if (args.autoDismiss && args.duration && args.duration > 0 && open) {
        const id = setTimeout(() => {
          setOpen(false);
        }, args.duration);
        setTimeoutId(id);
      }

      return () => {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
      };
    }, [args.autoDismiss, args.duration, open]);

    const handleOpenChange = (newOpen: boolean) => {
      setOpen(newOpen);
      if (timeoutId) {
        clearTimeout(timeoutId);
        setTimeoutId(null);
      }
    };

    return (
      <div className="h-32 w-96 relative">
        <Toast
          {...args}
          open={open}
          onOpenChange={handleOpenChange}
        />
        <div className="absolute bottom-0 left-0 right-0 p-2 bg-light-grey-100 rounded text-xs text-inky-blue-500">
          {args.autoDismiss
            ? `Auto-dismiss: ${args.duration}ms`
            : "Persistent (no auto-dismiss)"
          }
          {!open && (
            <button
              onClick={() => setOpen(true)}
              className="ml-2 px-2 py-1 bg-mid-blue-500 text-white rounded text-xs"
            >
              Show Again
            </button>
          )}
        </div>
      </div>
    );
  },
  args: {
    title: "Default notification",
    description: "This is a basic notification message.",
    variant: "default",
    duration: 3000,
    autoDismiss: true,
  },
};

export const AutoDismissDemo: Story = {
  render: () => {
    const [toasts, setToasts] = React.useState<Array<{id: string, open: boolean, timeoutId?: NodeJS.Timeout}>>([]);

    const addToast = (duration: number, autoDismiss: boolean = true) => {
      const id = Math.random().toString(36).substring(2, 9);
      const newToast = { id, open: true };

      setToasts(prev => [...prev, newToast]);

      if (autoDismiss && duration > 0) {
        const timeoutId = setTimeout(() => {
          setToasts(prev => prev.map(t => t.id === id ? { ...t, open: false } : t));
          // Remove after animation
          setTimeout(() => {
            setToasts(prev => prev.filter(t => t.id !== id));
          }, 300);
        }, duration);
      }
    };

    const clearAllToasts = () => {
      setToasts([]);
    };

    return (
      <div className="h-96 w-full bg-light-grey-100 p-4 relative border rounded-lg">
        <div className="mb-4 space-y-2">
          <h3 className="text-sm font-medium text-inky-blue-500">Auto-dismiss Test Controls:</h3>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => addToast(2000)}
              className="px-3 py-1 bg-mid-blue-500 text-white rounded text-sm"
            >
              2s Auto-dismiss
            </button>
            <button
              onClick={() => addToast(5000)}
              className="px-3 py-1 bg-mid-blue-600 text-white rounded text-sm"
            >
              5s Auto-dismiss
            </button>
            <button
              onClick={() => addToast(0, false)}
              className="px-3 py-1 bg-dark-green-500 text-white rounded text-sm"
            >
              Persistent (No auto-dismiss)
            </button>
            <button
              onClick={clearAllToasts}
              className="px-3 py-1 bg-red-500 text-white rounded text-sm"
            >
              Clear All
            </button>
          </div>
        </div>

        <div className="space-y-2">
          {toasts.map((toast) => (
            <Toast
              key={toast.id}
              open={toast.open}
              onOpenChange={(open) => {
                if (!open) {
                  setToasts(prev => prev.map(t => t.id === toast.id ? { ...t, open: false } : t));
                  setTimeout(() => {
                    setToasts(prev => prev.filter(t => t.id !== toast.id));
                  }, 300);
                }
              }}
              variant="info"
              title={`Toast ${toast.id.slice(-3)}`}
              description="This toast will auto-dismiss based on the button clicked"
              className="relative"
            />
          ))}
        </div>
      </div>
    );
  },
};

export const Variants: Story = {
  render: () => {
    const [open, setOpen] = React.useState({
      default: true,
      success: true,
      warning: true,
      danger: true,
      info: true,
    });

    return (
      <div className="space-y-4 w-full max-w-md">
        <div className="p-2 bg-light-grey-100 rounded text-xs text-inky-blue-500 mb-4">
          These toasts persist until manually closed (no auto-dismiss)
        </div>

        <div className="relative">
          <Toast
            open={open.default}
            onOpenChange={(isOpen) => setOpen(prev => ({ ...prev, default: isOpen }))}
            variant="default"
            title="Default notification"
            description="This is a default notification message."
            duration={0}
          />
        </div>

        <div className="relative">
          <Toast
            open={open.success}
            onOpenChange={(isOpen) => setOpen(prev => ({ ...prev, success: isOpen }))}
            variant="success"
            title="Success!"
            description="Your changes have been saved successfully."
            duration={0}
          />
        </div>

        <div className="relative">
          <Toast
            open={open.warning}
            onOpenChange={(isOpen) => setOpen(prev => ({ ...prev, warning: isOpen }))}
            variant="warning"
            title="Warning"
            description="Please review your input before continuing."
            duration={0}
          />
        </div>

        <div className="relative">
          <Toast
            open={open.danger}
            onOpenChange={(isOpen) => setOpen(prev => ({ ...prev, danger: isOpen }))}
            variant="danger"
            title="Error"
            description="Something went wrong. Please try again."
            duration={0}
          />
        </div>

        <div className="relative">
          <Toast
            open={open.info}
            onOpenChange={(isOpen) => setOpen(prev => ({ ...prev, info: isOpen }))}
            variant="info"
            title="Information"
            description="Here's some helpful information for you."
            duration={0}
          />
        </div>
      </div>
    );
  },
};

export const WithActions: Story = {
  render: () => {
    const [open, setOpen] = React.useState(true);

    return (
      <div className="h-32 w-full max-w-md relative">
        <div className="absolute top-0 left-0 right-0 p-1 bg-light-grey-100 rounded text-xs text-inky-blue-500">
          Persistent toast (no auto-dismiss)
        </div>
        <Toast
          open={open}
          onOpenChange={setOpen}
          variant="success"
          title="Account created"
          description="Welcome to CareSuper! Your account has been created successfully."
          action={{
            label: "View Account",
            onClick: () => alert("Navigating to account page..."),
          }}
          duration={0}
        />
      </div>
    );
  },
};

export const WithoutIcon: Story = {
  render: () => {
    const [open, setOpen] = React.useState(true);

    return (
      <div className="h-24 w-full max-w-md relative">
        <div className="absolute top-0 left-0 right-0 p-1 bg-light-grey-100 rounded text-xs text-inky-blue-500">
          Persistent toast (no auto-dismiss)
        </div>
        <Toast
          open={open}
          onOpenChange={setOpen}
          variant="info"
          title="System maintenance"
          description="Scheduled maintenance will occur tonight from 2-4 AM AEST."
          hideIcon
          duration={0}
        />
      </div>
    );
  },
};

export const SimpleMessage: Story = {
  render: () => {
    const [open, setOpen] = React.useState(true);

    return (
      <div className="h-20 w-full max-w-md relative">
        <div className="absolute top-0 left-0 right-0 p-1 bg-light-grey-100 rounded text-xs text-inky-blue-500">
          Persistent toast (no auto-dismiss)
        </div>
        <Toast
          open={open}
          onOpenChange={setOpen}
          variant="success"
          description="File uploaded successfully!"
          duration={0}
        />
      </div>
    );
  },
};

// Hook examples
const ToastDemoComponent: React.FC = () => {
  const { toast } = useToast();

  const showToast = (variant: "default" | "success" | "warning" | "danger" | "info") => {
    const messages = {
      default: { title: "Notification", description: "This is a default notification." },
      success: { title: "Success!", description: "Operation completed successfully." },
      warning: { title: "Warning", description: "Please check your input." },
      danger: { title: "Error", description: "Something went wrong." },
      info: { title: "Info", description: "Here's some information." },
    };

    toast({
      ...messages[variant],
      variant,
      duration: 5000,
    });
  };

  const showActionToast = () => {
    toast({
      title: "New message",
      description: "You have a new message from your financial advisor.",
      variant: "info",
      action: {
        label: "View",
        onClick: () => alert("Opening message..."),
      },
      duration: 0, // Persist until closed
    });
  };

  const showMultipleToasts = () => {
    // Show multiple toasts with slight delays to see stacking
    setTimeout(() => showToast("success"), 0);
    setTimeout(() => showToast("warning"), 200);
    setTimeout(() => showToast("info"), 400);
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-2">
        <Button size="sm" onClick={() => showToast("default")}>
          Default
        </Button>
        <Button size="sm" onClick={() => showToast("success")}>
          Success
        </Button>
        <Button size="sm" onClick={() => showToast("warning")}>
          Warning
        </Button>
        <Button size="sm" onClick={() => showToast("danger")}>
          Error
        </Button>
        <Button size="sm" onClick={() => showToast("info")}>
          Info
        </Button>
        <Button size="sm" onClick={showActionToast}>
          With Action
        </Button>
      </div>
      <div className="pt-2 border-t border-mid-grey-200">
        <Button size="sm" intent="secondary" onClick={showMultipleToasts} className="w-full">
          Show Multiple Toasts (Test Spacing)
        </Button>
      </div>
    </div>
  );
};

export const InteractiveDemo: Story = {
  render: () => (
    <div className="space-y-4">
      <Card>
        <Card.Header>
          <Card.Title>Toast Notifications</Card.Title>
          <Card.Description>
            Click the buttons below to see different toast notifications
          </Card.Description>
        </Card.Header>
        <Card.Body>
          <ToastDemoComponent />
        </Card.Body>
      </Card>
      <Toaster />
    </div>
  ),
};

export const FinancialScenarios: Story = {
  render: () => {
    const { toast } = useToast();

    const scenarios = [
      {
        label: "Contribution Success",
        action: () => toast({
          title: "Contribution processed",
          description: "$500 has been added to your account.",
          variant: "success",
          action: {
            label: "View Details",
            onClick: () => alert("Showing contribution details..."),
          },
        }),
      },
      {
        label: "Investment Update",
        action: () => toast({
          title: "Market update",
          description: "Your portfolio is up 2.3% this month.",
          variant: "info",
        }),
      },
      {
        label: "Payment Failed",
        action: () => toast({
          title: "Payment failed",
          description: "Unable to process your contribution. Please check your payment method.",
          variant: "danger",
          action: {
            label: "Retry",
            onClick: () => alert("Retrying payment..."),
          },
        }),
      },
      {
        label: "Account Warning",
        action: () => toast({
          title: "Low balance warning",
          description: "Your account balance is below the recommended minimum.",
          variant: "warning",
        }),
      },
      {
        label: "Document Ready",
        action: () => toast({
          title: "Annual statement ready",
          description: "Your 2024 annual statement is now available for download.",
          variant: "success",
          action: {
            label: "Download",
            onClick: () => alert("Downloading statement..."),
          },
        }),
      },
    ];

    return (
      <div className="max-w-md space-y-4">
        <Card>
          <Card.Header>
            <Card.Title>CareSuper Notifications</Card.Title>
            <Card.Description>
              Common notification scenarios for superannuation management
            </Card.Description>
          </Card.Header>
          <Card.Body className="space-y-2">
            {scenarios.map((scenario, index) => (
              <Button
                key={index}
                size="sm"
                intent="ghost"
                onClick={scenario.action}
                className="w-full justify-start"
              >
                {scenario.label}
              </Button>
            ))}
          </Card.Body>
        </Card>
        <Toaster />
      </div>
    );
  },
};

export const PersistentToast: Story = {
  render: () => {
    const { toast } = useToast();

    const showPersistentToast = () => {
      toast({
        title: "Action required",
        description: "Your ID verification is pending. Please upload required documents.",
        variant: "warning",
        action: {
          label: "Upload Documents",
          onClick: () => alert("Opening document upload..."),
        },
        duration: 0, // Won't auto-dismiss
      });
    };

    return (
      <div className="space-y-4">
        <Card>
          <Card.Header>
            <Card.Title>Persistent Notifications</Card.Title>
            <Card.Description>
              Some notifications require user action and won't auto-dismiss
            </Card.Description>
          </Card.Header>
          <Card.Body>
            <Button onClick={showPersistentToast}>
              Show Persistent Toast
            </Button>
          </Card.Body>
        </Card>
        <Toaster />
      </div>
    );
  },
};
