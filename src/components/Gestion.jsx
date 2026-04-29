import { Component } from 'react';
import Asistentes from './Asistentes';
import Ofertas from './Ofertas';
import EditarEvento from './editarEvento';
import VentaManual from './VentaManual';

const tabs = [
    'ASISTENTES & BOLETOS',
    'PRECIOS & OFERTAS',
    'EDITAR EVENTO',
    'VENTA MANUAL'
];

class Gestion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 0
        };
    }

    setTab = (index) => {
        this.setState({ activeTab: index });
    };

    renderTabContent() {
        const { activeTab } = this.state;

        if (activeTab === 0) {
            return <Asistentes />;
        }

        if (activeTab === 1) {
            return <Ofertas />;
        }

        if (activeTab === 2) {
            return <EditarEvento />;
        }

        return <VentaManual />;
    }

    render() {
        return (
            <div className="min-h-screen bg-[#f8fafc] px-6 py-6 md:px-10">
                <div className="mx-auto flex flex-col gap-6 max-w-7xl">
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <div className="space-y-2">
                            <p className="text-sm text-[#6b7280] uppercase tracking-[0.24em]">Panel</p>
                            <h1 className="text-3xl font-black text-[#111827]">Noche Eléctrica</h1>
                        </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                        <div className="rounded-3xl border border-[#e5e7eb] bg-white p-6">
                            <p className="text-xs uppercase tracking-[0.32em] text-[#9ca3af]">Boletos Pagados</p>
                            <p className="mt-4 text-3xl font-black text-[#111827]">2</p>
                        </div>
                        <div className="rounded-3xl border border-[#e5e7eb] bg-white p-6">
                            <p className="text-xs uppercase tracking-[0.32em] text-[#9ca3af]">Ingresos</p>
                            <p className="mt-4 text-3xl font-black text-[#111827]">$81.00</p>
                        </div>
                        <div className="rounded-3xl border border-[#e5e7eb] bg-white p-6">
                            <p className="text-xs uppercase tracking-[0.32em] text-[#9ca3af]">Total Ventas</p>
                            <p className="mt-4 text-3xl font-black text-[#111827]">2</p>
                        </div>
                        <div className="rounded-3xl border border-[#e5e7eb] bg-white p-6">
                            <p className="text-xs uppercase tracking-[0.32em] text-[#9ca3af]">Precio Actual</p>
                            <p className="mt-4 text-3xl font-black text-[#111827]">$40.50</p>
                        </div>
                    </div>

                    <div className="rounded-3xl border border-[#e5e7eb] bg-white p-6">
                        <div className="border-b border-[#e5e7eb] pb-4 mb-6">
                            <nav className="flex flex-wrap gap-3">
                                {tabs.map((tab, index) => (
                                    <button
                                        key={tab}
                                        onClick={() => this.setTab(index)}
                                        className={`rounded-full px-4 py-2 text-sm font-semibold transition ${this.state.activeTab === index ? 'bg-[#7c3aed] text-white shadow-lg shadow-[#7c3aed]/10' : 'text-[#6b7280] hover:text-[#111827] hover:bg-[#f8fafc]'}`}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </nav>
                        </div>
                        <div className="mx-auto w-full max-w-6xl">
                            {this.renderTabContent()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Gestion;