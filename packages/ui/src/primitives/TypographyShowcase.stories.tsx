import type { Meta, StoryObj } from "@storybook/react";

// Typography showcase component
const TypographyCard = ({
  className,
  title,
  description,
  sampleText,
  fontInfo
}: {
  className: string;
  title: string;
  description: string;
  sampleText: string;
  fontInfo: string;
}) => (
  <div className="p-6 border border-light-grey-200 rounded-lg bg-white mb-4">
    <div className="mb-4">
      <h3 className="text-heading-sm font-brand-medium text-inky-blue-500 mb-1">{title}</h3>
      <p className="text-caption-md text-mid-grey-600 mb-1">{description}</p>
      <p className="text-caption-sm text-mid-grey-500">{fontInfo}</p>
    </div>
    <div className={className}>
      {sampleText}
    </div>
  </div>
);

const meta: Meta<typeof TypographyCard> = {
  title: "Brand/Typography",
  component: TypographyCard,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "CareSuper brand typography using Filson Pro font family. Displays the complete type scale with proper hierarchy."
      }
    }
  },
};

export default meta;
export type Story = StoryObj<typeof TypographyCard>;

export const DisplayXL: Story = {
  args: {
    className: "text-display-xl font-brand-bold text-inky-blue-500",
    title: "Display XL",
    description: "Hero headlines and major displays",
    sampleText: "Your Super Future",
    fontInfo: "filson-pro bold, 56px, Line Height 1.1"
  }
};

export const DisplayLG: Story = {
  args: {
    className: "text-display-lg font-brand-bold text-inky-blue-500",
    title: "Display Large",
    description: "Section headers and key messaging",
    sampleText: "Join CareSuper Today",
    fontInfo: "filson-pro bold, 48px, Line Height 1.1"
  }
};

export const HeadingXL: Story = {
  args: {
    className: "text-heading-xl font-brand-bold text-inky-blue-500",
    title: "Heading XL",
    description: "Page titles and major sections",
    sampleText: "Investment Options",
    fontInfo: "filson-pro bold, 32px, Line Height 1.25"
  }
};

export const HeadingLG: Story = {
  args: {
    className: "text-heading-lg font-brand-bold text-inky-blue-500",
    title: "Heading Large",
    description: "Card titles and subsections",
    sampleText: "Your Account Balance",
    fontInfo: "filson-pro bold, 24px, Line Height 1.3"
  }
};

export const HeadingMD: Story = {
  args: {
    className: "text-heading-md font-brand-medium text-inky-blue-500",
    title: "Heading Medium",
    description: "Component headers",
    sampleText: "Personal Details",
    fontInfo: "filson-pro medium, 20px, Line Height 1.4"
  }
};

export const BodyLG: Story = {
  args: {
    className: "text-body-lg font-brand-book text-inky-blue-500",
    title: "Body Large",
    description: "Lead paragraphs and important content",
    sampleText: "CareSuper is committed to helping you build a secure financial future through smart investment choices and comprehensive superannuation services.",
    fontInfo: "filson-pro book, 18px, Line Height 1.6"
  }
};

export const BodyMD: Story = {
  args: {
    className: "text-body-md font-brand-book text-inky-blue-500",
    title: "Body Medium",
    description: "Standard body text and paragraphs",
    sampleText: "Access your account online anytime to check your balance, update your details, and manage your investment options. Our secure platform makes it easy to stay on top of your super.",
    fontInfo: "filson-pro book, 16px, Line Height 1.6"
  }
};

export const BodySM: Story = {
  args: {
    className: "text-body-sm font-brand-book text-inky-blue-500",
    title: "Body Small",
    description: "Secondary text and descriptions",
    sampleText: "Terms and conditions apply. Please read the Product Disclosure Statement before making investment decisions.",
    fontInfo: "filson-pro book, 14px, Line Height 1.5"
  }
};

export const CaptionLG: Story = {
  args: {
    className: "text-caption-lg font-brand-book text-mid-grey-600",
    title: "Caption Large",
    description: "Labels and form helper text",
    sampleText: "Last updated: 15 August 2024",
    fontInfo: "filson-pro book, 14px, Line Height 1.4"
  }
};

export const CaptionMD: Story = {
  args: {
    className: "text-caption-md font-brand-book text-mid-grey-600",
    title: "Caption Medium",
    description: "Small labels and metadata",
    sampleText: "Member since 2018",
    fontInfo: "filson-pro book, 12px, Line Height 1.4"
  }
};

// Complete typography scale showcase
const TypographyScale = () => (
  <div className="max-w-4xl mx-auto p-6 space-y-8">
    <div className="text-center mb-8">
      <h1 className="text-display-md font-brand-bold text-inky-blue-500 mb-2">
        CareSuper Typography
      </h1>
      <p className="text-body-lg font-brand-book text-mid-grey-600">
        Complete type scale using filson-pro font family (Adobe Fonts)
      </p>
    </div>

    <div className="space-y-6">
      <div className="border-b border-light-grey-200 pb-6">
        <h2 className="text-heading-lg font-brand-bold text-inky-blue-500 mb-4">Display Sizes</h2>
        <div className="space-y-4">
          <div className="text-display-xl font-brand-bold text-inky-blue-500">
            Your Super Future
          </div>
          <div className="text-display-lg font-brand-bold text-inky-blue-500">
            Join CareSuper Today
          </div>
          <div className="text-display-md font-brand-bold text-inky-blue-500">
            Investment Options
          </div>
          <div className="text-display-sm font-brand-bold text-inky-blue-500">
            Account Dashboard
          </div>
        </div>
      </div>

      <div className="border-b border-light-grey-200 pb-6">
        <h2 className="text-heading-lg font-brand-bold text-inky-blue-500 mb-4">Headings</h2>
        <div className="space-y-3">
          <div className="text-heading-xl font-brand-bold text-inky-blue-500">
            Investment Options
          </div>
          <div className="text-heading-lg font-brand-bold text-inky-blue-500">
            Your Account Balance
          </div>
          <div className="text-heading-md font-brand-medium text-inky-blue-500">
            Personal Details
          </div>
          <div className="text-heading-sm font-brand-medium text-inky-blue-500">
            Recent Transactions
          </div>
        </div>
      </div>

      <div className="border-b border-light-grey-200 pb-6">
        <h2 className="text-heading-lg font-brand-bold text-inky-blue-500 mb-4">Body Text</h2>
        <div className="space-y-4">
          <p className="text-body-lg font-brand-book text-inky-blue-500">
            CareSuper is committed to helping you build a secure financial future through smart investment choices and comprehensive superannuation services.
          </p>
          <p className="text-body-md font-brand-book text-inky-blue-500">
            Access your account online anytime to check your balance, update your details, and manage your investment options.
          </p>
          <p className="text-body-sm font-brand-book text-inky-blue-500">
            Terms and conditions apply. Please read the Product Disclosure Statement before making investment decisions.
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-heading-lg font-brand-bold text-inky-blue-500 mb-4">Captions & Labels</h2>
        <div className="space-y-2">
          <div className="text-caption-lg font-brand-book text-mid-grey-600">
            Last updated: 15 August 2024
          </div>
          <div className="text-caption-md font-brand-book text-mid-grey-600">
            Member since 2018
          </div>
          <div className="text-caption-sm font-brand-book text-mid-grey-600">
            Transaction ID: CS2024080815
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const CompleteTypographyScale: Story = {
  render: () => <TypographyScale />,
  parameters: {
    layout: "fullscreen",
  }
};
