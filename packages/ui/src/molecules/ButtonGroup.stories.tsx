import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { ButtonGroup, RadioButtonGroup, SegmentedControl } from "./ButtonGroup";
import { Button } from "../primitives/Button";
import { LucideIcon } from "../primitives/Icon";

const meta: Meta<typeof ButtonGroup> = {
  title: "Molecules/ButtonGroup",
  component: ButtonGroup,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    orientation: {
      control: { type: "select" },
      options: ["horizontal", "vertical"],
    },
    variant: {
      control: { type: "select" },
      options: ["default", "outlined", "ghost"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    attached: {
      control: { type: "boolean" },
    },
  },
  args: {
    orientation: "horizontal",
    variant: "default",
    size: "md",
    attached: true,
  },
};

export default meta;
type Story = StoryObj<typeof ButtonGroup>;

export const Default: Story = {
  render: () => (
    <ButtonGroup>
      <Button intent="primary">Save</Button>
      <Button intent="secondary">Cancel</Button>
    </ButtonGroup>
  ),
};

export const Orientations: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium text-inky-blue-500 mb-3">Horizontal</h3>
        <ButtonGroup orientation="horizontal">
          <Button intent="secondary">Previous</Button>
          <Button intent="primary">Next</Button>
          <Button intent="ghost">Cancel</Button>
        </ButtonGroup>
      </div>

      <div>
        <h3 className="text-sm font-medium text-inky-blue-500 mb-3">Vertical</h3>
        <ButtonGroup orientation="vertical">
          <Button intent="primary">Save Changes</Button>
          <Button intent="secondary">Save as Draft</Button>
          <Button intent="ghost">Discard</Button>
        </ButtonGroup>
      </div>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium text-inky-blue-500 mb-3">Default</h3>
        <ButtonGroup variant="default">
          <Button intent="primary">Edit</Button>
          <Button intent="secondary">Delete</Button>
        </ButtonGroup>
      </div>

      <div>
        <h3 className="text-sm font-medium text-inky-blue-500 mb-3">Outlined</h3>
        <ButtonGroup variant="outlined">
          <Button intent="ghost">Bold</Button>
          <Button intent="ghost">Italic</Button>
          <Button intent="ghost">Underline</Button>
        </ButtonGroup>
      </div>

      <div>
        <h3 className="text-sm font-medium text-inky-blue-500 mb-3">Ghost</h3>
        <ButtonGroup variant="ghost">
          <Button intent="ghost">View</Button>
          <Button intent="ghost">Edit</Button>
          <Button intent="ghost">Share</Button>
        </ButtonGroup>
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <ButtonGroup size="sm">
        <Button intent="primary">Small</Button>
        <Button intent="secondary">Group</Button>
      </ButtonGroup>

      <ButtonGroup size="md">
        <Button intent="primary">Medium</Button>
        <Button intent="secondary">Group</Button>
      </ButtonGroup>

      <ButtonGroup size="lg">
        <Button intent="primary">Large</Button>
        <Button intent="secondary">Group</Button>
      </ButtonGroup>
    </div>
  ),
};

export const AttachedVsDetached: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium text-inky-blue-500 mb-3">Attached (Default)</h3>
        <ButtonGroup attached>
          <Button intent="secondary">Copy</Button>
          <Button intent="secondary">Paste</Button>
          <Button intent="secondary">Cut</Button>
        </ButtonGroup>
      </div>

      <div>
        <h3 className="text-sm font-medium text-inky-blue-500 mb-3">Detached</h3>
        <ButtonGroup attached={false}>
          <Button intent="secondary">Copy</Button>
          <Button intent="secondary">Paste</Button>
          <Button intent="secondary">Cut</Button>
        </ButtonGroup>
      </div>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div className="space-y-4">
      <ButtonGroup>
        <Button intent="secondary" leftIcon={<LucideIcon iconName="Download" size="sm" />}>
          Download
        </Button>
        <Button intent="secondary" leftIcon={<LucideIcon iconName="Share2" size="sm" />}>
          Share
        </Button>
        <Button intent="secondary" leftIcon={<LucideIcon iconName="Eye" size="sm" />}>
          View
        </Button>
      </ButtonGroup>

      <ButtonGroup orientation="vertical">
        <Button intent="ghost" leftIcon={<LucideIcon iconName="Edit" size="sm" />}>
          Edit Profile
        </Button>
        <Button intent="ghost" leftIcon={<LucideIcon iconName="Settings" size="sm" />}>
          Settings
        </Button>
        <Button intent="ghost" leftIcon={<LucideIcon iconName="User" size="sm" />}>
          Account
        </Button>
      </ButtonGroup>
    </div>
  ),
};

