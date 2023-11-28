import React from 'react';
import { getItem } from '../../utils/storage';

function Table1_5() {
    const CP = getItem('currentProyect') || {};

    return (
        <>
            <div className="h-auto w-full flex-col items-center justify-center transition ease-in-out delay-150 hover:-translate-y-10 hover:overflow hover:scale-110 duration-500 mt-14">
                <div className='rounded-full bg-white flex rounded-full drop-shadow-lg items-center justify-center'>

                    <h1 className="sm:text-sm text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
                        1.5 Redes y grupos de investigación
                    </h1>
                </div>

                <div className="flex w-full p-6">
                    <table className="border-separate border-spacing-2 border border-slate-900 border-b-blue-900 w-full table-auto border-gray-300 bg-white drop-shadow-lg rounded-lg border-gray-300">
                        <tbody>
                            <tr>
                                <td className="p-4 border-r border-gray-300 font-semibold">Nombre del Cuerpo Académico (CA)</td>
                                <td className="p-4 grow">{CP.academic_body_name || ""}</td>
                            </tr>
                            <tr>
                                <td className="p-4 border-r border-gray-300 font-semibold">Estatus del CA</td>
                                <td className="p-4">{CP.ca_status || ""}</td>
                            </tr>
                            <tr>
                                <td className="p-4 border-r border-gray-300 font-semibold">Redes de colaboración</td>
                                <td className="p-4">{CP.collaboration_networks || ""}</td>
                            </tr>
                            <tr>
                                <td className="p-4 border-r border-gray-300 font-semibold">Nombre de la red</td>
                                <td className="p-4">{CP.specify_network_name || ""}</td>
                            </tr>
                            <tr>
                                <td className="p-4 border-r border-gray-300 font-semibold">Nombre del grupo colegiado de investigación</td>
                                <td className="p-4">{CP.collegiate_research_group_name || ""}</td>
                            </tr>
                            <tr>
                                <td className="p-4 border-r border-gray-300 font-semibold">Instancia donde está formalizado el grupo o CA</td>
                                <td className="p-4">{CP.formalization_instance || ""}</td>
                            </tr>
                            <tr>
                                <td className="p-4 border-r border-gray-300 font-semibold">Línea de investigación a desarrollar en el proyecto</td>
                                <td className="p-4">{CP.research_line_to_develop || ""}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Table1_5;
