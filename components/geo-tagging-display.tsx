import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { MapPin } from "lucide-react"

export function GeoTaggingDisplay() {
  return (
    <Card className="col-span-full md:col-span-1 lg:col-span-1 shadow-lg">
      <CardHeader>
        <CardTitle>Geo-Tagging Display</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="relative w-full h-48 rounded-b-lg overflow-hidden">
          <Image
            src="/static-map-with-location-marker.jpg"
            alt="Static map with location marker"
            layout="fill"
            objectFit="cover"
            className="rounded-b-lg"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary">
            <MapPin className="h-8 w-8" />
          </div>
        </div>
        <div className="p-4 text-center text-muted-foreground text-sm">
          Location: Lat 18.5204, Lon 73.8567 (Pune, India)
        </div>
      </CardContent>
    </Card>
  )
}
