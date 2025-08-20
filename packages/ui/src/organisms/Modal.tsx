import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { cn } from "../utils/cn";

export type ModalProps = React.ComponentPropsWithoutRef<typeof Dialog.Root>;

export interface ModalContentProps extends React.ComponentPropsWithoutRef<typeof Dialog.Content> {
  size?: "sm" | "md" | "lg" | "xl";
}
export type ModalHeaderProps = React.HTMLAttributes<HTMLDivElement>;
export type ModalBodyProps = React.HTMLAttributes<HTMLDivElement>;
export type ModalFooterProps = React.HTMLAttributes<HTMLDivElement>;
export type ModalTitleProps = React.ComponentPropsWithoutRef<typeof Dialog.Title>;
export type ModalDescriptionProps = React.ComponentPropsWithoutRef<typeof Dialog.Description>;

const ModalRoot: React.FC<ModalProps> = ({ children, ...rest }) => (
  <Dialog.Root {...rest}>{children}</Dialog.Root>
);

const ModalOverlay = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<typeof Dialog.Overlay>>(
  ({ className, ...rest }, ref) => (
    <Dialog.Overlay
      ref={ref}
      className={cn("fixed inset-0 z-40 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out", className)}
      {...rest}
    />
  )
);
ModalOverlay.displayName = "ModalOverlay";

const ModalContent = React.forwardRef<HTMLDivElement, ModalContentProps>(({ className, children, size = "md", ...rest }, ref) => {
  const sizeClasses = {
    sm: "max-w-sm",
    md: "max-w-lg",
    lg: "max-w-2xl",
    xl: "max-w-4xl"
  };

  return (
    <Dialog.Portal>
      <ModalOverlay />
      <Dialog.Content
        ref={ref}
        className={cn(
          "fixed left-1/2 top-1/2 z-50 w-[95vw] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white shadow-lg focus:outline-none",
          sizeClasses[size],
          className
        )}
        {...rest}
      >
        {children}
      </Dialog.Content>
    </Dialog.Portal>
  );
});
ModalContent.displayName = "ModalContent";

const ModalHeader = React.forwardRef<HTMLDivElement, ModalHeaderProps>(({ className, ...rest }, ref) => (
  <div ref={ref} className={cn("px-6 py-4 border-b border-light-grey-200", className)} {...rest} />
));
ModalHeader.displayName = "ModalHeader";

const ModalBody = React.forwardRef<HTMLDivElement, ModalBodyProps>(({ className, ...rest }, ref) => (
  <div ref={ref} className={cn("px-6 py-4", className)} {...rest} />
));
ModalBody.displayName = "ModalBody";

const ModalFooter = React.forwardRef<HTMLDivElement, ModalFooterProps>(({ className, ...rest }, ref) => (
  <div ref={ref} className={cn("px-6 py-4 border-t border-light-grey-200", className)} {...rest} />
));
ModalFooter.displayName = "ModalFooter";

const ModalTitle = React.forwardRef<HTMLHeadingElement, ModalTitleProps>(({ className, ...rest }, ref) => (
  <Dialog.Title ref={ref} className={cn("text-lg font-brand-bold text-inky-blue-500", className)} {...rest} />
));
ModalTitle.displayName = "ModalTitle";

const ModalDescription = React.forwardRef<HTMLParagraphElement, ModalDescriptionProps>(({ className, ...rest }, ref) => (
  <Dialog.Description ref={ref} className={cn("text-sm text-mid-grey-600 mt-1", className)} {...rest} />
));
ModalDescription.displayName = "ModalDescription";

type ModalComponent = React.FC<ModalProps> & {
  Content: typeof ModalContent;
  Header: typeof ModalHeader;
  Body: typeof ModalBody;
  Footer: typeof ModalFooter;
  Title: typeof ModalTitle;
  Description: typeof ModalDescription;
};

export const Modal = Object.assign(ModalRoot, {
  Content: ModalContent,
  Header: ModalHeader,
  Body: ModalBody,
  Footer: ModalFooter,
  Title: ModalTitle,
  Description: ModalDescription,
}) as ModalComponent;

export default Modal;
