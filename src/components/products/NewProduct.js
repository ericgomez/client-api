import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

import instanceAxios from './../../config/axios'

export const NewProduct = () => {
  const navigate = useNavigate()

  const [product, setProduct] = useState({
    name: '',
    price: ''
  })

  // useState of file image
  const [image, setImage] = useState('')

  // Method to handle the input of the form

  const handleInput = e => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    })
  }

  const handleImage = e => {
    setImage(e.target.files[0])
  }

  const handleSubmit = async e => {
    e.preventDefault()

    // send data to API
    const formData = new FormData()
    formData.append('name', product.name)
    formData.append('price', product.price)
    formData.append('image', image)

    try {
      const res = await instanceAxios.post('/products', formData, {
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

  return (
    <>
      <h2>New Product</h2>

      <form onSubmit={handleSubmit}>
        <legend>Fill in all the fields</legend>

        <div className='campo'>
          <label>Name:</label>
          <input
            type='text'
            placeholder='Product Name'
            name='name'
            onChange={handleInput}
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
          />
        </div>

        <div className='campo'>
          <label>Image:</label>
          <input type='file' name='image' onChange={handleImage} />
        </div>

        <div className='send'>
          <input type='submit' className='btn btn-blue' value='Add Product' />
        </div>
      </form>
    </>
  )
}
