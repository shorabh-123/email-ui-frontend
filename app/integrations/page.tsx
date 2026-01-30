"use client"

import React from "react"

import { useState } from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { 
  ArrowRight, 
  Info, 
  X,
  Eye,
  EyeOff,
  ExternalLink
} from "lucide-react"
import { cn } from "@/lib/utils"

const emailMarketingIntegrations = [
  {
    id: "klaviyo",
    name: "Klaviyo",
    description: "Export emails directly to your Klaviyo account.",
    icon: (
      <div className="w-10 h-10 bg-[#1a1a1a] rounded-lg flex items-center justify-center">
        <svg width="20" height="14" viewBox="0 0 20 14" fill="white">
          <rect width="20" height="3" rx="1" />
          <rect y="5.5" width="14" height="3" rx="1" />
          <rect y="11" width="8" height="3" rx="1" />
        </svg>
      </div>
    ),
    apiKeyLabel: "Private API Key",
    apiKeyPlaceholder: "pk_...",
    apiKeyHelp: "Enter your private API key from Klaviyo Settings → API Keys.",
    getKeyLink: "Get Klaviyo Key",
    getKeyUrl: "https://www.klaviyo.com/settings/account/api-keys"
  },
  {
    id: "brevo",
    name: "Brevo",
    description: "Export emails directly to your Brevo account.",
    icon: (
      <div className="w-10 h-10 bg-[#0b5a4a] rounded-lg flex items-center justify-center">
        <span className="text-white font-bold text-xs">BREVO</span>
      </div>
    ),
    apiKeyLabel: "API Key",
    apiKeyPlaceholder: "xkeysib-...",
    apiKeyHelp: "Enter your API key from Brevo SMTP & API settings.",
    getKeyLink: "Get Brevo Key",
    getKeyUrl: "https://app.brevo.com/settings/keys/api"
  },
  {
    id: "mailchimp",
    name: "Mailchimp",
    description: "Export emails directly to your Mailchimp account.",
    icon: (
      <div className="w-10 h-10 bg-[#ffe01b] rounded-lg flex items-center justify-center">
        <span className="text-black font-bold text-lg">🐵</span>
      </div>
    ),
    apiKeyLabel: "API Key",
    apiKeyPlaceholder: "xxxxxxxx-us1",
    apiKeyHelp: "Enter your API key from Mailchimp Account → Extras → API keys.",
    getKeyLink: "Get Mailchimp Key",
    getKeyUrl: "https://admin.mailchimp.com/account/api/"
  }
]

const emailDeliveryIntegrations = [
  {
    id: "resend",
    name: "Resend",
    description: "Modern email API for developers.",
    icon: (
      <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
        <span className="text-white font-bold text-lg">R</span>
      </div>
    ),
    apiKeyLabel: "API Key",
    apiKeyPlaceholder: "re_...",
    apiKeyHelp: "Enter your API key from Resend Dashboard → API Keys.",
    getKeyLink: "Get Resend Key",
    getKeyUrl: "https://resend.com/api-keys"
  },
  {
    id: "amazon-ses",
    name: "Amazon SES",
    description: "High-scale email delivery service.",
    icon: (
      <div className="w-10 h-10 bg-[#232f3e] rounded-lg flex items-center justify-center">
        <span className="text-white font-bold text-xl">a</span>
      </div>
    ),
    apiKeyLabel: "Access Key ID",
    apiKeyPlaceholder: "AKIA...",
    apiKeyHelp: "Enter your AWS Access Key ID from IAM console.",
    getKeyLink: "Get AWS Keys",
    getKeyUrl: "https://console.aws.amazon.com/iam/home#/security_credentials"
  },
  {
    id: "sendgrid",
    name: "SendGrid",
    description: "Cloud-based email infrastructure.",
    icon: (
      <div className="w-10 h-10 bg-[#1a82e2] rounded-lg flex items-center justify-center">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="white">
          <rect x="0" y="0" width="6" height="6" />
          <rect x="7" y="0" width="6" height="6" />
          <rect x="7" y="7" width="6" height="6" />
          <rect x="14" y="7" width="6" height="6" />
          <rect x="14" y="14" width="6" height="6" />
        </svg>
      </div>
    ),
    apiKeyLabel: "API Key",
    apiKeyPlaceholder: "SG...",
    apiKeyHelp: "Enter your API key from SendGrid Settings → API Keys.",
    getKeyLink: "Get SendGrid Key",
    getKeyUrl: "https://app.sendgrid.com/settings/api_keys"
  },
  {
    id: "mailgun",
    name: "Mailgun",
    description: "Transactional email API service.",
    icon: (
      <div className="w-10 h-10 bg-[#f5f5f5] rounded-lg flex items-center justify-center border border-border">
        <div className="w-5 h-5 rounded-full bg-[#f06b54] flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-white" />
        </div>
      </div>
    ),
    apiKeyLabel: "API Key",
    apiKeyPlaceholder: "key-...",
    apiKeyHelp: "Enter your API key from Mailgun Dashboard → API Security.",
    getKeyLink: "Get Mailgun Key",
    getKeyUrl: "https://app.mailgun.com/app/account/security/api_keys"
  }
]

