import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/cn";

const cardStyles = cva(
  "rounded-lg transition-colors",
  {
    variants: {
      variant: {
        default: "bg-white border border-light-grey-300 shadow-sm",
        outlined: "bg-white border-2 border-light-grey-300",
        elevated: "bg-white shadow-lg border border-light-grey-200",
        interactive: "bg-white border border-light-grey-300 shadow-sm hover:shadow-md hover:border-mid-grey-400 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-mid-blue-500 focus-visible:ring-offset-2",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardStyles> {
  /**
   * Whether the card is clickable
   */
  clickable?: boolean;
}

/**
 * Card component for grouping related content
 *
 * @example
 * ```tsx
 * <Card>
 *   <Card.Header>
 *     <Card.Title>Title</Card.Title>
 *   </Card.Header>
 *   <Card.Body>Content</Card.Body>
 * </Card>
 * ```
 */
const CardRoot = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, clickable, children, onClick, ...rest }, ref) => {
    const effectiveVariant = clickable || onClick ? "interactive" : variant;
    return (
      <div
        ref={ref}
        className={cn(cardStyles({ variant: effectiveVariant }), className)}
        onClick={onClick}
        role={clickable ? "button" : undefined}
        tabIndex={clickable ? 0 : undefined}
        onKeyDown={(e) => {
          if (!onClick) return;
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onClick(e as unknown as React.MouseEvent<HTMLDivElement>);
          }
        }}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

CardRoot.displayName = "Card";

// Card sub-components
export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("px-6 py-4 border-b border-light-grey-200", className)}
        {...rest}
      />
    );
  }
);

CardHeader.displayName = "CardHeader";

export interface CardBodyProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardBody = React.forwardRef<HTMLDivElement, CardBodyProps>(
  ({ className, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("px-6 py-4", className)}
        {...rest}
      />
    );
  }
);

CardBody.displayName = "CardBody";

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("px-6 py-4 border-t border-light-grey-200", className)}
        {...rest}
      />
    );
  }
);

CardFooter.displayName = "CardFooter";

export interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className, as: Comp = "h3", ...rest }, ref) => {
    return (
      <Comp
        ref={ref}
        className={cn("text-lg font-brand-bold text-inky-blue-500", className)}
        {...rest}
      />
    );
  }
);

CardTitle.displayName = "CardTitle";

export interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

export const CardDescription = React.forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ className, ...rest }, ref) => {
    return (
      <p
        ref={ref}
        className={cn("text-sm text-mid-grey-600 mt-1", className)}
        {...rest}
      />
    );
  }
);

CardDescription.displayName = "CardDescription";

type CardComponent = React.ForwardRefExoticComponent<CardProps & React.RefAttributes<HTMLDivElement>> & {
  Header: typeof CardHeader;
  Body: typeof CardBody;
  Footer: typeof CardFooter;
  Title: typeof CardTitle;
  Description: typeof CardDescription;
};

export const Card = Object.assign(CardRoot, {
  Header: CardHeader,
  Body: CardBody,
  Footer: CardFooter,
  Title: CardTitle,
  Description: CardDescription,
}) as CardComponent;
