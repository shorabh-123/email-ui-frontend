"use client"

import { Code, Copy, Key } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function DevelopersPage() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Developers</h2>

      <div className="space-y-6">
        <div className="bg-card border border-border rounded-xl p-6">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
              <Key className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-medium">API Keys</h3>
              <p className="text-sm text-muted-foreground">
                Manage API keys for programmatic access
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Production API Key</Label>
              <div className="flex gap-2">
                <Input
                  type="password"
                  defaultValue="sk_live_xxxxxxxxxxxx"
                  readOnly
                  className="font-mono"
                />
                <Button variant="outline" size="icon">
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Test API Key</Label>
              <div className="flex gap-2">
                <Input
                  type="password"
                  defaultValue="sk_test_xxxxxxxxxxxx"
                  readOnly
                  className="font-mono"
                />
                <Button variant="outline" size="icon">
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-card border border-border rounded-xl p-6">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
              <Code className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-medium">Webhooks</h3>
              <p className="text-sm text-muted-foreground">
                Configure webhook endpoints for real-time events
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Webhook URL</Label>
            <Input placeholder="https://your-server.com/webhooks/migma" />
          </div>
        </div>
      </div>
    </div>
  )
}
