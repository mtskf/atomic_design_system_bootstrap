import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { Accordion, FAQAccordion } from "./Accordion";
import { Icon, LucideIcon } from "../primitives/Icon";

const meta: Meta<typeof Accordion> = {
  title: "Molecules/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "ghost", "separated"],
    },
    type: {
      control: { type: "select" },
      options: ["single", "multiple"],
    },
  },
  args: {
    variant: "default",
    type: "single",
    collapsible: true,
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  render: () => (
    <div className="w-96">
      <Accordion type="single" collapsible>
        <Accordion.Item value="item-1">
          <Accordion.Trigger>Investment Options</Accordion.Trigger>
          <Accordion.Content>
            Learn about our range of investment options including conservative, balanced, and growth strategies.
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item value="item-2">
          <Accordion.Trigger>Contribution Limits</Accordion.Trigger>
          <Accordion.Content>
            Understanding annual contribution caps and how they affect your superannuation strategy.
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item value="item-3">
          <Accordion.Trigger>Retirement Planning</Accordion.Trigger>
          <Accordion.Content>
            Tools and guidance to help you plan for a comfortable retirement with CareSuper.
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-6 w-96">
      <div>
        <h3 className="text-sm font-medium text-inky-blue-500 mb-3">Default</h3>
        <Accordion type="single" collapsible variant="default">
          <Accordion.Item value="item-1">
            <Accordion.Trigger>Account Information</Accordion.Trigger>
            <Accordion.Content>
              Your account details and personal information settings.
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value="item-2">
            <Accordion.Trigger>Security Settings</Accordion.Trigger>
            <Accordion.Content>
              Manage your password, two-factor authentication, and security preferences.
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </div>

      <div>
        <h3 className="text-sm font-medium text-inky-blue-500 mb-3">Ghost</h3>
        <Accordion type="single" collapsible variant="ghost">
          <Accordion.Item value="item-1" variant="ghost">
            <Accordion.Trigger>Investment Performance</Accordion.Trigger>
            <Accordion.Content>
              Track your portfolio performance and investment returns.
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value="item-2" variant="ghost">
            <Accordion.Trigger>Transaction History</Accordion.Trigger>
            <Accordion.Content>
              View all your contributions, withdrawals, and investment transactions.
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </div>

      <div>
        <h3 className="text-sm font-medium text-inky-blue-500 mb-3">Separated</h3>
        <Accordion type="single" collapsible variant="separated">
          <Accordion.Item value="item-1" variant="separated">
            <Accordion.Trigger>Financial Advice</Accordion.Trigger>
            <Accordion.Content>
              Connect with our financial advisors for personalized guidance.
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value="item-2" variant="separated">
            <Accordion.Trigger>Insurance Options</Accordion.Trigger>
            <Accordion.Content>
              Explore life insurance and income protection through your super.
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-6 w-96">
      <div>
        <h3 className="text-sm font-medium text-inky-blue-500 mb-3">Small</h3>
        <Accordion type="single" collapsible>
          <Accordion.Item value="item-1">
            <Accordion.Trigger size="sm">Quick Settings</Accordion.Trigger>
            <Accordion.Content size="sm">
              Access frequently used account settings and preferences.
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </div>

      <div>
        <h3 className="text-sm font-medium text-inky-blue-500 mb-3">Medium</h3>
        <Accordion type="single" collapsible>
          <Accordion.Item value="item-1">
            <Accordion.Trigger size="md">Account Overview</Accordion.Trigger>
            <Accordion.Content size="md">
              Complete overview of your superannuation account and recent activity.
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </div>

      <div>
        <h3 className="text-sm font-medium text-inky-blue-500 mb-3">Large</h3>
        <Accordion type="single" collapsible>
          <Accordion.Item value="item-1">
            <Accordion.Trigger size="lg">Investment Strategy</Accordion.Trigger>
            <Accordion.Content size="lg">
              Detailed information about your investment strategy and asset allocation.
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  ),
};

