import * as React from "react";
import { cn } from "../utils/cn";
import { LucideIcon } from "../primitives/Icon";

export interface QuickLinkItem {
  label: string;
  href: string;
  icon?: string; // Lucide icon name
  description?: string;
  external?: boolean;
}

export interface QuickLinksGridProps extends React.HTMLAttributes<HTMLDivElement> {
  items: QuickLinkItem[];
  columns?: 2 | 3 | 4;
}

/**
 * QuickLinksGrid — Prominent grid of primary navigation cards
 */
export const QuickLinksGrid = React.forwardRef<HTMLDivElement, QuickLinksGridProps>(
  ({ className, items, columns = 3, ...rest }, ref) => {
    const gridCols = columns === 2 ? "sm:grid-cols-2" : columns === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-2 lg:grid-cols-3";
    return (
      <div ref={ref} className={cn("grid grid-cols-1 gap-4", gridCols, className)} {...rest}>
        {items.map((link, idx) => (
          <a
            key={`${link.href}-${idx}`}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
            className="group relative flex items-start gap-3 rounded-lg border border-light-grey-200 bg-white p-4 shadow-sm transition-colors hover:border-mid-blue-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-mid-blue-500"
          >
            {link.icon && (
              <div className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-md bg-mid-blue-50 text-mid-blue-600">
                <LucideIcon iconName={link.icon as any} size="sm" />
              </div>
            )}
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-brand-medium text-inky-blue-500 truncate">{link.label}</h3>
                <LucideIcon iconName="ChevronRight" size="xs" className="text-mid-grey-500 group-hover:text-mid-blue-600" />
              </div>
              {link.description && (
                <p className="mt-1 text-xs text-mid-grey-600 line-clamp-2">{link.description}</p>
              )}
            </div>
          </a>
        ))}
      </div>
    );
  }
);

QuickLinksGrid.displayName = "QuickLinksGrid";

export default QuickLinksGrid;


