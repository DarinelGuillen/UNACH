import React from 'react';
import { getItem } from '../../utils/storage';

function PTable2_12() {
    const CP = getItem('currentProyect') || {};

    return (
        <>
            <div className="h-auto w-full flex-col items-center justify-center transition ease-in-out delay-150 hover:-translate-y-10 hover:overflow hover:scale-110 duration-500 mt-14">
                <div className='mx-20  bg-white flex-col  items-center justify-center'>
                    <h1 className="sm:text-sm text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 items-center justify-center">
                    2.12 Etapas y actividades
                    </h1>
                    <p>Primer semestre de ejecución Inicio {CP.S1StarDate ||"NOT"} Fin {CP.S1SEndDate ||"NOT"}</p>
                    <p className='text-lg'>Etapa 1</p>
                </div>


                <div className="flex w-full p-6">
                    <table className="border-separate border-spacing-2 border border-slate-900 border-b-blue-900 w-full table-auto border-gray-300 bg-white drop-shadow-lg rounded-lg border-gray-300">
                        <thead>
                            {/* Agregamos el thead proporcionado directamente al thead */}
                            <tr>
                                <td className="p-4 font-semibold  ">Actividades a desarrollar</td>
                                <td className="p-4 font-semibold ">Producto esperado</td>
                            </tr>
                        </thead>
                        <tbody>
                            {CP.SA_1 && CP.SA_1.map((DATA, index) => (
                                <tr key={index}>
                                    <td className="p-4 border  rounded-lg border-gray-400">{DATA.activity}</td>
                                    <td className="p-4 border  rounded-lg border-gray-400">{DATA.expected_product || ""}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <>
                <div className='mx-20  bg-white flex-col  items-center justify-center'>
                    
                    <p>Primer semestre de ejecución Inicio {CP.S2StarDate|| "NOT"} Fin {CP.S2SEndDate ||"NOT"}</p>
                    <p className='text-lg'>Etapa 2</p>
                </div>


                <div className="flex w-full p-6">
                    <table className="border-separate border-spacing-2 border border-slate-900 border-b-blue-900 w-full table-auto border-gray-300 bg-white drop-shadow-lg rounded-lg border-gray-300">
                        <thead>
                            {/* Agregamos el thead proporcionado directamente al thead */}
                            <tr>
                                <td className="p-4 font-semibold  ">Actividades a desarrollar</td>
                                <td className="p-4 font-semibold ">Producto esperado</td>
                            </tr>
                        </thead>
                        <tbody>
                            {CP.SA_2 && CP.SA_2.map((DATA, index) => (
                                <tr key={index}>
                                    <td className="p-4 border  rounded-lg border-gray-400">{DATA.activity}</td>
                                    <td className="p-4 border  rounded-lg border-gray-400">{DATA.expected_product || ""}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                </>
            </div>
        </>
    );
}

export default PTable2_12;
