import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Navigation } from './../components/layout/Navigation'

import { Customers } from './../components/customers/Customers'
import { NewCustomer } from './../components/customers/NewCustomer'
import { EditCustomer } from './../components/customers/EditCustomer'
import { Products } from './../components/products/Products'
import { NewProduct } from './../components/products/NewProduct'
import { EditProduct } from './../components/products/EditProduct'
import { Orders } from './../components/orders/Orders'
import { NewOrder } from './../components/orders/NewOrder'
import { Login } from './../components/auth/Login'

export const AppRouter = () => {
  return (
    <Router>
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
            <Route path='/orders/new/:id' element={<NewOrder />} />

            <Route path='/login' element={<Login />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}
