import { Route, Routes } from 'react-router'
import CashierDashboardLayout from '../pages/cashier/CashierDashboardLayout'
import OrderHistory from '../pages/cashier/Order History/OrderHistory'
import CustomerLookup from '../pages/cashier/Customer Management/CustomerLookup'
import RefundPage from '../pages/cashier/Refund/RefundPage'
import ShiftSummaryPage from '../pages/cashier/Shift Report/ShiftSummaryPage'
import CreateOrder from '../pages/cashier/CreateOrder'

const CashierRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<CashierDashboardLayout />}>
        <Route index element={<CreateOrder />} />
        <Route path='orders' element={<OrderHistory />} />
        <Route path='customers' element={<CustomerLookup />} />
        <Route path='returns' element={<RefundPage />} />
        <Route path='shift-summary' element={<ShiftSummaryPage />} />
      </Route>       
    </Routes>
  )
}

export default CashierRoutes