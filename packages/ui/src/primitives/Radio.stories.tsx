import type { Meta, StoryObj } from "@storybook/react";
import { Radio, RadioGroup } from "./Radio";
import * as React from "react";

const meta: Meta<typeof Radio> = {
  title: "Atoms/Radio",
  component: Radio,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    disabled: {
      control: { type: "boolean" },
    },
  },
  args: {
    size: "md",
    label: "Radio option",
    disabled: false,
  },
};

export default meta;
export type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue="option1">
      <Radio value="option1" label="Option 1" />
      <Radio value="option2" label="Option 2" />
      <Radio value="option3" label="Option 3" />
    </RadioGroup>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-6">
      <RadioGroup defaultValue="sm" legend="Small Size">
        <Radio size="sm" value="sm" label="Small radio" />
      </RadioGroup>

      <RadioGroup defaultValue="md" legend="Medium Size">
        <Radio size="md" value="md" label="Medium radio" />
      </RadioGroup>

      <RadioGroup defaultValue="lg" legend="Large Size">
        <Radio size="lg" value="lg" label="Large radio" />
      </RadioGroup>
    </div>
  ),
};

export const WithDescriptions: Story = {
  render: () => (
    <RadioGroup defaultValue="conservative" legend="Investment Strategy">
      <Radio
        value="conservative"
        label="Conservative"
        description="Lower risk with stable, predictable returns"
      />
      <Radio
        value="balanced"
        label="Balanced"
        description="Medium risk with balanced growth potential"
      />
      <Radio
        value="growth"
        label="Growth"
        description="Higher risk with potential for higher returns"
      />
    </RadioGroup>
  ),
};

export const HorizontalOrientation: Story = {
  render: () => (
    <RadioGroup
      defaultValue="yes"
      legend="Do you want to receive marketing emails?"
      orientation="horizontal"
    >
      <Radio value="yes" label="Yes" />
      <Radio value="no" label="No" />
    </RadioGroup>
  ),
};

export const DisabledStates: Story = {
  render: () => (
    <RadioGroup defaultValue="option1" legend="Options with Disabled State">
      <Radio value="option1" label="Selected option" />
      <Radio value="option2" label="Available option" />
      <Radio value="option3" label="Disabled option" disabled />
      <Radio value="option4" label="Another disabled" disabled />
    </RadioGroup>
  ),
};

export const ErrorState: Story = {
  render: () => (
    <RadioGroup
      legend="Select your preferred contact method"
      error
      errorMessage="Please select a contact method to continue"
    >
      <Radio value="email" label="Email" />
      <Radio value="phone" label="Phone" />
      <Radio value="mail" label="Postal mail" />
    </RadioGroup>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = React.useState<string>("email");

    return (
      <div className="space-y-4">
        <RadioGroup
          value={value}
          onValueChange={setValue}
          legend="How would you like to receive your statements?"
        >
          <Radio
            value="email"
            label="Email"
            description="Receive statements via email (recommended)"
          />
          <Radio
            value="mail"
            label="Postal mail"
            description="Receive paper statements by mail"
          />
          <Radio
            value="online"
            label="Online only"
            description="View statements in your online account"
          />
        </RadioGroup>

        <div className="p-4 bg-light-grey-100 rounded-md">
          <p className="text-sm text-mid-grey-700">
            Selected: <span className="font-medium capitalize">{value}</span>
          </p>
        </div>
      </div>
    );
  },
};

export const FormExample: Story = {
  render: () => {
    const [investmentStrategy, setInvestmentStrategy] = React.useState<string>("");
    const [riskTolerance, setRiskTolerance] = React.useState<string>("");

    return (
      <div className="max-w-lg space-y-6">
        <h3 className="text-lg font-brand-bold text-inky-blue-500">Investment Preferences</h3>

        <RadioGroup
          value={investmentStrategy}
          onValueChange={setInvestmentStrategy}
          legend="Select your investment strategy"
          error={!investmentStrategy}
          errorMessage={!investmentStrategy ? "Please select an investment strategy" : undefined}
        >
          <Radio
            value="conservative"
            label="Conservative"
            description="Focus on capital preservation with lower volatility"
          />
          <Radio
            value="moderate"
            label="Moderate"
            description="Balanced approach with moderate growth potential"
          />
          <Radio
            value="aggressive"
            label="Aggressive"
            description="Higher growth potential with increased risk"
          />
        </RadioGroup>

        <RadioGroup
          value={riskTolerance}
          onValueChange={setRiskTolerance}
          legend="What is your risk tolerance?"
          orientation="horizontal"
        >
          <Radio value="low" label="Low" />
          <Radio value="medium" label="Medium" />
          <Radio value="high" label="High" />
        </RadioGroup>

        <button
          className="w-full px-4 py-2 bg-mid-blue-500 text-white rounded-md disabled:opacity-50"
          disabled={!investmentStrategy || !riskTolerance}
        >
          Save Preferences
        </button>
      </div>
    );
  },
};
