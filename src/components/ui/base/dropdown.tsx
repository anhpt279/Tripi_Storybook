import * as React from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';
  // Implementation detail
const dropdownVariants = cva('', {
  variants: {
    width: {
      auto: 'w-auto',
      full: 'w-full',
    },
  },
  defaultVariants: {
    width: 'auto',
  },
});
  // Implementation detail
const dropdownTriggerVariants = cva(
  'flex items-center justify-between gap-2 whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-muted border border-input bg-transparent hover:bg-accent hover:text-accent-foreground disabled:hover:bg-transparent h-9 rounded-md text-sm data-[placeholder]:text-muted-foreground [&>span]:line-clamp-1 px-3 cursor-pointer',
  {
    variants: {
      width: {
        auto: 'w-auto min-w-44',
        full: 'w-full',
      },
      variant: {
        default: '',
        ghost: 'border-transparent hover:border-input',
      },
    },
    defaultVariants: {
      width: 'auto',
      variant: 'default',
    },
  }
);
  // Implementation detail
const dropdownContentVariants = cva(
  'z-50 rounded-md border bg-popover text-popover-foreground shadow-md outline-none duration-300 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top data-[side=left]:slide-in-from-right data-[side=right]:slide-in-from-left data-[side=top]:slide-in-from-bottom',
  {
    variants: {
      size: {
        sm: 'min-w-32',
        md: 'min-w-48',
        lg: 'min-w-64',
        auto: 'w-auto',
        full: 'w-full',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);
  // Implementation detail
const Dropdown = PopoverPrimitive.Root;
const DropdownAnchor = PopoverPrimitive.Anchor;
  // Implementation detail
interface DropdownContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  width?: 'auto' | 'full';
}

const DropdownContainer = React.forwardRef<HTMLDivElement, DropdownContainerProps>(
  ({ className, children, width = 'auto', ...props }, ref) => (
    <div
      ref={ref}
      className={cn(dropdownVariants({ width }), className)}
      {...props}
    >
      {children}
    </div>
  )
);
DropdownContainer.displayName = 'DropdownContainer';
  // Implementation detail
interface DropdownTriggerProps
  extends React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Trigger>,
    VariantProps<typeof dropdownTriggerVariants> {
  placeholder?: string;
  icon?: React.ReactNode;
  suffix?: React.ReactNode;
  asChild?: boolean;
}
  // Implementation detail
const DropdownTrigger = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Trigger>,
  DropdownTriggerProps
>(({ 
  className, 
  children, 
  width = 'auto', 
  variant = 'default',
  placeholder,
  icon,
  suffix,
  asChild = false,
  ...props 
}, ref) => {
  if (asChild) {
    return (
      <PopoverPrimitive.Trigger ref={ref} asChild {...props}>
        {children}
      </PopoverPrimitive.Trigger>
    );
  }

  return (
    <PopoverPrimitive.Trigger
      ref={ref}
      className={cn(dropdownTriggerVariants({ width, variant }), className)}
      {...props}
    >
      <div className="flex items-center gap-2 flex-1 min-w-0">
        {icon && (
          <span className="flex-shrink-0">
            {icon}
          </span>
        )}
        <div className="flex-1 truncate text-left">
          {children || (
            <span className="text-muted-foreground">{placeholder}</span>
          )}
        </div>
      </div>
      {suffix && (
        <div className="flex items-center gap-1">
          {suffix}
        </div>
      )}
    </PopoverPrimitive.Trigger>
  );
});
DropdownTrigger.displayName = 'DropdownTrigger';
  // Implementation detail
interface DropdownContentProps
  extends React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>,
    VariantProps<typeof dropdownContentVariants> {
  hideWhenDetached?: boolean;
  container?: HTMLElement | null;
}
  // Implementation detail
const DropdownContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  DropdownContentProps
>(({ 
  className, 
  children, 
  size = 'md',
  hideWhenDetached = true,
  container,
  align = 'start',
  sideOffset = 4,
  ...props 
}, ref) => (
  <PopoverPrimitive.Portal container={container}>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      hideWhenDetached={hideWhenDetached}
      className={cn(dropdownContentVariants({ size }), className)}
      {...props}
    >
      {children}
    </PopoverPrimitive.Content>
  </PopoverPrimitive.Portal>
));
DropdownContent.displayName = 'DropdownContent';
  // Implementation detail
const dropdownItemVariants = cva(
  'relative flex w-full cursor-pointer select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
  {
    variants: {
      variant: {
        default: '',
        destructive: 'text-destructive focus:text-destructive',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);
  // Implementation detail
interface DropdownItemProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof dropdownItemVariants> {
  disabled?: boolean;
  icon?: React.ReactNode;
  suffix?: React.ReactNode;
}
  // Implementation detail
const DropdownItem = React.forwardRef<HTMLDivElement, DropdownItemProps>(
  ({ className, children, variant, disabled, icon, suffix, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        dropdownItemVariants({ variant }),
        disabled && 'pointer-events-none opacity-50',
        className
      )}
      data-disabled={disabled}
      {...props}
    >
      {icon && (
        <span className="mr-2 flex-shrink-0">
          {icon}
        </span>
      )}
      <span className="flex-1">{children}</span>
      {suffix && (
        <span className="ml-auto flex-shrink-0">
          {suffix}
        </span>
      )}
    </div>
  )
);
DropdownItem.displayName = 'DropdownItem';
  // Implementation detail
const DropdownSeparator = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('-mx-1 my-1 h-px bg-muted', className)}
    {...props}
  />
));
DropdownSeparator.displayName = 'DropdownSeparator';
  // Implementation detail
const DropdownLabel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('px-2 py-1.5 text-sm font-medium', className)}
    {...props}
  />
));
DropdownLabel.displayName = 'DropdownLabel';

export {
  Dropdown,
  DropdownAnchor,
  DropdownContainer,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
  DropdownSeparator,
  DropdownLabel,
  dropdownVariants,
  dropdownTriggerVariants,
  dropdownContentVariants,
  dropdownItemVariants,
};

export type {
  DropdownContainerProps,
  DropdownTriggerProps,
  DropdownContentProps,
  DropdownItemProps,
}; 