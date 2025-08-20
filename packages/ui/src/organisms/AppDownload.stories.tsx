import type { Meta, StoryObj } from "@storybook/react";
import { AppDownload } from "./AppDownload";

const meta: Meta<typeof AppDownload> = {
  title: "Organisms/AppDownload",
  component: AppDownload,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "A full-width app download section component with multiple layouts and variants for promoting mobile app downloads.",
      },
    },
  },
  argTypes: {
    data: {
      control: { type: "object" },
      description: "App download information data",
    },
    variant: {
      control: { type: "select" },
      options: ["default", "gradient", "dark", "branded"],
      description: "Visual variant of the app download section",
    },
    layout: {
      control: { type: "select" },
      options: ["centered", "split", "hero"],
      description: "Layout variant determining content arrangement",
    },
    showDecorations: {
      control: { type: "boolean" },
      description: "Show decorative background elements",
    },
    className: {
      control: { type: "text" },
      description: "Additional CSS classes",
    },
  },
  args: {
    variant: "default",
    layout: "centered",
    showDecorations: false,
  },
};

export default meta;
type Story = StoryObj<typeof AppDownload>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: "Default app download section with centered layout and standard styling.",
      },
    },
  },
};

export const GradientVariant: Story = {
  args: {
    variant: "gradient",
    showDecorations: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Gradient variant with decorative background elements for hero sections.",
      },
    },
  },
};

export const DarkVariant: Story = {
  args: {
    variant: "dark",
    showDecorations: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Dark variant with decorative pattern for premium sections.",
      },
    },
  },
};

export const BrandedVariant: Story = {
  args: {
    variant: "branded",
    layout: "hero",
    showDecorations: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Branded gradient variant with hero layout for landing pages.",
      },
    },
  },
};

export const SplitLayout: Story = {
  args: {
    layout: "split",
    variant: "gradient",
    showDecorations: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Split layout with features list and phone mockup for detailed app promotion.",
      },
    },
  },
};

export const HeroLayout: Story = {
  args: {
    layout: "hero",
    variant: "branded",
    showDecorations: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Hero layout with large typography and feature highlights for landing pages.",
      },
    },
  },
};

export const CenteredLayout: Story = {
  args: {
    layout: "centered",
    variant: "default",
  },
  parameters: {
    docs: {
      description: {
        story: "Centered layout for simple, focused app promotion.",
      },
    },
  },
};

export const CustomData: Story = {
  args: {
    data: {
      copy: "Take control of your investments with our powerful mobile platform. Trade, monitor, and manage your portfolio anywhere, anytime.",
      links: [
        { type: "appstore", href: "https://apps.apple.com/app/example" },
        { type: "playstore", href: "https://play.google.com/store/apps/details?id=com.example" },
        { type: "internal", label: "Learn more about features", href: "/features" },
      ],
    },
    variant: "dark",
    layout: "split",
  },
  parameters: {
    docs: {
      description: {
        story: "App download section with custom data to demonstrate flexibility.",
      },
    },
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-12">
      <div>
        <h2 className="text-2xl font-bold mb-6 text-center text-slate-900">Default Variant</h2>
        <AppDownload variant="default" layout="centered" />
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6 text-center text-slate-900">Gradient Variant</h2>
        <AppDownload variant="gradient" layout="centered" showDecorations />
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6 text-center text-slate-900">Dark Variant</h2>
        <AppDownload variant="dark" layout="split" showDecorations />
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6 text-center text-slate-900">Branded Variant</h2>
        <AppDownload variant="branded" layout="hero" showDecorations />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Comparison of all available variants with different layouts.",
      },
    },
  },
};

export const AllLayouts: Story = {
  render: () => (
    <div className="space-y-12">
      <div>
        <h2 className="text-2xl font-bold mb-6 text-center text-slate-900">Centered Layout</h2>
        <AppDownload variant="default" layout="centered" />
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6 text-center text-slate-900">Split Layout</h2>
        <AppDownload variant="gradient" layout="split" showDecorations />
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6 text-center text-slate-900">Hero Layout</h2>
        <AppDownload variant="branded" layout="hero" showDecorations />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Comparison of all available layouts with appropriate variants.",
      },
    },
  },
};

export const ResponsiveDemo: Story = {
  args: {
    variant: "gradient",
    layout: "split",
    showDecorations: true,
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
    docs: {
      description: {
        story: "Mobile responsive view of the app download section. Test different viewport sizes to see responsive behavior.",
      },
    },
  },
};

export const AccessibilityDemo: Story = {
  args: {
    variant: "default",
    layout: "split",
  },
  render: (args) => (
    <div className="space-y-6">
      <div className="p-4 border rounded-lg bg-yellow-50">
        <h3 className="font-semibold mb-2">アクセシビリティテスト</h3>
        <ul className="text-sm space-y-1 text-slate-600">
          <li>• Tabキーで全てのダウンロードボタンにフォーカス可能</li>
          <li>• ダウンロードボタンにスクリーンリーダー用の説明文を追加</li>
          <li>• セクション見出しでナビゲーション構造を定義</li>
          <li>• focus-visibleスタイルでキーボードフォーカスを明確に表示</li>
          <li>• 外部リンクに適切なrel属性を設定</li>
        </ul>
      </div>
      <AppDownload {...args} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "アクセシビリティ機能のテスト用ストーリー。キーボードナビゲーションとスクリーンリーダー対応をテストできます。",
      },
    },
  },
};

export const PerformanceDemo: Story = {
  render: () => (
    <div className="space-y-8">
      {Array.from({ length: 3 }, (_, i) => (
        <AppDownload
          key={i}
          variant={i === 0 ? "default" : i === 1 ? "gradient" : "dark"}
          layout={i === 0 ? "centered" : i === 1 ? "split" : "hero"}
          showDecorations={i % 2 === 1}
        />
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Multiple app download sections to test performance and memory usage.",
      },
    },
  },
};

export const IntegrationExample: Story = {
  render: () => (
    <div>
      {/* Page Header */}
      <div className="bg-slate-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold text-slate-900">Download our app</h1>
          <p className="mt-4 text-lg text-slate-600">
            Manage your super on the go with our award-winning mobile app
          </p>
        </div>
      </div>

      {/* App Download Section */}
      <AppDownload variant="gradient" layout="split" showDecorations />

      {/* Additional Features */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why choose our app?</h2>
            <p className="text-lg text-slate-600">Join thousands of satisfied users</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Lightning Fast</h3>
              <p className="text-slate-600">Access your account information instantly</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Bank-Level Security</h3>
              <p className="text-slate-600">Your data is protected with enterprise-grade encryption</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Mobile Optimized</h3>
              <p className="text-slate-600">Designed specifically for mobile devices</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Example of how the AppDownload component integrates with other page elements in a real website layout.",
      },
    },
  },
};

export const LandingPageExample: Story = {
  render: () => (
    <div>
      {/* Hero App Download */}
      <AppDownload variant="branded" layout="hero" showDecorations />

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Everything you need in one app
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-green-600 text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Account Overview</h3>
                    <p className="text-slate-600">View your balance, performance, and recent transactions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-green-600 text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Make Contributions</h3>
                    <p className="text-slate-600">Add to your super anytime, anywhere</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-green-600 text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Investment Options</h3>
                    <p className="text-slate-600">Switch investment options with ease</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-3xl">📱</span>
                  </div>
                  <p className="text-slate-600">App Feature Preview</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second App Download CTA */}
      <AppDownload variant="dark" layout="centered" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Complete landing page example showing multiple AppDownload components in different contexts.",
      },
    },
  },
};
