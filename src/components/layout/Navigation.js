export const Navigation = () => {
  return (
    <aside className='sidebar col-3'>
      <h2>Administration</h2>

      <nav className='navigation'>
        <a href='index.html' className='customers'>
          Customers
        </a>
        <a href='products.html' className='products'>
          Products
        </a>
        <a href='orders.html' className='orders'>
          Orders
        </a>
      </nav>
    </aside>
  )
}
