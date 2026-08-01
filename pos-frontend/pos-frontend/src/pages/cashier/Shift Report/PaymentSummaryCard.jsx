import { CreditCard } from "lucide-react"
import { Card, CardContent } from "../../../components/ui/card"

const shiftData = {
  paymentSummaries: [
    {
      type: "CASH",
      totalAmount: 7516,
      transactionCount: 6
    },
    {
      type: "CARD",
      totalAmount: 5030,
      transactionCount: 8
    },
    {
      type: "UPI",
      totalAmount: 43676,
      transactionCount: 12
    },
  ],
  totalSales: 56222,
}

const PaymentSummaryCard = () => {
  return (
    <Card>
      <CardContent className='p-6'>
        <h2 className="text-xl font-semibold mb-4">Payment Summary</h2>
        <div className='space-y-4'>
          {shiftData.paymentSummaries.map((payment) =>
            <div key={payment.type} className='flex items-center'>
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                <CreditCard />
              </div>
              <div className='flex-1'>
                <div className='flex justify-between'>
                  <span className="font-medium">{payment.type}</span>
                  <span className="font-bold">${payment.totalAmount.toFixed(2)}</span>
                </div>
                <div className='flex justify-between text-sm text-muted-foreground'>
                  <span>{payment.transactionCount} transactions</span>  
                  <span>{(payment.totalAmount / shiftData.totalSales * 100).toFixed(1)}%</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export default PaymentSummaryCard