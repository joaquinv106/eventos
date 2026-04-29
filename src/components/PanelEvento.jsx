import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { usePageAnimation } from '../hooks/usePageAnimation';
import NuevoEvento from './NuevoEvento';

const eventosData = [
    {
        id: 1,
        title: 'Noche Eléctrica',
        date: '15 may 26',
        status: 'UPCOMING',
        boletos: { vendidos: 1452, total: 2000 },
        precioUnitario: 45,
        tarifaPub: 50,
        comision: 6534.00,
        totalPagar: 6584.00
    },
    {
        id: 2,
        title: 'Cuerpos en Tránsito',
        date: '1 jun 26',
        status: 'UPCOMING',
        boletos: { vendidos: 140, total: 150 },
        precioUnitario: 30,
        tarifaPub: 50,
        comision: 420.00,
        totalPagar: 470.00
    },
    {
        id: 3,
        title: 'Sabores Nocturnos',
        date: '28 may 26',
        status: 'UPCOMING',
        boletos: { vendidos: 280, total: 300 },
        precioUnitario: 65,
        tarifaPub: 50,
        comision: 1820.00,
        totalPagar: 1870.00
    },
    {
        id: 4,
        title: 'Frecuencias Ancestrales',
        date: '10 jun 26',
        status: 'LIVE',
        boletos: { vendidos: 2100, total: 5000 },
        precioUnitario: 35,
        tarifaPub: 50,
        comision: 7350.00,
        totalPagar: 7400.00
    },
    {
        id: 5,
        title: 'Código Abierto: IA y Creati...',
        date: '15 jun 26',
        status: 'SOLD_OUT',
        boletos: { vendidos: 800, total: 800 },
        precioUnitario: 20,
        tarifaPub: 50,
        comision: 1600.00,
        totalPagar: 1650.00
    }
];

