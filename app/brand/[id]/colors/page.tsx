"use client"

import { Label } from "@/components/ui/label"

const colorPalette = [
  { name: "Primary", color: "#FF6B35", hex: "#FF6B35" },
  { name: "Secondary", color: "#1A1A1A", hex: "#1A1A1A" },
  { name: "Accent", color: "#95BF47", hex: "#95BF47" },
  { name: "Background", color: "#FFFFFF", hex: "#FFFFFF" },
  { name: "Text", color: "#333333", hex: "#333333" },
]

export default function ColorsPage() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Colors & Styling</h2>
      <div className="bg-card border border-border rounded-xl p-6">
        <div className="space-y-6">
          <div>
            <Label className="text-base font-medium">Brand Colors</Label>
            <p className="text-sm text-muted-foreground mb-4">
              Define your brand&apos;s color palette
            </p>
            <div className="grid grid-cols-5 gap-4">
              {colorPalette.map((item) => (
                <div key={item.name} className="space-y-2">
                  <div
                    className="h-20 rounded-lg border border-border"
                    style={{ backgroundColor: item.color }}
                  />
                  <p className="text-sm font-medium">{item.name}</p>
                  <p className="text-xs text-muted-foreground">{item.hex}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