export const MultipleOpen: Story = {
  render: () => (
    <div className="w-96">
      <Accordion type="multiple">
        <Accordion.Item value="item-1">
          <Accordion.Trigger>Personal Details</Accordion.Trigger>
          <Accordion.Content>
            Update your name, address, contact information, and employment details.
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item value="item-2">
          <Accordion.Trigger>Beneficiaries</Accordion.Trigger>
          <Accordion.Content>
            Manage your beneficiary nominations and ensure your super goes to the right people.
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item value="item-3">
          <Accordion.Trigger>Communication Preferences</Accordion.Trigger>
          <Accordion.Content>
            Choose how you want to receive statements, updates, and marketing communications.
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </div>
  ),
};

export const CustomChevron: Story = {
  render: () => (
    <div className="w-96">
      <Accordion type="single" collapsible>
        <Accordion.Item value="item-1">
          <Accordion.Trigger
            chevron={
              <Icon size="sm" decorative>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </Icon>
            }
          >
            Custom Plus Icon
          </Accordion.Trigger>
          <Accordion.Content>
            This accordion uses a custom plus/minus icon instead of the default chevron.
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item value="item-2">
          <Accordion.Trigger hideChevron>
            No Chevron
          </Accordion.Trigger>
          <Accordion.Content>
            This accordion item has no chevron icon at all.
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </div>
  ),
};

export const ControlledAccordion: Story = {
  render: () => {
    const [value, setValue] = useState<string>();

    return (
      <div className="w-96 space-y-4">
        <div className="flex gap-2">
          <button
            onClick={() => setValue("section-1")}
            className="px-3 py-1 text-sm bg-mid-blue-500 text-white rounded hover:bg-mid-blue-600"
          >
            Open Section 1
          </button>
          <button
            onClick={() => setValue("section-2")}
            className="px-3 py-1 text-sm bg-mid-blue-500 text-white rounded hover:bg-mid-blue-600"
          >
            Open Section 2
          </button>
          <button
            onClick={() => setValue(undefined)}
            className="px-3 py-1 text-sm bg-mid-grey-500 text-white rounded hover:bg-mid-grey-600"
          >
            Close All
          </button>
        </div>

        <Accordion type="single" value={value} onValueChange={setValue}>
          <Accordion.Item value="section-1">
            <Accordion.Trigger>Section 1</Accordion.Trigger>
            <Accordion.Content>
              This section is controlled by the buttons above. Current value: {value || "none"}
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item value="section-2">
            <Accordion.Trigger>Section 2</Accordion.Trigger>
            <Accordion.Content>
              You can control which section is open using external buttons.
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </div>
    );
  },
};

export const FAQ: Story = {
  render: () => {
    const faqItems = [
      {
        id: "what-is-super",
        question: "What is superannuation?",
        answer: (
          <div>
            <p>Superannuation is a way of saving for your retirement that is partly funded by your employer. Your employer must contribute a percentage of your earnings into your super account.</p>
            <p className="mt-2">The current minimum contribution rate is 11% of your ordinary time earnings, rising to 12% by July 2025.</p>
          </div>
        ),
      },
      {
        id: "when-can-access",
        question: "When can I access my super?",
        answer: (
          <div>
            <p>Generally, you can access your super when you:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Reach your preservation age and retire</li>
              <li>Reach age 65</li>
              <li>Meet certain conditions of release (like severe financial hardship)</li>
            </ul>
            <p className="mt-2">Your preservation age depends on when you were born, ranging from 55 to 60 years old.</p>
          </div>
        ),
      },
      {
        id: "contribution-limits",
        question: "Are there limits to how much I can contribute?",
        answer: (
          <div>
            <p>Yes, there are annual contribution caps:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li><strong>Concessional contributions:</strong> $27,500 per year (includes employer contributions and salary sacrifice)</li>
              <li><strong>Non-concessional contributions:</strong> $110,000 per year (after-tax contributions)</li>
            </ul>
            <p className="mt-2">Exceeding these caps may result in additional tax being payable.</p>
          </div>
        ),
      },
      {
        id: "investment-options",
        question: "What investment options are available?",
        answer: (
          <div>
            <p>CareSuper offers several investment options to suit different risk profiles:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li><strong>Conservative:</strong> Lower risk, focus on capital preservation</li>
              <li><strong>Balanced:</strong> Medium risk, diversified across asset classes</li>
              <li><strong>Growth:</strong> Higher risk, focus on long-term capital growth</li>
              <li><strong>Socially Responsible:</strong> Ethical investment screening</li>
            </ul>
          </div>
        ),
      },
      {
        id: "fees-costs",
        question: "What fees and costs apply?",
        answer: (
          <div>
            <p>CareSuper charges competitive fees including:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li><strong>Administration fee:</strong> Fixed weekly fee plus percentage of balance</li>
              <li><strong>Investment fees:</strong> Varies by investment option (0.35% - 1.2% p.a.)</li>
              <li><strong>Insurance premiums:</strong> If you have life or income protection insurance</li>
            </ul>
            <p className="mt-2">All fees are clearly outlined in our Product Disclosure Statement.</p>
          </div>
        ),
      },
    ];

    return (
      <div className="w-full max-w-2xl">
        <h2 className="text-xl font-brand-bold text-inky-blue-500 mb-6">
          Frequently Asked Questions
        </h2>
        <FAQAccordion items={faqItems} />
      </div>
    );
  },
};

