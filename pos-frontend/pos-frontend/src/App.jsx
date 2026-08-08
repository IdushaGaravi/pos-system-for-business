import { Route, Routes } from 'react-router'
import './App.css'
import CashierRoutes from './routes/CashierRoutes'
import CustomerLookup from './pages/cashier/Customer Management/CustomerLookup'
import BranchLayout from './pages/branch/Branch Layout/BranchLayout'

function App() {

  return (
    <>
      <Routes>
        {/* <Route path='/cashier/*' element={<CashierRoutes />} /> */}
        <Route path='/' element={<BranchLayout />}/>
      </Routes>
      
    </>
  )
}

export default App