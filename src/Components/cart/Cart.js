import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../Redux/Product-actions/Productactions';

function Cart() {
    // we have a hook to access the redux store state
    // useSelector
    const dispatch = useDispatch();
    const cartData = useSelector((state)=>state.productData.cartData);
    // map,filter,reduce
    // foreach
   const totalValue = cartData.reduce((prevsValue,currentValue)=>{
        return prevsValue + currentValue.price
    },0)


  return (
    <div>
        <h2>Cart Page</h2>
        <div className='container'>
            {
                cartData && cartData.length && (
                    <div className='product_total'>
                        <p>Total Price : {totalValue}</p>
                    </div>
                )
            }
            {cartData && cartData.length ? (
                cartData.map((product)=>(
                    <div className='row border'>
                    <div className='col-md-4'>
                        <img src={product.image} alt={product.title} className="img-fluid" />
                    </div>
                    <div className='col-md-4 mt-5'>
                        <h3>{product.title}</h3>
                        <p>{product.description}</p>
                    </div>
                    <div className='col-md-4 mt-5'>
                        <h4>Price : ${product.price}</h4>
                        <button className='btn btn-danger'
                        onClick={()=>{
                            dispatch(removeFromCart(product.id))
                        }}
                        >Remove</button>
                    </div>
                </div>
                ))
            ) : <p>please add some items</p>
            }
        </div>
    </div>
  )
}

export default Cart