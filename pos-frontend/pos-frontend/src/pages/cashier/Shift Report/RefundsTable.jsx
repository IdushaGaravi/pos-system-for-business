import { Card, CardContent } from "../../../components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../../components/ui/table"

const shiftData = {
  refunds:[
    {
      id: 234,
      orderId: 2,
      reason: "Wrong product received",
      amount: 699
    }
  ]
}

const RefundsTable = () => {
  return (
    <Card>
      <CardContent>
        <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-37.5">Refund ID</TableHead>
              <TableHead className="w-37.5">Order ID</TableHead>
              <TableHead className="w-25">Reason</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {shiftData.refunds.map((refund) => (
              <TableRow key={refund.id}>
                <TableCell>RFD - {refund.id}</TableCell>
                <TableCell>ORD - {refund.orderId}</TableCell>
                <TableCell>{refund.reason}</TableCell>
                <TableCell className="text-right">${refund.amount.toFixed(2)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

export default RefundsTable