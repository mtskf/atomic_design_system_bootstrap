import type { Meta, StoryObj } from "@storybook/react";
import { GeneralAdviceWarning } from "./GeneralAdviceWarning";

const meta: Meta<typeof GeneralAdviceWarning> = {
  title: "Molecules/GeneralAdviceWarning",
  component: GeneralAdviceWarning,
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj<typeof GeneralAdviceWarning>;

export const Default: Story = {
  render: () => (
    <GeneralAdviceWarning>
      This information is of a general nature only and does not take into account your objectives, financial situation or needs.
    </GeneralAdviceWarning>
  ),
};

export const WithCustomContent: Story = {
  args: {
    children: (
      <>
        Consider the appropriateness of this information and read the relevant PDS before making a decision.
      </>
    ),
  },
};


