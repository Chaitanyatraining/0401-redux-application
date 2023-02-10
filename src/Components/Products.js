import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Products() {
    const [products,setProducts] = useState([]);
    const getProducts = async ()=>{
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        console.log(data);
        setProducts(data);
    }

    useEffect(()=>{
        getProducts();
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