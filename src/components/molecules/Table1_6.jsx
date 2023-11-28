import React from 'react';
import { getItem } from '../../utils/storage';

function Table1_6() {
    const CP = getItem('currentProyect') || {};

    return (
        <>
            <div className="h-auto w-full flex-col items-center justify-center transition ease-in-out delay-150 hover:-translate-y-10 hover:overflow hover:scale-110 duration-500 mt-14">
                <div className='rounded-full bg-white flex rounded-full drop-shadow-lg items-center justify-center'>

                    <h1 className="sm:text-sm text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
                        1.6 Tipo de financiamiento*
                    </h1>
                </div>

                <div className="flex w-full p-6">
                    <table className="border-separate border-spacing-2 border border-slate-900 border-b-blue-900 w-full table-auto border-gray-300 bg-white drop-shadow-lg rounded-lg border-gray-300">
                        <tbody>
                            <tr>
                                <td className="p-4 border-r border-gray-300 font-semibold">Tipo de financiamiento</td>
                                <td className="p-4 grow">{CP.funding_type || ""}</td>

                            </tr>
                            <tr>
                                <td className="p-4 border-r border-gray-300 font-semibold">Institución/fuente</td>
                                <td className="p-4">{CP.institution_source || ""}</td>
                            </tr>
                            <tr>
                                <td className="p-4 border-r border-gray-300 font-semibold">Convocatoria/programa</td>
                                <td className="p-4">{CP.call_program || ""}</td>
                            </tr>
                            <tr>
                                <td className="p-4 border-r border-gray-300 font-semibold">Año de convocatoria</td>
                                <td className="p-4">{CP.call_year || ""}</td>
                            </tr>
                            <tr>
                                <td className="p-4 border-r border-gray-300 font-semibold">Enlace de la convocatoria</td>
                                <td className="p-4">{CP.call_link || ""}</td>
                            </tr>
                            <tr>
                                <td className="p-4 border-r border-gray-300 font-semibold">Instancia Dictaminadora</td>
                                <td className="p-4">{CP.evaluating_instance || ""}</td>
                            </tr>
                            <tr>
                                <td className="p-4 border-r border-gray-300 font-semibold">Existe Convenio de asignación de recursos <br></br>
                                    formalizado, indicar número o clave</td>
                                <td className="p-4">{CP.allocation_resources_agreement || ""}</td>
                            </tr>
                            <tr>
                                <td className="p-4 border-r border-gray-300 font-semibold">Monto total en pesos mexicanos</td>
                                <td className="p-4">{CP.total_amount_mexican_pesos || ""}</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Table1_6;
