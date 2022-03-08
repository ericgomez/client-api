import { useContext } from 'react'

import { AppRouter } from './routers/AppRouter'
import { CRMContext, CRMProvider } from './context/CRMContext'

function App () {
  const [auth, setAuth] = useContext(CRMContext)

  return (
    <CRMProvider value={[auth, setAuth]}>
      <AppRouter />
    </CRMProvider>
  )
}

export default App
