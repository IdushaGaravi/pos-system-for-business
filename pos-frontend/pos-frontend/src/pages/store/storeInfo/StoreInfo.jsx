import { Edit } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import BasicInfo from "./BasicInfo"
import ContactInfo from "./ContactInfo"
import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import EditStoreForm from "./EditStoreForm"
import { getInitialValues } from "./formUtils"

const storeData = {
    brand: "Rutika Shopping",
    description: "Shop in minute",
    storeType: "Retail Store",
    contact: {
        phone: "+123 45678908",
        address: "street 123, surat, new rutika shopping mall",
        email: "rutikashopping@gmail.com"
    }
}

const StoreInfo = () => {
    const [isOpenEditStoreDialog, setIsOpenEditStoreDialog] = useState(false)

    const onSubmit = () => {
        setIsOpenEditStoreDialog(false)
    }

    const onCancel = () => {
        setIsOpenEditStoreDialog(false)
    }

    return (
        <>
            <Card>
                <CardHeader>
                    <div className="flex justify-between items-center">
                        <CardTitle className="font-semibold">Store Information</CardTitle>

                        <Button onClick={() => setIsOpenEditStoreDialog(true)} variant="outline" size="sm"><Edit />Edit Details</Button>
                    </div>
                </CardHeader>

                <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                        <BasicInfo storeData={storeData} />
                        <ContactInfo storeData={storeData} />
                    </div>

                    <div className="mt-4 border-t border-gray-200">
                        <p className="text-sm text-muted-foreground">Store created on {new Date().toLocaleString()}</p>
                    </div>
                </CardContent>
            </Card>

            <Dialog open={isOpenEditStoreDialog} onOpenChange={setIsOpenEditStoreDialog}>
                <DialogContent className={"sm:max-w-150 max-h-[90vh] overflow-y-auto"}>
                    <DialogHeader>
                        <DialogTitle>Edit Store Details</DialogTitle>
                    </DialogHeader>

                    <EditStoreForm onSubmit={onSubmit} onCancel={onCancel} initialValues={getInitialValues(storeData)} />
                </DialogContent>
            </Dialog>
        </>
    )
}

export default StoreInfo