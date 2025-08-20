import * as React from "react";
import { cn } from "../utils/cn";
import { LucideIcon } from "../primitives/Icon";
import { Modal } from "./Modal";

export type RiskBand = 1 | 2 | 3 | 4 | 5 | 6 | 7;

export interface InvestmentPerformancePoint {
  periodLabel: string; // e.g. "1 yr", "3 yrs", "5 yrs"
  returnPercent: number; // e.g. 7.2
}

export interface AssetAllocationSlice {
  label: string; // e.g. "Australian Shares"
  percent: number; // 0 - 100
}

export interface InvestmentFees {
  administration?: string; // e.g. "$1.50/wk + 0.10% p.a."
  investment?: string; // e.g. "0.59% p.a. (ICR)"
  buySellSpread?: string; // e.g. "+0.05% / -0.05%"
}

export interface InvestmentOption {
  id: string;
  name: string;
  objective?: string;
  summary?: string;
  riskBand: RiskBand;
  riskLabel:
    | "Very Low"
    | "Low"
    | "Low to Medium"
    | "Medium"
    | "Medium to High"
    | "High"
    | "Very High";
  suggestedTimeframe?: string; // e.g. "5+ years"
  performance?: InvestmentPerformancePoint[]; // ordered small set like 1yr/3yr/5yr
  fees?: InvestmentFees;
  assetAllocation?: AssetAllocationSlice[];
  disclaimer?: string;
  /**
   * Icon name for the investment option (Lucide icon name)
   */
  icon?: string;
}

export interface InvestmentOptionCardProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onSelect"> {
  option: InvestmentOption;
  onSelect?: (option: InvestmentOption) => void;
  /**
   * When true, hides performance row to keep the card compact
   */
  compact?: boolean;
}

/**
 * InvestmentOptionCard — Card preview for an investment option with a details modal.
 *
 * @example
 * ```tsx
 * const option = {
 *   id: "balanced",
 *   name: "Balanced Strategy",
 *   icon: "TrendingUp", // Lucide icon name
 *   summary: "A balanced approach to growth",
 *   riskBand: 4,
 *   riskLabel: "Medium",
 *   // ... other properties
 * };
 *
 * <InvestmentOptionCard option={option} />
 * ```
 */
