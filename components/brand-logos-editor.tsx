"use client"

import { useState } from "react"
import { MoreVertical, Upload, Trash2, Wand2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface LogoSlot {
  id: string
  title: string
  subtitle: string
  image?: string
}

const initialLogos: LogoSlot[] = [
  {
    id: "primary",
    title: "Primary Logo",
    subtitle: "Logo for headers",
    image: "/logos/toolstoday-primary.png",
  },
  {
    id: "secondary",
    title: "Secondary Logo",
    subtitle: "Vertical/stacked version",
    image: "/logos/amana-tool.png",
  },
  {
    id: "favicon",
    title: "Favicon",
    subtitle: "Icon for browser tabs",
    image: "/logos/favicon.png",
  },
]

export function BrandLogosEditor() {
  const [logos] = useState<LogoSlot[]>(initialLogos)

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Brand Logos</h3>
      
      <div className="bg-card border border-border rounded-xl p-6">
        <div className="grid grid-cols-3 gap-6">
          {logos.map((logo) => (
            <div key={logo.id} className="space-y-3">
              {/* Title & Subtitle */}
              <div>
                <h4 className="text-sm font-medium">{logo.title}</h4>
                <p className="text-xs text-muted-foreground">{logo.subtitle}</p>
              </div>

              {/* Logo Preview */}
              <div className="h-28 border border-border rounded-lg flex items-center justify-center bg-muted/20">
                {logo.id === "primary" && (
                  <div className="text-center">
                    <div className="inline-flex items-center gap-0.5 font-bold text-xs tracking-tight">
                      {['T','O','O','L','S','T','O','D','A','Y'].map((letter, i) => (
                        <span key={i} className="border border-foreground px-0.5">{letter}</span>
                      ))}
                    </div>
                    <p className="text-[8px] text-muted-foreground mt-0.5">
                      Your <span className="text-orange-500 font-semibold">source</span> for industrial cutting tools!
                    </p>
                  </div>
                )}
                {logo.id === "secondary" && (
                  <div className="text-center">
                    <span className="text-red-600 font-bold text-sm">▲ Amana</span>
                    <span className="text-red-600 font-bold text-sm ml-0.5">Tool</span>
                    <span className="text-green-600 font-semibold text-[10px] align-super">®</span>
                  </div>
                )}
                {logo.id === "favicon" && (
                  <div className="w-10 h-10 bg-orange-500 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-lg">T</span>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="icon" className="h-9 w-9 bg-transparent">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    <DropdownMenuItem className="gap-2">
                      <Wand2 className="w-4 h-4" />
                      Remove background
                    </DropdownMenuItem>
                    <DropdownMenuItem>Apply to all positions</DropdownMenuItem>
                    <DropdownMenuItem>Use as secondary logo</DropdownMenuItem>
                    <DropdownMenuItem>Use as favicon</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button variant="outline" size="icon" className="h-9 w-9 bg-transparent">
                  <Upload className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon" className="h-9 w-9 bg-transparent">
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
