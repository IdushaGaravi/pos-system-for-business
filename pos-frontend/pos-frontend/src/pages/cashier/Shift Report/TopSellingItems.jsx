import { Card, CardContent } from "../../../components/ui/card"

const ShiftData = {
  topSellingProducts: [
    {
      id: 2,
      name: "Men Geometric Print Polo Neck Cotton Black T-Shirt",
      sellingPrice: 899,
      quantity: 5
    },
    {
      id: 6,
      name: "Women Geometric Print Polo Neck Cotton Black T-Shirt",
      sellingPrice: 1200,
      quantity: 8
    },
  ]
}

const TopSellingItems = () => {
  return (
    <Card>
      <CardContent>
        <h2 className="text-xl font-semibold mb-4">Top Selling Items</h2>
        <div className='space-y-3'>
          {ShiftData.topSellingProducts.map((product, index) =>
            <div key={product.id} className='flex items-center'>
              <div className='w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium mr-3'>
                {index + 1}
              </div>

              <div className='flex-1'>
                <div className='flex justify-between'>
                  <span>{product.name}</span>
                  <span>${product.sellingPrice.toFixed(2)}</span>
                </div>

                <div>
                  <span className='flex justify-between text-sm text-muted-foreground'>{product.quantity} units sold</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export default TopSellingItems