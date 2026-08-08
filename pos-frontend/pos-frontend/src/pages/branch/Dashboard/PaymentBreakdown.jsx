import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CreditCard } from "lucide-react"

const  paymentBreakdown = [
    {
        type: "Card",
        transactionCount: 30,
        percentage: 20,
        totalAmount: 5899
    },
    {
        type: "Cash",
        transactionCount: 20,
        percentage: 30,
        totalAmount: 1899
    },
    {
        type: "Upi",
        transactionCount: 50,
        percentage: 50,
        totalAmount: 8899
    },
]

const PaymentBreakdown = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle className='text-xl font-semibold'>
                    Payment Breakdown
                </CardTitle>
            </CardHeader>

            <CardContent>
                <div className="space-y-4">
                    {
                        paymentBreakdown.map((payment) => (
                            <div key={payment.type} className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <CreditCard />
                                    <span>{payment.type}</span>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-32 h-2 bg-red-100 rounded-full overflow-hidden">
                                        <div 
                                            className="h-full bg-primary"
                                            style={{width: `${payment.percentage ?? 0}%`}}
                                        ></div>
                                    </div>

                                    <span className="text-sm font-medium">
                                        ${payment.totalAmount}
                                    </span>

                                    <span className="text-xs text-gray-500">
                                        {payment.percentage}
                                    </span>

                                    <span className="text-xs text-gray-500">
                                        {payment.transactionCount} txns
                                    </span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </CardContent>
        </Card>
    )
}

export default PaymentBreakdown