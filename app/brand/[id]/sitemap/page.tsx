"use client"

import { ExternalLink } from "lucide-react"

const pages = [
  { name: "Home", url: "/", status: "indexed" },
  { name: "Products", url: "/products", status: "indexed" },
  { name: "Categories", url: "/categories", status: "indexed" },
  { name: "About Us", url: "/about", status: "indexed" },
  { name: "Contact", url: "/contact", status: "indexed" },
  { name: "Blog", url: "/blog", status: "pending" },
]

export default function SitemapPage() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Sitemap</h2>
      <div className="bg-card border border-border rounded-xl p-6">
        <p className="text-sm text-muted-foreground mb-6">
          Pages indexed from your website for AI context
        </p>
        <div className="space-y-2">
          {pages.map((page) => (
            <div
              key={page.name}
              className="flex items-center justify-between p-3 rounded-lg border border-border"
            >
              <div className="flex items-center gap-3">
                <span className="font-medium">{page.name}</span>
                <span className="text-sm text-muted-foreground">{page.url}</span>
              </div>
              <div className="flex items-center gap-3">
                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    page.status === "indexed"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {page.status}
                </span>
                <ExternalLink className="w-4 h-4 text-muted-foreground" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
