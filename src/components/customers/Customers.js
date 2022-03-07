import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import instanceAxios from './../../config/axios'
import { Customer } from './Customer'

export const Customers = () => {
  const [customers, setCustomers] = useState([])

  useEffect(() => {
    const getDataAPI = async () => {
      const response = await instanceAxios.get('/customers')

      setCustomers(response.data)
    }
    getDataAPI()
  }, [])

  const handleRemoveCustomer = id => {
    setCustomers(customers.filter(customer => customer._id !== id))
  }

  return (
    <>
      <h2>Customers</h2>

      <Link to='/customers/new' className='btn btn-green nvo-customer'>
        <i className='fas fa-plus-circle'></i>
        New Customer
      </Link>

      <ul className='list-customers'>
        {customers.map(customer => (
          <Customer
            key={customer._id}
            customer={customer}
            handleRemoveCustomer={handleRemoveCustomer}
          />
        ))}
      </ul>
    </>
  )
}
