import type { Meta, StoryObj } from "@storybook/react";
import { Link, NextLink } from "./Link";
import { Icon } from "./Icon";

const meta: Meta<typeof Link> = {
  title: "Primitives/Link",
  component: Link,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "subtle", "accent", "button"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    external: {
      control: { type: "boolean" },
    },
    showExternalIcon: {
      control: { type: "boolean" },
    },
    iconPosition: {
      control: { type: "select" },
      options: ["left", "right"],
    },
  },
  args: {
    variant: "default",
    size: "md",
    external: false,
    showExternalIcon: true,
    iconPosition: "right",
    children: "Link text",
    href: "#",
  },
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Default: Story = {
  args: {
    href: "/about",
    children: "About CareSuper",
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Link variant="default" href="#">Default link</Link>
      <Link variant="subtle" href="#">Subtle link</Link>
      <Link variant="accent" href="#">Accent link</Link>
      <Link variant="button" href="#">Button-style link</Link>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Link size="sm" href="#">Small link</Link>
      <Link size="md" href="#">Medium link</Link>
      <Link size="lg" href="#">Large link</Link>
    </div>
  ),
};

export const ExternalLinks: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Link href="https://caresuper.com.au" external>
        CareSuper Website
      </Link>
      <Link href="https://caresuper.com.au" external showExternalIcon={false}>
        External link without icon
      </Link>
      <Link href="https://google.com" variant="accent" external>
        Google Search
      </Link>
    </div>
  ),
};

export const DownloadLinks: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Link href="/annual-statement.pdf" download>
        Download Annual Statement
      </Link>
      <Link href="/investment-guide.pdf" download="CareSuper Investment Guide.pdf">
        Investment Guide (custom filename)
      </Link>
      <Link href="/form.pdf" download variant="button">
        Download Form
      </Link>
    </div>
  ),
};

export const WithCustomIcons: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Link
        href="/dashboard"
        icon={
          <Icon size="xs" decorative>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </Icon>
        }
        iconPosition="left"
      >
        Dashboard
      </Link>

      <Link
        href="/settings"
        icon={
          <Icon size="xs" decorative>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </Icon>
        }
        iconPosition="left"
        variant="subtle"
      >
        Account Settings
      </Link>
    </div>
  ),
};

export const NavigationExample: Story = {
  render: () => (
    <div className="max-w-md space-y-6">
      <nav>
        <h3 className="text-heading-sm font-brand-bold text-inky-blue-500 mb-4">
          Account Navigation
        </h3>
        <ul className="space-y-3">
          <li>
            <Link href="/overview" variant="subtle">Overview</Link>
          </li>
          <li>
            <Link href="/investments" variant="subtle">My Investments</Link>
          </li>
          <li>
            <Link href="/contributions" variant="subtle">Contributions</Link>
          </li>
          <li>
            <Link href="/statements" variant="subtle">Statements</Link>
          </li>
        </ul>
      </nav>

      <div className="border-t border-light-grey-200 pt-4">
        <h4 className="text-body-sm font-brand-medium text-inky-blue-500 mb-3">
          Helpful Resources
        </h4>
        <ul className="space-y-2">
          <li>
            <Link href="/investment-guide.pdf" download size="sm">
              Investment Guide
            </Link>
          </li>
          <li>
            <Link href="https://caresuper.com.au/help" external size="sm">
              Help Center
            </Link>
          </li>
          <li>
            <Link href="tel:1300123456" size="sm" variant="accent">
              Call Us: 1300 123 456
            </Link>
          </li>
        </ul>
      </div>
    </div>
  ),
};

export const ButtonStyleLinks: Story = {
  render: () => (
    <div className="flex gap-4 flex-wrap">
      <Link href="/get-started" variant="button">
        Get Started
      </Link>
      <Link href="/contact" variant="button" size="sm">
        Contact Us
      </Link>
      <Link href="/apply" variant="button" size="lg">
        Apply Now
      </Link>
    </div>
  ),
};

// Mock Next.js Link for demonstration
const MockNextLink = ({ href, children, ...props }: any) => (
  <a href={href} {...props}>
    {children}
  </a>
);

export const NextJSIntegration: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <p className="text-sm text-mid-grey-600 mb-4">
        Examples showing Next.js Link integration
      </p>

      <NextLink
        NextLink={MockNextLink}
        href="/internal-page"
        linkProps={{ prefetch: false }}
        variant="subtle"
      >
        Internal Page (Next.js Link)
      </NextLink>

      <NextLink
        NextLink={MockNextLink}
        href="/dashboard"
        variant="button"
        size="sm"
      >
        Go to Dashboard
      </NextLink>

      <p className="text-xs text-mid-grey-500 mt-4">
        Note: In a real Next.js app, import Next Link: import NextLinkComponent from 'next/link'
      </p>
    </div>
  ),
};

export const AccessibilityDemo: Story = {
  render: () => (
    <div className="space-y-4">
      <h3 className="text-heading-sm font-brand-bold text-inky-blue-500">
        Accessibility Features
      </h3>

      <div className="space-y-3">
        <Link href="https://example.com" external aria-label="Visit our partner website (opens in new tab)">
          Partner Website
        </Link>

        <Link href="/help.pdf" download aria-label="Download help documentation PDF">
          Help Documentation
        </Link>

        <Link href="#main-content" variant="subtle" className="sr-only focus:not-sr-only">
          Skip to main content
        </Link>

        <p className="text-sm text-mid-grey-600">
          All links include proper ARIA labels, focus indicators, and screen reader support.
        </p>
      </div>
    </div>
  ),
};
