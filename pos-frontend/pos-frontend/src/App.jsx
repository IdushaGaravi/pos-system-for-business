import { Navigate, Route, Routes } from 'react-router'
import './App.css'
import CashierRoutes from './routes/CashierRoutes'
import CustomerLookup from './pages/cashier/Customer Management/CustomerLookup'
import BranchLayout from './pages/branch/Branch Layout/BranchLayout'
import BranchRoutes from './routes/BranchRoutes'
import StoreDashboardLayout from './pages/store/Dashboard/StoreDahboardLayout'
import StoreRoutes from './routes/StoreRoutes'

function App() {

  return (
    <>
      <Routes>
        {/* <Route path='/cashier/*' element={<CashierRoutes />} /> */}
        <Route path='/' element={<Navigate to="/store" />}/>
        <Route path='/store/*' element={<StoreRoutes />}/>
        <Route path='/branch/*' element={<BranchRoutes />}/>
      </Routes>
      
    </>
  )
}

export default App