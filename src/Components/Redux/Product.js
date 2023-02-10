import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function Product() {
const [product,setProduct] = useState({});
const {id} = useParams();
  
const getProductData = async()=>{
    const {data} = await axios.get(`https://fakestoreapi.com/products/${id}`);
    setProduct(data);
}

  useEffect(()=>{
      getProductData();
  },[])

  return (
    <div>
      <h2>Product</h2>
      {
        Object.keys(product).length ? (
          <div className='container-fluid'>
            <div className='row border'>
              <div className='col-md-6 mt-5'>
                <img src={product.image} className="img-fluid" alt={product.title} />
              </div>
              <div className='col-md-6 mt-5'>
                  <h2>{product.title}</h2>
                  <h6>{product.category}</h6>
                  <h4 className='bg-primary p-1 text-white'>price: ${product.price}</h4>
                  <p>{product.description}</p>
                  <button className='btn btn-primary'>Add To Cart</button>
              </div>
              </div>
          </div>
        ) : <p>Loading....</p>
      }
    </div>
  )
}

export default Product