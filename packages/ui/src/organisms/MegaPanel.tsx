import * as React from "react";
import { cn } from "../utils/cn";
import { NavSection } from "../types/navigation";

export interface MegaPanelProps {
  /**
   * Section data to render
   */
  section: NavSection;
  /**
   * Whether the panel is open
   */
  isOpen: boolean;
  /**
   * ID for ARIA labelling
   */
  id: string;
  /**
   * ID of the trigger element
   */
  labelledBy: string;
  /**
   * Additional className
   */
  className?: string;
  /**
   * Callback when a link is clicked
   */
  onLinkClick?: (href: string, label: string) => void;
}

/**
 * MegaPanel component for desktop navigation mega menu
 *
 * @example
 * ```tsx
 * <MegaPanel
 *   section={membersSection}
 *   isOpen={isOpen}
 *   id="mega-panel-members"
 *   labelledBy="trigger-members"
 * />
 * ```
 */
export const MegaPanel = React.forwardRef<HTMLDivElement, MegaPanelProps>(
  ({ section, isOpen, id, labelledBy, className, onLinkClick, ...rest }, ref) => {
    if (!isOpen) return null;

    return (
      <div
        ref={ref}
        id={id}
        role="region"
        aria-labelledby={labelledBy}
        className={cn(
          "absolute top-full left-0 w-full bg-white border-t border-light-grey-200 shadow-lg z-50",
          "animate-in fade-in-0 slide-in-from-top-2 duration-200",
          "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:slide-out-to-top-2",
          className
        )}
        {...rest}
      >
        <div className="w-full mx-auto px-6 py-8">
          <div className="max-w-7xl mx-auto">
            <div className={cn(
              "grid gap-8",
              section.columns.length === 1 && "grid-cols-1 max-w-md",
              section.columns.length === 2 && "grid-cols-2 max-w-4xl",
              section.columns.length === 3 && "grid-cols-3 max-w-6xl",
              section.columns.length >= 4 && "grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl"
            )}>
            {section.columns.map((column, columnIndex) => (
              <div key={columnIndex} className="space-y-4 min-w-0">
                {column.title && (
                  <h3 className="text-sm font-brand-bold text-inky-blue-500 uppercase tracking-wide">
                    {column.title}
                  </h3>
                )}
                <ul className="space-y-2" role="none">
                  {column.items.map((item, itemIndex) => (
                    <li key={itemIndex} role="none">
                      <a
                        href={item.href}
                        className={cn(
                          "block text-sm text-mid-grey-700 hover:text-inky-blue-500 hover:underline",
                          "focus:outline-none focus:text-inky-blue-500 focus:underline",
                          "transition-colors duration-150 leading-relaxed break-words"
                        )}
                        onClick={(e) => {
                          onLinkClick?.(item.href, item.label);
                        }}
                        data-nav="mega-menu"
                        data-group={section.label}
                        data-item={item.label}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
);

MegaPanel.displayName = "MegaPanel";
