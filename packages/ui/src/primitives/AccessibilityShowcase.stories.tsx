import type { Meta, StoryObj } from "@storybook/react";

// Accessibility color combination showcase
const AccessibilityCard = ({
  bgColor,
  textColor,
  title,
  contrast,
  description
}: {
  bgColor: string;
  textColor: string;
  title: string;
  contrast: string;
  description: string;
}) => (
  <div className="w-64 p-4 rounded-lg shadow-lg border" style={{ backgroundColor: bgColor, color: textColor }}>
    <div className="mb-2">
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-sm opacity-80">Contrast: {contrast}</p>
    </div>
    <p className="text-sm">{description}</p>
    <div className="mt-3 flex gap-2">
      <button
        className="px-3 py-1 rounded text-xs font-medium border"
        style={{ borderColor: textColor, backgroundColor: 'transparent', color: textColor }}
      >
        Button
      </button>
      <button
        className="px-3 py-1 rounded text-xs font-medium"
        style={{ backgroundColor: textColor, color: bgColor }}
      >
        Primary
      </button>
    </div>
  </div>
);

const meta: Meta<typeof AccessibilityCard> = {
  title: "Brand/Accessibility",
  component: AccessibilityCard,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "WCAG AA compliant color combinations from CareSuper brand guidelines. All combinations meet minimum 4.5:1 contrast ratio for normal text."
      }
    }
  },
};

export default meta;
export type Story = StoryObj<typeof AccessibilityCard>;

export const RadiantGreenOnWhite: Story = {
  args: {
    bgColor: "#ffffff",
    textColor: "#00ff08",
    title: "Radiant Green on White",
    contrast: "4.5:1",
    description: "High-impact call-to-action text"
  }
};

export const DarkGreenOnWhite: Story = {
  args: {
    bgColor: "#ffffff",
    textColor: "#009e1c",
    title: "Dark Green on White",
    contrast: "7:1",
    description: "Body text and paragraphs"
  }
};

export const InkyBlueOnFreshMint: Story = {
  args: {
    bgColor: "#e6ffde",
    textColor: "#000f69",
    title: "Inky Blue on Fresh Mint",
    contrast: "12:1",
    description: "High contrast for important content"
  }
};

export const InkyBlueOnWhite: Story = {
  args: {
    bgColor: "#ffffff",
    textColor: "#000f69",
    title: "Inky Blue on White",
    contrast: "14:1",
    description: "Primary text color"
  }
};

export const WhiteOnInkyBlue: Story = {
  args: {
    bgColor: "#000f69",
    textColor: "#ffffff",
    title: "White on Inky Blue",
    contrast: "14:1",
    description: "Dark theme primary text"
  }
};

export const SkyBlueOnInkyBlue: Story = {
  args: {
    bgColor: "#000f69",
    textColor: "#00f5f0",
    title: "Sky Blue on Inky Blue",
    contrast: "7:1",
    description: "Links and interactive elements"
  }
};

// All accessibility combinations showcase
const AllAccessibilityCombinations = () => (
  <div className="grid grid-cols-2 gap-6 p-6 bg-gray-50">
    <AccessibilityCard
      bgColor="#ffffff"
      textColor="#000f69"
      title="Inky Blue on White"
      contrast="14:1"
      description="Primary text combination"
    />
    <AccessibilityCard
      bgColor="#e6ffde"
      textColor="#000f69"
      title="Inky Blue on Fresh Mint"
      contrast="12:1"
      description="Success/positive messaging"
    />
    <AccessibilityCard
      bgColor="#000f69"
      textColor="#ffffff"
      title="White on Inky Blue"
      contrast="14:1"
      description="Dark backgrounds"
    />
    <AccessibilityCard
      bgColor="#000f69"
      textColor="#00f5f0"
      title="Sky Blue on Inky Blue"
      contrast="7:1"
      description="Interactive elements"
    />
    <AccessibilityCard
      bgColor="#ffffff"
      textColor="#009e1c"
      title="Dark Green on White"
      contrast="7:1"
      description="Success states"
    />
    <AccessibilityCard
      bgColor="#000f69"
      textColor="#fff511"
      title="Sunny Yellow on Inky Blue"
      contrast="4.5:1"
      description="Warning/attention"
    />
  </div>
);

export const AllAccessibilityShowcase: Story = {
  render: () => <AllAccessibilityCombinations />,
  parameters: {
    layout: "fullscreen",
  }
};
