import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'

import instanceAxios from './../../config/axios'
import { Spinner } from './../../components/layout/Spinner'

export const EditProduct = () => {
  /* The useParams hook returns an object of key/value pairs of the dynamic params from the 
      current URL that were matched by the <Route path>.*/
  const { id } = useParams()
  const navigate = useNavigate()

  const [product, setProduct] = useState({
    name: '',
    price: '',
    image: ''
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getProductApi = async () => {
      const response = await instanceAxios.get(`/products/${id}`)
      setProduct(response.data)
      setLoading(false)
    }

    getProductApi()
  }, [id])

  // Method to handle the input of the form
  const handleInput = e => {
    setProduct({
      ...product,
      [e.target.name]:
        e.target.type === 'file' ? e.target.files[0] : e.target.value
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()

    try {
      const res = await instanceAxios.post('/products', product, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })

      if (res.status !== 201) {
        Swal.fire(
          'Product no created ',
          'The Product is already registered ',
          'error'
        )
      }

      Swal.fire('Good job!', 'Your product has been created!', 'success')

      // navigate to customers
      navigate('/products', { replace: true })
    } catch (error) {
      console.log(error)
    }
  }

  // Spinner while loading
  if (loading) return <Spinner />

  const { name, price, image } = product

  return (
    <>
      <h2>Edit Product</h2>

      <form onSubmit={handleSubmit}>
        <legend>Fill in all the fields</legend>

        <div className='campo'>
          <label>Name:</label>
          <input
            type='text'
            placeholder='Product Name'
            name='name'
            onChange={handleInput}
            value={name}
          />
        </div>

        <div className='campo'>
          <label>Price:</label>
          <input
            type='number'
            name='price'
            min='0.00'
            step='0.01'
            placeholder='Price'
            onChange={handleInput}
            value={price}
          />
        </div>

        <div className='campo'>
          <label>Image:</label>
          {image && (
            <img
              src={`http://localhost:5000/${image}`}
              alt={image}
              width='300'
            />
          )}
          <input type='file' name='image' onChange={handleInput} />
        </div>

        <div className='send'>
          <input type='submit' className='btn btn-blue' value='Edit Product' />
        </div>
      </form>
    </>
  )
}
