import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const cardVariants = cva(
  'w-full rounded-xl border text-card-foreground',
  {
    variants: {
      variant: {
        default: 'border-slate-200 bg-white shadow-sm',
        panel: 'overflow-hidden border-slate-200 bg-white shadow-sm',
        info: 'border-blue-100 bg-gradient-to-r from-blue-50 to-indigo-50',
        notice: 'border-blue-200 bg-blue-50/40 shadow-sm',
        section: 'border-slate-200 bg-white shadow-sm',
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
