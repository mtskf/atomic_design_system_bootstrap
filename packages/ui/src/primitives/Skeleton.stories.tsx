import type { Meta, StoryObj } from "@storybook/react";
import { useState, useEffect } from "react";
import {
  Skeleton,
  SkeletonText,
  SkeletonAvatar,
  SkeletonCard,
  SkeletonTable
} from "./Skeleton";
import { Avatar } from "./Avatar";
import { Button } from "./Button";

const meta: Meta<typeof Skeleton> = {
  title: "Primitives/Skeleton",
  component: Skeleton,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "subtle", "pulse"],
    },
    circle: {
      control: { type: "boolean" },
    },
  },
  args: {
    variant: "default",
    width: "200px",
    height: "20px",
    circle: false,
  },
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  args: {
    width: "200px",
    height: "20px",
  },
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div>
        <p className="text-sm font-medium text-inky-blue-500 mb-2">Default</p>
        <Skeleton width="100%" height="20px" />
      </div>

      <div>
        <p className="text-sm font-medium text-inky-blue-500 mb-2">Subtle</p>
        <Skeleton variant="subtle" width="100%" height="20px" />
      </div>

      <div>
        <p className="text-sm font-medium text-inky-blue-500 mb-2">Pulse</p>
        <Skeleton variant="pulse" width="100%" height="20px" />
      </div>
    </div>
  ),
};

export const Shapes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Skeleton width="200px" height="20px" />
      <Skeleton width="40px" height="40px" circle />
      <Skeleton width="100px" height="40px" />
      <Skeleton width="60px" height="60px" circle />
    </div>
  ),
};

export const TextSkeleton: Story = {
  render: () => (
    <div className="w-80 space-y-4">
      <div>
        <p className="text-sm font-medium text-inky-blue-500 mb-2">Single line</p>
        <SkeletonText />
      </div>

      <div>
        <p className="text-sm font-medium text-inky-blue-500 mb-2">Multiple lines</p>
        <SkeletonText lines={3} />
      </div>

      <div>
        <p className="text-sm font-medium text-inky-blue-500 mb-2">Paragraph</p>
        <SkeletonText lines={5} />
      </div>
    </div>
  ),
};

export const AvatarSkeleton: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <SkeletonAvatar size="xs" />
      <SkeletonAvatar size="sm" />
      <SkeletonAvatar size="md" />
      <SkeletonAvatar size="lg" />
      <SkeletonAvatar size="xl" />
      <SkeletonAvatar size="2xl" />
    </div>
  ),
};

export const CardSkeleton: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
      <SkeletonCard />
      <SkeletonCard avatar />
      <SkeletonCard avatar actions />
      <SkeletonCard lines={5} actions />
    </div>
  ),
};

export const TableSkeleton: Story = {
  render: () => (
    <div className="w-full max-w-4xl space-y-6">
      <div>
        <p className="text-sm font-medium text-inky-blue-500 mb-4">Basic Table</p>
        <SkeletonTable rows={3} columns={3} />
      </div>

      <div>
        <p className="text-sm font-medium text-inky-blue-500 mb-4">Investment Portfolio Table</p>
        <SkeletonTable rows={5} columns={6} />
      </div>
    </div>
  ),
};

export const LoadingStates: Story = {
  render: () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => setLoading(false), 3000);
      return () => clearTimeout(timer);
    }, []);

    const realContent = (
      <div className="w-80 space-y-4">
        <div className="flex items-center space-x-3">
          <Avatar
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
            alt="John Doe"
            fallback="JD"
          />
          <div>
            <h3 className="font-medium text-inky-blue-500">John Doe</h3>
            <p className="text-sm text-mid-grey-600">CareSuper Member</p>
          </div>
        </div>

        <div>
          <h4 className="font-medium text-inky-blue-500 mb-2">Account Summary</h4>
          <p className="text-sm text-mid-grey-700">
            Your portfolio has grown by 8.2% this year, outperforming the market average.
            Continue contributing regularly to maximize your retirement savings.
          </p>
        </div>

        <div className="flex space-x-2">
          <Button size="sm">View Details</Button>
          <Button size="sm" intent="ghost">Download Statement</Button>
        </div>
      </div>
    );

    const skeletonContent = (
      <SkeletonCard avatar actions lines={4} className="w-80" />
    );

    return (
      <div className="space-y-4">
        {loading ? skeletonContent : realContent}

        <Button
          size="sm"
          intent="ghost"
          onClick={() => setLoading(!loading)}
        >
          {loading ? "Show Content" : "Show Loading"}
        </Button>
      </div>
    );
  },
};

