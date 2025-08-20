import * as React from "react";
import { useState } from "react";
import { LucideIcon } from "../primitives/Icon";
import { cn } from "../utils/cn";
import footerData from "../config/footer.config.json";

// Types based on JSON schema
export interface FooterData {
  support: {
    phone: string;
    hours: string;
    links: Array<{ label: string; href: string }>;
  };
  app: {
    copy: string;
    links: Array<{
      type: "appstore" | "playstore" | "internal";
      href: string;
      label?: string;
    }>;
  };
  about: Array<{ label: string; href: string }>;
  fundDetails: {
    usi: string;
    name: string;
    abn: string;
    badges: Array<{ type: string; src: string; alt: string }>;
  };
  awards: Array<{ name: string; href: string }>;
  social: Array<{ icon: string; href: string }>;
  acknowledgement: {
    text: string;
  };
  disclosures: {
    generalAdvice: string;
    pds: {
      copy: string;
      hrefs: { pds: string; tmd: string; fsg: string };
    };
    pastPerformance: string;
    trustee: string;
    copyright: string;
  };
}

export interface FooterProps {
  /**
   * Footer data configuration
   */
  data?: FooterData;
  /**
   * Additional className for styling
   */
  className?: string;
}

export interface FooterSectionProps {
  /**
   * Section title
   */
  title: string;
  /**
   * Unique ID for ARIA labeling
   */
  ariaId: string;
  /**
   * Section content
   */
  children: React.ReactNode;
  /**
   * Whether section is collapsible on mobile
   */
  collapsible?: boolean;
  /**
   * Default open state for mobile
   */
  defaultOpen?: boolean;
  /**
   * Additional className
   */
  className?: string;
}

export interface SocialLinksProps {
  /**
   * Array of social media links
   */
  links: Array<{ icon: string; href: string }>;
  /**
   * Additional className
   */
  className?: string;
}

export interface AwardStripProps {
  /**
   * Array of awards/badges
   */
  awards: Array<{ name: string; href: string }>;
  /**
   * Additional className
   */
  className?: string;
}

/**
 * FooterSection - Collapsible section component for mobile
 */
export const FooterSection = React.forwardRef<HTMLDivElement, FooterSectionProps>(
  ({ title, ariaId, children, collapsible = true, defaultOpen = false, className, ...rest }, ref) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    if (!collapsible) {
      return (
        <div ref={ref} className={className} {...rest}>
          <h2 className="text-sm font-semibold text-slate-900 mb-4" id={ariaId}>
            {title}
          </h2>
          <div aria-labelledby={ariaId}>
            {children}
          </div>
        </div>
      );
    }

    return (
      <div ref={ref} className={className} {...rest}>
        <button
          className="flex w-full items-center justify-between py-3 text-left text-sm font-semibold text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 lg:cursor-default lg:pointer-events-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen ? "true" : "false"}
          aria-controls={`${ariaId}-content`}
          id={ariaId}
        >
          {title}
          <LucideIcon
            iconName="ChevronDown"
            size="sm"
            className={cn(
              "transition-transform duration-200 lg:hidden",
              isOpen && "rotate-180"
            )}
          />
        </button>
        <div
          id={`${ariaId}-content`}
          aria-labelledby={ariaId}
          className={cn(
            "overflow-hidden transition-all duration-200",
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 lg:max-h-none lg:opacity-100"
          )}
        >
          <div className="pb-4 lg:pb-0">
            {children}
          </div>
        </div>
      </div>
    );
  }
);

FooterSection.displayName = "FooterSection";

/**
 * SocialLinks - Social media icons component
 */
export const SocialLinks = React.forwardRef<HTMLDivElement, SocialLinksProps>(
  ({ links, className, ...rest }, ref) => {
    const getIconName = (icon: string) => {
      switch (icon.toLowerCase()) {
        case "linkedin":
          return "Linkedin";
        case "facebook":
          return "Facebook";
        case "x":
        case "twitter":
          return "Twitter";
        case "youtube":
          return "Youtube";
        default:
          return "ExternalLink";
      }
    };

    const getAriaLabel = (icon: string) => {
      switch (icon.toLowerCase()) {
        case "linkedin":
          return "Follow us on LinkedIn";
        case "facebook":
          return "Follow us on Facebook";
        case "x":
        case "twitter":
          return "Follow us on X (Twitter)";
        case "youtube":
          return "Follow us on YouTube";
        default:
          return `Follow us on ${icon}`;
      }
    };

    return (
      <div ref={ref} className={cn("flex gap-3", className)} {...rest}>
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={getAriaLabel(link.icon)}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 text-slate-600 hover:bg-blue-100 hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 transition-all duration-200"
          >
            <LucideIcon iconName={getIconName(link.icon) as any} size="sm" decorative={false} />
          </a>
        ))}
      </div>
    );
  }
);

SocialLinks.displayName = "SocialLinks";

/**
 * AwardStrip - Awards and badges component
 */
