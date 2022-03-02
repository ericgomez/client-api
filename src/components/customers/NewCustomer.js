export const NewCustomer = () => {
  return (
    <>
      <h2>New Customer</h2>
      <form>
        <legend>Fill in all the fields</legend>

        <div className='campo'>
          <label>Name:</label>
          <input type='text' placeholder='Name Customer' name='name' />
        </div>

        <div className='campo'>
          <label>LastName:</label>
          <input type='text' placeholder='LastName Customer' name='lastName' />
        </div>

        <div className='campo'>
          <label>Company:</label>
          <input type='text' placeholder='Company Customer' name='company' />
        </div>

        <div className='campo'>
          <label>Email:</label>
          <input type='email' placeholder='Email Customer' name='email' />
        </div>

        <div className='campo'>
          <label>Phone:</label>
          <input type='email' placeholder='Phone Customer' name='phone' />
        </div>

        <div className='send'>
          <input type='submit' className='btn btn-blue' value='Add Customer' />
        </div>
      </form>
    </>
  )
}
