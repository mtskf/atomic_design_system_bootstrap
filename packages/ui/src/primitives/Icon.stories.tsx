import type { Meta, StoryObj } from "@storybook/react";
import { Icon, LucideIcon, ChevronDownIcon, CloseIcon, CheckIcon, ExternalLinkIcon, AlertTriangleIcon, InfoIcon } from "./Icon";

const meta: Meta<typeof Icon> = {
  title: "Atoms/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    decorative: {
      control: { type: "boolean" },
    },
  },
  args: {
    size: "md",
    decorative: true,
  },
};

export default meta;
export type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {
    children: (
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round" />
    ),
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Icon size="xs">
        <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth={2} />
      </Icon>
      <Icon size="sm">
        <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth={2} />
      </Icon>
      <Icon size="md">
        <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth={2} />
      </Icon>
      <Icon size="lg">
        <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth={2} />
      </Icon>
      <Icon size="xl">
        <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth={2} />
      </Icon>
    </div>
  ),
};

export const CommonIcons: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-8 items-center">
      <div className="flex flex-col items-center gap-2">
        <ChevronDownIcon size="lg" />
        <span className="text-sm">ChevronDown</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <CloseIcon size="lg" />
        <span className="text-sm">Close</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <CheckIcon size="lg" className="text-radiant-green-500" />
        <span className="text-sm">Check</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <ExternalLinkIcon size="lg" />
        <span className="text-sm">External Link</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <AlertTriangleIcon size="lg" className="text-sunny-yellow-500" />
        <span className="text-sm">Alert</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <InfoIcon size="lg" className="text-mid-blue-500" />
        <span className="text-sm">Info</span>
      </div>
    </div>
  ),
};

export const Semantic: Story = {
  args: {
    decorative: false,
    name: "Close dialog",
    children: <CloseIcon />,
  },
};

export const Colors: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <CheckIcon size="lg" className="text-radiant-green-500" />
      <AlertTriangleIcon size="lg" className="text-sunny-yellow-500" />
      <CloseIcon size="lg" className="text-red-500" />
      <InfoIcon size="lg" className="text-mid-blue-500" />
      <ExternalLinkIcon size="lg" className="text-inky-blue-500" />
    </div>
  ),
};

// Lucide Icon Stories
const lucideMeta: Meta<typeof LucideIcon> = {
  title: "Atoms/LucideIcon",
  component: LucideIcon,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    iconName: {
      control: { type: "text" },
    },
    size: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    decorative: {
      control: { type: "boolean" },
    },
  },
  args: {
    iconName: "Heart",
    size: "md",
    decorative: true,
  },
};

export const LucideDefault: Story = {
  ...lucideMeta,
  render: (args) => <LucideIcon {...args} />,
};

