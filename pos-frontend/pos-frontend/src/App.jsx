import { Route, Routes } from 'react-router'
import './App.css'
import CashierRoutes from './routes/CashierRoutes'

function App() {

  return (
    <>
      <Routes>
        <Route path='/cashier/*' element={<CashierRoutes />} />
      </Routes>
      
    </>
  )
}

export default App