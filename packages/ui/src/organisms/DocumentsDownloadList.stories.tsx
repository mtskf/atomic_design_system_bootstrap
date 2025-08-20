import type { Meta, StoryObj } from "@storybook/react";
import { DocumentsDownloadList } from "./DocumentsDownloadList";
import type { DocumentLink } from "../types/investments";

const sampleDocuments: DocumentLink[] = [
  { label: "Product Disclosure Statement (PDS)", href: "#", type: "PDS", size: "1.8 MB", updatedAt: "2025-01-15" },
  { label: "Target Market Determination", href: "#", type: "TMD", size: "0.9 MB", updatedAt: "2025-01-16" },
  { label: "Change of Details Form", href: "#", type: "Form", size: "0.4 MB", updatedAt: "2025-02-01" },
  { label: "Insurance Guide", href: "#", type: "Other", size: "1.1 MB", updatedAt: "2025-01-20" },
];

const meta: Meta<typeof DocumentsDownloadList> = {
  title: "Organisms/DocumentsDownloadList",
  component: DocumentsDownloadList,
  parameters: { layout: "padded" },
  args: { documents: sampleDocuments },
};

export default meta;
type Story = StoryObj<typeof DocumentsDownloadList>;

export const Default: Story = {};