export const AwardStrip = React.forwardRef<HTMLDivElement, AwardStripProps>(
  ({ awards, className, ...rest }, ref) => {
    return (
      <div ref={ref} className={cn("space-y-4", className)} {...rest}>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
          {awards.map((award, index) => (
            <a
              key={index}
              href={award.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-lg border border-slate-200 p-4 hover:border-blue-200 hover:bg-blue-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 transition-all duration-200 group"
            >
              <LucideIcon
                iconName="Award"
                size="sm"
                className="text-slate-400 group-hover:text-blue-500 transition-colors"
              />
              <div className="flex-1 min-w-0">
                <span className="sr-only">{award.name} - external link</span>
                <div className="text-sm text-slate-700 font-medium truncate group-hover:text-blue-700">
                  {award.name}
                </div>
              </div>
              <LucideIcon
                iconName="ExternalLink"
                size="xs"
                className="text-slate-400 group-hover:text-blue-500 transition-colors"
              />
            </a>
          ))}
        </div>
      </div>
    );
  }
);

AwardStrip.displayName = "AwardStrip";

/**
 * Footer - Main footer component
 *
 * @example
 * ```tsx
 * <Footer />
 * <Footer data={customFooterData} />
 * ```
 */
export const Footer = React.forwardRef<HTMLElement, FooterProps>(
  ({ data = footerData, className, ...rest }, ref) => {
        return (
      <footer
        ref={ref}
        className={cn("bg-white border-t border-slate-200", className)}
        aria-labelledby="footer-title"
        {...rest}
      >
        <h2 id="footer-title" className="sr-only">
          Site Footer
        </h2>

        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                              {/* Main footer content */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-16">

            {/* About Section */}
            <div>
              <FooterSection
                title="About"
                ariaId="footer-about"
                defaultOpen={true}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2">
                  {data.about.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 transition-colors py-1"
                    >
                      <LucideIcon iconName="ChevronRight" size="xs" className="text-slate-400" />
                      {link.label}
                    </a>
                  ))}
                </div>
              </FooterSection>
            </div>

            {/* Fund Details Section */}
            <div>
              <div className="space-y-8">
                <FooterSection
                  title="Fund details"
                  ariaId="footer-fund"
                  className="space-y-4"
                >
                  <div className="space-y-4">
                    <div className="p-4 bg-slate-50 rounded-lg">
                      <dl className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <dt className="font-medium text-slate-900">USI:</dt>
                          <dd className="text-slate-600 font-mono">{data.fundDetails.usi}</dd>
                        </div>
                        <div className="flex justify-between">
                          <dt className="font-medium text-slate-900">Fund:</dt>
                          <dd className="text-slate-600">{data.fundDetails.name}</dd>
                        </div>
                        <div className="flex justify-between">
                          <dt className="font-medium text-slate-900">ABN:</dt>
                          <dd className="text-slate-600 font-mono">{data.fundDetails.abn}</dd>
                        </div>
                      </dl>
                    </div>
                    {data.fundDetails.badges.map((badge, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 border border-slate-200 rounded-lg">
                        <LucideIcon iconName="Award" size="sm" className="text-blue-500" />
                        <span className="text-sm text-slate-700 font-medium">{badge.alt}</span>
                      </div>
                    ))}
                  </div>
                </FooterSection>

                {/* Connect Section */}
                <div>
                  <FooterSection
                    title="Connect with us"
                    ariaId="footer-connect"
                    collapsible={false}
                    className="space-y-4"
                  >
                    <div className="flex justify-center lg:justify-start">
                      <SocialLinks links={data.social} className="gap-3" />
                    </div>
                  </FooterSection>
                </div>
              </div>
            </div>

            {/* Awards Section */}
            <div>
              <FooterSection
                title="Our awards"
                ariaId="footer-awards"
                className="space-y-4"
              >
                <AwardStrip awards={data.awards} />
              </FooterSection>
            </div>

            {/* Full width - Acknowledgement */}
            <div className="lg:col-span-3">
              <div className="border-t border-slate-200 pt-8">
                <FooterSection
                  title="Acknowledgement of Country"
                  ariaId="footer-acknowledgement"
                  collapsible={false}
                  className="text-center lg:text-left"
                >
                  <div className="max-w-4xl mx-auto lg:mx-0">
                    <p className="text-sm leading-relaxed text-slate-600 italic">
                      {data.acknowledgement.text}
                    </p>
                  </div>
                </FooterSection>
              </div>
            </div>
          </div>

          {/* Legal Disclosures */}
          <div className="mt-12 pt-8 border-t border-slate-300">
            <FooterSection
              title="Legal information"
              ariaId="footer-disclosures"
              defaultOpen={false}
            >
              <div className="max-w-4xl space-y-4 text-xs leading-6 text-slate-500">
                <p className="font-medium text-slate-600">{data.disclosures.generalAdvice}</p>

                <p>
                  {data.disclosures.pds.copy}{" "}
                  <a href={data.disclosures.pds.hrefs.pds} className="text-blue-600 hover:text-blue-800 underline font-medium">
                    Product disclosure statement
                  </a>
                  ,{" "}
                  <a href={data.disclosures.pds.hrefs.tmd} className="text-blue-600 hover:text-blue-800 underline font-medium">
                    Target market determination
                  </a>
                  {" "}and{" "}
                  <a href={data.disclosures.pds.hrefs.fsg} className="text-blue-600 hover:text-blue-800 underline font-medium">
                    Financial services guide
                  </a>
                  .
                </p>

                <p>{data.disclosures.pastPerformance}</p>

                <p>{data.disclosures.trustee}</p>

                <div className="pt-4 border-t border-slate-200">
                  <p className="font-bold text-slate-900 text-center">
                    {data.disclosures.copyright}
                  </p>
                </div>
              </div>
            </FooterSection>
          </div>
        </div>
      </footer>
    );
  }
);

Footer.displayName = "Footer";
