import type { Meta, StoryObj } from "@storybook/react";
import { Breadcrumbs, DropdownBreadcrumbs, type BreadcrumbItem } from "./Breadcrumbs";
import { Icon } from "../primitives/Icon";

const meta: Meta<typeof Breadcrumbs> = {
  title: "Molecules/Breadcrumbs",
  component: Breadcrumbs,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    maxItems: {
      control: { type: "number", min: 2, max: 10 },
    },
  },
  args: {
    size: "md",
  },
};

export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

const basicItems: BreadcrumbItem[] = [
  { label: "Home", href: "/" },
  { label: "Account", href: "/account" },
  { label: "Settings" },
];

const longItems: BreadcrumbItem[] = [
  { label: "Home", href: "/" },
  { label: "Account", href: "/account" },
  { label: "Investment", href: "/account/investment" },
  { label: "Portfolio", href: "/account/investment/portfolio" },
  { label: "Holdings", href: "/account/investment/portfolio/holdings" },
  { label: "Details" },
];

export const Default: Story = {
  args: {
    items: basicItems,
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <p className="text-sm font-medium text-inky-blue-500 mb-2">Small</p>
        <Breadcrumbs size="sm" items={basicItems} />
      </div>

      <div>
        <p className="text-sm font-medium text-inky-blue-500 mb-2">Medium</p>
        <Breadcrumbs size="md" items={basicItems} />
      </div>

      <div>
        <p className="text-sm font-medium text-inky-blue-500 mb-2">Large</p>
        <Breadcrumbs size="lg" items={basicItems} />
      </div>
    </div>
  ),
};

export const CustomSeparator: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <p className="text-sm font-medium text-inky-blue-500 mb-2">Slash Separator</p>
        <Breadcrumbs
          items={basicItems}
          separator={<span className="text-mid-grey-400">/</span>}
        />
      </div>

      <div>
        <p className="text-sm font-medium text-inky-blue-500 mb-2">Arrow Separator</p>
        <Breadcrumbs
          items={basicItems}
          separator={<span className="text-mid-grey-400">→</span>}
        />
      </div>

      <div>
        <p className="text-sm font-medium text-inky-blue-500 mb-2">Custom Icon Separator</p>
        <Breadcrumbs
          items={basicItems}
          separator={
            <Icon size="xs" decorative className="text-mid-grey-400">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7" />
            </Icon>
          }
        />
      </div>
    </div>
  ),
};

export const LongPath: Story = {
  args: {
    items: longItems,
  },
};

export const CollapsedBreadcrumbs: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-medium text-inky-blue-500 mb-2">Max 3 items</p>
        <Breadcrumbs items={longItems} maxItems={3} />
      </div>

      <div>
        <p className="text-sm font-medium text-inky-blue-500 mb-2">Max 4 items</p>
        <Breadcrumbs items={longItems} maxItems={4} />
      </div>

      <div>
        <p className="text-sm font-medium text-inky-blue-500 mb-2">Max 2 items (minimal)</p>
        <Breadcrumbs items={longItems} maxItems={2} />
      </div>
    </div>
  ),
};

export const DropdownExample: Story = {
  render: () => (
    <div className="space-y-4">
      <p className="text-sm font-medium text-inky-blue-500">
        Click the "..." to expand collapsed items
      </p>
      <DropdownBreadcrumbs
        items={longItems}
        maxItems={3}
        onExpandCollapsed={(items) => console.log("Expanded items:", items)}
      />
    </div>
  ),
};

