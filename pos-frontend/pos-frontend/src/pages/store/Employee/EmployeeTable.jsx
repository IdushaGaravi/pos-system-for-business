import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import EditEmployeeDialog from "./EditEmployeeDialog"

const employees = [
    {
        id: 1,
        name: "Pablo Pandya",
        role: "BRANCH_CASHIER",
        email: "pablo@gmail.com",
        phone: "7418529631",
        password: "75388",
        loginAccess: "Enabled",
        status: "Active",
        assignedSince: "2024-01-15"
    },
]

const EmployeeTable = () => {
    return (
        <Table>
            <TableHeader>
            <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Branch</TableHead>
                <TableHead className="text-right">Actions</TableHead>
            </TableRow>
            </TableHeader>
            <TableBody>
            {employees.map((employee) => (
                <TableRow key={employee.id}>
                    <TableCell>{employee.name}</TableCell>
                    <TableCell>{employee.role}</TableCell>
                    <TableCell>{employee.email}</TableCell>
                    <TableCell>{employee.loginAccess}</TableCell>

                    <TableCell className="text-right">
                        <EditEmployeeDialog employee={employee} />
                    </TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
    )
}

export default EmployeeTable