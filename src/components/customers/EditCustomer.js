import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'

import instanceAxios from './../../config/axios'

export const EditCustomer = props => {
  /* The useParams hook returns an object of key/value pairs of the dynamic params from the 
      current URL that were matched by the <Route path>.*/
  const { id } = useParams()
  const navigate = useNavigate()
  const [customer, setCustomer] = useState({
    name: '',
    lastName: '',
    company: '',
    email: '',
    phone: ''
  })

  const getDataAPI = async () => {
    const response = await instanceAxios.get(`/customers/${id}`)

    setCustomer(response.data)
  }

  // get data from API
  useEffect(() => {
    getDataAPI()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
      .put(`/customers/${id}`, customer)
      .then(response => {
        Swal.fire('Customer updated!', response, 'success')

        // navigate to customers
        navigate('/', { replace: true })
      })
      .catch(error => {
        Swal.fire('Customer no updated', 'The Customer no updated', 'error')
      })
  }

  return (
    <>
      <h2>Edit Customer</h2>
      <form onSubmit={handleSubmit}>
        <legend>Fill in all the fields</legend>

        <div className='campo'>
          <label>Name:</label>
          <input
            type='text'
            placeholder='Name Customer'
            name='name'
            onChange={handleInput}
            value={customer.name}
          />
        </div>

        <div className='campo'>
          <label>LastName:</label>
          <input
            type='text'
            placeholder='LastName Customer'
            name='lastName'
            onChange={handleInput}
            value={customer.lastName}
          />
        </div>

        <div className='campo'>
          <label>Company:</label>
          <input
            type='text'
            placeholder='Company Customer'
            name='company'
            onChange={handleInput}
            value={customer.company}
          />
        </div>

        <div className='campo'>
          <label>Email:</label>
          <input
            type='email'
            placeholder='Email Customer'
            name='email'
            onChange={handleInput}
            value={customer.email}
          />
        </div>

        <div className='campo'>
          <label>Phone:</label>
          <input
            type='tel'
            placeholder='Phone Customer'
            name='phone'
            onChange={handleInput}
            value={customer.phone}
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
