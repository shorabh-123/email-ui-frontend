"use client"

import React from "react"

import { useState } from "react"
import {
  Instagram,
  Music2,
  Youtube,
  Facebook,
  Twitter,
  MessageCircle,
  Linkedin,
  Github,
  Hash,
  Gift,
  GripVertical,
  X,
  Plus,
  Pencil,
  Check,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type SocialPlatform = {
  id: string
  name: string
  icon: React.ElementType
  url: string
}

const platformOptions = [
  { id: "instagram", name: "Instagram", icon: Instagram },
  { id: "youtube", name: "YouTube", icon: Youtube },
  { id: "facebook", name: "Facebook", icon: Facebook },
  { id: "tiktok", name: "TikTok", icon: Music2 },
  { id: "x", name: "X", icon: Twitter },
  { id: "discord", name: "Discord", icon: MessageCircle },
  { id: "linkedin", name: "LinkedIn", icon: Linkedin },
  { id: "github", name: "GitHub", icon: Github },
  { id: "slack", name: "Slack", icon: Hash },
  { id: "patreon", name: "Patreon", icon: Gift },
]

interface SocialMediaEditorProps {
  links?: SocialPlatform[]
  onChange?: (links: SocialPlatform[]) => void
  readOnly?: boolean
}

export function SocialMediaEditor({
  links: initialLinks = [],
  onChange,
  readOnly = false,
}: SocialMediaEditorProps) {
  const [links, setLinks] = useState<SocialPlatform[]>(
    initialLinks.length > 0
      ? initialLinks
      : [
          { id: "instagram", name: "Instagram", icon: Instagram, url: "https://www.instagram.com/toolstoday/" },
          { id: "tiktok", name: "TikTok", icon: Music2, url: "https://www.tiktok.com/@toolstoday" },
          { id: "youtube", name: "YouTube", icon: Youtube, url: "https://www.youtube.com/@ToolsToday" },
          { id: "facebook", name: "Facebook", icon: Facebook, url: "https://facebook.com/" },
        ]
  )
  const [isEditing, setIsEditing] = useState(false)

  const addedPlatforms = links.map((l) => l.id)

  const handleRemove = (id: string) => {
    const newLinks = links.filter((l) => l.id !== id)
    setLinks(newLinks)
    onChange?.(newLinks)
  }

  const handleAdd = () => {
    const availablePlatform = platformOptions.find((p) => !addedPlatforms.includes(p.id))
    if (availablePlatform) {
      const newLink: SocialPlatform = {
        ...availablePlatform,
        url: "",
      }
      const newLinks = [...links, newLink]
      setLinks(newLinks)
      onChange?.(newLinks)
    }
  }

  const handleUrlChange = (id: string, url: string) => {
    const newLinks = links.map((l) => (l.id === id ? { ...l, url } : l))
    setLinks(newLinks)
    onChange?.(newLinks)
  }

  const handlePlatformChange = (oldId: string, newId: string) => {
    const platform = platformOptions.find((p) => p.id === newId)
    if (platform) {
      const newLinks = links.map((l) =>
        l.id === oldId ? { ...platform, url: l.url } : l
      )
      setLinks(newLinks)
      onChange?.(newLinks)
    }
  }

  if (readOnly) {
    return (
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Apps & Social Media</span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsEditing(true)}
            className="gap-2"
          >
            <Pencil className="w-3 h-3" />
            Edit
          </Button>
        </div>
        <div className="flex gap-2">
          {links.map((link) => {
            const Icon = link.icon
            return (
              <div
                key={link.id}
                className="w-9 h-9 rounded-lg border border-border flex items-center justify-center"
              >
                <Icon className="w-4 h-4 text-muted-foreground" />
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-3">
      {links.map((link) => {
        const Icon = link.icon
        return (
          <div key={link.id} className="flex items-center gap-2">
            <GripVertical className="w-4 h-4 text-muted-foreground cursor-grab" />
            <Select
              value={link.id}
              onValueChange={(value) => handlePlatformChange(link.id, value)}
            >
              <SelectTrigger className="w-40">
                <SelectValue>
                  <div className="flex items-center gap-2">
                    <Icon className="w-4 h-4" />
                    {link.name}
                  </div>
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Social Media</SelectLabel>
                  {platformOptions.map((platform) => {
                    const PlatformIcon = platform.icon
                    const isAdded = addedPlatforms.includes(platform.id) && platform.id !== link.id
                    return (
                      <SelectItem
                        key={platform.id}
                        value={platform.id}
                        disabled={isAdded}
                      >
                        <div className="flex items-center gap-2">
                          <PlatformIcon className="w-4 h-4" />
                          {platform.name}
                          {isAdded && (
                            <span className="text-xs text-muted-foreground ml-auto">Added</span>
                          )}
                          {platform.id === link.id && (
                            <Check className="w-3 h-3 ml-auto" />
                          )}
                        </div>
                      </SelectItem>
                    )
                  })}
                </SelectGroup>
              </SelectContent>
            </Select>
            <Input
              value={link.url}
              onChange={(e) => handleUrlChange(link.id, e.target.value)}
              placeholder={`https://www.${link.id}.com/...`}
              className="flex-1"
            />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleRemove(link.id)}
              className="h-9 w-9"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        )
      })}
      <div className="flex gap-2">
        <Button variant="outline" size="sm" onClick={handleAdd} className="gap-1 bg-transparent">
          <Plus className="w-3 h-3" />
          Add
        </Button>
        <Button variant="outline" size="sm" className="gap-1 bg-transparent">
          <X className="w-3 h-3" />
          Close
        </Button>
        <Button size="sm">
          Done
        </Button>
      </div>
    </div>
  )
}
