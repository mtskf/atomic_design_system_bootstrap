import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { Header } from "./Header";
import { navigationData } from "../config/navigation";
import { NavigationContext } from "../types/navigation";

const meta: Meta<typeof Header> = {
  title: "Organisms/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "CareSuper Header with mega menu navigation, mobile drawer, and context switching between Members and Employers."
      }
    }
  },
  argTypes: {
    context: {
      control: { type: "select" },
      options: ["members", "employers"],
    },
    sticky: {
      control: { type: "boolean" },
    },
    condensed: {
      control: { type: "boolean" },
    },
  },
  args: {
    context: "members",
    navigationData,
    currentPath: "/members/why-us",
    sticky: true,
    condensed: false,
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    context: "members",
    currentPath: "/members/why-us",
  },
};

export const EmployersContext: Story = {
  args: {
    context: "employers",
    currentPath: "/employers/partner-with-us",
  },
};

export const Condensed: Story = {
  args: {
    context: "members",
    condensed: true,
    currentPath: "/members/investments",
  },
};

export const MembersNavigation: Story = {
  render: () => (
    <div className="min-h-screen bg-light-grey-50">
      <Header
        context="members"
        navigationData={navigationData}
        currentPath="/members/super"
        onContextChange={() => {}}
        onSearchClick={() => alert("Search triggered")}
        onLinkClick={(href, label) => console.log("Navigate to:", href, label)}
      />

      <main className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-brand-bold text-inky-blue-500 mb-4">
          Members Navigation Demo
        </h1>
        <p className="text-lg text-mid-grey-700 mb-8">
          This demonstrates the full Members navigation structure with mega menus.
          Hover over "Super", "Investments", or "Retirement" to see the mega panels.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-white rounded-lg border border-light-grey-200">
            <h3 className="font-brand-medium text-inky-blue-500 mb-3">Navigation Features</h3>
            <ul className="space-y-2 text-sm text-mid-grey-700">
              <li>• Hover-triggered mega menus with 120ms intent delay</li>
              <li>• Full keyboard navigation support</li>
              <li>• Mobile-responsive drawer navigation</li>
              <li>• Context switching between Members and Employers</li>
              <li>• Active state detection based on current path</li>
              <li>• Sticky header with condensed mode</li>
            </ul>
          </div>

          <div className="p-6 bg-white rounded-lg border border-light-grey-200">
            <h3 className="font-brand-medium text-inky-blue-500 mb-3">Accessibility</h3>
            <ul className="space-y-2 text-sm text-mid-grey-700">
              <li>• WCAG 2.2 AA compliant</li>
              <li>• Proper ARIA roles and attributes</li>
              <li>• Keyboard navigation (Tab, Arrow keys, Escape)</li>
              <li>• Focus management and visible focus indicators</li>
              <li>• Screen reader compatible</li>
              <li>• Reduced motion support</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  ),
};

