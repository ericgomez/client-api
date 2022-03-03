import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import instanceAxios from './../../config/axios'
import { Product } from './../../components/products/Product'

export const Products = () => {
  const [products, setProducts] = useState([])

  const getProductsAPI = async () => {
    const response = await instanceAxios.get('/products')
    setProducts(response.data)
  }

  useEffect(() => {
    getProductsAPI()
  }, [products])

  return (
    <>
      <h2>Products</h2>

      <Link to={'/products/new'} className='btn btn-green nvo-customer'>
        <i className='fas fa-plus-circle'></i>
        New Product
      </Link>

      <ul className='list-products'>
        {products.map(product => (
          <Product key={product._id} product={product} />
        ))}
      </ul>
    </>
  )
}
