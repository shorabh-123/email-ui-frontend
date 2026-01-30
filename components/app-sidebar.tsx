"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Plus,
  RefreshCcw,
  Layers,
  ImageIcon,
  Plug,
  MessageSquare,
  Users,
  History,
} from "lucide-react"
import { cn } from "@/lib/utils"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const navItems = [
  { icon: RefreshCcw, label: "Remix", href: "/remix" },
  { icon: Layers, label: "My Brands", href: "/brands" },
  { icon: ImageIcon, label: "Brand Images", href: "/brand-images" },
  { icon: Plug, label: "Integrations", href: "/integrations" },
]

export function AppSidebar() {
  const pathname = usePathname()
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <TooltipProvider delayDuration={0}>
      <aside
        className={cn(
          "fixed left-0 top-0 h-screen bg-background border-r border-border z-40 transition-all duration-200",
          isExpanded ? "w-52" : "w-14"
        )}
        onMouseLeave={() => setIsExpanded(false)}
      >
        <div className="flex flex-col h-full py-4">
          {/* Logo */}
          <div className="px-3 mb-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-foreground flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-background">
                  <rect x="3" y="3" width="7" height="7" fill="currentColor" />
                  <rect x="14" y="3" width="7" height="7" fill="currentColor" />
                  <rect x="3" y="14" width="7" height="7" fill="currentColor" />
                  <rect x="14" y="14" width="7" height="7" fill="currentColor" />
                </svg>
              </div>
              {isExpanded && (
                <span className="font-semibold text-foreground">EmailPilot AI</span>
              )}
            </Link>
          </div>

          {/* New Email Button - Expands sidebar on hover */}
          <div 
            className="px-2 mb-1"
            onMouseEnter={() => setIsExpanded(true)}
          >
            <Link
              href="/"
              className="flex items-center gap-3 px-2 py-2 rounded-lg text-sm bg-foreground text-background hover:bg-foreground/90 transition-colors"
            >
              <Plus className="w-5 h-5 shrink-0" />
              {isExpanded && <span>New Email</span>}
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-2 space-y-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              
              if (isExpanded) {
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 px-2 py-2 rounded-lg text-sm transition-colors",
                      isActive
                        ? "bg-muted text-foreground"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    )}
                  >
                    <item.icon className="w-5 h-5 shrink-0" />
                    <span>{item.label}</span>
                  </Link>
                )
              }
              
              return (
                <Tooltip key={item.label}>
                  <TooltipTrigger asChild>
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center justify-center px-2 py-2 rounded-lg text-sm transition-colors",
                        isActive
                          ? "bg-muted text-foreground"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      )}
                    >
                      <item.icon className="w-5 h-5 shrink-0" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent 
                    side="right" 
                    className="bg-foreground text-background border-0 font-medium"
                    sideOffset={8}
                  >
                    {item.label}
                  </TooltipContent>
                </Tooltip>
              )
            })}
          </nav>

          {/* Footer */}
          <div className="px-2 mt-auto">
            {isExpanded ? (
              <Link
                href="/feedback"
                className="flex items-center gap-3 px-2 py-2 rounded-lg text-sm text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
              >
                <MessageSquare className="w-5 h-5 shrink-0" />
                <span>Feedback</span>
              </Link>
            ) : (
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="/feedback"
                    className="flex items-center justify-center px-2 py-2 rounded-lg text-sm text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                  >
                    <MessageSquare className="w-5 h-5 shrink-0" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent 
                  side="right" 
                  className="bg-foreground text-background border-0 font-medium"
                  sideOffset={8}
                >
                  Feedback
                </TooltipContent>
              </Tooltip>
            )}
          </div>
        </div>
      </aside>
    </TooltipProvider>
  )
}
