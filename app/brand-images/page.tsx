"use client"

import { useState } from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Checkbox } from "@/components/ui/checkbox"
import { Search, Upload, MoreVertical, Pencil } from "lucide-react"
import { UploadImageModal } from "@/components/upload-image-modal"

interface BrandImage {
  id: string
  src: string
  title: string
  brand: string
}

const sampleImages: BrandImage[] = [
  {
    id: "1",
    src: "/images/videoframe-361592.png",
    title: "Educational 'Learning Desk' featuring power tools and accessories",
    brand: "ToolsToday",
  },
  {
    id: "2",
    src: "/images/videoframe-361592.png",
    title: "Collection of brand logos including ToolsToday and partners",
    brand: "ToolsToday",
  },
  {
    id: "3",
    src: "/images/videoframe-361592.png",
    title: "Woodpeckers slab flattening mill promotional banner",
    brand: "ToolsToday",
  },
  {
    id: "4",
    src: "/images/videoframe-361592.png",
    title: "SawStop professional cabinet saw showcase",
    brand: "ToolsToday",
  },
  {
    id: "5",
    src: "/images/videoframe-361592.png",
    title: "Big Savings promotional banner with power tools",
    brand: "ToolsToday",
  },
  {
    id: "6",
    src: "/images/videoframe-361592.png",
    title: "SPEKTRA coating technology showcase",
    brand: "ToolsToday",
  },
  {
    id: "7",
    src: "/images/videoframe-361592.png",
    title: "Next Wave 20% off promotional banner",
    brand: "ToolsToday",
  },
  {
    id: "8",
    src: "/images/videoframe-361592.png",
    title: "Router bits collection display",
    brand: "ToolsToday",
  },
]

const brands = [
  { id: "toolstoday", name: "ToolsToday" },
  { id: "cean", name: "CEAN" },
]

export default function BrandImagesPage() {
  const [selectedBrand, setSelectedBrand] = useState("toolstoday")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectMode, setSelectMode] = useState(false)
  const [selectedImages, setSelectedImages] = useState<string[]>([])
  const [uploadModalOpen, setUploadModalOpen] = useState(false)

  const filteredImages = sampleImages.filter(
    (img) =>
      img.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      img.brand.toLowerCase() === brands.find((b) => b.id === selectedBrand)?.name.toLowerCase()
  )

  const toggleImageSelection = (id: string) => {
    setSelectedImages((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <AppSidebar />

      <main className="pl-14">
        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-2xl font-semibold text-foreground">Brand Images</h1>
            <p className="text-sm text-muted-foreground mt-1">
              EmailPilot will automatically select when building emails. All images are optimized and stored on our CDN securely.
            </p>
          </div>

          {/* Controls Row */}
          <div className="flex items-center justify-between mb-4">
            <Select value={selectedBrand} onValueChange={setSelectedBrand}>
              <SelectTrigger className="w-48 h-10">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded bg-muted flex items-center justify-center">
                    <span className="text-xs font-bold">T</span>
                  </div>
                  <SelectValue placeholder="Select brand" />
                </div>
              </SelectTrigger>
              <SelectContent>
                {brands.map((brand) => (
                  <SelectItem key={brand.id} value={brand.id}>
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded bg-muted flex items-center justify-center">
                        <span className="text-[10px] font-bold">{brand.name[0]}</span>
                      </div>
                      {brand.name}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button 
              className="gap-2 bg-foreground text-background hover:bg-foreground/90"
              onClick={() => setUploadModalOpen(true)}
            >
              <Upload className="w-4 h-4" />
              Upload Images
            </Button>
          </div>

          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search images by description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-10 bg-muted/50"
            />
          </div>

          {/* Results Header */}
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-medium text-foreground">
              Images for {brands.find((b) => b.id === selectedBrand)?.name}
            </h2>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>{filteredImages.length} images found</span>
              <button className="flex items-center gap-1 hover:text-foreground">
                <Pencil className="w-3 h-3" />
                Newest first
              </button>
              <label className="flex items-center gap-1.5 cursor-pointer">
                <Checkbox
                  checked={selectMode}
                  onCheckedChange={(checked) => {
                    setSelectMode(checked === true)
                    if (!checked) setSelectedImages([])
                  }}
                  className="w-4 h-4"
                />
                Select
              </label>
            </div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {/* Add Images Card */}
            <div 
              className="aspect-square border-2 border-dashed border-border rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-muted-foreground hover:bg-muted/30 transition-colors"
              onClick={() => setUploadModalOpen(true)}
            >
              <Upload className="w-6 h-6 text-muted-foreground mb-2" />
              <span className="text-sm text-muted-foreground">Add Images</span>
            </div>

            {/* Image Cards */}
            {filteredImages.map((image) => (
              <div key={image.id} className="group">
                <div className="relative aspect-square bg-muted rounded-lg overflow-hidden mb-2">
                  {selectMode && (
                    <div className="absolute top-2 left-2 z-10">
                      <Checkbox
                        checked={selectedImages.includes(image.id)}
                        onCheckedChange={() => toggleImageSelection(image.id)}
                        className="w-5 h-5 bg-background"
                      />
                    </div>
                  )}
                  <div className="w-full h-full bg-gradient-to-br from-muted to-muted-foreground/20 flex items-center justify-center">
                    <span className="text-xs text-muted-foreground">Image</span>
                  </div>
                </div>
                <div className="flex items-start justify-between gap-1">
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-foreground truncate">
                      {image.title}
                    </p>
                    <p className="text-[10px] text-muted-foreground">{image.brand}</p>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="p-1 hover:bg-muted rounded opacity-0 group-hover:opacity-100 transition-opacity">
                        <MoreVertical className="w-3.5 h-3.5 text-muted-foreground" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View details</DropdownMenuItem>
                      <DropdownMenuItem>Download</DropdownMenuItem>
                      <DropdownMenuItem>Copy URL</DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Upload Modal */}
      <UploadImageModal
        open={uploadModalOpen}
        onOpenChange={setUploadModalOpen}
        onUpload={(files) => {
          console.log("Uploading files:", files)
        }}
      />
    </div>
  )
}
