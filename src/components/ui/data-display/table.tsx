import * as React from "react"
import { cva, type VariantProps } from 'class-variance-authority'
import { MoreVertical } from 'lucide-react'

import { cn } from "@/lib/utils"
import { Checkbox } from '../data-entry/checkbox'
import { Button } from '../base/button'
import { Tag } from './tags'
import { 
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '../navigation/pagination'

// Context for Table configuration
const TableContext = React.createContext<{
  pageStickyHeader?: boolean
}>({})

const useTableContext = () => React.useContext(TableContext)
  // Implementation detail
const tableVariants = cva(
  "w-full caption-bottom text-sm"
)

const tableWrapperVariants = cva(
  "relative w-full",
  {
    variants: {
      bordered: {
        true: "border border-border rounded-lg",
        false: "",
      },
      scrollable: {
        true: "overflow-auto",
        false: "overflow-visible",
      },
    },
    defaultVariants: {
      bordered: false,
      scrollable: true,
    },
  }
)

const tableHeaderVariants = cva(
  "[&_tr]:border-b"
)

const tableRowVariants = cva(
  "border-b transition-colors hover:bg-muted data-[state=selected]:bg-muted",
  {
    variants: {
      selectable: {
        true: "cursor-pointer",
        false: "",
      },
    },
    defaultVariants: {
      selectable: false,
    },
  }
)

/**
 * Component documentation
 * 
 * Component documentation
 * Component documentation
 * Component documentation
 * 
 * Component documentation
 * Component documentation
 * Component documentation
 * 
 * Component documentation
 * Component documentation
 * Component documentation
 * Component documentation
 */
const tableCellVariants = cva(
  "align-middle [&:has([role=checkbox])]:pr-0",
  {
    variants: {
      variant: {
        default: "h-12 p-4",
        header: "h-12 px-4 text-left font-medium text-muted-foreground bg-muted/50",
        numeric: "h-12 p-4 text-right tabular-nums",
        currency: "h-12 p-4 text-right tabular-nums",
        date: "h-12 p-4 text-left",
        status: "h-12 p-4 text-left",
        action: "h-12 p-4 text-left",
      },
      stickyTop: {
        true: "sticky top-0 z-10 backdrop-blur-md bg-muted/70 border-b-2 border-gray-300 dark:border-gray-600 shadow-lg",
        false: "",
      },
      stickyLeft: {
        true: "sticky left-0 z-20 bg-background transition-colors group-hover:!bg-muted",
        false: "",
      },
      stickyRight: {
        true: "sticky z-20 bg-background transition-colors group-hover:!bg-muted",
        false: "",
      },
      cellWidth: {
        auto: "",           // Text
        xs: "w-16",         // 64px - Text（ID、Text）
        sm: "w-24",         // 96px - short labels and values
        md: "w-32",         // 128px - standard text columns
        lg: "w-48",         // 192px - longer text columns
        xl: "w-64",         // 256px - wide content columns
        fit: "whitespace-nowrap", // Text
      },
    },
    defaultVariants: {
      variant: "default",
      stickyTop: false,
      stickyLeft: false,
      stickyRight: false,
      cellWidth: "auto",
    },
  }
)
  // Implementation detail
export interface TableWrapperProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tableWrapperVariants> {
  /** Text */
  pageStickyHeader?: boolean
}

export interface TableHeaderProps
  extends React.HTMLAttributes<HTMLTableSectionElement> {}

export interface TableRowProps
  extends React.HTMLAttributes<HTMLTableRowElement>,
    VariantProps<typeof tableRowVariants> {
  selected?: boolean
}

export interface EnhancedTableCellProps
  extends Omit<React.TdHTMLAttributes<HTMLTableCellElement>, 'width'>,
    VariantProps<typeof tableCellVariants> {}

export interface EnhancedTableHeadProps
  extends Omit<React.ThHTMLAttributes<HTMLTableHeaderCellElement>, 'width'>,
    VariantProps<typeof tableCellVariants> {}

export interface CheckboxCellProps {
  checked?: boolean
  indeterminate?: boolean
  onCheckedChange?: (checked: boolean) => void
  'aria-label'?: string
  stickyLeft?: boolean
  stickyRight?: boolean
  className?: string
}

export interface ActionCellProps {
  actions?: Array<{
    label: string
    onClick: () => void
    variant?: 'default' | 'destructive'
  }>
  onMenuOpen?: () => void
  stickyLeft?: boolean
  stickyRight?: boolean
  style?: React.CSSProperties
  className?: string
}

export interface TableEmptyStateProps {
  title?: string
  description?: string
  action?: React.ReactNode
  icon?: React.ReactNode
}

export interface CheckboxHeaderCellProps {
  checked?: boolean
  indeterminate?: boolean
  onCheckedChange?: (checked: boolean) => void
  'aria-label'?: string
  stickyLeft?: boolean
  stickyRight?: boolean
}
  // Implementation detail
export interface StatusCellProps {
  status: string
  variant?: 'default' | 'success' | 'warning' | 'destructive' | 'primary'
  cellWidth?: 'auto' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'fit'
  stickyLeft?: boolean
  stickyRight?: boolean
  className?: string
  children?: React.ReactNode
}

export interface ActionButtonsCellProps {
  actions: Array<{
    label: string
    onClick: () => void
    variant?: 'default' | 'destructive'
  }>
  cellWidth?: 'auto' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'fit'
  stickyLeft?: boolean
  stickyRight?: boolean
  style?: React.CSSProperties
  className?: string
}

export interface IdCellProps {
  id: string | number
  cellWidth?: 'auto' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'fit'
  stickyLeft?: boolean
  stickyRight?: boolean
  className?: string
}

export interface NameCellProps {
  name: string
  cellWidth?: 'auto' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'fit'
  stickyLeft?: boolean
  stickyRight?: boolean
  className?: string
}

// TableWrapper Component
const TableWrapper = React.forwardRef<HTMLDivElement, TableWrapperProps>(
  ({ className, bordered, scrollable, pageStickyHeader, children, ...props }, ref) => {
    const contextValue = React.useMemo(() => ({
      pageStickyHeader: !!pageStickyHeader
    }), [pageStickyHeader])
  // Implementation detail
    if (pageStickyHeader) {
      return (
        <TableContext.Provider value={contextValue}>
          <div
            ref={ref}
            className={cn(
              tableWrapperVariants({ 
                bordered, 
                scrollable: false // Text overflow
              }),
              className
            )}
            {...props}
          >
            {children}
          </div>
        </TableContext.Provider>
      )
    }

    return (
      <TableContext.Provider value={contextValue}>
        <div
          ref={ref}
          className={cn(tableWrapperVariants({ bordered, scrollable }), className)}
          {...props}
        >
          {children}
        </div>
      </TableContext.Provider>
    )
  }
)
TableWrapper.displayName = "TableWrapper"
  // Implementation detail
const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <table
    ref={ref}
    className={cn(tableVariants(), className)}
    {...props}
  />
))
Table.displayName = "Table"

