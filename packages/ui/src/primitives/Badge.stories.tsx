import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "Atoms/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "primary", "success", "warning", "danger"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    removable: {
      control: { type: "boolean" },
    },
  },
  args: {
    variant: "default",
    size: "md",
    children: "Badge",
    removable: false,
  },
};

export default meta;
export type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    children: "Default Badge",
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="default">Default</Badge>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="danger">Danger</Badge>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </div>
  ),
};

export const Removable: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="default" removable onRemove={() => alert("Removed!")}>
        Removable
      </Badge>
      <Badge variant="primary" removable onRemove={() => alert("Removed!")}>
        React
      </Badge>
      <Badge variant="success" removable onRemove={() => alert("Removed!")}>
        TypeScript
      </Badge>
      <Badge variant="warning" removable onRemove={() => alert("Removed!")}>
        Draft
      </Badge>
    </div>
  ),
};

export const StatusIndicators: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Application Status</h3>
        <div className="flex gap-2">
          <Badge variant="success">Approved</Badge>
          <Badge variant="warning">Under Review</Badge>
          <Badge variant="danger">Rejected</Badge>
        </div>
      </div>
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Tags</h3>
        <div className="flex flex-wrap gap-2">
          <Badge>Frontend</Badge>
          <Badge>React</Badge>
          <Badge>TypeScript</Badge>
          <Badge>Design System</Badge>
        </div>
      </div>
    </div>
  ),
};
