import * as React from "react";
import { cn } from "../utils/cn";
import { NavigationContext, NavigationData } from "../types/navigation";
import { MenuTrigger } from "./MenuTrigger";
import { MegaPanel } from "./MegaPanel";
import { MobileNav } from "./MobileNav";
import { Button } from "../primitives/Button";
import { Icon } from "../primitives/Icon";
import { Logo } from "../primitives/Logo";
import { LucideIcon } from "../primitives/Icon";
import { ButtonGroup } from "../molecules/ButtonGroup";

export interface HeaderProps {
  /**
   * Current navigation context
   */
  context: NavigationContext;
  /**
   * Navigation data
   */
  navigationData: NavigationData;
  /**
   * Current path for active state detection
   */
  currentPath?: string;
  /**
   * Whether header should be sticky
   */
  sticky?: boolean;
  /**
   * Whether header is in condensed mode (after scroll)
   */
  condensed?: boolean;
  /**
   * Callback when context changes
   */
  onContextChange?: (context: NavigationContext) => void;
  /**
   * Callback when search is triggered
   */
  onSearchClick?: () => void;
  /**
   * Callback when a link is clicked
   */
  onLinkClick?: (href: string, label: string) => void;
  /**
   * Additional className
   */
  className?: string;
}

const HamburgerIcon = () => (
  <LucideIcon iconName="Menu" size="md" decorative />
);

const SearchIcon = () => (
  <LucideIcon iconName="Search" size="sm" decorative />
);



/**
 * Header component for CareSuper navigation
 *
 * @example
 * ```tsx
 * <Header
 *   context="members"
 *   navigationData={navigationData}
 *   currentPath="/members/why-us"
 *   onContextChange={setContext}
 *   onSearchClick={handleSearch}
 * />
 * ```
 */
