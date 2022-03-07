export const FormQuantityProduct = ({ product }) => {
  const { name, price, quantity } = product

  return (
    <li>
      <div className='text-product'>
        <p className='name'>{name}</p>
        <p className='price'>${price}</p>
      </div>
      <div className='actions'>
        <div className='container-quantity'>
          <i className='fas fa-minus'></i>

          <p>{quantity}</p>

          <i className='fas fa-plus'></i>
        </div>
        <button type='button' className='btn btn-red'>
          <i className='fas fa-minus-circle'></i>
          Delete Product
        </button>
      </div>
    </li>
  )
}
