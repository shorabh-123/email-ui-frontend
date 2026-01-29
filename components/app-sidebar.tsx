"use client"

import React from "react"
import { 
  LayoutDashboard, 
  Plus, 
  RefreshCw, 
  FileText, 
  FolderOpen, 
  Users, 
  Send, 
  History,
  Settings,
  MessageSquare
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider
} from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"

interface NavItem {
  icon: React.ElementType
  label: string
  active?: boolean
}

const topNavItems: NavItem[] = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: Plus, label: "Create New" },
  { icon: RefreshCw, label: "Remix" },
  { icon: FileText, label: "Templates" },
  { icon: FolderOpen, label: "Projects" },
  { icon: Users, label: "Audience" },
  { icon: Send, label: "Campaigns" },
  { icon: History, label: "History" },
]

const bottomNavItems: NavItem[] = [
  { icon: MessageSquare, label: "Feedback" },
  { icon: Settings, label: "Settings" },
]

export function AppSidebar() {
  return (
    <aside className="fixed left-0 top-0 z-40 flex h-screen w-16 flex-col bg-sidebar border-r border-sidebar-border">
      {/* Logo */}
      <div className="flex h-16 items-center justify-center border-b border-sidebar-border">
        <div className="flex size-9 items-center justify-center rounded-lg bg-foreground">
          <LayoutDashboard className="size-5 text-background" />
        </div>
      </div>

      {/* Main Navigation */}
      <TooltipProvider>
        <nav className="flex flex-1 flex-col items-center gap-1 px-2 py-4">
          {topNavItems.map((item) => (
            <Tooltip key={item.label}>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn(
                    "size-10 text-muted-foreground hover:text-foreground hover:bg-sidebar-accent",
                    item.active && "bg-sidebar-accent text-foreground"
                  )}
                >
                  <item.icon className="size-5" />
                  <span className="sr-only">{item.label}</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right">
                {item.label}
              </TooltipContent>
            </Tooltip>
          ))}
        </nav>
      </TooltipProvider>

      {/* Bottom Navigation */}
      <TooltipProvider>
        <div className="flex flex-col items-center gap-1 px-2 pb-4">
          {bottomNavItems.map((item) => (
            <Tooltip key={item.label}>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="size-10 text-muted-foreground hover:text-foreground hover:bg-sidebar-accent"
                >
                  <item.icon className="size-5" />
                  <span className="sr-only">{item.label}</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right">
                {item.label}
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </TooltipProvider>
    </aside>
  )
}
