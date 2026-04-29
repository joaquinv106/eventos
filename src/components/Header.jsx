import { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mobileMenu: false
        };
    }

    toggleMobileMenu = () => {
        this.setState(prev => ({ mobileMenu: !prev.mobileMenu }));
    }

    closeMobileMenu = () => {
        this.setState({ mobileMenu: false });
    }

    render() {
        const { mobileMenu } = this.state;
        const navLinks = [
            { label: 'Inicio', href: '/' },
            { label: 'Marketplace', href: '#' },
            { label: 'Registrate', href: '/registro' },
            { label: 'Log in →', href: '/login' }
        ];
        return (
            <header>
                {/* Nav Desktop - Centrado */}
                <nav aria-label="Global" className="hidden lg:flex fixed top-0 left-1/2 -translate-x-1/2 z-50 items-center justify-center p-6">
                    <div className="flex flex-wrap items-center gap-3 lg:gap-4 rounded-full bg-gradient-to-r from-black/80 to-black/60 px-4 py-2">
                        {navLinks.map((link, idx) => (
                            <Link
                                key={link.label}
                                to={link.href}
                                className={`px-5 py-2 text-sm font-semibold text-white transition-all duration-300 rounded-full hover:bg-lime-400 hover:text-black ${idx === 0 ? 'rounded-s-full' : ''} ${idx === navLinks.length-1 ? 'rounded-r-full' : ''}`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </nav>

                {/* Botón Hamburguesa - Esquina Superior Derecha */}
                <button 
                    onClick={this.toggleMobileMenu} 
                    className="lg:hidden fixed top-6 right-6 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-lime-400 text-black hover:bg-lime-300 transition-colors"
                    aria-label="Abrir menú"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>

                {/* Panel Lateral Móvil */}
                {mobileMenu && (
                    <>
                        {/* Overlay oscuro */}
                        <div 
                            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity"
                            onClick={this.closeMobileMenu}
                        />
                        
                        {/* Panel */}
                        <div className="fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-gradient-to-b from-black/95 to-black/85 backdrop-blur-lg shadow-2xl animate-in slide-in-from-right">
                            <div className="flex flex-col gap-8 p-8 pt-24">
                                {navLinks.map(link => (
                                    <Link
                                        key={link.label}
                                        to={link.href}
                                        className="px-6 py-3 text-lg font-bold text-white hover:text-lime-400 transition-colors border-b border-white/10 pb-4"
                                        onClick={this.closeMobileMenu}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </>
                )}
            </header>
        )
    }
}
export default Header;