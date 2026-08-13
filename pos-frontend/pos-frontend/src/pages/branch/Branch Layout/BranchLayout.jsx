import { Outlet } from "react-router"
import BranchSidebar from "../../cashier/BranchSidebar"
import BranchTopbar from "../Topbar/BranchTopbar"
import { CreditCard, FileText, LayoutDashboard, Package, Settings, ShoppingBag, UserCircle, Users } from 'lucide-react'

const branch = {
  name: "D-mart East Branch",
  address: "street 123, near Sardar Garden"
}

const navItems = [
  {
    name: "Dashboard",
    path: "/branch/dashboard",
    icon: <LayoutDashboard className="w-5 h-5" />,
  },
  {
    name: "Orders",
    path: "/branch/orders",
    icon: <ShoppingBag className="w-5 h-5" />,
  },
  {
    name: "Transactions",
    path: "/branch/transactions",
    icon: <CreditCard className="w-5 h-5" />,
  },
  {
    name: "Inventory",
    path: "/branch/inventory",
    icon: <Package className="w-5 h-5" />,
  },
  {
    name: "Employees",
    path: "/branch/employees",
    icon: <Users className="w-5 h-5" />,
  },
  {
    name: "Customers",
    path: "/branch/customers",
    icon: <UserCircle className="w-5 h-5" />,
  },
  {
    name: "Reports",
    path: "/branch/reports",
    icon: <FileText className="w-5 h-5" />,
  },
  {
    name: "Settings",
    path: "/branch/settings",
    icon: <Settings className="w-5 h-5" />,
  },
];

const BranchLayout = ({ children }) => {
    return (
        <div className="flex h-screen bg-gradient-to-br from-primary/5 via-background to-primary/10">
            <BranchSidebar />

            <div className="flex-1 flex flex-col">
                <BranchTopbar branch={branch} navItems={navItems} />

                <main className="flex-1 overflow-y-auto p-8 md:p-10 lg:p-12 m-4">
                    {children || <Outlet />}
                </main>
            </div>
        </div>
    )
}

export default BranchLayout