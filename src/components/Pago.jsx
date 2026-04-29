import { useState } from 'react';

function Pago({ event, initialQuantity = 1, onClose }) {
    const [quantity, setQuantity] = useState(initialQuantity);

    const increment = () => setQuantity(q => Math.min(q + 1, 10));
    const decrement = () => setQuantity(q => Math.max(q - 1, 1));
    const total = (parseFloat(event?.price.replace('€','')) * quantity).toFixed(2);

    return (
        <div className="fixed top-0 right-0 h-full w-full max-w-xs bg-white z-50 shadow-2xl transition-transform duration-500 ease-in-out translate-x-0" style={{boxShadow:'-8px 0 32px 0 rgba(0,0,0,0.10)'}}>
            <div className="flex items-center justify-between p-6 border-b border-[#ededed]">
                <div className="flex items-center gap-2">
                    <svg className="w-6 h-6 text-[#a259ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2a4 4 0 014-4h0a4 4 0 014 4v2" /></svg>
                    <span className="uppercase text-xs font-bold tracking-widest text-[#a259ff]">Reservar</span>
                </div>
                <button onClick={onClose} className="rounded-full p-2 hover:bg-[#ededed] transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </div>
            <div className="p-6 flex flex-col gap-6">
                <div>
                    <h2 className="text-2xl font-black mb-1 !text-black">{event.title.toUpperCase()}</h2>
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
    );
}

export default Pago;