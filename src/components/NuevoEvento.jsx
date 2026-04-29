import { useState } from 'react';

function NuevoEvento({ onClose }) {
    const [formData, setFormData] = useState({
        titulo: '',
        descripcion: '',
        fecha: '',
        categoria: '',
        lugar: '',
        direccion: '',
        foto: null,
        banner: null
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleFileUpload = (fieldName) => {
        return (e) => {
            const file = e.target.files?.[0];
            if (file) {
                setFormData(prev => ({
                    ...prev,
                    [fieldName]: file
                }));
            }
        };
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí iría la lógica de crear el evento
        console.log('Evento creado:', formData);
        onClose();
    };

    return (
        <>
            <div className="fixed top-0 right-0 h-full w-full max-w-xl bg-white z-50 shadow-2xl transition-transform duration-500 ease-in-out translate-x-0 overflow-y-auto" style={{boxShadow:'-8px 0 32px 0 rgba(0,0,0,0.10)'}}>
                <div className="flex items-center justify-between p-6 border-b border-[#ededed] sticky top-0 bg-white z-10">
                    <h1 className="text-2xl font-black text-black">NUEVO EVENTO</h1>
                    <button onClick={onClose} className="rounded-full p-2 hover:bg-[#ededed] transition-colors">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-6">
                    {/* Foto y Banner */}
                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <label className="block text-xs font-bold text-[#bdbdbd] mb-3 tracking-widest">FOTO DEL EVENTO</label>
                            <div className="border-2 border-dashed border-[#ededed] rounded-lg p-8 text-center cursor-pointer hover:bg-[#f9f9f9] transition-colors">
                                <svg className="w-12 h-12 mx-auto text-[#bdbdbd] mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                <input 
                                    type="file" 
                                    accept="image/*" 
                                    onChange={handleFileUpload('foto')}
                                    className="hidden"
                                    id="foto-input"
                                />
                                <label htmlFor="foto-input" className="cursor-pointer block text-sm text-[#a259ff] hover:underline">Subir imagen</label>
                                {formData.foto && <span className="text-xs text-[#6b6375] mt-2 block">{formData.foto.name}</span>}
                            </div>
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-[#bdbdbd] mb-3 tracking-widest">BANNER</label>
                            <div className="border-2 border-dashed border-[#ededed] rounded-lg p-8 text-center cursor-pointer hover:bg-[#f9f9f9] transition-colors">
                                <svg className="w-12 h-12 mx-auto text-[#bdbdbd] mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                <input 
                                    type="file" 
                                    accept="image/*" 
                                    onChange={handleFileUpload('banner')}
                                    className="hidden"
                                    id="banner-input"
                                />
                                <label htmlFor="banner-input" className="cursor-pointer block text-sm text-[#a259ff] hover:underline">Subir imagen</label>
                                {formData.banner && <span className="text-xs text-[#6b6375] mt-2 block">{formData.banner.name}</span>}
                            </div>
                        </div>
                    </div>

                    <hr className="border-[#ededed]" />

                    {/* Título */}
                    <div>
                        <label className="block text-xs font-bold text-[#bdbdbd] mb-2 tracking-widest">TÍTULO *</label>
                        <input 
                            type="text" 
                            name="titulo"
                            placeholder="Nombre del evento"
                            value={formData.titulo}
                            onChange={handleInputChange}
                            className="w-full border border-[#ededed] rounded px-4 py-3 text-base focus:outline-none focus:border-[#a259ff] bg-white"
                            required
                        />
                    </div>

                    {/* Descripción */}
                    <div>
                        <label className="block text-xs font-bold text-[#bdbdbd] mb-2 tracking-widest">DESCRIPCIÓN</label>
                        <textarea 
                            name="descripcion"
                            placeholder="Describe el evento..."
                            value={formData.descripcion}
                            onChange={handleInputChange}
                            rows="4"
                            className="w-full border border-[#ededed] rounded px-4 py-3 text-base focus:outline-none focus:border-[#a259ff] bg-white resize-none"
                        />
                    </div>

                    {/* Fecha y Categoría */}
                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <label className="block text-xs font-bold text-[#bdbdbd] mb-2 tracking-widest">FECHA Y HORA *</label>
                            <input 
                                type="datetime-local"
                                name="fecha"
                                value={formData.fecha}
                                onChange={handleInputChange}
                                className="w-full border border-[#ededed] rounded px-4 py-3 text-base focus:outline-none focus:border-[#a259ff] bg-white"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-[#bdbdbd] mb-2 tracking-widest">CATEGORÍA *</label>
                            <select 
                                name="categoria"
                                value={formData.categoria}
                                onChange={handleInputChange}
                                className="w-full border border-[#ededed] rounded px-4 py-3 text-base focus:outline-none focus:border-[#a259ff] bg-white"
                                required
                            >
                                <option value="">Seleccionar</option>
                                <option value="musica">Música</option>
                                <option value="electronica">Electrónica</option>
                                <option value="festival">Festival</option>
                                <option value="indie">Indie</option>
                                <option value="house">House</option>
                            </select>
                        </div>
                    </div>

                    {/* Lugar */}
                    <div>
                        <label className="block text-xs font-bold text-[#bdbdbd] mb-2 tracking-widest">LUGAR *</label>
                        <input 
                            type="text"
                            name="lugar"
                            placeholder="Nombre del venue"
                            value={formData.lugar}
                            onChange={handleInputChange}
                            className="w-full border border-[#ededed] rounded px-4 py-3 text-base focus:outline-none focus:border-[#a259ff] bg-white"
                            required
                        />
                    </div>

                    {/* Dirección */}
                    <div>
                        <label className="block text-xs font-bold text-[#bdbdbd] mb-2 tracking-widest">DIRECCIÓN</label>
                        <input 
                            type="text"
                            name="direccion"
                            placeholder="Calle y número, ciudad"
                            value={formData.direccion}
                            onChange={handleInputChange}
                            className="w-full border border-[#ededed] rounded px-4 py-3 text-base focus:outline-none focus:border-[#a259ff] bg-white"
                        />
                    </div>

                    {/* Botón de submit */}
                    <div className="sticky bottom-0 bg-white p-6 border-t border-[#ededed] -mx-6">
                        <button 
                            type="submit"
                            className="w-full py-4 bg-lime-400 text-black font-bold uppercase tracking-wider rounded-lg hover:bg-lime-300 transition-colors text-base shadow-lg"
                        >
                            CREAR EVENTO
                        </button>
                    </div>
                </form>
            </div>
            
            {/* Fondo oscuro al abrir sidebar */}
            <div onClick={onClose} className="fixed inset-0 bg-black/30 z-40 transition-opacity" />
        </>
    );
}

export default NuevoEvento;
