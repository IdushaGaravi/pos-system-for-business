import { Barcode } from "lucide-react"
import { Button } from "../../../components/ui/button"
import { Input } from "../../../components/ui/input"
import React from "react"
import ProductCard from "./ProductCard"

const products = [
    {
        id: 1,
        image: "https://media.istockphoto.com/id/515750480/photo/mans-white-t-shirt.jpg?s=2048x2048&w=is&k=20&c=2vHfLZJB4N04AiQX0lFEiT1NkKeGZbJ7rPgp7wFHPVM=",
        name: "Product 1",
        sku: "SKU001",
        sellingPrice: 10.99,
        category: "men_shirt"
    },
    {
        id: 2,
        image: "https://media.istockphoto.com/id/515750480/photo/mans-white-t-shirt.jpg?s=2048x2048&w=is&k=20&c=2vHfLZJB4N04AiQX0lFEiT1NkKeGZbJ7rPgp7wFHPVM=",
        name: "Product 2",
        sku: "SKU002",
        sellingPrice: 15.99,
        category: "men_shirt"
    },
    {
        id: 1,
        image: "https://media.istockphoto.com/id/515750480/photo/mans-white-t-shirt.jpg?s=2048x2048&w=is&k=20&c=2vHfLZJB4N04AiQX0lFEiT1NkKeGZbJ7rPgp7wFHPVM=",
        name: "Product 1",
        sku: "SKU001",
        sellingPrice: 10.99,
        category: "men_shirt"
    },
]

const ProductSection = () => {
    const [searchTerm, setSearchTerm] = React.useState("")
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value)
    }
    return (
        <div className="w-2/5 flex flex-col bg-card border-r">
            <div className="p-4 border-b bg-muted">
                <Input className="py-5" placeholder="Search products..." value={searchTerm} type={"text"} onChange={handleSearchChange} />

                <div className="flex items-center justify-between pt-2">
                    <span>2 products found</span>
                    <Button variant="outline" size="sm" className="text-xs">
                        <Barcode />Scan
                    </Button>
                </div>
            </div>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 p-5'>
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default ProductSection