"use client"

import { useState } from "react"
import { Palette, Pencil, MoreVertical } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface ColorSwatch {
  id: string
  name: string
  hex: string
}

const brandColors: ColorSwatch[] = [
  { id: "primary", name: "Primary", hex: "#F97316" },
  { id: "secondary", name: "Secondary", hex: "#1F2937" },
  { id: "accent", name: "Accent", hex: "#10B981" },
  { id: "background", name: "Background", hex: "#FFFFFF" },
  { id: "text", name: "Text", hex: "#111827" },
]

export function ColorsStylingEditor() {
  const [activeTab, setActiveTab] = useState("themes")

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Colors & Styling</h3>
      
      <div className="bg-card border border-border rounded-xl p-6">
        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-xs">
            <TabsTrigger value="themes" className="gap-2">
              <Palette className="w-4 h-4" />
              Themes
            </TabsTrigger>
            <TabsTrigger value="custom" className="gap-2">
              <Pencil className="w-4 h-4" />
              Custom
            </TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Color Swatches */}
        <div className="mt-6 space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-medium">Brand Colors</h4>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreVertical className="w-4 h-4" />
            </Button>
          </div>
          
          <div className="flex gap-3 flex-wrap">
            {brandColors.map((color) => (
              <div key={color.id} className="flex flex-col items-center gap-2">
                <div
                  className="w-12 h-12 rounded-lg border border-border shadow-sm cursor-pointer hover:scale-105 transition-transform"
                  style={{ backgroundColor: color.hex }}
                />
                <span className="text-xs text-muted-foreground">{color.name}</span>
              </div>
            ))}
            <button className="w-12 h-12 rounded-lg border-2 border-dashed border-border flex items-center justify-center text-muted-foreground hover:border-foreground hover:text-foreground transition-colors">
              <span className="text-xl">+</span>
            </button>
          </div>
        </div>

        {/* Button Styles */}
        <div className="mt-6 space-y-4">
          <h4 className="text-sm font-medium">Button Styles</h4>
          <div className="flex gap-3">
            <Button className="bg-orange-500 hover:bg-orange-600">Primary</Button>
            <Button variant="outline">Secondary</Button>
            <Button variant="ghost">Tertiary</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
