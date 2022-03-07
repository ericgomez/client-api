export const Login = () => {
  const handleChange = e => {
    const { name, value } = e.target
    // setUser({ ...user, [name]: value })
  }

  return (
    <div className='login'>
      <h2>Login</h2>

      <div className='container-form'>
        <form>
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
