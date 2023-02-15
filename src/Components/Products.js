import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProducts } from './Redux/Product-actions/Productactions';

function Products() {
    const products = useSelector((state)=>state.productData.products)
    console.log(products)
    const dispatch = useDispatch();
   

    useEffect(()=>{
       dispatch(fetchProducts());
    },[])

  return (
    <>
        <div className='container mt-5'>
            <div className='row'>
                {
                    products.length > 0 ? (
                       products.map((product)=>(
                        <div className='col-md-3'>
                            <Link to={`/product/${product.id}`}>
                            <div class="card" >
                                <img src={product.image} class="card-img-top" alt={product.title} />
                                <div class="card-body">
                                    <h3>{product.category}</h3>
                                    <h5 class="card-title">{product.title}</h5>
                                </div>
                                </div>
                                </Link>
                        </div>
                       ))
                    ) : <p>loading</p>
                }
            </div>
        </div>
    </>
  )
}

export default Products