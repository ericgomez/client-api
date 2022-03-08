import { useState, useEffect, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import instanceAxios from './../../config/axios'
import { Product } from './../../components/products/Product'
import { Spinner } from './../../components/layout/Spinner'

// import context
import { CRMContext } from './../../context/CRMContext'

export const Products = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  // context
  const [auth, setAuth] = useContext(CRMContext)

  useEffect(() => {
    if (!auth.token) navigate('/login', { replace: true })

    const getProductsAPI = async () => {
      try {
        const response = await instanceAxios.get('/products', {
          headers: {
            Authorization: `Bearer ${auth.token}`
          }
        })

        setProducts(response.data)
        setLoading(false)
      } catch (error) {
        if (error.response.status === 401) {
          localStorage.removeItem('token')
          setAuth({
            token: null,
            auth: false
          })
        }
      }
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
