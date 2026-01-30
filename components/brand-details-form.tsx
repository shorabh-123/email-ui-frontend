"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ToneOfVoiceSelector } from "@/components/tone-of-voice-selector"
import { SocialMediaEditor } from "@/components/social-media-editor"
import { BrandLogosEditor } from "@/components/brand-logos-editor"
import { ColorsStylingEditor } from "@/components/colors-styling-editor"
import { TypographyEditor } from "@/components/typography-editor"

const industries = [
  "Industrial Tools & Machinery",
  "E-commerce",
  "Technology",
  "Healthcare",
  "Education",
  "Finance",
  "Entertainment",
  "Travel",
  "Food & Beverage",
  "Real Estate",
  "Health & Wellness Apparel",
  "Other",
]

interface BrandDetailsFormProps {
  initialData?: {
    projectName?: string
    website?: string
    description?: string
    industry?: string
    tone?: string
  }
}

export function BrandDetailsForm({ initialData }: BrandDetailsFormProps) {
  const [projectName, setProjectName] = useState(initialData?.projectName || "ToolsToday")
  const [website, setWebsite] = useState(initialData?.website || "https://www.toolstoday.com")
  const [description, setDescription] = useState(
    initialData?.description ||
      "ToolsToday is a premier industrial-grade tool vendor specializing in high-quality cutting tools, CNC machinery, and workshop supplies. As a full-line Amana Tool dealer, they offer an extensive catalog including router bits, saw blades, shaper cutters, and boring bits. They cater to over 850,000 happy customers, ranging from professional..."
  )
  const [industry, setIndustry] = useState(initialData?.industry || "Industrial Tools & Machinery")
  const [tone, setTone] = useState(initialData?.tone || "auto")

  return (
    <div className="space-y-10">
      {/* Tone of Voice */}
      <div className="space-y-3">
        <Label className="text-base font-medium">Tone of Voice</Label>
        <ToneOfVoiceSelector value={tone} onChange={setTone} />
      </div>

      {/* Apps & Social Media */}
      <div className="space-y-3">
        <Label className="text-base font-medium">Apps & Social Media</Label>
        <SocialMediaEditor />
      </div>

      {/* Brand Logos */}
      <BrandLogosEditor />

      {/* Colors & Styling */}
      <ColorsStylingEditor />

      {/* Typography */}
      <TypographyEditor />

      {/* Company Profile Section */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Company Profile</h3>
        
        <div className="bg-card border border-border rounded-xl p-6 space-y-6">
          {/* Project Name & Website */}
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="project-name">Project Name</Label>
              <Input
                id="project-name"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="website">Website</Label>
              <Input
                id="website"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
              />
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="min-h-[100px]"
            />
          </div>

          {/* Industry */}
          <div className="space-y-2">
            <Label>Industry</Label>
            <Select value={industry} onValueChange={setIndustry}>
              <SelectTrigger className="w-full max-w-xs">
                <SelectValue placeholder="Select industry" />
              </SelectTrigger>
              <SelectContent>
                {industries.map((ind) => (
                  <SelectItem key={ind} value={ind}>
                    {ind}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  )
}
