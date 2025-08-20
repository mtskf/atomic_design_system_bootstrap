import * as React from "react";
import { cn } from "../utils/cn";
import type { AllocationData } from "../types/investments";
import { clamp01, formatPercent } from "../utils/format";

export interface AssetAllocationProps extends React.HTMLAttributes<HTMLDivElement> {
  data: AllocationData;
}

export const AssetAllocation: React.FC<AssetAllocationProps> = ({ data, className, ...rest }) => {
  const total = data.current.reduce((s, x) => s + x.weight, 0);
  return (
    <section className={cn("rounded-lg border border-light-grey-200 bg-white p-4", className)} {...rest}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Donut using CSS conic-gradient for light footprint */}
        <div className="flex items-center justify-center">
          <div className="relative">
            <div
              className="w-48 h-48 rounded-full"
              style={{
                background: `conic-gradient(${data.current
                  .map((s, i) => `${PALETTE[i % PALETTE.length]} 0 ${(100 * (data.current
                    .slice(0, i + 1)
                    .reduce((acc, v) => acc + v.weight, 0) / total)).toFixed(2)}%`)
                  .join(", ")})`,
              }}
              aria-hidden="true"
            />
            <div className="absolute inset-6 bg-white rounded-full" aria-hidden="true" />
          </div>
        </div>
        <div>
          <h3 className="text/base font-brand-bold text-inky-blue-700 mb-3">Current allocation</h3>
          <ul className="space-y-2">
            {data.current.map((s, i) => (
              <li key={s.label} className="flex items-center justify-between">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="inline-block w-3 h-3 rounded-sm" style={{ backgroundColor: PALETTE[i % PALETTE.length] }} aria-hidden="true" />
                  <span className="text-sm text-inky-blue-700 truncate">{s.label}</span>
                </div>
                <span className="text-sm text-inky-blue-700">{formatPercent(clamp01(s.weight))}</span>
              </li>
            ))}
          </ul>

          <h3 className="text-base font-brand-bold text-inky-blue-700 mt-5 mb-2">Ranges</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="text-xs text-mid-grey-600">
                <tr>
                  <th className="py-2 pr-3">Asset class</th>
                  <th className="py-2 px-3">Min</th>
                  <th className="py-2 px-3">Strategic</th>
                  <th className="py-2 px-3">Max</th>
                  <th className="py-2 pl-3">Current</th>
                </tr>
              </thead>
              <tbody>
                {data.ranges.map((r) => (
                  <tr key={r.label} className="border-t border-light-grey-200">
                    <th scope="row" className="py-2 pr-3 font-medium text-inky-blue-700">{r.label}</th>
                    <td className="py-2 px-3">{formatPercent(clamp01(r.min))}</td>
                    <td className="py-2 px-3">{formatPercent(clamp01(r.strategic))}</td>
                    <td className="py-2 px-3">{formatPercent(clamp01(r.max))}</td>
                    <td className="py-2 pl-3">{r.current !== undefined ? formatPercent(clamp01(r.current)) : "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

const PALETTE = [
  "#0ea5e9",
  "#22c55e",
  "#f59e0b",
  "#ef4444",
  "#8b5cf6",
  "#14b8a6",
  "#ef4444",
  "#84cc16",
];


