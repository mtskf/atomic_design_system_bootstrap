import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/cn";
import { Icon } from "../primitives/Icon";

const breadcrumbsStyles = cva(
  "flex items-center space-x-1 text-sm",
  {
    variants: {
      size: {
        sm: "text-xs",
        md: "text-sm",
        lg: "text-base",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

const breadcrumbItemStyles = cva(
  "inline-flex items-center transition-colors",
  {
    variants: {
      variant: {
        default: "text-mid-grey-600 hover:text-inky-blue-500",
        current: "text-inky-blue-500 font-medium",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BreadcrumbItem {
  label: string;
  href?: string;
  disabled?: boolean;
}

export interface BreadcrumbsProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof breadcrumbsStyles> {
  /**
   * Breadcrumb items
   */
  items: BreadcrumbItem[];
  /**
   * Custom separator element
   */
  separator?: React.ReactNode;
  /**
   * Maximum number of items to show before collapsing
   */
  maxItems?: number;
  /**
   * Additional className for styling
   */
  className?: string;
}

const ChevronRightIcon = () => (
  <Icon size="xs" decorative>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </Icon>
);

const MoreIcon = () => (
  <Icon size="xs" decorative>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01" />
  </Icon>
);

/**
 * Breadcrumbs component for navigation hierarchy
 *
 * @example
 * ```tsx
 * <Breadcrumbs
 *   items={[
 *     { label: "Home", href: "/" },
 *     { label: "Account", href: "/account" },
 *     { label: "Settings" }
 *   ]}
 * />
 * ```
 */
export const Breadcrumbs = React.forwardRef<HTMLElement, BreadcrumbsProps>(
  ({ className, size, items, separator, maxItems, ...rest }, ref) => {
    const defaultSeparator = <ChevronRightIcon />;
    const separatorElement = separator ?? defaultSeparator;

    // Handle collapsed breadcrumbs when maxItems is specified
    const getDisplayItems = () => {
      if (!maxItems || items.length <= maxItems) {
        return items;
      }

      // Always show first and last items, collapse middle items
      if (maxItems <= 2) {
        return [items[0], items[items.length - 1]];
      }

      const firstItems = items.slice(0, 1);
      const lastItems = items.slice(-(maxItems - 2));

      return [
        ...firstItems,
        { label: "...", disabled: true }, // Collapsed indicator
        ...lastItems,
      ];
    };

    const displayItems = getDisplayItems();
    const isCollapsed = maxItems && items.length > maxItems;

    return (
      <nav
        ref={ref}
        className={cn(breadcrumbsStyles({ size }), className)}
        aria-label="Breadcrumb"
        {...rest}
      >
        <ol className="flex items-center space-x-1">
          {displayItems.map((item, index) => {
            const isLast = index === displayItems.length - 1;
            const isCollapsedItem = item.label === "...";

            return (
              <li key={`${item.label}-${index}`} className="flex items-center">
                {isCollapsedItem ? (
                  <>
                    <button
                      type="button"
                      className="inline-flex items-center px-2 py-1 rounded text-mid-grey-600 hover:text-inky-blue-500 hover:bg-light-grey-100"
                      aria-label="Show hidden breadcrumbs"
                    >
                      <MoreIcon />
                    </button>
                    {!isLast && (
                      <span className="mx-2 text-mid-grey-400" aria-hidden="true">
                        {separatorElement}
                      </span>
                    )}
                  </>
                ) : (
                  <>
                    {item.href && !isLast ? (
                      <a
                        href={item.href}
                        className={cn(
                          breadcrumbItemStyles({ variant: "default" }),
                          "hover:underline focus:outline-none focus:ring-2 focus:ring-mid-blue-500 focus:ring-offset-1 rounded-sm px-1 py-0.5"
                        )}
                      >
                        {item.label}
                      </a>
                    ) : (
                      <span
                        className={cn(
                          breadcrumbItemStyles({
                            variant: isLast ? "current" : "default"
                          }),
                          item.disabled && "opacity-50 cursor-not-allowed"
                        )}
                        aria-current={isLast ? "page" : undefined}
                      >
                        {item.label}
                      </span>
                    )}

                    {!isLast && (
                      <span className="mx-2 text-mid-grey-400" aria-hidden="true">
                        {separatorElement}
                      </span>
                    )}
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    );
  }
);

Breadcrumbs.displayName = "Breadcrumbs";

// Breadcrumb with dropdown for collapsed items
export interface DropdownBreadcrumbsProps extends BreadcrumbsProps {
  /**
   * Callback when collapsed items are expanded
   */
  onExpandCollapsed?: (items: BreadcrumbItem[]) => void;
}

export const DropdownBreadcrumbs: React.FC<DropdownBreadcrumbsProps> = ({
  items,
  maxItems = 3,
  onExpandCollapsed,
  ...rest
}) => {
  const [showCollapsed, setShowCollapsed] = React.useState(false);

  if (!maxItems || items.length <= maxItems) {
    return <Breadcrumbs items={items} maxItems={maxItems} {...rest} />;
  }

  const firstItem = items[0];
  const lastItems = items.slice(-(maxItems - 2));
  const collapsedItems = items.slice(1, -(maxItems - 2));

  const displayItems = showCollapsed
    ? items
    : [firstItem, { label: "...", disabled: true }, ...lastItems];

  const handleExpandClick = () => {
    setShowCollapsed(!showCollapsed);
    if (onExpandCollapsed && !showCollapsed) {
      onExpandCollapsed(collapsedItems);
    }
  };

  return (
    <div className="relative">
      <Breadcrumbs
        items={displayItems.map((item, index) => {
          if (item.label === "...") {
            return {
              ...item,
              onClick: handleExpandClick,
            };
          }
          return item;
        })}
        {...rest}
      />

      {showCollapsed && collapsedItems.length > 0 && (
        <div className="absolute top-full left-0 mt-1 bg-white border border-light-grey-200 rounded-md shadow-lg z-10 min-w-48">
          <div className="py-1">
            {collapsedItems.map((item, index) => (
              <a
                key={`collapsed-${index}`}
                href={item.href}
                className="block px-3 py-2 text-sm text-mid-grey-700 hover:bg-light-grey-100 hover:text-inky-blue-500"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
