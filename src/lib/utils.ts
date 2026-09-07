import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { useEffect, useState, useCallback } from 'react';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// PageContainer Text
export type PageContainerVariant = 'full' | 'centered';

// Responsive sidebar Hook
export function useResponsiveSidebar(
  pageVariant: PageContainerVariant = 'full', 
  customBreakpoint?: number
) {
  const [collapsed, setCollapsed] = useState(false);
  const [isAutoCollapsed, setIsAutoCollapsed] = useState(false);

  // Debounce function
  const debounce = useCallback((func: Function, delay: number) => {
    let timeoutId: NodeJS.Timeout;
    return (...args: any[]) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func.apply(null, args), delay);
    };
  }, []);

  // Text
  const getBreakpoint = useCallback(() => {
    if (customBreakpoint) return customBreakpoint;
    
    const sidebarWidth = 256; // w-64
    const outerPadding = 16;  // p-2 * 2
    
    if (pageVariant === 'full') {
      // full variant：max-w-[1440px] mx-auto px-8
      // Text 1440px，Text
      const practicalContentWidth = 1000; // Text
      const innerPadding = 64; // px-8 * 2
      const buffer = 32; // Text，Text
      return sidebarWidth + practicalContentWidth + innerPadding + outerPadding + buffer;
      // 256 + 1000 + 64 + 16 + 32 = 1368px
    } else {
      // centered variant：w-[768px] max-w-[90vw] mx-auto
      // 768px Text，Text
      const fixedContentWidth = 768;
      const buffer = 80; // Text，Text
      return sidebarWidth + fixedContentWidth + outerPadding + buffer;
      // 256 + 768 + 16 + 80 = 1120px
    }
  }, [pageVariant, customBreakpoint]);

  useEffect(() => {
    const breakpoint = getBreakpoint();
    
    const checkScreenSize = () => {
      const shouldAutoCollapse = window.innerWidth < breakpoint;
      
      if (shouldAutoCollapse && !isAutoCollapsed) {
        // Text，Text
        setIsAutoCollapsed(true);
        setCollapsed(true);
      } else if (!shouldAutoCollapse && isAutoCollapsed) {
        // Text，Text
        setIsAutoCollapsed(false);
        setCollapsed(false);
      }
    };

    // Text resize Text
    const debouncedCheckScreenSize = debounce(checkScreenSize, 100);

    // Text
    checkScreenSize();

    // Text
    window.addEventListener('resize', debouncedCheckScreenSize);

    return () => {
      window.removeEventListener('resize', debouncedCheckScreenSize);
    };
  }, [isAutoCollapsed, debounce, getBreakpoint]);

  // Text
  const toggleCollapsed = () => {
    if (!isAutoCollapsed) {
      setCollapsed(!collapsed);
    }
  };

  return {
    collapsed,
    isAutoCollapsed,
    onCollapsedChange: toggleCollapsed,
  };
}
