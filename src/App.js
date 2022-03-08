import { useContext } from 'react'

import { Header } from './components/layout/Header'

import { AppRouter } from './routers/AppRouter'
import { CRMContext, CRMProvider } from './context/CRMContext'

function App () {
  const [auth, setAuth] = useContext(CRMContext)

  return (
    <CRMProvider value={[auth, setAuth]}>
      <Header />
      <AppRouter />
    </CRMProvider>
  )
}

export default App