function PanelEvento() {
    const containerRef = usePageAnimation();
    const [hoveredRow, setHoveredRow] = useState(null);
    const [showNuevoEvento, setShowNuevoEvento] = useState(false);

    const totalEventos = eventosData.length;
    const totalBoletos = eventosData.reduce((sum, e) => sum + e.boletos.vendidos, 0);
    const totalIngresos = eventosData.reduce((sum, e) => sum + (e.precioUnitario * e.boletos.vendidos), 0);
    const totalComision = eventosData.reduce((sum, e) => sum + e.comision, 0);

    const getStatusColor = (status) => {
        switch(status) {
            case 'UPCOMING': return 'bg-purple-100 text-purple-800';
            case 'LIVE': return 'bg-green-100 text-green-800';
            case 'SOLD_OUT': return 'bg-red-100 text-red-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    const getStatusLabel = (status) => {
        switch(status) {
            case 'UPCOMING': return 'UPCOMING';
            case 'LIVE': return 'LIVE';
            case 'SOLD_OUT': return 'SOLD OUT';
            default: return status;
        }
    };

    return (
        <div ref={containerRef} style={{ opacity: 0, transform: 'translateY(40px)' }} className="min-h-screen bg-gradient-to-b from-white to-[#f9f9f9] text-[#08060d]">
            {/* Header */}
            <div className="bg-white border-b border-[#ededed] px-8 py-6">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Link to="/" className="text-gray-500 hover:text-gray-700 flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            PULSO
                        </Link>
                        <span className="text-gray-300">/</span>
                        <h1 className="text-2xl font-black">PANEL ORGANIZADOR</h1>
                    </div>
                    <button 
                        onClick={() => setShowNuevoEvento(true)}
                        className="px-6 py-3 bg-black text-white font-bold text-sm rounded-lg hover:bg-gray-800 transition-colors flex items-center gap-2"
                    >
                        <span>+</span> NUEVO EVENTO
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-8 py-8">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-lg border border-[#ededed]">
                        <span className="block text-xs font-bold text-[#bdbdbd] mb-3 tracking-widest">EVENTOS</span>
                        <span className="text-4xl font-black text-black">{totalEventos}</span>
                    </div>
                    <div className="bg-white p-6 rounded-lg border border-[#ededed]">
                        <span className="block text-xs font-bold text-[#bdbdbd] mb-3 tracking-widest">BOLETOS VENDIDOS</span>
                        <span className="text-4xl font-black text-black">{totalBoletos.toLocaleString()}</span>
                    </div>
                    <div className="bg-white p-6 rounded-lg border border-[#ededed]">
                        <span className="block text-xs font-bold text-[#bdbdbd] mb-3 tracking-widest">INGRESOS BRUTOS</span>
                        <span className="text-4xl font-black text-black">${(totalIngresos / 1000).toFixed(0)}k</span>
                    </div>
                    <div className="bg-white p-6 rounded-lg border border-[#ededed]">
                        <span className="block text-xs font-bold text-[#bdbdbd] mb-3 tracking-widest">COMISIÓN TOTAL</span>
                        <span className="text-4xl font-black text-black">${(totalComision / 1000).toFixed(0)}k</span>
                    </div>
                </div>

                {/* Info Box */}
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-8 flex items-center gap-4">
                    <svg className="w-6 h-6 text-purple-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                        <span className="font-bold text-purple-900">Tarifa fija: $50 USD por evento publicado</span>
                        <span className="text-purple-800 ml-4">Comisión: 10% por boleto vendido</span>
                    </div>
                </div>

                {/* Table */}
                <div className="bg-white rounded-lg border border-[#ededed] overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-[#f9f9f9] border-b border-[#ededed]">
                                <tr>
                                    <th className="px-6 py-4 text-left text-xs font-bold text-[#bdbdbd] tracking-widest">EVENTO</th>
                                    <th className="px-6 py-4 text-left text-xs font-bold text-[#bdbdbd] tracking-widest">FECHA</th>
                                    <th className="px-6 py-4 text-left text-xs font-bold text-[#bdbdbd] tracking-widest">ESTADO</th>
                                    <th className="px-6 py-4 text-left text-xs font-bold text-[#bdbdbd] tracking-widest">BOLETOS</th>
                                    <th className="px-6 py-4 text-left text-xs font-bold text-[#bdbdbd] tracking-widest">PRECIO/BOLETO</th>
                                    <th className="px-6 py-4 text-left text-xs font-bold text-[#bdbdbd] tracking-widest">TARIFA PUB.</th>
                                    <th className="px-6 py-4 text-left text-xs font-bold text-[#bdbdbd] tracking-widest">COMISIÓN</th>
                                    <th className="px-6 py-4 text-left text-xs font-bold text-[#bdbdbd] tracking-widest">TOTAL A PAGAR</th>
                                    <th className="px-6 py-4 text-left text-xs font-bold text-[#bdbdbd] tracking-widest">ACCIONES</th>
                                </tr>
                            </thead>
                            <tbody>
                                {eventosData.map((evento) => (
                                    <tr 
                                        key={evento.id}
                                        onMouseEnter={() => setHoveredRow(evento.id)}
                                        onMouseLeave={() => setHoveredRow(null)}
                                        className="border-b border-[#ededed] hover:bg-[#f9f9f9] transition-colors"
                                    >
                                        <td className="px-6 py-3 font-semibold text-xs text-[#08060d]">{evento.title}</td>
                                        <td className="px-6 py-3 text-xs text-[#6b6375]">{evento.date}</td>
                                        <td className="px-6 py-3">
                                            <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(evento.status)}`}>
                                                {getStatusLabel(evento.status)}
                                            </span>
                                        </td>
                                        <td className="px-6 py-3 text-xs text-[#08060d]">{evento.boletos.vendidos} / {evento.boletos.total}</td>
                                        <td className="px-6 py-3 text-xs text-[#08060d]">${evento.precioUnitario}</td>
                                        <td className="px-6 py-3 text-xs text-[#08060d]">${evento.tarifaPub}</td>
                                        <td className="px-6 py-3 text-xs font-bold text-[#a259ff]">${evento.comision.toFixed(2)}</td>
                                        <td className="px-6 py-3 text-xs font-bold text-red-600">${evento.totalPagar.toFixed(2)}</td>
                                        <td className="px-6 py-3">
                                            <div className={`flex items-center gap-2 transition-opacity duration-200 ${hoveredRow === evento.id ? 'opacity-100' : 'opacity-0'}`}>
                                                <button className="p-2 rounded-lg hover:bg-purple-100 transition-colors group" title="Gestionar">
                                                    <svg className="w-5 h-5 text-[#a259ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                                                    </svg>
                                                </button>
                                                <button className="p-2 rounded-lg hover:bg-lime-100 transition-colors" title="Pagar">
                                                    <svg className="w-5 h-5 text-lime-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                </button>
                                                <button className="p-2 rounded-lg hover:bg-red-100 transition-colors" title="Eliminar">
                                                    <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Modal de nuevo evento */}
            {showNuevoEvento && <NuevoEvento onClose={() => setShowNuevoEvento(false)} />}
        </div>
    );
}

export default PanelEvento;
