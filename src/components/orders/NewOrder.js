import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import instanceAxios from './../../config/axios'

export const NewOrder = () => {
  /* The useParams hook returns an object of key/value pairs of the dynamic params from the 
      current URL that were matched by the <Route path>.*/
  const { id } = useParams()
  const [customer, setCustomer] = useState({})

  useEffect(() => {
    const getDataAPI = async () => {
      const response = await instanceAxios.get(`/customers/${id}`)

      setCustomer(response.data)
    }

    getDataAPI()
  }, [id])

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

      <form>
        <legend>Search for a Product and add a quantity</legend>

        <div className='campo'>
          <label>Products:</label>
          <input type='text' placeholder='Name Products' name='products' />
        </div>

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
      </form>
    </>
  )
}
