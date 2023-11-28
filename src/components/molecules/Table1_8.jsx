import React from 'react';
import { getItem } from '../../utils/storage';

function Table1_8() {
    const CP = getItem('currentProyect') || {};

    return (
        <>
            <div className="h-auto w-full flex-col items-center justify-center transition ease-in-out delay-150 hover:-translate-y-10 hover:overflow hover:scale-110 duration-500 mt-14">
                <div className='rounded-full bg-white flex rounded-full drop-shadow-lg items-center justify-center'>
                    <h1 className="sm:text-sm text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
                        1.8 Grupo de trabajo
                    </h1>
                </div>

                <div className="flex w-full p-6 overflow-x-auto">
                    <table className="border-separate border-spacing-2 border border-slate-900 border-b-blue-900 w-full table-auto border-gray-300 bg-white drop-shadow-lg rounded-lg border-gray-300">
                        <thead>
                            <tr>
                                <th className="p-4 border rounded-lg border-gray-300 font-semibold">N</th>
                                <th className="p-4 border  rounded-lg border-gray-400">Grado</th>
                                <th className="p-4 border  rounded-lg border-gray-400">Nombre completo</th>
                                <th className="p-4 border  rounded-lg border-gray-400">Adscripción</th>
                                <th className="p-4 border  rounded-lg border-gray-400">Área de especialización</th>
                                <th className="p-4 border  rounded-lg border-gray-400">Tareas específicas</th>
                                <th className="p-4 border  rounded-lg border-gray-400">Nivel de participación</th>
                            </tr>
                        </thead>
                        <tbody>
                            {CP.work_group && CP.work_group.slice(0, 6).map((member, index) => (
                                <tr key={index}>
                                    <td className="p-4 border  rounded-lg border-gray-400">{index + 1}</td>
                                    <td className="p-4 border  rounded-lg border-gray-400">{member.degree || ""}</td>
                                    <td className="p-4 border  rounded-lg border-gray-400">{member.full_name || ""}</td>
                                    <td className="p-4 border  rounded-lg border-gray-400">{member.affiliation || ""}</td>
                                    <td className="p-4 border  rounded-lg border-gray-400">{member.specialization_area || ""}</td>
                                    <td className="p-4 border  rounded-lg border-gray-400">{member.specific_tasks || ""}</td>
                                    <td className="p-4 border  rounded-lg border-gray-400">{member.participation_level || ""}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Table1_8;
