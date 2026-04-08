import './App.css'
import NavBar from './components/NavBar'
import Home from './features/Home/Home'
import bg from './assets/bg-3.png'
import { useEffect } from 'react'
import useBchPrice from './hooks/useBchPrice'
import { Outlet } from 'react-router'



function App() {
  const priceBCH = useBchPrice()

  return (
    <div className='app' style={{
        backgroundImage: `url(${bg})`
    }}>
      <NavBar />
      <Outlet context={{ priceBCH }}/>
    </div>
  )
}

export default App
