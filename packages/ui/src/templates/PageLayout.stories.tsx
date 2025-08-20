import type { Meta, StoryObj } from "@storybook/react";
import { PageLayout } from "./PageLayout";
import { Button } from "../primitives/Button";
import { Card } from "../molecules/Card";

const meta: Meta<typeof PageLayout> = {
  title: "Templates/PageLayout",
  component: PageLayout,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    sidebar: {
      control: { type: "select" },
      options: ["none", "left", "right"],
    },
    sidebarWidth: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
  },
  args: {
    sidebar: "none",
    sidebarWidth: "md",
  },
};

export default meta;
export type Story = StoryObj<typeof PageLayout>;

// Sample components for demos
const SampleHeader = () => (
  <PageLayout.Header>
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="w-8 h-8 bg-gradient-fresh-to-radiant rounded"></div>
        <h1 className="text-xl font-brand-bold text-inky-blue-500">CareSuper</h1>
      </div>
      <div className="flex items-center gap-4">
        <Button intent="ghost" size="sm">Help</Button>
        <Button size="sm">Account</Button>
      </div>
    </div>
  </PageLayout.Header>
);

// (removed SampleSidebar)

const SampleFooter = () => (
  <PageLayout.Footer>
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-sm font-brand-medium text-inky-blue-500 mb-3">About</h3>
          <ul className="space-y-2 text-sm text-mid-grey-600">
            <li><a href="#" className="hover:text-inky-blue-500">About CareSuper</a></li>
            <li><a href="#" className="hover:text-inky-blue-500">Our Team</a></li>
            <li><a href="#" className="hover:text-inky-blue-500">Careers</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-brand-medium text-inky-blue-500 mb-3">Support</h3>
          <ul className="space-y-2 text-sm text-mid-grey-600">
            <li><a href="#" className="hover:text-inky-blue-500">Contact Us</a></li>
            <li><a href="#" className="hover:text-inky-blue-500">Help Center</a></li>
            <li><a href="#" className="hover:text-inky-blue-500">Live Chat</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-brand-medium text-inky-blue-500 mb-3">Legal</h3>
          <ul className="space-y-2 text-sm text-mid-grey-600">
            <li><a href="#" className="hover:text-inky-blue-500">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-inky-blue-500">Terms of Service</a></li>
            <li><a href="#" className="hover:text-inky-blue-500">Complaints</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-brand-medium text-inky-blue-500 mb-3">Connect</h3>
          <div className="space-y-2">
            <p className="text-sm text-mid-grey-600">ABN: 98 172 275 725</p>
            <p className="text-sm text-mid-grey-600">AFSL: 235932</p>
          </div>
        </div>
      </div>
      <div className="border-t border-light-grey-200 mt-8 pt-6 text-center">
        <p className="text-sm text-mid-grey-600">
          © 2024 CareSuper. All rights reserved.
        </p>
      </div>
    </div>
  </PageLayout.Footer>
);

export const Default: Story = {
  render: () => (
    <PageLayout
      header={<SampleHeader />}
      footer={<SampleFooter />}
    >
      <PageLayout.MainContent>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-brand-bold text-inky-blue-500 mb-6">Welcome to Your Dashboard</h1>
          <p className="text-lg text-mid-grey-700 mb-8">
            Manage your superannuation and plan for your retirement.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <Card.Header>
                <Card.Title>Account Balance</Card.Title>
              </Card.Header>
              <Card.Body>
                <div className="text-2xl font-brand-bold text-inky-blue-500">$125,450.30</div>
                <div className="text-sm text-radiant-green-500 mt-1">+8.5% this year</div>
              </Card.Body>
            </Card>

            <Card>
              <Card.Header>
                <Card.Title>Recent Activity</Card.Title>
              </Card.Header>
              <Card.Body>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Employer contribution</span>
                    <span className="text-radiant-green-500">+$450.00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Investment return</span>
                    <span className="text-radiant-green-500">+$128.50</span>
                  </div>
                </div>
              </Card.Body>
            </Card>

            <Card>
              <Card.Header>
                <Card.Title>Quick Actions</Card.Title>
              </Card.Header>
              <Card.Body>
                <div className="space-y-2">
                  <Button size="sm" fullWidth>Make Contribution</Button>
                  <Button intent="ghost" size="sm" fullWidth>View Statements</Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </PageLayout.MainContent>
    </PageLayout>
  ),
};

// (removed WithLeftSidebar)

// (removed WithRightSidebar)

// (removed MinimalLayout)