export const RadioButtonGroupExample: Story = {
  render: () => {
    const [view, setView] = useState("list");
    const [timeframe, setTimeframe] = useState("1M");

    return (
      <div className="space-y-6">
        <div>
          <h3 className="text-sm font-medium text-inky-blue-500 mb-3">View Mode</h3>
          <RadioButtonGroup
            options={[
              { value: "list", label: "List" },
              { value: "grid", label: "Grid" },
              { value: "card", label: "Cards" },
            ]}
            value={view}
            onValueChange={setView}
          />
        </div>

        <div>
          <h3 className="text-sm font-medium text-inky-blue-500 mb-3">Time Period</h3>
          <RadioButtonGroup
            options={[
              { value: "1D", label: "1D" },
              { value: "1W", label: "1W" },
              { value: "1M", label: "1M" },
              { value: "3M", label: "3M" },
              { value: "1Y", label: "1Y" },
              { value: "ALL", label: "ALL" },
            ]}
            value={timeframe}
            onValueChange={setTimeframe}
            size="sm"
          />
        </div>

        <div className="p-4 bg-light-grey-100 rounded-md">
          <p className="text-sm text-inky-blue-500">
            Current selection: <strong>{view}</strong> view, <strong>{timeframe}</strong> timeframe
          </p>
        </div>
      </div>
    );
  },
};

export const SegmentedControlExample: Story = {
  render: () => {
    const [tab, setTab] = useState("overview");
    const [chartType, setChartType] = useState("line");

    return (
      <div className="space-y-6 w-96">
        <div>
          <h3 className="text-sm font-medium text-inky-blue-500 mb-3">Navigation Tabs</h3>
          <SegmentedControl
            options={[
              { value: "overview", label: "Overview" },
              { value: "performance", label: "Performance" },
              { value: "holdings", label: "Holdings" },
            ]}
            value={tab}
            onValueChange={setTab}
            fullWidth
          />
        </div>

        <div>
          <h3 className="text-sm font-medium text-inky-blue-500 mb-3">Chart Type</h3>
          <SegmentedControl
            options={[
              { value: "line", label: "Line" },
              { value: "bar", label: "Bar" },
              { value: "area", label: "Area" },
            ]}
            value={chartType}
            onValueChange={setChartType}
            size="sm"
          />
        </div>

        <div className="p-4 bg-fresh-mint-100 rounded-md">
          <h4 className="font-medium text-inky-blue-500 mb-2">{tab.charAt(0).toUpperCase() + tab.slice(1)} Tab</h4>
          <p className="text-sm text-mid-grey-700">
            Displaying {chartType} chart for the {tab} section.
          </p>
        </div>
      </div>
    );
  },
};

export const InvestmentScenarios: Story = {
  render: () => {
    const [riskLevel, setRiskLevel] = useState("balanced");
    const [investmentTerm, setInvestmentTerm] = useState("long");
    const [contributionFreq, setContributionFreq] = useState("monthly");

    return (
      <div className="w-full max-w-2xl space-y-6">
        <h2 className="text-xl font-brand-bold text-inky-blue-500">
          Investment Preferences
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-sm font-medium text-inky-blue-500 mb-3">Risk Level</h3>
            <RadioButtonGroup
              options={[
                { value: "conservative", label: "Conservative" },
                { value: "balanced", label: "Balanced" },
                { value: "growth", label: "Growth" },
              ]}
              value={riskLevel}
              onValueChange={setRiskLevel}
              orientation="vertical"
              attached={false}
            />
          </div>

          <div>
            <h3 className="text-sm font-medium text-inky-blue-500 mb-3">Investment Term</h3>
            <RadioButtonGroup
              options={[
                { value: "short", label: "Short (1-5 years)" },
                { value: "medium", label: "Medium (5-15 years)" },
                { value: "long", label: "Long (15+ years)" },
              ]}
              value={investmentTerm}
              onValueChange={setInvestmentTerm}
              orientation="vertical"
              attached={false}
            />
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-inky-blue-500 mb-3">Contribution Frequency</h3>
          <SegmentedControl
            options={[
              { value: "weekly", label: "Weekly" },
              { value: "fortnightly", label: "Fortnightly" },
              { value: "monthly", label: "Monthly" },
              { value: "quarterly", label: "Quarterly" },
            ]}
            value={contributionFreq}
            onValueChange={setContributionFreq}
            fullWidth
          />
        </div>

        <div className="p-6 bg-gradient-fresh-to-radiant rounded-lg">
          <h4 className="font-brand-bold text-inky-blue-500 mb-3">Your Investment Strategy</h4>
          <div className="space-y-2 text-sm text-inky-blue-500">
            <p><strong>Risk Level:</strong> {riskLevel.charAt(0).toUpperCase() + riskLevel.slice(1)}</p>
            <p><strong>Investment Term:</strong> {investmentTerm.charAt(0).toUpperCase() + investmentTerm.slice(1)}</p>
            <p><strong>Contributions:</strong> {contributionFreq.charAt(0).toUpperCase() + contributionFreq.slice(1)}</p>
          </div>
        </div>
      </div>
    );
  },
};