const TableHeader = React.forwardRef<HTMLTableSectionElement, TableHeaderProps>(
  ({ className, ...props }, ref) => (
    <thead
      ref={ref}
      className={cn(tableHeaderVariants(), className)}
      {...props}
    />
  )
)
TableHeader.displayName = "TableHeader"

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn("[&_tr:last-child]:border-0", className)}
    {...props}
  />
))
TableBody.displayName = "TableBody"

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(
      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
      className
    )}
    {...props}
  />
))
TableFooter.displayName = "TableFooter"

const TableRow = React.forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ className, selectable, selected, ...props }, ref) => (
    <tr
      ref={ref}
      className={cn(
        tableRowVariants({ selectable }),
        "group", // Text group Text group-hover
        className
      )}
      data-state={selected ? "selected" : undefined}
      {...props}
    />
  )
)
TableRow.displayName = "TableRow"

const TableHead = React.forwardRef<HTMLTableHeaderCellElement, EnhancedTableHeadProps>(
  ({ className, variant = "header", stickyTop, stickyLeft, stickyRight, cellWidth, style, ...props }, ref) => {
    const { pageStickyHeader } = useTableContext()
  // Implementation detail
    const shouldStickyTop = stickyTop || pageStickyHeader
  // Implementation detail
    const headerStyles = "align-middle h-12 p-4 font-medium text-muted-foreground"
  // Implementation detail
    const backgroundStyles = shouldStickyTop ? "bg-muted/50 backdrop-blur-md" : 
                            (stickyLeft || stickyRight) ? "bg-muted/50 backdrop-blur-md" :
                            "bg-muted/50"
  // Implementation detail
    const variantStyles = variant === "numeric" ? "text-right" : 
                         variant === "currency" ? "text-right" :
                         variant === "date" ? "text-left" :
                         variant === "status" ? "text-left" :
                         variant === "action" ? "text-left" :
                         "text-left"
  // Implementation detail
    const widthStyles = cellWidth === "xs" ? "w-16" :
                       cellWidth === "sm" ? "w-24" :
                       cellWidth === "md" ? "w-32" :
                       cellWidth === "lg" ? "w-48" :
                       cellWidth === "xl" ? "w-64" :
                       cellWidth === "fit" ? "w-fit" :
                       ""
  // Implementation detail
    const zIndexClass = (shouldStickyTop && (stickyLeft || stickyRight)) ? "z-30" :
                       shouldStickyTop ? "z-10" :
                       (stickyLeft || stickyRight) ? "z-20" :
                       ""
  // Implementation detail
    const stickyStyles = []
    if (shouldStickyTop) {
      stickyStyles.push("sticky", "top-0", "border-b-2", "border-border", "shadow-lg", "first:rounded-tl-lg", "last:rounded-tr-lg")
    }
    if (stickyLeft) {
      stickyStyles.push("sticky", "left-0", "border-b-2", "border-border")
    }
    if (stickyRight) {
      stickyStyles.push("sticky", "border-b-2", "border-border")
    }
    
    return (
      <th
        ref={ref}
        className={cn(
          headerStyles,
          backgroundStyles,
          variantStyles,
          widthStyles,
          zIndexClass,
          ...stickyStyles,
          className
        )}
        style={style}
        {...props}
      />
    )
  }
)
TableHead.displayName = "TableHead"

