import { useEffect, useState } from 'react';
import React  from 'react';
import Printer from '../../assets/img/Icon/printer.png';

function CenterPreview() {
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
                    Construyendo una relación responsable con la IA: Hacia un uso crítico y ético de ChatGPT en estudiantes universitarios.
                    </h1>
                    <p className="text-blue-600 text-lg md:text-base lg:text-lg font-semibold mt-2 md:mt-3">
                        Christian Darinel Escobar Guillen
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
            <div className="h-auto w-full">
      <h1 className=" pt-9 text-3xl md:text-3xl lg:text-4xl font-bold text-gray-800">
        1. DATOS DEL PROYECTO
      </h1>

      <div className="flex w-full p-6 transition ease-in-out delay-150  hover:-translate-y-10 hove:overflow hover:scale-110 duration-300">
        <table className="w-full bg-white drop-shadow-lg rounded-lg border-gray-300">
          <tbody>
            <tr>
              <td className="p-4 border-r border-gray-300 font-semibold">1.1 Título del proyecto</td>
              <td className="p-4">Construyendo una relación responsable con la IA: Hacia un uso crítico y ético de ChatGPT en estudiantes universitariosConstruyendo una relación responsable con la IA: Hacia un uso crítico y ético de ChatGPT en estudiantes universitarios</td>
            </tr>
            <tr>
              <td className="p-4 border-r border-gray-300 font-semibold">Fecha de elaboración de propuesta</td>
              <td className="p-4">5 de mayo de 2023</td>
            </tr>
            <tr>
              <td className="p-4 border-r border-gray-300 font-semibold">Lugar de realización</td>
              <td className="p-4">Facultad de Humanidades, Campus VI</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

        </>
    );
}

export default CenterPreview;