export const ToolbarActions: Story = {
  render: () => (
    <div className="space-y-6 w-full max-w-4xl">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-brand-bold text-inky-blue-500">Portfolio Management</h2>

        <ButtonGroup>
          <Button intent="secondary" size="sm" leftIcon={<LucideIcon iconName="Download" size="xs" />}>
            Export
          </Button>
          <Button intent="secondary" size="sm" leftIcon={<LucideIcon iconName="Upload" size="xs" />}>
            Import
          </Button>
          <Button intent="primary" size="sm" leftIcon={<LucideIcon iconName="Plus" size="xs" />}>
            Add Investment
          </Button>
        </ButtonGroup>
      </div>

      <div className="flex justify-between items-center p-4 bg-light-grey-100 rounded-md">
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium text-inky-blue-500">View:</span>
          <RadioButtonGroup
            options={[
              { value: "table", label: "Table" },
              { value: "chart", label: "Chart" },
            ]}
            defaultValue="table"
            size="sm"
          />
        </div>

        <ButtonGroup variant="outlined" size="sm">
          <Button intent="ghost" leftIcon={<LucideIcon iconName="Filter" size="xs" />}>
            Filter
          </Button>
          <Button intent="ghost" leftIcon={<LucideIcon iconName="Archive" size="xs" />}>
            Archive
          </Button>
          <Button intent="ghost" leftIcon={<LucideIcon iconName="MoreHorizontal" size="xs" />}>
            More
          </Button>
        </ButtonGroup>
      </div>
    </div>
  ),
};

export const FormattingButtons: Story = {
  render: () => {
    const [selectedFormats, setSelectedFormats] = useState<string[]>([]);
    const [textAlign, setTextAlign] = useState("left");

    const toggleFormat = (format: string) => {
      setSelectedFormats(prev =>
        prev.includes(format)
          ? prev.filter(f => f !== format)
          : [...prev, format]
      );
    };

    return (
      <div className="space-y-6 w-full max-w-2xl">
        <div>
          <h3 className="text-sm font-medium text-inky-blue-500 mb-3">Text Formatting</h3>
          <ButtonGroup variant="outlined">
            <Button
              intent={selectedFormats.includes("bold") ? "primary" : "ghost"}
              size="sm"
              leftIcon={<LucideIcon iconName="Bold" size="xs" />}
              onClick={() => toggleFormat("bold")}
            >
              Bold
            </Button>
            <Button
              intent={selectedFormats.includes("italic") ? "primary" : "ghost"}
              size="sm"
              leftIcon={<LucideIcon iconName="Italic" size="xs" />}
              onClick={() => toggleFormat("italic")}
            >
              Italic
            </Button>
            <Button
              intent={selectedFormats.includes("underline") ? "primary" : "ghost"}
              size="sm"
              leftIcon={<LucideIcon iconName="Underline" size="xs" />}
              onClick={() => toggleFormat("underline")}
            >
              Underline
            </Button>
          </ButtonGroup>
        </div>

        <div>
          <h3 className="text-sm font-medium text-inky-blue-500 mb-3">Text Alignment</h3>
          <RadioButtonGroup
            options={[
              { value: "left", label: "Left" },
              { value: "center", label: "Center" },
              { value: "right", label: "Right" },
              { value: "justify", label: "Justify" },
            ]}
            value={textAlign}
            onValueChange={setTextAlign}
            size="sm"
          />
        </div>

        <div className="p-4 bg-light-grey-100 rounded-md">
          <p className="text-sm text-inky-blue-500">
            <strong>Active formats:</strong> {selectedFormats.length > 0 ? selectedFormats.join(", ") : "None"}
          </p>
          <p className="text-sm text-inky-blue-500">
            <strong>Text alignment:</strong> {textAlign}
          </p>
        </div>
      </div>
    );
  },
};

export const MediaControls: Story = {
  render: () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState("medium");

    return (
      <div className="space-y-6 w-full max-w-lg">
        <div>
          <h3 className="text-sm font-medium text-inky-blue-500 mb-3">Playback Controls</h3>
          <ButtonGroup>
            <Button intent="secondary" leftIcon={<LucideIcon iconName="SkipBack" size="sm" />}>
              Previous
            </Button>
            <Button
              intent="primary"
              leftIcon={<LucideIcon iconName={isPlaying ? "Pause" : "Play"} size="sm" />}
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? "Pause" : "Play"}
            </Button>
            <Button intent="secondary" leftIcon={<LucideIcon iconName="SkipForward" size="sm" />}>
              Next
            </Button>
          </ButtonGroup>
        </div>

        <div>
          <h3 className="text-sm font-medium text-inky-blue-500 mb-3">Volume Control</h3>
          <RadioButtonGroup
            options={[
              { value: "mute", label: "Mute" },
              { value: "low", label: "Low" },
              { value: "medium", label: "Medium" },
              { value: "high", label: "High" },
            ]}
            value={volume}
            onValueChange={setVolume}
            size="sm"
          />
        </div>

        <div className="p-4 bg-gradient-fresh-to-radiant rounded-md">
          <p className="text-sm text-inky-blue-500">
            <strong>Status:</strong> {isPlaying ? "Playing" : "Paused"} at {volume} volume
          </p>
        </div>
      </div>
    );
  },
};

