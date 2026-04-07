import './App.css'
import NavBar from './components/NavBar'
import Home from './features/Home/Home'
import bg from './assets/bg-2.png'
import { useEffect } from 'react'
import useBchPrice from './hooks/useBchPrice'


function App() {
  const priceBCH = useBchPrice()

  return (
    <div className='app' style={{
        backgroundImage: `url(${bg})`
    }}>
      <NavBar />
      <Home priceBCH={priceBCH}/>
    </div>
  )
}

export default App
