"use client"

import { useState } from "react"
import { Palette } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

interface ImportBrandModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ImportBrandModal({ open, onOpenChange }: ImportBrandModalProps) {
  const [url, setUrl] = useState("")

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="items-center text-center">
          <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center mb-2">
            <Palette className="w-7 h-7 text-muted-foreground" />
          </div>
          <DialogTitle className="text-xl font-semibold">
            Import your brand
          </DialogTitle>
          <p className="text-sm text-muted-foreground mt-2">
            Share your URL and we&apos;ll auto-import your logos, images, colors, and fonts
          </p>
        </DialogHeader>

        <div className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="website-url">Website URL</Label>
            <Input
              id="website-url"
              placeholder="your-website.com"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>

          <Button className="w-full bg-neutral-600 hover:bg-neutral-700 text-background">
            Import Brand
          </Button>

          <p className="text-xs text-center text-muted-foreground">
            By clicking &quot;Import,&quot; you represent and warrant that you own or have
            permission to use all content from this website.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
