"use client"

import { Plug, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"

const servers = [
  { name: "Product Catalog API", status: "connected", enabled: true },
  { name: "Customer Data API", status: "connected", enabled: true },
  { name: "Inventory System", status: "disconnected", enabled: false },
]

export default function MCPServersPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold">MCP Servers</h2>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          Add Server
        </Button>
      </div>

      <div className="bg-card border border-border rounded-xl p-6">
        <p className="text-sm text-muted-foreground mb-6">
          Connect Model Context Protocol servers to extend AI capabilities
        </p>

        <div className="space-y-4">
          {servers.map((server) => (
            <div
              key={server.name}
              className="flex items-center justify-between p-4 rounded-lg border border-border"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                  <Plug className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium">{server.name}</h4>
                  <span
                    className={`text-xs ${
                      server.status === "connected"
                        ? "text-green-600"
                        : "text-muted-foreground"
                    }`}
                  >
                    {server.status}
                  </span>
                </div>
              </div>
              <Switch defaultChecked={server.enabled} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
