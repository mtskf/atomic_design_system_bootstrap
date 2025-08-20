import type { Meta, StoryObj } from "@storybook/react";
import { Tabs } from "./Tabs";
import { Card } from "./Card";
import { Button } from "../primitives/Button";
import { TextField } from "../primitives/TextField";
import { Switch } from "../primitives/Switch";

const meta: Meta<typeof Tabs> = {
  title: "Molecules/Tabs",
  component: Tabs,
  parameters: {
    layout: "padded",
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "pills", "underline"],
    },
    orientation: {
      control: { type: "select" },
      options: ["horizontal", "vertical"],
    },
  },
  args: {
    variant: "default",
    orientation: "horizontal",
  },
};

export default meta;
export type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="account" className="w-[400px]">
      <Tabs.List>
        <Tabs.Trigger value="account">Account</Tabs.Trigger>
        <Tabs.Trigger value="password">Password</Tabs.Trigger>
        <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="account" className="space-y-4">
        <h3 className="text-lg font-medium">Account Information</h3>
        <p className="text-sm text-mid-grey-600">
          Manage your account details and preferences.
        </p>
      </Tabs.Content>
      <Tabs.Content value="password" className="space-y-4">
        <h3 className="text-lg font-medium">Password</h3>
        <p className="text-sm text-mid-grey-600">
          Change your password and security settings.
        </p>
      </Tabs.Content>
      <Tabs.Content value="settings" className="space-y-4">
        <h3 className="text-lg font-medium">Settings</h3>
        <p className="text-sm text-mid-grey-600">
          Configure your application preferences.
        </p>
      </Tabs.Content>
    </Tabs>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-8">
      {/* Default */}
      <div>
        <h3 className="text-lg font-medium mb-4">Default</h3>
        <Tabs defaultValue="tab1" className="w-[400px]">
          <Tabs.List variant="default">
            <Tabs.Trigger value="tab1" variant="default">Tab 1</Tabs.Trigger>
            <Tabs.Trigger value="tab2" variant="default">Tab 2</Tabs.Trigger>
            <Tabs.Trigger value="tab3" variant="default">Tab 3</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="tab1">Content for tab 1</Tabs.Content>
          <Tabs.Content value="tab2">Content for tab 2</Tabs.Content>
          <Tabs.Content value="tab3">Content for tab 3</Tabs.Content>
        </Tabs>
      </div>

      {/* Pills */}
      <div>
        <h3 className="text-lg font-medium mb-4">Pills</h3>
        <Tabs defaultValue="tab1" className="w-[400px]">
          <Tabs.List variant="pills">
            <Tabs.Trigger value="tab1" variant="pills">Tab 1</Tabs.Trigger>
            <Tabs.Trigger value="tab2" variant="pills">Tab 2</Tabs.Trigger>
            <Tabs.Trigger value="tab3" variant="pills">Tab 3</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="tab1">Content for tab 1</Tabs.Content>
          <Tabs.Content value="tab2">Content for tab 2</Tabs.Content>
          <Tabs.Content value="tab3">Content for tab 3</Tabs.Content>
        </Tabs>
      </div>

      {/* Underline */}
      <div>
        <h3 className="text-lg font-medium mb-4">Underline</h3>
        <Tabs defaultValue="tab1" className="w-[400px]">
          <Tabs.List variant="underline">
            <Tabs.Trigger value="tab1" variant="underline">Tab 1</Tabs.Trigger>
            <Tabs.Trigger value="tab2" variant="underline">Tab 2</Tabs.Trigger>
            <Tabs.Trigger value="tab3" variant="underline">Tab 3</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="tab1">Content for tab 1</Tabs.Content>
          <Tabs.Content value="tab2">Content for tab 2</Tabs.Content>
          <Tabs.Content value="tab3">Content for tab 3</Tabs.Content>
        </Tabs>
      </div>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <Tabs defaultValue="overview" orientation="vertical" className="flex max-w-md">
      <Tabs.List variant="default" orientation="vertical" className="mr-4">
        <Tabs.Trigger value="overview" variant="default" orientation="vertical">
          Overview
        </Tabs.Trigger>
        <Tabs.Trigger value="investments" variant="default" orientation="vertical">
          Investments
        </Tabs.Trigger>
        <Tabs.Trigger value="contributions" variant="default" orientation="vertical">
          Contributions
        </Tabs.Trigger>
        <Tabs.Trigger value="statements" variant="default" orientation="vertical">
          Statements
        </Tabs.Trigger>
      </Tabs.List>
      <div className="flex-1">
        <Tabs.Content value="overview" orientation="vertical">
          <Card>
            <Card.Header>
              <Card.Title>Account Overview</Card.Title>
            </Card.Header>
            <Card.Body>
              <p className="text-sm text-mid-grey-600">
                Your account balance and recent activity.
              </p>
            </Card.Body>
          </Card>
        </Tabs.Content>
        <Tabs.Content value="investments" orientation="vertical">
          <Card>
            <Card.Header>
              <Card.Title>Investment Options</Card.Title>
            </Card.Header>
            <Card.Body>
              <p className="text-sm text-mid-grey-600">
                Manage your investment strategy and allocations.
              </p>
            </Card.Body>
          </Card>
        </Tabs.Content>
        <Tabs.Content value="contributions" orientation="vertical">
          <Card>
            <Card.Header>
              <Card.Title>Contributions</Card.Title>
            </Card.Header>
            <Card.Body>
              <p className="text-sm text-mid-grey-600">
                Track and manage your superannuation contributions.
              </p>
            </Card.Body>
          </Card>
        </Tabs.Content>
        <Tabs.Content value="statements" orientation="vertical">
          <Card>
            <Card.Header>
              <Card.Title>Statements</Card.Title>
            </Card.Header>
            <Card.Body>
              <p className="text-sm text-mid-grey-600">
                View and download your account statements.
              </p>
            </Card.Body>
          </Card>
        </Tabs.Content>
      </div>
    </Tabs>
  ),
};

