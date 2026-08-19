import { Route, Routes } from 'react-router'
import AdminLayout from '../pages/superAdmin/AdminLayout'
import AdminDashboard from '../pages/superAdmin/AdminDashboard'
import AdminSettings from '../pages/superAdmin/AdminSettings'
import StoreList from '../pages/superAdmin/StoreList'
import PendingRequest from '../pages/superAdmin/PendingRequest'
import Subscriptions from '../pages/superAdmin/Subscriptions'

const AdminRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path='dashboard' element={<AdminDashboard />} />
            <Route path='stores' element={<StoreList />} />
            <Route path='requests' element={<PendingRequest />} />
            <Route path='subscriptions' element={<Subscriptions />} />
            <Route path='settings' element={<AdminSettings />} />
        </Route>
    </Routes>
  )
}

export default AdminRoutes