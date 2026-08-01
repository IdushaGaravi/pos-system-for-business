import { Card, CardContent } from "../../../components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../../components/ui/table"

const shiftData = {
  recentOrders: [
    {
      id: 1,
      createdAt: "01.25 PM",
      paymentType: "CASH",
      totalAmount: 7899
    },
    {
      id: 2,
      createdAt: "02.30 PM",
      paymentType: "CARD",
      totalAmount: 15678
    },
  ]
}

const RecentOrdersTable = () => {
  return (
    <Card>
      <CardContent>
        <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-37.5">Order ID</TableHead>
              <TableHead className="w-37.5">Time</TableHead>
              <TableHead className="w-25">Payment</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {shiftData.recentOrders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.createdAt}</TableCell>
                <TableCell>{order.paymentType}</TableCell>
                <TableCell className="text-right">${order.totalAmount.toFixed(2)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

export default RecentOrdersTable