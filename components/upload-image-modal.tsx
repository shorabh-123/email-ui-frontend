"use client"

import React from "react"

import { useState, useRef } from "react"
import { ImageIcon, Upload, X } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface UploadImageModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onUpload?: (files: File[]) => void
}

export function UploadImageModal({ open, onOpenChange, onUpload }: UploadImageModalProps) {
  const [isDragging, setIsDragging] = useState(false)
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const files = Array.from(e.dataTransfer.files).filter(file => 
      ['image/png', 'image/jpeg', 'image/gif', 'image/webp', 'image/avif'].includes(file.type)
    )
    setSelectedFiles(prev => [...prev, ...files])
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files)
      setSelectedFiles(prev => [...prev, ...files])
    }
  }

  const handleUpload = () => {
    if (onUpload && selectedFiles.length > 0) {
      onUpload(selectedFiles)
    }
    setSelectedFiles([])
    onOpenChange(false)
  }

  const handleCancel = () => {
    setSelectedFiles([])
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg p-0">
        <DialogHeader className="p-4 pb-0">
          <DialogTitle className="flex items-center gap-2 text-base font-medium">
            <ImageIcon className="w-5 h-5" />
            Add Image
          </DialogTitle>
        </DialogHeader>

        <div className="p-4">
          {/* Dropzone */}
          <div
            className={cn(
              "border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors",
              isDragging 
                ? "border-foreground bg-muted" 
                : "border-border hover:border-muted-foreground"
            )}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept="image/png,image/jpeg,image/gif,image/webp,image/avif"
              multiple
              className="hidden"
              onChange={handleFileSelect}
            />
            
            <Upload className="w-8 h-8 mx-auto mb-3 text-muted-foreground" />
            
            <p className="text-sm text-foreground mb-1">
              Click to upload or drag and drop
            </p>
            
            <p className="text-xs text-muted-foreground mb-1">
              PNG, JPG, GIF, WEBP, AVIF up to 5MB each
            </p>
            
            <p className="text-xs text-muted-foreground">
              You can select multiple images at once
            </p>
          </div>

          {/* Selected files preview */}
          {selectedFiles.length > 0 && (
            <div className="mt-4 space-y-2">
              <p className="text-sm text-muted-foreground">
                {selectedFiles.length} file{selectedFiles.length > 1 ? 's' : ''} selected
              </p>
              <div className="flex flex-wrap gap-2">
                {selectedFiles.map((file, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-2 bg-muted px-2 py-1 rounded text-xs"
                  >
                    <span className="truncate max-w-[150px]">{file.name}</span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        setSelectedFiles(prev => prev.filter((_, i) => i !== index))
                      }}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 p-4 pt-0">
          <Button 
            variant="outline" 
            onClick={handleCancel}
            className="bg-transparent"
          >
            Cancel
          </Button>
          <Button 
            onClick={handleUpload}
            className="gap-2 bg-muted-foreground text-background hover:bg-muted-foreground/90"
          >
            <Upload className="w-4 h-4" />
            Upload
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
