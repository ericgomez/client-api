import { Link } from 'react-router-dom'

export const Product = ({ product }) => {
  const { _id, name, price, image } = product

  const handleDeleted = async id => {
    console.log(id)
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
