import { Download, Eye, RefreshCw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../../components/ui/table"
import { DialogFooter, DialogTitle, DialogHeader, DialogContent, Dialog } from "../../../components/ui/dialog"
import { useState } from "react"
import OrderDetails from '../../cashier/Order History/OrderDetails/OrderDetails'

const orders = [
  {
    id: 1,
    createdAt: "Jul 8, 2025, 12:37 PM",
    customer:{
      fullName: "John Doe",
      phone: "0152978542"
    },
    cashierId: 45,
    totalAmount: 2499,
    paymentType: "CASH",
    status: "COMPLETED",
    items: [
      {
        id: 2,
        product: {
          image: "https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?q=80&w=878&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          name: "Women handbag",
          sellingPrice: 499,
          sku: "HNB-H-LEATHER-BROWN-2025"
        },
        quantity: 5,

      }
    ]
  }
]

const Orders = () => {
  const [showOrderInvoiceDialog, setShowOrderInvoiceDialog] = useState(false)
  const [selectedOrder, setSelectedOrder] = useState(null);
  const handleViewOrderDetails = (order) => {
    setSelectedOrder(order)
    setShowOrderInvoiceDialog(true)
  }

  return (
    <div className='space-y-6'>
      <div className='flex justify-between items-center'>
        <h1 className='font-bold text-3xl tracking-tight'>Orders</h1>

        <Button className='gap-2' variant='outline'>
          <RefreshCw />
          Refresh
        </Button>
      </div>

      <div>
        <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="">Order ID</TableHead>
            <TableHead className="">Date/Time</TableHead>
            <TableHead className="">Customer</TableHead>
            <TableHead className="">Cashier</TableHead>
            <TableHead className="">Amount</TableHead>
            <TableHead className="">Payment Type</TableHead>
            <TableHead className="">Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell>{order.id}</TableCell>
              <TableCell>{order.createdAt}</TableCell>
              <TableCell>{order.customer?.fullName}</TableCell>
              <TableCell>{order.cashierId}</TableCell>
              <TableCell>${order.totalAmount.toFixed(2)}</TableCell>
              <TableCell>{order.paymentType}</TableCell>
              <TableCell>{order.status}</TableCell>
              <TableCell className="text-right">
                <Button onClick={() => handleViewOrderDetails(order)}>
                  <Eye />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </div>

      <Dialog open={showOrderInvoiceDialog} onOpenChange={setShowOrderInvoiceDialog}>
        <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>
                  Order - Invoice
                </DialogTitle>
              </DialogHeader>

              <OrderDetails selectedOrder={selectedOrder} />  

              <DialogFooter>
                <Button>
                  <Download />
                  Download PDF
                </Button>
              </DialogFooter>
            </DialogContent>
      </Dialog>
    </div>
  )
}

export default Orders