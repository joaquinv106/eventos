import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/Header'
import Slider from './components/Slider'
import Eventos from './components/Eventos'
import Footer from './components/Footer'
import EventDetalle from './components/EventDetalle'
import Login from './components/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<>
          <Slider/>
          <Eventos/>
        </>} />
        <Route path="/evento/:id" element={<EventDetalle />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
