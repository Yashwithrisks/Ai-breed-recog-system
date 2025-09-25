"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import recordsData from "@/data/records.json"

interface Record {
  id: string
  breed: string
  date: string
  location: string
}

export function SavedRecordsPreview() {
  const [records, setRecords] = useState<Record[]>([])

  useEffect(() => {
    // Simulate fetching data
    const fetchedRecords: Record[] = recordsData
      .map((record) => ({
        id: record.id,
        breed: record.breed,
        date: new Date(record.timestamp).toLocaleDateString(),
        location: `${record.location.lat}, ${record.location.lng}`,
      }))
      .slice(0, 5) // Take top 5 for preview
    setRecords(fetchedRecords)
  }, [])

  return (
    <Card className="col-span-full md:col-span-2 lg:col-span-1 shadow-lg">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-2xl font-bold">Saved Records</CardTitle>
        <Link href="/admin-dashboard/records" className="text-sm text-primary flex items-center gap-1">
          View All <ArrowRight className="h-4 w-4" />
        </Link>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Breed</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Location</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {records.map((record) => (
              <TableRow key={record.id}>
                <TableCell className="font-medium">{record.breed}</TableCell>
                <TableCell>{record.date}</TableCell>
                <TableCell>{record.location}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
