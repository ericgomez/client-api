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
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const getDataAPI = async () => {
      const response = await instanceAxios.get(`/customers/${id}`)

      setCustomer(response.data)
    }

    getDataAPI()
  }, [id])

  useEffect(() => {
    updateTotal()
  }, [products])

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

  const decreaseProduct = index => {
    const allProducts = [...products]
    const product = allProducts[index]

    product.quantity = product.quantity - 1

    if (product.quantity === 0) {
      allProducts.splice(index, 1)
    }

    setProducts(allProducts)
  }

  const increaseProduct = index => {
    const allProducts = [...products]
    const product = allProducts[index]

    product.quantity = product.quantity + 1

    setProducts(allProducts)
  }

  const updateTotal = () => {
    let total = 0

    products.forEach(product => {
      total += product.price * product.quantity
    })

    setTotal(total)
  }

  const deleteProductOrder = id => {
    const allProducts = [...products]

    const newProducts = allProducts.filter(product => product._id !== id)

    setProducts(newProducts)
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
          <FormQuantityProduct
            key={product._id}
            product={product}
            decreaseProduct={decreaseProduct}
            increaseProduct={increaseProduct}
            deleteProductOrder={deleteProductOrder}
            index={index}
          />
        ))}
      </ul>

      <div className='campo'>
        <p className='total'>
          Total to pay <span>{total}</span>
        </p>
      </div>

      {total > 0 && (
        <form>
          <input
            type='submit'
            className='btn btn-green btn-block'
            value='Make Order'
          />
        </form>
      )}
    </>
  )
}
