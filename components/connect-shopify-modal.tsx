"use client"

import { useState } from "react"
import { ChevronLeft, ExternalLink } from "lucide-react"
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

interface ConnectShopifyModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ConnectShopifyModal({ open, onOpenChange }: ConnectShopifyModalProps) {
  const [storeUrl, setStoreUrl] = useState("")

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <div>
          <button
            onClick={() => onOpenChange(false)}
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6"
          >
            <ChevronLeft className="w-4 h-4" />
            Back
          </button>

          {/* Icons */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center border border-border">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="7" height="7" fill="currentColor" />
                <rect x="14" y="3" width="7" height="7" fill="currentColor" />
                <rect x="3" y="14" width="7" height="7" fill="currentColor" />
                <rect x="14" y="14" width="7" height="7" fill="currentColor" />
              </svg>
            </div>
            <div className="flex gap-0.5">
              <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground" />
              <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground" />
              <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground" />
            </div>
            <div className="w-14 h-14 rounded-xl bg-[#95BF47] flex items-center justify-center">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                <path d="M15.337 4.013c-.057-.037-.113-.037-.17-.037-.057 0-.738.057-1.135.057-.397 0-.682-.568-1.135-1.022-.453-.454-.906-.568-1.303-.568-.057 0-.113 0-.17.019C10.52 2.235 9.5 2.69 8.366 4.126c-1.135 1.532-2.043 3.745-2.043 3.745s-2.838.454-3.179.511c-.34.057-.397.113-.454.397-.057.284-1.589 12.255-1.589 12.255L12.375 23l6.925-1.475s-3.008-16.113-3.065-16.454c-.057-.34-.227-.454-.34-.511-.113-.057-.511-.284-.567-.284-.057 0-.114-.057-.17-.057l.17-.206zm-3.896 1.249l-.568 1.985s-.625-.284-1.362-.227c-.795.057-1.135.511-1.135.909 0 .965 2.667 1.135 2.667 3.065 0 1.532-1.589 2.497-2.667 2.497-1.817 0-2.724-1.135-2.724-1.135l.511-1.646s.965.795 1.76.795c.511 0 .738-.397.738-.682 0-1.192-2.213-1.135-2.213-2.895 0-1.476 1.079-2.895 3.293-2.895.852 0 1.7.229 1.7.229z" />
              </svg>
            </div>
          </div>

          <div className="text-center mb-6">
            <h2 className="text-xl font-semibold mb-2">Connect Shopify Store</h2>
            <p className="text-sm text-muted-foreground">
              Connect your Shopify store to access product data and customer information
            </p>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="shopify-url">Shopify Store URL</Label>
              <Input
                id="shopify-url"
                placeholder="https://your-store.myshopify.com or https://yourdomain.com"
                value={storeUrl}
                onChange={(e) => setStoreUrl(e.target.value)}
              />
              <p className="text-xs text-muted-foreground">
                Enter your Shopify store URL (myshopify.com or custom domain)
              </p>
            </div>

            <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
              <ExternalLink className="w-4 h-4" />
              How to find your store URL
            </button>

            <div className="flex justify-end">
              <Button className="bg-neutral-600 hover:bg-neutral-700 text-background">
                Connect Store
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
