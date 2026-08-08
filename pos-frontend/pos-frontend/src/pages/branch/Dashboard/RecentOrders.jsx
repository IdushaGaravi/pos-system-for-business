import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
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
const RecentOrder = ({}) => {
  return (
    <Card>
        <CardHeader>
            <CardTitle className='text-2xl font-bold mb-4'>Recent Orders</CardTitle>
        </CardHeader>

        <CardContent>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="">Order ID</TableHead> 
                        <TableHead className="">Customer</TableHead>
                        <TableHead className="">Amount</TableHead>
                        <TableHead className="">Status</TableHead>
                        <TableHead className="text-right">Date/Time</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                {orders.map((order) => (
                    <TableRow key={order.id}>
                    <TableCell>{order.id}</TableCell>
                    <TableCell>{order.customer?.fullName}</TableCell>
                    <TableCell>${order.totalAmount.toFixed(2)}</TableCell>
                    <TableCell className=''>{order.status}</TableCell>
                    <TableCell className='text-right'>{order.createdAt}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </CardContent>  
    </Card>
  )
}

export default RecentOrder