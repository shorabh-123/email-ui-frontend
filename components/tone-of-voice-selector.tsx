"use client"

import React from "react"

import { useState } from "react"
import {
  Sparkles,
  Minus,
  Building2,
  Smile,
  PartyPopper,
  Heart,
  Lightbulb,
  Briefcase,
} from "lucide-react"
import { cn } from "@/lib/utils"

type ToneOption = {
  id: string
  label: string
  icon: React.ElementType
}

const toneOptions: ToneOption[] = [
  { id: "auto", label: "Auto", icon: Sparkles },
  { id: "neutral", label: "Neutral", icon: Minus },
  { id: "formal", label: "Formal", icon: Building2 },
  { id: "friendly", label: "Friendly", icon: Smile },
  { id: "play", label: "Play", icon: PartyPopper },
]

const extendedToneOptions: ToneOption[] = [
  { id: "playful", label: "Playful", icon: PartyPopper },
  { id: "professional", label: "Professional", icon: Briefcase },
  { id: "inspirational", label: "Inspirational", icon: Lightbulb },
  { id: "empathetic", label: "Empathetic", icon: Heart },
]

interface ToneOfVoiceSelectorProps {
  value?: string
  onChange?: (value: string) => void
  extended?: boolean
}

export function ToneOfVoiceSelector({
  value = "auto",
  onChange,
  extended = false,
}: ToneOfVoiceSelectorProps) {
  const [selected, setSelected] = useState(value)
  const options = extended ? [...toneOptions.slice(0, 1), ...extendedToneOptions] : toneOptions

  const handleSelect = (id: string) => {
    setSelected(id)
    onChange?.(id)
  }

  return (
    <div className="flex gap-2 flex-wrap">
      {options.map((option) => {
        const Icon = option.icon
        const isSelected = selected === option.id
        return (
          <button
            key={option.id}
            onClick={() => handleSelect(option.id)}
            className={cn(
              "flex flex-col items-center justify-center gap-1.5 px-4 py-3 rounded-lg border transition-colors min-w-[70px]",
              isSelected
                ? "border-foreground bg-background"
                : "border-border bg-background hover:border-muted-foreground"
            )}
          >
            <Icon className="w-5 h-5 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">{option.label}</span>
          </button>
        )
      })}
    </div>
  )
}
