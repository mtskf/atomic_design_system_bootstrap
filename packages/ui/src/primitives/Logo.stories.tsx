import type { Meta, StoryObj } from "@storybook/react";
import { Logo } from "./Logo";

const meta: Meta<typeof Logo> = {
  title: "Primitives/Logo",
  component: Logo,
  parameters: {
    docs: {
      description: {
        component: "CareSuper Logo component using the official SVG with customizable size and variant."
      }
    }
  },
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg", "xl"],
    },
    variant: {
      control: { type: "select" },
      options: ["default", "white", "dark"],
    },

    href: {
      control: { type: "text" },
    },
  },
  args: {
    size: "md",
    variant: "default",

    href: "/",
  },
};

export default meta;
type Story = StoryObj<typeof Logo>;

export const Default: Story = {
  args: {},
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="flex items-center space-x-8">
        <Logo size="sm" />
        <Logo size="md" />
        <Logo size="lg" />
        <Logo size="xl" />
      </div>
      <div className="text-sm text-mid-grey-600">
        Sizes: Small, Medium, Large, Extra Large
      </div>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-8">
      {/* Default variant */}
      <div className="p-6 bg-white border border-light-grey-200 rounded-lg">
        <Logo variant="default" size="lg" />
        <p className="text-sm text-mid-grey-600 mt-2">Default variant</p>
      </div>

      {/* Dark variant */}
      <div className="p-6 bg-light-grey-50 border border-light-grey-200 rounded-lg">
        <Logo variant="dark" size="lg" />
        <p className="text-sm text-mid-grey-600 mt-2">Dark variant</p>
      </div>

      {/* White variant */}
      <div className="p-6 bg-inky-blue-500 rounded-lg">
        <Logo variant="white" size="lg" />
        <p className="text-sm text-light-grey-200 mt-2">White variant (for dark backgrounds)</p>
      </div>
    </div>
  ),
};

export const DifferentSizes: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="flex items-center space-x-8">
        <Logo size="sm" />
        <Logo size="md" />
        <Logo size="lg" />
        <Logo size="xl" />
      </div>
      <div className="text-sm text-mid-grey-600">
        Different logo sizes using the official CareSuper SVG
      </div>
    </div>
  ),
};

export const HeaderUsage: Story = {
  render: () => (
    <div className="space-y-8">
      {/* Normal header */}
      <div className="p-4 bg-white border-b border-light-grey-200">
        <div className="flex items-center justify-between">
          <Logo size="md" />
          <div className="flex items-center space-x-4">
            <span className="text-sm text-mid-grey-600">Navigation items...</span>
          </div>
        </div>
      </div>

      {/* Condensed header */}
      <div className="p-3 bg-white border-b border-light-grey-200 shadow-md">
        <div className="flex items-center justify-between">
          <Logo size="sm" />
          <div className="flex items-center space-x-4">
            <span className="text-sm text-mid-grey-600">Condensed mode...</span>
          </div>
        </div>
      </div>

      <div className="text-sm text-mid-grey-600">
        Examples of logo usage in header contexts
      </div>
    </div>
  ),
};

export const Interactive: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="p-6 bg-white border border-light-grey-200 rounded-lg">
        <h3 className="font-brand-medium text-inky-blue-500 mb-4">Hover States</h3>
        <div className="space-y-4">
          <Logo
            size="lg"
            className="hover:opacity-80 transition-opacity cursor-pointer"
          />
          <p className="text-sm text-mid-grey-600">
            Hover over the logo to see the transition effect
          </p>
        </div>
      </div>

      <div className="p-6 bg-white border border-light-grey-200 rounded-lg">
        <h3 className="font-brand-medium text-inky-blue-500 mb-4">Focus States</h3>
        <div className="space-y-4">
          <Logo
            size="lg"
            className="focus:outline-none focus-visible:ring-2 focus-visible:ring-mid-blue-500 focus-visible:ring-offset-2 rounded-md"
          />
          <p className="text-sm text-mid-grey-600">
            Tab to focus the logo and see the focus ring
          </p>
        </div>
      </div>
    </div>
  ),
};
