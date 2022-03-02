import { Link } from 'react-router-dom'

export const Navigation = () => {
  return (
    <aside className='sidebar col-3'>
      <h2>Administration</h2>

      <nav className='navigation'>
        <Link to='/' className='customers'>
          Customers
        </Link>
        <Link to='/products' className='products'>
          Products
        </Link>
        <Link to='/orders' className='orders'>
          Orders
        </Link>
      </nav>
    </aside>
  )
}
