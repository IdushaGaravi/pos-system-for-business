import { Form, Formik } from 'formik'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const CustomerForm = ({showCustomerForm, setShowCustomerForm}) => {
    const initialValues = {
        fullName: "",
        phone: ""
    }
    return (
        <Dialog open={showCustomerForm} onOpenChange={setShowCustomerForm}>
            <DialogContent className="max-w-3xl">
                <DialogHeader>
                    <DialogTitle>Add New Customer</DialogTitle>
                </DialogHeader>

                <Formik
                    initialValues = {initialValues}
                    onSubmit={(values) => {
                        console.log("Form Submitted: ", values);
                    }}
                >
                    {({values, handleChange, handleBlur}) => (
                        <Form className='space-y-5'>
                            <Input
                                name="fullName"
                                placeholder="Full Name"
                                value={values.fullName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <Input
                                name="phone"
                                placeholder="Phone"
                                value={values.phone}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <Button type="submit">Add Customer</Button>
                        </Form>
                    )}
                </Formik>
            </DialogContent>
        </Dialog>
    )
}

export default CustomerForm