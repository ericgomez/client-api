export const OrderDetails = () => {
  return (
    <li className='order'>
      <div className='info-order'>
        <p className='id'>ID: 0192019201291201</p>
        <p className='name'>Client: Eric Gomez</p>

        <div className='articles-order'>
          <p className='products'>Articles order: </p>
          <ul>
            <li>
              <p>Macbook Pro</p>
              <p>Precio: $3000</p>
              <p>Cantidad: 4</p>
            </li>
            <li>
              <p>Macbook Pro</p>
              <p>Precio: $3000</p>
              <p>Cantidad: 4</p>
            </li>
            <li>
              <p>Macbook Pro</p>
              <p>Precio: $3000</p>
              <p>Cantidad: 4</p>
            </li>
          </ul>
        </div>
        <p className='total'>Total: $3,500 </p>
      </div>
      <div className='actions'>
        <button type='button' className='btn btn-red btn-delete'>
          <i className='fas fa-times'></i>
          Delete Order
        </button>
      </div>
    </li>
  )
}
