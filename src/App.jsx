import { useEffect, useState } from 'react'
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
import Gestion from './components/Gestion'
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hideLoader = () => {
      setTimeout(() => setLoading(false), 250);
    };

    if (document.readyState === 'complete') {
      hideLoader();
    } else {
      window.addEventListener('load', hideLoader);
      return () => window.removeEventListener('load', hideLoader);
    }
  }, []);

  useEffect(() => {
    document.body.style.overflow = loading ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [loading]);

  return (
    <div className="relative min-h-screen">
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
          <div className="flex flex-col items-center gap-4">
            <div className="loader-ring" />
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#6b7280]">Cargando...</p>
          </div>
        </div>
      )}

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
            <Route path="/gestion" element={<Gestion />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
