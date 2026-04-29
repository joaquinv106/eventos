import { useState } from 'react';

function EditarEvento() {
    const [formData, setFormData] = useState({
        titulo: 'Noche Eléctrica',
        descripcion: 'Una experiencia inmersiva de música electrónica en el corazón industrial de la ciudad. Tres escenarios, visuales de vanguardia y artistas internacionales se unen para crear una noche irrepetible donde el sonido y la arquitectura se fusionan.',
        fecha: '2026-05-15T22:00',
        categoria: 'Musica',
        lugar: 'Nave Industrial 47',
        direccion: 'Calle Industrial 47, Zona Centro',
        precioBase: 45,
        moneda: 'USD',
        capacidad: 2000,
        lineup: 'Arca, Four Tet, Floating Points, Nicola Cruz',
        estado: 'Proximo',
        destacado: 'Si'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Guardando evento:', formData);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-[1.8fr_1fr]">
                <div className="rounded-3xl border border-dashed border-[#d6d3d1] bg-[#f8fafc] p-4 relative overflow-hidden">
                    <div className="absolute inset-0 bg-cover bg-center opacity-100" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1529612700005-86d11f5daed4?auto=format&fit=crop&w=1200&q=80)' }} />
                    <div className="relative h-48 rounded-3xl border border-[#d6d3d1] bg-black/5 flex items-center justify-center text-center text-white">
                        <div>
                            <p className="text-sm uppercase tracking-[0.24em] text-[#f8fafc]">Foto del evento</p>
                            <button type="button" className="mt-4 inline-flex items-center rounded-full border border-white/70 bg-black/50 px-4 py-2 text-sm font-semibold transition hover:bg-black/70">
                                Cambiar
                            </button>
                        </div>
                    </div>
                </div>

                <div className="rounded-3xl border border-dashed border-[#d6d3d1] bg-[#f8fafc] p-6 flex flex-col items-center justify-center text-center text-[#6b7280]">
                    <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-3xl border border-[#d6d3d1] bg-white text-xl text-[#6b7280]">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12v6m0 0v-6m0 0l-3 3m3-3l3 3M16 6l-4-4-4 4" />
                        </svg>
                    </div>
                    <p className="text-sm font-black text-[#111827]">BANNER</p>
                    <p className="mt-2 text-sm text-[#6b7280]">Subir imagen</p>
                </div>
            </div>

            <div className="rounded-3xl border border-[#e5e7eb] bg-white p-8 space-y-6">
                <div className="grid gap-6 lg:grid-cols-2">
                    <label className="block">
                        <span className="text-xs uppercase tracking-[0.24em] text-[#6b7280]">Título *</span>
                        <input
                            name="titulo"
                            type="text"
                            value={formData.titulo}
                            onChange={handleChange}
                            className="mt-2 w-full rounded-2xl border border-[#e5e7eb] bg-[#f8fafc] px-4 py-3 text-sm text-[#111827] focus:outline-none focus:border-[#a259ff]"
                        />
                    </label>

                    <label className="block">
                        <span className="text-xs uppercase tracking-[0.24em] text-[#6b7280]">Categoría *</span>
                        <select
                            name="categoria"
                            value={formData.categoria}
                            onChange={handleChange}
                            className="mt-2 w-full rounded-2xl border border-[#e5e7eb] bg-[#f8fafc] px-4 py-3 text-sm text-[#111827] focus:outline-none focus:border-[#a259ff]"
                        >
                            <option>Musica</option>
                            <option>Arte</option>
                            <option>Conferencia</option>
                            <option>Deporte</option>
                        </select>
                    </label>
                </div>

                <label className="block">
                    <span className="text-xs uppercase tracking-[0.24em] text-[#6b7280]">Descripción</span>
                    <textarea
                        name="descripcion"
                        value={formData.descripcion}
                        onChange={handleChange}
                        rows={4}
                        className="mt-2 w-full rounded-2xl border border-[#e5e7eb] bg-[#f8fafc] px-4 py-3 text-sm text-[#111827] focus:outline-none focus:border-[#a259ff]"
                    />
                </label>

                <div className="grid gap-6 lg:grid-cols-3">
                    <label className="block">
                        <span className="text-xs uppercase tracking-[0.24em] text-[#6b7280]">Fecha y hora</span>
                        <input
                            name="fecha"
                            type="datetime-local"
                            value={formData.fecha}
                            onChange={handleChange}
                            className="mt-2 w-full rounded-2xl border border-[#e5e7eb] bg-[#f8fafc] px-4 py-3 text-sm text-[#111827] focus:outline-none focus:border-[#a259ff]"
                        />
                    </label>
                    <label className="block">
                        <span className="text-xs uppercase tracking-[0.24em] text-[#6b7280]">Lugar *</span>
                        <input
                            name="lugar"
                            type="text"
                            value={formData.lugar}
                            onChange={handleChange}
                            className="mt-2 w-full rounded-2xl border border-[#e5e7eb] bg-[#f8fafc] px-4 py-3 text-sm text-[#111827] focus:outline-none focus:border-[#a259ff]"
                        />
                    </label>
                    <label className="block">
                        <span className="text-xs uppercase tracking-[0.24em] text-[#6b7280]">Dirección</span>
                        <input
                            name="direccion"
                            type="text"
                            value={formData.direccion}
                            onChange={handleChange}
                            className="mt-2 w-full rounded-2xl border border-[#e5e7eb] bg-[#f8fafc] px-4 py-3 text-sm text-[#111827] focus:outline-none focus:border-[#a259ff]"
                        />
                    </label>
                </div>

                <div className="grid gap-6 lg:grid-cols-3">
                    <label className="block">
                        <span className="text-xs uppercase tracking-[0.24em] text-[#6b7280]">Precio base</span>
                        <input
                            name="precioBase"
                            type="number"
                            min="0"
                            value={formData.precioBase}
                            onChange={handleChange}
                            className="mt-2 w-full rounded-2xl border border-[#e5e7eb] bg-[#f8fafc] px-4 py-3 text-sm text-[#111827] focus:outline-none focus:border-[#a259ff]"
                        />
                    </label>
                    <label className="block">
                        <span className="text-xs uppercase tracking-[0.24em] text-[#6b7280]">Moneda</span>
                        <select
                            name="moneda"
                            value={formData.moneda}
                            onChange={handleChange}
                            className="mt-2 w-full rounded-2xl border border-[#e5e7eb] bg-[#f8fafc] px-4 py-3 text-sm text-[#111827] focus:outline-none focus:border-[#a259ff]"
                        >
                            <option>USD</option>
                            <option>EUR</option>
                            <option>MXN</option>
                        </select>
                    </label>
                    <label className="block">
                        <span className="text-xs uppercase tracking-[0.24em] text-[#6b7280]">Capacidad</span>
                        <input
                            name="capacidad"
                            type="number"
                            min="0"
                            value={formData.capacidad}
                            onChange={handleChange}
                            className="mt-2 w-full rounded-2xl border border-[#e5e7eb] bg-[#f8fafc] px-4 py-3 text-sm text-[#111827] focus:outline-none focus:border-[#a259ff]"
                        />
                    </label>
                </div>

                <label className="block">
                    <span className="text-xs uppercase tracking-[0.24em] text-[#6b7280]">Line-up (separado por comas)</span>
                    <input
                        name="lineup"
                        type="text"
                        value={formData.lineup}
                        onChange={handleChange}
                        className="mt-2 w-full rounded-2xl border border-[#e5e7eb] bg-[#f8fafc] px-4 py-3 text-sm text-[#111827] focus:outline-none focus:border-[#a259ff]"
                    />
                </label>

                <div className="grid gap-6 lg:grid-cols-2">
                    <label className="block">
                        <span className="text-xs uppercase tracking-[0.24em] text-[#6b7280]">Estado</span>
                        <select
                            name="estado"
                            value={formData.estado}
                            onChange={handleChange}
                            className="mt-2 w-full rounded-2xl border border-[#e5e7eb] bg-[#f8fafc] px-4 py-3 text-sm text-[#111827] focus:outline-none focus:border-[#a259ff]"
                        >
                            <option>Proximo</option>
                            <option>En curso</option>
                            <option>Finalizado</option>
                        </select>
                    </label>
                    <label className="block">
                        <span className="text-xs uppercase tracking-[0.24em] text-[#6b7280]">Destacado</span>
                        <select
                            name="destacado"
                            value={formData.destacado}
                            onChange={handleChange}
                            className="mt-2 w-full rounded-2xl border border-[#e5e7eb] bg-[#f8fafc] px-4 py-3 text-sm text-[#111827] focus:outline-none focus:border-[#a259ff]"
                        >
                            <option>Si</option>
                            <option>No</option>
                        </select>
                    </label>
                </div>

                <button
                    type="submit"
                    className="w-full rounded-3xl bg-[#d9ff00] px-6 py-4 text-sm font-black uppercase tracking-[0.2em] text-[#08060d] transition hover:bg-[#c4e600]"
                >
                    Guardar cambios
                </button>
            </div>
        </form>
    );
}

export default EditarEvento;
