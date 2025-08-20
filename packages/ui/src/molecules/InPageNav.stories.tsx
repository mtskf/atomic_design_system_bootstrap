import type { Meta, StoryObj } from "@storybook/react";
import { InPageNav } from "../index";

const meta: Meta<typeof InPageNav> = {
  title: "Molecules/InPageNav",
  component: InPageNav,
};
export default meta;
type Story = StoryObj<typeof InPageNav>;

export const Basic: Story = {
  args: {
    items: [
      { id: "overview", label: "Overview" },
      { id: "contributions", label: "Contributions" },
      { id: "insurance", label: "Insurance" },
      { id: "investments", label: "Investments" },
    ],
    currentId: "overview",
  },
};
