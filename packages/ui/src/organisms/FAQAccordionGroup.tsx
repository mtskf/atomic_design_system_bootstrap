import * as React from "react";
import { Accordion, FAQAccordion } from "../molecules/Accordion";
import { cn } from "../utils/cn";

export interface FAQCategoryItem {
  id: string;
  question: string;
  answer: React.ReactNode;
}

export interface FAQCategory {
  label: string;
  items: FAQCategoryItem[];
}

export interface FAQAccordionGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  categories: FAQCategory[];
  defaultCategoryIndex?: number;
}

/**
 * FAQAccordionGroup — Category tabs + Accordion list per category
 */
export const FAQAccordionGroup: React.FC<FAQAccordionGroupProps> = ({
  className,
  categories,
  defaultCategoryIndex = 0,
  ...rest
}) => {
  const [active, setActive] = React.useState(defaultCategoryIndex);
  const current = categories[active];

  return (
    <div className={cn("w-full", className)} {...rest}>
      <div role="tablist" aria-label="FAQ categories" className="mb-4 flex flex-wrap gap-2">
        {categories.map((cat, i) => {
          const selected = i === active;
          return (
            <button
              key={cat.label}
              role="tab"
              aria-selected={selected}
              className={cn(
                "rounded-full border px-3 py-1.5 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mid-blue-500",
                selected
                  ? "border-mid-blue-500 bg-mid-blue-50 text-inky-blue-500"
                  : "border-light-grey-300 bg-white text-mid-grey-700 hover:border-mid-blue-300"
              )}
              onClick={() => setActive(i)}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      <FAQAccordion
        items={current.items}
        multiple={false}
        className="border border-light-grey-200 rounded-md"
      />
    </div>
  );
};

export default FAQAccordionGroup;


