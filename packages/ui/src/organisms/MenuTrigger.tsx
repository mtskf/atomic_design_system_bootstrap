import * as React from "react";
import { cn } from "../utils/cn";

export interface MenuTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Whether the menu is expanded
   */
  isExpanded: boolean;
  /**
   * Whether this trigger is active
   */
  isActive?: boolean;
  /**
   * Additional className
   */
  className?: string;
  /**
   * ID of the controlled menu panel
   */
  controls: string;
}

/**
 * MenuTrigger component with full keyboard and ARIA support
 *
 * @example
 * ```tsx
 * <MenuTrigger
 *   isExpanded={isOpen}
 *   controls="mega-panel-members"
 *   onClick={handleToggle}
 * >
 *   For Members
 * </MenuTrigger>
 * ```
 */
export const MenuTrigger = React.forwardRef<HTMLButtonElement, MenuTriggerProps>(
  ({
    isExpanded,
    isActive = false,
    className,
    controls,
    children,
    onKeyDown,
    onMouseEnter,
    onMouseLeave,
    ...rest
  }, ref) => {
    const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
      // Handle keyboard navigation
      switch (event.key) {
        case 'ArrowDown':
        case 'Enter':
        case ' ':
          event.preventDefault();
          // Let parent handle opening
          break;
        case 'Escape':
          event.preventDefault();
          // Let parent handle closing
          break;
        case 'ArrowRight':
          // Move to next trigger
          const nextButton = event.currentTarget.parentElement?.nextElementSibling?.querySelector('button');
          if (nextButton) {
            (nextButton as HTMLButtonElement).focus();
          }
          break;
        case 'ArrowLeft':
          // Move to previous trigger
          const prevButton = event.currentTarget.parentElement?.previousElementSibling?.querySelector('button');
          if (prevButton) {
            (prevButton as HTMLButtonElement).focus();
          }
          break;
      }

      onKeyDown?.(event);
    };

    return (
      <button
        ref={ref}
        type="button"
        aria-haspopup="true"
        aria-expanded={isExpanded ? "true" : "false"}
        aria-controls={controls}
        className={cn(
          "relative px-4 py-3 text-sm font-brand-medium text-inky-blue-500",
          "hover:text-mid-blue-500 hover:bg-light-grey-50",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-mid-blue-500 focus-visible:ring-offset-2",
          "transition-colors duration-150",
          // Active state styling
          isActive && "text-mid-blue-500 bg-fresh-mint-100",
          // Expanded state styling
          isExpanded && "text-mid-blue-500 bg-light-grey-50",
          className
        )}
        onKeyDown={handleKeyDown}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        data-nav="trigger"
        data-group={children}
        {...rest}
      >
        {children}

        {/* Indicator for expanded state */}
        <span
          className={cn(
            "absolute bottom-0 left-0 w-full h-0.5 bg-mid-blue-500 transform origin-left transition-transform duration-200",
            isExpanded ? "scale-x-100" : "scale-x-0"
          )}
          aria-hidden="true"
        />
      </button>
    );
  }
);

MenuTrigger.displayName = "MenuTrigger";
