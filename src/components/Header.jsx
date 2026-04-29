import { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isScrolled: false,
            mobileMenu: false
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        const isScrolled = window.scrollY > 0;
        if (isScrolled !== this.state.isScrolled) {
            this.setState({ isScrolled });
        }
    }

    toggleMobileMenu = () => {
        this.setState(prev => ({ mobileMenu: !prev.mobileMenu }));
    }

    render() {
        const { isScrolled, mobileMenu } = this.state;
        const navLinks = [
            { label: 'Inicio', href: '/' },
            { label: 'Marketplace', href: '#' },
            { label: 'Company', href: '#' },
            { label: 'Log in →', href: '/login' }
        ];
        return (
            <header className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ease-in-out ${isScrolled ? 'bg-gradient-to-b from-black/90 to-black/60' : 'bg-gradient-to-b from-black/80 to-transparent'}`}>
                <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-center p-6 lg:px-8">
                    <div className="flex flex-1 lg:hidden justify-start">
                        <button onClick={this.toggleMobileMenu} className="relative z-50 flex items-center justify-center w-12 h-12 rounded-full border-none bg-transparent hover:bg-lime-400/10 transition-colors group">
                            <span className="sr-only">Abrir menú</span>
                            <span className="block w-8 h-8 rounded-full border border-white/30 flex items-center justify-center">
                                <span className="block w-6 h-0.5 bg-white mb-1 rounded transition-all duration-300 group-hover:bg-lime-400"></span>
                                <span className="block w-6 h-0.5 bg-white mt-1 rounded transition-all duration-300 group-hover:bg-lime-400"></span>
                            </span>
                        </button>
                    </div>
                    <div className="hidden lg:flex flex-wrap items-center gap-3 lg:gap-4 rounded-full bg-gradient-to-r from-black/80 to-black/60 px-4 py-2">
                        {navLinks.map((link, idx) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className={`px-5 py-2 text-sm font-semibold text-white transition-all duration-300 rounded-full hover:bg-lime-400 hover:text-black ${idx === 0 ? 'rounded-s-full' : ''} ${idx === navLinks.length-1 ? 'rounded-r-full' : ''}`}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                    {/* Mobile menu overlay */}
                    {mobileMenu && (
                        <div className="fixed inset-0 z-40 flex flex-col items-end bg-black/80 backdrop-blur-sm transition-all">
                            <button onClick={this.toggleMobileMenu} className="m-6 w-12 h-12 flex items-center justify-center rounded-full border border-white/30 bg-black/60 hover:bg-lime-400/10 transition-colors">
                                <span className="sr-only">Cerrar menú</span>
                                <span className="block w-8 h-8 rounded-full flex items-center justify-center">
                                    <span className="block w-6 h-0.5 bg-white mb-1 rounded transition-all duration-300 group-hover:bg-lime-400"></span>
                                    <span className="block w-6 h-0.5 bg-white mt-1 rounded transition-all duration-300 group-hover:bg-lime-400"></span>
                                </span>
                            </button>
                            <div className="flex flex-col gap-4 w-full items-end pr-10 mt-10">
                                {navLinks.map(link => (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        className="px-6 py-4 text-lg font-semibold text-white rounded-full hover:bg-lime-400 hover:text-black transition-all duration-300"
                                        onClick={this.toggleMobileMenu}
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}
                </nav>
            </header>
        )
    }
}
export default Header;