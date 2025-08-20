import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/cn";

const avatarStyles = cva(
  "relative flex shrink-0 overflow-hidden rounded-full",
  {
    variants: {
      size: {
        xs: "h-6 w-6",
        sm: "h-8 w-8",
        md: "h-10 w-10",
        lg: "h-12 w-12",
        xl: "h-16 w-16",
        "2xl": "h-20 w-20",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

const avatarImageStyles = cva(
  "aspect-square h-full w-full object-cover"
);

const avatarFallbackStyles = cva(
  "flex h-full w-full items-center justify-center rounded-full bg-light-grey-100 font-brand-medium text-inky-blue-500",
  {
    variants: {
      size: {
        xs: "text-xs",
        sm: "text-xs",
        md: "text-sm",
        lg: "text-base",
        xl: "text-lg",
        "2xl": "text-xl",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export interface AvatarProps
  extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>,
    VariantProps<typeof avatarStyles> {
  /**
   * Image source URL
   */
  src?: string;
  /**
   * Alt text for the image
   */
  alt?: string;
  /**
   * Fallback text (usually initials)
   */
  fallback?: string;
  /**
   * Custom fallback element
   */
  fallbackElement?: React.ReactNode;
  /**
   * Additional className for styling
   */
  className?: string;
}

/**
 * Avatar component for displaying user profile images
 *
 * @example
 * ```tsx
 * <Avatar src="/user.jpg" alt="John Doe" fallback="JD" />
 * <Avatar fallback="AB" size="lg" />
 * ```
 */
export const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  AvatarProps
>(({ className, size, src, alt, fallback, fallbackElement, ...rest }, ref) => {
  // Generate initials from fallback text
  const getInitials = (text: string) => {
    return text
      .split(" ")
      .map(word => word.charAt(0))
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const displayFallback = fallback ? getInitials(fallback) : "?";

  return (
    <AvatarPrimitive.Root
      ref={ref}
      className={cn(avatarStyles({ size }), className)}
      {...rest}
    >
      {src && (
        <AvatarPrimitive.Image
          src={src}
          alt={alt}
          className={avatarImageStyles()}
        />
      )}
      <AvatarPrimitive.Fallback className={avatarFallbackStyles({ size })}>
        {fallbackElement || displayFallback}
      </AvatarPrimitive.Fallback>
    </AvatarPrimitive.Root>
  );
});

Avatar.displayName = "Avatar";

// Avatar Group for displaying multiple avatars
export interface AvatarGroupProps {
  /**
   * Maximum number of avatars to display
   */
  max?: number;
  /**
   * Size of the avatars
   */
  size?: VariantProps<typeof avatarStyles>["size"];
  /**
   * Additional className for styling
   */
  className?: string;
  /**
   * Avatar components to display
   */
  children: React.ReactNode;
}

export const AvatarGroup: React.FC<AvatarGroupProps> = ({
  max = 3,
  size = "md",
  className,
  children
}) => {
  const avatars = React.Children.toArray(children).filter(Boolean);
  const visibleAvatars = avatars.slice(0, max);
  const remainingCount = Math.max(0, avatars.length - max);

  return (
    <div className={cn("flex -space-x-2", className)}>
      {visibleAvatars.map((avatar, index) => (
        <div key={index} className="ring-2 ring-white rounded-full">
          {React.cloneElement(avatar as React.ReactElement, { size })}
        </div>
      ))}
      {remainingCount > 0 && (
        <div className="ring-2 ring-white rounded-full">
          <Avatar
            size={size}
            fallback={`+${remainingCount}`}
            className="bg-mid-grey-200 text-mid-grey-700"
          />
        </div>
      )}
    </div>
  );
};

AvatarGroup.displayName = "AvatarGroup";
