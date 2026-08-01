import { Card, CardContent } from  "../../../components/ui/card"

const shiftData = {
  cashier: {
    fullName: "Pablo Panday"
  },
  duration: "8 hours",
  shiftStart: "Aug 8, 2025, 09:00 AM",
  shiftEnd: "",
  totalOrders: 25,
  totalSales: 56222,
  totalRefund: 42665,
  netSales: 13557
}

const SalesSummaryCard = () => {
  return (
    <Card>
      <CardContent>
        <h2 className="text-xl font-semibold mb-4">Sales Summary</h2>

        <div className='space-y-2'>
          <div className='flex justify-between'>
            <span className="text-muted-foreground">Total Orders: </span>
            <span className="font-medium">{shiftData.totalOrders}</span>
          </div>

          <div className='flex justify-between'>
            <span className="text-muted-foreground">Total Sales: </span>
            <span className="font-medium">${shiftData.totalSales.toFixed(2)}</span>
          </div>

          <div className='flex justify-between'>
            <span className="text-muted-foreground">Total Refunds: </span>
            <span className="font-medium text-red-500">-${shiftData.totalRefund.toFixed(2)}</span>
          </div>

          <div className='flex justify-between border-t'>
            <span className="text-muted-foreground">Net Sales: </span>
            <span className="font-medium">${shiftData.netSales.toFixed(2)}</span>
          </div>
        </div>
      </CardContent>
    </Card>  
  )
}

export default SalesSummaryCard