import React from 'react';
import { getItem } from '../../utils/storage';

function PTable2_16() {
    const CP = getItem('currentProyect') || {};

    return (
        <>
            <div className="h-auto w-full flex-col items-center justify-center ">
                <div className="flex-col w-full p-6 transition ease-in-out delay-150 hover:-translate-y-10 hover:overflow hover:scale-110 duration-500 mt-1">
                    <div className='rounded-full w-full bg-white flex rounded-full drop-shadow-lg items-center justify-center'>

                        <h1 className="sm:text-sm text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
                        2.16 Productos de la investigación comprometidos
                        </h1>
                    </div>
                    <table className=" border-separate border-spacing-2 border border-slate-900 border-b-blue-900 w-full table-auto border-gray-300 bg-white drop-shadow-lg rounded-lg border-gray-300">
                        {/* Thead con Rubros, Tipo de gasto, Monto, Etapa, Justificación */}
                        <thead>
                            <tr>
                                <th className="p-4 text-2xl font-semibold">RuTipo de productobros</th>
                                <th className="p-4 text-2xl font-semibold">Describa</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Condición para verificar si committed_research_products existe */}
                            {CP.committed_research_products ? (
                                CP.committed_research_products.map((item, index) => (
                                    <tr key={index}>
                                        <td className="p-4 border-r border-gray-300 font-semibold">{item.type_id}</td>
                                        <td className="p-4 border-r border-gray-300 font-semibold">{item.description}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td className="p-4 grow sm:text-sm text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">No hay información de Productos de la investigación comprometidos.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default PTable2_16;
