import { useFormik } from "formik"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useEffect } from "react"
import { Select } from "@/components/ui/select"
import { SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

const EmployeeForm = ({initialData, onSubmit, roles}) => {
    const formik = useFormik({
        initialValues: initialData || {
            fullName: "",
            email: "",
            phone: "",
            role: "",
            branchId: initialData ? initialData.branchId : ""
        },
        onSubmit: (values) => {
            console.log(values)
            onSubmit()
        }
    })

    useEffect(() => {
        if(initialData) {
            formik.setValues(initialData)
        } else {
            formik.resetForm()
        }
    }, [initialData])


    return (
        <form onSubmit={formik.handleSubmit} className="space-y-4 py-2">
            <div className="space-y-2">
                <Label>Full Name</Label>
                <Input 
                    name="fullName" 
                    value={formik.values.fullName}
                    onChange={formik.handleChange}
                    placeholder="Enter Employee Name" 
                />
            </div>

            <div className="space-y-2">
                <Label>Email</Label>
                <Input 
                    name="email" 
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    placeholder="Enter Employee Email" 
                />
            </div>

            <div className="space-y-2">
                <Label>Passwword</Label>
                <Input 
                    name="password" 
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    placeholder="Enter Employee Password" 
                />
            </div>

            <div className="space-y-2">
                <Label>Phone</Label>
                <Input 
                    name="phone" 
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    placeholder="Enter Employee Phone" 
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label>Role</Label>

                    <Select value={formik.values.role} onValueChange={(value) => 
                        formik.setFieldValue("role", value)
                    }>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select Role" />
                        </SelectTrigger>

                        <SelectContent>
                            {roles.map((role) => 
                                <SelectItem key={role} value={role}>
                                    {role}
                                </SelectItem>
                            )}
                        </SelectContent>
                        
                    </Select>
                </div>
            </div>

            <div>
                <Button 
                    onClick={() => console.log("values --------", formik.values)} 
                    type="submit"
                >
                        {initialData ? "Save changes" : "Add Employee"}
                </Button>
            </div>
        </form>
    )
}

export default EmployeeForm