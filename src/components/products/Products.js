import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import instanceAxios from './../../config/axios'

export const Products = () => {
  const [products, setProducts] = useState([])

  const getProductsAPI = async () => {
    const response = await instanceAxios.get('/products')
    setProducts(response.data.products)
  }

  useEffect(() => {
    getProductsAPI()
  }, [])

  return (
    <>
      <h2>Products</h2>

      <Link to={'/products/new'} className='btn btn-green nvo-customer'>
        <i className='fas fa-plus-circle'></i>
        New Product
      </Link>

      <ul className='list-products'>
        <li className='product'>
          <div className='info-product'>
            <p className='name'>VueJS</p>
            <p className='price'>$25.00 </p>
            <img src='img/1.jpg' alt='' />
          </div>
          <div className='actions'>
            <Link to={`/products/`} className='btn btn-blue'>
              <i className='fas fa-pen-alt'></i>
              Edit Product
            </Link>

            <button type='button' className='btn btn-red btn-delete'>
              <i className='fas fa-times'></i>
              Delete Product
            </button>
          </div>
        </li>
        <li className='product'>
          <div className='info-product'>
            <p className='name'>AngularJS</p>
            <p className='price'>$25.00 </p>
            <img src='img/2.jpg' alt='' />
          </div>
          <div className='actions'>
            <Link to={`/products/`} className='btn btn-blue'>
              <i className='fas fa-pen-alt'></i>
              Edit Product
            </Link>

            <button type='button' className='btn btn-red btn-delete'>
              <i className='fas fa-times'></i>
              Delete Product
            </button>
          </div>
        </li>
        <li className='product'>
          <div className='info-product'>
            <p className='name'>ReactJS</p>
            <p className='price'>$25.00 </p>
            <img src='img/3.jpg' alt='' />
          </div>
          <div className='actions'>
            <Link to={`/products/`} className='btn btn-blue'>
              <i className='fas fa-pen-alt'></i>
              Edit Product
            </Link>

            <button type='button' className='btn btn-red btn-delete'>
              <i className='fas fa-times'></i>
              Delete Product
            </button>
          </div>
        </li>
      </ul>
    </>
  )
}
