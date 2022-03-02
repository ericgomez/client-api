import { useEffect, useState } from 'react'
import instanceAxios from './../../config/axios'

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
        {customers.map(customer => {
          console.log(customer)
        })}
      </ul>
    </>
  )
}
