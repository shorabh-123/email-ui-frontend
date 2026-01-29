"use client"

import { useState } from "react"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog"

interface ShopifyConnectModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ShopifyConnectModal({ open, onOpenChange }: ShopifyConnectModalProps) {
  const [storeUrl, setStoreUrl] = useState("")

  const handleConnect = () => {
    // Handle store connection logic
    console.log("Connecting to:", storeUrl)
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg p-0 gap-0" showCloseButton={true}>
        {/* Header with Back button */}
        <div className="p-4 pb-0">
          <DialogClose asChild>
            <button className="flex items-center gap-2 text-sm text-foreground hover:text-foreground/80 transition-colors">
              <ArrowLeft className="size-4" />
              Back
            </button>
          </DialogClose>
        </div>

        {/* Content */}
        <div className="px-6 py-8">
          {/* Logo Icons */}
          <div className="flex items-center justify-center gap-3 mb-6">
            {/* App Logo */}
            <div className="size-16 rounded-xl bg-foreground flex items-center justify-center">
              <svg className="size-8 text-background" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M9 9h6v6H9z" />
              </svg>
            </div>

            {/* Dots */}
            <div className="flex items-center gap-1">
              <div className="size-1.5 rounded-full bg-muted-foreground/40" />
              <div className="size-1.5 rounded-full bg-muted-foreground/40" />
              <div className="size-1.5 rounded-full bg-muted-foreground/40" />
            </div>

            {/* Shopify Logo */}
            <div className="size-16 rounded-xl bg-[#95BF47]/10 flex items-center justify-center">
              <svg className="size-10" viewBox="0 0 109.5 124.5" fill="none">
                <path d="M95.9 23.9c-.1-.6-.6-1-1.1-1-.5 0-9.3-.2-9.3-.2s-7.4-7.2-8.1-7.9c-.7-.7-2.2-.5-2.7-.3-.1 0-1.5.5-4 1.2-2.4-6.9-6.6-13.2-14-13.2h-.6c-2.1-2.7-4.7-4-6.9-4C32.3-1.5 24 21.1 21.5 31.7c-6.5 2-11.1 3.4-11.6 3.6-3.6 1.1-3.7 1.2-4.2 4.6-.4 2.5-9.7 74.6-9.7 74.6l72.8 13.6 39.4-8.5S96 24.5 95.9 23.9zM67.2 16.8l-6.5 2c0-1.8 0-4.2-.4-6.9 4.1.8 6.2 3.4 6.9 4.9zm-10.9 3.3l-14 4.3c1.4-5.2 3.9-10.4 8.7-13.8 1.9 1.1 3.6 2.9 4.7 5.2.5.9.5 2.8.6 4.3zM49.1 4.5c1.1 0 2.2.4 3.2 1.1-6.3 3-10.4 10.3-11.9 19.4l-10.8 3.3C32.3 18.7 39.1 4.5 49.1 4.5z" fill="#95BF47"/>
                <path d="M94.8 22.9c-.5 0-9.3-.2-9.3-.2s-7.4-7.2-8.1-7.9c-.3-.3-.6-.4-1-.4l-5.6 114.1 39.4-8.5S96 24.5 95.9 23.9c-.1-.6-.6-1-1.1-1z" fill="#5E8E3E"/>
                <path d="M57.6 39.9l-4.4 13.1s-3.8-2.1-8.5-2.1c-6.9 0-7.2 4.3-7.2 5.4 0 5.9 15.5 8.2 15.5 22.1 0 10.9-6.9 18-16.2 18-11.2 0-16.9-6.9-16.9-6.9l3-9.9s5.9 5.1 10.9 5.1c3.3 0 4.6-2.6 4.6-4.5 0-7.8-12.7-8.1-12.7-20.8 0-10.7 7.7-21.1 23.3-21.1 5.9.1 8.6 1.6 8.6 1.6z" fill="#fff"/>
              </svg>
            </div>
          </div>

          {/* Title & Description */}
          <div className="text-center mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-2">
              Connect Shopify Store
            </h2>
            <p className="text-sm text-muted-foreground">
              Connect your Shopify store to access product data and customer information
            </p>
          </div>

          {/* Form */}
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                Shopify Store URL
              </label>
              <Input
                type="url"
                placeholder="https://your-store.myshopify.com or https://yourdomain.com"
                value={storeUrl}
                onChange={(e) => setStoreUrl(e.target.value)}
                className="h-11"
              />
              <p className="text-xs text-muted-foreground">
                Enter your Shopify store URL (myshopify.com or custom domain)
              </p>
            </div>

            {/* Help Link */}
            <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors w-full p-3 rounded-lg border border-border hover:bg-muted/50">
              <ExternalLink className="size-4" />
              How to find your store URL
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end p-4 pt-0">
          <Button 
            onClick={handleConnect}
            className="bg-[#5E8E3E] hover:bg-[#4a7331] text-white"
          >
            Connect Store
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
