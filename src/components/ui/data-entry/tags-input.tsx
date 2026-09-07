import * as React from "react"
import { cn } from "@/lib/utils"
import { Tag } from "../data-display/tags"

export interface TagsInputProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  value: string[]
  onChange: (tags: string[]) => void
  placeholder?: string
  disabled?: boolean
  maxTags?: number
  duplicateCheck?: boolean
  onTagAdd?: (tag: string) => void
  onTagRemove?: (tag: string, index: number) => void
}

const TagsInput = React.forwardRef<HTMLDivElement, TagsInputProps>(
  ({ 
    className, 
    value, 
    onChange, 
    placeholder = "Add tags separated by commas...",
    disabled = false,
    maxTags,
    duplicateCheck = true,
    onTagAdd,
    onTagRemove,
    ...props 
  }, ref) => {
    const [inputValue, setInputValue] = React.useState("")
    const [isComposing, setIsComposing] = React.useState(false)
    const inputRef = React.useRef<HTMLInputElement>(null)

    const addTag = (tagText: string) => {
      const trimmedTag = tagText.trim()
      
      if (!trimmedTag) return
      
      // Respect the maximum tag count.
      if (maxTags && value.length >= maxTags) return
      
      // Skip duplicate tags when duplicate checking is enabled.
      if (duplicateCheck && value.includes(trimmedTag)) return
      
      const newTags = [...value, trimmedTag]
      onChange(newTags)
      onTagAdd?.(trimmedTag)
      setInputValue("")
    }

    // Parse several tags entered at once.
    const addMultipleTags = (text: string) => {
      // Support whitespace and comma separators.
      const separators = /[\s、，,]+/
      const tags = text.split(separators).filter(tag => tag.trim())
      
      // Keep only tags that satisfy the current constraints.
      const newValidTags: string[] = []
      let currentLength = value.length
      
      tags.forEach(tag => {
        const trimmedTag = tag.trim()
        if (trimmedTag && 
            (!maxTags || currentLength < maxTags) && 
            (!duplicateCheck || (!value.includes(trimmedTag) && !newValidTags.includes(trimmedTag)))) {
          newValidTags.push(trimmedTag)
          currentLength++
        }
      })
      
      // Add all valid tags in one update.
      if (newValidTags.length > 0) {
        const newTags = [...value, ...newValidTags]
        onChange(newTags)
        newValidTags.forEach(tag => onTagAdd?.(tag))
      }
      
      setInputValue("")
    }

    const removeTag = (index: number) => {
      const tagToRemove = value[index]
      const newTags = value.filter((_, i) => i !== index)
      onChange(newTags)
      onTagRemove?.(tagToRemove, index)
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
  // Implementation detail
      if (isComposing) return
      
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault()
        addTag(inputValue)
      } else if (e.key === "Backspace" && !inputValue && value.length > 0) {
  // Implementation detail
        removeTag(value.length - 1)
      }
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value
  // Implementation detail
      const hasSeparator = /[、，,]/.test(newValue)
      
      if (hasSeparator) {
  // Implementation detail
        addMultipleTags(newValue)
      } else {
        setInputValue(newValue)
      }
    }

    const handleCompositionStart = () => {
      setIsComposing(true)
    }

    const handleCompositionEnd = () => {
      setIsComposing(false)
    }

    const handleContainerClick = () => {
      inputRef.current?.focus()
    }

    return (
      <div
        ref={ref}
        className={cn(
          "flex min-h-9 w-full flex-wrap gap-1 rounded-md border border-input bg-transparent px-3 py-1 text-sm transition-colors placeholder:text-muted-foreground focus-within:ring-1 focus-within:ring-ring disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-muted",
          className
        )}
        onClick={handleContainerClick}
        {...props}
      >
        {/* Text */}
        {value.map((tag, index) => (
          <Tag
            key={index}
            variant="default"
            removable
            onRemove={() => removeTag(index)}
            className="shrink-0"
          >
            {tag}
          </Tag>
        ))}
        
        {/* Text */}
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onCompositionStart={handleCompositionStart}
          onCompositionEnd={handleCompositionEnd}
          placeholder={value.length === 0 ? placeholder : ""}
          disabled={disabled || (maxTags ? value.length >= maxTags : false)}
          className="flex-1 min-w-0 border-0 bg-transparent outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed"
        />
      </div>
    )
  }
)

TagsInput.displayName = "TagsInput"

export { TagsInput } 