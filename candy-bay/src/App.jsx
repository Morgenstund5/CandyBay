import './App.css'
import NavBar from './components/NavBar'
import bg from './assets/bg-3.png'
import { Outlet } from 'react-router'
import { PriceProvider } from './context/PriceContext'
import { CartProvider } from './context/CartContext'



function App() {

  return (
    <div className='app' style={{
        backgroundImage: `url(${bg})`
    }}>
      <CartProvider>
        <NavBar />
        <PriceProvider>
          <Outlet />
        </PriceProvider>
      </CartProvider>
    </div>
  )
}

export default App
