import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'

import instanceAxios from './../../config/axios'
import Spinner from './../layout/Spinner'

export const EditProduct = () => {
  /* The useParams hook returns an object of key/value pairs of the dynamic params from the 
      current URL that were matched by the <Route path>.*/
  const { id } = useParams()
  const navigate = useNavigate()

  const [product, setProduct] = useState({
    name: '',
    price: '',
    image: ''
  })

  useEffect(() => {
    const getProductApi = async () => {
      const response = await instanceAxios.get(`/products/${id}`)
      setProduct(response.data)
    }

    getProductApi()
  }, [])

  return <div>EditProduct</div>
}
