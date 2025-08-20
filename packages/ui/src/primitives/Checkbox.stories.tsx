import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox, CheckboxGroup } from "./Checkbox";
import * as React from "react";

const meta: Meta<typeof Checkbox> = {
  title: "Atoms/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    checked: {
      control: { type: "boolean" },
    },
    disabled: {
      control: { type: "boolean" },
    },
    error: {
      control: { type: "boolean" },
    },
  },
  args: {
    size: "md",
    label: "Checkbox label",
    checked: false,
    disabled: false,
    error: false,
  },
};

export default meta;
export type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: "Accept terms and conditions",
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <Checkbox size="sm" label="Small checkbox" />
      <Checkbox size="md" label="Medium checkbox" />
      <Checkbox size="lg" label="Large checkbox" />
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="space-y-4">
      <Checkbox label="Unchecked" />
      <Checkbox label="Checked" checked />
      <Checkbox label="Indeterminate" checked="indeterminate" />
      <Checkbox label="Disabled" disabled />
      <Checkbox label="Disabled checked" disabled checked />
    </div>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <div className="space-y-4">
      <Checkbox
        label="Email notifications"
        description="Receive email updates about your account activity"
      />
      <Checkbox
        label="Marketing emails"
        description="Get the latest news and offers from CareSuper"
      />
    </div>
  ),
};

export const ErrorState: Story = {
  render: () => (
    <div className="space-y-4">
      <Checkbox
        label="Accept terms and conditions"
        description="You must accept our terms to continue"
        error
        errorMessage="This field is required"
      />
    </div>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [checked, setChecked] = React.useState(false);

    return (
      <div className="space-y-4">
        <Checkbox
          label="Subscribe to newsletter"
          description="Get weekly updates about your superannuation"
          checked={checked}
          onCheckedChange={setChecked}
        />
        <p className="text-sm text-mid-grey-600">
          Status: {checked ? "Subscribed" : "Not subscribed"}
        </p>
      </div>
    );
  },
};

export const CheckboxGroupExample: Story = {
  render: () => (
    <div className="space-y-6">
      <CheckboxGroup legend="Communication Preferences">
        <Checkbox label="Email notifications" />
        <Checkbox label="SMS notifications" />
        <Checkbox label="Phone calls" />
        <Checkbox label="Postal mail" />
      </CheckboxGroup>

      <CheckboxGroup
        legend="Investment Options"
        error
        errorMessage="Please select at least one investment option"
      >
        <Checkbox
          label="Conservative"
          description="Lower risk, stable returns"
        />
        <Checkbox
          label="Balanced"
          description="Medium risk, balanced growth"
        />
        <Checkbox
          label="Growth"
          description="Higher risk, potential for higher returns"
        />
      </CheckboxGroup>
    </div>
  ),
};

export const FormExample: Story = {
  render: () => {
    const [agreed, setAgreed] = React.useState(false);
    const [newsletter, setNewsletter] = React.useState(true);
    const [sms, setSms] = React.useState(false);

    return (
      <div className="max-w-md space-y-6">
        <h3 className="text-lg font-brand-bold text-inky-blue-500">Account Setup</h3>

        <div className="space-y-4">
          <Checkbox
            label="I agree to the terms and conditions"
            description="By checking this box, you agree to our privacy policy and terms of service"
            checked={agreed}
            onCheckedChange={setAgreed}
            error={!agreed}
            errorMessage={!agreed ? "You must accept the terms to continue" : undefined}
          />

          <CheckboxGroup legend="Communication Preferences">
            <Checkbox
              label="Email newsletter"
              description="Weekly market updates and retirement planning tips"
              checked={newsletter}
              onCheckedChange={setNewsletter}
            />
            <Checkbox
              label="SMS notifications"
              description="Important account alerts and reminders"
              checked={sms}
              onCheckedChange={setSms}
            />
          </CheckboxGroup>
        </div>

        <button
          className="w-full px-4 py-2 bg-mid-blue-500 text-white rounded-md disabled:opacity-50"
          disabled={!agreed}
        >
          Create Account
        </button>
      </div>
    );
  },
};
