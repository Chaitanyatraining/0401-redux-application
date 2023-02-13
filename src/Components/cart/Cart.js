import React from 'react'
import { useSelector } from 'react-redux'

function Cart() {
    // we have a hook to access the redux store state
    // useSelector
    const cartData = useSelector((state)=>state.productData.cartData);
    console.log(cartData)
  return (
    <div>
        <h2>Cart Page</h2>
        <div className='container'>
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
                        <button className='btn btn-danger'>Remove</button>
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