const TableCell = React.forwardRef<HTMLTableCellElement, EnhancedTableCellProps>(
  ({ className, variant = "default", stickyTop, stickyLeft, stickyRight, cellWidth, style, ...props }, ref) => {
  // Implementation detail
    const zIndexClass = (stickyTop && (stickyLeft || stickyRight)) ? "z-30" :
                       stickyTop ? "z-10" :
                       (stickyLeft || stickyRight) ? "z-20" :
                       ""
    
    return (
      <td
        ref={ref}
        className={cn(
          tableCellVariants({ variant, stickyTop, stickyLeft, stickyRight, cellWidth }), 
          zIndexClass,
          className
        )}
        style={style}
        {...props}
      />
    )
  }
)
TableCell.displayName = "TableCell"

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn("mt-4 text-sm text-muted-foreground", className)}
    {...props}
  />
))
TableCaption.displayName = "TableCaption"
  // Implementation detail
const CheckboxCell = React.forwardRef<HTMLTableCellElement, CheckboxCellProps>(
  ({ checked, indeterminate, onCheckedChange, 'aria-label': ariaLabel, stickyLeft, stickyRight, className, ...props }, ref) => (
    <TableCell 
      ref={ref} 
      cellWidth="xs" 
      stickyLeft={stickyLeft} 
      stickyRight={stickyRight} 
      className={className}
      {...props}
    >
      <div className="flex items-center justify-center">
        <Checkbox
          checked={checked}
          onCheckedChange={onCheckedChange}
          aria-label={ariaLabel}
          className={cn(
            indeterminate && "data-[state=indeterminate]:bg-primary data-[state=indeterminate]:text-primary-foreground"
          )}
        />
      </div>
    </TableCell>
  )
)
CheckboxCell.displayName = "CheckboxCell"

