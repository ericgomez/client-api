import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

import instanceAxios from './../../config/axios'

export const NewCustomer = () => {
  const navigate = useNavigate()
  const [customer, setCustomer] = useState({
    name: '',
    lastName: '',
    email: '',
    phone: ''
  })

  const handleInput = e => {
    setCustomer({
      ...customer,
      [e.target.name]: e.target.value
    })
  }

  const validateCustomer = () => {
    const { name, lastName, email, phone } = customer

    if (name === '' || lastName === '' || email === '' || phone === '') {
      return true
    } else {
      return false
    }
  }

  const handleSubmit = e => {
    e.preventDefault()

    // send data to API
    instanceAxios
      .post('/customers', customer)
      .then(response => {
        Swal.fire('Customer created!', response, 'success')

        // navigate to customers
        navigate('/', { replace: true })
      })
      .catch(error => {
        Swal.fire(
          'Customer no created ',
          'The Customer is already registered ',
          'error'
        )
      })
  }

  return (
    <>
      <h2>New Customer</h2>
      <form onSubmit={handleSubmit}>
        <legend>Fill in all the fields</legend>

        <div className='campo'>
          <label>Name:</label>
          <input
            type='text'
            placeholder='Name Customer'
            name='name'
            onChange={handleInput}
          />
        </div>

        <div className='campo'>
          <label>LastName:</label>
          <input
            type='text'
            placeholder='LastName Customer'
            name='lastName'
            onChange={handleInput}
          />
        </div>

        <div className='campo'>
          <label>Company:</label>
          <input
            type='text'
            placeholder='Company Customer'
            name='company'
            onChange={handleInput}
          />
        </div>

        <div className='campo'>
          <label>Email:</label>
          <input
            type='email'
            placeholder='Email Customer'
            name='email'
            onChange={handleInput}
          />
        </div>

        <div className='campo'>
          <label>Phone:</label>
          <input
            type='tel'
            placeholder='Phone Customer'
            name='phone'
            onChange={handleInput}
          />
        </div>

        <div className='send'>
          <input
            type='submit'
            className='btn btn-blue'
            value='Add Customer'
            disabled={validateCustomer()}
          />
        </div>
      </form>
    </>
  )
}
