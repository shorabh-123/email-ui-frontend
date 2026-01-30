"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"
import { AppSidebar } from "@/components/app-sidebar"
import { CreateEmailComposer } from "@/components/create-email-composer"
import { ConnectShopifyModal } from "@/components/connect-shopify-modal"

export default function HomePage() {
  const [shopifyModalOpen, setShopifyModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <AppSidebar />

      <main className="pl-14">
        <div className="min-h-screen flex flex-col items-center justify-center px-8 py-12">
          {/* Backed by Badge */}
          <div className="flex items-center gap-2 mb-6 text-sm text-muted-foreground">
            <span>Backed by</span>
            <div className="flex items-center gap-1">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7l10 5 10-5-10-5z" fill="#FFD700" />
                <path d="M2 17l10 5 10-5" stroke="#FFD700" strokeWidth="2" />
                <path d="M2 12l10 5 10-5" stroke="#FFD700" strokeWidth="2" />
              </svg>
              <span className="font-semibold text-foreground">EWOR</span>
            </div>
          </div>

          {/* Hero Text */}
          <h1 className="text-5xl font-bold text-center text-foreground mb-4">
            Create Emails Worth Opening
          </h1>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-xl">
            AI that writes, designs, and delivers campaigns that actually convert
          </p>

          {/* Email Composer */}
          <CreateEmailComposer />

          {/* Suggested Prompts */}
          <div className="flex items-center gap-2 mt-8 text-sm text-muted-foreground">
            <span>Suggested prompts</span>
            <ChevronRight className="w-4 h-4" />
          </div>
        </div>
      </main>

      <ConnectShopifyModal open={shopifyModalOpen} onOpenChange={setShopifyModalOpen} />
    </div>
  )
}
