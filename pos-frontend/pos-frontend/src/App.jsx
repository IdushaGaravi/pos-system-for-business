import { Navigate, Route, Routes } from 'react-router'
import './App.css'
import CashierRoutes from './routes/CashierRoutes'
import CustomerLookup from './pages/cashier/Customer Management/CustomerLookup'
import BranchLayout from './pages/branch/Branch Layout/BranchLayout'
import BranchRoutes from './routes/BranchRoutes'
import StoreDashboardLayout from './pages/store/Dashboard/StoreDahboardLayout'

function App() {

  return (
    <>
      <Routes>
        {/* <Route path='/cashier/*' element={<CashierRoutes />} /> */}
        <Route path='/' element={<StoreDashboardLayout />}/>
        {/* <Route path='/branch/*' element={<BranchRoutes />}/> */}
      </Routes>
      
    </>
  )
}

export default App