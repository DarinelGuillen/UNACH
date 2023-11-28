import React from 'react';
import { getItem } from '../../utils/storage';

function PTable2_15() {
    const CP = getItem('currentProyect') || {};

    return (
        <>
            <div className="h-auto w-full flex-col items-center justify-center ">
                <div className="flex-col w-full p-6">
                    <div className='rounded-full bg-white flex rounded-full drop-shadow-lg items-center justify-center'>

                        <h1 className="sm:text-sm text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
                            2.15 Desglose Financiero
                        </h1>
                    </div>
                    {CP.financial_breakdown ? (
                        <>

                            <table className="transition ease-in-out delay-150 hover:-translate-y-10 hover:overflow hover:scale-110 duration-500 mt-1 border-separate border-spacing-2 border border-slate-900 border-b-blue-900 w-full table-auto border-gray-300 bg-white drop-shadow-lg rounded-lg border-gray-300">
                                {/* Thead con Rubros, Tipo de gasto, Monto, Etapa, Justificación */}
                                <thead>
                                    <tr>
                                        <th className="p-4 text-2xl font-semibold">Rubros</th>
                                        <th className="p-4 text-2xl font-semibold">Tipo de gasto</th>
                                        <th className="p-4 text-2xl font-semibold">Monto</th>
                                        <th className="p-4 text-2xl font-semibold">Etapa</th>
                                        <th className="p-4 text-2xl font-semibold">Justificación</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* Condición para verificar si financial_breakdown existe */}

                                    {CP.financial_breakdown.map((item, index) => (
                                        <tr key={index}>
                                            <td className="p-4 grow">{item.Categories}</td>
                                            <td className="p-4 grow">{item.expense_type}</td>
                                            <td className="p-4 grow">{item.amount}</td>
                                            <td className="p-4 grow">{item.Stage}</td>
                                            <td className="p-4 grow">{item.Justification}</td>
                                        </tr>
                                    ))}

                                </tbody>
                            </table>
                        </>
                    ) : (
                        <tr>
                            <td className="p-4 grow sm:text-sm text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">No hay información de desglose financiero disponible.</td>
                        </tr>
                    )}
                </div>
            </div>
        </>
    );
}

export default PTable2_15;
