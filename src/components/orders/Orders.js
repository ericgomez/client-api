import { useState, useEffect } from 'react'

import instanceAxios from './../../config/axios'
import { OrderDetails } from './OrderDetails'

export const Orders = () => {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    const getOrdersAPI = async () => {
      const response = await instanceAxios.get('/orders')

      setOrders(response.data)
    }

    getOrdersAPI()
  }, [])

  return (
    <>
      <div>Orders</div>
      <ul className='list-orders'>
        {orders.map(order => (
          <OrderDetails key={order._id} order={order} />
        ))}
      </ul>
    </>
  )
}
