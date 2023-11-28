import React from 'react';
import { getItem } from '../../utils/storage';

function PTable2_11() {
    const CP = getItem('currentProyect') || {};

    return (
        <>
            <div className="h-auto w-full flex-col items-center justify-center transition ease-in-out delay-150 hover:-translate-y-10 hover:overflow hover:scale-110 duration-500 mt-14">
                <div className='rounded-full bg-white flex rounded-full drop-shadow-lg items-center justify-center'>

                    <h1 className="sm:text-sm text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
                        2.11 Metodología
                    </h1>
                </div>

                <div className="flex w-full p-6">
                    <table className="border-separate border-spacing-2 border border-slate-900 border-b-blue-900 w-full table-auto border-gray-300 bg-white drop-shadow-lg rounded-lg border-gray-300">
                        <tbody>
                            <tr>
                                <td className="p-4 border-r border-gray-300 font-semibold">Diseño metodológico</td>
                                <td className="p-4 grow">{CP.methodological_design || ""}</td>
                            </tr>
                            <tr>
                                <td className="p-4 border-r border-gray-300 font-semibold">Participantes/muestra
                                    <p className='text-xs'>Indicar cantidad de participantes, la muestra y el tipo de
                                        muestreo/selección de participantes</p>
                                </td>
                                <td className="p-4">{CP.participants_sample || ""}</td>
                            </tr>
                            <tr>
                                <td className="p-4 border-r border-gray-300 font-semibold">Técnicas e instrumentos</td>
                                <td className="p-4">{CP.techniques_instruments || ""}</td>
                            </tr>
                            <tr>
                                <td className="p-4 border-r border-gray-300 font-semibold">Materiales</td>
                                <td className="p-4">{CP.materials || ""}</td>
                            </tr>
                            <tr>
                                <td className="p-4 border-r border-gray-300 font-semibold">Teléfono de oficina</td>
                                <td className="p-4">{CP.materials || ""}</td>
                            </tr>
                            <tr>
                                <td className="p-4 border-r border-gray-300 font-semibold">Procedimiento para la recolección de datos</td>
                                <td className="p-4">{CP.data_collection_procedure || ""}</td>
                            </tr>
                            <tr>
                                <td className="p-4 border-r border-gray-300 font-semibold">Procedimiento para el análisis</td>
                                <td className="p-4">{CP.procedure_for_analysis || ""}</td>
                            </tr>
                            <tr>
                                <td className="p-4 border-r border-gray-300 font-semibold">Riesgos o amenazas posibles</td>
                                <td className="p-4">{CP.risks_or_threats || ""}</td>
                            </tr>
                            <tr>
                                <td className="p-4 border-r border-gray-300 font-semibold">Formas de afrontar los riesgos y amenazas</td>
                                <td className="p-4">{CP.ways_to_face_risks_and_threats || ""}</td>
                            </tr>
                            <tr>
                                <td className="p-4 border-r border-gray-300 font-semibold">Consentimiento informado</td>
                                <td className="p-4">{CP.informed_consent || ""}</td>
                            </tr>
                            <tr>
                                <td className="p-4 border-r border-gray-300 font-semibold">Comités éticos, bioéticas y/o de bioseguridad</td>
                                <td className="p-4">{CP.ethical_committees_bioethics_biosafety || ""}</td>
                            </tr>
                            
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default PTable2_11;
