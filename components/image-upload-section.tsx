"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Upload, Camera, Loader2 } from "lucide-react"
import { motion } from "framer-motion"

export function ImageUploadSection() {
  const [isProcessing, setIsProcessing] = useState(false)

  const handleUpload = () => {
    setIsProcessing(true)
    // Simulate processing
    setTimeout(() => {
      setIsProcessing(false)
      // In a real app, you'd handle the image upload and prediction here
    }, 3000)
  }

  return (
    <Card className="col-span-full md:col-span-1 lg:col-span-1 shadow-lg">
      <CardHeader>
        <CardTitle>Image Upload / Capture</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center p-6 space-y-4">
        <div className="border-2 border-dashed border-muted-foreground rounded-lg p-8 w-full text-center flex flex-col items-center justify-center gap-4">
          <Upload className="h-12 w-12 text-muted-foreground" />
          <p className="text-muted-foreground">Drag & drop image here or</p>
          <Button onClick={handleUpload} disabled={isProcessing}>
            <Camera className="h-4 w-4 mr-2" />
            Capture from Camera
          </Button>
        </div>
        {isProcessing && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-2 text-primary"
          >
            <Loader2 className="h-5 w-5 animate-spin" />
            <span>Processing...</span>
          </motion.div>
        )}
      </CardContent>
    </Card>
  )
}
