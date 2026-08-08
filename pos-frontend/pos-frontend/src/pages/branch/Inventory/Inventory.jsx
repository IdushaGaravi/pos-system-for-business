import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import InventoryFormDialog from "./InventoryFormDialog";
import InventoryTable from "./InventoryTable";

const Inventory = () => {
  const [selectedProductId, setSelectedProductId] = useState();
  const [quantity, setQuantity] = useState(1);

  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

  const handleAddInventory = () => {
    console.log(selectedProductId, quantity);
    
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Inventory Management</h1>

        <div className="flex gap-2">
          <Button onClick={() => setIsAddDialogOpen(true)} className='gap-2'><Plus />Add Inventory</Button>
          
        </div>
      </div>

      <InventoryTable setIsEditDialogOpen={setIsEditDialogOpen} />

      <InventoryFormDialog 
        open={isAddDialogOpen} 
        onOpenChange={setIsAddDialogOpen} 
        mode="add" 
        selectedProductId={selectedProductId}
        setSelectedProductId={setSelectedProductId}
        quantity={quantity}
        setQuantity={setQuantity}
        onSubmit={handleAddInventory}
      />

      <InventoryFormDialog 
        open={isEditDialogOpen} 
        onOpenChange={setIsEditDialogOpen} 
        mode="edit" 
        selectedProductId={selectedProductId}
        setSelectedProductId={setSelectedProductId}
        quantity={quantity}
        setQuantity={setQuantity}
        onSubmit={handleAddInventory}
      />
    </div>
  )
}

export default Inventory