import React from 'react'
import { AllProducts, Cart } from '../pages';
import { Route, Routes } from 'react-router-dom';


export const ProductRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<AllProducts title="Home" />}></Route>
            <Route path='cart' element={<Cart title="Cart" />}></Route>
        </Routes>
    )
}
