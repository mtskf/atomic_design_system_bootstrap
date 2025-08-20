import type { Meta, StoryObj } from "@storybook/react";
import { AssetAllocation } from "./AssetAllocation";
import type { AllocationData } from "../types/investments";

const sampleData: AllocationData = {
  current: [
    { label: "Australian Shares", weight: 0.28 },
    { label: "International Shares", weight: 0.34 },
    { label: "Property", weight: 0.08 },
    { label: "Fixed Interest", weight: 0.18 },
    { label: "Cash", weight: 0.12 },
  ],
  ranges: [
    { label: "Australian Shares", min: 0.15, strategic: 0.25, max: 0.35, current: 0.28 },
    { label: "International Shares", min: 0.20, strategic: 0.35, max: 0.45, current: 0.34 },
    { label: "Property", min: 0.05, strategic: 0.10, max: 0.15, current: 0.08 },
    { label: "Fixed Interest", min: 0.10, strategic: 0.20, max: 0.30, current: 0.18 },
    { label: "Cash", min: 0.05, strategic: 0.10, max: 0.20, current: 0.12 },
  ],
};

const meta: Meta<typeof AssetAllocation> = {
  title: "Organisms/AssetAllocation",
  component: AssetAllocation,
  parameters: { layout: "padded" },
  args: { data: sampleData },
};

export default meta;
type Story = StoryObj<typeof AssetAllocation>;

export const Default: Story = {};


