import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import ProductForm from "./ProductForm"
import ProductTable from "./ProductTable"

const Products = () => {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-2xl">Product Management</h1>

        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger>
            <Button><Plus />Add Product</Button>
          </DialogTrigger>
            <DialogContent className="sm:max-w-lg">
              <DialogHeader>
                <DialogTitle>Add Product</DialogTitle>
              </DialogHeader>

              <div className="h-[80vh] overflow-y-auto">
                <ProductForm onCancel={() => setIsAddDialogOpen(false)} />
              </div>
    
            </DialogContent>
        </Dialog> 
      </div>
      
      <Card>
        <CardContent>
          <ProductTable onEdit={() => setIsEditDialogOpen(true)} />
        </CardContent>
      </Card>

      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Edit Product</DialogTitle>
          </DialogHeader>

          <div className="h-[80vh] overflow-y-auto">
            <ProductForm isEditing={true} onCancel={() => setIsEditDialogOpen(false)} />
          </div>

        </DialogContent>
      </Dialog>
    </div>
  )
}

export default Products