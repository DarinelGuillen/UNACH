import { getItem, setItem } from '../../utils/storage';

function Table1_1and2() {
    const CP = getItem('currentProyect') || {};//!Current Project
    return (<>
        <div className="h-auto w-full flex-col items-center justify-center   transition ease-in-out delay-150  hover:-translate-y-10 hove:overflow hover:scale-110 duration-500 ">
            <div className='rounded-full bg-white    flex rounded-full drop-shadow-2xl items-center justify-center  mt-14'>

            <h1 className="  text-3xl  md:text-3xl lg:text-4xl font-bold text-gray-800">
                1.1 & 1.2 
            </h1>
            </div>

            <div className="flex w-full p-6 ">
                <table className="border-separate border-spacing-2 border border-slate-900 border-b-blue-900 w-full table-auto border-gray-300 bg-white drop-shadow-lg rounded-lg border-gray-300">
                    
                    <tbody>
                        <tr>
                            <td className="p-4 border-r border-gray-300 font-semibold">Lugar de realización</td>
                            <td className="p-4">
                                {CP.location_execution}
                            </td>
                        </tr>
                        <tr>
                            <td className="p-4 border-r  border-gray-300 font-semibold">Horas dedicadas semanalmente al proyecto (HSM)</td>
                            <td className="p-4">{CP.weekly_hours} Horas</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </>);
}

export default Table1_1and2;