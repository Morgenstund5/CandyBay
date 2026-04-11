import './App.css'
import NavBar from './components/NavBar'
import bg from './assets/bg-3.png'
import { Outlet } from 'react-router'
import { PriceProvider } from './context/PriceContext'



function App() {

  return (
    <div className='app' style={{
        backgroundImage: `url(${bg})`
    }}>
      <NavBar />
      <PriceProvider>
        <Outlet />
      </PriceProvider>
    </div>
  )
}

export default App
