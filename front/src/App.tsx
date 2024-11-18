
import './App.css'
import Router from './routers/router'
import Layout from './layout/Layout'

function App() {

  return (
    <>
    <div className='app-div'>
      <h1>hello to app</h1>
      <Layout children={<Router/>}/>
    </div>
    </>
  )
}

export default App
