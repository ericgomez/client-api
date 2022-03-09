import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

// import context
import { CRMContext } from './../../context/CRMContext'

export const Header = () => {
  // context
  const [auth, setAuth] = useContext(CRMContext)
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('token')

    setAuth({
      token: null,
      auth: false
    })

    navigate('/login', { replace: true })
  }

  return (
    <header className='bar'>
      <div className='container'>
        <div className='content-bar'>
          <h1>CRM - Client Administrator</h1>
          {auth.auth && (
            <button
              type='button'
              className='btn btn-red'
              onClick={handleLogout}
            >
              <i className='far fa-times-circle'></i>

              <span>Logout</span>
            </button>
          )}
        </div>
      </div>
    </header>
  )
}
