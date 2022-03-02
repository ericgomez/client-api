import { Link } from 'react-router-dom'

export const Customer = ({ customer }) => {
  const { _id, name, lastName, email, company, phone } = customer

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
        <button type='button' className='btn btn-red btn-delete'>
          <i className='fas fa-times'></i>
          Delete Customer
        </button>
      </div>
    </li>
  )
}
