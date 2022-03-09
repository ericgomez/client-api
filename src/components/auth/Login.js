import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

import instanceAxios from './../../config/axios'

// import context
import { CRMContext } from './../../context/CRMContext'

export const Login = () => {
  // context
  const [auth, setAuth] = useContext(CRMContext)

  const navigate = useNavigate()
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  })

  const handleChange = e => {
    const { name, value } = e.target

    setCredentials({ ...credentials, [name]: value })
  }

  const handleSubmit = async e => {
    e.preventDefault()

    try {
      const response = await instanceAxios.post('/auth/login', credentials)
      const { token } = response.data

      // save token in local storage
      localStorage.setItem('token', token)

      // save token in set auth Context
      setAuth({
        token,
        auth: true
      })

      Swal.fire('Login successful', 'Welcome', 'success')

      // navigate to customers
      navigate('/', { replace: true })
    } catch (error) {
      if (!error.response) {
        Swal.fire('Login failed', 'Server not available', 'error')
      }

      Swal.fire('Login failed', error.response.data.message, 'error')
    }
  }

  return (
    <div className='login'>
      <h2>Login</h2>

      <div className='container-form'>
        <form onSubmit={handleSubmit}>
          <div className='campo'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              name='email'
              placeholder='Email'
              required
              onChange={handleChange}
            />
          </div>

          <div className='campo'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              name='password'
              placeholder='Password'
              required
              onChange={handleChange}
            />
          </div>

          <input
            type='submit'
            className='btn btn-green btn-block'
            value='Login'
          />
        </form>
      </div>
    </div>
  )
}
