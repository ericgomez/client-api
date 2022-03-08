import { useState, createContext } from 'react'

const CRMContext = createContext([{}, () => {}])

const CRMProvider = props => {
  const [auth, setAuth] = useState({
    token: '',
    auth: false
  })

  return (
    <CRMContext.Provider value={[auth, setAuth]}>
      {props.children}
    </CRMContext.Provider>
  )
}

module.exports = { CRMContext, CRMProvider }
