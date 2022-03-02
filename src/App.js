import { Routes, Route } from 'react-router-dom'

import { Header } from './components/layout/Header'
import { Navigation } from './components/layout/Navigation'

import { Customers } from './components/customers/Customers'
import { Products } from './components/products/Products'
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
            <Route path='/products' element={<Products />} />
            <Route path='/orders' element={<Orders />} />
          </Routes>
        </main>
      </div>
    </>
  )
}

export default App
