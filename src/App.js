import { Header } from './components/layout/Header'
import { Navigation } from './components/layout/Navigation'

import { AppRouter } from './routers/AppRouter'

function App () {
  return (
    <>
      <Header />
      <div className='grid container content-principal'>
        <Navigation />

        <main className='box-content col-9'>
          <AppRouter />
        </main>
      </div>
    </>
  )
}

export default App
