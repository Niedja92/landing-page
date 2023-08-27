import Main from './components/Main'
import Header from './components/Header'
import Form from './components/Form'
import { Global } from './assets/styles/index.ts'
import './assets/styles/header'

function App() {

  return (
    <>
      <Global />
      <Header />
      <Form />
      <Main />
    </>
  )
}

export default App