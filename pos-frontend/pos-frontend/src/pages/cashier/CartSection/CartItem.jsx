import { Card } from "@/components/ui/card"
import { CardContent } from "@/components/ui/card"
import { Minus, Plus, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const CartItem = ({item}) => {
  return (
    <div>
        <Card className={"border-l-4 border-l-green-800"}>
            <CardContent className={"p-3"}>
                <div className="flex items-center justify-between">
                    <div className="flex-1">
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-sm text-muted-foreground">{item.sku}</p>
                    </div>

                    <div className="flex items-center space-x-2">
                        <div className="flex items-center border rounded">
                            <Button variant="ghost" size="sm">
                                <Minus className="w-4 h-4" />
                            </Button>

                            <span className="px-3 py-1 text-sm font-medium min-w-12 text-center">{item.quantity}</span>

                            <Button variant="ghost" size="sm">
                                <Plus className="w-4 h-4" />
                            </Button>
                        </div>

                        <div className="text-right">
                            <p className="font-medium">{item.sellingPrice}</p>
                            <p className="text-sm font-bold text-green-700">{(item.sellingPrice * item.quantity).toFixed(2)}</p>
                        </div>

                        <Button variant="ghost" size="sm">
                            <Trash2 className="w-4 h-4" />
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    </div>
  )
}

export default CartItem