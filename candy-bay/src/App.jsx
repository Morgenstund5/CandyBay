import './App.css'
import NavBar from './components/NavBar'
import bg from './assets/bg-3.png'
import { Outlet } from 'react-router'
import { PriceProvider } from './context/PriceContext'
import { CartProvider } from './context/CartContext'
import bgBlueWink from './assets/bg/blue-wink.png'
import bgPurpleFLower from './assets/bg/purple-flower.png'
import bgRedKiss from './assets/bg/red-kiss.png'



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
