import * as React from "react";
import { cn } from "../utils/cn";
import { LucideIcon } from "../primitives/Icon";

export interface SwitchCtaBannerProps extends React.HTMLAttributes<HTMLDivElement> {
  onClick?: () => void;
}

export const SwitchCtaBanner: React.FC<SwitchCtaBannerProps> = ({ onClick, className, ...rest }) => {
  return (
    <div className={cn("rounded-lg border bg-gradient-to-r from-blue-600 to-teal-500 p-4 text-white", className)} {...rest}>
      <div className="flex items-center justify-between gap-4">
        <div className="text-sm md:text-base font-medium">Review your investment mix regularly to ensure it still suits your goals.</div>
        <button
          type="button"
          onClick={onClick}
          className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-2 text-sm font-semibold hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white"
        >
          <LucideIcon iconName="ArrowRight" size="sm" />
          Switch now
        </button>
      </div>
    </div>
  );
};


