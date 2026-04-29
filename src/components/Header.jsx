import { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isScrolled: false
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

    render() {
        const { isScrolled } = this.state;

        return (
            <header className={`fixed top-0 center-0 w-full z-50 transition-colors duration-300 ease-in-out ${
                isScrolled ? 'bg-black/80' : 'bg-transparent hover:bg-black/40'
            }`}>
                <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                    <div className="flex lg:flex-1">
                        
                    </div>
                    <div className="flex flex-wrap items-center gap-3 lg:gap-4 rounded-full border border-lime-400">
                        <a href="#" className=" rounded-s-full px-5 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-lime-400 hover:text-black">
                            Features
                        </a>
                        <a href="#" className=" px-5 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-lime-400 hover:text-black">
                            Marketplace
                        </a>
                        <a href="#" className=" px-5 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-lime-400 hover:text-black">
                            Company
                        </a>
                        <a href="#" className="rounded-r-full border-white/20 px-5 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/10 hover:border-white/40">
                            Log in →
                        </a>
                    </div>
                </nav>
            </header>
        )
    }
} export default Header