export const LucideShowcase: Story = {
  render: () => (
    <div className="grid grid-cols-6 gap-6 p-6">
      {/* Navigation Icons */}
      <div className="col-span-6">
        <h3 className="text-lg font-semibold mb-4 text-inky-blue-900">Navigation</h3>
        <div className="grid grid-cols-6 gap-4">
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="Home" size="lg" />
            <span className="text-xs">Home</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="Menu" size="lg" />
            <span className="text-xs">Menu</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="ArrowLeft" size="lg" />
            <span className="text-xs">Back</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="ArrowRight" size="lg" />
            <span className="text-xs">Forward</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="ChevronDown" size="lg" />
            <span className="text-xs">Expand</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="Search" size="lg" />
            <span className="text-xs">Search</span>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="col-span-6">
        <h3 className="text-lg font-semibold mb-4 text-inky-blue-900">Actions</h3>
        <div className="grid grid-cols-6 gap-4">
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="Plus" size="lg" className="text-radiant-green-500" />
            <span className="text-xs">Add</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="Edit" size="lg" className="text-mid-blue-500" />
            <span className="text-xs">Edit</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="Trash2" size="lg" className="text-red-500" />
            <span className="text-xs">Delete</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="Save" size="lg" className="text-radiant-green-500" />
            <span className="text-xs">Save</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="Download" size="lg" />
            <span className="text-xs">Download</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="Upload" size="lg" />
            <span className="text-xs">Upload</span>
          </div>
        </div>
      </div>

      {/* Communication */}
      <div className="col-span-6">
        <h3 className="text-lg font-semibold mb-4 text-inky-blue-900">Communication</h3>
        <div className="grid grid-cols-6 gap-4">
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="Mail" size="lg" />
            <span className="text-xs">Email</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="Phone" size="lg" />
            <span className="text-xs">Phone</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="MessageSquare" size="lg" />
            <span className="text-xs">Message</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="Bell" size="lg" className="text-sunny-yellow-500" />
            <span className="text-xs">Notifications</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="Share2" size="lg" />
            <span className="text-xs">Share</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="ExternalLink" size="lg" />
            <span className="text-xs">External</span>
          </div>
        </div>
      </div>

      {/* Status & Feedback */}
      <div className="col-span-6">
        <h3 className="text-lg font-semibold mb-4 text-inky-blue-900">Status & Feedback</h3>
        <div className="grid grid-cols-6 gap-4">
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="Check" size="lg" className="text-radiant-green-500" />
            <span className="text-xs">Success</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="X" size="lg" className="text-red-500" />
            <span className="text-xs">Error</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="AlertTriangle" size="lg" className="text-sunny-yellow-500" />
            <span className="text-xs">Warning</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="Info" size="lg" className="text-mid-blue-500" />
            <span className="text-xs">Info</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="Loader2" size="lg" className="animate-spin" />
            <span className="text-xs">Loading</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="HelpCircle" size="lg" />
            <span className="text-xs">Help</span>
          </div>
        </div>
      </div>

      {/* Finance & Banking */}
      <div className="col-span-6">
        <h3 className="text-lg font-semibold mb-4 text-inky-blue-900">Finance & Banking</h3>
        <div className="grid grid-cols-8 gap-4">
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="DollarSign" size="lg" className="text-radiant-green-500" />
            <span className="text-xs">Dollar</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="CreditCard" size="lg" className="text-mid-blue-500" />
            <span className="text-xs">Credit Card</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="Banknote" size="lg" className="text-radiant-green-500" />
            <span className="text-xs">Banknote</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="Wallet" size="lg" className="text-inky-blue-500" />
            <span className="text-xs">Wallet</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="Coins" size="lg" className="text-sunny-yellow-500" />
            <span className="text-xs">Coins</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="PiggyBank" size="lg" className="text-radiant-green-500" />
            <span className="text-xs">Savings</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="Receipt" size="lg" />
            <span className="text-xs">Receipt</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="Landmark" size="lg" className="text-inky-blue-500" />
            <span className="text-xs">Bank</span>
          </div>
        </div>
      </div>

      {/* Investments & Trading */}
      <div className="col-span-6">
        <h3 className="text-lg font-semibold mb-4 text-inky-blue-900">Investments & Trading</h3>
        <div className="grid grid-cols-8 gap-4">
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="TrendingUp" size="lg" className="text-radiant-green-500" />
            <span className="text-xs">Bull Market</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="TrendingDown" size="lg" className="text-red-500" />
            <span className="text-xs">Bear Market</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="BarChart3" size="lg" className="text-mid-blue-500" />
            <span className="text-xs">Bar Chart</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="LineChart" size="lg" className="text-radiant-green-500" />
            <span className="text-xs">Line Chart</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="PieChart" size="lg" className="text-sunny-yellow-500" />
            <span className="text-xs">Pie Chart</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="Activity" size="lg" className="text-mid-blue-500" />
            <span className="text-xs">Activity</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="Target" size="lg" className="text-red-500" />
            <span className="text-xs">Target</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="Percent" size="lg" className="text-radiant-green-500" />
            <span className="text-xs">Percentage</span>
          </div>
        </div>
      </div>

      {/* Crypto & Digital Finance */}
      <div className="col-span-6">
        <h3 className="text-lg font-semibold mb-4 text-inky-blue-900">Crypto & Digital Finance</h3>
        <div className="grid grid-cols-8 gap-4">
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="Bitcoin" size="lg" className="text-sunny-yellow-500" />
            <span className="text-xs">Bitcoin</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="Smartphone" size="lg" className="text-mid-blue-500" />
            <span className="text-xs">Mobile Pay</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="QrCode" size="lg" />
            <span className="text-xs">QR Payment</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="Zap" size="lg" className="text-sunny-yellow-500" />
            <span className="text-xs">Instant Pay</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="Wifi" size="lg" className="text-mid-blue-500" />
            <span className="text-xs">Contactless</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="Globe" size="lg" className="text-inky-blue-500" />
            <span className="text-xs">Global</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="ArrowLeftRight" size="lg" />
            <span className="text-xs">Exchange</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="RefreshCw" size="lg" className="text-mid-blue-500" />
            <span className="text-xs">Refresh</span>
          </div>
        </div>
      </div>

      {/* Business & Corporate */}
      <div className="col-span-6">
        <h3 className="text-lg font-semibold mb-4 text-inky-blue-900">Business & Corporate</h3>
        <div className="grid grid-cols-8 gap-4">
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="Building2" size="lg" className="text-inky-blue-500" />
            <span className="text-xs">Office</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="Briefcase" size="lg" className="text-mid-blue-500" />
            <span className="text-xs">Business</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="Calculator" size="lg" />
            <span className="text-xs">Calculator</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="FileText" size="lg" />
            <span className="text-xs">Document</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="Scale" size="lg" className="text-inky-blue-500" />
            <span className="text-xs">Legal</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="HandCoins" size="lg" className="text-radiant-green-500" />
            <span className="text-xs">Payment</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="TrendingUp" size="lg" className="text-radiant-green-500" />
            <span className="text-xs">Profit</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="Award" size="lg" className="text-sunny-yellow-500" />
            <span className="text-xs">Achievement</span>
          </div>
        </div>
      </div>

      {/* Insurance & Protection */}
      <div className="col-span-6">
        <h3 className="text-lg font-semibold mb-4 text-inky-blue-900">Insurance & Protection</h3>
        <div className="grid grid-cols-8 gap-4">
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="Shield" size="lg" className="text-mid-blue-500" />
            <span className="text-xs">Protection</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="ShieldCheck" size="lg" className="text-radiant-green-500" />
            <span className="text-xs">Secured</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="Heart" size="lg" className="text-red-500" />
            <span className="text-xs">Health</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="Car" size="lg" className="text-mid-blue-500" />
            <span className="text-xs">Auto</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="Home" size="lg" className="text-sunny-yellow-500" />
            <span className="text-xs">Home</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="Umbrella" size="lg" className="text-mid-blue-500" />
            <span className="text-xs">Coverage</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="Lock" size="lg" className="text-inky-blue-500" />
            <span className="text-xs">Secure</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="UserCheck" size="lg" className="text-radiant-green-500" />
            <span className="text-xs">Verified</span>
          </div>
        </div>
      </div>

      {/* User & Social */}
      <div className="col-span-6">
        <h3 className="text-lg font-semibold mb-4 text-inky-blue-900">User & Social</h3>
        <div className="grid grid-cols-6 gap-4">
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="User" size="lg" />
            <span className="text-xs">Profile</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="Users" size="lg" />
            <span className="text-xs">Team</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="Heart" size="lg" className="text-red-500" />
            <span className="text-xs">Like</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="Star" size="lg" className="text-sunny-yellow-500" />
            <span className="text-xs">Favorite</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="Settings" size="lg" />
            <span className="text-xs">Settings</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="LogOut" size="lg" />
            <span className="text-xs">Logout</span>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const FinanceShowcase: Story = {
  render: () => (
    <div className="grid grid-cols-6 gap-6 p-6">
      {/* Payment Methods */}
      <div className="col-span-6">
        <h3 className="text-lg font-semibold mb-4 text-inky-blue-900">Payment Methods</h3>
        <div className="grid grid-cols-10 gap-3">
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="CreditCard" size="lg" className="text-mid-blue-500" />
            <span className="text-xs">Credit</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="Banknote" size="lg" className="text-radiant-green-500" />
            <span className="text-xs">Cash</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="Smartphone" size="lg" className="text-mid-blue-500" />
            <span className="text-xs">Mobile</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="QrCode" size="lg" />
            <span className="text-xs">QR Pay</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="Wallet" size="lg" className="text-inky-blue-500" />
            <span className="text-xs">Wallet</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="Nfc" size="lg" className="text-sunny-yellow-500" />
            <span className="text-xs">Tap</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="Bitcoin" size="lg" className="text-sunny-yellow-500" />
            <span className="text-xs">Crypto</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="HandCoins" size="lg" className="text-radiant-green-500" />
            <span className="text-xs">P2P</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="Receipt" size="lg" />
            <span className="text-xs">Invoice</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="ArrowLeftRight" size="lg" />
            <span className="text-xs">Transfer</span>
          </div>
        </div>
      </div>

      {/* Financial Analysis */}
      <div className="col-span-6">
        <h3 className="text-lg font-semibold mb-4 text-inky-blue-900">Financial Analysis</h3>
        <div className="grid grid-cols-10 gap-3">
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="BarChart3" size="lg" className="text-mid-blue-500" />
            <span className="text-xs">Bar Chart</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="LineChart" size="lg" className="text-radiant-green-500" />
            <span className="text-xs">Line Chart</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="PieChart" size="lg" className="text-sunny-yellow-500" />
            <span className="text-xs">Pie Chart</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="Activity" size="lg" className="text-mid-blue-500" />
            <span className="text-xs">Activity</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="TrendingUp" size="lg" className="text-radiant-green-500" />
            <span className="text-xs">Up Trend</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="TrendingDown" size="lg" className="text-red-500" />
            <span className="text-xs">Down Trend</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="Target" size="lg" className="text-red-500" />
            <span className="text-xs">Goal</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="Calculator" size="lg" />
            <span className="text-xs">Calculate</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="Percent" size="lg" className="text-radiant-green-500" />
            <span className="text-xs">Rate</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="Scale" size="lg" className="text-inky-blue-500" />
            <span className="text-xs">Balance</span>
          </div>
        </div>
      </div>

      {/* Retirement & Savings */}
      <div className="col-span-6">
        <h3 className="text-lg font-semibold mb-4 text-inky-blue-900">Retirement & Savings</h3>
        <div className="grid grid-cols-10 gap-3">
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="PiggyBank" size="lg" className="text-radiant-green-500" />
            <span className="text-xs">Savings</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="Calendar" size="lg" className="text-mid-blue-500" />
            <span className="text-xs">Timeline</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="Clock" size="lg" />
            <span className="text-xs">Schedule</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="Repeat" size="lg" className="text-mid-blue-500" />
            <span className="text-xs">Recurring</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="Award" size="lg" className="text-sunny-yellow-500" />
            <span className="text-xs">Reward</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="Gift" size="lg" className="text-red-500" />
            <span className="text-xs">Bonus</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="Coins" size="lg" className="text-sunny-yellow-500" />
            <span className="text-xs">Fund</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="Landmark" size="lg" className="text-inky-blue-500" />
            <span className="text-xs">Institution</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="FileBarChart" size="lg" className="text-mid-blue-500" />
            <span className="text-xs">Report</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="Timer" size="lg" />
            <span className="text-xs">Term</span>
          </div>
        </div>
      </div>

      {/* Risk & Security */}
      <div className="col-span-6">
        <h3 className="text-lg font-semibold mb-4 text-inky-blue-900">Risk & Security</h3>
        <div className="grid grid-cols-10 gap-3">
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="Shield" size="lg" className="text-mid-blue-500" />
            <span className="text-xs">Protection</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="ShieldCheck" size="lg" className="text-radiant-green-500" />
            <span className="text-xs">Verified</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="Lock" size="lg" className="text-inky-blue-500" />
            <span className="text-xs">Secure</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="Key" size="lg" className="text-sunny-yellow-500" />
            <span className="text-xs">Access</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="Eye" size="lg" />
            <span className="text-xs">Monitor</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="AlertTriangle" size="lg" className="text-red-500" />
            <span className="text-xs">Risk</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="UserCheck" size="lg" className="text-radiant-green-500" />
            <span className="text-xs">Approved</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="Fingerprint" size="lg" className="text-mid-blue-500" />
            <span className="text-xs">Biometric</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="Scan" size="lg" />
            <span className="text-xs">Scan</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LucideIcon iconName="CheckCircle" size="lg" className="text-radiant-green-500" />
            <span className="text-xs">Verified</span>
          </div>
        </div>
      </div>
    </div>
  ),
};
