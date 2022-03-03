import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

import instanceAxios from './../../config/axios'

export const Product = ({ product }) => {
  const { _id, name, price, image } = product

  const handleDeleted = async id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(result => {
      if (result.isConfirmed) {
        instanceAxios.delete(`/products/${id}`).then(response => {
          Swal.fire('Deleted!', response.data.message, 'success')
        })
      }
    })
  }

  return (
    <li className='product'>
      <div className='info-product'>
        <p className='name'>{name}</p>
        <p className='price'>${price} </p>
        {image && <img src={`http://localhost:5000/${image}`} alt={image} />}
      </div>
      <div className='actions'>
        <Link to={`/products/edit/${_id}`} className='btn btn-blue'>
          <i className='fas fa-pen-alt'></i>
          Edit Product
        </Link>

        <button
          type='button'
          className='btn btn-red btn-delete'
          onClick={() => handleDeleted(_id)}
        >
          <i className='fas fa-times'></i>
          Delete Product
        </button>
      </div>
    </li>
  )
}
