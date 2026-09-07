import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { DateRange } from "react-day-picker"

import { cn } from "@/lib/utils"
import { Button } from "../base/button"
import { Calendar } from "./calendar"
import {
  Dropdown,
  DropdownContainer,
  DropdownTrigger,
  DropdownContent,
} from "../base/dropdown"



// Single-date picker props
export interface DatePickerProps
  extends Omit<React.ComponentPropsWithoutRef<typeof Button>, "value" | "onChange" | "variant" | "size" | "tooltip" | "allowNoTooltip"> {
  value?: Date
  onChange?: (date: Date | undefined) => void
  placeholder?: string
  disabled?: boolean
  formatStr?: string
  width?: 'auto' | 'full'
  minWidth?: string
  showDropdowns?: boolean
}

// Date-range picker props
export interface DateRangePickerProps
  extends Omit<React.ComponentPropsWithoutRef<typeof Button>, "value" | "onChange" | "variant" | "size" | "tooltip" | "allowNoTooltip"> {
  value?: DateRange
  onChange?: (range: DateRange | undefined) => void
  placeholder?: string
  disabled?: boolean
  formatStr?: string
  numberOfMonths?: number
  width?: 'auto' | 'full'
  minWidth?: string
  showDropdowns?: boolean
}

// Single-date picker
const DatePicker = React.forwardRef<HTMLButtonElement, DatePickerProps>(
  ({ 
    className, 
    value, 
    onChange, 
    placeholder = "Select a date",
    disabled = false,
    formatStr = "yyyy-MM-dd",
    width = 'auto',
    minWidth = '200px',
    showDropdowns = true,
    ...props 
  }, ref) => {
    const [open, setOpen] = React.useState(false)

    const getWidthClasses = () => {
      const baseClasses = "flex h-9 items-center justify-start gap-2 rounded-md border border-input bg-transparent px-3 text-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-muted cursor-pointer"
      const widthClasses = width === 'auto' ? "w-auto" : "w-full"
      const minWidthStyle = width === 'auto' ? { minWidth } : {}
      
      return {
        className: cn(baseClasses, widthClasses, !value && "text-muted-foreground", className),
        style: minWidthStyle
      }
    }

    const { className: buttonClassName, style } = getWidthClasses()

    return (
      <DropdownContainer width={width}>
        <Dropdown open={open} onOpenChange={setOpen}>
          <DropdownTrigger
            asChild
            width={width}
          >
            <button
              ref={ref}
              type="button"
              className={buttonClassName}
              style={style}
              disabled={disabled}
              {...props}
            >
              <CalendarIcon className="h-4 w-4 flex-shrink-0" />
              <span className="flex-1 truncate text-left">
                {value ? format(value, formatStr) : placeholder}
              </span>
            </button>
          </DropdownTrigger>
          <DropdownContent className="w-auto p-0 overflow-hidden" size="auto" align="start">
            <Calendar
              mode="single"
              selected={value}
              onSelect={(date) => {
                onChange?.(date)
                setOpen(false)
              }}
              initialFocus
              captionLayout={showDropdowns ? "dropdown" : "label"}
            />
          </DropdownContent>
        </Dropdown>
      </DropdownContainer>
    )
  }
)
DatePicker.displayName = "DatePicker"

// Date-range picker
const DateRangePicker = React.forwardRef<HTMLButtonElement, DateRangePickerProps>(
  ({ 
    className, 
    value, 
    onChange, 
    placeholder = "Select a date range",
    disabled = false,
    formatStr = "yyyy-MM-dd",
    numberOfMonths = 2,
    width = 'auto',
    minWidth = '300px',
    showDropdowns = true,
    ...props 
  }, ref) => {
    const [open, setOpen] = React.useState(false)

    const formatRange = (range: DateRange | undefined) => {
      if (!range?.from) return placeholder
      if (!range.to) return `${format(range.from, formatStr)} - Text`
      return `${format(range.from, formatStr)} - ${format(range.to, formatStr)}`
    }

    const getWidthClasses = () => {
      const baseClasses = "flex h-9 items-center justify-start gap-2 rounded-md border border-input bg-transparent px-3 text-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-muted cursor-pointer"
      const widthClasses = width === 'auto' ? "w-auto" : "w-full"
      const minWidthStyle = width === 'auto' ? { minWidth } : {}
      
      return {
        className: cn(baseClasses, widthClasses, !value?.from && "text-muted-foreground", className),
        style: minWidthStyle
      }
    }

    const { className: buttonClassName, style } = getWidthClasses()

    return (
      <DropdownContainer width={width}>
        <Dropdown open={open} onOpenChange={setOpen}>
          <DropdownTrigger
            asChild
            width={width}
          >
            <button
              ref={ref}
              type="button"
              className={buttonClassName}
              style={style}
              disabled={disabled}
              {...props}
            >
              <CalendarIcon className="h-4 w-4 flex-shrink-0" />
              <span className="flex-1 truncate text-left">
                {formatRange(value)}
              </span>
            </button>
          </DropdownTrigger>
          <DropdownContent className="w-auto p-0 overflow-hidden" size="auto" align="start">
            <Calendar
              mode="range"
              selected={value}
              onSelect={onChange}
              numberOfMonths={numberOfMonths}
              initialFocus
              captionLayout={showDropdowns ? "dropdown" : "label"}
            />
          </DropdownContent>
        </Dropdown>
      </DropdownContainer>
    )
  }
)
DateRangePicker.displayName = "DateRangePicker"

export { DatePicker, DateRangePicker } 