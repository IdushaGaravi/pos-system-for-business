import { Bell, User } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const branch = {
  name: "D-mart East Branch",
  address: "street 123, near Sardar Garden"
}

const userProfile = {
  name: "Pablo Panadya",
  email: "pablo@example.com"
}

const BranchTopbar = () => {
  return (
    <div>
      <header className="bg-background border-b px-6 py-4 flex items-center justify-between">
        <div>
          <h1>{branch ? branch.name : "Branch Dashboard"}</h1>
          <p>
            {new Date().toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric"
            })}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <Button>
            <Bell className="h-5 w-5" />
          </Button>

          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center">
              <User />
            </div>

            <div className="hidden md:block">
              <p className="text-sm font-medium text-foreground">{userProfile.name}</p>
              <p className="text-xs text-muted-foreground">{userProfile.email}</p>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default BranchTopbar