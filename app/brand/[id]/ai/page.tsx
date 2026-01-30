"use client"

import { Brain, Upload, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function KnowledgeBasePage() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Knowledge Base & AI</h2>
      <div className="space-y-6">
        <div className="bg-card border border-border rounded-xl p-6">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
              <Brain className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-medium">AI Training Data</h3>
              <p className="text-sm text-muted-foreground">
                Provide context and information to help AI understand your brand better
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Brand Guidelines</Label>
              <Textarea
                placeholder="Describe your brand voice, messaging guidelines, and key talking points..."
                className="min-h-[120px]"
              />
            </div>

            <div className="space-y-2">
              <Label>Product Information</Label>
              <Textarea
                placeholder="List your key products, features, and unique selling points..."
                className="min-h-[120px]"
              />
            </div>
          </div>
        </div>

        <div className="bg-card border border-border rounded-xl p-6">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-medium">Document Upload</h3>
              <p className="text-sm text-muted-foreground">
                Upload documents to expand AI knowledge (PDFs, docs, etc.)
              </p>
            </div>
          </div>

          <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
            <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
            <p className="text-sm text-muted-foreground mb-4">
              Drag and drop files here, or click to browse
            </p>
            <Button variant="outline">Choose Files</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
