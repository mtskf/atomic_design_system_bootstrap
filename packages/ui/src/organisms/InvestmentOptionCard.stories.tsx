import type { Meta, StoryObj } from "@storybook/react";
import { InvestmentOptionCard, type InvestmentOption } from "./InvestmentOptionCard";

const baseOption: InvestmentOption = {
  id: "balanced",
  name: "Balanced",
  summary: "A diversified option aiming to balance growth and defensive assets.",
  objective: "To provide medium to long-term returns with moderate volatility by investing across a broad range of asset classes.",
  riskBand: 4,
  riskLabel: "Medium",
  suggestedTimeframe: "5+ years",
  performance: [
    { periodLabel: "1 yr", returnPercent: 7.2 },
    { periodLabel: "3 yrs p.a.", returnPercent: 5.1 },
    { periodLabel: "5 yrs p.a.", returnPercent: 6.0 },
  ],
  fees: {
    administration: "$1.50/wk + 0.10% p.a.",
    investment: "0.59% p.a. (ICR)",
    buySellSpread: "+0.05% / -0.05%",
  },
  assetAllocation: [
    { label: "Australian Shares", percent: 22 },
    { label: "International Shares", percent: 28 },
    { label: "Property", percent: 6 },
    { label: "Infrastructure", percent: 7 },
    { label: "Fixed Interest", percent: 20 },
    { label: "Cash", percent: 17 },
  ],
  disclaimer:
    "Past performance isn’t a reliable indicator of future performance. This information is general and doesn’t consider your objectives, financial situation or needs.",
};

const meta: Meta<typeof InvestmentOptionCard> = {
  title: "Organisms/InvestmentOptionCard",
  component: InvestmentOptionCard,
  parameters: {
    layout: "padded",
  },
  args: {
    option: baseOption,
  },
};

export default meta;
type Story = StoryObj<typeof InvestmentOptionCard>;

export const Default: Story = {};

export const Compact: Story = {
  args: {
    compact: true,
  },
};

export const MultipleCards: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      <InvestmentOptionCard option={baseOption} />
      <InvestmentOptionCard option={{
        ...baseOption,
        id: "growth",
        name: "Growth",
        riskBand: 6,
        riskLabel: "High",
        performance: [
          { periodLabel: "1 yr", returnPercent: 9.8 },
          { periodLabel: "3 yrs p.a.", returnPercent: 6.3 },
          { periodLabel: "5 yrs p.a.", returnPercent: 7.1 },
        ],
      }} />
      <InvestmentOptionCard option={{
        ...baseOption,
        id: "conservative",
        name: "Conservative",
        riskBand: 2,
        riskLabel: "Low",
        performance: [
          { periodLabel: "1 yr", returnPercent: 3.2 },
          { periodLabel: "3 yrs p.a.", returnPercent: 2.4 },
          { periodLabel: "5 yrs p.a.", returnPercent: 2.8 },
        ],
      }} />
    </div>
  ),
};
