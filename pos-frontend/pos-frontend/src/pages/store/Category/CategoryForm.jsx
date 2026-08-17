import { Formik, Form, Field } from "formik";
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const loading = false

const CategoryForm = ({onSubmit, onCancel, initialValues, isEditing}) => {
    const handleSubmit = () => {
        onSubmit()
    }

    return (
        <Formik initialValues={
            initialValues || {
                name: "",
                description: "",
                onSubmit: {handleSubmit},
            }}
        >
            {({isSubmitting}) => 
                <Form className="space-y-4">
                    <div className="space-y-2">
                        <Label>Category Name</Label>
                        <Field as={Input} name="name" placeholder="Enter Category Name" />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="description">Description</label>
                        <Field
                        as={Input}
                        id="description"
                        name="description"
                        placeholder="Enter description"
                        />
                        {/* <ErrorMessage name="address" component="div" className="text-red-500 text-sm" /> */}
                    </div>

                    <div className="flex justify-end gap-2 pt-4">
                        <Button type="button" variant="outline" onClick={onCancel}>
                        Cancel
                        </Button>
                        <Button type="submit" disabled={isSubmitting || loading}>
                        {isSubmitting || loading ? (isEditing ? "Updating..." : "Adding...") : (isEditing ? "Update Category" : "Add Category")}
                        </Button>
                    </div>
                </Form>
            }
        </Formik>
    )
}

export default CategoryForm