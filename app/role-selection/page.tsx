"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { User, Building2 } from "lucide-react" // Using Lucide icons for FLW and Admin

export default function RoleSelectionPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-8 lg:p-12 bg-background">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-foreground">
        Select Your Role
      </h1>
      <div className="grid gap-6 md:grid-cols-2 max-w-3xl w-full">
        <Link href="/flw-dashboard" passHref>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="cursor-pointer">
            <Card className="flex flex-col items-center justify-center p-8 h-full text-center shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card text-card-foreground">
              <CardHeader>
                <User className="h-16 w-16 text-primary mb-4" />
                <CardTitle className="text-2xl font-semibold">FLW</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Field Level Worker</p>
              </CardContent>
            </Card>
          </motion.div>
        </Link>
        <Link href="/admin-dashboard" passHref>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="cursor-pointer">
            <Card className="flex flex-col items-center justify-center p-8 h-full text-center shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card text-card-foreground">
              <CardHeader>
                <Building2 className="h-16 w-16 text-secondary mb-4" />
                <CardTitle className="text-2xl font-semibold">Admin</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Admin / Government Official</p>
              </CardContent>
            </Card>
          </motion.div>
        </Link>
      </div>
    </main>
  )
}
