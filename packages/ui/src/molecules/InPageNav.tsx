import * as React from "react";
import { cn } from "../utils/cn";

export interface InPageNavItem {
  id: string;
  label: string;
}

export interface InPageNavProps extends React.HTMLAttributes<HTMLElement> {
  items: InPageNavItem[];
  currentId?: string;
  sticky?: boolean;
}

/**
 * InPageNav — On-page anchor navigation with current section highlighting
 */
export const InPageNav: React.FC<InPageNavProps> = ({ className, items, currentId, sticky = true, ...rest }) => {
  return (
    <nav
      aria-label="On this page"
      className={cn(
        "w-full border-b border-light-grey-200 bg-white",
        sticky && "sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/80",
        className
      )}
      {...rest}
    >
      <div className="mx-auto max-w-7xl px-4">
        <ul className="-mb-px flex flex-wrap gap-4 py-3 text-sm">
          {items.map((item) => {
            const isActive = currentId === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={cn(
                    "inline-flex items-center border-b-2 px-1.5 py-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mid-blue-500",
                    isActive ? "border-mid-blue-500 text-inky-blue-500" : "border-transparent text-mid-grey-600 hover:text-inky-blue-500 hover:border-light-grey-300"
                  )}
                  aria-current={isActive ? "true" : undefined}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default InPageNav;


