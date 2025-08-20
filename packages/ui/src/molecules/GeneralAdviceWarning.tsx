import * as React from "react";
import { cn } from "../utils/cn";
import { LucideIcon } from "../primitives/Icon";

export interface GeneralAdviceWarningProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const GeneralAdviceWarning: React.FC<GeneralAdviceWarningProps> = ({ children, className, ...rest }) => {
  return (
    <aside
      role="note"
      className={cn(
        "rounded-md border border-amber-300 bg-amber-50 p-3 text-amber-900",
        "flex items-center gap-2",
        className
      )}
      {...rest}
    >
      <LucideIcon iconName="AlertTriangle" className="flex-shrink-0" size="sm" decorative />
      <div className="text-xs leading-relaxed">
        {children ?? (
          <>
            This information is of a general nature only and does not take into account your objectives, financial situation or needs. Consider the appropriateness of the information and read the relevant PDS before making a decision.
          </>
        )}
      </div>
    </aside>
  );
};


