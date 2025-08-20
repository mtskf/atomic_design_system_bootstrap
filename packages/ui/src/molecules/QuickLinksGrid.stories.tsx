import type { Meta, StoryObj } from "@storybook/react";
import { QuickLinksGrid } from "../index";

const meta: Meta<typeof QuickLinksGrid> = {
  title: "Molecules/QuickLinksGrid",
  component: QuickLinksGrid,
};
export default meta;
type Story = StoryObj<typeof QuickLinksGrid>;

export const Basic: Story = {
  args: {
    columns: 3,
    items: [
      { label: "Join CareSuper", href: "#", icon: "UserPlus", description: "Become a member in minutes" },
      { label: "Log in", href: "#", icon: "LogIn", description: "Access your account" },
      { label: "Compare super", href: "#", icon: "Compare", description: "See how we stack up" },
      { label: "Fees & costs", href: "#", icon: "Receipt", description: "Understand fees" },
      { label: "Forms & publications", href: "#", icon: "FileText", description: "Find documents" },
      { label: "Contact us", href: "#", icon: "Phone", description: "We're here to help" },
    ],
  },
};


