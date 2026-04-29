import { useState } from 'react'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
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
import Registro from './components/Registro'
import PanelEvento from './components/PanelEvento'
import PanelUser from './components/PanelUser'
import { usePageAnimation } from './hooks/usePageAnimation'

function AppLayout() {
  const animationRef = usePageAnimation();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1" ref={animationRef} style={{ opacity: 0, transform: 'translateY(20px)' }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<>
            <Slider/>
            <Eventos/>
          </>} />
          <Route path="/evento/:id" element={<EventDetalle />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/panel-eventos" element={<PanelEvento />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
