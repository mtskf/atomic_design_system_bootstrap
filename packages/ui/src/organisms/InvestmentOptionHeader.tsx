import * as React from "react";
import { cn } from "../utils/cn";
import { LucideIcon } from "../primitives/Icon";
import { formatDate } from "../utils/format";
import type { InvestmentOptionMeta } from "../types/investments";

export interface InvestmentOptionHeaderProps extends React.HTMLAttributes<HTMLElement> {
  meta: InvestmentOptionMeta;
  onSwitchClick?: () => void;
  onViewAllClick?: () => void;
}

export const InvestmentOptionHeader = React.forwardRef<HTMLElement, InvestmentOptionHeaderProps>(
  ({ meta, className, onSwitchClick, onViewAllClick, ...rest }, ref) => {
    return (
      <section ref={ref} className={cn("w-full", className)} {...rest}>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2">
              <span className="inline-flex items-center rounded-full bg-light-grey-100 px-2.5 py-0.5 text-xs font-medium text-mid-grey-700">
                {meta.category}
              </span>
              {meta.horizonYears && (
                <span className="inline-flex items-center rounded-full bg-light-grey-100 px-2.5 py-0.5 text-xs font-medium text-mid-grey-700">
                  Horizon: {meta.horizonYears}+ yrs
                </span>
              )}
              <span className="inline-flex items-center rounded-full bg-light-grey-100 px-2.5 py-0.5 text-xs font-medium text-mid-grey-700">
                SRM {meta.srmLevel}/7
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-brand-bold text-inky-blue-600">{meta.name}</h1>
            {meta.objectiveText && (
              <p className="text-sm md:text-base text-mid-grey-700">{meta.objectiveText}</p>
            )}
            {meta.updatedAt && (
              <p className="text-xs text-mid-grey-500">Updated {formatDate(meta.updatedAt)}</p>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm hover:bg-light-grey-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
              onClick={onViewAllClick}
            >
              <LucideIcon iconName="ListOrdered" size="sm" />
              View all options
            </button>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-md bg-mid-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-mid-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
              onClick={onSwitchClick}
            >
              <LucideIcon iconName="SwitchCamera" size="sm" />
              Switch investments
            </button>
          </div>
        </div>
      </section>
    );
  }
);

InvestmentOptionHeader.displayName = "InvestmentOptionHeader";


