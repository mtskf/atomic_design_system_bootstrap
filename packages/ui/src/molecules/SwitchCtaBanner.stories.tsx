import type { Meta, StoryObj } from "@storybook/react";
import { SwitchCtaBanner } from "./SwitchCtaBanner";

const meta: Meta<typeof SwitchCtaBanner> = {
  title: "Molecules/SwitchCtaBanner",
  component: SwitchCtaBanner,
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj<typeof SwitchCtaBanner>;

export const Default: Story = {
  args: {
    onClick: () => alert("Switch CTA clicked"),
  },
};
