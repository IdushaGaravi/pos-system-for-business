import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@base-ui/react"
import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Save } from "lucide-react"

const workingDays = [
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
    "Sun"
]

const BranchInfo = () => {
    const [branchInfo, setBranchInfo] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        workingDays: ["Mon", "Tue"]
    })

    const handleBranchInfoChange = (field, value) => {
        setBranchInfo({
            ...branchInfo, [field]:value
        })
    }

    const handleSaveSettings = () => {
        console.log("branch info", branchInfo)
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Branch Information</CardTitle>
                <CardDescription>Update your branch details and bussiness time</CardDescription>
            </CardHeader>

            <CardContent className='space-y-6'>
                <div className="space-y-4">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Branch Name</label>

                            <Input 
                                placeholder="Branch Name"
                                name="name" 
                                value={branchInfo.name} 
                                onChange={(e) => handleBranchInfoChange("name", e.target.value)} 
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Address</label>

                            <Input 
                                placeholder="Address"
                                name="address" 
                                value={branchInfo.address} 
                                onChange={(e) => handleBranchInfoChange("address", e.target.value)} 
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Phone Number</label>

                            <Input 
                                placeholder="Branch Contact Number"
                                value={branchInfo.phone} 
                                onChange={(e) => handleBranchInfoChange("phone", e.target.value)} 
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Email</label>

                            <Input 
                                placeholder="Branch Contact Email"
                                value={branchInfo.email} 
                                onChange={(e) => handleBranchInfoChange("email", e.target.value)} 
                            />
                        </div>
                    </div> 

                    <Separator />

                    <div className="mt-4">
                        <label className="text-sm font-medium" htmlFor="">Working Days</label>

                        <div className="grid grid-cols-2 gap-2 mt-2 md:grid-cols-4">
                            {workingDays.map((day) => <div className="flex gap-2 items-center">
                                <Checkbox 
                                    checked={branchInfo.workingDays.includes(day)}
                                    onCheckedChange = {
                                        (checked) => {
                                            if(checked){
                                                handleBranchInfoChange("workingDays",
                                                    [...branchInfo.workingDays, day]
                                                )
                                            }
                                            else{
                                                handleBranchInfoChange("workingDays",
                                                    branchInfo.workingDays.filter((d) => d !== day)
                                                )
                                            }
                                        }} 
                                    />

                                    <label htmlFor="" className="text-sm text-gray-700">{day}</label>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div>
                    <Button onClick={handleSaveSettings}><Save className="h-4 w-4" />Save Changes</Button>
                </div>
                
            </CardContent>
        </Card>
    )
}

export default BranchInfo