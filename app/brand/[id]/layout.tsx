"use client"

import React from "react"

import { use } from "react"
import Link from "next/link"
import { ChevronLeft, Clock, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AppSidebar } from "@/components/app-sidebar"
import { BrandDetailsSidebar } from "@/components/brand-details-sidebar"
import { EmailPreview } from "@/components/email-preview"

export default function BrandLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ id: string }>
}) {
  const { id } = use(params)

  const brandName = id === "toolstoday" ? "ToolsToday" : id === "cean" ? "CEAN" : id

  return (
    <div className="min-h-screen bg-background">
      <AppSidebar />

      <div className="pl-14 flex">
        {/* Brand Details Sidebar */}
        <BrandDetailsSidebar brandId={id} />

        {/* Main Content */}
        <div className="flex-1 flex">
          {/* Form Area */}
          <div className="flex-1 min-w-0">
            {/* Header */}
            <div className="flex items-center justify-between px-8 py-4 border-b border-border">
              <div className="flex items-center gap-3">
                <Link href="/">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                </Link>
                <div className="w-8 h-8 rounded-lg bg-foreground flex items-center justify-center text-background font-bold text-sm">
                  T
                </div>
                <h1 className="text-xl font-semibold">{brandName}</h1>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Clock className="w-4 h-4" />
                </Button>
                <Button className="gap-2 bg-foreground text-background hover:bg-foreground/90">
                  Update
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">{children}</div>
          </div>

          {/* Email Preview Sidebar */}
          <div className="w-80 border-l border-border p-4 bg-muted/10 overflow-y-auto">
            <EmailPreview brandName={brandName} />
          </div>
        </div>
      </div>
    </div>
  )
}
