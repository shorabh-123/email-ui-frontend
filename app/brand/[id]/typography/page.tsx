"use client"

import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function TypographyPage() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Typography</h2>
      <div className="bg-card border border-border rounded-xl p-6">
        <div className="space-y-8">
          <div className="space-y-4">
            <div>
              <Label className="text-base font-medium">Heading Font</Label>
              <p className="text-sm text-muted-foreground mb-2">
                Font used for headlines and titles
              </p>
            </div>
            <Select defaultValue="inter">
              <SelectTrigger className="w-full max-w-sm">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="inter">Inter</SelectItem>
                <SelectItem value="roboto">Roboto</SelectItem>
                <SelectItem value="opensans">Open Sans</SelectItem>
                <SelectItem value="poppins">Poppins</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-4">
            <div>
              <Label className="text-base font-medium">Body Font</Label>
              <p className="text-sm text-muted-foreground mb-2">
                Font used for body text and paragraphs
              </p>
            </div>
            <Select defaultValue="inter">
              <SelectTrigger className="w-full max-w-sm">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="inter">Inter</SelectItem>
                <SelectItem value="roboto">Roboto</SelectItem>
                <SelectItem value="opensans">Open Sans</SelectItem>
                <SelectItem value="poppins">Poppins</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="border-t border-border pt-6">
            <Label className="text-base font-medium mb-4 block">Preview</Label>
            <div className="space-y-4 p-6 bg-muted/30 rounded-lg">
              <h1 className="text-4xl font-bold">Heading 1</h1>
              <h2 className="text-3xl font-semibold">Heading 2</h2>
              <h3 className="text-2xl font-medium">Heading 3</h3>
              <p className="text-base">
                This is body text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <p className="text-sm text-muted-foreground">
                This is small text / caption text.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
