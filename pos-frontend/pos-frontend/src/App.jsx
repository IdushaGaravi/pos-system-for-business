import { Navigate, Route, Routes } from 'react-router'
import './App.css'
import CashierRoutes from './routes/CashierRoutes'
import CustomerLookup from './pages/cashier/Customer Management/CustomerLookup'
import BranchRoutes from './routes/BranchRoutes'
import StoreRoutes from './routes/StoreRoutes'
import AdminRoutes from './routes/AdminRoutes'

function App() {

  return (
    <>
      <Routes>
        {/* <Route path='/cashier/*' element={<CashierRoutes />} /> */}
        <Route path='/' element={<Navigate to="/store" />}/>
        <Route path='/store/*' element={<StoreRoutes />}/>
        <Route path='/branch/*' element={<BranchRoutes />}/>
        <Route path='/super-admin/*' element={<AdminRoutes />}/>
      </Routes>
      
    </>
  )
}

export default App