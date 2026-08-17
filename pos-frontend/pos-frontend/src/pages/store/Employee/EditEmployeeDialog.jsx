import { Edit } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import EmployeeForm from "./EmployeeForm"

const roles = [
    "BRANCH_ADMIN",
    "BRANCH_CASHIER",
    "BRANCH_MANAGER"
]

const EditEmployeeDialog = ({employee}) => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button variant="outline">
          <Edit />
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Employee</DialogTitle>
        </DialogHeader>
        
        <EmployeeForm roles={roles} initialData={employee} />
      </DialogContent>
    </Dialog>
  )
}

export default EditEmployeeDialog