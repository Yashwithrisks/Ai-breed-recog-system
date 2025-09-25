"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Edit } from "lucide-react"
import breedsData from "@/data/breeds.json"

interface BreedPrediction {
  id: string
  name: string
  confidence: number
  image: string
}

export function BreedPredictionResults() {
  const [predictions, setPredictions] = useState<BreedPrediction[]>([])

  useEffect(() => {
    // Simulate fetching data
    const fetchedPredictions: BreedPrediction[] = breedsData
      .map((breed) => ({
        id: breed.id,
        name: breed.name,
        confidence: Math.floor(Math.random() * (99 - 80 + 1)) + 80, // Random confidence for mock
        image: breed.image,
      }))
      .slice(0, 3) // Take top 3 for prediction results
    setPredictions(fetchedPredictions)
  }, [])

  return (
    <Card className="col-span-full md:col-span-1 lg:col-span-1 shadow-lg">
      <CardHeader>
        <CardTitle>Breed Prediction Results</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        {predictions.map((prediction) => (
          <Card key={prediction.id} className="flex items-center p-4 shadow-sm bg-card text-card-foreground">
            <Image
              src={prediction.image || "/placeholder.svg"}
              alt={prediction.name}
              width={64}
              height={64}
              className="rounded-md object-cover mr-4"
            />
            <div className="flex-1">
              <h3 className="font-semibold">{prediction.name}</h3>
              <p className="text-sm text-muted-foreground">{prediction.confidence}% Confidence</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="icon">
                <Check className="h-4 w-4" />
                <span className="sr-only">Confirm Breed</span>
              </Button>
              <Button variant="outline" size="icon">
                <Edit className="h-4 w-4" />
                <span className="sr-only">Edit Breed</span>
              </Button>
            </div>
          </Card>
        ))}
      </CardContent>
    </Card>
  )
}
