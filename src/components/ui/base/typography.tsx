import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const typographyVariants = cva('', {
  variants: {
    variant: {
  // Implementation detail
      h1: 'text-2xl font-medium leading-none', // page-level primary heading，Text
      h2: 'text-xl font-medium leading-none',  // secondary heading，Text
      h3: 'text-lg leading-none', // tertiary heading，Text
  // Implementation detail
      body: 'text-sm leading-normal',
  // Implementation detail
      muted: 'text-xs text-muted-foreground leading-none',
    },
  },
  defaultVariants: {
    variant: 'body',
  },
});
  // Implementation detail
const getElementForVariant = (variant: string) => {
  const elementMap: Record<string, string> = {
    h1: 'h1',
    h2: 'h2', 
    h3: 'h3',
    body: 'p',
    muted: 'span',
  };
  return elementMap[variant] || 'span';
};

export interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  asChild?: boolean;
  as?: keyof JSX.IntrinsicElements;
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant = 'body', asChild = false, as, children, ...props }, ref) => {
    const defaultElement = getElementForVariant(variant as string);
    const Comp = asChild ? Slot : (as || defaultElement);
    
    return (
      <Comp
        className={cn(typographyVariants({ variant, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);
Typography.displayName = 'Typography';

export { Typography, typographyVariants }; 