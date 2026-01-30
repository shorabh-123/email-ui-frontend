"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutGrid,
  Palette,
  Type,
  Building2,
  Map,
  ImageIcon,
  Brain,
  Plug,
  Code,
} from "lucide-react"
import { cn } from "@/lib/utils"

interface BrandDetailsSidebarProps {
  brandId: string
}

const menuSections = [
  {
    title: "BRAND",
    items: [
      { icon: LayoutGrid, label: "Brand Details", href: "details" },
    ],
  },
  {
    title: "DESIGN",
    items: [
      { icon: Palette, label: "Colors & Styling", href: "colors" },
      { icon: Type, label: "Typography", href: "typography" },
    ],
  },
  {
    title: "CONTENT",
    items: [
      { icon: Building2, label: "Company Profile", href: "profile" },
      { icon: Map, label: "Sitemap", href: "sitemap" },
      { icon: ImageIcon, label: "Gallery", href: "gallery" },
    ],
  },
  {
    title: "AI & INTEGRATIONS",
    items: [
      { icon: Brain, label: "Knowledge Base & AI", href: "ai" },
      { icon: Plug, label: "MCP Servers", href: "mcp" },
      { icon: Code, label: "Developers", href: "developers" },
    ],
  },
]

export function BrandDetailsSidebar({ brandId }: BrandDetailsSidebarProps) {
  const pathname = usePathname()

  return (
    <div className="w-56 border-r border-border h-full py-4">
      <nav className="space-y-6">
        {menuSections.map((section) => (
          <div key={section.title}>
            <h4 className="px-4 text-xs font-medium text-muted-foreground mb-2">
              {section.title}
            </h4>
            <div className="space-y-0.5">
              {section.items.map((item) => {
                const fullHref = `/brand/${brandId}/${item.href}`
                const isActive = pathname === fullHref || pathname.includes(item.href)
                return (
                  <Link
                    key={item.label}
                    href={fullHref}
                    className={cn(
                      "flex items-center gap-3 px-4 py-2 text-sm transition-colors",
                      isActive
                        ? "bg-muted text-foreground font-medium"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    )}
                  >
                    <item.icon className="w-4 h-4" />
                    {item.label}
                  </Link>
                )
              })}
            </div>
          </div>
        ))}

        <div className="px-4 pt-4 border-t border-border">
          <h4 className="text-xs font-medium text-muted-foreground mb-2">
            CREATED WITH THIS BRAND
          </h4>
        </div>
      </nav>
    </div>
  )
}
