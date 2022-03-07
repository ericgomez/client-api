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

  // delete order
  const deleteOrder = async id => {
    await instanceAxios.delete(`/orders/${id}`)

    const newOrders = orders.filter(order => order._id !== id)

    setOrders(newOrders)
  }

  return (
    <>
      <h2>Orders</h2>
      <ul className='list-orders'>
        {orders.map(order => (
          <OrderDetails
            key={order._id}
            order={order}
            deleteOrder={deleteOrder}
          />
        ))}
      </ul>
    </>
  )
}
