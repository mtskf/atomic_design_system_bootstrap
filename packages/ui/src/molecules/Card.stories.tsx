import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";
import { Button } from "../primitives/Button";
import { Badge } from "../primitives/Badge";

const meta: Meta<typeof Card> = {
  title: "Molecules/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "outlined", "elevated", "interactive"],
    },
    clickable: {
      control: { type: "boolean" },
    },
  },
  args: {
    variant: "default",
    clickable: false,
  },
};

export default meta;
export type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Card className="w-80">
      <Card.Header>
        <Card.Title>Card Title</Card.Title>
        <Card.Description>A brief description of the card content.</Card.Description>
      </Card.Header>
      <Card.Body>
        <p className="text-sm text-mid-grey-700">
          This is the main content area of the card. You can put any content here
          such as text, images, or other components.
        </p>
      </Card.Body>
      <Card.Footer>
        <div className="flex justify-end gap-2">
          <Button intent="ghost" size="sm">Cancel</Button>
          <Button size="sm">Action</Button>
        </div>
      </Card.Footer>
    </Card>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4 w-full max-w-4xl">
      <Card variant="default">
        <Card.Body>
          <Card.Title>Default</Card.Title>
          <p className="text-sm text-mid-grey-700 mt-2">
            Standard card with border and subtle shadow.
          </p>
        </Card.Body>
      </Card>

      <Card variant="outlined">
        <Card.Body>
          <Card.Title>Outlined</Card.Title>
          <p className="text-sm text-mid-grey-700 mt-2">
            Card with prominent border, no shadow.
          </p>
        </Card.Body>
      </Card>

      <Card variant="elevated">
        <Card.Body>
          <Card.Title>Elevated</Card.Title>
          <p className="text-sm text-mid-grey-700 mt-2">
            Card with larger shadow for emphasis.
          </p>
        </Card.Body>
      </Card>

      <Card variant="interactive" onClick={() => alert("Card clicked!")}>
        <Card.Body>
          <Card.Title>Interactive</Card.Title>
          <p className="text-sm text-mid-grey-700 mt-2">
            Clickable card with hover effects.
          </p>
        </Card.Body>
      </Card>
    </div>
  ),
};

export const ProductCard: Story = {
  render: () => (
    <Card className="w-80">
      <div className="aspect-video bg-gradient-fresh-to-radiant rounded-t-lg"></div>
      <Card.Body>
        <div className="flex items-start justify-between">
          <div>
            <Card.Title>Superannuation Account</Card.Title>
            <Card.Description>Employer contributions and personal savings</Card.Description>
          </div>
          <Badge variant="success">Active</Badge>
        </div>
        <div className="mt-4 space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-mid-grey-600">Current Balance</span>
            <span className="font-brand-medium text-inky-blue-500">$45,230.50</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-mid-grey-600">Annual Return</span>
            <span className="font-brand-medium text-radiant-green-500">+8.5%</span>
          </div>
        </div>
      </Card.Body>
      <Card.Footer>
        <div className="flex gap-2">
          <Button intent="ghost" size="sm" fullWidth>View Details</Button>
          <Button size="sm" fullWidth>Manage</Button>
        </div>
      </Card.Footer>
    </Card>
  ),
};

export const NewsCard: Story = {
  render: () => (
    <Card variant="interactive" className="w-80" onClick={() => alert("Article clicked!")}>
      <div className="aspect-video bg-gradient-to-br from-mid-blue-500 to-inky-blue-500 rounded-t-lg"></div>
      <Card.Body>
        <div className="flex items-center gap-2 mb-2">
          <Badge size="sm">News</Badge>
          <span className="text-xs text-mid-grey-500">2 hours ago</span>
        </div>
        <Card.Title className="text-base">
          New Investment Options Available for Members
        </Card.Title>
        <Card.Description>
          We're expanding our investment portfolio with new sustainable and ethical investment choices...
        </Card.Description>
      </Card.Body>
    </Card>
  ),
};

export const CalculatorCard: Story = {
  render: () => (
    <Card className="w-80">
      <Card.Header>
        <Card.Title>Retirement Calculator</Card.Title>
        <Card.Description>
          Estimate your retirement savings and plan for the future
        </Card.Description>
      </Card.Header>
      <Card.Body>
        <div className="space-y-4">
          <div className="text-center py-6 bg-fresh-mint-500 rounded-lg">
            <div className="text-2xl font-brand-bold text-inky-blue-500">$1,250,000</div>
            <div className="text-sm text-mid-grey-600">Projected retirement balance</div>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <div className="text-mid-grey-600">Age at retirement</div>
              <div className="font-brand-medium">65 years</div>
            </div>
            <div>
              <div className="text-mid-grey-600">Years to retirement</div>
              <div className="font-brand-medium">25 years</div>
            </div>
          </div>
        </div>
      </Card.Body>
      <Card.Footer>
        <Button fullWidth>Start Calculator</Button>
      </Card.Footer>
    </Card>
  ),
};

export const SimpleCard: Story = {
  render: () => (
    <Card className="w-80">
      <Card.Body>
        <p className="text-mid-grey-700">
          A simple card with just body content, no header or footer.
        </p>
      </Card.Body>
    </Card>
  ),
};
