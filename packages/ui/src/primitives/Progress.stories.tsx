import type { Meta, StoryObj } from "@storybook/react";
import { useState, useEffect } from "react";
import { Progress, CircularProgress } from "./Progress";

const meta: Meta<typeof Progress> = {
  title: "Primitives/Progress",
  component: Progress,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg", "xl"],
    },
    variant: {
      control: { type: "select" },
      options: ["default", "success", "warning", "danger"],
    },
    value: {
      control: { type: "range", min: 0, max: 100, step: 1 },
    },
    showValue: {
      control: { type: "boolean" },
    },
  },
  args: {
    size: "md",
    variant: "default",
    value: 50,
    showValue: false,
  },
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  args: {
    value: 75,
  },
};

export const WithLabel: Story = {
  args: {
    value: 60,
    label: "Profile completion",
    showValue: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="w-80 space-y-4">
      <Progress size="sm" value={25} label="Small" showValue />
      <Progress size="md" value={50} label="Medium" showValue />
      <Progress size="lg" value={75} label="Large" showValue />
      <Progress size="xl" value={90} label="Extra Large" showValue />
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="w-80 space-y-4">
      <Progress variant="default" value={70} label="Default" showValue />
      <Progress variant="success" value={85} label="Success" showValue />
      <Progress variant="warning" value={45} label="Warning" showValue />
      <Progress variant="danger" value={20} label="Danger" showValue />
    </div>
  ),
};

export const CustomFormatter: Story = {
  render: () => (
    <div className="w-80 space-y-4">
      <Progress
        value={7500}
        max={10000}
        label="Investment Goal"
        showValue
        formatValue={(value, max) => `$${value.toLocaleString()} / $${max.toLocaleString()}`}
      />

      <Progress
        value={3}
        max={5}
        label="Risk Level"
        showValue
        formatValue={(value, max) => `${value} of ${max} stars`}
        variant="warning"
      />

      <Progress
        value={150}
        max={365}
        label="Days until retirement"
        showValue
        formatValue={(value, max) => `${value} days (${Math.round((value/max)*100)}%)`}
        variant="success"
      />
    </div>
  ),
};

export const AnimatedProgress: Story = {
  render: () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
      const timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) return 0;
          return prev + 1;
        });
      }, 50);

      return () => clearInterval(timer);
    }, []);

    return (
      <div className="w-80 space-y-4">
        <Progress
          value={progress}
          label="Loading..."
          showValue
        />

        <Progress
          value={progress}
          variant="success"
          label="Upload Progress"
          showValue
        />
      </div>
    );
  },
};

export const CircularProgressExample: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <CircularProgress value={25} showPercentage />
      <CircularProgress value={50} variant="success" showPercentage />
      <CircularProgress value={75} variant="warning" showPercentage size={60} strokeWidth={4} />
      <CircularProgress value={90} variant="danger" showPercentage size={80} strokeWidth={6} />
    </div>
  ),
};

export const CircularSizes: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <CircularProgress value={70} size={30} strokeWidth={2} showPercentage />
      <CircularProgress value={70} size={40} strokeWidth={3} showPercentage />
      <CircularProgress value={70} size={60} strokeWidth={4} showPercentage />
      <CircularProgress value={70} size={80} strokeWidth={5} showPercentage />
    </div>
  ),
};