export const MultipleFAQ: Story = {
  render: () => {
    const faqItems = [
      {
        id: "online-access",
        question: "How do I access my account online?",
        answer: "You can access your account through our secure member portal. If you haven't registered yet, you'll need your member number and some personal details to set up your online access.",
      },
      {
        id: "update-details",
        question: "How do I update my personal details?",
        answer: "Log into your online account and navigate to 'Personal Details'. You can update your address, phone number, and email address instantly. Some changes may require supporting documentation.",
      },
      {
        id: "lost-member-number",
        question: "I've lost my member number. How can I find it?",
        answer: "Your member number is on all correspondence from us. If you can't find it, call our member services team on 1300 CARE SUPER and they'll help you retrieve it after verifying your identity.",
      },
    ];

    return (
      <div className="w-full max-w-2xl space-y-4">
        <h2 className="text-xl font-brand-bold text-inky-blue-500">
          Account Help
        </h2>
        <p className="text-mid-grey-600 mb-6">
          Multiple sections can be open at the same time for easy comparison.
        </p>
        <FAQAccordion items={faqItems} multiple />
      </div>
    );
  },
};

export const WithIcons: Story = {
  render: () => (
    <div className="w-96">
      <Accordion type="single" collapsible>
        <Accordion.Item value="account">
          <Accordion.Trigger>
            <div className="flex items-center gap-3">
              <LucideIcon iconName="User" size="sm" className="text-mid-blue-500" />
              <span>Account Information</span>
            </div>
          </Accordion.Trigger>
          <Accordion.Content>
            Manage your personal details, contact information, and account preferences.
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item value="investments">
          <Accordion.Trigger>
            <div className="flex items-center gap-3">
              <LucideIcon iconName="TrendingUp" size="sm" className="text-radiant-green-500" />
              <span>Investment Portfolio</span>
            </div>
          </Accordion.Trigger>
          <Accordion.Content>
            View your current investments, performance, and allocation across different asset classes.
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item value="transactions">
          <Accordion.Trigger>
            <div className="flex items-center gap-3">
              <LucideIcon iconName="CreditCard" size="sm" className="text-inky-blue-500" />
              <span>Transaction History</span>
            </div>
          </Accordion.Trigger>
          <Accordion.Content>
            Review all your contributions, withdrawals, and investment transactions.
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item value="documents">
          <Accordion.Trigger>
            <div className="flex items-center gap-3">
              <LucideIcon iconName="FileText" size="sm" className="text-mid-grey-500" />
              <span>Documents & Statements</span>
            </div>
          </Accordion.Trigger>
          <Accordion.Content>
            Access your annual statements, tax information, and important documents.
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </div>
  ),
};

