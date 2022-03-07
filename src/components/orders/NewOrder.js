import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Swal from 'sweetalert2'

import instanceAxios from './../../config/axios'
import { FormSearchProduct } from './FormSearchProduct'

export const NewOrder = () => {
  /* The useParams hook returns an object of key/value pairs of the dynamic params from the 
      current URL that were matched by the <Route path>.*/
  const { id } = useParams()
  const [customer, setCustomer] = useState({})
  const [search, setSearch] = useState('')

  useEffect(() => {
    const getDataAPI = async () => {
      const response = await instanceAxios.get(`/customers/${id}`)

      setCustomer(response.data)
    }

    getDataAPI()
  }, [id])

  const searchProduct = async e => {
    e.preventDefault()

    const response = await instanceAxios.post(`/products/search/${search}`)

    if (!response.data.length) {
      Swal.fire('No results found', '', 'error')
      return
    }

    console.log(response.data)
  }

  const readDataForm = e => {
    e.preventDefault()

    setSearch(e.target.value)
  }

  return (
    <>
      <h2>New Order</h2>

      <div className='fiche-customer'>
        <h3>Customer Data</h3>
        <p>
          Name: {customer.name} {customer.lastName}
        </p>
        <p>Phone: {customer.phone}</p>
      </div>

      <FormSearchProduct
        searchProduct={searchProduct}
        readDataForm={readDataForm}
      />

      <ul className='resume'>
        <li>
          <div className='text-product'>
            <p className='name'>Macbook Pro</p>
            <p className='price'>$250</p>
          </div>
          <div className='actions'>
            <div className='container-quantity'>
              <i className='fas fa-minus'></i>
              <input type='text' name='quantity' />
              <i className='fas fa-plus'></i>
            </div>
            <button type='button' className='btn btn-red'>
              <i className='fas fa-minus-circle'></i>
              Delete Product
            </button>
          </div>
        </li>
        <li>
          <div className='text-product'>
            <p className='name'>Macbook Pro</p>
            <p className='price'>$250</p>
          </div>
          <div className='actions'>
            <div className='container-quantity'>
              <i className='fas fa-minus'></i>
              <input type='text' name='quantity' />
              <i className='fas fa-plus'></i>
            </div>
            <button type='button' className='btn btn-red'>
              <i className='fas fa-minus-circle'></i>
              Delete Product
            </button>
          </div>
        </li>
        <li>
          <div className='text-product'>
            <p className='name'>Macbook Pro</p>
            <p className='price'>$250</p>
          </div>
          <div className='actions'>
            <div className='container-quantity'>
              <i className='fas fa-minus'></i>
              <input type='text' name='quantity' />
              <i className='fas fa-plus'></i>
            </div>
            <button type='button' className='btn btn-red'>
              <i className='fas fa-minus-circle'></i>
              Delete Product
            </button>
          </div>
        </li>
      </ul>
      <div className='campo'>
        <label>Total:</label>
        <input type='number' name='price' placeholder='Price' readOnly />
      </div>
      <div className='send'>
        <input type='submit' className='btn btn-blue' value='Add Order' />
      </div>
    </>
  )
}