const CheckboxHeaderCell = React.forwardRef<HTMLTableHeaderCellElement, CheckboxHeaderCellProps>(
  ({ checked, indeterminate, onCheckedChange, 'aria-label': ariaLabel, stickyLeft, stickyRight, ...props }, ref) => (
    <TableHead ref={ref} cellWidth="xs" stickyLeft={stickyLeft} stickyRight={stickyRight} {...props}>
      <div className="flex items-center justify-center">
        <Checkbox
          checked={checked}
          onCheckedChange={onCheckedChange}
          aria-label={ariaLabel}
          className={cn(
            indeterminate && "data-[state=indeterminate]:bg-primary data-[state=indeterminate]:text-primary-foreground"
          )}
        />
      </div>
    </TableHead>
  )
)
CheckboxHeaderCell.displayName = "CheckboxHeaderCell"

const ActionCell = React.forwardRef<HTMLTableCellElement, ActionCellProps>(
  ({ actions = [], onMenuOpen, stickyLeft, stickyRight, style, className, ...props }, ref) => (
    <TableCell 
      ref={ref} 
      variant="action" 
      stickyLeft={stickyLeft} 
      stickyRight={stickyRight} 
      style={style} 
      className={className}
      {...props}
    >
      <div className="flex items-center justify-start gap-2">
        {actions.map((action, index) => (
          <Button
            key={index}
            variant="link"
            size="sm"
            className={cn(
              "h-auto p-0 text-sm font-normal",
              action.variant === 'destructive' && "text-destructive hover:text-destructive"
            )}
            onClick={action.onClick}
          >
            {action.label}
          </Button>
        ))}
        {actions.length > 3 && (
          <Button
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0"
            onClick={onMenuOpen}
          >
            <MoreVertical className="h-4 w-4" />
            <span className="sr-only">Open menu</span>
          </Button>
        )}
      </div>
    </TableCell>
  )
)
ActionCell.displayName = "ActionCell"

const TableEmptyState: React.FC<TableEmptyStateProps> = ({
  title = "No data available",
  description = "There are no records to display.",
  action,
  icon,
}) => (
  <div className="flex flex-col items-center justify-center py-16 text-center">
    {icon && <div className="mb-4 text-muted-foreground">{icon}</div>}
    <h3 className="text-lg font-medium text-foreground mb-2">{title}</h3>
    <p className="text-sm text-muted-foreground mb-4 max-w-sm">{description}</p>
    {action && action}
  </div>
)
TableEmptyState.displayName = "TableEmptyState"
  // Implementation detail
const StatusCell = React.forwardRef<HTMLTableCellElement, StatusCellProps>(
  ({ status, variant, cellWidth = "sm", stickyLeft, stickyRight, className, children, ...props }, ref) => {
  // Implementation detail
    const content = children || (
      <Tag variant={variant || 'default'}>
        {status}
      </Tag>
    )

    return (
      <TableCell 
        ref={ref} 
        variant="status" 
        stickyLeft={stickyLeft} 
        stickyRight={stickyRight} 
        cellWidth={cellWidth}
        className={className}
        {...props}
      >
        {content}
      </TableCell>
    )
  }
)
StatusCell.displayName = "StatusCell"
  // Implementation detail
const ActionButtonsCell = React.forwardRef<HTMLTableCellElement, ActionButtonsCellProps>(
  ({ actions, cellWidth = "md", stickyLeft, stickyRight, style, className, ...props }, ref) => (
    <TableCell 
      ref={ref} 
      variant="action" 
      stickyLeft={stickyLeft} 
      stickyRight={stickyRight} 
      cellWidth={cellWidth}
      style={style} 
      className={className}
      {...props}
    >
      <div className="flex items-center gap-2">
        {actions.map((action, index) => (
          <Button
            key={index}
            variant="link"
            size="sm"
            className={cn(
              "h-auto p-0 text-sm font-normal",
              action.variant === 'destructive' && "text-destructive hover:text-destructive"
            )}
            onClick={action.onClick}
          >
            {action.label}
          </Button>
        ))}
      </div>
    </TableCell>
  )
)
ActionButtonsCell.displayName = "ActionButtonsCell"
  // Implementation detail
