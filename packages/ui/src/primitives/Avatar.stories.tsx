import type { Meta, StoryObj } from "@storybook/react";
import { Avatar, AvatarGroup } from "./Avatar";
import { Icon } from "./Icon";

const meta: Meta<typeof Avatar> = {
  title: "Primitives/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl", "2xl"],
    },
  },
  args: {
    size: "md",
    fallback: "JD",
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    fallback: "John Doe",
  },
};

export const WithImage: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    alt: "Profile picture",
    fallback: "John Doe",
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar size="xs" fallback="XS" />
      <Avatar size="sm" fallback="SM" />
      <Avatar size="md" fallback="MD" />
      <Avatar size="lg" fallback="LG" />
      <Avatar size="xl" fallback="XL" />
      <Avatar size="2xl" fallback="2XL" />
    </div>
  ),
};

export const WithImages: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar
        size="sm"
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
        alt="John Doe"
        fallback="JD"
      />
      <Avatar
        size="md"
        src="https://images.unsplash.com/photo-1494790108755-2616b612b167?w=100&h=100&fit=crop&crop=face"
        alt="Sarah Johnson"
        fallback="SJ"
      />
      <Avatar
        size="lg"
        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
        alt="Michael Chen"
        fallback="MC"
      />
    </div>
  ),
};

export const FallbackVariations: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar fallback="John Doe" />
      <Avatar fallback="A" />
      <Avatar fallback="Robert Johnson" />
      <Avatar fallback="?" />
      <Avatar fallback="Jane Smith-Wilson" />
    </div>
  ),
};

export const CustomFallback: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar
        fallbackElement={
          <Icon size="sm" decorative>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </Icon>
        }
      />
      <Avatar
        size="lg"
        fallbackElement={
          <Icon size="md" decorative>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </Icon>
        }
        className="bg-mid-blue-100 text-mid-blue-600"
      />
    </div>
  ),
};

export const BrokenImage: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar
        src="https://broken-image-url.jpg"
        alt="Broken image"
        fallback="BI"
      />
      <Avatar
        src=""
        alt="Empty source"
        fallback="ES"
      />
    </div>
  ),
};

export const AvatarGroupExample: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium text-inky-blue-500 mb-3">Small Group</h3>
        <AvatarGroup max={3}>
          <Avatar
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
            alt="John"
            fallback="JD"
          />
          <Avatar
            src="https://images.unsplash.com/photo-1494790108755-2616b612b167?w=100&h=100&fit=crop&crop=face"
            alt="Sarah"
            fallback="SJ"
          />
          <Avatar fallback="MC" />
        </AvatarGroup>
      </div>

      <div>
        <h3 className="text-sm font-medium text-inky-blue-500 mb-3">Large Group (with overflow)</h3>
        <AvatarGroup max={4}>
          <Avatar
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
            alt="John"
            fallback="JD"
          />
          <Avatar
            src="https://images.unsplash.com/photo-1494790108755-2616b612b167?w=100&h=100&fit=crop&crop=face"
            alt="Sarah"
            fallback="SJ"
          />
          <Avatar fallback="MC" />
          <Avatar fallback="AL" />
          <Avatar fallback="RT" />
          <Avatar fallback="KW" />
          <Avatar fallback="LM" />
        </AvatarGroup>
      </div>

      <div>
        <h3 className="text-sm font-medium text-inky-blue-500 mb-3">Different Sizes</h3>
        <div className="space-y-3">
          <AvatarGroup size="sm" max={3}>
            <Avatar fallback="Small One" />
            <Avatar fallback="Small Two" />
            <Avatar fallback="Small Three" />
            <Avatar fallback="Small Four" />
          </AvatarGroup>

          <AvatarGroup size="lg" max={3}>
            <Avatar fallback="Large One" />
            <Avatar fallback="Large Two" />
            <Avatar fallback="Large Three" />
            <Avatar fallback="Large Four" />
            <Avatar fallback="Large Five" />
          </AvatarGroup>
        </div>
      </div>
    </div>
  ),
};

export const UserProfile: Story = {
  render: () => (
    <div className="w-80 space-y-6">
      <div className="flex items-center gap-4">
        <Avatar
          size="xl"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
          alt="John Doe"
          fallback="John Doe"
        />
        <div>
          <h3 className="text-lg font-brand-bold text-inky-blue-500">John Doe</h3>
          <p className="text-sm text-mid-grey-600">Senior Account Manager</p>
          <p className="text-sm text-mid-grey-600">CareSuper Member since 2015</p>
        </div>
      </div>

      <div className="border-t border-light-grey-200 pt-4">
        <h4 className="text-sm font-medium text-inky-blue-500 mb-3">Account Team</h4>
        <div className="flex items-center gap-3">
          <AvatarGroup max={3} size="sm">
            <Avatar
              src="https://images.unsplash.com/photo-1494790108755-2616b612b167?w=100&h=100&fit=crop&crop=face"
              alt="Sarah Johnson"
              fallback="Sarah Johnson"
            />
            <Avatar fallback="Michael Chen" />
            <Avatar fallback="Lisa Wang" />
            <Avatar fallback="Robert Kim" />
          </AvatarGroup>
          <span className="text-sm text-mid-grey-600">Your support team</span>
        </div>
      </div>
    </div>
  ),
};

export const StatusIndicators: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <div className="relative">
        <Avatar
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
          alt="Online user"
          fallback="ON"
        />
        <div className="absolute -bottom-0 -right-0 h-3 w-3 rounded-full bg-radiant-green-500 border-2 border-white"></div>
      </div>

      <div className="relative">
        <Avatar
          src="https://images.unsplash.com/photo-1494790108755-2616b612b167?w=100&h=100&fit=crop&crop=face"
          alt="Away user"
          fallback="AW"
        />
        <div className="absolute -bottom-0 -right-0 h-3 w-3 rounded-full bg-sunny-yellow-500 border-2 border-white"></div>
      </div>

      <div className="relative">
        <Avatar fallback="OF" />
        <div className="absolute -bottom-0 -right-0 h-3 w-3 rounded-full bg-mid-grey-400 border-2 border-white"></div>
      </div>
    </div>
  ),
};

export const InteractiveAvatars: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <button className="rounded-full focus:outline-none focus:ring-2 focus:ring-mid-blue-500 focus:ring-offset-2">
          <Avatar
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
            alt="Clickable avatar"
            fallback="CA"
            className="hover:ring-2 hover:ring-mid-blue-300 transition-all"
          />
        </button>

        <button className="rounded-full focus:outline-none focus:ring-2 focus:ring-mid-blue-500 focus:ring-offset-2">
          <Avatar
            fallback="HA"
            className="hover:ring-2 hover:ring-mid-blue-300 transition-all cursor-pointer"
          />
        </button>
      </div>

      <p className="text-sm text-mid-grey-600">
        Click on the avatars above to see hover and focus states
      </p>
    </div>
  ),
};
