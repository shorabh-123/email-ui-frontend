"use client"

import { useState } from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { 
  Search, 
  Clock, 
  Flame, 
  Eye,
  Shuffle
} from "lucide-react"
import { cn } from "@/lib/utils"

const categories = [
  "Account",
  "Design", 
  "Enhancement",
  "Industry",
  "Promotional",
  "Seasonal",
  "Templates"
]

const emailTemplates = [
  {
    id: "1",
    title: "Be part of the leading edge.",
    description: "Who are Moonwalkers? Anyone who wants to walk at the speed of a run. Meet people fro...",
    image: "https://qcdsllhqbxwxzekgnyqw.supabase.co/storage/v1/object/public/assets/templates/dddb4f74-f225-4b1f-9b3a-664b86b971d8/1767869992490-1767802828388-Wellness%20at%20work%20(1)%20(1).jpg",
    categories: ["E-commerce", "Review and Testimonial"],
    likes: 9,
    comments: 93,
    brand: "Moonwalkers"
  },
  {
    id: "2", 
    title: "Can I Wear Period Underwear Every Day of the Month?",
    description: "Don't forget: restock levels, returns, ski swaps... 20% off your first order -->",
    image: "https://qcdsllhqbxwxzekgnyqw.supabase.co/storage/v1/object/public/assets/templates/dddb4f74-f225-4b1f-9b3a-664b86b971d8/1768384864354-2026-01-14-100031-desktop.jpg",
    categories: ["Promotional"],
    likes: 12,
    comments: 45,
    brand: "the lift knix"
  },
  {
    id: "3",
    title: "EDEN ASHRAM welcome...",
    description: "Complete your first order, you'll find your unique referral link in the confirmation...",
    image: "https://qcdsllhqbxwxzekgnyqw.supabase.co/storage/v1/object/public/assets/templates/dddb4f74-f225-4b1f-9b3a-664b86b971d8/1768382146504-Labor%20Day%20Sale%20(1)%20(1).jpg",
    categories: ["Account"],
    likes: 7,
    comments: 28,
    brand: "YOGA JUNK"
  },
  {
    id: "4",
    title: "Weekly Digest",
    description: "Is Hailey Bieber Selling Rhode? Could Hailey Bieber's beauty brand, Rhode, be on the brink of a billion-dollar sale?",
    image: "https://qcdsllhqbxwxzekgnyqw.supabase.co/storage/v1/object/public/assets/templates/dddb4f74-f225-4b1f-9b3a-664b86b971d8/1768384297012-Memorial%20Day.jpg",
    categories: ["Design", "Templates"],
    likes: 24,
    comments: 156,
    brand: "hypebae"
  },
  {
    id: "5",
    title: "So You're Wondering, \"How Do I Wash These...\"",
    description: "Personal Care for your Bloody Panties?",
    image: "https://qcdsllhqbxwxzekgnyqw.supabase.co/storage/v1/object/public/assets/templates/dddb4f74-f225-4b1f-9b3a-664b86b971d8/1768384438160-Sauna%20Blanket%20Focus%20(2).jpg",
    categories: ["Enhancement"],
    likes: 5,
    comments: 19,
    brand: "Care Guide"
  },
  {
    id: "6",
    title: "GANNI Collection",
    description: "The Sale Edit continues | Enjoy up to 50% off a limited time only",
    image: "https://qcdsllhqbxwxzekgnyqw.supabase.co/storage/v1/object/public/assets/templates/dddb4f74-f225-4b1f-9b3a-664b86b971d8/1768384771004-2026-01-14-095650-desktop.jpg",
    categories: ["Seasonal", "Promotional"],
    likes: 31,
    comments: 89,
    brand: "GANNI"
  },
  {
    id: "7",
    title: "Love Finds You Here",
    description: "Share the love this Valentine's season with our curated collection",
    image: "https://qcdsllhqbxwxzekgnyqw.supabase.co/storage/v1/object/public/assets/templates/dddb4f74-f225-4b1f-9b3a-664b86b971d8/1768384772578-2026-01-14-095624-desktop.jpg",
    categories: ["Seasonal"],
    likes: 18,
    comments: 67,
    brand: "Valentine"
  },
  {
    id: "8",
    title: "New Levels Alert",
    description: "Professional toolkit for the modern creative",
    image: "https://qcdsllhqbxwxzekgnyqw.supabase.co/storage/v1/object/public/assets/templates/dddb4f74-f225-4b1f-9b3a-664b86b971d8/1768385036373-2026-01-14-100344-desktop.jpg",
    categories: ["Industry", "Templates"],
    likes: 42,
    comments: 203,
    brand: "Pro Tools"
  }
]

export default function RemixPage() {
  const [activeTab, setActiveTab] = useState<"yours" | "trending">("trending")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  const filteredTemplates = emailTemplates.filter(template => {
    const matchesSearch = template.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          template.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = !selectedCategory || template.categories.includes(selectedCategory)
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-background">
      <AppSidebar />
      
      <main className="pl-14">
        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-2xl font-semibold text-foreground">Remix Emails</h1>
            <p className="text-sm text-muted-foreground mt-0.5">
              Discover, manage, and remix your email collection
            </p>
          </div>

          {/* Tabs and Search */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-1 bg-muted rounded-lg p-1">
              <button
                onClick={() => setActiveTab("yours")}
                className={cn(
                  "flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-colors",
                  activeTab === "yours" 
                    ? "bg-background text-foreground shadow-sm" 
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <Clock className="w-4 h-4" />
                Your Emails
              </button>
              <button
                onClick={() => setActiveTab("trending")}
                className={cn(
                  "flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-colors",
                  activeTab === "trending" 
                    ? "bg-background text-foreground shadow-sm" 
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <Flame className="w-4 h-4" />
                Trending
              </button>
            </div>

            <div className="relative flex-1 max-w-xs">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 h-9 text-sm"
              />
            </div>

            {/* Category Filters */}
            <div className="flex items-center gap-2 ml-auto">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(
                    selectedCategory === category ? null : category
                  )}
                  className={cn(
                    "px-3 py-1.5 text-sm rounded-md transition-colors",
                    selectedCategory === category
                      ? "bg-foreground text-background"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Email Grid - 4 Column Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredTemplates.map((template) => (
              <div
                key={template.id}
                className="group"
                onMouseEnter={() => setHoveredCard(template.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="relative rounded-xl overflow-hidden border border-border shadow-sm h-72">
                  <img
                    src={template.image || "/placeholder.svg"}
                    alt={template.title}
                    className="w-full h-full object-cover object-top"
                  />
                  
                  {/* Hover Overlay */}
                  <div className={cn(
                    "absolute inset-0 bg-black/50 flex items-start justify-end p-3 gap-2 transition-opacity duration-200",
                    hoveredCard === template.id ? "opacity-100" : "opacity-0"
                  )}>
                    <Button 
                      size="sm" 
                      className="gap-1.5 bg-white text-black hover:bg-white/90 text-xs h-7"
                    >
                      <Shuffle className="w-3 h-3" />
                      Remix
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="gap-1.5 bg-transparent border-white text-white hover:bg-white/20 text-xs h-7"
                    >
                      <Eye className="w-3 h-3" />
                      Preview
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
