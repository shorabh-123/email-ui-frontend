"use client"

import { useState } from "react"
import { MoreVertical } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface BrandCardProps {
  name: string
  category: string
  description: string
  logoText?: string
  logoSubtext?: string
  onEdit?: () => void
}

export function BrandCard({
  name,
  category,
  description,
  logoText,
  logoSubtext,
  onEdit,
}: BrandCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden">
      {/* Logo Area */}
      <div
        className="relative h-24 bg-muted/50 flex items-center justify-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="text-center px-3">
          {logoText ? (
            <>
              <div className="text-sm font-bold tracking-tight text-foreground border border-foreground px-1.5 py-0.5 inline-block">
                {logoText}
              </div>
              {logoSubtext && (
                <div className="text-[9px] text-muted-foreground mt-0.5">
                  Your <span className="text-orange-500 font-semibold">source</span> {logoSubtext}
                </div>
              )}
            </>
          ) : (
            <div className="text-4xl font-bold tracking-tighter text-muted-foreground/40 lowercase">
              {name}
            </div>
          )}
        </div>

        {/* Edit Button Overlay */}
        {isHovered && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/10">
            <Button
              variant="default"
              size="sm"
              className="bg-foreground text-background hover:bg-foreground/90"
              onClick={onEdit}
            >
              Edit
            </Button>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-3">
        <h3 className="font-medium text-sm text-foreground mb-1.5">{name}</h3>

        <Badge variant="secondary" className="mb-1.5 font-normal text-[10px] px-1.5 py-0 h-5">
          {category}
        </Badge>

        <p className="text-[11px] text-muted-foreground line-clamp-2 leading-relaxed">{description}</p>
      </div>
    </div>
  )
}
