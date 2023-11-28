import React from 'react';
import { getItem } from '../../utils/storage';

function PTable_Drive() {
    const CP = getItem('currentProyect') || {};

    return (
        <>
            <div className="h-auto w-full flex-col items-center justify-center transition ease-in-out delay-150 hover:-translate-y-10 hover:overflow hover:scale-110 duration-500 mt-14">
                <div className='rounded-full bg-white flex rounded-full drop-shadow-lg items-center justify-center'>

                    <h1 className="sm:text-sm text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
                        1.3 Persona responsable técnica
                    </h1>
                </div>

                <div className="flex w-full p-6">
                    <table className="border-separate border-spacing-2 border border-slate-900 border-b-blue-900 w-full table-auto border-gray-300 bg-white drop-shadow-lg rounded-lg border-gray-300">
                        <tbody>
                            <tr>
                                <td className="p-4 text-4xl border-r border-gray-300 font-semibold">Link protocolo del Proyecto</td>
                                <td className="p-4 grow">{CP.link_drive||""} </td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default PTable_Drive;