const IdCell = React.forwardRef<HTMLTableCellElement, IdCellProps>(
  ({ id, cellWidth = "xs", stickyLeft, stickyRight, className, ...props }, ref) => (
    <TableCell 
      ref={ref} 
      stickyLeft={stickyLeft} 
      stickyRight={stickyRight} 
      cellWidth={cellWidth}
      className={cn("font-mono text-muted-foreground", className)}
      {...props}
    >
      {id}
    </TableCell>
  )
)
IdCell.displayName = "IdCell"
  // Implementation detail
const NameCell = React.forwardRef<HTMLTableCellElement, NameCellProps>(
  ({ name, cellWidth = "md", stickyLeft, stickyRight, className, ...props }, ref) => (
    <TableCell 
      ref={ref} 
      stickyLeft={stickyLeft} 
      stickyRight={stickyRight} 
      cellWidth={cellWidth}
      className={className}
      {...props}
    >
      {name}
    </TableCell>
  )
)
NameCell.displayName = "NameCell"
  // Implementation detail
export interface PaginationState {
  /** Text（Text1Text） */
  current: number
  /** Text */
  pageSize: number
  /** Text */
  total: number
  /** Text */
  showQuickJumper?: boolean
  /** Text */
  showSizeChanger?: boolean
  /** Text */
  pageSizeOptions?: number[]
}

export interface TablePaginationProps {
  /** Text */
  pagination: PaginationState
  /** Text */
  onPageChange: (page: number) => void
  /** Text */
  onPageSizeChange?: (pageSize: number) => void
  /** Text */
  className?: string
  /** Text */
  showTotal?: boolean | ((total: number, range: [number, number]) => string)
}

export interface TableWithPaginationProps {
  /** Text */
  data: any[]
  /** Text */
  columns: any[]
  /** Text */
  pagination?: PaginationState | false
  /** Text */
  onPageChange?: (page: number) => void
  /** Text */
  onPageSizeChange?: (pageSize: number) => void
  /** Text */
  wrapperProps?: TableWrapperProps
  /** Text */
  tableProps?: React.HTMLAttributes<HTMLTableElement>
  /** Text */
  children?: React.ReactNode
}
  // Implementation detail
