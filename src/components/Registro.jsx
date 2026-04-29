import { useState } from 'react';
import { Link } from 'react-router-dom';
import { usePageAnimation } from '../hooks/usePageAnimation';

function Registro() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [organization, setOrganization] = useState('');
  const [eventType, setEventType] = useState('');
  const containerRef = usePageAnimation();

  const handleSubmit = (e) => {
    e.preventDefault();
    // lógica de registro aquí
  };

  return (
    <div ref={containerRef} style={{ opacity: 0, transform: 'translateY(20px)' }} className="min-h-screen flex flex-col md:flex-row">
      <div className="hidden md:flex w-1/2 min-h-screen flex-col justify-between p-12 bg-black relative overflow-hidden">
        <div>
          <span className="uppercase text-sm tracking-widest text-white/40 mb-8 block">Únete como organizador</span>
          <h1 className="text-6xl md:text-7xl font-black text-white leading-tight mb-8">Publica tus eventos hoy</h1>
        </div>
        <span className="text-xs text-white/40">PULSO CULTURAL © 2026</span>
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div style={{ position: 'absolute', left: '-20%', top: '-20%', width: '140%', height: '140%', background: 'radial-gradient(circle at 70% 30%, #d4ff00 0%, #a259ff 50%, #000 100%)', filter: 'blur(0px)', opacity: 0.85 }} />
        </div>
      </div>

      <div className="w-full md:w-1/2 min-h-screen flex flex-col justify-center px-6 md:px-20 py-12 bg-[#fafafa] relative z-10">
        <Link to="/login" className="mb-8 text-sm text-[#6b6375] flex items-center gap-2 hover:underline w-fit">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          Volver a iniciar sesión
        </Link>

        <div className="max-w-md w-full mx-auto">
          <span className="uppercase text-xs tracking-widest text-[#bdbdbd] mb-2 block">Nuevo organizador</span>
          <h2 className="text-4xl font-black mb-6 !text-black">Regístrate</h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="block text-xs font-bold text-[#bdbdbd] mb-1 tracking-widest">Nombre completo *</label>
              <input value={fullName} onChange={(e) => setFullName(e.target.value)} type="text" required className="w-full border border-[#ededed] rounded px-4 py-3 text-base focus:outline-none focus:border-[#a259ff] bg-white" placeholder="Tu nombre" />
            </div>
            <div>
              <label className="block text-xs font-bold text-[#bdbdbd] mb-1 tracking-widest">Email *</label>
              <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required className="w-full border border-[#ededed] rounded px-4 py-3 text-base focus:outline-none focus:border-[#a259ff] bg-white" placeholder="tu@email.com" />
            </div>
            <div>
              <label className="block text-xs font-bold text-[#bdbdbd] mb-1 tracking-widest">Teléfono</label>
              <input value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" className="w-full border border-[#ededed] rounded px-4 py-3 text-base focus:outline-none focus:border-[#a259ff] bg-white" placeholder="+52 55 0000 0000" />
            </div>
            <div>
              <label className="block text-xs font-bold text-[#bdbdbd] mb-1 tracking-widest">Nombre de tu organización *</label>
              <input value={organization} onChange={(e) => setOrganization(e.target.value)} type="text" required className="w-full border border-[#ededed] rounded px-4 py-3 text-base focus:outline-none focus:border-[#a259ff] bg-white" placeholder="Nombre del venue o productora" />
            </div>
            <div>
              <label className="block text-xs font-bold text-[#bdbdbd] mb-1 tracking-widest">¿Qué tipo de eventos organizas?</label>
              <textarea value={eventType} onChange={(e) => setEventType(e.target.value)} className="w-full border border-[#ededed] rounded px-4 py-3 text-base focus:outline-none focus:border-[#a259ff] bg-white" placeholder="Cuéntanos sobre los eventos que organizas..." rows={4} />
            </div>
            <button type="submit" className="w-full py-4 bg-black text-white font-bold uppercase tracking-wider rounded hover:bg-[#a259ff] transition-colors text-base mt-2">Enviar solicitud</button>
          </form>

          <div className="mt-8 text-center text-xs text-[#bdbdbd]">
            ¿Ya tienes cuenta? <Link to="/login" className="text-[#a259ff] hover:underline font-bold">Inicia sesión</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registro;
