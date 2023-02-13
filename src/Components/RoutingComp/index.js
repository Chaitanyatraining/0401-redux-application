import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from '../cart/Cart'
import Products from '../Products'
import Product from '../Redux/Product'

function RoutingComp() {
  return (
    <div>
        <Routes>
            <Route path="products" element={<Products />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
    </div>
  )
}

export default RoutingComp