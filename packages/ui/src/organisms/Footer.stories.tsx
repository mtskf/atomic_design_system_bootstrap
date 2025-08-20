import type { Meta, StoryObj } from "@storybook/react";
import { Footer, FooterSection, SocialLinks, AwardStrip } from "./Footer";
import footerData from "../config/footer.config.json";

const meta: Meta<typeof Footer> = {
  title: "Organisms/Footer",
  component: Footer,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "A comprehensive footer component for CareSuper with responsive design, accessibility features, and mobile accordion behavior.",
      },
    },
  },
  argTypes: {
    data: {
      control: { type: "object" },
      description: "Footer configuration data",
    },
    className: {
      control: { type: "text" },
      description: "Additional CSS classes",
    },
  },
  args: {
    data: footerData,
  },
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: "Default footer with improved layout, better visual hierarchy, and enhanced user experience.",
      },
    },
  },
};

export const Desktop: Story = {
  parameters: {
    viewport: {
      defaultViewport: "desktop",
    },
    docs: {
      description: {
        story: "Desktop layout showing the full grid with all sections expanded.",
      },
    },
  },
};

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
    docs: {
      description: {
        story: "Mobile layout with collapsible accordion sections. Support and About sections are open by default.",
      },
    },
  },
};

export const Tablet: Story = {
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
    docs: {
      description: {
        story: "Tablet layout adapting between mobile and desktop breakpoints.",
      },
    },
  },
};

export const CustomData: Story = {
  args: {
    data: {
      ...footerData,
      support: {
        ...footerData.support,
        phone: "1300 123 456",
        hours: "9am – 5pm, Monday–Friday (AEST/AEDT)",
      },
      disclosures: {
        ...footerData.disclosures,
        copyright: "© 2024 Custom Super Fund",
      },
    },
  },
  parameters: {
    docs: {
      description: {
        story: "Footer with custom data to demonstrate flexibility of the component.",
      },
    },
  },
};

export const ReducedMotion: Story = {
  parameters: {
    docs: {
      description: {
        story: "Footer respecting reduced motion preferences. Accordion animations are disabled.",
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="motion-reduce">
        <Story />
      </div>
    ),
  ],
};

export const HighContrast: Story = {
  parameters: {
    backgrounds: {
      default: "dark",
    },
    docs: {
      description: {
        story: "Footer in high contrast mode for accessibility testing.",
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="bg-slate-900 text-white">
        <Story />
      </div>
    ),
  ],
};

// Component-specific stories
const sectionMeta: Meta<typeof FooterSection> = {
  title: "Organisms/Footer/FooterSection",
  component: FooterSection,
  parameters: {
    layout: "padded",
  },
  argTypes: {
    title: {
      control: { type: "text" },
    },
    ariaId: {
      control: { type: "text" },
    },
    collapsible: {
      control: { type: "boolean" },
    },
    defaultOpen: {
      control: { type: "boolean" },
    },
  },
  args: {
    title: "Example Section",
    ariaId: "example-section",
    collapsible: true,
    defaultOpen: false,
  },
};

export const FooterSectionExample: StoryObj<typeof FooterSection> = {
  ...sectionMeta,
  render: (args) => (
    <div className="max-w-md">
      <FooterSection {...args}>
        <div className="space-y-2">
          <p className="text-sm text-slate-600">
            This is example content inside a footer section.
          </p>
          <ul className="space-y-1">
            <li><a href="#" className="text-sm text-blue-600 hover:text-blue-800">Example Link 1</a></li>
            <li><a href="#" className="text-sm text-blue-600 hover:text-blue-800">Example Link 2</a></li>
            <li><a href="#" className="text-sm text-blue-600 hover:text-blue-800">Example Link 3</a></li>
          </ul>
        </div>
      </FooterSection>
    </div>
  ),
};

const socialMeta: Meta<typeof SocialLinks> = {
  title: "Organisms/Footer/SocialLinks",
  component: SocialLinks,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    links: {
      control: { type: "object" },
    },
  },
  args: {
    links: footerData.social,
  },
};

export const SocialLinksExample: StoryObj<typeof SocialLinks> = {
  ...socialMeta,
};

export const SocialLinksCustom: StoryObj<typeof SocialLinks> = {
  ...socialMeta,
  args: {
    links: [
      { icon: "linkedin", href: "https://linkedin.com/company/example" },
      { icon: "facebook", href: "https://facebook.com/example" },
      { icon: "x", href: "https://x.com/example" },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: "Social links with custom configuration.",
      },
    },
  },
};

const awardMeta: Meta<typeof AwardStrip> = {
  title: "Organisms/Footer/AwardStrip",
  component: AwardStrip,
  parameters: {
    layout: "padded",
  },
  argTypes: {
    awards: {
      control: { type: "object" },
    },
  },
  args: {
    awards: footerData.awards,
  },
};

export const AwardStripExample: StoryObj<typeof AwardStrip> = {
  ...awardMeta,
};

export const AwardStripLimited: StoryObj<typeof AwardStrip> = {
  ...awardMeta,
  args: {
    awards: [
      { name: "SuperRatings 5 Star", href: "https://www.superratings.com.au" },
      { name: "Chant West Top Performer", href: "https://www.chantwest.com.au" },
      { name: "ESG Leader 2024", href: "https://www.rainmaker.com.au" },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: "Award strip with a limited number of awards.",
      },
    },
  },
};

// Accessibility demonstration
export const AccessibilityDemo: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="p-4 border rounded-lg">
        <h3 className="font-semibold mb-4">Keyboard Navigation Test</h3>
        <p className="text-sm text-slate-600 mb-4">
          Use Tab key to navigate through all interactive elements.
          All links, buttons, and accordions should be accessible.
        </p>
        <Footer />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Use this story to test keyboard navigation and screen reader compatibility.",
      },
    },
  },
};

// Performance demonstration
export const PerformanceDemo: Story = {
  render: () => (
    <div className="space-y-4">
      {Array.from({ length: 3 }, (_, i) => (
        <Footer key={i} />
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Multiple footer instances to test performance and memory usage.",
      },
    },
  },
};

export const ImprovedLayout: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="p-6 bg-slate-50 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">レイアウト改善点</h3>
        <ul className="space-y-2 text-sm text-slate-600">
          <li>• <strong>12カラムグリッド:</strong> より柔軟で自然な情報階層</li>
          <li>• <strong>視覚的強調:</strong> 重要な情報（電話番号・アプリ）をハイライト</li>
          <li>• <strong>カード式デザイン:</strong> 各セクションに背景色とパディングを追加</li>
          <li>• <strong>アイコン強化:</strong> 矢印・受賞歴・ソーシャルアイコンを円形ボタンに</li>
          <li>• <strong>スペーシング改善:</strong> 一貫したマージン・パディング設計</li>
          <li>• <strong>ホバー効果:</strong> より豊かなインタラクション体験</li>
        </ul>
      </div>
      <Footer />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "改善されたFooterレイアウトの特徴を示すストーリー。12カラムグリッド、視覚的階層、改善されたスペーシングとインタラクションが特徴です。",
      },
    },
  },
};
