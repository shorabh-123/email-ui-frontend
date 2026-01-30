"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Plus, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { AppSidebar } from "@/components/app-sidebar"
import { BrandCard } from "@/components/brand-card"
import { ImportBrandModal } from "@/components/import-brand-modal"

const brands = [
  {
    id: "cean",
    name: "CEAN",
    category: "Health & Wellness Apparel",
    description:
      "CEAN is a pioneering 'Wearable Wellness' brand that has created a new category of functional...",
  },
  {
    id: "toolstoday",
    name: "ToolsToday",
    category: "Industrial Tools & Machinery",
    description:
      "ToolsToday is a premier industrial-grade tool vendor specializing in high-quality cutting tools, CNC...",
    logoText: "TOOLSTODAY",
    logoSubtext: "Your source for industrial cutting tools!",
  },
]

const industries = [
  "All Industries",
  "Health & Wellness Apparel",
  "Industrial Tools & Machinery",
  "E-commerce",
  "Technology",
  "Healthcare",
]

export default function MyBrandsPage() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedIndustry, setSelectedIndustry] = useState("All Industries")
  const [sortBy, setSortBy] = useState("Last Modified")
  const [importModalOpen, setImportModalOpen] = useState(false)

  const filteredBrands = brands.filter((brand) => {
    const matchesSearch = brand.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesIndustry =
      selectedIndustry === "All Industries" || brand.category === selectedIndustry
    return matchesSearch && matchesIndustry
  })

  return (
    <div className="min-h-screen bg-background">
      <AppSidebar />
      
      <main className="pl-14">
        <div className="max-w-6xl mx-auto px-8 py-8">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div>
              <h1 className="text-2xl font-semibold text-foreground">My Brands</h1>
              <p className="text-sm text-muted-foreground mt-0.5">
                Manage your company, brand and email brand
              </p>
            </div>
            <Button
              onClick={() => setImportModalOpen(true)}
              size="sm"
              className="gap-1.5 bg-foreground text-background hover:bg-foreground/90"
            >
              <Plus className="w-3.5 h-3.5" />
              New Brand
            </Button>
          </div>

          {/* Filters */}
          <div className="flex items-center gap-3 mb-5">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search brands..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 h-9 text-sm"
              />
            </div>
            <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
              <SelectTrigger className="w-36 h-9 text-sm">
                <SelectValue placeholder="All Industries" />
              </SelectTrigger>
              <SelectContent>
                {industries.map((industry) => (
                  <SelectItem key={industry} value={industry}>
                    {industry}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-32 h-9 text-sm">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Last Modified">Last Modified</SelectItem>
                <SelectItem value="Name">Name</SelectItem>
                <SelectItem value="Created">Created</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Brand Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredBrands.map((brand) => (
              <BrandCard
                key={brand.id}
                name={brand.name}
                category={brand.category}
                description={brand.description}
                logoText={brand.logoText}
                logoSubtext={brand.logoSubtext}
                onEdit={() => router.push(`/brand/${brand.id}/details`)}
              />
            ))}
          </div>
        </div>
      </main>

      <ImportBrandModal open={importModalOpen} onOpenChange={setImportModalOpen} />
    </div>
  )
}
