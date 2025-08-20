import * as React from "react";
import { cn } from "../utils/cn";
import { formatCurrencyAUD, formatDate, formatPercent } from "../utils/format";
import type { UnitPrice } from "../types/investments";
import { LucideIcon } from "../primitives/Icon";

export interface UnitPriceCardProps extends React.HTMLAttributes<HTMLDivElement> {
  data: UnitPrice;
}

export const UnitPriceCard: React.FC<UnitPriceCardProps> = ({ data, className, ...rest }) => {
  const isUp = data.change >= 0;
  return (
    <div
      className={cn(
        "rounded-lg border border-light-grey-200 p-4 bg-white",
        className
      )}
      {...rest}
    >
      <div className="flex items-center justify-between">
        <div className="text-sm text-mid-grey-600">Latest unit price</div>
        <div className={cn("inline-flex items-center gap-1 text-sm", isUp ? "text-green-600" : "text-red-600")}
             aria-live="polite">
          <LucideIcon iconName={isUp ? "TrendingUp" : "TrendingDown"} size="sm" />
          <span>{isUp ? "+" : ""}{formatCurrencyAUD(data.change)} ({formatPercent(data.changePct)})</span>
        </div>
      </div>
      <div className="mt-2 flex items-baseline gap-3">
        <div className="text-2xl font-brand-bold text-inky-blue-700" aria-label={`Price ${formatCurrencyAUD(data.price)}`}>
          {formatCurrencyAUD(data.price)}
        </div>
        <div className="text-xs text-mid-grey-500">as at {formatDate(data.asOfDate)}</div>
      </div>
      {data.note && (
        <p className="mt-2 text-xs text-mid-grey-600">{data.note}</p>
      )}
    </div>
  );
};


