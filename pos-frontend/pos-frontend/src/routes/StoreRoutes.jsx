import { Route, Routes } from "react-router"
import StoreDashboardLayout from "../pages/store/Dashboard/StoreDahboardLayout"
import StoreDashboard from "../pages/store/Dashboard/StoreDashboard"
import Branches from "../pages/store/Branch/Branches"
import Products from "../pages/store/Product/Products"
import Categories from "../pages/store/Category/Categories"

const StoreRoutes = () => {
    return (
        <Routes>
        <Route path='/' element={<StoreDashboardLayout />}>
            <Route index element={<StoreDashboard />} />
            <Route path='dashboard' element={<StoreDashboard />} />
            <Route path='branches' element={<Branches />} />
            <Route path='stores' element={<Branches />} />
            <Route path='products' element={<Products />} />
            <Route path='categories' element={<Categories />} />
            <Route path='employees' element={<Branches />} />
            <Route path='alerts' element={<Branches />} />
            <Route path='sales' element={<Branches />} />
            <Route path='reports' element={<Branches />} />
            <Route path='upgrade' element={<Branches />} />
            <Route path='settings' element={<Branches />} />
        </Route>
    </Routes>
    )
}

export default StoreRoutes