import { useMemo, useState } from 'react';

function Ofertas() {
    const [precio, setPrecio] = useState(45);
    const [etiqueta, setEtiqueta] = useState('PROMO2026');
    const [descuento, setDescuento] = useState(10);
    const [activa, setActiva] = useState(true);

    const precioEfectivo = useMemo(() => {
        const valor = Number(precio) * (1 - Number(descuento) / 100);
        return Number.isNaN(valor) ? 0 : valor;
    }, [precio, descuento]);

    return (
        <div className="space-y-6">
            <div className="rounded-3xl border border-[#e5e7eb] bg-white p-8">
                <div className="flex items-center gap-3 mb-6 text-[#111827]">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#ede9fe] text-[#7c3aed] text-xl font-black">$</span>
                    <div>
                        <p className="text-sm uppercase tracking-[0.24em] text-[#6b7280]">Precio base del boleto</p>
                        <p className="text-lg font-black text-[#111827]">Precio (USD)</p>
                    </div>
                </div>
                <input
                    type="number"
                    min="0"
                    step="1"
                    value={precio}
                    onChange={(e) => setPrecio(e.target.value)}
                    className="w-full rounded-3xl border border-[#e5e7eb] bg-[#f8fafc] px-5 py-4 text-xl font-semibold text-[#111827] focus:outline-none focus:border-[#a259ff]"
                />
            </div>

            <div className="rounded-3xl border border-[#e5e7eb] bg-white p-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-6">
                    <div>
                        <p className="text-xs uppercase tracking-[0.24em] text-[#6b7280]">Oferta / descuento</p>
                        <p className="text-lg font-black text-[#111827]">Activa</p>
                    </div>
                    <button
                        type="button"
                        onClick={() => setActiva((prev) => !prev)}
                        className={`${activa ? 'bg-[#dcfce7] text-[#166534]' : 'bg-[#f8fafc] text-[#6b7280]'} inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition`}
                    >
                        <span className={`h-3.5 w-3.5 rounded-full ${activa ? 'bg-[#16a34a]' : 'bg-[#9ca3af]'}`} />
                        {activa ? 'Activa' : 'Inactiva'}
                    </button>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block">
                        <span className="text-xs uppercase tracking-[0.24em] text-[#6b7280]">Etiqueta (ej. EARLYBIRD)</span>
                        <input
                            type="text"
                            value={etiqueta}
                            onChange={(e) => setEtiqueta(e.target.value)}
                            className="mt-2 w-full rounded-3xl border border-[#e5e7eb] bg-[#f8fafc] px-4 py-3 text-sm text-[#111827] focus:outline-none focus:border-[#a259ff]"
                        />
                    </label>
                    <label className="block">
                        <span className="text-xs uppercase tracking-[0.24em] text-[#6b7280]">Descuento %</span>
                        <input
                            type="number"
                            min="0"
                            max="100"
                            step="1"
                            value={descuento}
                            onChange={(e) => setDescuento(e.target.value)}
                            className="mt-2 w-full rounded-3xl border border-[#e5e7eb] bg-[#f8fafc] px-4 py-3 text-sm text-[#111827] focus:outline-none focus:border-[#a259ff]"
                        />
                    </label>
                </div>

                <div className="mt-8 rounded-3xl border border-[#dcfce7] bg-[#f7fee7] p-6">
                    <p className="text-xs uppercase tracking-[0.24em] text-[#4d7c0f]">Precio efectivo actual</p>
                    <div className="mt-3 flex items-end gap-3">
                        <span className="text-sm text-[#6b7280] line-through">${Number(precio).toFixed(2)}</span>
                        <span className="text-3xl font-black text-[#111827]">${precioEfectivo.toFixed(2)}</span>
                    </div>
                </div>
            </div>

            <button className="w-full rounded-3xl bg-[#111827] px-6 py-4 text-sm font-black text-white transition hover:bg-[#222]">
                Guardar cambios
            </button>
        </div>
    );
}

export default Ofertas;
