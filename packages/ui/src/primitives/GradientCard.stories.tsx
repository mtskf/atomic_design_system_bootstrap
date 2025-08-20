import type { Meta, StoryObj } from "@storybook/react";

// Gradient showcase component
const GradientCard = ({
  gradient,
  title,
  description
}: {
  gradient: string;
  title: string;
  description: string;
}) => (
  <div className="w-64 h-40 rounded-lg overflow-hidden shadow-lg">
    <div className={`w-full h-24 ${gradient}`} />
    <div className="p-4 bg-white">
      <h3 className="text-sm font-semibold text-inky-blue-500 mb-1">{title}</h3>
      <p className="text-xs text-mid-grey-600">{description}</p>
    </div>
  </div>
);

const meta: Meta<typeof GradientCard> = {
  title: "Brand/Gradients",
  component: GradientCard,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "CareSuper brand gradients following accessibility guidelines and brand specifications."
      }
    }
  },
};

export default meta;
export type Story = StoryObj<typeof GradientCard>;

export const PrimaryFreshToRadiant: Story = {
  args: {
    gradient: "bg-gradient-fresh-to-radiant",
    title: "Fresh to Radiant",
    description: "Primary gradient: Fresh Mint to Radiant Green"
  }
};

export const SecondaryFreshToSky: Story = {
  args: {
    gradient: "bg-gradient-fresh-to-sky",
    title: "Fresh to Sky",
    description: "Secondary gradient: Fresh Mint to Sky Blue"
  }
};

export const SecondarySkyToBlue: Story = {
  args: {
    gradient: "bg-gradient-sky-to-blue",
    title: "Sky to Blue",
    description: "Secondary gradient: Sky Blue to Mid Blue"
  }
};

export const SecondaryPurpleToBlue: Story = {
  args: {
    gradient: "bg-gradient-purple-to-blue",
    title: "Purple to Blue",
    description: "Secondary gradient: Purple to Mid Blue"
  }
};

// All gradients showcase
const AllGradients = () => (
  <div className="grid grid-cols-2 gap-6 p-6">
    <GradientCard
      gradient="bg-gradient-fresh-to-radiant"
      title="Fresh to Radiant"
      description="Primary gradient for hero sections"
    />
    <GradientCard
      gradient="bg-gradient-fresh-to-sky"
      title="Fresh to Sky"
      description="Secondary gradient for cards"
    />
    <GradientCard
      gradient="bg-gradient-sky-to-blue"
      title="Sky to Blue"
      description="Secondary gradient for backgrounds"
    />
    <GradientCard
      gradient="bg-gradient-purple-to-blue"
      title="Purple to Blue"
      description="Secondary gradient for accents"
    />
  </div>
);

export const AllGradientsShowcase: Story = {
  render: () => <AllGradients />,
  parameters: {
    layout: "fullscreen",
  }
};
