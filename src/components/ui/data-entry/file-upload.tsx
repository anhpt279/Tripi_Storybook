import * as React from "react"
import { Upload, FileText } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "../base/button"
import { Tag } from "../data-display/tags"

export interface FileUploadProps
  extends React.HTMLAttributes<HTMLDivElement> {
  accept?: string
  maxSize?: number // in bytes
  helperText?: string
  onFileSelect?: (file: File | null) => void
  disabled?: boolean
  placeholder?: string
  variant?: 'button' | 'dropzone'
}

const FileUpload = React.forwardRef<HTMLDivElement, FileUploadProps>(
  ({ 
    className,
    variant = "button",
    accept = "*/*",
    maxSize = 10 * 1024 * 1024, // 10MB default
    helperText,
    onFileSelect,
    disabled = false,
    placeholder = "Choose a file",
    ...props 
  }, ref) => {
    const [selectedFile, setSelectedFile] = React.useState<File | null>(null)
    const [error, setError] = React.useState<string>("")
    const [isDragOver, setIsDragOver] = React.useState<boolean>(false)
    const fileInputRef = React.useRef<HTMLInputElement>(null)

    const formatFileSize = (bytes: number): string => {
      if (bytes === 0) return '0 Bytes'
      const k = 1024
      const sizes = ['Bytes', 'KB', 'MB', 'GB']
      const i = Math.floor(Math.log(bytes) / Math.log(k))
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
    }

    const getDropzoneHelpText = (): string => {
      const parts: string[] = []
      
      if (accept !== "*/*") {
        const acceptedFormats = accept.split(',').map(type => type.trim())
        if (acceptedFormats.length <= 3) {
          parts.push(`Supported formats: ${acceptedFormats.join(', ')}`)
        } else {
          parts.push('Supported file formats')
        }
      }
      
      if (maxSize < 50 * 1024 * 1024) { // Show the limit below 50 MB.
        parts.push(`Maximum size: ${formatFileSize(maxSize)}`)
      }
      
      return parts.length > 0 ? parts.join(' · ') : 'Drag and drop a file here or click to browse'
    }

    const validateFile = (file: File): string | null => {
      // Check file size
      if (file.size > maxSize) {
        return `File exceeds the ${formatFileSize(maxSize)} size limit`
      }

      // Check file type if accept is specified and not "*/*"
      if (accept !== "*/*") {
        const acceptedTypes = accept.split(',').map(type => type.trim())
        const fileExtension = '.' + file.name.split('.').pop()?.toLowerCase()
        const mimeType = file.type

        const isValidType = acceptedTypes.some(acceptedType => {
          if (acceptedType.startsWith('.')) {
            return fileExtension === acceptedType.toLowerCase()
          }
          if (acceptedType.includes('*')) {
            const baseType = acceptedType.split('/')[0]
            return mimeType.startsWith(baseType)
          }
          return mimeType === acceptedType
        })

        if (!isValidType) {
          return `Unsupported file type. Accepted formats: ${accept}`
        }
      }

      return null
    }

    const processFile = (file: File | null) => {
      setError("")

      if (file) {
        const validationError = validateFile(file)
        if (validationError) {
          setError(validationError)
          setSelectedFile(null)
          onFileSelect?.(null)
          // Clear the input
          if (fileInputRef.current) {
            fileInputRef.current.value = ""
          }
          return
        }
      }

      setSelectedFile(file)
      onFileSelect?.(file)
    }

    const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0] || null
      processFile(file)
    }

    const handleRemoveFile = () => {
      setSelectedFile(null)
      setError("")
      onFileSelect?.(null)
      // Clear the input
      if (fileInputRef.current) {
        fileInputRef.current.value = ""
      }
    }

    const handleButtonClick = () => {
      fileInputRef.current?.click()
    }

    const handleDragOver = (event: React.DragEvent) => {
      event.preventDefault()
      if (!disabled) {
        setIsDragOver(true)
      }
    }

    const handleDragLeave = (event: React.DragEvent) => {
      event.preventDefault()
      setIsDragOver(false)
    }

    const handleDrop = (event: React.DragEvent) => {
      event.preventDefault()
      setIsDragOver(false)
      
      if (disabled) return

      const files = event.dataTransfer.files
      if (files.length > 0) {
        processFile(files[0])
      }
    }

    const handleDropzoneClick = () => {
      if (!disabled) {
        fileInputRef.current?.click()
      }
    }

    if (variant === "dropzone") {
      return (
        <div
          ref={ref}
          className={cn("flex flex-col gap-2 w-full", className)}
          {...props}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept={accept}
            onChange={handleFileSelect}
            disabled={disabled}
            className="hidden"
            aria-describedby={helperText ? "file-upload-helper" : undefined}
          />
          
          <div
            onClick={handleDropzoneClick}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={cn(
              "flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer transition-colors",
              "hover:bg-muted/50",
              isDragOver && "border-primary bg-primary/5",
              !isDragOver && "border-muted-foreground/25",
              disabled && "cursor-not-allowed opacity-50 bg-muted hover:bg-muted",
              selectedFile && "border-primary/50 bg-primary/5"
            )}
          >
                         <div className="flex flex-col items-center justify-center gap-2">
               <Upload className={cn(
                 "h-8 w-8 text-muted-foreground",
                 isDragOver && "text-primary",
                 selectedFile && "text-primary"
               )} />
               <div className="text-center">
                 <p className={cn(
                   "font-medium text-sm",
                   isDragOver && "text-primary",
                   selectedFile && "text-primary"
                 )}>
                   {selectedFile ? selectedFile.name : (isDragOver ? "Drop file here" : placeholder)}
                 </p>
                 {!selectedFile && (
                   <p className="text-sm text-muted-foreground">
                     {getDropzoneHelpText()}
                   </p>
                 )}
               </div>
             </div>
          </div>

                     {selectedFile && (
             <Tag
               variant="default"
               onRemove={handleRemoveFile}
               className="gap-1 w-fit text-sm"
             >
               <FileText className="h-4 w-4" />
               {selectedFile.name} ({formatFileSize(selectedFile.size)})
             </Tag>
           )}



           {error && (
             <p className="text-sm text-destructive" role="alert">
               {error}
             </p>
           )}
        </div>
      )
    }

    return (
      <div
        ref={ref}
        className={cn("flex flex-col gap-2 w-full", className)}
        {...props}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept={accept}
          onChange={handleFileSelect}
          disabled={disabled}
          className="hidden"
          aria-describedby={helperText ? "file-upload-helper" : undefined}
        />
        
        <Button
          type="button"
          variant="outline"
          onClick={handleButtonClick}
          disabled={disabled}
          className="gap-2 w-fit h-10"
        >
          <Upload className="h-5 w-5" />
          {selectedFile ? "Change file" : placeholder}
        </Button>
        
        {selectedFile && (
          <Tag
            variant="default"
            onRemove={handleRemoveFile}
            className="gap-1 w-fit text-sm"
          >
            <FileText className="h-4 w-4" />
            {selectedFile.name}
          </Tag>
        )}

        {helperText && !selectedFile && (
          <p 
            id="file-upload-helper"
            className="text-sm text-muted-foreground"
          >
            {helperText}
          </p>
        )}

        {error && (
          <p className="text-sm text-destructive" role="alert">
            {error}
          </p>
        )}

        {selectedFile && !error && (
          <p className="text-sm text-muted-foreground">
            Size: {formatFileSize(selectedFile.size)}
          </p>
        )}
      </div>
    )
  }
)

FileUpload.displayName = "FileUpload"

export { FileUpload } 