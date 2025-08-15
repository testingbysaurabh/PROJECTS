import React, { lazy } from 'react'
import { Outlet, Route, Routes, useLocation } from 'react-router-dom'
import LoginAuthenticated from './LoginAuthenticated'
import Login from './Login'
import NavLogin from './NavLogin'

// import Home from './Home'
// import Setting from './Setting'
// import Cart from './Cart'
// import ProductView from './ProductView'
// import Navbar from './Navbar'


const Home=lazy(()=>import("./Home"))
const Setting=lazy(()=>import('./Setting'))
const Cart=lazy(()=>import("./Cart"))
const ProductView =lazy(()=>import("./ProductView"))
const Navbar=lazy(()=>import("./Navbar"))
// const CartUpdate=lazy(()=>import("./CartUpdate"))
const HomeExtend =lazy(()=>import('./HomeExtend'))


const Lr = () => {

    return (
        <div className='mt-18'>
            <Navbar />
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/' element={<LoginAuthenticated />}>
                    <Route path='/hextended' element={<HomeExtend />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/productpage' element={<ProductView />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/setting' element={<Setting />} />
                    {/* <Route path='/cartupdate' element={<CartUpdate />} /> */}
                </Route>
            </Routes>
        </div>
    )
}

export default Lr