export const AccountSettings: Story = {
  render: () => (
    <div className="max-w-2xl">
      <h2 className="text-2xl font-brand-bold text-inky-blue-500 mb-6">Account Settings</h2>

      <Tabs defaultValue="profile" className="w-full">
        <Tabs.List variant="underline">
          <Tabs.Trigger value="profile" variant="underline">Profile</Tabs.Trigger>
          <Tabs.Trigger value="security" variant="underline">Security</Tabs.Trigger>
          <Tabs.Trigger value="notifications" variant="underline">Notifications</Tabs.Trigger>
          <Tabs.Trigger value="billing" variant="underline">Billing</Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content value="profile" className="space-y-6">
          <Card>
            <Card.Header>
              <Card.Title>Personal Information</Card.Title>
              <Card.Description>
                Update your personal details and contact information
              </Card.Description>
            </Card.Header>
            <Card.Body className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <TextField label="First Name" defaultValue="John" />
                <TextField label="Last Name" defaultValue="Doe" />
              </div>
              <TextField label="Email" type="email" defaultValue="john.doe@example.com" />
              <TextField label="Phone" type="tel" defaultValue="+61 400 000 000" />
            </Card.Body>
            <Card.Footer>
              <Button size="sm">Save Changes</Button>
            </Card.Footer>
          </Card>
        </Tabs.Content>

        <Tabs.Content value="security" className="space-y-6">
          <Card>
            <Card.Header>
              <Card.Title>Security Settings</Card.Title>
              <Card.Description>
                Manage your password and security preferences
              </Card.Description>
            </Card.Header>
            <Card.Body className="space-y-4">
              <TextField label="Current Password" type="password" />
              <TextField label="New Password" type="password" />
              <TextField label="Confirm New Password" type="password" />

              <div className="pt-4 border-t border-light-grey-200">
                <Switch
                  label="Two-factor authentication"
                  description="Add an extra layer of security to your account"
                />
              </div>
            </Card.Body>
            <Card.Footer>
              <Button size="sm" intent="primary">Update Password</Button>
            </Card.Footer>
          </Card>
        </Tabs.Content>

        <Tabs.Content value="notifications" className="space-y-6">
          <Card>
            <Card.Header>
              <Card.Title>Notification Preferences</Card.Title>
              <Card.Description>
                Choose how you want to receive updates
              </Card.Description>
            </Card.Header>
            <Card.Body className="space-y-4">
              <Switch
                label="Email notifications"
                description="Receive account updates via email"
                checked
              />
              <Switch
                label="SMS alerts"
                description="Get important alerts via text message"
              />
              <Switch
                label="Marketing communications"
                description="Receive news and promotional content"
                checked
              />
            </Card.Body>
            <Card.Footer>
              <Button size="sm">Save Preferences</Button>
            </Card.Footer>
          </Card>
        </Tabs.Content>

        <Tabs.Content value="billing" className="space-y-6">
          <Card>
            <Card.Header>
              <Card.Title>Billing Information</Card.Title>
              <Card.Description>
                Manage your payment methods and billing details
              </Card.Description>
            </Card.Header>
            <Card.Body>
              <div className="space-y-4">
                <div className="p-4 border border-light-grey-200 rounded-md">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">**** **** **** 1234</p>
                      <p className="text-sm text-mid-grey-600">Expires 12/25</p>
                    </div>
                    <Button size="sm" intent="ghost">Edit</Button>
                  </div>
                </div>
                <Button size="sm" intent="ghost">Add Payment Method</Button>
              </div>
            </Card.Body>
          </Card>
        </Tabs.Content>
      </Tabs>
    </div>
  ),
};

