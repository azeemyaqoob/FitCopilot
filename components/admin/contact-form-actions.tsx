"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { createClient } from "@/lib/supabase/client"

interface ContactFormActionsProps {
  contactForm: {
    id: string
    status: string
  }
}

export function ContactFormActions({ contactForm }: ContactFormActionsProps) {
  const [status, setStatus] = useState(contactForm.status)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleStatusUpdate = async () => {
    if (status === contactForm.status) return

    setIsLoading(true)
    const supabase = createClient()

    try {
      const { error } = await supabase.from("contact_forms").update({ status }).eq("id", contactForm.id)

      if (error) throw error

      router.refresh()
    } catch (error) {
      console.error("Error updating status:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-4">
      <div>
        <label className="text-sm font-medium text-gray-700 mb-2 block">Status</label>
        <Select value={status} onValueChange={setStatus}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="contacted">Contacted</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button onClick={handleStatusUpdate} disabled={isLoading || status === contactForm.status} className="w-full">
        {isLoading ? "Updating..." : "Update Status"}
      </Button>
    </div>
  )
}
