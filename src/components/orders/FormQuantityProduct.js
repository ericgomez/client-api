export const FormQuantityProduct = () => {
  return (
    <li>
      <div className='text-product'>
        <p className='name'>Macbook Pro</p>
        <p className='price'>$250</p>
      </div>
      <div className='actions'>
        <div className='container-quantity'>
          <i className='fas fa-minus'></i>
          <input type='text' name='quantity' />
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
