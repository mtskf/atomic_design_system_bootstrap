import * as React from "react";
import { cn } from "../utils/cn";
import { NavigationContext, NavSection, CTAUrls } from "../types/navigation";
import { Button } from "../primitives/Button";
import { Accordion } from "../molecules/Accordion";
import { Icon } from "../primitives/Icon";
import { LucideIcon } from "../primitives/Icon";

export interface MobileNavProps {
  /**
   * Whether the mobile nav is open
   */
  isOpen: boolean;
  /**
   * Function to close the mobile nav
   */
  onClose: () => void;
  /**
   * Current navigation context
   */
  context: NavigationContext;
  /**
   * Function to switch context
   */
  onContextChange: (context: NavigationContext) => void;
  /**
   * Navigation sections for current context
   */
  sections: NavSection[];
  /**
   * Phone number
   */
  phone: string;
  /**
   * CTA URLs for current context
   */
  ctas: CTAUrls;
  /**
   * Callback when search is triggered
   */
  onSearchClick?: () => void;
  /**
   * Callback when a link is clicked
   */
  onLinkClick?: (href: string, label: string) => void;
}

const CloseIcon = () => (
  <LucideIcon iconName="X" size="md" decorative />
);

const SearchIcon = () => (
  <LucideIcon iconName="Search" size="md" decorative />
);

const PhoneIcon = () => (
  <LucideIcon iconName="Phone" size="md" decorative />
);

/**
 * MobileNav component for mobile navigation drawer
 */
export const MobileNav = React.forwardRef<HTMLDivElement, MobileNavProps>(
  ({
    isOpen,
    onClose,
    context,
    onContextChange,
    sections,
    phone,
    ctas,
    onSearchClick,
    onLinkClick
  }, ref) => {
    const [expandedSections, setExpandedSections] = React.useState<string[]>([]);

    // Lock body scroll when open
    React.useEffect(() => {
      if (isOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }

      return () => {
        document.body.style.overflow = '';
      };
    }, [isOpen]);

    // Close on escape key
    React.useEffect(() => {
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape' && isOpen) {
          onClose();
        }
      };

      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }, [isOpen, onClose]);

    const handleLinkClick = (href: string, label: string) => {
      onLinkClick?.(href, label);
      onClose(); // Close drawer after navigation
    };

    if (!isOpen) return null;

    return (
      <>
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />

        {/* Drawer */}
        <div
          ref={ref}
          className={cn(
            "fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white z-50 lg:hidden",
            "transform transition-transform duration-300 ease-in-out",
            "animate-in slide-in-from-right-full",
            "data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right-full"
          )}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col h-full">
                        {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-light-grey-200">
              <div className="flex items-center gap-3">
                {/* Context Switcher - compact design */}
                <div className="flex text-sm">
                  <button
                    onClick={() => onContextChange('members')}
                    className={cn(
                      "px-2 py-1 transition-colors border-r border-light-grey-300",
                      context === 'members'
                        ? "text-inky-blue-500 font-medium"
                        : "text-mid-grey-600 hover:text-inky-blue-500"
                    )}
                  >
                    Members
                  </button>
                  <button
                    onClick={() => onContextChange('employers')}
                    className={cn(
                      "px-2 py-1 transition-colors",
                      context === 'employers'
                        ? "text-inky-blue-500 font-medium"
                        : "text-mid-grey-600 hover:text-inky-blue-500"
                    )}
                  >
                    Employers
                  </button>
                </div>
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-md hover:bg-light-grey-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-mid-blue-500"
                aria-label="Close navigation"
              >
                <CloseIcon />
              </button>
            </div>

            {/* Quick Actions */}
            <div className="p-4 border-b border-light-grey-200 space-y-3">
              <button
                onClick={onSearchClick}
                className="flex items-center gap-3 w-full p-3 text-left rounded-md border border-light-grey-300 hover:border-mid-blue-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-mid-blue-500"
              >
                <SearchIcon />
                <span className="text-sm text-mid-grey-600">Search...</span>
              </button>

              <a
                href={`tel:${phone.replace(/\s/g, '')}`}
                className="flex items-center gap-3 p-3 text-left rounded-md hover:bg-light-grey-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-mid-blue-500"
              >
                <PhoneIcon />
                <span className="text-sm font-medium text-inky-blue-500">{phone}</span>
              </a>
            </div>

            {/* Navigation Sections */}
            <div className="flex-1 overflow-y-auto">
              <div className="p-4">
                <Accordion type="multiple" variant="ghost">
                  {sections.map((section, index) => (
                    <Accordion.Item key={section.label} value={section.label} variant="ghost">
                      <Accordion.Trigger
                        className="text-left font-medium text-inky-blue-500 py-3"
                        size="sm"
                      >
                        {section.label}
                      </Accordion.Trigger>
                      <Accordion.Content size="sm">
                        <div className="space-y-4">
                          {section.columns.map((column, columnIndex) => (
                            <div key={columnIndex}>
                              {column.title && (
                                <h4 className="text-xs font-brand-bold text-mid-grey-500 uppercase tracking-wide mb-2">
                                  {column.title}
                                </h4>
                              )}
                              <ul className="space-y-2">
                                {column.items.map((item, itemIndex) => (
                                  <li key={itemIndex}>
                                    <a
                                      href={item.href}
                                      className="block text-sm text-mid-grey-700 hover:text-inky-blue-500 py-1 min-h-[44px] flex items-center"
                                      onClick={(e) => {
                                        handleLinkClick(item.href, item.label);
                                      }}
                                      data-nav="mobile-menu"
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
                      </Accordion.Content>
                    </Accordion.Item>
                  ))}
                </Accordion>
              </div>
            </div>

            {/* CTAs Footer */}
            <div className="p-4 border-t border-light-grey-200 space-y-3">
              <Button
                intent="primary"
                fullWidth
                onClick={() => handleLinkClick(ctas.joinUrl, 'Join')}
              >
                Join CareSuper
              </Button>
              <Button
                intent="ghost"
                fullWidth
                onClick={() => handleLinkClick(ctas.loginUrl, 'Login')}
              >
                Member Login
              </Button>
            </div>
          </div>
        </div>
      </>
    );
  }
);

MobileNav.displayName = "MobileNav";
