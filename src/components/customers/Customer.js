import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

import instanceAxios from './../../config/axios'

export const Customer = ({ customer }) => {
  const { _id, name, lastName, email, company, phone } = customer

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
        instanceAxios.delete(`/customers/${id}`).then(response => {
          Swal.fire('Deleted!', response.data.message, 'success')
        })
      }
    })
  }

  return (
    <li className='customer'>
      <div className='info-customer'>
        <p className='name'>
          {name} {lastName}
        </p>
        <p className='company'>{company}</p>
        <p>{email}</p>
        <p>Tel: {phone}</p>
      </div>
      <div className='actions'>
        <Link to={`/customers/edit/${_id}`} className='btn btn-blue'>
          <i className='fas fa-pen-alt'></i>
          Edit Customer
        </Link>
        <button
          type='button'
          className='btn btn-red btn-delete'
          onClick={() => handleDeleted(_id)}
        >
          <i className='fas fa-times'></i>
          Delete Customer
        </button>
      </div>
    </li>
  )
}
