"use client"

import React from "react"

import { useState, useEffect } from "react"
import {
  Plus,
  Settings2,
  Sparkles,
  ChevronDown,
  Globe,
  Languages,
  Link2,
  Search,
  ChevronRight,
  Check,
  Camera,
  FileCode,
  X,
  ArrowUp,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Separator } from "@/components/ui/separator"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Switch } from "@/components/ui/switch"
import { cn } from "@/lib/utils"
import { ImportBrandModal } from "@/components/import-brand-modal"
import { ConnectShopifyModal } from "@/components/connect-shopify-modal"

interface Brand {
  id: string
  name: string
  icon?: React.ReactNode
}

const brands: Brand[] = [
  { id: "toolstoday", name: "ToolsToday", icon: <span className="font-bold">T</span> },
  { id: "cean", name: "CEAN", icon: <span className="text-muted-foreground">C</span> },
]

const promptSuggestions = [
  "Create an email showing our latest trending products",
  "Create an email about the latest tech news in the AI space",
  "Design a welcome email for new subscribers",
  "Write a promotional email for our summer sale",
]

export function CreateEmailComposer() {
  const [prompt, setPrompt] = useState("")
  const [selectedBrand, setSelectedBrand] = useState<Brand>(brands[1])
  const [connectorsEnabled, setConnectorsEnabled] = useState(true)
  const [attachments, setAttachments] = useState<string[]>(["Remix: Welcome to Ede..."])
  const [currentSuggestionIndex, setCurrentSuggestionIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [importBrandOpen, setImportBrandOpen] = useState(false)
  const [shopifyModalOpen, setShopifyModalOpen] = useState(false)

  // Typing animation effect
  useEffect(() => {
    if (prompt) return // Don't animate if user is typing

    const currentSuggestion = promptSuggestions[currentSuggestionIndex]
    let charIndex = 0
    setIsTyping(true)
    setDisplayedText("")

    const typeInterval = setInterval(() => {
      if (charIndex < currentSuggestion.length) {
        setDisplayedText(currentSuggestion.slice(0, charIndex + 1))
        charIndex++
      } else {
        clearInterval(typeInterval)
        setIsTyping(false)
        
        // Wait and then move to next suggestion
        setTimeout(() => {
          setCurrentSuggestionIndex((prev) => (prev + 1) % promptSuggestions.length)
        }, 2000)
      }
    }, 50)

    return () => clearInterval(typeInterval)
  }, [currentSuggestionIndex, prompt])

  const handleAddAttachment = (type: string) => {
    setAttachments([...attachments, type])
  }

  const handleRemoveAttachment = (index: number) => {
    setAttachments(attachments.filter((_, i) => i !== index))
  }

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Main Input Area */}
      <div className="bg-card border border-border rounded-xl">
        <div className="relative">
          {/* Animated placeholder */}
          {!prompt && (
            <div className="absolute inset-0 p-4 pointer-events-none">
              {currentSuggestionIndex > 0 && (
                <p className="text-muted-foreground/40 text-base mb-1">
                  {promptSuggestions[currentSuggestionIndex - 1]}
                </p>
              )}
              <p className="text-muted-foreground text-base">
                {displayedText}
                {isTyping && <span className="animate-pulse">|</span>}
              </p>
            </div>
          )}
          <Textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder=""
            className={cn(
              "min-h-[120px] border-0 resize-none focus-visible:ring-0 text-base p-4 bg-transparent",
              !prompt && "text-transparent"
            )}
          />
        </div>

        {/* Attachments */}
        {attachments.length > 0 && (
          <div className="px-4 pb-2 flex flex-wrap gap-2">
            {attachments.map((attachment, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-muted rounded-full px-3 py-1 text-sm"
              >
                <span className="truncate max-w-[200px]">{attachment}</span>
                <button
                  onClick={() => handleRemoveAttachment(index)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Toolbar */}
        <div className="flex items-center justify-between px-3 py-2 border-t border-border">
          <div className="flex items-center gap-1">
            {/* Add Button */}
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Plus className="w-4 h-4" />
            </Button>

            {/* Settings/Connectors Dropdown */}
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Settings2 className="w-4 h-4" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-64 p-2" align="start">
                <div className="space-y-1">
                  <button className="w-full flex items-center gap-3 px-2 py-2 rounded-md hover:bg-muted text-sm">
                    <Sparkles className="w-4 h-4" />
                    Prompt Builder
                  </button>
                  <button className="w-full flex items-center justify-between px-2 py-2 rounded-md hover:bg-muted text-sm">
                    <div className="flex items-center gap-3">
                      <Languages className="w-4 h-4" />
                      Localization
                    </div>
                    <ChevronRight className="w-4 h-4 text-muted-foreground" />
                  </button>
                  <div className="flex items-center justify-between px-2 py-2">
                    <div className="flex items-center gap-3">
                      <Link2 className="w-4 h-4" />
                      <span className="text-sm">Connectors</span>
                    </div>
                    <Switch
                      checked={connectorsEnabled}
                      onCheckedChange={setConnectorsEnabled}
                    />
                  </div>
                  <button className="w-full flex items-center justify-between px-2 py-2 rounded-md hover:bg-muted text-sm">
                    <div className="flex items-center gap-3">
                      <Globe className="w-4 h-4" />
                      Web search
                    </div>
                    <span className="text-xs text-muted-foreground">Always on</span>
                  </button>
                  <Separator className="my-1" />
                  <button 
                    className="w-full flex items-center justify-between px-2 py-2 rounded-md hover:bg-muted text-sm"
                    onClick={() => setShopifyModalOpen(true)}
                  >
                    <div className="flex items-center gap-3">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="#95BF47">
                        <path d="M15.337 4.013c-.057-.037-.113-.037-.17-.037-.057 0-.738.057-1.135.057-.397 0-.682-.568-1.135-1.022-.453-.454-.906-.568-1.303-.568-.057 0-.113 0-.17.019C10.52 2.235 9.5 2.69 8.366 4.126c-1.135 1.532-2.043 3.745-2.043 3.745s-2.838.454-3.179.511c-.34.057-.397.113-.454.397-.057.284-1.589 12.255-1.589 12.255L12.375 23l6.925-1.475s-3.008-16.113-3.065-16.454c-.057-.34-.227-.454-.34-.511-.113-.057-.511-.284-.567-.284z" />
                      </svg>
                      Shopify
                    </div>
                    <span className="text-xs text-muted-foreground">Connect</span>
                  </button>
                  <button className="w-full flex items-center justify-between px-2 py-2 rounded-md hover:bg-muted text-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-foreground" />
                      Klaviyo
                    </div>
                    <span className="text-xs text-muted-foreground">Connect</span>
                  </button>
                  <button className="w-full flex items-center gap-3 px-2 py-2 rounded-md hover:bg-muted text-sm">
                    <Link2 className="w-4 h-4" />
                    Connect more
                  </button>
                </div>
              </PopoverContent>
            </Popover>

            {/* Brand Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="h-8 gap-2 px-3 bg-transparent">
                  <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center text-xs">
                    {selectedBrand.icon}
                  </div>
                  {selectedBrand.name}
                  <ChevronDown className="w-3 h-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-52">
                {brands.map((brand) => (
                  <DropdownMenuItem
                    key={brand.id}
                    onClick={() => setSelectedBrand(brand)}
                    className="flex items-center gap-2"
                  >
                    <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center text-xs">
                      {brand.icon}
                    </div>
                    {brand.name}
                    {selectedBrand.id === brand.id && (
                      <Check className="w-4 h-4 ml-auto" />
                    )}
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuItem 
                  className="gap-2"
                  onClick={() => setImportBrandOpen(true)}
                >
                  <Plus className="w-4 h-4" />
                  Create New Brand
                </DropdownMenuItem>
                <DropdownMenuItem className="gap-2">
                  <Search className="w-4 h-4" />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="flex items-center gap-2">
            {/* Auto Mode */}
            <Button variant="outline" size="sm" className="h-8 gap-2 bg-transparent">
              <Sparkles className="w-3 h-3" />
              Auto
              <ChevronDown className="w-3 h-3" />
            </Button>

            {/* Send Button */}
            <Button
              size="icon"
              className="h-8 w-8 rounded-full bg-foreground text-background"
            >
              <ArrowUp className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-center gap-3 mt-4">
        <Button
          variant="outline"
          size="sm"
          className="gap-2 bg-transparent"
          onClick={() => handleAddAttachment("Screenshot")}
        >
          <Camera className="w-4 h-4" />
          Clone a Screenshot
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="gap-2 bg-transparent"
          onClick={() => handleAddAttachment("Figma Design")}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
            <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
            <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
            <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
            <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
          </svg>
          Import from Figma
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="gap-2 bg-transparent"
          onClick={() => handleAddAttachment("HTML File")}
        >
          <FileCode className="w-4 h-4" />
          Import from HTML
        </Button>
      </div>

      {/* Import Brand Modal */}
      <ImportBrandModal 
        open={importBrandOpen} 
        onOpenChange={setImportBrandOpen} 
      />

      {/* Connect Shopify Modal */}
      <ConnectShopifyModal
        open={shopifyModalOpen}
        onOpenChange={setShopifyModalOpen}
      />
    </div>
  )
}
