import './App.css'
import NavBar from './components/NavBar'
import Home from './features/Home/Home'
import bg from './assets/bg-2.png'


function App() {
  

  return (
    <div className='app' style={{
        backgroundImage: `url(${bg})`
    }}>
      <NavBar />
      <Home />
    </div>
  )
}

export default App
