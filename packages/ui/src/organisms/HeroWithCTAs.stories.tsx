import type { Meta, StoryObj } from "@storybook/react";
import { HeroWithCTAs } from "../index";

const meta: Meta<typeof HeroWithCTAs> = {
  title: "Organisms/HeroWithCTAs",
  component: HeroWithCTAs,
};
export default meta;
type Story = StoryObj<typeof HeroWithCTAs>;

export const Basic: Story = {
  args: {
    eyebrow: "Members",
    title: "Make the most of your super",
    lead: "Learn how to grow and manage your super at every stage.",
    primaryCta: { label: "Join CareSuper", href: "/join" },
    secondaryCta: { label: "Log in", href: "/login", intent: "secondary" },
  },
};

export const WithBothCTAs: Story = {
  args: {
    eyebrow: "Employers",
    title: "Super solutions for your business",
    lead: "Help your employees build a better financial future with our employer solutions.",
    primaryCta: { label: "Join CareSuper", href: "/employers/join" },
    secondaryCta: { label: "Log in", href: "/employers/login", intent: "secondary" },
  },
};

export const GradientBg: Story = {
  args: {
    eyebrow: "Investments",
    title: "Grow your super with confidence",
    gradient: true,
    primaryCta: { label: "Compare options", href: "#" },
  },
};
