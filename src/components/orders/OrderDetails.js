export const OrderDetails = ({ order, deleteOrder }) => {
  const { _id, customer, total } = order
  return (
    <li className='order'>
      <div className='info-order'>
        <p className='id'>ID: {customer._id}</p>
        <p className='name'>
          Client: {customer.name} {customer.lastName}
        </p>

        <div className='articles-order'>
          <p className='products'>Articles order: </p>
          <ul>
            {order.order.map(article => (
              <li key={article.product._id}>
                <p>{article.product.name}</p>
                <p>Price: ${article.product.price}</p>
                <p>Quantity: {article.quantity}</p>
              </li>
            ))}
          </ul>
        </div>
        <p className='total'>Total: ${total} </p>
      </div>
      <div className='actions'>
        <button
          type='button'
          className='btn btn-red btn-delete'
          onClick={() => deleteOrder(_id)}
        >
          <i className='fas fa-times'></i>
          Delete Order
        </button>
      </div>
    </li>
  )
}
