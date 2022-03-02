import { useEffect } from 'react'
import instanceAxios from './../../config/axios'

export const Customers = () => {
  const getDataAPI = async () => {
    const response = await instanceAxios.get('/customers')
    console.log(response.data)
  }

  useEffect(() => {
    getDataAPI()
  })

  return <div>Customers</div>
}
