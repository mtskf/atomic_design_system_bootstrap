import * as React from "react";
import { Button } from "../primitives/Button";
import { cn } from "../utils/cn";

export interface HeroAction {
  label: string;
  href?: string;
  onClick?: () => void;
  intent?: "primary" | "secondary" | "ghost" | "success" | "warning" | "danger" | "gradient";
}

export interface HeroWithCTAsProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
  lead?: string;
  primaryCta?: HeroAction;
  secondaryCta?: HeroAction;
  eyebrow?: string;
  bgImageUrl?: string;
  gradient?: boolean;
  align?: "left" | "center";
}

/**
 * HeroWithCTAs — Page hero with headline, lead and prominent CTAs
 *
 * Primary CTA should be the main action (e.g., "Join CareSuper")
 * Secondary CTA should be the secondary action (e.g., "Log in")
 *
 * @example
 * ```tsx
 * <HeroWithCTAs
 *   eyebrow="Members"
 *   title="Make the most of your super"
 *   lead="Learn how to grow and manage your super at every stage."
 *   primaryCta={{ label: "Join CareSuper", href: "/join" }}
 *   secondaryCta={{ label: "Log in", href: "/login", intent: "secondary" }}
 * />
 * ```
 */
export const HeroWithCTAs = React.forwardRef<HTMLElement, HeroWithCTAsProps>(
  (
    { className, eyebrow, title, lead, primaryCta, secondaryCta, bgImageUrl, gradient = false, align = "left", ...rest },
    ref
  ) => {
    const alignment = align === "center" ? "text-center items-center" : "text-left items-start";
    const bgClasses = gradient
      ? "bg-gradient-fresh-to-radiant"
      : bgImageUrl
        ? "bg-cover bg-center"
        : "bg-surface";

    return (
      <section
        ref={ref}
        className={cn("relative w-full", className)}
        aria-label="Page introduction"
        style={bgImageUrl ? { backgroundImage: `url(${bgImageUrl})` } : undefined}
        {...rest}
      >
        <div className={cn("w-full", bgClasses)}>
          <div className="mx-auto max-w-7xl px-4 py-10 sm:py-14 lg:py-20">
            <div className={cn("flex flex-col gap-4", alignment)}>
              {eyebrow && (
                <p className="text-caption-lg font-brand-medium text-inky-blue-500/80">{eyebrow}</p>
              )}
              <h1 className="text-display-md md:text-display-lg font-brand-bold text-inky-blue-500 max-w-3xl">
                {title}
              </h1>
              {lead && (
                <p className="text-body-lg text-inky-blue-500/90 max-w-2xl">{lead}</p>
              )}

              {(primaryCta || secondaryCta) && (
                <div className={cn("mt-2 flex flex-wrap gap-3", align === "center" && "justify-center")}>
                  {primaryCta && (
                    primaryCta.href ? (
                      <a
                        href={primaryCta.href}
                        className={cn(
                          "inline-flex items-center justify-center rounded-md font-brand-bold focus:outline-none focus-visible:ring-2 ring-offset-2 transition-colors",
                          (primaryCta.intent ?? "primary") === "primary" && "bg-mid-blue-500 text-white hover:bg-mid-blue-600 active:bg-mid-blue-700 focus-visible:ring-mid-blue-500",
                          (primaryCta.intent ?? "primary") === "secondary" && "bg-white text-mid-blue-500 hover:bg-mid-blue-50 border border-mid-blue-500 focus-visible:ring-mid-blue-500",
                          (primaryCta.intent ?? "primary") === "ghost" && "bg-transparent text-inky-blue-500 hover:bg-light-grey-100 focus-visible:ring-inky-blue-500",
                          (primaryCta.intent ?? "primary") === "gradient" && "bg-gradient-fresh-to-radiant text-inky-blue-500 hover:opacity-90 focus-visible:ring-radiant-green-500",
                          "h-10 px-4"
                        )}
                      >
                        {primaryCta.label}
                      </a>
                    ) : (
                      <Button
                        intent={primaryCta.intent ?? "primary"}
                        onClick={primaryCta.onClick}
                      >
                        {primaryCta.label}
                      </Button>
                    )
                  )}
                  {secondaryCta && (
                    secondaryCta.href ? (
                      <a
                        href={secondaryCta.href}
                        className={cn(
                          "inline-flex items-center justify-center rounded-md font-brand-bold focus:outline-none focus-visible:ring-2 ring-offset-2 transition-colors",
                          (secondaryCta.intent ?? "secondary") === "primary" && "bg-mid-blue-500 text-white hover:bg-mid-blue-600 active:bg-mid-blue-700 focus-visible:ring-mid-blue-500",
                          (secondaryCta.intent ?? "secondary") === "secondary" && "bg-white text-mid-blue-500 hover:bg-mid-blue-50 border border-mid-blue-500 focus-visible:ring-mid-blue-500",
                          (secondaryCta.intent ?? "secondary") === "ghost" && "bg-transparent text-inky-blue-500 hover:bg-light-grey-100 focus-visible:ring-inky-blue-500",
                          (secondaryCta.intent ?? "secondary") === "gradient" && "bg-gradient-fresh-to-radiant text-inky-blue-500 hover:opacity-90 focus-visible:ring-radiant-green-500",
                          "h-10 px-4"
                        )}
                      >
                        {secondaryCta.label}
                      </a>
                    ) : (
                      <Button
                        intent={secondaryCta.intent ?? "secondary"}
                        onClick={secondaryCta.onClick}
                      >
                        {secondaryCta.label}
                      </Button>
                    )
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }
);

HeroWithCTAs.displayName = "HeroWithCTAs";

export default HeroWithCTAs;
