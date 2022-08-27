import { Routes, Route } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Tod from './Tod'

function App() {
  return (
    <>
      <div className='h-screen bg-gray-100 overflow-auto'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/tod' element={<Tod />}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App
