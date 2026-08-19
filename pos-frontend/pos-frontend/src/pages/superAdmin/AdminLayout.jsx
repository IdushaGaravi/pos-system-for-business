import { Outlet } from "react-router"
import { LayoutDashboard,
  Store,
  Settings,
  FileText,
  Clock,
} from "lucide-react";
import AdminTopBar from "./AdminTopBar";
import BranchSidebar from "../cashier/BranchSidebar";

const navLinks = [
  {
    name: "Dashboard",
    path: "/super-admin/dashboard",
    icon: <LayoutDashboard className="w-5 h-5" />,
  },
  {
    name: "Stores",
    path: "/super-admin/stores",
    icon: <Store className="w-5 h-5" />,
  },
  {
    name: "Subscription Plans",
    path: "/super-admin/subscriptions",
    icon: <FileText className="w-5 h-5" />,
  },
  {
    name: "Pending Requests",
    path: "/super-admin/requests",
    icon: <Clock className="w-5 h-5" />,
  },
 

  {
    name: "Settings",
    path: "/super-admin/settings",
    icon: <Settings className="w-5 h-5" />,
  },
];

const AdminLayout = ({ children }) => {
    return (
        <div className="flex h-screen bg-gradient-to-br from-primary/5 via-background to-primary/10">
            <BranchSidebar navItems={navLinks} />

            <div className="flex-1 flex flex-col">
                <AdminTopBar />

                <main className="flex-1 overflow-y-auto p-8 md:p-10 lg:p-12 m-4">
                    {children || <Outlet />}
                </main>
            </div>
        </div>
    )
}

export default AdminLayout