export const DataVisualization: Story = {
  render: () => {
    const [chartType, setChartType] = useState("line");
    const [timeRange, setTimeRange] = useState("1M");
    const [showGrid, setShowGrid] = useState(true);

    return (
      <div className="space-y-6 w-full max-w-3xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-sm font-medium text-inky-blue-500 mb-3">Chart Type</h3>
            <RadioButtonGroup
              options={[
                { value: "line", label: "Line" },
                { value: "bar", label: "Bar" },
                { value: "area", label: "Area" },
                { value: "pie", label: "Pie" },
              ]}
              value={chartType}
              onValueChange={setChartType}
              orientation="vertical"
              attached={false}
              size="sm"
            />
          </div>

          <div>
            <h3 className="text-sm font-medium text-inky-blue-500 mb-3">Time Range</h3>
            <SegmentedControl
              options={[
                { value: "1D", label: "1D" },
                { value: "1W", label: "1W" },
                { value: "1M", label: "1M" },
                { value: "3M", label: "3M" },
                { value: "1Y", label: "1Y" },
              ]}
              value={timeRange}
              onValueChange={setTimeRange}
              size="sm"
            />
          </div>

          <div>
            <h3 className="text-sm font-medium text-inky-blue-500 mb-3">Display Options</h3>
            <ButtonGroup orientation="vertical" attached={false}>
              <Button
                intent={showGrid ? "primary" : "ghost"}
                size="sm"
                leftIcon={<LucideIcon iconName="Grid3X3" size="xs" />}
                onClick={() => setShowGrid(!showGrid)}
              >
                Show Grid
              </Button>
              <Button intent="ghost" size="sm" leftIcon={<LucideIcon iconName="Download" size="xs" />}>
                Export Chart
              </Button>
              <Button intent="ghost" size="sm" leftIcon={<LucideIcon iconName="Settings" size="xs" />}>
                Configure
              </Button>
            </ButtonGroup>
          </div>
        </div>

        <div className="h-48 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg flex items-center justify-center border border-slate-200">
          <div className="text-center">
            <LucideIcon iconName="BarChart3" size="lg" className="text-blue-500 mx-auto mb-2" />
            <p className="text-sm text-slate-600">
              {chartType.charAt(0).toUpperCase() + chartType.slice(1)} Chart - {timeRange} Range
            </p>
            <p className="text-xs text-slate-500">
              Grid: {showGrid ? "Enabled" : "Disabled"}
            </p>
          </div>
        </div>
      </div>
    );
  },
};

export const NavigationTabs: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState("dashboard");
    const [subTab, setSubTab] = useState("overview");

    return (
      <div className="space-y-6 w-full max-w-4xl">
        <div>
          <h3 className="text-sm font-medium text-inky-blue-500 mb-3">Main Navigation</h3>
          <SegmentedControl
            options={[
              { value: "dashboard", label: "Dashboard" },
              { value: "portfolio", label: "Portfolio" },
              { value: "transactions", label: "Transactions" },
              { value: "reports", label: "Reports" },
              { value: "settings", label: "Settings" },
            ]}
            value={activeTab}
            onValueChange={setActiveTab}
            fullWidth
          />
        </div>

        {activeTab === "dashboard" && (
          <div>
            <h3 className="text-sm font-medium text-inky-blue-500 mb-3">Dashboard View</h3>
            <RadioButtonGroup
              options={[
                { value: "overview", label: "Overview" },
                { value: "performance", label: "Performance" },
                { value: "allocation", label: "Allocation" },
              ]}
              value={subTab}
              onValueChange={setSubTab}
              size="sm"
            />
          </div>
        )}

        <div className="p-6 bg-white border border-slate-200 rounded-lg shadow-sm">
          <h4 className="font-medium text-slate-900 mb-2">
            {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
            {activeTab === "dashboard" && ` - ${subTab.charAt(0).toUpperCase() + subTab.slice(1)}`}
          </h4>
          <p className="text-sm text-slate-600">
            Content for the selected tab would be displayed here.
          </p>
        </div>
      </div>
    );
  },
};
