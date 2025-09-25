"use client"

import { useState, useEffect } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { WifiOff, Globe } from "lucide-react"

export function FLWDashboardHeader() {
  const [isOffline, setIsOffline] = useState(false)
  const [language, setLanguage] = useState("en")

  useEffect(() => {
    const handleOfflineStatus = () => setIsOffline(!navigator.onLine)
    window.addEventListener("online", handleOfflineStatus)
    window.addEventListener("offline", handleOfflineStatus)
    handleOfflineStatus() // Set initial status
    return () => {
      window.removeEventListener("online", handleOfflineStatus)
      window.removeEventListener("offline", handleOfflineStatus)
    }
  }, [])

  return (
    <header className="flex items-center justify-between p-4 md:p-6 border-b bg-card text-card-foreground shadow-sm">
      <h1 className="text-xl font-bold">FLW Dashboard</h1>
      <div className="flex items-center gap-4">
        {isOffline && (
          <Badge variant="destructive" className="flex items-center gap-1">
            <WifiOff className="h-4 w-4" />
            <span>Offline Mode</span>
          </Badge>
        )}
        <Select value={language} onValueChange={setLanguage}>
          <SelectTrigger className="w-[120px]">
            <Globe className="h-4 w-4 mr-2" />
            <SelectValue placeholder="Language" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="en">English</SelectItem>
            <SelectItem value="hi">Hindi</SelectItem>
            <SelectItem value="mr">Marathi</SelectItem>
            <SelectItem value="gu">Gujarati</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </header>
  )
}