export const InvestmentOptionCard = React.forwardRef<HTMLDivElement, InvestmentOptionCardProps>(
  ({ option, className, compact = false, onSelect, ...rest }, ref) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const openDetails = () => setIsOpen(true);
    const closeDetails = () => setIsOpen(false);

    const performanceToShow = (option.performance || []).slice(0, 3);

    return (
      <div
        ref={ref}
        className={cn(
          "group relative rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow focus-within:ring-2 focus-within:ring-blue-500 w-full max-w-md",
          className
        )}
        {...rest}
      >
        <article aria-labelledby={`${option.id}-title`}>
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-3 min-w-0">
              {option.icon && (
                <div className="flex-shrink-0 mt-0.5">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-mid-blue-50 to-mid-blue-100 border border-mid-blue-200">
                    <LucideIcon
                      iconName={option.icon as any}
                      size="sm"
                      className="text-mid-blue-600"
                    />
                  </div>
                </div>
              )}
              <div className="min-w-0">
                <h3 id={`${option.id}-title`} className="text-base font-semibold text-slate-900">
                  {option.name}
                </h3>
                {option.summary && (
                  <p className="mt-1 text-sm text-slate-600 line-clamp-2">{option.summary}</p>
                )}
              </div>
            </div>
            <RiskPill riskBand={option.riskBand} riskLabel={option.riskLabel} />
          </div>

          {option.objective && (
            <p className="mt-3 text-sm text-slate-700">{option.objective}</p>
          )}

          {!compact && performanceToShow.length > 0 && (
            <div className="mt-4">
              <dl className="grid grid-cols-3 gap-3" aria-label="Recent returns">
                {performanceToShow.map((p) => (
                  <div key={p.periodLabel} className="rounded-lg bg-slate-50 p-3 text-center">
                    <dt className="text-xs text-slate-500">{p.periodLabel}</dt>
                    <dd className={cn("mt-1 text-sm font-semibold", p.returnPercent >= 0 ? "text-emerald-600" : "text-red-600")}>{p.returnPercent.toFixed(2)}%</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}

          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-3 text-xs text-slate-600">
              {option.suggestedTimeframe && (
                <span className="inline-flex items-center gap-1">
                  <LucideIcon iconName="Clock" size="xs" className="text-slate-400" />
                  {option.suggestedTimeframe}
                </span>
              )}
              {option.fees?.investment && (
                <span className="inline-flex items-center gap-1">
                  <LucideIcon iconName="Percent" size="xs" className="text-slate-400" />
                  {option.fees.investment}
                </span>
              )}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-blue-700 hover:text-blue-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                onClick={openDetails}
                aria-haspopup="dialog"
                aria-controls={`${option.id}-details`}
              >
                View details
                <LucideIcon iconName="ChevronRight" size="xs" />
              </button>
              {onSelect && (
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-md bg-mid-blue-500 px-3 py-2 text-sm font-brand-medium text-white hover:bg-mid-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-mid-blue-500"
                  onClick={() => onSelect(option)}
                >
                  Select
                </button>
              )}
            </div>
          </div>
        </article>

        {/* Details Modal */}
        <Modal open={isOpen} onOpenChange={(open: boolean) => (open ? openDetails() : closeDetails())}>
          <Modal.Content aria-labelledby={`${option.id}-details-title`} id={`${option.id}-details`}>
            <Modal.Header>
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  {option.icon && (
                    <div className="flex-shrink-0">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-mid-blue-50 to-mid-blue-100 border border-mid-blue-200">
                        <LucideIcon
                          iconName={option.icon as any}
                          size="md"
                          className="text-mid-blue-600"
                        />
                      </div>
                    </div>
                  )}
                  <div>
                    <Modal.Title id={`${option.id}-details-title`}>{option.name}</Modal.Title>
                    <div className="mt-1 flex items-center gap-3 text-xs text-slate-600">
                      <RiskPill riskBand={option.riskBand} riskLabel={option.riskLabel} small />
                      {option.suggestedTimeframe && (
                        <span className="inline-flex items-center gap-1">
                          <LucideIcon iconName="Clock" size="xs" />
                          {option.suggestedTimeframe}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Modal.Header>

            <Modal.Body>
              <div className="space-y-8">
                {option.objective && (
                  <section>
                    <h4 className="text-sm font-semibold text-slate-900 mb-2">Objective</h4>
                    <p className="text-sm text-slate-700">{option.objective}</p>
                  </section>
                )}

                {option.performance && option.performance.length > 0 && (
                  <section>
                    <h4 className="text-sm font-semibold text-slate-900 mb-2">Performance</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {option.performance.map((p) => (
                        <div key={p.periodLabel} className="rounded-lg border border-slate-200 p-3 text-center">
                          <div className="text-xs text-slate-500">{p.periodLabel}</div>
                          <div className={cn("mt-1 text-sm font-semibold", p.returnPercent >= 0 ? "text-emerald-600" : "text-red-600")}>{p.returnPercent.toFixed(2)}%</div>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {option.assetAllocation && option.assetAllocation.length > 0 && (
                  <section>
                    <h4 className="text-sm font-semibold text-slate-900 mb-2">Asset allocation</h4>
                    <ul className="space-y-2" aria-label="Asset allocation breakdown">
                      {option.assetAllocation.map((slice) => (
                        <li key={slice.label} className="flex items-center justify-between text-sm">
                          <span className="text-slate-700">{slice.label}</span>
                          <span className="font-medium text-slate-900">{slice.percent}%</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                )}

                {option.fees && (
                  <section>
                    <h4 className="text-sm font-semibold text-slate-900 mb-2">Fees</h4>
                    <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                      {option.fees.administration && (
                        <div className="flex items-center justify-between rounded-md bg-slate-50 p-3">
                          <dt className="text-slate-600">Administration</dt>
                          <dd className="font-medium text-slate-900">{option.fees.administration}</dd>
                        </div>
                      )}
                      {option.fees.investment && (
                        <div className="flex items-center justify-between rounded-md bg-slate-50 p-3">
                          <dt className="text-slate-600">Investment</dt>
                          <dd className="font-medium text-slate-900">{option.fees.investment}</dd>
                        </div>
                      )}
                      {option.fees.buySellSpread && (
                        <div className="flex items-center justify-between rounded-md bg-slate-50 p-3">
                          <dt className="text-slate-600">Buy/Sell spread</dt>
                          <dd className="font-medium text-slate-900">{option.fees.buySellSpread}</dd>
                        </div>
                      )}
                    </dl>
                  </section>
                )}

                {option.disclaimer && (
                  <section>
                    <h4 className="text-sm font-semibold text-slate-900 mb-2">Important information</h4>
                    <p className="text-xs leading-6 text-slate-600">{option.disclaimer}</p>
                  </section>
                )}
              </div>
            </Modal.Body>

            <Modal.Footer>
              <div className="flex w-full items-center justify-end gap-3">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  onClick={closeDetails}
                >
                  Close
                </button>
                {onSelect && (
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 rounded-md bg-mid-blue-500 px-3 py-2 text-sm font-brand-medium text-white hover:bg-mid-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-mid-blue-500"
                    onClick={() => {
                      onSelect(option);
                      closeDetails();
                    }}
                  >
                    Select option
                  </button>
                )}
              </div>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      </div>
    );
  }
);

InvestmentOptionCard.displayName = "InvestmentOptionCard";

interface RiskPillProps {
  riskBand: RiskBand;
  riskLabel: InvestmentOption["riskLabel"];
  small?: boolean;
}

const RiskPill: React.FC<RiskPillProps> = ({ riskBand, riskLabel, small = false }) => {
  const segments = 7;
  const active = riskBand;
  return (
    <div className={cn("flex items-center gap-2", small && "scale-90")}
      aria-label={`Risk band ${riskBand} of 7 - ${riskLabel}`}
    >
      <div className="flex items-center gap-0.5" aria-hidden="true">
        {Array.from({ length: segments }).map((_, i) => (
          <span
            key={i}
            className={cn(
              "inline-block h-2 w-3 rounded-sm",
              i < active ? riskColorClass(riskBand) : "bg-slate-200"
            )}
          />
        ))}
      </div>
      <span className="text-xs font-medium text-slate-700 whitespace-nowrap">{riskLabel}</span>
    </div>
  );
};

const riskColorClass = (band: RiskBand): string => {
  switch (band) {
    case 1:
    case 2:
      return "bg-emerald-500";
    case 3:
    case 4:
      return "bg-yellow-500";
    case 5:
    case 6:
      return "bg-orange-500";
    case 7:
    default:
      return "bg-red-500";
  }
};
