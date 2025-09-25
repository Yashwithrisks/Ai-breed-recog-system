"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Image from "next/image"
import recordsData from "@/data/records.json"

export function AdminDashboardRecords() {
  return (
    <Card className="col-span-full shadow-lg">
      <CardHeader>
        <CardTitle>All Saved Records</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Image</TableHead>
              <TableHead>Breed</TableHead>
              <TableHead>Confidence</TableHead>
              <TableHead>Timestamp</TableHead>
              <TableHead>Location</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recordsData.map((record) => (
              <TableRow key={record.id}>
                <TableCell>
                  <Image
                    src={record.image || "/placeholder.svg"}
                    alt={record.breed}
                    width={48}
                    height={48}
                    className="rounded-md object-cover"
                  />
                </TableCell>
                <TableCell className="font-medium">{record.breed}</TableCell>
                <TableCell>{record.confidence}%</TableCell>
                <TableCell>{new Date(record.timestamp).toLocaleString()}</TableCell>
                <TableCell>{`${record.location.lat}, ${record.location.lng}`}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
