import { useMemo, useState } from 'react';

function VentaManual() {
    const [comprador, setComprador] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('+52 55 0000 0000');
    const [cantidad, setCantidad] = useState(2);
    const [precioUnitario, setPrecioUnitario] = useState(40.5);
    const [metodoPago, setMetodoPago] = useState('Efectivo');
    const [estadoPago, setEstadoPago] = useState('Pagado');
    const [notas, setNotas] = useState('');

    const subtotal = useMemo(() => Number((cantidad * precioUnitario).toFixed(2)), [cantidad, precioUnitario]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Venta registrada', {
            comprador,
            email,
            telefono,
            cantidad,
            precioUnitario,
            metodoPago,
            estadoPago,
            notas,
            subtotal
        });
    };

    return (
        <div className="rounded-3xl border border-[#e5e7eb] bg-white p-6 shadow-sm sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-6">
                <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-[#6b7280]">Evento</p>
                    <h2 className="text-xl font-black text-[#111827]">Noche Eléctrica</h2>
                </div>
                <button type="button" className="ml-auto inline-flex items-center rounded-full border border-[#d1d5db] bg-white px-3 py-2 text-sm font-semibold text-[#4b5563] transition hover:bg-[#f8fafc]">
                    <span className="text-xl leading-none">×</span>
                </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block">
                        <span className="text-xs uppercase tracking-[0.24em] text-[#6b7280]">Nombre del comprador *</span>
                        <input
                            value={comprador}
                            onChange={(e) => setComprador(e.target.value)}
                            type="text"
                            placeholder="Nombre completo"
                            className="mt-2 w-full rounded-2xl border border-[#e5e7eb] bg-[#f8fafc] px-4 py-3 text-sm text-[#111827] focus:outline-none focus:border-[#a259ff]"
                            required
                        />
                    </label>
                    <label className="block">
                        <span className="text-xs uppercase tracking-[0.24em] text-[#6b7280]">Email *</span>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            placeholder="email@ejemplo.com"
                            className="mt-2 w-full rounded-2xl border border-[#e5e7eb] bg-[#f8fafc] px-4 py-3 text-sm text-[#111827] focus:outline-none focus:border-[#a259ff]"
                            required
                        />
                    </label>
                    <label className="block sm:col-span-2">
                        <span className="text-xs uppercase tracking-[0.24em] text-[#6b7280]">Teléfono</span>
                        <input
                            value={telefono}
                            onChange={(e) => setTelefono(e.target.value)}
                            type="tel"
                            className="mt-2 w-full rounded-2xl border border-[#e5e7eb] bg-[#f8fafc] px-4 py-3 text-sm text-[#111827] focus:outline-none focus:border-[#a259ff]"
                        />
                    </label>
                </div>

                <div className="grid gap-4 sm:grid-cols-[auto_1fr_auto] sm:items-center">
                    <span className="text-xs uppercase tracking-[0.24em] text-[#6b7280]">Cantidad</span>
                    <div className="flex items-center justify-between rounded-2xl border border-[#e5e7eb] bg-[#f8fafc] px-4 py-3">
                        <button
                            type="button"
                            onClick={() => setCantidad((c) => Math.max(1, c - 1))}
                            className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-lg font-bold text-[#111827] hover:bg-[#f3f4f6]"
                        >
                            −
                        </button>
                        <span className="text-lg font-black text-[#111827]">{cantidad}</span>
                        <button
                            type="button"
                            onClick={() => setCantidad((c) => c + 1)}
                            className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-lg font-bold text-[#111827] hover:bg-[#f3f4f6]"
                        >
                            +
                        </button>
                    </div>
                    <label className="block">
                        <span className="text-xs uppercase tracking-[0.24em] text-[#6b7280]">Precio unitario (USD)</span>
                        <input
                            type="number"
                            min="0"
                            step="0.1"
                            value={precioUnitario}
                            onChange={(e) => setPrecioUnitario(Number(e.target.value))}
                            className="mt-2 w-full rounded-2xl border border-[#e5e7eb] bg-[#f8fafc] px-4 py-3 text-sm text-[#111827] focus:outline-none focus:border-[#a259ff]"
                        />
                    </label>
                </div>

                <p className="text-sm text-[#16a34a]">Descuento activo (10% off) — precio sugerido: $40.50</p>

                <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block">
                        <span className="text-xs uppercase tracking-[0.24em] text-[#6b7280]">Método de pago</span>
                        <select
                            value={metodoPago}
                            onChange={(e) => setMetodoPago(e.target.value)}
                            className="mt-2 w-full rounded-2xl border border-[#e5e7eb] bg-[#f8fafc] px-4 py-3 text-sm text-[#111827] focus:outline-none focus:border-[#a259ff]"
                        >
                            <option>Efectivo</option>
                            <option>Tarjeta</option>
                            <option>Transferencia</option>
                        </select>
                    </label>
                    <label className="block">
                        <span className="text-xs uppercase tracking-[0.24em] text-[#6b7280]">Estado de pago</span>
                        <select
                            value={estadoPago}
                            onChange={(e) => setEstadoPago(e.target.value)}
                            className="mt-2 w-full rounded-2xl border border-[#e5e7eb] bg-[#f8fafc] px-4 py-3 text-sm text-[#111827] focus:outline-none focus:border-[#a259ff]"
                        >
                            <option>Pagado</option>
                            <option>Pendiente</option>
                            <option>Cancelado</option>
                        </select>
                    </label>
                </div>

                <label className="block">
                    <span className="text-xs uppercase tracking-[0.24em] text-[#6b7280]">Notas internas</span>
                    <textarea
                        value={notas}
                        onChange={(e) => setNotas(e.target.value)}
                        rows={4}
                        placeholder="Notas opcionales..."
                        className="mt-2 w-full rounded-2xl border border-[#e5e7eb] bg-[#f8fafc] px-4 py-3 text-sm text-[#111827] focus:outline-none focus:border-[#a259ff]"
                    />
                </label>

                <div className="rounded-3xl border border-[#e5e7eb] bg-[#f8fafc] p-5">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <p className="text-sm text-[#6b7280]">Subtotal ({cantidad} boletos)</p>
                        <p className="text-sm font-semibold text-[#111827]">${subtotal.toFixed(2)}</p>
                    </div>
                    <div className="mt-4 flex items-end justify-between">
                        <span className="text-sm uppercase tracking-[0.24em] text-[#6b7280]">Total</span>
                        <span className="text-2xl font-black text-[#111827]">${subtotal.toFixed(2)}</span>
                    </div>
                </div>

                <button type="submit" className="w-full rounded-3xl bg-[#e6ff70] px-6 py-4 text-sm font-black uppercase tracking-[0.2em] text-[#08060d] transition hover:bg-[#d9ff52]">
                    Registrar venta • ${subtotal.toFixed(2)}
                </button>
            </form>
        </div>
    );
}

export default VentaManual;
