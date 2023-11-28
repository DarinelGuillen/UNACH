import React from 'react';
import { getItem } from '../../utils/storage';

function PTable2_14() {
    const CP = getItem('currentProyect') || {};

    return (
        <>
            <div className="h-auto w-full flex-col items-center justify-center ">
                <div className="flex w-full p-6">
                    <table className="transition ease-in-out delay-150 hover:-translate-y-10 hover:overflow hover:scale-110 duration-500 mt-1 border-separate border-spacing-2 border border-slate-900 border-b-blue-900 w-full table-auto border-gray-300 bg-white drop-shadow-lg rounded-lg border-gray-300">
                        <tbody>
                            <tr>
                                <td className="p-4 text-4xl border-r border-gray-300 font-semibold">2.14 Consideraciones éticas</td>
                            </tr>
                            <tr>
                                <td className="p-4 grow">{CP.ethical_considerations || ""} </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default PTable2_14;
