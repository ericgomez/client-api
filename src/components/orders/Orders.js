import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import instanceAxios from './../../config/axios'
import { OrderDetails } from './OrderDetails'

// import context
import { CRMContext } from './../../context/CRMContext'

export const Orders = () => {
  const [orders, setOrders] = useState([])
  const navigate = useNavigate()

  // context
  const [auth, setAuth] = useContext(CRMContext)

  useEffect(() => {
    if (!auth.token) navigate('/login', { replace: true })

    const getOrdersAPI = async () => {
      try {
        const response = await instanceAxios.get('/orders', {
          headers: {
            Authorization: `Bearer ${auth.token}`
          }
        })

        setOrders(response.data)
      } catch (error) {
        if (error.response.status === 401) {
          localStorage.removeItem('token')
          setAuth({
            token: null,
            auth: false
          })
        }
      }
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
