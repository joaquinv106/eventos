import { Component, useEffect, useRef, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import imagen3 from '../img/header/evento2.jpg';

const eventosData = [
    {
        id: 1,
        image: imagen3,
        category: 'musica',
        dateLabel: '15 may 2026',
        title: 'noche eléctrica',
        day: '15',
        month: 'MAY',
        tags: ['Arca', 'Four Tet', 'Floating Points'],
        description: 'Una noche única con los artistas más innovadores de la escena electrónica internacional. Disfruta de una experiencia inmersiva con visuales de vanguardia y sonido de alta fidelidad.',
        location: 'Club Central',
        price: '45€',
        hour: '22:00 - 03:00'
    },
    {
        id: 2,
        image: imagen3,
        category: 'electronica',
        dateLabel: '20 may 2026',
        title: 'ritmo nocturno',
        day: '20',
        month: 'MAY',
        tags: ['Bicep', 'Peggy Gou'],
        description: 'Sumérgete en el ritmo con una selección de los mejores DJs internacionales. Una experiencia nocturna que combina house, techno y sonidos experimentales.',
        location: 'Sala Underground',
        price: '35€',
        hour: '21:00 - 02:00'
    },
    {
        id: 3,
        image: imagen3,
        category: 'festival',
        dateLabel: '25 may 2026',
        title: 'luz y sonido',
        day: '25',
        month: 'MAY',
        tags: ['Skrillex', 'Flume'],
        description: 'Un festival que combina música electrónica con instalaciones de luz y arte visual. Una experiencia multisensorial que no puedes perderte.',
        location: 'Parque de la Música',
        price: '65€',
        hour: '19:00 - 01:00'
    },
    {
        id: 4,
        image: imagen3,
        category: 'indie',
        dateLabel: '30 may 2026',
        title: 'vibras urbanas',
        day: '30',
        month: 'MAY',
        tags: ['Tame Impala', 'Arctic Monkeys'],
        description: 'Una noche de música indie con las bandas más representativas del género. Vibras urbanas en un espacio exclusivo.',
        location: 'Teatro Indie',
        price: '55€',
        hour: '20:00 - 00:00'
    },
    {
        id: 5,
        image: imagen3,
        category: 'house',
        dateLabel: '05 jun 2026',
        title: 'after party',
        day: '05',
        month: 'JUN',
        tags: ['Jamie xx', 'Disclosure'],
        description: 'La after party definitiva del verano. Música house con los mejores DJs en un ambiente exclusivo.',
        location: 'Rooftop Club',
        price: '40€',
        hour: '23:00 - 05:00'
    }
];

function EventDetalle() {
    const { id } = useParams();
    const eventId = parseInt(id);
    const event = eventosData.find(e => e.id === eventId);
    const containerRef = useRef(null);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.style.opacity = 0;
            containerRef.current.style.transform = 'translateY(40px)';
            setTimeout(() => {
                containerRef.current.style.transition = 'opacity 0.7s cubic-bezier(.4,0,.2,1), transform 0.7s cubic-bezier(.4,0,.2,1)';
                containerRef.current.style.opacity = 1;
                containerRef.current.style.transform = 'translateY(0)';
            }, 50);
        }
    }, [id]);

    const openSidebar = () => setSidebarOpen(true);
    const closeSidebar = () => setSidebarOpen(false);
    const increment = () => setQuantity(q => Math.min(q + 1, 10));
    const decrement = () => setQuantity(q => Math.max(q - 1, 1));
    const total = (parseFloat(event?.price.replace('€','')) * quantity).toFixed(2);

    if (!event) {
        return (
            <div className="min-h-screen bg-black text-white flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Evento no encontrado</h1>
                    <Link to="/" className="text-lime-400 hover:underline">Volver al inicio</Link>
                </div>
            </div>
        );
    }

    return (
        <>
        <div ref={containerRef} style={{ opacity: 0, transform: 'translateY(40px)' }} className="min-h-screen bg-white text-[#08060d] flex flex-col md:flex-row">
            {/* Imagen principal */}
            <div className="w-full md:w-1/2 h-[340px] md:h-auto relative flex-shrink-0">
                <img src={event.image} alt={event.title} className="w-full h-full object-cover rounded-none md:rounded-l-3xl" />
            </div>
            {/* Panel derecho */}
            <div className="w-full md:w-1/2 flex flex-col justify-between p-8 md:p-14">
                <div>
                    <span className="uppercase text-xs font-bold tracking-widest text-[#a259ff] mb-2 block">{event.category}</span>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight !text-black">{event.title}</h1>
                    <div className="flex items-center gap-4 text-base mb-4 text-[#6b6375]">
                        <svg className="w-5 h-5 text-[#a259ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                        <span>viernes {event.day} de {event.month.toLowerCase()}, 2026</span>
                        <span className="ml-2">{event.hour} hrs</span>
                    </div>
                    <div className="flex items-center gap-4 text-base mb-4 text-[#6b6375]">
                        <svg className="w-5 h-5 text-[#a259ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 12.414a2 2 0 10-2.828 0l-4.243 4.243M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                        <span>Nave Industrial 47</span>
                        <span className="ml-2 text-xs text-[#bdbdbd]">Calle Industrial 47, Zona Centro</span>
                    </div>
                    <div className="flex items-center gap-4 text-base mb-6 text-[#6b6375]">
                        <svg className="w-5 h-5 text-[#a259ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87M17 8V7a5 5 0 00-10 0v1a5 5 0 0010 0z" /></svg>
                        <span className="font-bold">550 lugares disponibles</span>
                        <div className="flex-1 h-2 bg-[#ededed] rounded-full overflow-hidden ml-2">
                            <div className="h-full bg-[#a259ff]" style={{ width: '70%' }}></div>
                        </div>
                    </div>
                    <div className="mb-6">
                        <span className="block text-xs font-bold text-[#bdbdbd] mb-2 tracking-widest">LINE-UP</span>
                        <div className="flex flex-wrap gap-2">
                            {event.tags.map((tag, idx) => (
                                <span key={idx} className="px-3 py-1 bg-white border border-[#ededed] text-[#08060d] rounded-lg text-xs font-semibold uppercase tracking-wider">{tag}</span>
                            ))}
                        </div>
                    </div>
                    <div className="mb-6">
                        <span className="block text-xs font-bold text-[#bdbdbd] mb-2 tracking-widest">ACERCA DEL EVENTO</span>
                        <p className="text-base text-[#6b6375]">{event.description}</p>
                    </div>
                </div>
                <div className="flex items-end justify-between mt-8">
                    <div>
                        <span className="block text-xs text-[#bdbdbd] mb-1">DESDE</span>
                        <span className="text-3xl font-black text-[#08060d]">${event.price.replace('€','')}</span>
                        <span className="text-xs text-[#bdbdbd] ml-1">USD</span>
                    </div>
                    <button onClick={openSidebar} className="px-10 py-4 bg-lime-400 text-black font-bold uppercase tracking-wider rounded-lg hover:bg-lime-300 transition-colors text-base shadow-lg">OBTENER TICKETS <span aria-hidden>↗</span></button>
                </div>
            </div>
        </div>
        {/* Sidebar de tickets */}
        <div className={`fixed top-0 right-0 h-full w-full max-w-xs bg-white z-50 shadow-2xl transition-transform duration-500 ease-in-out ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'}`} style={{boxShadow:'-8px 0 32px 0 rgba(0,0,0,0.10)'}}>
            <div className="flex items-center justify-between p-6 border-b border-[#ededed]">
                <div className="flex items-center gap-2">
                    <svg className="w-6 h-6 text-[#a259ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2a4 4 0 014-4h0a4 4 0 014 4v2" /></svg>
                    <span className="uppercase text-xs font-bold tracking-widest text-[#a259ff]">Reservar</span>
                </div>
                <button onClick={closeSidebar} className="rounded-full p-2 hover:bg-[#ededed] transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </div>
            <div className="p-6 flex flex-col gap-6">
                <div>
                    <h2 className="text-2xl font-black mb-1">{event.title.toUpperCase()}</h2>
                    <div className="text-sm text-[#6b6375] mb-1">viernes {event.day} de {event.month.toLowerCase()}, 2026</div>
                    <div className="text-sm text-[#6b6375]">{event.location}</div>
                </div>
                <hr className="border-[#ededed]" />
                <div>
                    <span className="block text-xs font-bold text-[#bdbdbd] mb-2 tracking-widest">CANTIDAD</span>
                    <div className="flex items-center gap-2 mb-2">
                        <button onClick={decrement} className="w-10 h-10 border border-[#ededed] rounded bg-white text-2xl font-bold flex items-center justify-center hover:bg-[#f7f7f7]">-</button>
                        <span className="text-2xl font-black w-8 text-center">{quantity}</span>
                        <button onClick={increment} className="w-10 h-10 border border-[#ededed] rounded bg-white text-2xl font-bold flex items-center justify-center hover:bg-[#f7f7f7]">+</button>
                    </div>
                </div>
                <hr className="border-[#ededed]" />
                <div className="flex flex-col gap-2 text-base">
                    <div className="flex justify-between"><span>Precio unitario</span><span>${parseFloat(event.price.replace('€','')).toFixed(2)}</span></div>
                    <div className="flex justify-between"><span>Cantidad</span><span>×{quantity}</span></div>
                </div>
                <hr className="border-[#ededed]" />
                <div className="flex justify-between items-center text-lg font-black"><span>TOTAL</span><span>${total}</span></div>
            </div>
            <div className="p-6 border-t border-[#ededed]">
                <button className="w-full py-4 bg-lime-400 text-black font-bold uppercase tracking-wider rounded-lg hover:bg-lime-300 transition-colors text-base shadow-lg">PAGAR ${total}</button>
            </div>
        </div>
        {/* Fondo oscuro al abrir sidebar */}
        {sidebarOpen && <div onClick={closeSidebar} className="fixed inset-0 bg-black/30 z-40 transition-opacity" />}
        </>
    );
}

export default EventDetalle;