import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import EmployeeForm from "./EmployeeForm"

const roles = [
    "BRANCH_ADMIN",
    "BRANCH_CASHIER",
    "BRANCH_MANAGER"
]

const AddEmployeeDialog = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button>
          <Plus />
          Add Employee
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Employee</DialogTitle>
        </DialogHeader>
        
        <EmployeeForm roles={roles} />
      </DialogContent>
    </Dialog>
  )
}

export default AddEmployeeDialog