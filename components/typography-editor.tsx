"use client"

import { useState } from "react"
import { MoreVertical } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface FontEntry {
  id: string
  preview: string
  name: string
  fontFamily: string
  weight: number
  tag: string
}

const initialFonts: FontEntry[] = [
  {
    id: "heading",
    preview: "AaBbCc",
    name: "Heading",
    fontFamily: "Google Font",
    weight: 700,
    tag: "Title",
  },
  {
    id: "body",
    preview: "AaBbCc",
    name: "Body",
    fontFamily: "Google Font",
    weight: 400,
    tag: "Paragraph",
  },
]

export function TypographyEditor() {
  const [fonts] = useState<FontEntry[]>(initialFonts)

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Typography</h3>
      
      <div className="bg-card border border-border rounded-xl p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h4 className="text-base font-medium">Fonts</h4>
          <Button variant="outline" size="sm">
            Add font
          </Button>
        </div>

        {/* Font Entries */}
        <div className="space-y-4">
          {fonts.map((font) => (
            <div
              key={font.id}
              className="flex items-center gap-6 py-4 border-b border-border last:border-0"
            >
              {/* Preview */}
              <div 
                className="text-3xl font-serif w-24 text-muted-foreground"
                style={{ fontWeight: font.weight }}
              >
                {font.preview}
              </div>

              {/* Info */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h5 className="font-medium">{font.name}</h5>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-6 w-6">
                        <MoreVertical className="w-3.5 h-3.5" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                      <DropdownMenuItem>Edit font</DropdownMenuItem>
                      <DropdownMenuItem>Duplicate</DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">Remove</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <p className="text-sm text-muted-foreground">
                  {font.fontFamily} • Weight {font.weight}
                </p>
                <Badge variant="secondary" className="mt-2 text-xs">
                  <span className="w-2 h-2 rounded-full bg-foreground mr-1.5" />
                  {font.tag}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
