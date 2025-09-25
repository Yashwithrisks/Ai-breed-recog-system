"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Image from "next/image"
import breedsData from "@/data/breeds.json"

export function AdminDashboardBreedDatabase() {
  return (
    <Card className="col-span-full shadow-lg">
      <CardHeader>
        <CardTitle>Breed Database</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Image</TableHead>
              <TableHead>Breed Name</TableHead>
              <TableHead>Origin</TableHead>
              <TableHead>Characteristics</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {breedsData.map((breed) => (
              <TableRow key={breed.id}>
                <TableCell>
                  <Image
                    src={breed.image || "/placeholder.svg"}
                    alt={breed.name}
                    width={48}
                    height={48}
                    className="rounded-md object-cover"
                  />
                </TableCell>
                <TableCell className="font-medium">{breed.name}</TableCell>
                <TableCell>{breed.origin}</TableCell>
                <TableCell>{breed.characteristics.join(", ")}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
