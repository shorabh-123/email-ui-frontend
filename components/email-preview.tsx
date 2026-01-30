"use client"

import { Instagram, Music2, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"

interface EmailPreviewProps {
  title?: string
  subtitle?: string
  ctaText?: string
  brandName?: string
}

export function EmailPreview({
  title = "Welcome to ToolsToday!",
  subtitle = "We're excited to have you here. Let's get you started on your journey with us.",
  ctaText = "Get Started",
  brandName = "Toolstoday",
}: EmailPreviewProps) {
  return (
    <div className="space-y-4">
      {/* What's Next Card */}
      <div className="bg-background rounded-lg border border-border p-4">
        <h3 className="font-semibold mb-2">What&apos;s Next</h3>
        <p className="text-sm text-muted-foreground mb-3">
          Explore your dashboard and discover all the features available to you.
        </p>
        <p className="text-sm">
          <span className="text-muted-foreground">Need Help?</span>{" "}
          <a href="#" className="text-blue-500 hover:underline">Visit our Support page</a>
        </p>
      </div>

      {/* Email Preview */}
      <div className="bg-background rounded-lg border border-border overflow-hidden text-sm">
        {/* Header with Logo */}
        <div className="p-4 text-center border-b border-border">
          <div className="inline-flex items-center gap-0.5 font-bold text-xs tracking-tight">
            {['T','O','O','L','S','T','O','D','A','Y'].map((letter, i) => (
              <span key={i} className="border border-foreground px-0.5">{letter}</span>
            ))}
          </div>
          <p className="text-[9px] text-muted-foreground mt-0.5">
            Your <span className="text-orange-500 font-semibold">source</span> for industrial cutting tools!
          </p>
        </div>

        {/* Content */}
        <div className="p-4 text-center">
          <h2 className="text-base font-semibold mb-1.5">{title}</h2>
          <p className="text-xs text-muted-foreground mb-4">{subtitle}</p>
          
          <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-background px-4 text-xs">
            {ctaText}
            <span className="ml-1">→</span>
          </Button>
        </div>

        {/* What's Next Section */}
        <div className="px-4 pb-4">
          <h4 className="font-semibold text-xs mb-1">What&apos;s Next</h4>
          <p className="text-[10px] text-muted-foreground mb-2">
            Explore your dashboard and discover all the features available to you.
          </p>
          <p className="text-[10px]">
            <span className="text-muted-foreground">Need Help?</span>{" "}
            <a href="#" className="text-blue-500 hover:underline">Visit our Support page</a>
          </p>
        </div>

        {/* Members Section */}
        <div className="px-4 pb-4 text-center">
          <div className="flex justify-center -space-x-1.5 mb-1.5">
            <div className="w-6 h-6 rounded-full bg-red-400 border-2 border-background flex items-center justify-center text-[9px] text-background font-medium">A</div>
            <div className="w-6 h-6 rounded-full bg-orange-400 border-2 border-background flex items-center justify-center text-[9px] text-background font-medium">B</div>
            <div className="w-6 h-6 rounded-full bg-green-400 border-2 border-background flex items-center justify-center text-[9px] text-background font-medium">C</div>
            <div className="w-6 h-6 rounded-full bg-red-500 border-2 border-background flex items-center justify-center text-[9px] text-background font-medium">D</div>
          </div>
          <p className="text-xs font-medium">Join 10,000+ members</p>
          <p className="text-[9px] text-muted-foreground">&quot;Best decision I made this year!&quot;</p>
        </div>

        {/* Footer */}
        <div className="border-t border-border p-4 text-center">
          <div className="flex justify-center gap-3 mb-3">
            <Instagram className="w-4 h-4 text-muted-foreground" />
            <Music2 className="w-4 h-4 text-muted-foreground" />
            <Youtube className="w-4 h-4 text-muted-foreground" />
          </div>
          <p className="text-[9px] text-muted-foreground mb-1.5">
            Copyright © 2026 {brandName}. All rights reserved.
          </p>
          <div className="flex justify-center gap-3 text-[9px]">
            <a href="#" className="text-muted-foreground hover:text-foreground">Unsubscribe</a>
            <a href="#" className="text-muted-foreground hover:text-foreground">Contact</a>
          </div>
          <p className="text-[8px] text-muted-foreground mt-3">
            Offer valid for Amana Tool®, A.G.E Series® and Timberline® products only and orders €82.00 and above.
          </p>
        </div>
      </div>
    </div>
  )
}