export const IconVariants: Story = {
  render: () => (
    <div className="space-y-6 w-96">
      <div>
        <h3 className="text-sm font-medium text-inky-blue-500 mb-3">Financial Services</h3>
        <Accordion type="single" collapsible variant="default">
          <Accordion.Item value="banking">
            <Accordion.Trigger>
              <div className="flex items-center gap-3">
                <LucideIcon iconName="Building2" size="sm" className="text-mid-blue-500" />
                <span>Banking Services</span>
              </div>
            </Accordion.Trigger>
            <Accordion.Content>
              Access checking accounts, savings options, and online banking features.
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item value="loans">
            <Accordion.Trigger>
              <div className="flex items-center gap-3">
                <LucideIcon iconName="Home" size="sm" className="text-sunny-yellow-500" />
                <span>Loans & Mortgages</span>
              </div>
            </Accordion.Trigger>
            <Accordion.Content>
              Explore home loans, personal loans, and refinancing options.
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item value="insurance">
            <Accordion.Trigger>
              <div className="flex items-center gap-3">
                <LucideIcon iconName="Shield" size="sm" className="text-radiant-green-500" />
                <span>Insurance Protection</span>
              </div>
            </Accordion.Trigger>
            <Accordion.Content>
              Life insurance, income protection, and health insurance through your super.
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </div>

      <div>
        <h3 className="text-sm font-medium text-inky-blue-500 mb-3">Support & Help</h3>
        <Accordion type="multiple" variant="ghost">
          <Accordion.Item value="help" variant="ghost">
            <Accordion.Trigger>
              <div className="flex items-center gap-3">
                <LucideIcon iconName="HelpCircle" size="sm" className="text-mid-blue-500" />
                <span>Help Center</span>
              </div>
            </Accordion.Trigger>
            <Accordion.Content>
              Find answers to common questions and access our knowledge base.
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item value="contact" variant="ghost">
            <Accordion.Trigger>
              <div className="flex items-center gap-3">
                <LucideIcon iconName="Phone" size="sm" className="text-radiant-green-500" />
                <span>Contact Support</span>
              </div>
            </Accordion.Trigger>
            <Accordion.Content>
              Get in touch with our support team via phone, email, or live chat.
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item value="feedback" variant="ghost">
            <Accordion.Trigger>
              <div className="flex items-center gap-3">
                <LucideIcon iconName="MessageSquare" size="sm" className="text-sunny-yellow-500" />
                <span>Feedback</span>
              </div>
            </Accordion.Trigger>
            <Accordion.Content>
              Share your thoughts and help us improve our services.
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  ),
};

export const NestedContent: Story = {
  render: () => (
    <div className="w-full max-w-2xl">
      <Accordion type="single" collapsible>
        <Accordion.Item value="investment-guide">
          <Accordion.Trigger>Complete Investment Guide</Accordion.Trigger>
          <Accordion.Content>
            <div className="space-y-4">
              <p className="text-mid-grey-700">
                This comprehensive guide covers all aspects of superannuation investing.
              </p>

              <Accordion type="single" collapsible variant="ghost">
                <Accordion.Item value="risk-profiles" variant="ghost">
                  <Accordion.Trigger size="sm">Understanding Risk Profiles</Accordion.Trigger>
                  <Accordion.Content size="sm">
                    Risk profiles help determine the right investment mix for your goals and timeline.
                  </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item value="asset-allocation" variant="ghost">
                  <Accordion.Trigger size="sm">Asset Allocation Strategies</Accordion.Trigger>
                  <Accordion.Content size="sm">
                    Learn how different asset classes work together to build a balanced portfolio.
                  </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item value="market-timing" variant="ghost">
                  <Accordion.Trigger size="sm">Market Timing and Dollar Cost Averaging</Accordion.Trigger>
                  <Accordion.Content size="sm">
                    Understanding when to invest and the benefits of regular contributions.
                  </Accordion.Content>
                </Accordion.Item>
              </Accordion>
            </div>
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item value="retirement-planning">
          <Accordion.Trigger>Retirement Planning Tools</Accordion.Trigger>
          <Accordion.Content>
            <div className="space-y-3">
              <p className="text-mid-grey-700">
                Access our suite of retirement planning calculators and tools.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-mid-blue-500 rounded-full"></span>
                  Retirement Calculator
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-mid-blue-500 rounded-full"></span>
                  Contribution Optimizer
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-mid-blue-500 rounded-full"></span>
                  Insurance Needs Assessment
                </li>
              </ul>
            </div>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </div>
  ),
};
