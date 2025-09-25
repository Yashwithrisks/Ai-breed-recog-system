"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function LandingHero() {
  return (
    <section className="w-full max-w-4xl mx-auto py-12 md:py-24 lg:py-32 text-center">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_550px]">
          <div className="flex flex-col justify-center space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-2"
            >
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-balance">
                AI-Powered Breed Recognition for Indian Livestock
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl mx-auto text-pretty">
                Revolutionizing cattle and buffalo breed identification with advanced AI, empowering Field Level Workers
                and Admin users.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col gap-2 min-[400px]:flex-row justify-center"
            >
              <Link href="/role-selection">
                <Button className="w-full min-[400px]:w-auto bg-primary text-primary-foreground hover:bg-primary/90">
                  Login as Field Level Worker
                </Button>
              </Link>
              <Link href="/role-selection">
                <Button
                  variant="outline"
                  className="w-full min-[400px]:w-auto border-secondary text-secondary hover:bg-secondary/10 bg-transparent"
                >
                  Login as Admin
                </Button>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Card className="mt-8 p-6 shadow-lg">
                <p className="text-sm text-muted-foreground text-pretty">
                  Our system addresses the critical issue of breed misclassification, leading to better livestock
                  management, improved breeding programs, and enhanced agricultural productivity across India.
                </p>
              </Card>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <Image
              src="/illustration-of-cattle-and-ai-technology.jpg"
              width={550}
              height={400}
              alt="Illustration of cattle and AI technology"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
