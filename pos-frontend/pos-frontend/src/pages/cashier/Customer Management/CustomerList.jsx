import CustomerCard from "./CustomerCard"

const customers = [
    {
        id: 1,
        fullName: 'John Doe',
        email: 'john@example.com',
        phone: '123-456-7890',
        loyaltyPoints: 150,
        totalOrders: 5,
        totalSpent: 300,
        averageOrderValue: 660,
    },
    {
        id: 2,
        fullName: 'Jane Doe',
        email: 'jane@example.com',
        phone: '147-258-3699',
        loyaltyPoints: 200,
        totalOrders: 10,
        totalSpent: 500,
        averageOrderValue: 150,   
    },
    {
        id: 3,
        fullName: 'Alice Johnson',
        email: 'alice@example.com',
        phone: '753-951-2465',
        loyaltyPoints: 250,
        totalOrders: 15,
        totalSpent: 750,
        averageOrderValue: 462,
    },
    {
        id: 4,
        fullName: 'Bob Brown',
        email: 'bob@example.com',
        phone: '444-668-6363',
        loyaltyPoints: 300,
        totalOrders: 20,
        totalSpent: 1000,
        averageOrderValue: 990,
    },
]

const CustomerList = ({setSelectedCustomer}) => {
  return (
    <div className='flex-1 overflow-auto'>
        <div className='divide-y'>
          {customers.map((customer) => (
            <CustomerCard 
              className='cursor-pointer hover:bg-accent' 
              setSelectedCustomer={setSelectedCustomer} 
              key={customer.id} 
              customer={customer} 
            />
          ))}
        </div>
    </div>
  )
}

export default CustomerList