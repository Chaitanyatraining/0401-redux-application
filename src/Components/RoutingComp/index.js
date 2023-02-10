import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Products from '../Products'
import Product from '../Redux/Product'

function RoutingComp() {
  return (
    <div>
        <Routes>
            <Route path="products" element={<Products />} />
            <Route path="/product/:id" element={<Product />} />
        </Routes>
    </div>
  )
}

export default RoutingComp