import * as React from "react";
import { LucideIcon } from "../primitives/Icon";
import { cn } from "../utils/cn";

export interface AppDownloadData {
  copy: string;
  links: Array<{
    type: "appstore" | "playstore" | "internal";
    href: string;
    label?: string;
  }>;
}

export interface AppDownloadProps {
  /**
   * App download information data
   */
  data?: AppDownloadData;
  /**
   * Additional className for styling
   */
  className?: string;
  /**
   * Background variant
   */
  variant?: "default" | "gradient" | "dark" | "branded";
  /**
   * Layout variant
   */
  layout?: "centered" | "split" | "hero";
  /**
   * Show decorative elements
   */
  showDecorations?: boolean;
}

// Default app download data
const defaultAppData: AppDownloadData = {
  copy: "Download the CareSuper app and manage your account on the go!",
  links: [
    { type: "appstore", href: "https://apps.apple.com/au/app/caresuper-app/idXXXXXXXX" },
    { type: "playstore", href: "https://play.google.com/store/apps/details?id=au.com.caresuper" },
    { type: "internal", label: "Learn about the app", href: "/members/app" },
  ],
};

/**
 * AppDownload - Full width app download section component
 *
 * @example
 * ```tsx
 * <AppDownload />
 * <AppDownload variant="gradient" layout="hero" showDecorations />
 * <AppDownload data={customAppData} variant="dark" />
 * ```
 */
