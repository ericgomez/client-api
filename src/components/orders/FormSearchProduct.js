export const FormSearchProduct = ({ searchProduct, readDataForm }) => {
  return (
    <form onSubmit={searchProduct}>
      <legend>Search for a Product and add a quantity</legend>

      <div className='campo'>
        <label>Products:</label>
        <input
          type='text'
          placeholder='Name Products'
          name='products'
          onChange={readDataForm}
        />
      </div>

      <input
        type='submit'
        className='btn btn-blue btn-block'
        value='Search Product'
      />
    </form>
  )
}
