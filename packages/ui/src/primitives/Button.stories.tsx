import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../index";
import { LucideIcon, ChevronDownIcon, ExternalLinkIcon, CheckIcon } from "./Icon";

const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
  parameters: { layout: "centered" },
  argTypes: { onClick: { action: "clicked" } },
};
export default meta;
export type Story = StoryObj<typeof Button>;

export const Primary: Story = { args: { intent: "primary", children: "Get Started" } };
export const Secondary: Story = { args: { intent: "secondary", children: "Learn More" } };
export const Success: Story = { args: { intent: "success", children: "Join CareSuper" } };
export const Warning: Story = { args: { intent: "warning", children: "Update Plan" } };
export const Ghost: Story = { args: { intent: "ghost", children: "Contact Us" } };
export const Danger: Story = { args: { intent: "danger", children: "Close Account" } };
export const Gradient: Story = { args: { intent: "gradient", children: "Hero Action" } };
export const Disabled: Story = { args: { intent: "primary", disabled: true, children: "Get Started" } };
export const Loading: Story = { args: { intent: "primary", loading: true, children: "Processing..." } };

// Icon Button Examples
export const WithLeftIcon: Story = {
  args: {
    intent: "primary",
    leftIcon: <LucideIcon iconName="Download" size="sm" />,
    children: "Download"
  }
};

export const WithRightIcon: Story = {
  args: {
    intent: "secondary",
    rightIcon: <ExternalLinkIcon size="sm" />,
    children: "Learn More"
  }
};

export const WithBothIcons: Story = {
  args: {
    intent: "success",
    leftIcon: <CheckIcon size="sm" />,
    rightIcon: <ChevronDownIcon size="sm" />,
    children: "Complete & Next"
  }
};

export const IconOnlyButton: Story = {
  args: {
    intent: "ghost",
    leftIcon: <LucideIcon iconName="Settings" size="sm" />,
    children: "",
    "aria-label": "Settings"
  }
};

export const VariousIconButtons: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4 items-center">
      <Button intent="primary" leftIcon={<LucideIcon iconName="Plus" size="sm" />}>
        Add Item
      </Button>
      <Button intent="secondary" rightIcon={<LucideIcon iconName="ArrowRight" size="sm" />}>
        Continue
      </Button>
      <Button intent="warning" leftIcon={<LucideIcon iconName="AlertTriangle" size="sm" />}>
        Warning
      </Button>
      <Button intent="danger" leftIcon={<LucideIcon iconName="Trash2" size="sm" />}>
        Delete
      </Button>
      <Button intent="ghost" leftIcon={<LucideIcon iconName="Edit" size="sm" />}>
        Edit
      </Button>
      <Button intent="gradient" rightIcon={<LucideIcon iconName="Sparkles" size="sm" />}>
        Magic
      </Button>
    </div>
  ),
};
