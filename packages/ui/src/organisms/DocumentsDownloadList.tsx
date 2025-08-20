import * as React from "react";
import { cn } from "../utils/cn";
import type { DocumentLink, InvestmentDocumentType } from "../types/investments";
import { formatDate } from "../utils/format";
import { LucideIcon } from "../primitives/Icon";

export interface DocumentsDownloadListProps extends React.HTMLAttributes<HTMLDivElement> {
  documents: DocumentLink[];
}

const iconForType = (type: InvestmentDocumentType) => {
  switch (type) {
    case "PDS":
      return "FileText" as const;
    case "TMD":
      return "FileCheck2" as const;
    case "Form":
      return "FileSignature" as const;
    default:
      return "File" as const;
  }
};

export const DocumentsDownloadList: React.FC<DocumentsDownloadListProps> = ({ documents, className, ...rest }) => {
  return (
    <section className={cn("rounded-lg border border-light-grey-200 bg-white p-4", className)} {...rest}>
      <h3 className="text-base font-brand-bold text-inky-blue-700 mb-3">Documents</h3>
      <ul className="divide-y divide-light-grey-200">
        {documents.map((doc, idx) => (
          <li key={idx} className="py-3 flex items-start justify-between gap-4">
            <div className="flex items-start gap-3 min-w-0">
              <LucideIcon iconName={iconForType(doc.type)} size="sm" className="text-mid-grey-600 flex-shrink-0" />
              <div className="min-w-0">
                <div className="text-sm font-medium text-inky-blue-700 truncate">{doc.label}</div>
                <div className="text-xs text-mid-grey-600">
                  <span className="mr-2">{doc.type}</span>
                  {doc.size && <span className="mr-2">{doc.size}</span>}
                  {doc.updatedAt && <span>Updated {formatDate(doc.updatedAt)}</span>}
                </div>
              </div>
            </div>
            <a
              href={doc.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border px-3 py-1.5 text-sm hover:bg-light-grey-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
            >
              <LucideIcon iconName="Download" size="sm" />
              Download
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};


