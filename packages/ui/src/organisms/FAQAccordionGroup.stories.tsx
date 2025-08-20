import type { Meta, StoryObj } from "@storybook/react";
import { FAQAccordionGroup } from "../index";

const meta: Meta<typeof FAQAccordionGroup> = {
  title: "Organisms/FAQAccordionGroup",
  component: FAQAccordionGroup,
};
export default meta;
type Story = StoryObj<typeof FAQAccordionGroup>;

export const Basic: Story = {
  args: {
    categories: [
      {
        label: "Contributions",
        items: [
          { id: "c1", question: "How do I make extra contributions?", answer: "You can contribute before or after tax..." },
          { id: "c2", question: "What are the caps?", answer: "Contribution caps vary by type and year..." },
        ],
      },
      {
        label: "Insurance",
        items: [
          { id: "i1", question: "Do I have default cover?", answer: "Most members receive default cover when they join..." },
          { id: "i2", question: "How to change my cover?", answer: "You can increase, decrease, or cancel your cover..." },
        ],
      },
    ],
  },
};


