import { Formik, Form, Field } from "formik";
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const loading = false

const BranchForm = ({onSubmit, onCancel, initialValues, isEditing}) => {
    const handleSubmit = () => {
        onSubmit()
    }

    return (
        <Formik initialValues={
            initialValues || {
                name: "",
                address: "",
                manager: "",
                phone: "",
                onSubmit: {handleSubmit},
            }}
        >
            {({isSubmitting}) => 
                <Form className="space-y-4">
                    <div className="space-y-2">
                        <Label>Branch Name</Label>
                        <Field as={Input} name="name" placeholder="Enter Branch Name" />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="address">Address</label>
                        <Field
                        as={Input}
                        id="address"
                        name="address"
                        placeholder="Enter branch address"
                        />
                        {/* <ErrorMessage name="address" component="div" className="text-red-500 text-sm" /> */}
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="manager">Manager Name</label>
                        <Field
                        as={Input}
                        id="manager"
                        name="manager"
                        placeholder="Enter manager name"
                        />
                        {/* <ErrorMessage name="manager" component="div" className="text-red-500 text-sm" /> */}
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="phone">Phone Number</label>
                        <Field
                        as={Input}
                        id="phone"
                        name="phone"
                        placeholder="Enter phone number"
                        />
                        {/* <ErrorMessage name="phone" component="div" className="text-red-500 text-sm" /> */}
                    </div>

                    <div className="flex justify-end gap-2 pt-4">
                        <Button type="button" variant="outline" onClick={onCancel}>
                        Cancel
                        </Button>
                        <Button type="submit" disabled={isSubmitting || loading}>
                        {isSubmitting || loading ? (isEditing ? "Updating..." : "Adding...") : (isEditing ? "Update Branch" : "Add Branch")}
                        </Button>
                    </div>
                </Form>
            }
        </Formik>
    )
}

export default BranchForm