export const Header = React.forwardRef<HTMLElement, HeaderProps>(
  ({
    context,
    navigationData,
    currentPath = "",
    sticky = true,
    condensed = false,
    onContextChange,
    onSearchClick,
    onLinkClick,
    className
  }, ref) => {
    const [openMenuIndex, setOpenMenuIndex] = React.useState<number | null>(null);
    const [isMobileNavOpen, setIsMobileNavOpen] = React.useState(false);
    const [hoverTimeoutId, setHoverTimeoutId] = React.useState<NodeJS.Timeout | null>(null);
    const [leaveTimeoutId, setLeaveTimeoutId] = React.useState<NodeJS.Timeout | null>(null);

    const currentMenu = navigationData.menus[context];
    const currentCTAs = navigationData.globals.cta[context];

    // Close menu on route change
    React.useEffect(() => {
      setOpenMenuIndex(null);
      setIsMobileNavOpen(false);
    }, [currentPath]);

    // Close on outside click
    React.useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        const target = event.target as Element;
        if (!target.closest('[data-nav="header"]')) {
          setOpenMenuIndex(null);
        }
      };

      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    const handleMouseEnter = (index: number) => {
      if (leaveTimeoutId) {
        clearTimeout(leaveTimeoutId);
        setLeaveTimeoutId(null);
      }

      const timeoutId = setTimeout(() => {
        setOpenMenuIndex(index);
      }, 120); // Intent delay

      setHoverTimeoutId(timeoutId);
    };

    const handleMouseLeave = () => {
      if (hoverTimeoutId) {
        clearTimeout(hoverTimeoutId);
        setHoverTimeoutId(null);
      }

      const timeoutId = setTimeout(() => {
        setOpenMenuIndex(null);
      }, 250); // Leave delay

      setLeaveTimeoutId(timeoutId);
    };

    const handleTriggerClick = (index: number) => {
      setOpenMenuIndex(openMenuIndex === index ? null : index);
    };

    const handleKeyDown = (event: React.KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpenMenuIndex(null);
      }
    };

    return (
      <>
        <header
          ref={ref}
          className={cn(
            "w-full bg-white border-b border-light-grey-200 transition-all duration-200",
            sticky && "sticky top-0 z-30",
            condensed && "shadow-md",
            className
          )}
          data-nav="header"
        >
          {/* Top bar with secondary links and context switcher */}
          <div className="hidden lg:block bg-light-grey-50 border-b border-light-grey-200">
            <div className="container mx-auto px-6">
                            <div className="flex items-center justify-between h-10">
                <div className="flex items-center space-x-6">
                  {/* Context switcher - compact design */}
                  <div className="flex text-xs">
                    <button
                      onClick={() => onContextChange?.('members')}
                      className={cn(
                        "px-2 py-1 transition-colors border-r border-light-grey-300",
                        context === 'members'
                          ? "text-inky-blue-500 font-medium"
                          : "text-mid-grey-600 hover:text-inky-blue-500"
                      )}
                    >
                      For Members
                    </button>
                    <button
                      onClick={() => onContextChange?.('employers')}
                      className={cn(
                        "px-2 py-1 transition-colors",
                        context === 'employers'
                          ? "text-inky-blue-500 font-medium"
                          : "text-mid-grey-600 hover:text-inky-blue-500"
                      )}
                    >
                      For Employers
                    </button>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  {/* Secondary links moved to right */}
                  {navigationData.topLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="text-xs text-mid-grey-600 hover:text-inky-blue-500 transition-colors"
                      onClick={() => onLinkClick?.(link.href, link.label)}
                    >
                      {link.label}
                    </a>
                  ))}

                  {/* Separator */}
                  <div className="w-px h-4 bg-light-grey-300" />

                  <a
                    href={`tel:${navigationData.globals.phone.replace(/\s/g, '')}`}
                    className="text-xs font-medium text-inky-blue-500 hover:text-mid-blue-500"
                  >
                    {navigationData.globals.phone}
                  </a>
                  <button
                    onClick={onSearchClick}
                    className="p-1 rounded hover:bg-light-grey-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-mid-blue-500"
                    aria-label="Search"
                  >
                    <SearchIcon />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Main navigation */}
          <div className="container mx-auto px-6">
            <div className={cn(
              "flex items-center justify-between transition-all duration-200",
              condensed ? "h-14" : "h-16"
            )}>
                            {/* Logo */}
              <div className="flex items-center">
                <Logo
                  size={condensed ? "sm" : "md"}
                  className="flex-shrink-0 scale-90"
                />
              </div>

              {/* Desktop navigation */}
              <nav
                className="hidden lg:block"
                aria-label="Primary navigation"
                onMouseLeave={handleMouseLeave}
                onKeyDown={handleKeyDown}
              >
                <div className="flex items-center">
                  {/* Menu items */}
                  {currentMenu.map((section, index) => (
                    <div key={section.label} className="relative">
                      <MenuTrigger
                        isExpanded={openMenuIndex === index}
                        isActive={currentPath.startsWith(`/${context}/${section.label.toLowerCase().replace(/\s+/g, '-')}`)}
                        controls={`mega-panel-${index}`}
                        onClick={() => handleTriggerClick(index)}
                        onMouseEnter={() => handleMouseEnter(index)}
                        className={condensed ? "py-2" : "py-3"}
                      >
                        {section.label}
                      </MenuTrigger>

                      <MegaPanel
                        section={section}
                        isOpen={openMenuIndex === index}
                        id={`mega-panel-${index}`}
                        labelledBy={`trigger-${index}`}
                        onLinkClick={onLinkClick}
                      />
                    </div>
                  ))}
                </div>
              </nav>

                            {/* CTAs */}
              <div className="flex items-center gap-3">
                <div className="hidden lg:flex items-center">
                  <ButtonGroup
                    variant="outlined"
                    size={condensed ? "sm" : "md"}
                    attached={true}
                  >
                    <Button
                      intent="ghost"
                      onClick={() => onLinkClick?.(currentCTAs.loginUrl, 'Login')}
                    >
                      Login
                    </Button>
                    <Button
                      intent="primary"
                      onClick={() => onLinkClick?.(currentCTAs.joinUrl, 'Join')}
                    >
                      Join now
                    </Button>
                  </ButtonGroup>
                </div>

                {/* Mobile buttons */}
                <div className="lg:hidden flex items-center gap-2">
                  <button
                    onClick={onSearchClick}
                    className="p-2 rounded-md hover:bg-light-grey-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-mid-blue-500"
                    aria-label="Search"
                  >
                    <SearchIcon />
                  </button>
                  <button
                    onClick={() => setIsMobileNavOpen(true)}
                    className="p-2 rounded-md hover:bg-light-grey-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-mid-blue-500"
                    aria-label="Open mobile menu"
                  >
                    <HamburgerIcon />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Mobile Navigation */}
        <MobileNav
          isOpen={isMobileNavOpen}
          onClose={() => setIsMobileNavOpen(false)}
          context={context}
          onContextChange={(newContext) => {
            onContextChange?.(newContext);
            setIsMobileNavOpen(false);
          }}
          sections={currentMenu}
          phone={navigationData.globals.phone}
          ctas={currentCTAs}
          onSearchClick={() => {
            onSearchClick?.();
            setIsMobileNavOpen(false);
          }}
          onLinkClick={onLinkClick}
        />
      </>
    );
  }
);

Header.displayName = "Header";
