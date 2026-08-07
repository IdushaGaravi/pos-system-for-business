import { Button } from "@/components/ui/button"
import { CreditCard, Pause } from "lucide-react"
import { useState } from "react"
import PaymentDialog from "./PaymentDialog"

const cartItems = [1]

const PaymentSection = () => {
    const [showPaymentDialog, setShowPaymentDialog] = useState(false);

    return (
        <div className="flex flex-1 flex-col p-4 justify-end">
            <div className="space-y-4">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-green-600 dark:text-green-200">{899}$</h1>

                    <p className="text-sm text-muted-foreground">Total Amount</p>
                </div>

                <div>
                    <div className="mb-3">
                        <Button 
                            onClick={() => setShowPaymentDialog(true)}
                            disabled={cartItems.length === 0} 
                            className='w-full py-3 text-lg font-semibold'>
                            <CreditCard className="w-5 h-5 mr-2" />
                            Process Payment
                        </Button>
                    </div>

                    <div>
                        <Button variant="outline" className='w-full py-3 text-lg font-semibold'>
                            <Pause className="w-5 h-5 mr-2" />
                            Hold Order
                        </Button>
                    </div>
                </div>
            </div>

            <div>
                <PaymentDialog showPaymentDialog={showPaymentDialog} setShowPaymentDialog={setShowPaymentDialog} />
            </div>
        </div>
    )
}

export default PaymentSection