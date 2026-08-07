import { Pause, ShoppingCart, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import CartItem from "./CartItem"
import CartSummary from "./CartSummary"
import HeldOrderDialog from "./HeldOrderDialog"
import { useState } from "react"

const cartItems = [
  {
    name: "Men slim shirt (Pack 0f 2)",
    sku: "SKU123",
    quantity: 3,
    sellingPrice: 499.99
  },
  {
    name: "Men slim shirt (Pack 0f 2)",
    sku: "SKU123",
    quantity: 3,
    sellingPrice: 499.99
  },
]
const CartSection = () => {
  const [showHeldOrdersDialog, setShowHeldOrdersDialog] = useState(false)
  return (
    <>
      <div className="border-r w-2/5 flex flex-col bg-card">
        <div className="p-4 border-b ">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold flex items-center"><ShoppingCart />Cart ({3} items)</h2>
            <div className="flex space-x-2">
              <Button onClick={() => setShowHeldOrdersDialog(true)} variant={"outline"} size="sm">
                <Pause className="w-4 h-4 mr-1" />
                Held
              </Button>

              <Button variant={"outline"} size="sm">
                <Trash2 className="w-4 h-4 mr-1" />
                Clear
              </Button>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto min-h-0 p-4 space-y-3">
          {cartItems.map((item, index) => (
            <CartItem item={item} key={index} />
          ))}
        </div>

        <CartSummary />
        
      </div>

      <HeldOrderDialog showHeldOrdersDialog={showHeldOrdersDialog} setShowHeldOrdersDialog={setShowHeldOrdersDialog} />
    </>
  )
}

export default CartSection