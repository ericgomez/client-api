import { useState } from 'react'

export const NewProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    image: ''
  })

  return (
    <>
      <h2>New Product</h2>

      <form>
        <legend>Fill in all the fields</legend>

        <div className='campo'>
          <label>Name:</label>
          <input type='text' placeholder='Product Name' name='name' />
        </div>

        <div className='campo'>
          <label>Price:</label>
          <input
            type='number'
            name='price'
            min='0.00'
            step='0.01'
            placeholder='Price'
          />
        </div>

        <div className='campo'>
          <label>Image:</label>
          <input type='file' name='image' />
        </div>

        <div className='send'>
          <input type='submit' className='btn btn-blue' value='Add Product' />
        </div>
      </form>
    </>
  )
}
