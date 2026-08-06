import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

const heldOrders = [
    {
        id: "3467",
        items: [1,1,1,1],
        timeStamp: "2023-10-01T12:00:00Z",
    },
    {
        id: "3467",
        items: [1,1,1,1],
        timeStamp: "2023-10-01T12:00:00Z",
    },
]

const HeldOrderDialog = ({showHeldOrdersDialog, setShowHeldOrdersDialog}) => {
    const handleResumeOrder = (order) => {
        console.log("Resuming order: ", order)
    }
    return (
        <Dialog open={showHeldOrdersDialog} onOpenChange={setShowHeldOrdersDialog}>
            <DialogContent className="sm:max-w-lg">
                <DialogHeader>Held Orders</DialogHeader>

                <div className="space-y-3">
                    {heldOrders.map((order) => (
                        <Card key={order.id}>
                            <CardContent>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="font-medium">Order ID: #{order.id}</h3>
                                    <p className="text-sm text-muted-foreground">Items: {order.items.length}</p>
                                    <p className="text-sm text-muted-foreground">
                                        Time: {new Date(order.timeStamp).toLocaleString()}</p>
                                    </div>
                                    <Button size="sm" onClick={() => handleResumeOrder(order)}><Play />Resume</Button>
                                </div>   
                            </CardContent>
                            
                        </Card>
                    ))}
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default HeldOrderDialog