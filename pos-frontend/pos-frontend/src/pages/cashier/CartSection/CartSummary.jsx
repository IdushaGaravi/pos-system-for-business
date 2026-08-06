import { Separator } from "@/components/ui/separator"


const CartSummary = () => {
  return (
    <div className="border-t bg-muted p-4">
        <div className="space-y-2 text-sm">
            <div className="flex justify-between">
                <span>Subtotal</span>
                <span>$2398.00</span>
            </div>
            <div className="flex justify-between">
                <span>Tax</span>
                <span>$239.00</span>
            </div>

            <Separator />
            
            <div className="flex justify-between">
                <span>Total</span>
                <span>$2637.80</span>
            </div>
        </div>
    </div>
  )
}

export default CartSummary