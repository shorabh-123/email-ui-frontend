"use client"

import { useState } from "react"
import { Plus, Sliders, Sparkles, X, ArrowUp, ImageIcon, FileCode, Globe, ChevronRight, Languages, Grid3X3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Switch } from "@/components/ui/switch"
import { cn } from "@/lib/utils"
import { ShopifyConnectModal } from "@/components/shopify-connect-modal"

interface AttachedItem {
  id: string
  label: string
  type: "remix" | "template" | "file"
}

export function PromptInput() {
  const [prompt, setPrompt] = useState("")
  const [attachedItems, setAttachedItems] = useState<AttachedItem[]>([
    { id: "1", label: "Remix: Welcome to Eden...", type: "remix" }
  ])
  const [connectorsEnabled, setConnectorsEnabled] = useState(true)
  const [shopifyModalOpen, setShopifyModalOpen] = useState(false)

  const removeItem = (id: string) => {
    setAttachedItems(attachedItems.filter(item => item.id !== id))
  }

  const placeholderLines = [
    "Create an email showing our latest trending products",
    "Create an email about the latest tech news in the AI space"
  ]

  return (
    <div className="w-full max-w-2xl mx-auto">
      <TooltipProvider>
        <div className="relative rounded-xl border border-input bg-background shadow-sm transition-shadow focus-within:shadow-md focus-within:border-ring/50">
          {/* Text Input Area */}
          <div className="relative min-h-32 p-4 pb-2">
            {/* Placeholder */}
            {!prompt && (
              <div className="absolute inset-4 pointer-events-none">
                {placeholderLines.map((line, index) => (
                  <p 
                    key={index} 
                    className={cn(
                      "text-muted-foreground/60 text-base leading-relaxed",
                      index === 0 && "text-muted-foreground/40"
                    )}
                  >
                    {line}
                  </p>
                ))}
              </div>
            )}
            
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="w-full min-h-20 resize-none bg-transparent text-base leading-relaxed placeholder:text-transparent focus:outline-none"
              placeholder="Create an email..."
            />

            {/* Attached Items */}
            {attachedItems.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {attachedItems.map((item) => (
                  <Badge
                    key={item.id}
                    variant="secondary"
                    className="gap-1.5 py-1.5 px-3 text-sm font-normal bg-muted hover:bg-muted"
                  >
                    {item.label}
                    <button
                      onClick={() => removeItem(item.id)}
                      className="ml-1 hover:text-foreground transition-colors"
                    >
                      <X className="size-3.5" />
                    </button>
                  </Badge>
                ))}
              </div>
            )}
          </div>

          {/* Bottom Toolbar */}
          <div className="flex items-center justify-between px-3 py-2 border-t border-border/50">
            <div className="flex items-center gap-1">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon-sm" className="text-muted-foreground hover:text-foreground">
                    <Plus className="size-4" />
                    <span className="sr-only">Add attachment</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Add attachment</TooltipContent>
              </Tooltip>

              {/* Settings Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon-sm" className="text-muted-foreground hover:text-foreground">
                    <Sliders className="size-4" />
                    <span className="sr-only">Settings</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-56">
                  <DropdownMenuItem>
                    <Sparkles className="size-4" />
                    <span>Prompt Builder</span>
                  </DropdownMenuItem>
                  
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                      <Languages className="size-4" />
                      <span>Localization</span>
                    </DropdownMenuSubTrigger>
                    <DropdownMenuSubContent>
                      <DropdownMenuItem>English</DropdownMenuItem>
                      <DropdownMenuItem>Spanish</DropdownMenuItem>
                      <DropdownMenuItem>French</DropdownMenuItem>
                      <DropdownMenuItem>German</DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuSub>

                  <DropdownMenuSeparator />

                  <div className="flex items-center justify-between px-2 py-1.5">
                    <div className="flex items-center gap-2">
                      <Grid3X3 className="size-4 text-muted-foreground" />
                      <span className="text-sm">Connectors</span>
                    </div>
                    <Switch 
                      checked={connectorsEnabled} 
                      onCheckedChange={setConnectorsEnabled}
                    />
                  </div>

                  <div className="flex items-center justify-between px-2 py-1.5">
                    <div className="flex items-center gap-2">
                      <Globe className="size-4 text-muted-foreground" />
                      <span className="text-sm">Web search</span>
                    </div>
                    <span className="text-xs text-muted-foreground">Always on</span>
                  </div>

                  <DropdownMenuSeparator />

                  <DropdownMenuItem 
                    className="justify-between"
                    onSelect={(e) => {
                      e.preventDefault()
                      setShopifyModalOpen(true)
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <svg className="size-4" viewBox="0 0 109.5 124.5" fill="none">
                        <path d="M95.9 23.9c-.1-.6-.6-1-1.1-1-.5 0-9.3-.2-9.3-.2s-7.4-7.2-8.1-7.9c-.7-.7-2.2-.5-2.7-.3-.1 0-1.5.5-4 1.2-2.4-6.9-6.6-13.2-14-13.2h-.6c-2.1-2.7-4.7-4-6.9-4C32.3-1.5 24 21.1 21.5 31.7c-6.5 2-11.1 3.4-11.6 3.6-3.6 1.1-3.7 1.2-4.2 4.6-.4 2.5-9.7 74.6-9.7 74.6l72.8 13.6 39.4-8.5S96 24.5 95.9 23.9zM67.2 16.8l-6.5 2c0-1.8 0-4.2-.4-6.9 4.1.8 6.2 3.4 6.9 4.9zm-10.9 3.3l-14 4.3c1.4-5.2 3.9-10.4 8.7-13.8 1.9 1.1 3.6 2.9 4.7 5.2.5.9.5 2.8.6 4.3zM49.1 4.5c1.1 0 2.2.4 3.2 1.1-6.3 3-10.4 10.3-11.9 19.4l-10.8 3.3C32.3 18.7 39.1 4.5 49.1 4.5z" fill="#95BF47"/>
                        <path d="M94.8 22.9c-.5 0-9.3-.2-9.3-.2s-7.4-7.2-8.1-7.9c-.3-.3-.6-.4-1-.4l-5.6 114.1 39.4-8.5S96 24.5 95.9 23.9c-.1-.6-.6-1-1.1-1z" fill="#5E8E3E"/>
                        <path d="M57.6 39.9l-4.4 13.1s-3.8-2.1-8.5-2.1c-6.9 0-7.2 4.3-7.2 5.4 0 5.9 15.5 8.2 15.5 22.1 0 10.9-6.9 18-16.2 18-11.2 0-16.9-6.9-16.9-6.9l3-9.9s5.9 5.1 10.9 5.1c3.3 0 4.6-2.6 4.6-4.5 0-7.8-12.7-8.1-12.7-20.8 0-10.7 7.7-21.1 23.3-21.1 5.9.1 8.6 1.6 8.6 1.6z" fill="#fff"/>
                      </svg>
                      <span>Shopify</span>
                    </div>
                    <span className="text-xs text-muted-foreground">Connect</span>
                  </DropdownMenuItem>

                  <DropdownMenuItem className="justify-between">
                    <div className="flex items-center gap-2">
                      <svg className="size-4" viewBox="0 0 24 24" fill="currentColor">
                        <rect width="24" height="24" rx="2" fill="#0D1117"/>
                      </svg>
                      <span>Klaviyo</span>
                    </div>
                    <span className="text-xs text-muted-foreground">Connect</span>
                  </DropdownMenuItem>

                  <DropdownMenuSeparator />

                  <DropdownMenuItem>
                    <Grid3X3 className="size-4" />
                    <span>Connect more</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Button 
                variant="ghost" 
                size="sm" 
                className="gap-1.5 text-muted-foreground hover:text-foreground font-normal"
              >
                <Sparkles className="size-4" />
                CEAN
              </Button>
            </div>

            <div className="flex items-center gap-2">
              <Button 
                variant="ghost" 
                size="sm" 
                className="gap-1.5 text-muted-foreground hover:text-foreground font-normal"
              >
                <Sparkles className="size-3.5" />
                Auto
              </Button>

              <Button 
                size="icon" 
                className="rounded-full size-8 bg-foreground hover:bg-foreground/90"
                disabled={!prompt.trim()}
              >
                <ArrowUp className="size-4 text-background" />
                <span className="sr-only">Send</span>
              </Button>
            </div>
          </div>
        </div>
      </TooltipProvider>

      {/* Action Buttons */}
      <div className="flex items-center justify-center gap-3 mt-4">
        <Button variant="outline" size="sm" className="gap-2 text-muted-foreground font-normal bg-transparent">
          <ImageIcon className="size-4" />
          Clone a Screenshot
        </Button>
        <Button variant="outline" size="sm" className="gap-2 text-muted-foreground font-normal bg-transparent">
          <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6" />
          </svg>
          Import from Figma
        </Button>
        <Button variant="outline" size="sm" className="gap-2 text-muted-foreground font-normal bg-transparent">
          <FileCode className="size-4" />
          Import from HTML
        </Button>
      </div>

      {/* Suggested Prompts */}
      <div className="flex items-center justify-center gap-2 mt-6">
        <span className="text-sm text-muted-foreground">Suggested prompts</span>
        <ChevronRight className="size-4 text-muted-foreground" />
      </div>

      {/* Shopify Connect Modal */}
      <ShopifyConnectModal 
        open={shopifyModalOpen} 
        onOpenChange={setShopifyModalOpen} 
      />
    </div>
  )
}
