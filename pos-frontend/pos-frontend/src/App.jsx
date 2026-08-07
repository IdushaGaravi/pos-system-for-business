import { Route, Routes } from 'react-router'
import './App.css'
import CashierRoutes from './routes/CashierRoutes'
import CustomerLookup from './pages/cashier/Customer Management/CustomerLookup'

function App() {

  return (
    <>
      {/* <Routes>
        <Route path='/cashier/*' element={<CashierRoutes />} />
      </Routes> */}
      <CustomerLookup />
      
    </>
  )
}

export default App