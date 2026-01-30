"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function CompanyProfilePage() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Company Profile</h2>
      <div className="bg-card border border-border rounded-xl p-6">
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label>Company Name</Label>
              <Input defaultValue="ToolsToday" />
            </div>
            <div className="space-y-2">
              <Label>Founded Year</Label>
              <Input defaultValue="2005" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label>Industry</Label>
              <Input defaultValue="Industrial Tools & Machinery" />
            </div>
            <div className="space-y-2">
              <Label>Headquarters</Label>
              <Input defaultValue="United States" />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Company Mission</Label>
            <Textarea
              defaultValue="To provide professional woodworkers, manufacturers, and DIY enthusiasts with the highest quality cutting tools and machinery at competitive prices."
              className="min-h-[100px]"
            />
          </div>

          <div className="space-y-2">
            <Label>Company Values</Label>
            <Textarea
              defaultValue="Quality, Innovation, Customer Service, Reliability"
              className="min-h-[80px]"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