export const InvestmentDashboard: Story = {
  render: () => {
    const [portfolioProgress, setPortfolioProgress] = useState(68);
    const [savingsProgress, setSavingsProgress] = useState(45);

    return (
      <div className="w-96 space-y-6">
        <h3 className="text-heading-sm font-brand-bold text-inky-blue-500">
          Investment Progress
        </h3>

        <div className="space-y-4">
          <Progress
            value={portfolioProgress}
            label="Portfolio Growth"
            showValue
            variant="success"
            formatValue={(value) => `${value}% of annual target`}
          />

          <Progress
            value={savingsProgress}
            label="Retirement Savings"
            showValue
            variant="default"
            formatValue={(value) => `${value}% complete`}
          />

          <Progress
            value={250000}
            max={500000}
            label="Investment Goal"
            showValue
            variant="warning"
            formatValue={(value, max) => `$${(value/1000).toFixed(0)}k / $${(max/1000).toFixed(0)}k`}
          />
        </div>

        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-light-grey-200">
          <div className="text-center">
            <CircularProgress
              value={85}
              variant="success"
              showPercentage
              size={60}
              strokeWidth={4}
            />
            <p className="text-xs text-mid-grey-600 mt-2">Conservative</p>
          </div>

          <div className="text-center">
            <CircularProgress
              value={60}
              variant="default"
              showPercentage
              size={60}
              strokeWidth={4}
            />
            <p className="text-xs text-mid-grey-600 mt-2">Balanced</p>
          </div>

          <div className="text-center">
            <CircularProgress
              value={35}
              variant="warning"
              showPercentage
              size={60}
              strokeWidth={4}
            />
            <p className="text-xs text-mid-grey-600 mt-2">Growth</p>
          </div>
        </div>

        <div className="space-y-2">
          <button
            onClick={() => setPortfolioProgress(Math.min(portfolioProgress + 5, 100))}
            className="w-full px-3 py-2 bg-mid-blue-500 text-white rounded-md hover:bg-mid-blue-600 text-sm"
          >
            Increase Portfolio (+5%)
          </button>
          <button
            onClick={() => setSavingsProgress(Math.min(savingsProgress + 10, 100))}
            className="w-full px-3 py-2 bg-radiant-green-500 text-white rounded-md hover:bg-radiant-green-600 text-sm"
          >
            Add to Savings (+10%)
          </button>
        </div>
      </div>
    );
  },
};

export const LoadingStates: Story = {
  render: () => {
    const [uploading, setUploading] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(0);

    const startUpload = () => {
      setUploading(true);
      setUploadProgress(0);

      const interval = setInterval(() => {
        setUploadProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => {
              setUploading(false);
              setUploadProgress(0);
            }, 500);
            return 100;
          }
          return prev + Math.random() * 10;
        });
      }, 100);
    };

    return (
      <div className="w-80 space-y-6">
        <div className="space-y-4">
          <Progress
            value={uploading ? uploadProgress : 0}
            label="Document Upload"
            showValue
            variant={uploadProgress === 100 ? "success" : "default"}
          />

          <div className="flex items-center gap-4">
            <CircularProgress
              value={uploading ? uploadProgress : 0}
              variant={uploadProgress === 100 ? "success" : "default"}
              showPercentage
              size={50}
              strokeWidth={4}
            />

            <div className="flex-1">
              <p className="text-sm font-medium text-inky-blue-500">
                {uploading
                  ? uploadProgress === 100
                    ? "Upload complete!"
                    : "Uploading..."
                  : "Ready to upload"
                }
              </p>
              <p className="text-xs text-mid-grey-600">
                {uploading ? "Please wait..." : "Click button to start"}
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={startUpload}
          disabled={uploading}
          className="w-full px-4 py-2 bg-mid-blue-500 text-white rounded-md hover:bg-mid-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {uploading ? "Uploading..." : "Start Upload"}
        </button>
      </div>
    );
  },
};

export const ComparisonChart: Story = {
  render: () => (
    <div className="w-96 space-y-6">
      <h3 className="text-heading-sm font-brand-bold text-inky-blue-500">
        Portfolio Performance
      </h3>

      <div className="space-y-4">
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-inky-blue-500">Your Portfolio</span>
            <span className="text-sm font-bold text-radiant-green-500">+8.2%</span>
          </div>
          <Progress value={82} variant="success" />
        </div>

        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-inky-blue-500">Market Average</span>
            <span className="text-sm font-bold text-mid-grey-600">+6.5%</span>
          </div>
          <Progress value={65} variant="default" />
        </div>

        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-inky-blue-500">Conservative Fund</span>
            <span className="text-sm font-bold text-mid-grey-600">+4.1%</span>
          </div>
          <Progress value={41} variant="default" />
        </div>

        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-inky-blue-500">High Risk Fund</span>
            <span className="text-sm font-bold text-sunny-yellow-600">+3.8%</span>
          </div>
          <Progress value={38} variant="warning" />
        </div>
      </div>

      <div className="p-4 bg-fresh-mint-100 rounded-md">
        <p className="text-sm text-inky-blue-500">
          <span className="font-medium">Great performance!</span> Your portfolio is outperforming the market average by 1.7%.
        </p>
      </div>
    </div>
  ),
};
