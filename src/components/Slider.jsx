
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import imagen1 from "../img/header/evento1.jpg";
import imagen2 from "../img/header/evento2.jpg";
import imagen3 from "../img/header/evento3.jpg";
import imagen4 from "../img/header/evento4.jpg";

class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSlide: 0
        };
        this.containerRef = React.createRef();
    }

    componentDidMount() {
        this.startAutoSlide();
        this.animatePageEntry();
    }

    animatePageEntry = () => {
        if (this.containerRef.current) {
            this.containerRef.current.style.opacity = 0;
            this.containerRef.current.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                this.containerRef.current.style.transition = 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
                this.containerRef.current.style.opacity = 1;
                this.containerRef.current.style.transform = 'translateY(0)';
            }, 50);
        }
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    handleDotClick = (index) => {
        clearInterval(this.interval);
        this.setState({ currentSlide: index });
        this.startAutoSlide();
    }

    startAutoSlide = () => {
        this.interval = setInterval(() => {
            this.setState(prevState => ({
                currentSlide: (prevState.currentSlide + 1) % 3
            }));
        }, 5000);
    }

    render() {
        const slides = [
            {
                src: imagen1,
                alt: "slide 1",
                title: "Summer Nights Festival",
                tags: ["Electrónica", "Live", "Outdoor"],
                date: "15 MAY 2026",
                time: "22:00 - 03:00",
                category: "Música"
            },
            {
                src: imagen2,
                alt: "slide 2",
                title: "Ritmo Nocturno",
                tags: ["House", "DJ Set", "After Party"],
                date: "20 MAY 2026",
                time: "21:00 - 02:00",
                category: "Fiesta"
            },
            {
                src: imagen3,
                alt: "slide 3",
                title: "Luz y Sonido",
                tags: ["Festival", "Visuals", "Experiencia"],
                date: "25 MAY 2026",
                time: "19:00 - 01:00",
                category: "Event"
            },
            {
                src: imagen4,
                alt: "slide 3",
                title: "Luz y Sonido",
                tags: ["Festival", "Visuals", "Experiencia"],
                date: "25 MAY 2026",
                time: "19:00 - 01:00",
                category: "Event"
            }
        ];

        const currentSlide = slides[this.state.currentSlide];
        const isEvenSlide = this.state.currentSlide % 2 === 0;
        const overlayPositionClass = isEvenSlide ? 'left-0' : 'right-0';
        const textPositionClass = isEvenSlide ? 'left-6 md:left-12 text-left' : 'right-6 md:right-12 text-right';
        const gradientClass = isEvenSlide
            ? 'bg-gradient-to-r from-black/100 via-black/80 to-transparent'
            : 'bg-gradient-to-l from-black/100 via-black/80 to-transparent';

        return (
            <div ref={this.containerRef} style={{ opacity: 0, transform: 'translateY(20px)' }}>
             <section className="w-full bg-cover bg-center flex items-center justify-center">
                <div className="w-full flex flex-col items-center justify-center">
                    <div className="w-full h-[560px] md:h-[640px] relative overflow-hidden">
                        <img src={currentSlide.src} className="w-full h-full object-cover" alt={currentSlide.alt} />
                        <div className={`absolute inset-y-0 ${overlayPositionClass} w-2/3 pointer-events-none ${gradientClass}`} />
                        <div className="absolute inset-x-0 bottom-0 h-1/2 pointer-events-none bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                        <div className={`absolute bottom-8 z-10 max-w-3xl p-6 ${textPositionClass}`}>
                            <p className="text-xs uppercase tracking-[0.4em] text-lime-400 mb-3">{currentSlide.category}</p>
                            <p className="text-sm uppercase tracking-[0.35em] text-white/70 mb-2">PRESENTS</p>
                            <h1 className="max-w-7xl text-7xl font-medium tracking-tight text-pretty md:text-[4rem]/14 !text-shadow-lg !md:text-shadow-lg/30">
                                {currentSlide.title}
                            </h1>
                            <div className="mt-5 flex flex-wrap gap-3">
                                {currentSlide.tags.map((tag, index) => (
                                    <span key={index} className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-base font-semibold uppercase tracking-[0.24em] text-white">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <div className="mt-6 flex flex-wrap gap-4 text-sm md:text-base text-white/80">
                                <span className="rounded-full bg-white/10 px-4 py-2 font-semibold">{currentSlide.date}</span>
                                <span className="rounded-full bg-white/10 px-4 py-2 font-semibold">{currentSlide.time}</span>
                            </div>
                            <div className="mt-6">
                                <Link to={`/evento/${this.state.currentSlide + 1}`} className="rounded-full border border-lime-400 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-lime-400 hover:text-black inline-block">
                                    MÁS INFORMACIÓN
                                </Link>
                            </div>
                        </div>
                        <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
                            {slides.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => this.handleDotClick(index)}
                                    className={`h-3 rounded-full transition-all duration-300 ${
                                        index === this.state.currentSlide ? 'bg-white w-8' : 'bg-gray-500 w-3 hover:bg-lime-400'
                                    }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div> 
            </section>
            </div>
        )
    }


}
export default Slider;