export const FinancialDashboard: Story = {
  render: () => {
    const [loadingPortfolio, setLoadingPortfolio] = useState(true);
    const [loadingTransactions, setLoadingTransactions] = useState(true);

    useEffect(() => {
      const portfolioTimer = setTimeout(() => setLoadingPortfolio(false), 2000);
      const transactionTimer = setTimeout(() => setLoadingTransactions(false), 3500);

      return () => {
        clearTimeout(portfolioTimer);
        clearTimeout(transactionTimer);
      };
    }, []);

    return (
      <div className="w-full max-w-6xl space-y-6">
        <h2 className="text-xl font-brand-bold text-inky-blue-500">Investment Dashboard</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {loadingPortfolio ? (
            <>
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </>
          ) : (
            <>
              <div className="p-4 border border-light-grey-200 rounded-md">
                <h3 className="font-medium text-inky-blue-500 mb-2">Total Balance</h3>
                <p className="text-2xl font-bold text-inky-blue-500">$245,630</p>
                <p className="text-sm text-radiant-green-500">+8.2% this year</p>
              </div>

              <div className="p-4 border border-light-grey-200 rounded-md">
                <h3 className="font-medium text-inky-blue-500 mb-2">Monthly Contribution</h3>
                <p className="text-2xl font-bold text-inky-blue-500">$500</p>
                <p className="text-sm text-mid-grey-600">Automatic</p>
              </div>

              <div className="p-4 border border-light-grey-200 rounded-md">
                <h3 className="font-medium text-inky-blue-500 mb-2">Years to Retirement</h3>
                <p className="text-2xl font-bold text-inky-blue-500">23</p>
                <p className="text-sm text-mid-grey-600">Projected: $890k</p>
              </div>
            </>
          )}
        </div>

        <div>
          <h3 className="text-lg font-medium text-inky-blue-500 mb-4">Recent Transactions</h3>
          {loadingTransactions ? (
            <SkeletonTable rows={6} columns={4} />
          ) : (
            <div className="border border-light-grey-200 rounded-md overflow-hidden">
              <table className="w-full">
                <thead className="bg-light-grey-100">
                  <tr>
                    <th className="text-left p-3 text-sm font-medium text-inky-blue-500">Date</th>
                    <th className="text-left p-3 text-sm font-medium text-inky-blue-500">Type</th>
                    <th className="text-left p-3 text-sm font-medium text-inky-blue-500">Amount</th>
                    <th className="text-left p-3 text-sm font-medium text-inky-blue-500">Balance</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-light-grey-200">
                    <td className="p-3 text-sm">2024-01-15</td>
                    <td className="p-3 text-sm">Employer Contribution</td>
                    <td className="p-3 text-sm text-radiant-green-500">+$450.00</td>
                    <td className="p-3 text-sm">$245,630.00</td>
                  </tr>
                  <tr className="border-t border-light-grey-200">
                    <td className="p-3 text-sm">2024-01-10</td>
                    <td className="p-3 text-sm">Investment Return</td>
                    <td className="p-3 text-sm text-radiant-green-500">+$1,205.50</td>
                    <td className="p-3 text-sm">$245,180.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>

        <div className="flex space-x-2">
          <Button
            size="sm"
            intent="ghost"
            onClick={() => {
              setLoadingPortfolio(true);
              setTimeout(() => setLoadingPortfolio(false), 2000);
            }}
          >
            Reload Portfolio
          </Button>
          <Button
            size="sm"
            intent="ghost"
            onClick={() => {
              setLoadingTransactions(true);
              setTimeout(() => setLoadingTransactions(false), 2000);
            }}
          >
            Reload Transactions
          </Button>
        </div>
      </div>
    );
  },
};

export const ProfileLoading: Story = {
  render: () => (
    <div className="w-80 space-y-6">
      <div className="flex items-center space-x-4">
        <SkeletonAvatar size="xl" />
        <div className="space-y-2 flex-1">
          <Skeleton className="h-5 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-3 w-2/3" />
        </div>
      </div>

      <div className="space-y-3">
        <Skeleton className="h-4 w-1/4" />
        <SkeletonText lines={4} />
      </div>

      <div className="space-y-3">
        <Skeleton className="h-4 w-1/3" />
        <div className="grid grid-cols-2 gap-4">
          <Skeleton className="h-16" />
          <Skeleton className="h-16" />
        </div>
      </div>
    </div>
  ),
};

export const ListLoading: Story = {
  render: () => (
    <div className="w-96 space-y-4">
      {Array.from({ length: 5 }, (_, index) => (
        <div key={index} className="flex items-center space-x-3 p-3 border border-light-grey-200 rounded-md">
          <SkeletonAvatar size="sm" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-3 w-1/2" />
          </div>
          <Skeleton className="h-8 w-16" />
        </div>
      ))}
    </div>
  ),
};
