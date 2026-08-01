import { CardContent } from '../../../components/ui/card'
import { Card } from '../../../components/ui/card'
import { Badge } from '../../../components/ui/badge'

const ProductCard = ({product}) => {
    return (
        <Card key={product.id} className="py-4">
            <CardContent>
                <div className='aspect-square bg-muted rounded-md mb-2 flex items-center justify-center justify-items-center'>
                    <img className="h-30 w-30 object-cover" src={product.image} alt={product.name} />          
                </div>

                <div>
                    <h3 className="font-medium text-sm truncate">{product.name}</h3>
                    <p className="text-xs text-muted-foreground">{product.sku}</p>
                    <div className='flex items-center justify-between'>
                        <p className="font-semibold text-green-700">
                            {product.sellingPrice.toFixed(2)} $
                        </p>
                        <Badge variant="secondary" className="text-xs">
                            {product.category}
                        </Badge>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default ProductCard