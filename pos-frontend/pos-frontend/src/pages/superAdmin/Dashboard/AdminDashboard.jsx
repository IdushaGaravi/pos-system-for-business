import StoreRegistrationChart from "../chart/StoreRegistrationChart"
import StoreStatusChart from "../chart/StoreStatusChart"
import AdminDashboardOverview from "./AdminDashboardOverview"

const AdminDashboard = () => {
  return (
    <div>
      <div className="pb-5">
        <h1 className="font-bold text-3xl">Admin Dashboard</h1>
        <p className="text-muted-foreground">Overview of all stores and system statistics</p>
      </div>

      <AdminDashboardOverview />

      <div className="grid gap-4 md:grid-cols-2 py-5">
        <StoreRegistrationChart />
        <StoreStatusChart />
      </div>
    </div>
  )
}

export default AdminDashboard