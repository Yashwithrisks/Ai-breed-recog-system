import { AdminDashboardAnalytics } from "@/components/admin-dashboard-analytics"
import { AdminDashboardBreedDatabase } from "@/components/admin-dashboard-breed-database"
import { AdminDashboardRecords } from "@/components/admin-dashboard-records"

export function AdminDashboard() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          <AdminDashboardAnalytics />
        </div>
        <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
          <AdminDashboardBreedDatabase />
          <AdminDashboardRecords />
        </div>
      </main>
    </div>
  )
}
