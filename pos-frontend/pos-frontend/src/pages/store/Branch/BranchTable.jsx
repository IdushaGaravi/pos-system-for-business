import { Edit, Trash } from "lucide-react"
import { Button } from "../../../components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../../components/ui/table"

const orders = [
  {
    id: 1,
    createdAt: "Jul 8, 2025, 12:37 PM",
    customer:{
      fullName: "John Doe",
      phone: "0152978542"
    },
    totalAmount: 2499,
    paymentType: "CASH",
    status: "COMPLETED",
    items: [
      {
        id: 2,
        product: {
          image: "https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?q=80&w=878&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          name: "Women handbag",
          sellingPrice: 499,
          sku: "HNB-H-LEATHER-BROWN-2025"
        },
        quantity: 5,

      }
    ]
  }
]
const BranchTable = ({onEdit}) => {
    return (
        <div>
            <Table>
                <TableHeader>
                <TableRow>
                    <TableHead className="">Branch Name</TableHead>
                    <TableHead className="">Address</TableHead>
                    <TableHead className="">Manager</TableHead>
                    <TableHead className="">Phone</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                </TableRow>
                </TableHeader>
                <TableBody>
                {orders.map((order) => (
                    <TableRow key={order.id}>
                    <TableCell>{order.id}</TableCell>
                    <TableCell>{order.createdAt}</TableCell>
                    <TableCell>{order.customer?.fullName}</TableCell>
                    <TableCell>${order.totalAmount.toFixed(2)}</TableCell>
                    <TableCell className="text-right">
                        <div className="flex gap-2 items-center justify-end">
                            <Button variant="outline" onClick={() => onEdit(order)}>
                                <Edit />
                            </Button>

                            <Button variant="outline" onClick={() => onEdit(order)}>
                                <Trash />
                            </Button>
                        </div>
                        
                    </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </div>   
    )
}

export default BranchTable