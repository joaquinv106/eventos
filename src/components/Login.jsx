import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { usePageAnimation } from '../hooks/usePageAnimation';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const containerRef = usePageAnimation();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // lógica de login aquí
    navigate('/panel-eventos');
  };

  return (
    <div ref={containerRef} style={{ opacity: 0, transform: 'translateY(20px)' }} className="min-h-screen flex flex-col md:flex-row">
      {/* Lado izquierdo: fondo degradado y texto */}
      <div className="hidden md:flex w-1/2 min-h-screen flex-col justify-between p-12 bg-black relative overflow-hidden">
        <div>
          <span className="uppercase text-sm tracking-widest text-white/40 mb-8 block">Panel de organizadores</span>
          <h1 className="text-6xl md:text-7xl font-black text-white leading-tight mb-8">Crea<br/>eventos<br/>que impactan</h1>
        </div>
        <span className="text-xs text-white/40">PULSO CULTURAL © 2026</span>
        {/* Degradado tipo blob */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div style={{position:'absolute',left:'-20%',top:'-20%',width:'140%',height:'140%',background:'radial-gradient(circle at 70% 30%, #d4ff00 0%, #a259ff 50%, #000 100%)',filter:'blur(0px)',opacity:0.85}} />
        </div>
      </div>
      {/* Lado derecho: formulario */}
      <div className="w-full md:w-1/2 min-h-screen flex flex-col justify-center px-6 md:px-20 py-12 bg-[#fafafa] relative z-10">
        <Link to="/" className="mb-8 text-sm text-[#6b6375] flex items-center gap-2 hover:underline w-fit">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          Volver al inicio
        </Link>
        <div className="max-w-md w-full mx-auto">
          <span className="uppercase text-xs tracking-widest text-[#bdbdbd] mb-2 block">Organizadores</span>
          <h2 className="text-4xl font-black mb-6">Iniciar sesión</h2>
          <div className="mb-6 p-4 border border-[#a259ff]/30 bg-[#f6f3ff] rounded">
            <span className="block text-xs font-bold text-[#a259ff] mb-1">Credenciales demo</span>
            <span className="block text-xs text-[#6b6375]">Email: organizador@pulso.com</span>
            <span className="block text-xs text-[#6b6375]">Contraseña: pulso2026</span>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="block text-xs font-bold text-[#bdbdbd] mb-1 tracking-widest">Email</label>
              <input type="email" className="w-full border border-[#ededed] rounded px-4 py-3 text-base focus:outline-none focus:border-[#a259ff] bg-white" value={email} onChange={e => setEmail(e.target.value)} required />
            </div>
            <div>
              <label className="block text-xs font-bold text-[#bdbdbd] mb-1 tracking-widest">Contraseña</label>
              <div className="relative">
                <input type={showPassword ? 'text' : 'password'} className="w-full border border-[#ededed] rounded px-4 py-3 text-base focus:outline-none focus:border-[#a259ff] bg-white pr-12" value={password} onChange={e => setPassword(e.target.value)} required />
                <button type="button" onClick={() => setShowPassword(v => !v)} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#bdbdbd] hover:text-[#a259ff] text-xs font-bold">{showPassword ? 'Ocultar' : 'Ver'}</button>
              </div>
            </div>
            <button type="submit" className="w-full py-4 bg-black text-white font-bold uppercase tracking-wider rounded hover:bg-[#a259ff] transition-colors text-base mt-2">Ingresar al panel</button>
          </form>
          <div className="mt-8 text-center text-xs text-[#bdbdbd]">
            ¿Aún no eres organizador? <Link to="/registro" className="text-[#a259ff] hover:underline font-bold">Regístrate aquí</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;