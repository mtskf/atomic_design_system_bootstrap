import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "./Switch";
import * as React from "react";

const meta: Meta<typeof Switch> = {
  title: "Atoms/Switch",
  component: Switch,
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
    showLabels: {
      control: { type: "boolean" },
    },
  },
  args: {
    size: "md",
    label: "Switch label",
    checked: false,
    disabled: false,
    error: false,
    showLabels: false,
  },
};

export default meta;
export type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    label: "Enable notifications",
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <Switch size="sm" label="Small switch" />
      <Switch size="md" label="Medium switch" />
      <Switch size="lg" label="Large switch" />
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="space-y-4">
      <Switch label="Off (default)" />
      <Switch label="On" checked />
      <Switch label="Disabled off" disabled />
      <Switch label="Disabled on" disabled checked />
    </div>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <div className="space-y-4">
      <Switch
        label="Email notifications"
        description="Receive email updates about your account activity"
      />
      <Switch
        label="Marketing communications"
        description="Get the latest news and offers from CareSuper"
        checked
      />
    </div>
  ),
};

export const WithLabels: Story = {
  render: () => (
    <div className="space-y-4">
      <Switch
        label="Show ON/OFF labels"
        showLabels
      />
      <Switch
        label="Dark mode"
        description="Switch between light and dark themes"
        showLabels
        checked
      />
    </div>
  ),
};

export const ErrorState: Story = {
  render: () => (
    <Switch
      label="Accept terms and conditions"
      description="You must accept our terms to continue"
      error
      errorMessage="This field is required"
    />
  ),
};

export const Controlled: Story = {
  render: () => {
    const [notifications, setNotifications] = React.useState(true);
    const [marketing, setMarketing] = React.useState(false);
    const [darkMode, setDarkMode] = React.useState(false);

    return (
      <div className="space-y-6">
        <div className="space-y-4">
          <Switch
            label="Email notifications"
            description="Receive important account updates"
            checked={notifications}
            onCheckedChange={setNotifications}
          />

          <Switch
            label="Marketing emails"
            description="Get news and promotional content"
            checked={marketing}
            onCheckedChange={setMarketing}
          />

          <Switch
            label="Dark mode"
            description="Use dark theme for the interface"
            checked={darkMode}
            onCheckedChange={setDarkMode}
            showLabels
          />
        </div>

        <div className="p-4 bg-light-grey-100 rounded-md">
          <h4 className="text-sm font-medium text-inky-blue-500 mb-2">Current Settings:</h4>
          <ul className="text-sm text-mid-grey-700 space-y-1">
            <li>Email notifications: {notifications ? "Enabled" : "Disabled"}</li>
            <li>Marketing emails: {marketing ? "Enabled" : "Disabled"}</li>
            <li>Dark mode: {darkMode ? "Enabled" : "Disabled"}</li>
          </ul>
        </div>
      </div>
    );
  },
};

export const SettingsPanel: Story = {
  render: () => {
    const [autoSave, setAutoSave] = React.useState(true);
    const [twoFactor, setTwoFactor] = React.useState(false);
    const [analytics, setAnalytics] = React.useState(true);

    return (
      <div className="max-w-md space-y-6">
        <h3 className="text-lg font-brand-bold text-inky-blue-500">Account Settings</h3>

        <div className="space-y-4">
          <Switch
            label="Auto-save changes"
            description="Automatically save your work as you type"
            checked={autoSave}
            onCheckedChange={setAutoSave}
          />

          <Switch
            label="Two-factor authentication"
            description="Add an extra layer of security to your account"
            checked={twoFactor}
            onCheckedChange={setTwoFactor}
          />

          <Switch
            label="Usage analytics"
            description="Help us improve by sharing anonymous usage data"
            checked={analytics}
            onCheckedChange={setAnalytics}
          />
        </div>

        <div className="pt-4 border-t border-light-grey-200">
          <button className="w-full px-4 py-2 bg-mid-blue-500 text-white rounded-md hover:bg-mid-blue-600">
            Save Settings
          </button>
        </div>
      </div>
    );
  },
};

export const AccessibilityDemo: Story = {
  render: () => (
    <div className="space-y-4 max-w-md">
      <h3 className="text-lg font-brand-bold text-inky-blue-500">Accessibility Features</h3>

      <Switch
        label="Screen reader announcements"
        description="Announce changes and updates to screen readers"
        showLabels
      />

      <Switch
        label="High contrast mode"
        description="Increase contrast for better visibility"
        checked
      />

      <Switch
        label="Reduce motion"
        description="Minimize animations and transitions"
      />

      <p className="text-sm text-mid-grey-600 mt-4">
        These switches include proper ARIA attributes and keyboard navigation support.
        Use Tab to focus and Space to toggle.
      </p>
    </div>
  ),
};
