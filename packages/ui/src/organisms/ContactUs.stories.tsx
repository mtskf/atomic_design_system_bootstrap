import type { Meta, StoryObj } from "@storybook/react";
import { ContactUs } from "./ContactUs";

const meta: Meta<typeof ContactUs> = {
  title: "Organisms/ContactUs",
  component: ContactUs,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "A full-width contact section component with multiple variants and comprehensive contact information display.",
      },
    },
  },
  argTypes: {
    data: {
      control: { type: "object" },
      description: "Contact information data",
    },
    variant: {
      control: { type: "select" },
      options: ["default", "blue", "slate"],
      description: "Visual variant of the contact section",
    },
    showPattern: {
      control: { type: "boolean" },
      description: "Show decorative background pattern",
    },
    className: {
      control: { type: "text" },
      description: "Additional CSS classes",
    },
  },
  args: {
    variant: "default",
    showPattern: false,
  },
};

export default meta;
type Story = StoryObj<typeof ContactUs>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: "Default contact section with white background and standard styling.",
      },
    },
  },
};

export const BlueVariant: Story = {
  args: {
    variant: "blue",
    showPattern: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Blue gradient variant with decorative background pattern for hero sections.",
      },
    },
  },
};

export const SlateVariant: Story = {
  args: {
    variant: "slate",
    showPattern: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Dark slate variant with decorative pattern for premium/professional sections.",
      },
    },
  },
};

export const WithoutPattern: Story = {
  args: {
    variant: "blue",
    showPattern: false,
  },
  parameters: {
    docs: {
      description: {
        story: "Blue variant without background pattern for cleaner appearance.",
      },
    },
  },
};

export const CustomData: Story = {
  args: {
    data: {
      phone: "1300 123 456",
      hours: "9am – 6pm, Monday–Friday (AEST/AEDT)",
      links: [
        { label: "Online Chat", href: "/chat" },
        { label: "Email Support", href: "/email" },
        { label: "Book Appointment", href: "/appointment" },
      ],
    },
    variant: "slate",
  },
  parameters: {
    docs: {
      description: {
        story: "Contact section with custom data to demonstrate flexibility.",
      },
    },
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-12">
      <div>
        <h2 className="text-2xl font-bold mb-6 text-center">Default Variant</h2>
        <ContactUs variant="default" />
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6 text-center">Blue Variant</h2>
        <ContactUs variant="blue" showPattern />
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6 text-center">Slate Variant</h2>
        <ContactUs variant="slate" showPattern />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Comparison of all available variants side by side.",
      },
    },
  },
};

export const ResponsiveDemo: Story = {
  args: {
    variant: "blue",
    showPattern: true,
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
    docs: {
      description: {
        story: "Mobile responsive view of the contact section. Test different viewport sizes to see responsive behavior.",
      },
    },
  },
};

export const AccessibilityDemo: Story = {
  args: {
    variant: "default",
  },
  render: (args) => (
    <div className="space-y-6">
      <div className="p-4 border rounded-lg bg-yellow-50">
        <h3 className="font-semibold mb-2">アクセシビリティテスト</h3>
        <ul className="text-sm space-y-1 text-slate-600">
          <li>• Tabキーで全てのインタラクティブ要素にフォーカス可能</li>
          <li>• 電話番号リンクはモバイルで正しく動作</li>
          <li>• セクション見出しでスクリーンリーダーナビゲーション対応</li>
          <li>• focus-visibleスタイルでキーボードフォーカスを明確に表示</li>
          <li>• aria-labelledbyでセクション構造を適切に定義</li>
        </ul>
      </div>
      <ContactUs {...args} />
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
        <ContactUs
          key={i}
          variant={i === 0 ? "default" : i === 1 ? "blue" : "slate"}
          showPattern={i % 2 === 1}
        />
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Multiple contact sections to test performance and memory usage.",
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
          <h1 className="text-3xl font-bold text-slate-900">Get in Touch</h1>
          <p className="mt-4 text-lg text-slate-600">
            We're here to help with all your superannuation needs
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <ContactUs variant="blue" showPattern />

      {/* Additional Content */}
      <div className="bg-slate-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Office Hours</h3>
              <p className="text-slate-600">Monday to Friday</p>
              <p className="text-slate-600">8:00 AM - 7:00 PM</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Emergency Support</h3>
              <p className="text-slate-600">24/7 online resources</p>
              <p className="text-slate-600">Available anytime</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Response Time</h3>
              <p className="text-slate-600">Most enquiries resolved</p>
              <p className="text-slate-600">within 24 hours</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Example of how the ContactUs component integrates with other page elements in a real website layout.",
      },
    },
  },
};
