import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/Header'
import Slider from './components/Slider'
import Eventos from './components/Eventos'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
      <Slider/>

      <Eventos/>
      <Footer/>
    </>
  )
}

export default App
