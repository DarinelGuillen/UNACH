import React from 'react';
import { getItem } from '../../utils/storage';

function P2_1To2_10() {
    const CP = getItem('currentProyect') || {};

    return (
        <>
            <div className="h-auto w-full flex-col items-center justify-center ">
                <div className="flex w-full p-6">
                    <table className="transition ease-in-out delay-150 hover:-translate-y-10 hover:overflow hover:scale-110 duration-500 mt-14 border-separate border-spacing-2 border border-slate-900 border-b-blue-900 w-full table-auto border-gray-300 bg-white drop-shadow-lg rounded-lg border-gray-300">
                        <tbody>
                            <tr>
                                <td className="p-4 text-4xl border-r border-gray-300 font-semibold">2.1 Resumen ejecutivo</td>
                            </tr>
                            <tr>
                                <td className="p-4 grow">{CP.executive_summary || ""} </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            <>
                <div className="flex w-full p-6">
                    <table className="transition ease-in-out delay-150 hover:-translate-y-10 hover:overflow hover:scale-110 duration-500 mt-14 border-separate border-spacing-2 border border-slate-900 border-b-blue-900 w-full table-auto border-gray-300 bg-white drop-shadow-lg rounded-lg border-gray-300">
                        <tbody>
                            <tr>
                                <td className="p-4 text-4xl border-r border-gray-300 font-semibold">2.2 Introducción</td>
                            </tr>
                            <tr>
                                <td className="p-4 grow">{CP.introduction || ""} </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </>
            <>
                <div className="flex w-full p-6">
                    <table className="transition ease-in-out delay-150 hover:-translate-y-10 hover:overflow hover:scale-110 duration-500 mt-14 border-separate border-spacing-2 border border-slate-900 border-b-blue-900 w-full table-auto border-gray-300 bg-white drop-shadow-lg rounded-lg border-gray-300">
                        <tbody>
                            <tr>
                                <td className="p-4 text-4xl border-r border-gray-300 font-semibold">2.3 Principal contribución del proyecto al campo de estudio</td>
                            </tr>
                            <tr>
                                <td className="p-4 grow">{CP.main_contribution || ""} </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </>
            <>
                <div className="flex w-full p-6">
                    <table className="transition ease-in-out delay-150 hover:-translate-y-10 hover:overflow hover:scale-110 duration-500 mt-14 border-separate border-spacing-2 border border-slate-900 border-b-blue-900 w-full table-auto border-gray-300 bg-white drop-shadow-lg rounded-lg border-gray-300">
                        <tbody>
                            <tr>
                                <td className="p-4 text-4xl border-r border-gray-300 font-semibold">2.4 Articulación de la propuesta con una o varias funciones sustantivas: docencia (pregrado, posgrado), gestión o vinculación</td>
                            </tr>
                            <tr>
                                <td className="p-4 grow">{CP.articulation_with_substantive_functions || ""} </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </>
            <>
                <div className="flex w-full p-6">
                    <table className="transition ease-in-out delay-150 hover:-translate-y-10 hover:overflow hover:scale-110 duration-500 mt-14 border-separate border-spacing-2 border border-slate-900 border-b-blue-900 w-full table-auto border-gray-300 bg-white drop-shadow-lg rounded-lg border-gray-300">
                        <tbody>
                            <tr>
                                <td className="p-4 text-4xl border-r border-gray-300 font-semibold">2.5 Marco teórico/conceptual</td>
                            </tr>
                            <tr>
                                <td className="p-4 grow">{CP.theoretical_conceptual_framework || ""} </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </>
            <>
                <div className="flex w-full p-6">
                    <table className="transition ease-in-out delay-150 hover:-translate-y-10 hover:overflow hover:scale-110 duration-500 mt-14 border-separate border-spacing-2 border border-slate-900 border-b-blue-900 w-full table-auto border-gray-300 bg-white drop-shadow-lg rounded-lg border-gray-300">
                        <tbody>
                            <tr>
                                <td className="p-4 text-4xl border-r border-gray-300 font-semibold">2.6 Justificación de la investigación</td>
                            </tr>
                            <tr>
                                <td className="p-4 grow">{CP.justification || ""} </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </>
            <>
                <div className="flex w-full p-6">
                    <table className="transition ease-in-out delay-150 hover:-translate-y-10 hover:overflow hover:scale-110 duration-500 mt-14 border-separate border-spacing-2 border border-slate-900 border-b-blue-900 w-full table-auto border-gray-300 bg-white drop-shadow-lg rounded-lg border-gray-300">
                        <tbody>
                            <tr>
                                <td className="p-4 text-4xl border-r border-gray-300 font-semibold">2.7 Pregunta de investigación</td>
                            </tr>
                            <tr>
                                <td className="p-4 grow">{CP.research_question || ""} </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </>
            <>
                <div className="flex w-full p-6">
                    <table className="transition ease-in-out delay-150 hover:-translate-y-10 hover:overflow hover:scale-110 duration-500 mt-14 border-separate border-spacing-2 border border-slate-900 border-b-blue-900 w-full table-auto border-gray-300 bg-white drop-shadow-lg rounded-lg border-gray-300">
                        <tbody>
                            <tr>
                                <td className="p-4 text-4xl border-r border-gray-300 font-semibold">2.8 Objetivo general</td>
                            </tr>
                            <tr>
                                <td className="p-4 grow">{CP.general_objective || ""} </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </>
            <>
                <div className="flex w-full p-6">
                    <table className="transition ease-in-out delay-150 hover:-translate-y-10 hover:overflow hover:scale-110 duration-500 mt-14 border-separate border-spacing-2 border border-slate-900 border-b-blue-900 w-full table-auto border-gray-300 bg-white drop-shadow-lg rounded-lg border-gray-300">
                        <tbody>
                            <tr>
                                <td className="p-4 text-4xl border-r border-gray-300 font-semibold">2.9 Objetivos específicos</td>
                            </tr>
                            <tr>
                                <td className="p-4 grow">{CP.specific_objectives || ""} </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </>
            <>
                <div className="flex w-full p-6">
                    <table className="transition ease-in-out delay-150 hover:-translate-y-10 hover:overflow hover:scale-110 duration-500 mt-14 border-separate border-spacing-2 border border-slate-900 border-b-blue-900 w-full table-auto border-gray-300 bg-white drop-shadow-lg rounded-lg border-gray-300">
                        <tbody>
                            <tr>
                                <td className="p-4 text-4xl border-r border-gray-300 font-semibold">2.10 Hipótesis o supuestos</td>
                            </tr>
                            <tr>
                                <td className="p-4 grow">{CP.hypothesis_or_assumptions || "NO APLICA"} </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </>
            </div>

        </>
    );
}

export default P2_1To2_10;
