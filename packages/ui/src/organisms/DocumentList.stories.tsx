import type { Meta, StoryObj } from "@storybook/react";
import { DocumentList, type DocumentItem } from "./DocumentList";

const docs: DocumentItem[] = [
  { id: "pds-2025", title: "Product Disclosure Statement (PDS)", type: "PDS", year: 2025, href: "/docs/pds-2025.pdf", size: "1.8 MB PDF", updatedAt: "2025-01-15", tags: ["Core"], description: "Primary disclosure document outlining key fund information." },
  { id: "tmd-balanced-2025", title: "Target Market Determination – Balanced", type: "TMD", year: 2025, href: "/docs/tmd-balanced-2025.pdf", size: "0.9 MB PDF", updatedAt: "2025-01-16", tags: ["Balanced", "Investment"] },
  { id: "fsg-2025", title: "Financial Services Guide (FSG)", type: "FSG", year: 2025, href: "/docs/fsg-2025.pdf", size: "0.7 MB PDF", updatedAt: "2025-01-10", tags: ["Advice"] },
  { id: "annual-report-2024", title: "Annual Report 2024", type: "Report", year: 2024, href: "/docs/annual-report-2024.pdf", size: "3.2 MB PDF", updatedAt: "2024-12-01", tags: ["Fund"], description: "Comprehensive fund performance and governance report." },
  { id: "member-statement-2024", title: "Member Statement 2024", type: "Statement", year: 2024, href: "/docs/member-statement-2024.pdf", size: "1.2 MB PDF", updatedAt: "2024-07-15", tags: ["Tax"], description: "Yearly member statement with contributions and balances." },
  { id: "rollover-form", title: "Rollover Form", type: "Form", year: 2025, href: "/docs/rollover-form.pdf", size: "0.4 MB PDF", updatedAt: "2025-02-01", tags: ["Forms", "Transfer"], description: "Form to roll over your super from another fund." },
  { id: "insurance-guide", title: "Insurance Guide", type: "Other", year: 2025, href: "/docs/insurance-guide.pdf", size: "1.1 MB PDF", updatedAt: "2025-01-20", tags: ["Insurance"], description: "Details on insurance options available to members." },
];

const meta: Meta<typeof DocumentList> = {
  title: "Organisms/DocumentList",
  component: DocumentList,
  parameters: {
    layout: "padded",
  },
  args: {
    items: docs,
  },
};

export default meta;
type Story = StoryObj<typeof DocumentList>;

export const Default: Story = {};

export const WithInitialFilters: Story = {
  args: {
    initialFilters: {
      types: ["PDS", "TMD"],
      year: 2025,
      sort: "recent",
    },
  },
};

export const ManyItems: Story = {
  args: {
    items: Array.from({ length: 24 }, (_, i) => {
      const base = docs[i % docs.length];
      return {
        ...base,
        id: `${base.id}-${i}`,
        title: `${base.title} (${i + 1})`,
        year: 2020 + (i % 6),
      } as DocumentItem;
    }),
  },
};
