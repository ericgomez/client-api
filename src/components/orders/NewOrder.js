import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Swal from 'sweetalert2'

import instanceAxios from './../../config/axios'
import { FormSearchProduct } from './FormSearchProduct'
import { FormQuantityProduct } from './FormQuantityProduct'

export const NewOrder = () => {
  /* The useParams hook returns an object of key/value pairs of the dynamic params from the 
      current URL that were matched by the <Route path>.*/
  const { id } = useParams()
  const [customer, setCustomer] = useState({})
  const [search, setSearch] = useState('')
  const [products, setProducts] = useState([])

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

    const newProduct = response.data[0]
    newProduct.product = response.data[0]._id
    newProduct.quantity = 1

    setProducts([...products, newProduct])
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
        {products.map((product, index) => (
          <FormQuantityProduct key={index} products={products} />
        ))}
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
