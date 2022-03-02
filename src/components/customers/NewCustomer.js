import { useState } from 'react'

export const NewCustomer = () => {
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

  return (
    <>
      <h2>New Customer</h2>
      <form>
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
            type='email'
            placeholder='Phone Customer'
            name='phone'
            onChange={handleInput}
          />
        </div>

        <div className='send'>
          <input type='submit' className='btn btn-blue' value='Add Customer' />
        </div>
      </form>
    </>
  )
}
