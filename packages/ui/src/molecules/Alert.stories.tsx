import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from "./Alert";
import { Button } from "../primitives/Button";

const meta: Meta<typeof Alert> = {
  title: "Molecules/Alert",
  component: Alert,
  parameters: {
    layout: "padded",
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["info", "success", "warning", "error"],
    },
    dismissible: {
      control: { type: "boolean" },
    },
    hideIcon: {
      control: { type: "boolean" },
    },
    title: {
      control: { type: "text" },
    },
  },
  args: {
    variant: "info",
    dismissible: false,
    hideIcon: false,
    children: "This is an alert message.",
  },
};

export default meta;
export type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: {
    children: "This is a default info alert.",
  },
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-4 max-w-lg">
      <Alert variant="info" title="Information">
        Here's some helpful information for you to review.
      </Alert>

      <Alert variant="success" title="Success!">
        Your changes have been saved successfully.
      </Alert>

      <Alert variant="warning" title="Warning">
        Please review your information before proceeding.
      </Alert>

      <Alert variant="error" title="Error">
        There was an error processing your request. Please try again.
      </Alert>
    </div>
  ),
};

export const Dismissible: Story = {
  render: () => (
    <div className="space-y-4 max-w-lg">
      <Alert
        variant="success"
        title="Success!"
        dismissible
        onDismiss={() => console.log("Alert dismissed")}
      >
        This alert can be dismissed by clicking the X button.
      </Alert>

      <Alert
        variant="warning"
        dismissible
        onDismiss={() => console.log("Warning dismissed")}
      >
        This is a warning without a title that can be dismissed.
      </Alert>
    </div>
  ),
};

export const WithoutIcon: Story = {
  render: () => (
    <div className="space-y-4 max-w-lg">
      <Alert variant="info" hideIcon title="No Icon">
        This alert doesn't display an icon.
      </Alert>

      <Alert variant="success" hideIcon>
        Success message without icon or title.
      </Alert>
    </div>
  ),
};

export const WithActions: Story = {
  render: () => (
    <div className="space-y-4 max-w-lg">
      <Alert variant="warning" title="Confirmation Required">
        <p className="mb-3">
          Are you sure you want to delete this item? This action cannot be undone.
        </p>
        <div className="flex gap-2">
          <Button size="sm" intent="danger">Delete</Button>
          <Button size="sm" intent="ghost">Cancel</Button>
        </div>
      </Alert>

      <Alert variant="info" title="New Feature Available">
        <p className="mb-3">
          We've added new retirement planning tools to help you better prepare for the future.
        </p>
        <Button size="sm">Learn More</Button>
      </Alert>
    </div>
  ),
};

export const LongContent: Story = {
  render: () => (
    <div className="max-w-lg">
      <Alert variant="error" title="Multiple Validation Errors" dismissible>
        <p className="mb-2">Please fix the following errors before continuing:</p>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>Email address is required</li>
          <li>Password must be at least 8 characters</li>
          <li>Phone number format is invalid</li>
          <li>Date of birth cannot be in the future</li>
        </ul>
      </Alert>
    </div>
  ),
};

export const SystemAlerts: Story = {
  render: () => (
    <div className="space-y-4 max-w-2xl">
      <Alert variant="info" title="Scheduled Maintenance">
        Our systems will be undergoing maintenance on Sunday, March 15th from 2:00 AM to 6:00 AM AEDT.
        Some services may be temporarily unavailable during this time.
      </Alert>

      <Alert variant="warning" title="Account Security">
        We noticed a login from a new device. If this wasn't you, please secure your account immediately.
      </Alert>

      <Alert variant="success" title="Portfolio Update">
        Your investment portfolio has been updated with your new allocations. Changes will take effect on the next business day.
      </Alert>
    </div>
  ),
};
