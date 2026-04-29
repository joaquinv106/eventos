import { Component, createRef } from 'react';
import imagen3 from '../img/header/evento2.jpg';
import NavCategorias from './nav_categorias';

class Eventos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0,
            cardWidth: 0,
            visibleCount: 1
        };
        this.carouselRef = createRef();
    }

    componentDidMount() {
        this.updateCarouselMetrics();
        window.addEventListener('resize', this.updateCarouselMetrics);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateCarouselMetrics);
    }

    updateCarouselMetrics = () => {
        const carousel = this.carouselRef.current;
        if (!carousel) return;
        const card = carousel.querySelector('[data-card]');
        if (!card) return;

        const gap = 32; // tailwind gap-8
        const cardWidth = card.getBoundingClientRect().width + gap;
        const containerWidth = carousel.parentElement?.getBoundingClientRect().width || carousel.getBoundingClientRect().width;
        const visibleCount = Math.max(1, Math.floor(containerWidth / cardWidth));

        this.setState(prevState => {
            const maxIndex = Math.max(0, 5 - visibleCount);
            return {
                cardWidth,
                visibleCount,
                currentIndex: Math.min(prevState.currentIndex, maxIndex)
            };
        });
    }

    handlePrev = () => {
        this.setState(prevState => {
            const maxIndex = Math.max(0, 5 - prevState.visibleCount);
            return {
                currentIndex: prevState.currentIndex === 0 ? maxIndex : prevState.currentIndex - 1
            };
        });
    }

    handleNext = () => {
        this.setState(prevState => {
            const maxIndex = Math.max(0, 5 - prevState.visibleCount);
            return {
                currentIndex: prevState.currentIndex >= maxIndex ? 0 : prevState.currentIndex + 1
            };
        });
    }

    renderEventCard(event) {
        return (
            <div key={event.id} data-card className="group overflow-hidden rounded-[32px] shadow-2xl shadow-slate-900/20 transition-all duration-500 hover:shadow-3xl hover:shadow-slate-900/30 flex-shrink-0 w-full sm:w-[260px] md:w-[300px] xl:w-[340px]" style={{ minWidth: '260px' }}>
                <div className="relative overflow-hidden h-[260px] sm:h-[280px] transition-all duration-500">
                    <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent transition-opacity duration-500" />

                    <button className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-lime-400 text-slate-950 shadow-xl shadow-slate-900/30 transition-transform duration-300 hover:scale-110">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                            <path d="M7 7h10v10" />
                            <path d="M7 17 17 7" />
                        </svg>
                    </button>

                    <div className="absolute bottom-6 left-6 right-6 z-10 flex flex-wrap gap-2 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                        {event.tags.map((tag) => (
                            <span
                                key={tag}
                                className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-white shadow-sm backdrop-blur-sm"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="bg-white group-hover:bg-lime-400 px-6 py-8 sm:px-8 transition-colors duration-300">
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.4em] whitespace-nowrap overflow-hidden group-hover:text-black">
                            <span className="text-violet-600 group-hover:text-black">{event.category}</span>
                            <span className="h-2 w-px bg-slate-300 group-hover:bg-black" />
                            <span className="text-slate-500 group-hover:text-black">{event.dateLabel}</span>
                            <span className="ml-auto text-right">
                                <span className="text-slate-950 font-black group-hover:text-black">{event.day}</span>
                                <span className="text-slate-500 ml-1 group-hover:text-black">{event.month}</span>
                            </span>
                        </div>
                        <h2 className="text-4xl font-black uppercase tracking-tight text-black group-hover:text-black" style={{ color: '#000000' }}>
                            {event.title}
                        </h2>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        const events = [
            {
                id: 1,
                image: imagen3,
                category: 'musica',
                dateLabel: '15 may 2026',
                title: 'noche eléctrica',
                day: '15',
                month: 'MAY',
                tags: ['Arca', 'Four Tet', 'Floating Points']
            },
            {
                id: 2,
                image: imagen3,
                category: 'electronica',
                dateLabel: '20 may 2026',
                title: 'ritmo nocturno',
                day: '20',
                month: 'MAY',
                tags: ['Bicep', 'Peggy Gou']
            },
            {
                id: 3,
                image: imagen3,
                category: 'festival',
                dateLabel: '25 may 2026',
                title: 'luz y sonido',
                day: '25',
                month: 'MAY',
                tags: ['Skrillex', 'Flume']
            },
            {
                id: 4,
                image: imagen3,
                category: 'indie',
                dateLabel: '30 may 2026',
                title: 'vibras urbanas',
                day: '30',
                month: 'MAY',
                tags: ['Tame Impala', 'Arctic Monkeys']
            },
            {
                id: 5,
                image: imagen3,
                category: 'house',
                dateLabel: '05 jun 2026',
                title: 'after party',
                day: '05',
                month: 'JUN',
                tags: ['Jamie xx', 'Disclosure']
            }
        ];

        return (
            <section className="max-w-[1200px] mx-auto px-4">
                <NavCategorias />
                <div className="relative flex items-center justify-center gap-6">
                    {/* Flecha izquierda */}
                    <button
                        onClick={this.handlePrev}
                        className=" left-4 top-1/2 z-50 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-lime-400/95 text-black shadow-lg transition-all duration-300 hover:bg-lime-500 sm:left-6"
                    >
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    {/* Carrusel de cards */}
                    <div className="w-full overflow-hidden px-4 md:px-0">
                        <div
                            ref={this.carouselRef}
                            className="flex gap-8 transition-transform duration-500 ease-out"
                            style={{
                                transform: `translateX(-${this.state.currentIndex * this.state.cardWidth}px)`
                            }}
                        >
                            {events.map((event) => this.renderEventCard(event))}
                        </div>
                    </div>

                    {/* Flecha derecha */}
                    <button
                        onClick={this.handleNext}
                        className=" right-4 top-1/2 z-50 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-lime-400/95 text-black shadow-lg transition-all duration-300 hover:bg-lime-500 sm:right-6"
                    >
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </section>
        );
    }
}

export default Eventos