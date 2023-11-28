import React from 'react';
import { getItem } from '../../utils/storage';

function Table1_10() {
    const CP = getItem('currentProyect') || {};

    return (
        <>
            <div className="h-auto w-full flex-col items-center justify-center transition ease-in-out delay-150 hover:-translate-y-10 hover:overflow hover:scale-110 duration-500 mt-14">
                <div className='rounded-full bg-white flex rounded-full drop-shadow-lg items-center justify-center'>
                    <h1 className="sm:text-sm text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
                        1.10. Entidades participantes o beneficiarias
                    </h1>
                </div>

                <div className="flex w-full p-6 overflow-x-auto">
                    <table className="border-separate border-spacing-2 border border-slate-900 border-b-blue-900 w-full table-auto border-gray-300 bg-white drop-shadow-lg rounded-lg border-gray-300">
                        <thead>
                            <tr>
                                <th className="p-4 border  rounded-lg border-gray-400">Nombre de la entidad</th>
                                <th className="p-4 border  rounded-lg border-gray-400">Describa el tipo de participación de forma breve</th>
                                <th className="p-4 border  rounded-lg border-gray-400">Contacto (número de celular y correo electrónico)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {CP.participating_entities && CP.participating_entities.map((entity, index) => (
                                <tr key={index}>
                                    <td className="p-4 border  rounded-lg border-gray-400">{entity.name || ""}</td>
                                    <td className="p-4 border  rounded-lg border-gray-400">{entity.description || ""}</td>
                                    <td className="p-4 border  rounded-lg border-gray-400">{entity.contact_name || ""}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Table1_10;
