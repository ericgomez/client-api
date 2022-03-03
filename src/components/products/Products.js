import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'

import instanceAxios from './../../config/axios'
import { Product } from './../../components/products/Product'
import { Spinner } from './../../components/layout/Spinner'

export const Products = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getProductsAPI = async () => {
      const response = await instanceAxios.get('/products')
      setProducts(response.data)
      setLoading(false)
    }

    getProductsAPI()
  }, [])

  const handleRemoveProduct = id => {
    setProducts(products.filter(product => product._id !== id))
  }

  // Spinner while loading
  if (loading) return <Spinner />

  return (
    <>
      <h2>Products</h2>

      <Link to={'/products/new'} className='btn btn-green nvo-customer'>
        <i className='fas fa-plus-circle'></i>
        New Product
      </Link>

      <ul className='list-products'>
        {products.map(product => (
          <Product
            key={product._id}
            product={product}
            handleRemoveProduct={handleRemoveProduct}
          />
        ))}
      </ul>
    </>
  )
}
