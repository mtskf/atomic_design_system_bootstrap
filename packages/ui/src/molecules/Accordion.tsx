import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/cn";
import { Icon, LucideIcon } from "../primitives/Icon";

const accordionStyles = cva(
  "w-full",
  {
    variants: {
      variant: {
        default: "border border-light-grey-200 rounded-md",
        ghost: "",
        separated: "space-y-2",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const accordionItemStyles = cva(
  "border-b border-light-grey-200 last:border-b-0",
  {
    variants: {
      variant: {
        default: "",
        ghost: "border-b border-light-grey-200",
        separated: "border border-light-grey-200 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const accordionTriggerStyles = cva(
  "flex flex-1 items-center justify-between py-4 px-4 font-medium transition-all hover:bg-light-grey-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mid-blue-500 focus-visible:ring-offset-2 [&[data-state=open]_.chevron-icon]:rotate-180",
  {
    variants: {
      size: {
        sm: "py-2 px-3 text-sm",
        md: "py-4 px-4 text-base",
        lg: "py-6 px-6 text-lg",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

const accordionContentStyles = cva(
  "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
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

export interface AccordionProps
  extends Omit<React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root>, 'type'>,
    VariantProps<typeof accordionStyles> {
  /**
   * Type of accordion (single or multiple)
   */
  type?: 'single' | 'multiple';
  /**
   * Whether the accordion is collapsible (for single type)
   */
  collapsible?: boolean;
  /**
   * Additional className for styling
   */
  className?: string;
}

export interface AccordionItemProps
  extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>,
    VariantProps<typeof accordionItemStyles> {
  /**
   * Additional className for styling
   */
  className?: string;
}

export interface AccordionTriggerProps
  extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>,
    VariantProps<typeof accordionTriggerStyles> {
  /**
   * Additional className for styling
   */
  className?: string;
  /**
   * Custom chevron icon
   */
  chevron?: React.ReactNode;
  /**
   * Hide the chevron icon
   */
  hideChevron?: boolean;
}

export interface AccordionContentProps
  extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>,
    VariantProps<typeof accordionContentStyles> {
  /**
   * Additional className for styling
   */
  className?: string;
}

const ChevronDownIcon = () => (
  <LucideIcon
    iconName="ChevronDown"
    size="sm"
    decorative
    className="chevron-icon transition-transform duration-200"
  />
);

/**
 * Accordion component for collapsible content sections
 *
 * @example
 * ```tsx
 * <Accordion type="single" collapsible>
 *   <Accordion.Item value="item-1">
 *     <Accordion.Trigger>Section 1</Accordion.Trigger>
 *     <Accordion.Content>Content for section 1</Accordion.Content>
 *   </Accordion.Item>
 * </Accordion>
 * ```
 */
export const Accordion = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Root>,
  AccordionProps
>(({ className, variant, type = "single", collapsible, ...rest }, ref) => (
  <AccordionPrimitive.Root
    ref={ref}
    className={cn(accordionStyles({ variant }), className)}
    type={type as any}
    collapsible={type === "single" ? collapsible : undefined}
    {...(rest as any)}
  />
)) as React.ForwardRefExoticComponent<AccordionProps> & {
  Item: typeof AccordionItem;
  Trigger: typeof AccordionTrigger;
  Content: typeof AccordionContent;
};

Accordion.displayName = "Accordion";

export const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  AccordionItemProps
>(({ className, variant, ...rest }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(accordionItemStyles({ variant }), className)}
    {...rest}
  />
));

AccordionItem.displayName = "AccordionItem";

export const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  AccordionTriggerProps
>(({ className, size, chevron, hideChevron = false, children, ...rest }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(accordionTriggerStyles({ size }), className)}
      {...rest}
    >
      <span className="text-left">{children}</span>
      {!hideChevron && (
        <span className="shrink-0">
          {chevron || <ChevronDownIcon />}
        </span>
      )}
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));

AccordionTrigger.displayName = "AccordionTrigger";

export const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  AccordionContentProps
>(({ className, size, children, ...rest }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(accordionContentStyles({ size }), className)}
    {...rest}
  >
    <div className="pb-4 px-4 pt-0">
      {children}
    </div>
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = "AccordionContent";

// Attach sub-components to Accordion
Accordion.Item = AccordionItem;
Accordion.Trigger = AccordionTrigger;
Accordion.Content = AccordionContent;

// FAQ-specific accordion variant
export interface FAQAccordionProps {
  /**
   * FAQ items with question and answer
   */
  items: Array<{
    id: string;
    question: string;
    answer: React.ReactNode;
  }>;
  /**
   * Allow multiple items to be open at once
   */
  multiple?: boolean;
  /**
   * Default open items (for uncontrolled)
   */
  defaultValue?: string | string[];
  /**
   * Controlled open items
   */
  value?: string | string[];
  /**
   * Callback when open items change
   */
  onValueChange?: (value: string | string[]) => void;
  /**
   * Additional className for styling
   */
  className?: string;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({
  items,
  multiple = false,
  defaultValue,
  value,
  onValueChange,
  className,
}) => (
  <Accordion
    type={multiple ? "multiple" : "single"}
    collapsible={!multiple}
    defaultValue={defaultValue as any}
    value={value as any}
    onValueChange={onValueChange as any}
    className={className}
  >
    {items.map((item) => (
      <Accordion.Item key={item.id} value={item.id}>
        <Accordion.Trigger className="text-left font-medium text-inky-blue-500">
          {item.question}
        </Accordion.Trigger>
        <Accordion.Content className="text-mid-grey-700">
          {item.answer}
        </Accordion.Content>
      </Accordion.Item>
    ))}
  </Accordion>
);
