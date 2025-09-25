"use client"

import { motion } from "framer-motion"
import { FLWDashboardHeader } from "@/components/flw-dashboard-header"
import { ImageUploadSection } from "@/components/image-upload-section"
import { BreedPredictionResults } from "@/components/breed-prediction-results"
import { GeoTaggingDisplay } from "@/components/geo-tagging-display"
import { SavedRecordsPreview } from "@/components/saved-records-preview"

export default function FLWDashboardPage() {
  // Mock data for demonstration
  const breedPredictions = [
    { id: "1", name: "Gir", confidence: 92, image: "/gir-cattle.jpg" },
    { id: "2", name: "Sahiwal", confidence: 88, image: "/sahiwal-cattle.jpg" },
    { id: "3", name: "Red Sindhi", confidence: 85, image: "/red-sindhi-cattle.jpg" },
  ]

  const savedRecords = [
    { id: "rec1", breed: "Gir", date: "2025-09-20", location: "Pune" },
    { id: "rec2", breed: "Sahiwal", date: "2025-09-19", location: "Nashik" },
    { id: "rec3", breed: "Holstein Friesian", date: "2025-09-18", location: "Mumbai" },
    { id: "rec4", breed: "Jersey", date: "2025-09-17", location: "Nagpur" },
    { id: "rec5", breed: "Murrah Buffalo", date: "2025-09-16", location: "Aurangabad" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <FLWDashboardHeader />
      <motion.main
        className="flex-1 p-4 md:p-6 lg:p-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <ImageUploadSection />
        </motion.div>
        <motion.div variants={itemVariants}>
          <BreedPredictionResults predictions={breedPredictions} />
        </motion.div>
        <motion.div variants={itemVariants}>
          <GeoTaggingDisplay />
        </motion.div>
        <motion.div variants={itemVariants}>
          <SavedRecordsPreview records={savedRecords} />
        </motion.div>
      </motion.main>
    </div>
  )
}
