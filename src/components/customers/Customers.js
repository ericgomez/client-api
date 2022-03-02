import { useEffect, useState } from 'react'

import instanceAxios from './../../config/axios'
import { Customer } from './Customer'

export const Customers = () => {
  const [customers, setCustomers] = useState([])

  const getDataAPI = async () => {
    const response = await instanceAxios.get('/customers')

    setCustomers(response.data)
  }

  useEffect(() => {
    getDataAPI()
  }, [])

  return (
    <>
      <h1>Customers</h1>
      <ul className='list-customers'>
        {customers.map(customer => (
          <Customer key={customer._id} customer={customer} />
        ))}
      </ul>
    </>
  )
}
