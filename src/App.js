import { Header } from './components/layout/Header'
import { Navigation } from './components/layout/Navigation'

function App () {
  return (
    <>
      <Header />
      <div class='grid container content-principal'>
        <Navigation />

        <main class='box-content col-9'>{/* TODO: */}</main>
      </div>
    </>
  )
}

export default App
