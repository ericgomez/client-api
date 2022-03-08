import { useContext } from 'react'
import { Link } from 'react-router-dom'

// import context
import { CRMContext } from './../../context/CRMContext'

export const Navigation = () => {
  // context
  const [auth, setAuth] = useContext(CRMContext)

  if (!auth.auth) return null

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
