import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { PrinterIcon } from "lucide-react"

const ReturnReceiptDialog = ({
  showReturnReceiptDialog,
  setShowReturnReceiptDialog,
  selectedOrder
}) => {
  return (
    <Dialog open={showReturnReceiptDialog} onOpenChange={setShowReturnReceiptDialog}>
      <DialogContent  className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>Return Receipt</DialogTitle>
        </DialogHeader>

          <div className="bg-background max-h-96 overflow-y-auto">
          <div>
            <h3 className="font-bold text-lg">D-MART BRANCH</h3>
            <p>123 main Street, city</p>
            <p>Tel: 123-456-789</p>
          </div>

          <div className="text-center mb-4">
            <h4 className="font-bold">Return Receipt</h4>
          </div>

          <div>
            {/* <p>Return #: RTN - {Date.now().toString.substring(8)}</p> */}
            <p>Original Order : {selectedOrder.id}</p>
            <p>Date: {new Date().toLocaleString()}</p>
            <p>Customer : {selectedOrder?.customer?.fullName}</p>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-37.5">Image</TableHead>
                <TableHead className="w-37.5">Item</TableHead>
                <TableHead className="w-25">Quantity</TableHead>
                <TableHead className="text-right">Price</TableHead>
                <TableHead className="text-right">Total</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {selectedOrder.items.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                      <div className="w-10 h-10">
                          {   
                              item.product?.image && 
                              <img
                                  src={item.product?.image}
                                  className="w-10 h-10 object-cover rounded-md"
                              />
                          }
                      </div>
                  </TableCell>
                  <TableCell>
                      <div className="flex flex-col">
                          <span className="font-medium">{item.product.name.slice(0, 20)}...</span>
                          <span className="text-xs text-gray-500">SKU: {item.product?.sku}</span>
                      </div>
                  </TableCell>
                  <TableCell>{item.quantity}</TableCell>
                  <TableCell>${item.product?.sellingPrice}</TableCell>
                  <TableCell className="text-right">${(item.product?.sellingPrice*item.quantity)?.toFixed(2)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <DialogFooter>
            <Button>
              <PrinterIcon className="h-4 w-4" />
              Print & Complete
            </Button>
          </DialogFooter>

        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ReturnReceiptDialog