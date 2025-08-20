import type { Meta, StoryObj } from "@storybook/react";

// Documentation component for the overview page
const OverviewComponent = () => (
  <div style={{ padding: "2rem" }}>
    <h1 className="text-display-md font-brand-bold text-inky-blue-500 mb-6">CareSuper Design System</h1>
    <div className="space-y-4">
      <p className="text-body-lg font-brand-book text-inky-blue-500">
        Complete design system built with CareSuper brand guidelines
      </p>
      <ul className="text-body-md font-brand-book text-inky-blue-500 space-y-2">
        <li> Filson Pro typography with complete type scale</li>
        <li> Brand colors with accessibility compliance (WCAG AA)</li>
        <li> Beautiful gradients for hero sections and backgrounds</li>
        <li> Light/Dark theme switching via `data-theme`</li>
        <li> All components meet A11y requirements</li>
      </ul>
    </div>
  </div>
);

const meta: Meta<typeof OverviewComponent> = {
  title: "Intro/Overview",
  component: OverviewComponent,
  parameters: {
    docs: {
      page: () => <OverviewComponent />,
    },
  },
};

export default meta;
export type Story = StoryObj<typeof meta>;

export const Overview: Story = {};
