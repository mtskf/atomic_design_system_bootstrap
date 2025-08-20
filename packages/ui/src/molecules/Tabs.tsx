import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/cn";

const tabsListStyles = cva(
  "inline-flex items-center justify-center rounded-md bg-light-grey-100 p-1 text-mid-grey-500",
  {
    variants: {
      variant: {
        default: "bg-light-grey-100",
        pills: "bg-light-grey-100 gap-1",
        underline: "bg-transparent border-b border-light-grey-200 rounded-none p-0 gap-6",
      },
      orientation: {
        horizontal: "h-10 flex-row",
        vertical: "h-auto flex-col w-auto",
      },
    },
    defaultVariants: {
      variant: "default",
      orientation: "horizontal",
    },
  }
);

const tabsTriggerStyles = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mid-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "data-[state=active]:bg-white data-[state=active]:text-inky-blue-500 data-[state=active]:shadow-sm",
        pills: "rounded-md data-[state=active]:bg-white data-[state=active]:text-inky-blue-500 data-[state=active]:shadow-sm",
        underline: "rounded-none border-b-2 border-transparent bg-transparent px-4 py-3 data-[state=active]:border-mid-blue-500 data-[state=active]:text-inky-blue-500 hover:text-inky-blue-500",
      },
      orientation: {
        horizontal: "",
        vertical: "w-full justify-start",
      },
    },
    defaultVariants: {
      variant: "default",
      orientation: "horizontal",
    },
  }
);

const tabsContentStyles = cva(
  "mt-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mid-blue-500 focus-visible:ring-offset-2",
  {
    variants: {
      orientation: {
        horizontal: "",
        vertical: "ml-4",
      },
    },
    defaultVariants: {
      orientation: "horizontal",
    },
  }
);

export interface TabsProps
  extends Omit<React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root>, "orientation">,
    VariantProps<typeof tabsListStyles> {}

export interface TabsListProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>,
    VariantProps<typeof tabsListStyles> {}

export interface TabsTriggerProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>,
    VariantProps<typeof tabsTriggerStyles> {}

export interface TabsContentProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>,
    VariantProps<typeof tabsContentStyles> {}

/**
 * Tabs component for organizing content into multiple panels
 *
 * @example
 * ```tsx
 * <Tabs defaultValue="account">
 *   <Tabs.List>
 *     <Tabs.Trigger value="account">Account</Tabs.Trigger>
 *     <Tabs.Trigger value="password">Password</Tabs.Trigger>
 *   </Tabs.List>
 *   <Tabs.Content value="account">Account content</Tabs.Content>
 *   <Tabs.Content value="password">Password content</Tabs.Content>
 * </Tabs>
 * ```
 */
const TabsRoot = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Root>,
  TabsProps
>(({ className, orientation = "horizontal", ...rest }, ref) => (
  <TabsPrimitive.Root
    ref={ref}
    orientation={orientation || "horizontal"}
    className={cn("w-full", className)}
    {...rest}
  />
));
TabsRoot.displayName = "Tabs";

export const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  TabsListProps
>(({ className, variant, orientation, ...rest }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(tabsListStyles({ variant, orientation }), className)}
    {...rest}
  />
));

TabsList.displayName = "TabsList";

export const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  TabsTriggerProps
>(({ className, variant, orientation, ...rest }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(tabsTriggerStyles({ variant, orientation }), className)}
    {...rest}
  />
));

TabsTrigger.displayName = "TabsTrigger";

export const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  TabsContentProps
>(({ className, orientation, ...rest }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(tabsContentStyles({ orientation }), className)}
    {...rest}
  />
));

TabsContent.displayName = "TabsContent";

type TabsComponent = React.ForwardRefExoticComponent<
  Omit<React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root>, "orientation"> &
  VariantProps<typeof tabsListStyles> &
  React.RefAttributes<React.ElementRef<typeof TabsPrimitive.Root>>
> & {
  List: typeof TabsList;
  Trigger: typeof TabsTrigger;
  Content: typeof TabsContent;
};

export const Tabs = Object.assign(TabsRoot, {
  List: TabsList,
  Trigger: TabsTrigger,
  Content: TabsContent,
}) as TabsComponent;
