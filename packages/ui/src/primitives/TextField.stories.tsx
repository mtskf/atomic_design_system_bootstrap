import type { Meta, StoryObj } from "@storybook/react";
import { TextField } from "../index";

const meta: Meta<typeof TextField> = {
  title: "Atoms/TextField",
  component: TextField,
  parameters: { layout: "centered" },
};
export default meta;
export type Story = StoryObj<typeof TextField>;

export const Basic: Story = { args: { label: "Full Name", placeholder: "Enter your full name" } };
export const Helper: Story = { args: { label: "Member Number", helperText: "Found on your CareSuper card or statements" } };
export const Error: Story = { args: { label: "Email Address", errorText: "Please enter a valid email address" } };
export const Required: Story = { args: { label: "Date of Birth", placeholder: "DD/MM/YYYY", required: true } };