export const FinancialNavigationExamples: Story = {
  render: () => {
    const accountItems: BreadcrumbItem[] = [
      { label: "Dashboard", href: "/dashboard" },
      { label: "My Account", href: "/account" },
      { label: "Investment Options", href: "/account/investments" },
      { label: "Portfolio Performance" },
    ];

    const contributionItems: BreadcrumbItem[] = [
      { label: "Home", href: "/" },
      { label: "Contributions", href: "/contributions" },
      { label: "Salary Sacrifice", href: "/contributions/salary-sacrifice" },
      { label: "Setup" },
    ];

    const supportItems: BreadcrumbItem[] = [
      { label: "Help Center", href: "/help" },
      { label: "Contact Us", href: "/help/contact" },
      { label: "Technical Support", href: "/help/contact/technical" },
      { label: "Account Issues", href: "/help/contact/technical/account" },
      { label: "Login Problems" },
    ];

    return (
      <div className="space-y-6 w-full max-w-2xl">
        <div>
          <h3 className="text-lg font-medium text-inky-blue-500 mb-3">Account Navigation</h3>
          <Breadcrumbs items={accountItems} />
        </div>

        <div>
          <h3 className="text-lg font-medium text-inky-blue-500 mb-3">Contribution Setup</h3>
          <Breadcrumbs items={contributionItems} />
        </div>

        <div>
          <h3 className="text-lg font-medium text-inky-blue-500 mb-3">Support Path (Collapsed)</h3>
          <DropdownBreadcrumbs items={supportItems} maxItems={3} />
        </div>
      </div>
    );
  },
};

export const ResponsiveBreadcrumbs: Story = {
  render: () => (
    <div className="space-y-4 w-full">
      <div className="p-4 border border-light-grey-200 rounded-md">
        <h3 className="text-sm font-medium text-inky-blue-500 mb-4">Desktop View</h3>
        <Breadcrumbs items={longItems} />
      </div>

      <div className="p-4 border border-light-grey-200 rounded-md max-w-sm">
        <h3 className="text-sm font-medium text-inky-blue-500 mb-4">Mobile View (Collapsed)</h3>
        <DropdownBreadcrumbs items={longItems} maxItems={2} />
      </div>
    </div>
  ),
};

export const InteractiveBreadcrumbs: Story = {
  render: () => {
    const items: BreadcrumbItem[] = [
      { label: "Investment", href: "/investment" },
      { label: "Strategies", href: "/investment/strategies" },
      { label: "Conservative", href: "/investment/strategies/conservative" },
      { label: "Portfolio", href: "/investment/strategies/conservative/portfolio" },
      { label: "Performance Analysis" },
    ];

    return (
      <div className="space-y-4">
        <div className="p-4 bg-fresh-mint-100 rounded-md">
          <p className="text-sm text-inky-blue-500 mb-3">
            Click on any breadcrumb link to navigate (opens in same tab for demo)
          </p>
          <Breadcrumbs items={items} />
        </div>

        <div className="p-4 bg-light-grey-100 rounded-md">
          <p className="text-sm text-inky-blue-500 mb-3">
            Collapsed version with dropdown
          </p>
          <DropdownBreadcrumbs items={items} maxItems={3} />
        </div>
      </div>
    );
  },
};

export const AccessibilityDemo: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h3 className="text-sm font-medium text-inky-blue-500 mb-2">
          Standard Breadcrumbs
        </h3>
        <p className="text-xs text-mid-grey-600 mb-3">
          Proper ARIA labels, current page indication, and keyboard navigation
        </p>
        <Breadcrumbs items={basicItems} />
      </div>

      <div className="mt-6 p-4 bg-light-grey-100 rounded-md">
        <h4 className="text-sm font-medium text-inky-blue-500 mb-2">
          Accessibility Features
        </h4>
        <ul className="text-xs text-mid-grey-700 space-y-1">
          <li>• <code>nav</code> element with <code>aria-label="Breadcrumb"</code></li>
          <li>• Current page marked with <code>aria-current="page"</code></li>
          <li>• Separators marked with <code>aria-hidden="true"</code></li>
          <li>• Keyboard focusable links with proper focus indicators</li>
          <li>• Screen reader compatible structure</li>
        </ul>
      </div>
    </div>
  ),
};
