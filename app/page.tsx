import { AppSidebar } from "@/components/app-sidebar"
import { PromptInput } from "@/components/prompt-input"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <AppSidebar />
      
      {/* Main Content */}
      <main className="pl-16">
        <div className="flex min-h-screen flex-col items-center justify-center px-6 py-12">
          {/* Backed By Badge */}
          <div className="mb-6 flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Backed by</span>
            <div className="flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1">
              <div className="flex size-5 items-center justify-center rounded bg-amber-500">
                <svg className="size-3 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="text-sm font-medium">EWOR</span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="mb-4 text-center text-4xl font-semibold tracking-tight text-foreground md:text-5xl text-balance">
            Create Emails Worth Opening
          </h1>

          {/* Subheadline */}
          <p className="mb-10 max-w-xl text-center text-lg text-muted-foreground text-balance">
            AI that writes, designs, and delivers campaigns that actually convert
          </p>

          {/* Prompt Input */}
          <PromptInput />
        </div>
      </main>
    </div>
  )
}
