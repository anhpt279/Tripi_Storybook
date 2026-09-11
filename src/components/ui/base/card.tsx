import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const cardVariants = cva(
  'w-full rounded-xl border text-card-foreground',
  {
    variants: {
      variant: {
        default: 'border-border bg-card shadow-sm',
        panel: 'overflow-hidden border-border bg-card shadow-sm',
        info: 'border-primary/20 bg-gradient-to-r from-secondary to-accent',
        notice: 'border-primary/30 bg-secondary/60 shadow-sm',
        section: 'border-border bg-card shadow-sm',
        plain: 'border-transparent bg-transparent shadow-none',
      },
      padding: {
        none: '',
        sm: 'p-4',
        default: 'p-6',
        lg: 'p-8',
      },
    },
    defaultVariants: {
      variant: 'default',
      padding: 'default',
    },
  }
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  asChild?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, padding, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardVariants({ variant, padding, className }))}
      {...props}
    />
  )
);
Card.displayName = 'Card';

export { Card, cardVariants };