export const ProductCatalog: Story = {
  render: () => (
    <div className="max-w-4xl">
      <h2 className="text-2xl font-brand-bold text-inky-blue-500 mb-6">Investment Options</h2>

      <Tabs defaultValue="conservative" className="w-full">
        <Tabs.List variant="pills">
          <Tabs.Trigger value="conservative" variant="pills">Conservative</Tabs.Trigger>
          <Tabs.Trigger value="balanced" variant="pills">Balanced</Tabs.Trigger>
          <Tabs.Trigger value="growth" variant="pills">Growth</Tabs.Trigger>
          <Tabs.Trigger value="aggressive" variant="pills">Aggressive</Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content value="conservative" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <Card.Header>
                <Card.Title>Conservative Strategy</Card.Title>
                <Card.Description>Low risk, stable returns</Card.Description>
              </Card.Header>
              <Card.Body>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Expected return</span>
                    <span className="font-medium">4-6% p.a.</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Risk level</span>
                    <span className="font-medium text-radiant-green-500">Low</span>
                  </div>
                </div>
              </Card.Body>
            </Card>

            <Card>
              <Card.Header>
                <Card.Title>Asset Allocation</Card.Title>
              </Card.Header>
              <Card.Body>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Cash & Fixed Interest</span>
                    <span>70%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Property & Infrastructure</span>
                    <span>20%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Australian Shares</span>
                    <span>10%</span>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        </Tabs.Content>

        <Tabs.Content value="balanced" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <Card.Header>
                <Card.Title>Balanced Strategy</Card.Title>
                <Card.Description>Medium risk, balanced growth</Card.Description>
              </Card.Header>
              <Card.Body>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Expected return</span>
                    <span className="font-medium">6-8% p.a.</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Risk level</span>
                    <span className="font-medium text-sunny-yellow-500">Medium</span>
                  </div>
                </div>
              </Card.Body>
            </Card>

            <Card>
              <Card.Header>
                <Card.Title>Asset Allocation</Card.Title>
              </Card.Header>
              <Card.Body>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Australian Shares</span>
                    <span>30%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>International Shares</span>
                    <span>25%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Property & Infrastructure</span>
                    <span>25%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cash & Fixed Interest</span>
                    <span>20%</span>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        </Tabs.Content>

        <Tabs.Content value="growth" className="space-y-4">
          <p className="text-mid-grey-600">Growth investment strategy content...</p>
        </Tabs.Content>

        <Tabs.Content value="aggressive" className="space-y-4">
          <p className="text-mid-grey-600">Aggressive investment strategy content...</p>
        </Tabs.Content>
      </Tabs>
    </div>
  ),
};
