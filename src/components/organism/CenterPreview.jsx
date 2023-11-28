import React from 'react';
import { useEffect, useState } from 'react';
import Table1_1and2 from '../molecules/Table1_1and2';
import Table1_3 from '../molecules/Table1_3';
import Table1_4 from '../molecules/Table1_4';
import Table1_5 from '../molecules/Table1_5';
import Table1_6 from '../molecules/Table1_6';
import Table1_7 from '../molecules/Table1_7';
import Table1_8 from '../molecules/Table1_8';
import Table1_9 from '../molecules/Table1_9';
import Table1_10 from '../molecules/Table1_10';
import PTable_Drive from '../molecules/PTable_Drive';
import P2_1To2_10 from '../molecules/P2_1To2_10';
import PTable2_11 from '../molecules/PTable2_11';
import PTable2_12 from '../molecules/PTable2_12';
import PTable2_13 from '../molecules/PTable2_13';
import PTable2_14 from '../molecules/PTable2_14';
import PTable2_15 from '../molecules/PTable2_15';
import PTable2_16 from '../molecules/PTable2_16';
import PTable2_17 from '../molecules/PTable2_17';
import Printer from '../../assets/img/Icon/printer.png';
import { getItem, setItem } from '../../utils/storage';

function CenterPreview() {
    const CP = getItem('currentProyect') || {};//!Current Project
    const [viewType, setViewType] = useState(1);

    const handlerChangeView = (type) => {
        setViewType(type);
    };

    // TODO: Agregar los manejadores de eventos
    
    const handleAccept = () => {
        // Lógica para aceptar
        console.log('Proyecto aceptado');
    };

    const handleReject = () => {
        // Lógica para rechazar
        console.log('Proyecto rechazado');
    };

    const handleGeneratePDF = () => {
        // Lógica para generar PDF
        console.log('Generando PDF');
    };

    return (
        <>
            <div className="flex flex-col items-center  drop-shadow-2xl justify-center lg:flex-row bg-white rounded-xl p-4 md:p-6 lg:p-9 w-full transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">
                <div className=" grow lg:w-1/2 mb-4 lg:mb-0 lg:mr-4">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">
                        {CP.title_project}
                    </h1>
                    <p className="text-blue-600 text-lg md:text-base lg:text-lg font-semibold mt-2 md:mt-3">
                        {CP.student_name}
                    </p>
                    <p className="text-black-300 text-lg md:text-base lg:text-lg font-semibold mt-2 md:mt-3">
                        Vigencia:  Inicio en {CP.start_date}, Concluye {CP.end_date}
                    </p>
                </div>
                <div className="flex flex-row gap-4 items-center justify-center lg:w-auto drop-shadow-lg  p-3 bg-white rounded-full">
                    <button
                        className="bg-green-500 drop-shadow-lg  hover:bg-green-700 text-white rounded-full px-4 py-2 my-2   transition  hover:-translate-y-1 ease-in-out delay-120   hover:scale-110 duration-500"
                        onClick={handleAccept}
                    >
                        Aceptar
                    </button>
                    <button
                        className="bg-red-500 drop-shadow-lg shadow-current hover:bg-red-700 text-white rounded-full px-4 py-2 my-2   transition  hover:-translate-y-1 ease-in-out delay-120   hover:scale-110 duration-500"
                        onClick={handleReject}
                    >
                        Rechazar
                    </button>
                    <button
                        className="bg-blue-500 drop-shadow-lg shadow-current hover:bg-blue-700 text-white rounded-full px-4 py-2 my-2 transition  hover:-translate-y-1 ease-in-out delay-120   hover:scale-110 duration-500  "
                        onClick={handleGeneratePDF}
                    >
                        <img src={Printer} alt="PDF" className="w-6 h-6" />
                    </button>
                </div>
            </div>
            <div>
                <>
                    <div className="w-full  flex items-center justify-center my-7 ">
                        <div className='w-full  text-sm lg:text-lg md:text-lg lg:w-1/2 md:w-1/2 h-auto bg-white border-2 border-gray-800 rounded-full flex flex-row shadow-lg'>
                            <label className="w-1/2">
                                <input
                                    className="hidden"
                                    type="radio"
                                    value="PROTOCOL"
                                    checked={viewType === 2}
                                    onChange={() => handlerChangeView(2)}
                                />
                                <div className={`w-full h-full  rounded-full flex justify-center items-center ${viewType === 1 ? 'bg-white' : ' bg-gray-300'} ${viewType === 2 ? 'cursor-default' : 'cursor-pointer'}`}>
                                    <span className="text-gray-800">DATOS DEL PROYECTO</span>
                                </div>
                            </label>
                            <label className={`w-1/2 `}>
                                <input
                                    className="hidden"
                                    type="radio"
                                    value="DATA"
                                    checked={viewType === 1}
                                    onChange={() => handlerChangeView(1)}
                                />
                                <div className={`w-full h-full  hover:bg-gray-300 rounded-full flex justify-center items-center ${viewType === 2 ? 'bg-white' : ' bg-gray-300'}  ${viewType === 1 ? 'cursor-default' : 'cursor-pointer'}`}>
                                    <span className="text-gray-800">PROTOCOLO DEL PROYECTO</span>
                                </div>
                            </label>
                        </div>
                    </div>
                </>



                {viewType === 1 ? (<>
                    <h1 className="mt-6   text-lg  md:text-3xl lg:text-4xl font-bold text-gray-800">
                            2. PROTOCOLO DEL PROYECTO.
                        </h1>
                    {CP.link_drive && CP.link_drive === "" ? (<>
                    <PTable_Drive/>
                    </>) : (<>
                    <P2_1To2_10/>
                    <PTable2_11/>
                    <PTable2_12/>
                    <PTable2_13/>
                    <PTable2_14/>
                    <PTable2_15/>
                    <PTable2_16/>
                    <PTable2_17/>


                    </>)}
                    

                </>) : (<>
                    <h1 className="mt-6   text-lg  md:text-3xl lg:text-4xl font-bold text-gray-800">
                        1. DATOS DEL PROYECTO
                    </h1>
                    <Table1_1and2 />
                    <Table1_3 />
                    <Table1_4 />
                    <Table1_5 />
                    <Table1_6 />
                    <Table1_7 />
                    <Table1_8 />
                    <Table1_9 />
                    <Table1_10 />
                </>)}

            </div>


        </>
    );
}

export default CenterPreview;
