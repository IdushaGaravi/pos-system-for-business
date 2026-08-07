import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import CustomerForm from './CustomerForm'

const customers = [
    {
        id: 1,
        fullName: "John Doe",
        phone: "123-456-7890",
        email: "john@example.com"
    },
    {
        id: 2,
        fullName: "Jane Doe",
        phone: "186-741-8529",
        email: "jane@example.com"
    },
    {
        id: 3,
        fullName: "Josh Doe",
        phone: "123-456-7890",
        email: "josh@example.com"
    },
    {
        id: 4,
        fullName: "John Doe",
        phone: "123-456-7890",
        email: "john@example.com"
    },
]

const CustomerDialog = ({showCustomerDialog, setShowCustomerDialog}) => {
    const [showCustomerForm, setShowCustomerForm] = useState(false);

    const handleSelectCustomer = (customer) => {
        console.log("Selected Customer: ", customer)
        setShowCustomerDialog(false)
    }
    return (
        <Dialog open={showCustomerDialog} onOpenChange={setShowCustomerDialog}>
            <DialogContent
                className={cn(
                    "max-w-2xl sm:max-w-lg transition-all duration-200",
                    showCustomerForm && "blur-sm scale-[0.98] pointer-events-none"
                )}
            >
                <DialogHeader>
                    <DialogTitle>
                        Select Customer
                    </DialogTitle>
                </DialogHeader>

                <div className='mb-4'>
                    <Input placeholder='Search Customer' />
                </div>

                <div className='max-h-96 overflow-y-auto'>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className='w-[150px]'>Name</TableHead>
                                <TableHead className='w-[150px]'>Phone</TableHead>
                                <TableHead className='w-[150px]'>Email</TableHead>
                            </TableRow>
                        </TableHeader>    
                        <TableBody>
                            {customers.map((customer) => (
                                <TableRow key={customer.id}>
                                    <TableCell>{customer.fullName}</TableCell>
                                    <TableCell>{customer.phone}</TableCell>
                                    <TableCell>{customer.email}</TableCell>
                                    <TableCell>
                                        <Button
                                            variant='outline'
                                            className='w-full'
                                            onClick={handleSelectCustomer}
                                        >
                                            Select
                                        </Button>
                                    </TableCell>    
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>

                <DialogFooter>
                    <Button onClick={() => setShowCustomerForm(true)}>
                        Add New Customer
                    </Button>
                </DialogFooter>

                <CustomerForm showCustomerForm={showCustomerForm} setShowCustomerForm={setShowCustomerForm} />
            </DialogContent>
        </Dialog>
    )
}

export default CustomerDialog