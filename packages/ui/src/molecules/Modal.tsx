import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/cn";
import { CloseIcon } from "../primitives/Icon";

const modalOverlayStyles = cva(
  "fixed inset-0 z-50 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
);

const modalContentStyles = cva(
  "fixed left-1/2 top-1/2 z-50 w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-lg",
  {
    variants: {
      size: {
        sm: "max-w-md",
        md: "max-w-lg",
        lg: "max-w-2xl",
        xl: "max-w-4xl",
        full: "max-w-[95vw] h-[95vh]",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export interface ModalProps
  extends React.ComponentPropsWithoutRef<typeof Dialog.Root>,
    VariantProps<typeof modalContentStyles> {
  /**
   * Whether clicking the overlay closes the modal
   */
  closeOnOverlay?: boolean;
}

export interface ModalContentProps
  extends React.ComponentPropsWithoutRef<typeof Dialog.Content>,
    VariantProps<typeof modalContentStyles> {}

export type ModalHeaderProps = React.HTMLAttributes<HTMLDivElement>;
export type ModalBodyProps = React.HTMLAttributes<HTMLDivElement>;
export type ModalFooterProps = React.HTMLAttributes<HTMLDivElement>;
export type ModalTitleProps = React.ComponentPropsWithoutRef<typeof Dialog.Title>;
export type ModalDescriptionProps = React.ComponentPropsWithoutRef<typeof Dialog.Description>;

/**
 * Modal component for displaying content in an overlay
 *
 * @example
 * ```tsx
 * <Modal open={open} onOpenChange={setOpen}>
 *   <Modal.Content>
 *     <Modal.Header>
 *       <Modal.Title>Confirm Action</Modal.Title>
 *       <Modal.Description>Are you sure you want to continue?</Modal.Description>
 *     </Modal.Header>
 *     <Modal.Body>
 *       Content goes here
 *     </Modal.Body>
 *     <Modal.Footer>
 *       <Button onClick={() => setOpen(false)}>Cancel</Button>
 *       <Button intent="primary">Confirm</Button>
 *     </Modal.Footer>
 *   </Modal.Content>
 * </Modal>
 * ```
 */
export const Modal = ({ closeOnOverlay = true, ...props }: ModalProps) => {
  return <Dialog.Root {...props} />;
};

export const ModalTrigger = Dialog.Trigger;

export const ModalContent = React.forwardRef<
  React.ElementRef<typeof Dialog.Content>,
  ModalContentProps
>(({ className, size, children, ...rest }, ref) => (
  <Dialog.Portal>
    <Dialog.Overlay className={modalOverlayStyles()} />
    <Dialog.Content
      ref={ref}
      className={cn(modalContentStyles({ size }), className)}
      {...rest}
    >
      {children}
      <Dialog.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none">
        <CloseIcon size="sm" decorative={false} />
        <span className="sr-only">Close</span>
      </Dialog.Close>
    </Dialog.Content>
  </Dialog.Portal>
));

ModalContent.displayName = "ModalContent";

export const ModalHeader = React.forwardRef<HTMLDivElement, ModalHeaderProps>(
  ({ className, ...rest }, ref) => (
    <div
      ref={ref}
      className={cn("flex flex-col space-y-1.5 text-center sm:text-left pb-4 border-b border-light-grey-200", className)}
      {...rest}
    />
  )
);

ModalHeader.displayName = "ModalHeader";

export const ModalBody = React.forwardRef<HTMLDivElement, ModalBodyProps>(
  ({ className, ...rest }, ref) => (
    <div
      ref={ref}
      className={cn("py-4", className)}
      {...rest}
    />
  )
);

ModalBody.displayName = "ModalBody";

export const ModalFooter = React.forwardRef<HTMLDivElement, ModalFooterProps>(
  ({ className, ...rest }, ref) => (
    <div
      ref={ref}
      className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 pt-4 border-t border-light-grey-200", className)}
      {...rest}
    />
  )
);

ModalFooter.displayName = "ModalFooter";

export const ModalTitle = React.forwardRef<
  React.ElementRef<typeof Dialog.Title>,
  ModalTitleProps
>(({ className, ...rest }, ref) => (
  <Dialog.Title
    ref={ref}
    className={cn("text-lg font-brand-bold text-inky-blue-500", className)}
    {...rest}
  />
));

ModalTitle.displayName = "ModalTitle";

export const ModalDescription = React.forwardRef<
  React.ElementRef<typeof Dialog.Description>,
  ModalDescriptionProps
>(({ className, ...rest }, ref) => (
  <Dialog.Description
    ref={ref}
    className={cn("text-sm text-mid-grey-600", className)}
    {...rest}
  />
));

ModalDescription.displayName = "ModalDescription";

// Attach sub-components to Modal
Modal.Trigger = ModalTrigger;
Modal.Content = ModalContent;
Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
Modal.Title = ModalTitle;
Modal.Description = ModalDescription;
