import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const listVariants = cva('', {
  variants: {
    variant: {
      default: 'list-none',
      disc: 'list-disc',
      decimal: 'list-decimal',
    },
    spacing: {
      none: '',
      sm: 'space-y-1',
      default: 'space-y-1.5',
    },
  },
  defaultVariants: {
    variant: 'default',
    spacing: 'none',
  },
});

export interface ListProps
  extends React.HTMLAttributes<HTMLUListElement>,
    VariantProps<typeof listVariants> {}

const List = React.forwardRef<HTMLUListElement, ListProps>(
  ({ className, variant, spacing, ...props }, ref) => (
    <ul
      ref={ref}
      className={cn(listVariants({ variant, spacing, className }))}
      {...props}
    />
  )
);
List.displayName = 'List';

const ListItem = React.forwardRef<HTMLLIElement, React.LiHTMLAttributes<HTMLLIElement>>(
  ({ className, ...props }, ref) => <li ref={ref} className={cn(className)} {...props} />
);
ListItem.displayName = 'ListItem';

export { List, ListItem, listVariants };
