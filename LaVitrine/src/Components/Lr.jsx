import React, { lazy } from 'react'
import { Outlet, Route, Routes, useLocation } from 'react-router-dom'
import LoginAuthenticated from './LoginAuthenticated'
import Login from './Login'
import NavLogin from './NavLogin'
import AboutUs from './Aboutus'

// import Home from './Home'
// import Setting from './Setting'
// import Cart from './Cart'
// import ProductView from './ProductView'
// import Navbar from './Navbar'


const Home = lazy(() => import("./Home"))
const Setting = lazy(() => import('./Setting'))
const Cart = lazy(() => import("./Cart"))
const ProductView = lazy(() => import("./ProductView"))
const Navbar = lazy(() => import("./Navbar"))
const CartUpdate = lazy(() => import("./Cart"))
const HomeExtend = lazy(() => import('./HomeExtend'))
const ShippingDetails = lazy(() => import('./ShippingDetails'))


const Lr = () => {

    return (
        <div>

            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/' element={<LoginAuthenticated />}>
                    <Route path='/hextended' element={<HomeExtend />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/productpage' element={<ProductView />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/setting' element={<Setting />} />
                    <Route path='/aboutus' element={<AboutUs />} />
                    <Route path='/cartupdate' element={<CartUpdate />} />
                    <Route path='/ShippingDetails' element={<ShippingDetails />} />
                </Route>
            </Routes>
        </div>
    )
}

export default Lr