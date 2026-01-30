"use client"

import { Plus, ImageIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function GalleryPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold">Gallery</h2>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          Upload Images
        </Button>
      </div>
      <div className="bg-card border border-border rounded-xl p-6">
        <p className="text-sm text-muted-foreground mb-6">
          Upload product images and brand assets for use in email campaigns
        </p>
        <div className="grid grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="aspect-square rounded-lg border border-dashed border-border flex flex-col items-center justify-center gap-2 text-muted-foreground hover:border-foreground/50 cursor-pointer transition-colors"
            >
              <ImageIcon className="w-8 h-8" />
              <span className="text-xs">Drop image here</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
