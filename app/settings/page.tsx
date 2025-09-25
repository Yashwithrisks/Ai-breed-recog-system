"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sun, Moon, Globe } from "lucide-react"

export default function SettingsPage() {
  const [darkMode, setDarkMode] = useState(false)
  const [language, setLanguage] = useState("en")

  useEffect(() => {
    // Initialize dark mode based on system preference or saved setting
    const savedDarkMode = localStorage.getItem("darkMode")
    if (savedDarkMode) {
      setDarkMode(JSON.parse(savedDarkMode))
      document.documentElement.classList.toggle("dark", JSON.parse(savedDarkMode))
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDarkMode(true)
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newMode = !prev
      document.documentElement.classList.toggle("dark", newMode)
      localStorage.setItem("darkMode", JSON.stringify(newMode))
      return newMode
    })
  }

  const handleLanguageChange = (value: string) => {
    setLanguage(value)
    // In a real app, you'd update the i18n library here
  }

  return (
    <main className="flex min-h-screen flex-col p-4 md:p-8 lg:p-12 bg-background text-foreground">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Settings</h1>
      <div className="grid gap-6 max-w-2xl mx-auto w-full">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Theme Preference</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {darkMode ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
              <Label htmlFor="dark-mode-toggle">Dark Mode</Label>
            </div>
            <Switch id="dark-mode-toggle" checked={darkMode} onCheckedChange={toggleDarkMode} />
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Language Preference</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Globe className="h-5 w-5" />
              <Label htmlFor="language-select">Language</Label>
            </div>
            <Select value={language} onValueChange={handleLanguageChange}>
              <SelectTrigger id="language-select" className="w-[180px]">
                <SelectValue placeholder="Select Language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="hi">Hindi</SelectItem>
                <SelectItem value="mr">Marathi</SelectItem>
                <SelectItem value="gu">Gujarati</SelectItem>
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>PWA Installation</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              This app is a Progressive Web App (PWA) and can be installed on your mobile device for a native app-like
              experience.
            </p>
            <h3 className="font-semibold text-foreground">Installation Instructions:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <strong>Android:</strong> Open the app in your browser, tap the menu icon (3 dots), and select "Add to
                Home screen".
              </li>
              <li>
                <strong>iOS (Safari):</strong> Open the app in Safari, tap the Share button (square with an arrow
                pointing up), and select "Add to Home Screen".
              </li>
            </ul>
            <p>Once installed, you can launch the app directly from your home screen and use it offline.</p>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
