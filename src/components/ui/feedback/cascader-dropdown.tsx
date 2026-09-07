import * as React from 'react';
import { useState, useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';
  // Implementation detail
const cascaderDropdownVariants = cva(
  'fixed z-50 rounded-md border bg-popover text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
  {
    variants: {},
    defaultVariants: {},
  }
);
  // Implementation detail
const cascaderColumnVariants = cva(
  'inline-block align-top border-r border-border last:border-r-0 max-h-[200px] overflow-y-auto py-1 min-w-0 w-[160px] flex-shrink-0'
);

interface CascaderDropdownProps extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  triggerRef: React.RefObject<HTMLElement>;
  children: React.ReactNode;
  visibleLevels: number[];
}
  // Implementation detail
const CascaderDropdown: React.FC<CascaderDropdownProps> = ({
  className,
  open,
  onOpenChange,
  triggerRef,
  children,
  visibleLevels,
  ...props
}) => {
  const [panelStyle, setPanelStyle] = useState<React.CSSProperties>({});
  // Implementation detail
  const calculatePanelPosition = useCallback(() => {
    if (!triggerRef.current) return;
    
    const rect = triggerRef.current.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
  // Implementation detail
    const estimatedPanelWidth = visibleLevels.length * 160;
    const maxPanelHeight = 200;
    const spacing = 4; // Text
    
    let left = rect.left;
  // Implementation detail
    if (left + estimatedPanelWidth > viewportWidth - 16) {
      left = Math.max(16, viewportWidth - estimatedPanelWidth - 16);
    }
  // Implementation detail
    const spaceBelow = viewportHeight - rect.bottom - spacing - 16;
    const spaceAbove = rect.top - spacing - 16;
    
    let top: number;
    let maxHeight: number;
    let transform = '';
  // Implementation detail
    if (spaceBelow >= maxPanelHeight || spaceBelow >= spaceAbove) {
  // Implementation detail
      top = rect.bottom + spacing;
      maxHeight = Math.min(maxPanelHeight, spaceBelow);
    } else {
  // Implementation detail
      top = rect.top - spacing;
      maxHeight = Math.min(maxPanelHeight, spaceAbove);
      transform = 'translateY(-100%)';
    }
    
    setPanelStyle({
      left: `${left}px`,
      top: `${top}px`,
      width: `${estimatedPanelWidth}px`,
      maxHeight: `${maxHeight}px`,
      transform,
    });
  }, [visibleLevels.length, triggerRef]);
  // Implementation detail
  useEffect(() => {
    if (open) {
  // Implementation detail
      const timeoutId = setTimeout(() => {
        calculatePanelPosition();
      }, 0);
  // Implementation detail
      const handleResize = () => calculatePanelPosition();
      const handleScroll = () => calculatePanelPosition();
      
      window.addEventListener('resize', handleResize);
      window.addEventListener('scroll', handleScroll, true);
      
      return () => {
        clearTimeout(timeoutId);
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('scroll', handleScroll, true);
      };
    }
  }, [open, calculatePanelPosition]);
  // Implementation detail
  useEffect(() => {
    if (open) {
      calculatePanelPosition();
    }
  }, [open, visibleLevels.length, calculatePanelPosition]);

  if (!open) return null;

  return (
    <>
      {/* Text - Text Portal */}
      {createPortal(
        <div 
          className={cn(cascaderDropdownVariants(), className)}
          style={panelStyle}
          data-state="open"
          {...props}
        >
          <div className="flex overflow-hidden">
            {children}
          </div>
        </div>,
        document.body
      )}

      {/* Render the selected path and available options. */}
      <div
        className="fixed inset-0 z-40"
        onClick={() => onOpenChange(false)}
      />
    </>
  );
};

CascaderDropdown.displayName = 'CascaderDropdown';
  // Implementation detail
const CascaderColumn = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(cascaderColumnVariants(), className)}
    {...props}
  >
    {children}
  </div>
));
CascaderColumn.displayName = 'CascaderColumn';

export {
  CascaderDropdown,
  CascaderColumn,
  cascaderDropdownVariants,
  cascaderColumnVariants,
};

export type { CascaderDropdownProps }; 