interface Integration {
  id: string
  name: string
  description: string
  icon: React.ReactNode
  apiKeyLabel: string
  apiKeyPlaceholder: string
  apiKeyHelp: string
  getKeyLink: string
  getKeyUrl: string
}

function IntegrationCard({ 
  integration, 
  onConfigure 
}: { 
  integration: Integration
  onConfigure: (integration: Integration) => void 
}) {
  return (
    <div 
      className="bg-card border border-border rounded-xl p-4 hover:border-muted-foreground/50 transition-colors cursor-pointer group"
      onClick={() => onConfigure(integration)}
    >
      <div className="flex items-start justify-between mb-4">
        {integration.icon}
        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
      </div>
      <h3 className="font-medium text-foreground mb-1">{integration.name}</h3>
      <p className="text-sm text-muted-foreground">{integration.description}</p>
    </div>
  )
}

function ConfigurationPanel({ 
  integration, 
  onClose 
}: { 
  integration: Integration | null
  onClose: () => void 
}) {
  const [apiKey, setApiKey] = useState("")
  const [showKey, setShowKey] = useState(false)

  if (!integration) return null

  return (
    <div className="fixed inset-y-0 right-0 w-96 bg-background border-l border-border shadow-xl z-50">
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-foreground">
            Configure {integration.name}
          </h2>
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8"
            onClick={onClose}
          >
            <X className="w-4 h-4" />
          </Button>
        </div>

        <p className="text-sm text-muted-foreground mb-6">
          Enter your API key to connect this email marketing platform.
        </p>

        {/* Form */}
        <div className="space-y-4">
          <div>
            <div className="flex items-center justify-between mb-2">
              <Label htmlFor="apiKey" className="text-sm font-medium">
                {integration.apiKeyLabel}
              </Label>
              <a 
                href={integration.getKeyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted-foreground hover:text-foreground flex items-center gap-1"
              >
                {integration.getKeyLink}
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <div className="relative">
              <Input
                id="apiKey"
                type={showKey ? "text" : "password"}
                placeholder={integration.apiKeyPlaceholder}
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                className="pr-10"
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                onClick={() => setShowKey(!showKey)}
              >
                {showKey ? (
                  <EyeOff className="w-4 h-4 text-muted-foreground" />
                ) : (
                  <Eye className="w-4 h-4 text-muted-foreground" />
                )}
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              {integration.apiKeyHelp}
            </p>
          </div>

          <Button className="w-full bg-foreground text-background hover:bg-foreground/90">
            Save Configuration
          </Button>
        </div>
      </div>
    </div>
  )
}

export default function IntegrationsPage() {
  const [selectedIntegration, setSelectedIntegration] = useState<Integration | null>(null)

  return (
    <div className="min-h-screen bg-background">
      <AppSidebar />
      
      <main className="pl-14">
        <div className={cn(
          "max-w-5xl mx-auto px-6 py-8 transition-all duration-300",
          selectedIntegration && "mr-96"
        )}>
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-2xl font-semibold text-foreground">Integrations</h1>
            <p className="text-sm text-muted-foreground mt-0.5">
              Connect your favorite tools to streamline your email workflow
            </p>
          </div>

          {/* Email Marketing Section */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <h2 className="text-lg font-medium text-foreground">Email Marketing</h2>
              <Info className="w-4 h-4 text-muted-foreground" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {emailMarketingIntegrations.map((integration) => (
                <IntegrationCard
                  key={integration.id}
                  integration={integration}
                  onConfigure={setSelectedIntegration}
                />
              ))}
            </div>
          </div>

          {/* Email Delivery Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <h2 className="text-lg font-medium text-foreground">Email Delivery</h2>
              <Info className="w-4 h-4 text-muted-foreground" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {emailDeliveryIntegrations.map((integration) => (
                <IntegrationCard
                  key={integration.id}
                  integration={integration}
                  onConfigure={setSelectedIntegration}
                />
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Configuration Panel */}
      <ConfigurationPanel
        integration={selectedIntegration}
        onClose={() => setSelectedIntegration(null)}
      />

      {/* Overlay when panel is open */}
      {selectedIntegration && (
        <div 
          className="fixed inset-0 bg-black/20 z-40"
          onClick={() => setSelectedIntegration(null)}
        />
      )}
    </div>
  )
}
