import * as React from 'react';
import { useState, useCallback, useMemo } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';
import { cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';
import { 
  CascaderDropdown, 
  CascaderColumn 
} from '../feedback/cascader-dropdown';
  // Implementation detail
const cascaderContainerVariants = cva(
  'relative inline-block',
  {
    variants: {
      width: {
        auto: 'w-auto',
        fill: 'w-full',
      },
    },
    defaultVariants: {
      width: 'auto',
    },
  }
);
  // Implementation detail
const cascaderTriggerVariants = cva(
  'flex items-center justify-between gap-2 whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-muted border border-input bg-transparent hover:bg-accent hover:text-accent-foreground disabled:hover:bg-transparent h-9 rounded-md text-sm data-[placeholder]:text-muted-foreground [&>span]:line-clamp-1 px-3 cursor-pointer',
  {
    variants: {
      width: {
        auto: 'w-auto min-w-[180px]',
        fill: 'w-full',
      },
    },
    defaultVariants: {
      width: 'auto',
    },
  }
);
  // Implementation detail
const cascaderOptionVariants = cva(
  'relative flex cursor-pointer select-none items-center px-3 py-2 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
  {
    variants: {
      selected: {
        true: 'bg-accent text-accent-foreground',
        false: '',
      },
      hasChildren: {
        true: 'pr-8',
        false: '',
      },
    },
    defaultVariants: {
      selected: false,
      hasChildren: false,
    },
  }
);
  // Implementation detail
interface CascaderOption {
  value: string;
  label: string;
  children?: CascaderOption[];
  disabled?: boolean;
}

type CascaderValue = string[];

interface CascaderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  options: CascaderOption[];
  value?: CascaderValue;
  onChange?: (value: CascaderValue, selectedOptions: CascaderOption[]) => void;
  placeholder?: string;
  disabled?: boolean;
  width?: 'auto' | 'fill';
  maxLevel?: 2 | 3;
  allowClear?: boolean;
  /** Cascader option configuration and selection state. */
  changeOnSelect?: boolean;
}
  // Implementation detail
const Cascader: React.FC<CascaderProps> = ({
    className,
    options = [],
    value = [],
    onChange,
    placeholder = 'Please select',
    disabled = false,
    width = 'auto',
    maxLevel = 3,
    allowClear = true,
    changeOnSelect = false,
    ...props
  }) => {
    const [open, setOpen] = useState(false);
    const [activeValue, setActiveValue] = useState<CascaderValue>([]);
    const containerRef = React.useRef<HTMLDivElement>(null);
  // Implementation detail
    React.useEffect(() => {
      setActiveValue(value);
    }, [value]);
  // Implementation detail
    const getOptionsAtLevel = useCallback((level: number): CascaderOption[] => {
      if (level === 0) return options;
      
      let currentOptions = options;
      for (let i = 0; i < level; i++) {
        const selectedValue = activeValue[i];
        if (!selectedValue) return [];
        
        const selectedOption = currentOptions.find(opt => opt.value === selectedValue);
        if (!selectedOption || !selectedOption.children) return [];
        
        currentOptions = selectedOption.children;
      }
      
      return currentOptions;
    }, [options, activeValue]);
  // Implementation detail
    const getSelectedOptions = useCallback((values: CascaderValue): CascaderOption[] => {
      const result: CascaderOption[] = [];
      let currentOptions = options;
      
      for (const value of values) {
        const option = currentOptions.find(opt => opt.value === value);
        if (!option) break;
        
        result.push(option);
        if (!option.children) break;
        currentOptions = option.children;
      }
      
      return result;
    }, [options]);
  // Implementation detail
    const handleOptionClick = useCallback((level: number, option: CascaderOption) => {
      if (option.disabled) return;

      const newValue = [...activeValue.slice(0, level), option.value];
      setActiveValue(newValue);
  // Implementation detail
      if (changeOnSelect) {
        const selectedOptions = getSelectedOptions(newValue);
        onChange?.(newValue, selectedOptions);
  // Implementation detail
        if (level >= maxLevel - 1 || !option.children || option.children.length === 0) {
          setOpen(false);
        }
      } else {
  // Implementation detail
        if (level >= maxLevel - 1 || !option.children || option.children.length === 0) {
          const selectedOptions = getSelectedOptions(newValue);
          onChange?.(newValue, selectedOptions);
          setOpen(false);
        }
      }
    }, [activeValue, maxLevel, onChange, getSelectedOptions, changeOnSelect]);
  // Implementation detail
    const displayText = useMemo(() => {
      if (value.length === 0) return placeholder;
      
      const selectedOptions = getSelectedOptions(value);
      return selectedOptions.map(opt => opt.label).join(' / ');
    }, [value, placeholder, getSelectedOptions]);
  // Implementation detail
    const visibleLevels = useMemo(() => {
      const levels = [];
      for (let i = 0; i < maxLevel; i++) {
        const levelOptions = getOptionsAtLevel(i);
        if (levelOptions.length > 0) {
          levels.push(i);
        } else if (i > 0) {
  // Implementation detail
          break;
        }
      }
      return levels;
    }, [maxLevel, getOptionsAtLevel]);
  // Implementation detail
    const handleClear = useCallback((e: React.MouseEvent) => {
      e.stopPropagation();
      setActiveValue([]);
      onChange?.([], []);
    }, [onChange]);

    return (
      <div
        ref={containerRef}
        className={cn(cascaderContainerVariants({ width }), className)}
        {...props}
      >
        {/* Text */}
        <div
          className={cn(
            cascaderTriggerVariants({ width }),
            disabled && 'cursor-not-allowed opacity-50 bg-muted'
          )}
          onClick={() => !disabled && setOpen(!open)}
        >
          <span className={cn(
            "flex-1 truncate text-left",
            value.length === 0 && "text-muted-foreground"
          )}>
            {displayText}
          </span>
          <div className="flex items-center gap-1">
            {allowClear && value.length > 0 && !disabled && (
              <button
                type="button"
                onClick={handleClear}
                className="flex h-4 w-4 items-center justify-center rounded-sm hover:bg-accent"
              >
                <svg
                  className="h-3 w-3"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            )}
            <ChevronDown className={cn(
              "h-4 w-4 transition-transform duration-200", 
              open && "rotate-180",
              value.length === 0 && "text-muted-foreground"
            )} />
          </div>
        </div>

        {/* Text */}
        <CascaderDropdown
          open={open}
          onOpenChange={setOpen}
          triggerRef={containerRef}
          visibleLevels={visibleLevels}
        >
          {visibleLevels.map((level) => {
            const levelOptions = getOptionsAtLevel(level);
            
            return (
              <CascaderColumn key={level}>
                {levelOptions.map((option) => {
                  const isSelected = activeValue[level] === option.value;
                  const hasChildren = option.children && option.children.length > 0;
                  
                  return (
                    <div
                      key={option.value}
                      className={cn(
                        cascaderOptionVariants({
                          selected: isSelected,
                          hasChildren,
                        }),
                        option.disabled && 'cursor-not-allowed opacity-50'
                      )}
                      onClick={() => handleOptionClick(level, option)}
                    >
                      <span className="flex-1 truncate">{option.label}</span>
                      {hasChildren && (
                        <ChevronRight className="absolute right-2 h-4 w-4" />
                      )}
                    </div>
                  );
                })}
              </CascaderColumn>
            );
          })}
        </CascaderDropdown>
      </div>
    );
  };

Cascader.displayName = 'Cascader';

export { Cascader, cascaderContainerVariants, cascaderTriggerVariants, cascaderOptionVariants };
export type { CascaderProps, CascaderOption, CascaderValue }; 