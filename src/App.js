import { Routes, Route } from 'react-router-dom'

import { Header } from './components/layout/Header'
import { Navigation } from './components/layout/Navigation'

import { Customers } from './components/customers/Customers'
import { NewCustomer } from './components/customers/NewCustomer'
import { EditCustomer } from './components/customers/EditCustomer'
import { Products } from './components/products/Products'
import { NewProduct } from './components/products/NewProduct'
import { EditProduct } from './components/products/EditProduct'
import { Orders } from './components/orders/Orders'

function App () {
  return (
    <>
      <Header />
      <div className='grid container content-principal'>
        <Navigation />

        <main className='box-content col-9'>
          <Routes>
            <Route path='/' element={<Customers />} />
            <Route path='/customers/new' element={<NewCustomer />} />
            <Route path='/customers/edit/:id' element={<EditCustomer />} />
            <Route path='/products' element={<Products />} />
            <Route path='/products/new' element={<NewProduct />} />
            <Route path='/products/edit/:id' element={<EditProduct />} />
            <Route path='/orders' element={<Orders />} />
          </Routes>
        </main>
      </div>
    </>
  )
}

export default App