const TablePagination = React.forwardRef<HTMLDivElement, TablePaginationProps>(
  ({ 
    pagination, 
    onPageChange, 
    onPageSizeChange, 
    className, 
    showTotal = true,
    ...props 
  }, ref) => {
    const { current, pageSize, total } = pagination
    const totalPages = Math.ceil(total / pageSize)
  // Implementation detail
    const startIndex = (current - 1) * pageSize + 1
    const endIndex = Math.min(current * pageSize, total)
  // Implementation detail
    const generatePageNumbers = () => {
      const pages: (number | 'ellipsis')[] = []
      const delta = 2 // Text
      
      if (totalPages <= 7) {
  // Implementation detail
        for (let i = 1; i <= totalPages; i++) {
          pages.push(i)
        }
      } else {
  // Implementation detail
        pages.push(1)
        
        if (current <= delta + 3) {
  // Implementation detail
          for (let i = 2; i <= Math.min(delta + 3, totalPages - 1); i++) {
            pages.push(i)
          }
          if (totalPages > delta + 3) {
            pages.push('ellipsis')
          }
        } else if (current >= totalPages - delta - 2) {
  // Implementation detail
          if (totalPages > delta + 3) {
            pages.push('ellipsis')
          }
          for (let i = Math.max(totalPages - delta - 2, 2); i <= totalPages - 1; i++) {
            pages.push(i)
          }
        } else {
  // Implementation detail
          pages.push('ellipsis')
          for (let i = current - delta; i <= current + delta; i++) {
            pages.push(i)
          }
          pages.push('ellipsis')
        }
        
        if (totalPages > 1) {
          pages.push(totalPages)
        }
      }
      
      return pages
    }
    
    const pageNumbers = generatePageNumbers()
  // Implementation detail
    const renderTotal = () => {
      if (!showTotal) return null
      
      if (typeof showTotal === 'function') {
        return (
          <div className="text-sm text-muted-foreground">
            {showTotal(total, [startIndex, endIndex])}
          </div>
        )
      }
      
      return (
        <div className="text-sm text-muted-foreground">
          Showing {startIndex}-{endIndex} of {total} items
        </div>
      )
    }
    
    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center justify-between",
          className
        )}
        {...props}
      >
        {/* Pagination summary and controls */}
        <div className="flex-shrink-0">
          {renderTotal()}
        </div>
        
        {/* Right：Text */}
        <div className="flex-shrink-0">
          <Pagination>
            <PaginationContent>
              {/* Previous page */}
              <PaginationItem>
                <PaginationPrevious 
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    if (current > 1) {
                      onPageChange(current - 1)
                    }
                  }}
                  className={current <= 1 ? "pointer-events-none opacity-50" : ""}
                />
              </PaginationItem>
              
              {/* Text */}
              {pageNumbers.map((page, index) => (
                <PaginationItem key={index}>
                  {page === 'ellipsis' ? (
                    <PaginationEllipsis />
                  ) : (
                    <PaginationLink
                      href="#"
                      isActive={page === current}
                      onClick={(e) => {
                        e.preventDefault()
                        onPageChange(page as number)
                      }}
                    >
                      {page}
                    </PaginationLink>
                  )}
                </PaginationItem>
              ))}
              
              {/* Next page */}
              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    if (current < totalPages) {
                      onPageChange(current + 1)
                    }
                  }}
                  className={current >= totalPages ? "pointer-events-none opacity-50" : ""}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    )
  }
)
TablePagination.displayName = "TablePagination"
  // Implementation detail
const TableWithPagination = React.forwardRef<HTMLDivElement, TableWithPaginationProps>(
  ({ 
    data,
    columns,
    pagination,
    onPageChange,
    onPageSizeChange,
    wrapperProps,
    tableProps,
    children,
    ...props 
  }, ref) => {
  // Implementation detail
    if (pagination === false) {
      return (
        <div ref={ref} {...props}>
          <TableWrapper {...wrapperProps}>
            <Table {...tableProps}>
              {children}
            </Table>
          </TableWrapper>
        </div>
      )
    }
  // Implementation detail
    const currentPagination = pagination || {
      current: 1,
      pageSize: 10,
      total: data.length,
    }
    
    const handlePageChange = (page: number) => {
      onPageChange?.(page)
    }
    
    const handlePageSizeChange = (pageSize: number) => {
      onPageSizeChange?.(pageSize)
    }
    
    return (
      <div ref={ref} className="space-y-4" {...props}>
        {/* Text */}
        <TableWrapper {...wrapperProps}>
          <Table {...tableProps}>
            {children}
          </Table>
        </TableWrapper>
        
        {/* Text */}
        {pagination && (
          <TablePagination
            pagination={currentPagination}
            onPageChange={handlePageChange}
            onPageSizeChange={handlePageSizeChange}
          />
        )}
      </div>
    )
  }
)
TableWithPagination.displayName = "TableWithPagination"

export {
  TableWrapper,
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
  CheckboxCell,
  CheckboxHeaderCell,
  ActionCell,
  TableEmptyState,
  // Implementation detail
  StatusCell,
  ActionButtonsCell,
  IdCell,
  NameCell,
  TablePagination,
  TableWithPagination,
  tableWrapperVariants,
  tableVariants,
  tableHeaderVariants,
  tableRowVariants,
  tableCellVariants,
}
