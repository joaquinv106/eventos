import React from 'react';

function Asistentes() {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-[#e5e7eb] rounded-xl">
                <thead>
                    <tr className="text-left text-xs uppercase text-[#6b7280] border-b border-[#e5e7eb]">
                        <th className="px-5 py-4">ASISTENTE</th>
                        <th className="px-5 py-4">EMAIL</th>
                        <th className="px-5 py-4">TIPO</th>
                        <th className="px-5 py-4">CANT.</th>
                        <th className="px-5 py-4">PRECIO UNIT.</th>
                        <th className="px-5 py-4">TOTAL</th>
                        <th className="px-5 py-4">MÉTODO</th>
                        <th className="px-5 py-4">ESTADO</th>
                        <th className="px-5 py-4">CÓDIGO</th>
                        <th className="px-5 py-4">ACCIONES</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b border-[#f3f4f6] hover:bg-[#f9fafb]">
                        <td className="px-5 py-5 font-semibold text-sm text-[#111827]">gfhgfh</td>
                        <td className="px-5 py-5 text-sm text-[#6b7280]">fghfgh</td>
                        <td className="px-5 py-5 text-sm text-[#6b7280]"><span className="inline-flex items-center px-3 py-1 rounded-full bg-[#f3e8ff] text-[#7c3aed] text-[11px] font-semibold">MANUAL</span></td>
                        <td className="px-5 py-5 text-sm text-[#111827]">2</td>
                        <td className="px-5 py-5 text-sm text-[#111827]">$40.50</td>
                        <td className="px-5 py-5 text-sm font-semibold text-[#111827]">$81.00</td>
                        <td className="px-5 py-5 text-sm text-[#111827]">Efectivo</td>
                        <td className="px-5 py-5 text-sm"><span className="inline-flex items-center px-3 py-1 rounded-full bg-[#d1fae5] text-[#166534] text-[11px] font-semibold">PAGADO</span></td>
                        <td className="px-5 py-5 text-sm text-[#9ca3af]">TKT-6L38TR</td>
                        <td className="px-5 py-5 text-sm text-[#6b7280]">-</td>
                    </tr>
                    <tr className="hover:bg-[#f9fafb]">
                        <td className="px-5 py-5 font-semibold text-sm text-[#111827]">joa</td>
                        <td className="px-5 py-5 text-sm text-[#6b7280]">joa@gmail.com</td>
                        <td className="px-5 py-5 text-sm text-[#6b7280]"><span className="inline-flex items-center px-3 py-1 rounded-full bg-[#f3e8ff] text-[#7c3aed] text-[11px] font-semibold">MANUAL</span></td>
                        <td className="px-5 py-5 text-sm text-[#111827]">2</td>
                        <td className="px-5 py-5 text-sm text-[#111827]">$45.00</td>
                        <td className="px-5 py-5 text-sm font-semibold text-[#111827]">$90.00</td>
                        <td className="px-5 py-5 text-sm text-[#111827]">Efectivo</td>
                        <td className="px-5 py-5 text-sm"><span className="inline-flex items-center px-3 py-1 rounded-full bg-[#fee2e2] text-[#b91c1c] text-[11px] font-semibold">CANCELADO</span></td>
                        <td className="px-5 py-5 text-sm text-[#9ca3af]">TKT-08XZ4T</td>
                        <td className="px-5 py-5 text-sm text-[#6b7280]">-</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Asistentes;
