import type { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "./Spinner";

const meta: Meta<typeof Spinner> = {
  title: "Atoms/Spinner",
  component: Spinner,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg"],
    },
    color: {
      control: { type: "select" },
      options: ["primary", "current", "white"],
    },
    label: {
      control: { type: "text" },
    },
  },
  args: {
    size: "md",
    color: "primary",
    label: "Loading",
  },
};

export default meta;
export type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: {},
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Spinner size="xs" />
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <div className="p-4 bg-white rounded">
        <Spinner color="primary" />
      </div>
      <div className="p-4 bg-inky-blue-500 rounded">
        <Spinner color="white" />
      </div>
      <div className="p-4 bg-fresh-mint-500 rounded text-inky-blue-500">
        <Spinner color="current" />
      </div>
    </div>
  ),
};

export const InButton: Story = {
  render: () => (
    <div className="flex gap-4">
      <button className="inline-flex items-center gap-2 px-4 py-2 bg-mid-blue-500 text-white rounded-md">
        <Spinner size="sm" color="white" />
        Loading...
      </button>
      <button className="inline-flex items-center gap-2 px-4 py-2 bg-fresh-mint-500 text-inky-blue-500 rounded-md border border-mid-grey-400">
        <Spinner size="sm" color="current" />
        Processing
      </button>
    </div>
  ),
};
