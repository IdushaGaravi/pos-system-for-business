import { CalendarIcon, DollarSign } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const orders = [
  {
    id: 1, 
    date: '2023-10-01', 
    totalAmount: "50.00", 
    status: "Completed", 
    createdAt: '2023-10-01 10:00AM',
    paymentType: "Cash",
    items: [
      {
        id: 1,
        product: {
          name: "Men t-shirt"
        },
        quantity: 2,
        price: "20.00"
      }
    ]
  },
]

const PurchaseHistory = () => {
  return (
    <div className='p-4 border-t'>
      <Card>
        <CardHeader>
          <CardTitle>Purchase History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='space-y-4'>
            {orders.map((order) => (
              <div key={order.id} className='border rounded-lg p-4'>
                <div className='flex justify-between items-start mb-3'>
                  <div>
                    <h3 className='font-medium'>Order #{order.id}</h3>
                    <div className='flex items-center gap-2 text-sm text-muted-foreground mb-1'>
                      <CalendarIcon className='h-4 w-4 mr-1 text-muted-foreground' />
                      {order.createdAt}
                    </div>
                    </div>
                    <div className='text-right'>
                      <div className='flex items-center gap-1 mb-1'>
                        <DollarSign className='h-4 w-4 text-muted-foreground' />
                        {order.totalAmount}
                      </div>

                      <Badge>
                        {order.status}
                      </Badge>
                  </div>
                </div>

                <div className='text-sm text-muted-foreground mb-2'>
                  Payment: {order.paymentType}
                </div>

                <div className='border-t pt-3'>
                  <h4 className='text-sm font-medium mb-2'>Items: </h4>

                  <div className='space-y-1'>
                    {order.items && order.items.map((item) => (
                      <div key={item.id} className='flex justify-between'>
                        <span className='text-muted-foreground'>{item.product.name}</span>
                        <span>{item.quantity || 1} * {item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default PurchaseHistory