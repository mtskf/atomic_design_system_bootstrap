import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip, SimpleTooltip, TooltipProvider } from "./Tooltip";
import { Button } from "./Button";
import { Icon } from "./Icon";
import { Badge } from "./Badge";

const meta: Meta<typeof Tooltip> = {
  title: "Atoms/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "dark", "success", "warning", "danger"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    side: {
      control: { type: "select" },
      options: ["top", "right", "bottom", "left"],
    },
  },
  args: {
    variant: "default",
    size: "md",
    side: "top",
    content: "This is a tooltip",
  },
};

export default meta;
export type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  render: () => (
    <Tooltip content="This is a helpful tooltip">
      <Button>Hover me</Button>
    </Tooltip>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="flex gap-4 flex-wrap">
      <Tooltip content="Default tooltip" variant="default">
        <Button intent="secondary">Default</Button>
      </Tooltip>

      <Tooltip content="Dark tooltip" variant="dark">
        <Button intent="primary">Dark</Button>
      </Tooltip>

      <Tooltip content="Success tooltip" variant="success">
        <Button intent="success">Success</Button>
      </Tooltip>

      <Tooltip content="Warning tooltip" variant="warning">
        <Button intent="warning">Warning</Button>
      </Tooltip>

      <Tooltip content="Danger tooltip" variant="danger">
        <Button intent="danger">Danger</Button>
      </Tooltip>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <Tooltip content="Small tooltip" size="sm">
        <Button size="sm">Small</Button>
      </Tooltip>

      <Tooltip content="Medium tooltip" size="md">
        <Button size="md">Medium</Button>
      </Tooltip>

      <Tooltip content="Large tooltip" size="lg">
        <Button size="lg">Large</Button>
      </Tooltip>
    </div>
  ),
};

export const Positioning: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-8 place-items-center">
      <div></div>
      <Tooltip content="Top tooltip" side="top">
        <Button>Top</Button>
      </Tooltip>
      <div></div>

      <Tooltip content="Left tooltip" side="left">
        <Button>Left</Button>
      </Tooltip>
      <div className="text-sm text-mid-grey-600">Hover buttons</div>
      <Tooltip content="Right tooltip" side="right">
        <Button>Right</Button>
      </Tooltip>

      <div></div>
      <Tooltip content="Bottom tooltip" side="bottom">
        <Button>Bottom</Button>
      </Tooltip>
      <div></div>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <Tooltip content="Save your work" variant="dark">
        <Button size="sm">
          <Icon size="sm">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3-3m0 0l-3 3m3-3v12" />
          </Icon>
        </Button>
      </Tooltip>

      <Tooltip content="Edit this item">
        <Button size="sm" intent="ghost">
          <Icon size="sm">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </Icon>
        </Button>
      </Tooltip>

      <Tooltip content="Delete permanently" variant="danger">
        <Button size="sm" intent="danger">
          <Icon size="sm">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </Icon>
        </Button>
      </Tooltip>
    </div>
  ),
};

export const InteractiveElements: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex gap-4 items-center">
        <Tooltip content="Click to mark as completed">
          <Badge variant="success">Completed</Badge>
        </Tooltip>

        <Tooltip content="This task is in progress">
          <Badge variant="warning">In Progress</Badge>
        </Tooltip>

        <Tooltip content="This task is pending">
          <Badge variant="secondary">Pending</Badge>
        </Tooltip>
      </div>

      <div className="p-4 border border-light-grey-200 rounded-md">
        <h3 className="text-lg font-medium mb-2">Account Information</h3>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span>Account Balance</span>
            <Tooltip content="This includes all your contributions and investment returns">
              <span className="font-medium cursor-help border-b border-dotted border-mid-grey-400">
                $45,230.50
              </span>
            </Tooltip>
          </div>
          <div className="flex justify-between items-center">
            <span>Annual Return</span>
            <Tooltip content="Your investment performance over the last 12 months" variant="success">
              <span className="font-medium text-radiant-green-500 cursor-help">
                +8.2%
              </span>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const FormHelpers: Story = {
  render: () => (
    <div className="max-w-md space-y-4">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <label className="text-sm font-medium">Password</label>
          <Tooltip
            content="Password must be at least 8 characters long and include uppercase, lowercase, and numbers"
            variant="dark"
            size="sm"
          >
            <Icon size="xs" className="text-mid-grey-500 cursor-help">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </Icon>
          </Tooltip>
        </div>
        <input
          type="password"
          className="w-full px-3 py-2 border border-mid-grey-400 rounded-md focus:outline-none focus:ring-2 focus:ring-mid-blue-500"
          placeholder="Enter your password"
        />
      </div>

      <div>
        <div className="flex items-center gap-2 mb-2">
          <label className="text-sm font-medium">Investment Risk Level</label>
          <Tooltip
            content="Conservative: Lower risk with stable returns. Growth: Higher risk with potential for higher returns."
            variant="dark"
            size="sm"
          >
            <Icon size="xs" className="text-mid-grey-500 cursor-help">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </Icon>
          </Tooltip>
        </div>
        <select className="w-full px-3 py-2 border border-mid-grey-400 rounded-md focus:outline-none focus:ring-2 focus:ring-mid-blue-500">
          <option>Conservative</option>
          <option>Balanced</option>
          <option>Growth</option>
        </select>
      </div>
    </div>
  ),
};

export const SimpleTooltipExample: Story = {
  render: () => (
    <div className="flex gap-4">
      <SimpleTooltip content="This is a simple tooltip">
        <Button>Simple Tooltip</Button>
      </SimpleTooltip>

      <SimpleTooltip content="Bottom aligned" side="bottom">
        <Button>Bottom</Button>
      </SimpleTooltip>

      <SimpleTooltip content="Light variant" variant="default">
        <Button intent="secondary">Light</Button>
      </SimpleTooltip>
    </div>
  ),
};

export const DisabledTooltip: Story = {
  render: () => (
    <div className="flex gap-4">
      <Tooltip content="This tooltip is enabled">
        <Button>Enabled Tooltip</Button>
      </Tooltip>

      <Tooltip content="This tooltip is disabled" disabled>
        <Button intent="secondary">Disabled Tooltip</Button>
      </Tooltip>
    </div>
  ),
};

export const GlobalProvider: Story = {
  render: () => (
    <TooltipProvider delayDuration={200} skipDelayDuration={50}>
      <div className="space-y-4">
        <p className="text-sm text-mid-grey-600 mb-4">
          These tooltips use a global provider with custom delay settings
        </p>
        <div className="flex gap-4">
          <Tooltip content="Fast tooltip 1">
            <Button size="sm">Button 1</Button>
          </Tooltip>

          <Tooltip content="Fast tooltip 2">
            <Button size="sm">Button 2</Button>
          </Tooltip>

          <Tooltip content="Fast tooltip 3">
            <Button size="sm">Button 3</Button>
          </Tooltip>
        </div>
      </div>
    </TooltipProvider>
  ),
};
