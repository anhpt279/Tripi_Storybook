import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { ArrowLeft } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '../base/button';
import { Typography } from '../base/typography';

// PageHeader main container - remove default spacing
const pageHeaderVariants = cva(
  'w-full h-full bg-background flex flex-col',
  {
    variants: {},
    defaultVariants: {},
  }
);

// PageHeaderHeader header component
const pageHeaderHeaderVariants = cva(
  'w-full',
  {
    variants: {
      variant: {
        'title-only': 'space-y-0',
        'title-with-actions': 'space-y-0',
        'title-with-toolbar': 'space-y-6',
      },
    },
    defaultVariants: {
      variant: 'title-only',
    },
  }
);
  // Implementation detail
const pageHeaderContentVariants = cva(
  'w-full flex-1',
  {
    variants: {},
    defaultVariants: {},
  }
);

// type definitions
export interface PageHeaderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof pageHeaderVariants> {}

export interface PageHeaderHeaderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof pageHeaderHeaderVariants> {}

export interface PageHeaderContentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof pageHeaderContentVariants> {}

export interface PageHeaderBackProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

export interface PageHeaderTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement> {}

export interface PageHeaderActionsProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export interface PageHeaderToolbarProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export interface PageHeaderFiltersProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export interface PageHeaderToolbarActionsProps
  extends React.HTMLAttributes<HTMLDivElement> {}
  // Implementation detail
export interface PageHeaderWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  // Implementation detail
  variant: 'title-only' | 'title-with-actions' | 'title-with-toolbar';
  title: string;
  // Implementation detail
  showBack?: boolean;
  onBackClick?: () => void;
  // Implementation detail
  actions?: React.ReactNode;
  // Implementation detail
  filters?: React.ReactNode;
  toolbarActions?: React.ReactNode;
  // Implementation detail
  containerClassName?: string;
  headerClassName?: string;
}
  // Implementation detail
const PageHeader = React.forwardRef<HTMLDivElement, PageHeaderProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(pageHeaderVariants({ className }))}
        {...props}
      />
    );
  }
);
PageHeader.displayName = 'PageHeader';

// header component
const PageHeaderHeader = React.forwardRef<HTMLDivElement, PageHeaderHeaderProps>(
  ({ className, variant, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(pageHeaderHeaderVariants({ variant, className }))}
        {...props}
      >
        {children}
      </div>
    );
  }
);
PageHeaderHeader.displayName = 'PageHeaderHeader';
  // Implementation detail
const PageHeaderBack = React.forwardRef<HTMLButtonElement, PageHeaderBackProps>(
  ({ className, asChild = false, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        variant="ghost"
        size="sm-icon"
        allowNoTooltip={true}
        className={cn('mr-2', className)}
        asChild={asChild}
        {...props}
      >
        <ArrowLeft className="h-4 w-4" />
      </Button>
    );
  }
);
PageHeaderBack.displayName = 'PageHeaderBack';
  // Implementation detail
const PageHeaderTitle = React.forwardRef<HTMLHeadingElement, PageHeaderTitleProps>(
  ({ className, ...props }, ref) => {
  // Implementation detail
    const { color, ...restProps } = props as any;
    
    return (
      <Typography
        ref={ref as React.Ref<HTMLElement>}
        variant="h1"
        className={cn('text-foreground', className)}
        as="h1"
        {...restProps}
      />
    );
  }
);
PageHeaderTitle.displayName = 'PageHeaderTitle';
  // Implementation detail
const PageHeaderActions = React.forwardRef<HTMLDivElement, PageHeaderActionsProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('flex items-center gap-2', className)}
        {...props}
      />
    );
  }
);
PageHeaderActions.displayName = 'PageHeaderActions';
  // Implementation detail
const PageHeaderToolbar = React.forwardRef<HTMLDivElement, PageHeaderToolbarProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('flex items-center justify-between gap-4', className)}
        {...props}
      />
    );
  }
);
PageHeaderToolbar.displayName = 'PageHeaderToolbar';
  // Implementation detail
const PageHeaderFilters = React.forwardRef<HTMLDivElement, PageHeaderFiltersProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('flex items-center gap-2', className)}
        {...props}
      />
    );
  }
);
PageHeaderFilters.displayName = 'PageHeaderFilters';
  // Implementation detail
const PageHeaderToolbarActions = React.forwardRef<HTMLDivElement, PageHeaderToolbarActionsProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('flex items-center gap-2', className)}
        {...props}
      />
    );
  }
);
PageHeaderToolbarActions.displayName = 'PageHeaderToolbarActions';
  // Implementation detail
const PageHeaderContent = React.forwardRef<HTMLDivElement, PageHeaderContentProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(pageHeaderContentVariants({ className }))}
        {...props}
      />
    );
  }
);
PageHeaderContent.displayName = 'PageHeaderContent';
  // Implementation detail
const PageHeaderTitleRow = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('flex items-center justify-between', className)}
        {...props}
      />
    );
  }
);
PageHeaderTitleRow.displayName = 'PageHeaderTitleRow';

const PageHeaderTitleSection = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('flex items-center', className)}
        {...props}
      />
    );
  }
);
PageHeaderTitleSection.displayName = 'PageHeaderTitleSection';
  // Implementation detail
const PageHeaderWrapper = React.forwardRef<HTMLDivElement, PageHeaderWrapperProps>(
  ({ 
    variant, 
    title, 
    showBack = false, 
    onBackClick,
    actions,
    filters,
    toolbarActions,
    containerClassName,
    headerClassName,
    className,
    ...props 
  }, ref) => {
  // Implementation detail
    const shouldShowFirstRowActions = variant !== 'title-with-toolbar' || !filters;
    
    return (
      <div 
        ref={ref}
        className={cn('mb-6', containerClassName, className)}
        {...props}
      >
        <PageHeaderHeader 
          variant={variant} 
          className={headerClassName}
        >
          <PageHeaderTitleRow>
            <PageHeaderTitleSection>
              {showBack && (
                <PageHeaderBack onClick={onBackClick} />
              )}
              <PageHeaderTitle>{title}</PageHeaderTitle>
            </PageHeaderTitleSection>
            {shouldShowFirstRowActions && actions && (
              <PageHeaderActions>
                {actions}
              </PageHeaderActions>
            )}
          </PageHeaderTitleRow>
          
          {variant === 'title-with-toolbar' && (
            <PageHeaderToolbar>
              {filters && (
                <PageHeaderFilters>
                  {filters}
                </PageHeaderFilters>
              )}
              {toolbarActions && (
                <PageHeaderToolbarActions>
                  {toolbarActions}
                </PageHeaderToolbarActions>
              )}
            </PageHeaderToolbar>
          )}
        </PageHeaderHeader>
      </div>
    );
  }
);
PageHeaderWrapper.displayName = 'PageHeaderWrapper';

export {
  PageHeader,
  PageHeaderHeader,
  PageHeaderBack,
  PageHeaderTitle,
  PageHeaderActions,
  PageHeaderToolbar,
  PageHeaderFilters,
  PageHeaderToolbarActions,
  PageHeaderContent,
  PageHeaderTitleRow,
  PageHeaderTitleSection,
  PageHeaderWrapper,
  pageHeaderVariants,
  pageHeaderHeaderVariants,
  pageHeaderContentVariants,
}; 