export const AppDownload = React.forwardRef<HTMLElement, AppDownloadProps>(
  ({
    data = defaultAppData,
    className,
    variant = "default",
    layout = "centered",
    showDecorations = false,
    ...rest
  }, ref) => {
    const getVariantStyles = () => {
      switch (variant) {
        case "gradient":
          return "bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 text-white";
        case "dark":
          return "bg-slate-900 text-white";
        case "branded":
          return "bg-gradient-to-r from-blue-600 to-teal-500 text-white";
        default:
          return "bg-slate-50 border-t border-b border-slate-200";
      }
    };

    const getTextStyles = () => {
      switch (variant) {
        case "gradient":
        case "dark":
        case "branded":
          return {
            title: "text-white",
            subtitle: "text-blue-100",
            copy: "text-white/90",
            feature: "text-white/80",
          };
        default:
          return {
            title: "text-slate-900",
            subtitle: "text-blue-600",
            copy: "text-slate-600",
            feature: "text-slate-600",
          };
      }
    };

    const textStyles = getTextStyles();
    const isDark = variant !== "default";

    const renderAppButton = (link: AppDownloadData["links"][0], index: number) => {
      const buttonBaseClass = cn(
        "group flex items-center gap-3 rounded-xl px-6 py-4 font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        isDark
          ? "bg-white text-slate-900 hover:bg-slate-100 focus-visible:ring-white shadow-lg"
          : "bg-slate-900 text-white hover:bg-slate-800 focus-visible:ring-blue-500 shadow-md"
      );

      if (link.type === "appstore") {
        return (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonBaseClass}
          >
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-slate-200 transition-colors">
              <LucideIcon iconName="Smartphone" size="sm" className="text-slate-700" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-xs opacity-80">Download on the</span>
              <span className="text-base font-bold">App Store</span>
            </div>
            <span className="sr-only">Download from Apple App Store</span>
          </a>
        );
      }

      if (link.type === "playstore") {
        return (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonBaseClass}
          >
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-slate-200 transition-colors">
              <LucideIcon iconName="Play" size="sm" className="text-slate-700" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-xs opacity-80">Get it on</span>
              <span className="text-base font-bold">Google Play</span>
            </div>
            <span className="sr-only">Download from Google Play Store</span>
          </a>
        );
      }

      return (
        <a
          key={index}
          href={link.href}
          className={cn(
            "inline-flex items-center gap-2 rounded-lg px-6 py-3 text-base font-semibold border-2 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
            isDark
              ? "border-white/30 text-white hover:border-white hover:bg-white/10 focus-visible:ring-white"
              : "border-slate-300 text-slate-700 hover:border-slate-400 hover:bg-slate-100 focus-visible:ring-blue-500"
          )}
        >
          <LucideIcon iconName="Info" size="sm" />
          {link.label}
        </a>
      );
    };

    const renderCenteredLayout = () => (
      <div className="text-center max-w-4xl mx-auto">
        <div className="mb-6">
          <h2 className={cn("text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl mb-4", textStyles.title)}>
            Get the CareSuper app
          </h2>
        </div>

        <div className="mb-8">
          <p className={cn("text-lg leading-relaxed max-w-2xl mx-auto", textStyles.copy)}>
            {data.copy}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          {data.links.filter(link => link.type !== "internal").map(renderAppButton)}
        </div>

        {data.links.find(link => link.type === "internal") && (
          <div className="flex justify-center">
            {renderAppButton(data.links.find(link => link.type === "internal")!, -1)}
          </div>
        )}
      </div>
    );

    const renderSplitLayout = () => (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div>
          <h2 className={cn("text-2xl font-bold tracking-tight sm:text-3xl mb-4", textStyles.title)}>
            Manage your super on the go
          </h2>
          <p className={cn("text-base leading-7 mb-6", textStyles.copy)}>
            {data.copy}
          </p>

          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-3">
              <LucideIcon iconName="Check" size="sm" className={isDark ? "text-green-400" : "text-green-600"} />
              <span className={cn("text-sm", textStyles.feature)}>Check your balance anytime</span>
            </div>
            <div className="flex items-center gap-3">
              <LucideIcon iconName="Check" size="sm" className={isDark ? "text-green-400" : "text-green-600"} />
              <span className={cn("text-sm", textStyles.feature)}>Update your details instantly</span>
            </div>
            <div className="flex items-center gap-3">
              <LucideIcon iconName="Check" size="sm" className={isDark ? "text-green-400" : "text-green-600"} />
              <span className={cn("text-sm", textStyles.feature)}>Make contributions easily</span>
            </div>
            <div className="flex items-center gap-3">
              <LucideIcon iconName="Check" size="sm" className={isDark ? "text-green-400" : "text-green-600"} />
              <span className={cn("text-sm", textStyles.feature)}>Secure and encrypted</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            {data.links.filter(link => link.type !== "internal").map(renderAppButton)}
          </div>
        </div>

        <div className="relative">
          <div className="relative mx-auto w-64 h-96 lg:w-80 lg:h-[480px]">
            {/* Phone mockup */}
            <div className={cn(
              "absolute inset-0 rounded-[2.5rem] p-2",
              isDark ? "bg-white/10 backdrop-blur-sm" : "bg-slate-200"
            )}>
              <div className={cn(
                "w-full h-full rounded-[2rem] overflow-hidden",
                isDark ? "bg-slate-800" : "bg-white"
              )}>
                <div className="p-6 space-y-4">
                  <div className="h-4 bg-blue-500 rounded w-3/4"></div>
                  <div className="space-y-2">
                    <div className={cn("h-3 rounded w-full", isDark ? "bg-slate-600" : "bg-slate-200")}></div>
                    <div className={cn("h-3 rounded w-2/3", isDark ? "bg-slate-600" : "bg-slate-200")}></div>
                  </div>
                  <div className="space-y-3 pt-4">
                    <div className={cn("h-16 rounded-lg", isDark ? "bg-slate-700" : "bg-slate-100")}></div>
                    <div className={cn("h-16 rounded-lg", isDark ? "bg-slate-700" : "bg-slate-100")}></div>
                    <div className={cn("h-16 rounded-lg", isDark ? "bg-slate-700" : "bg-slate-100")}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            {showDecorations && (
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-purple-500 rounded-full opacity-20 animate-pulse [animation-delay:1s]"></div>
                <div className="absolute top-1/3 -right-8 w-6 h-6 bg-teal-500 rounded-full opacity-20 animate-pulse [animation-delay:2s]"></div>
              </div>
            )}
          </div>
        </div>
      </div>
    );

    const renderHeroLayout = () => (
      <div className="text-center">
        <div className="mb-8">
          <h1 className={cn("text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-4", textStyles.title)}>
            Your super in your pocket
          </h1>
          <p className={cn("text-lg leading-7 max-w-3xl mx-auto mb-6", textStyles.copy)}>
            {data.copy} Join thousands of members who manage their superannuation with confidence using our award-winning mobile app.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            {data.links.filter(link => link.type !== "internal").map(renderAppButton)}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <div className={cn(
              "inline-flex items-center justify-center w-12 h-12 rounded-full mb-3",
              isDark ? "bg-white/10" : "bg-blue-100"
            )}>
              <LucideIcon iconName="Smartphone" size="md" className={isDark ? "text-white" : "text-blue-600"} />
            </div>
            <h3 className={cn("text-base font-semibold mb-1", textStyles.title)}>Easy to use</h3>
            <p className={cn("text-sm", textStyles.feature)}>Intuitive design makes managing your super simple</p>
          </div>

          <div className="text-center">
            <div className={cn(
              "inline-flex items-center justify-center w-12 h-12 rounded-full mb-3",
              isDark ? "bg-white/10" : "bg-green-100"
            )}>
              <LucideIcon iconName="Shield" size="md" className={isDark ? "text-white" : "text-green-600"} />
            </div>
            <h3 className={cn("text-base font-semibold mb-1", textStyles.title)}>Secure</h3>
            <p className={cn("text-sm", textStyles.feature)}>Bank-level security protects your information</p>
          </div>

          <div className="text-center">
            <div className={cn(
              "inline-flex items-center justify-center w-12 h-12 rounded-full mb-3",
              isDark ? "bg-white/10" : "bg-purple-100"
            )}>
              <LucideIcon iconName="Zap" size="md" className={isDark ? "text-white" : "text-purple-600"} />
            </div>
            <h3 className={cn("text-base font-semibold mb-1", textStyles.title)}>Fast</h3>
            <p className={cn("text-sm", textStyles.feature)}>Quick access to all your account information</p>
          </div>
        </div>
      </div>
    );

    const getLayoutContent = () => {
      switch (layout) {
        case "split":
          return renderSplitLayout();
        case "hero":
          return renderHeroLayout();
        default:
          return renderCenteredLayout();
      }
    };

    return (
      <section
        ref={ref}
        className={cn("relative overflow-hidden", getVariantStyles(), className)}
        aria-labelledby="app-download-title"
        {...rest}
      >
        {/* Background decorations */}
        {showDecorations && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
            <div className="absolute top-20 left-10 w-32 h-32 rounded-full border border-current opacity-5"></div>
            <div className="absolute bottom-20 right-10 w-24 h-24 rounded-full border border-current opacity-5"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full border border-current opacity-5"></div>
            <div className="absolute bottom-1/3 right-1/3 w-20 h-20 rounded-full border border-current opacity-5"></div>
          </div>
        )}

        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div id="app-download-title" className="sr-only">
            CareSuper App Download Section
          </div>
          {getLayoutContent()}
        </div>
      </section>
    );
  }
);

AppDownload.displayName = "AppDownload";
