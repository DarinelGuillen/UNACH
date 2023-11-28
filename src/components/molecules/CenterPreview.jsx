import { useEffect, useState } from 'react';
import React  from 'react';
import Table1_1and2 from '../molecules/Table1_1and2';
import Printer from '../../assets/img/Icon/printer.png';
import { getItem, setItem } from '../../utils/storage';

function CenterPreview() {
    const CP = getItem('currentProyect') || {};//!Current Project

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
                        className="bg-green-500 drop-shadow-lg  hover:bg-green-700 text-white rounded-full px-4 py-2 my-2   transition  hover:-translate-y-1 ease-in-out delay-120   hover:scale-110 duration-300"
                        onClick={handleAccept}
                    >
                        Aceptar
                    </button>
                    <button
                        className="bg-red-500 drop-shadow-lg shadow-current hover:bg-red-700 text-white rounded-full px-4 py-2 my-2   transition  hover:-translate-y-1 ease-in-out delay-120   hover:scale-110 duration-300"
                        onClick={handleReject}
                    >
                        Rechazar
                    </button>
                    <button
                        className="bg-blue-500 drop-shadow-lg shadow-current hover:bg-blue-700 text-white rounded-full px-4 py-2 my-2 transition  hover:-translate-y-1 ease-in-out delay-120   hover:scale-110 duration-300  "
                        onClick={handleGeneratePDF}
                    >
                        <img src={Printer} alt="PDF" className="w-6 h-6" />
                    </button>
                </div>
            </div>
            <Table1_1and2/>
            

        </>
    );
}

export default CenterPreview;
