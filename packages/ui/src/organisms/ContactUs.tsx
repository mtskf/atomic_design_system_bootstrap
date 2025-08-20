import * as React from "react";
import { LucideIcon } from "../primitives/Icon";
import { cn } from "../utils/cn";

export interface ContactUsData {
  phone: string;
  hours: string;
  links: Array<{ label: string; href: string }>;
}

export interface ContactUsProps {
  /**
   * Contact information data
   */
  data?: ContactUsData;
  /**
   * Additional className for styling
   */
  className?: string;
  /**
   * Background variant
   */
  variant?: "default" | "slate";
  /**
   * Show decorative background pattern
   */
  showPattern?: boolean;
}

// Default contact data
const defaultContactData: ContactUsData = {
  phone: "1800 005 166",
  hours: "8am – 7pm, Monday - Friday (AEST/AEDT)",
  links: [
    { label: "Enquire online", href: "/members/contact-us#enquire" },
    { label: "Contact Us", href: "/members/contact-us" },
  ],
};

/**
 * Contact Us - Full width contact section component
 *
 * @example
 * ```tsx
 * <ContactUs />
 * <ContactUs variant="slate" />
 * <ContactUs data={customContactData} />
 * ```
 */
export const ContactUs = React.forwardRef<HTMLElement, ContactUsProps>(
  ({ data = defaultContactData, className, variant = "default", showPattern = variant === "default", ...rest }, ref) => {
    const getVariantStyles = () => {
      switch (variant) {
        case "slate":
          return "bg-gradient-to-br from-slate-800 to-slate-900 text-white";
        default:
          return "bg-white border-t border-b border-slate-200";
      }
    };

    const getTextStyles = () => {
      switch (variant) {
        case "slate":
          return {
            title: "text-white",
            subtitle: "text-slate-300",
            phone: "text-white hover:text-slate-200",
            hours: "text-slate-300",
            linkText: "text-slate-300 hover:text-white",
            linkIcon: "text-slate-400 group-hover:text-white",
          };
        default:
          return {
            title: "text-slate-900",
            subtitle: "text-slate-600",
            phone: "text-blue-600 hover:text-blue-700",
            hours: "text-slate-600",
            linkText: "text-slate-700 hover:text-blue-600",
            linkIcon: "text-blue-400 group-hover:text-blue-600",
          };
      }
    };

    const textStyles = getTextStyles();

    return (
      <section
        ref={ref}
        className={cn("relative overflow-hidden", getVariantStyles(), className)}
        aria-labelledby="contact-us-title"
        {...rest}
      >
        {/* Background Pattern */}
        {showPattern && (
          <div className="absolute inset-0 opacity-5" aria-hidden="true">
            <div className="absolute top-10 left-10 w-20 h-20 rounded-full border-2 border-current"></div>
            <div className="absolute top-40 right-20 w-16 h-16 rounded-full border-2 border-current"></div>
            <div className="absolute bottom-20 left-1/4 w-12 h-12 rounded-full border-2 border-current"></div>
            <div className="absolute bottom-40 right-1/3 w-24 h-24 rounded-full border-2 border-current"></div>
          </div>
        )}

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 id="contact-us-title" className={cn("text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl", textStyles.title)}>
              Support you can count on
            </h2>
            <p className={cn("mt-4 text-lg leading-8 max-w-2xl mx-auto", textStyles.subtitle)}>
              Get the help you need when you need it. Our dedicated support team is here to assist you with all your superannuation needs.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-16">
            {/* Phone Section */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-6 lg:mx-0">
                <LucideIcon iconName="Phone" size="lg" className="text-blue-600" />
              </div>
              <h3 className={cn("text-xl font-semibold mb-3", textStyles.title)}>
                Call us now
              </h3>
              <div className="space-y-2">
                <a
                  href={`tel:${data.phone.replace(/\s/g, "")}`}
                  className={cn("block text-2xl font-bold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500", textStyles.phone)}
                >
                  {data.phone}
                </a>
                <p className={cn("text-sm", textStyles.hours)}>
                  {data.hours}
                </p>
              </div>
            </div>

            {/* Online Section */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6 lg:mx-0">
                <LucideIcon iconName="MessageSquare" size="lg" className="text-green-600" />
              </div>
              <h3 className={cn("text-xl font-semibold mb-3", textStyles.title)}>
                Get help online
              </h3>
              <div className="space-y-4">
                {data.links.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className={cn("group flex items-center justify-center lg:justify-start gap-3 text-base font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500", textStyles.linkText)}
                  >
                    <LucideIcon
                      iconName="ArrowRight"
                      size="sm"
                      className={cn("transition-colors", textStyles.linkIcon)}
                    />
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Additional Info Section */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 mb-6 lg:mx-0">
                <LucideIcon iconName="Clock" size="lg" className="text-purple-600" />
              </div>
              <h3 className={cn("text-xl font-semibold mb-3", textStyles.title)}>
                Quick response
              </h3>
              <div className="space-y-2">
                <p className={cn("text-sm", textStyles.hours)}>
                  Most enquiries are resolved within 24 hours
                </p>
                <p className={cn("text-sm", textStyles.hours)}>
                  Urgent matters handled immediately during business hours
                </p>
              </div>
            </div>
          </div>


        </div>
      </section>
    );
  }
);

ContactUs.displayName = "ContactUs";
