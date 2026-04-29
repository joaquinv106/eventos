import { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="bg-black text-white py-16 px-4 mt-12">
                <div className="max-w-6xl mx-auto">
                    {/* Sección principal de llamada a acción */}
                    <div className="text-center mb-16">
                        <h1 className="text-7xl md:text-8xl font-black uppercase tracking-[0.18em] leading-tight mb-8 !text-white" style={{ color: '#ffffff', fontFamily: 'Poppins, Inter, system-ui' }}>
                            ¿Quieres anunciar tu evento?
                        </h1>
                        <button className="bg-lime-400 hover:bg-lime-300 text-black font-bold text-xl md:text-2xl px-12 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-lime-400/50 transform">
                            COTIZAR AHORA
                        </button>
                    </div>

                    {/* Contenido del footer */}
                    <div className="grid md:grid-cols-3 gap-12 mb-12">
                        {/* Información de la empresa */}
                        <div>
                            <h3 className="text-2xl font-bold mb-6 !text-white" style={{ color: '#ffffff' }}>EVENTOS PRO</h3>
                            <p className="text-gray-300 mb-4 leading-relaxed">
                                La plataforma líder para promocionar y descubrir eventos increíbles en tu ciudad.
                                Conectamos organizadores con miles de asistentes apasionados.
                            </p>
                            <div className="space-y-2 text-gray-300">
                                <p>📍 Calle Principal 123, Ciudad</p>
                                <p>📞 +1 (555) 123-4567</p>
                                <p>✉️ info@eventospro.com</p>
                            </div>
                        </div>

                        {/* Enlaces rápidos */}
                        <div>
                            <h4 className="text-xl font-bold mb-6 !text-white" style={{ color: '#ffffff' }}>ENLACES RÁPIDOS</h4>
                            <ul className="space-y-3 text-gray-300">
                                <li><a href="#" className="hover:text-lime-400 transition-colors duration-300">Sobre Nosotros</a></li>
                                <li><a href="#" className="hover:text-lime-400 transition-colors duration-300">Cómo Funciona</a></li>
                                <li><a href="#" className="hover:text-lime-400 transition-colors duration-300">Planes de Precios</a></li>
                                <li><a href="#" className="hover:text-lime-400 transition-colors duration-300">Centro de Ayuda</a></li>
                                <li><a href="#" className="hover:text-lime-400 transition-colors duration-300">Contacto</a></li>
                            </ul>
                        </div>

                        {/* Redes sociales */}
                        <div>
                            <h4 className="text-xl font-bold mb-6 !text-white" style={{ color: '#ffffff' }}>SÍGUENOS</h4>
                            <div className="flex space-x-4">
                                <a href="#" className="w-12 h-12 bg-gray-800 hover:bg-lime-400 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group">
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-gray-300 group-hover:text-black transition-colors duration-300">
                                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                                    </svg>
                                </a>
                                <a href="#" className="w-12 h-12 bg-gray-800 hover:bg-lime-400 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group">
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-gray-300 group-hover:text-black transition-colors duration-300">
                                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001.012.017z"/>
                                    </svg>
                                </a>
                                <a href="#" className="w-12 h-12 bg-gray-800 hover:bg-lime-400 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group">
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-gray-300 group-hover:text-black transition-colors duration-300">
                                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.253 14.894 3.762 13.743 3.762 12.446s.49-2.448 1.364-3.323c.875-.875 2.026-1.365 3.323-1.365s2.448.49 3.323 1.365c.875.875 1.365 2.026 1.365 3.323s-.49 2.448-1.365 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718 0c-.906 0-1.747-.245-2.478-.734.906-.49 1.747-.734 2.478-.734.731 0 1.572.245 2.478.734-.731.489-1.572.734-2.478.734zm5.988-3.718c-.906 0-1.747-.245-2.478-.734.906-.49 1.747-.734 2.478-.734.731 0 1.572.245 2.478.734-.906.489-1.747.734-2.478.734z"/>
                                    </svg>
                                </a>
                                <a href="#" className="w-12 h-12 bg-gray-800 hover:bg-lime-400 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group">
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-gray-300 group-hover:text-black transition-colors duration-300">
                                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.253 14.894 3.762 13.743 3.762 12.446s.49-2.448 1.364-3.323c.875-.875 2.026-1.365 3.323-1.365s2.448.49 3.323 1.365c.875.875 1.365 2.026 1.365 3.323s-.49 2.448-1.365 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718 0c-.906 0-1.747-.245-2.478-.734.906-.49 1.747-.734 2.478-.734.731 0 1.572.245 2.478.734-.731.489-1.572.734-2.478.734zm5.988-3.718c-.906 0-1.747-.245-2.478-.734.906-.49 1.747-.734 2.478-.734.731 0 1.572.245 2.478.734-.906.489-1.747.734-2.478.734z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Línea divisoria */}
                    <div className="border-t border-gray-800 pt-8">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <p className="text-gray-400 text-sm !text-gray-400" style={{ color: '#9ca3af' }}>
                                © 2026 Eventos Pro. Todos los derechos reservados.
                            </p>
                            <div className="flex space-x-6 mt-4 md:mt-0">
                                <a href="#" className="text-gray-400 hover:text-lime-400 text-sm transition-colors duration-300">Política de Privacidad</a>
                                <a href="#" className="text-gray-400 hover:text-lime-400 text-sm transition-colors duration-300">Términos de Servicio</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;