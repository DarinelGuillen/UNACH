import React from 'react';

const ColorComponent = '0112'; // Cambia este valor según tus necesidades

function Iconos() {
    const obtenerClaseColor = (indice) => {
        const valor = ColorComponent[indice];
        
        if (valor === '0') {
            return 'bg-gray-500';
        } else if (valor === '1') {
            return 'bg-green-500';
        } else if (valor === '2') {
            return 'bg-red-500';
        }
        return 'bg-gray-500'; // Valor incorrecto, se muestra en gris
    };

    return (
        <>
            <div className="flex w-full mt-5 justify-center">
                <ol className="flex items-center">
                    <li className={`flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-black-100 after:border-4 after:inline-block dark:after:border-black-500`}>
                        <span className={`flex items-center text-white sm:md:text-xs md:text-sm justify-center w-20 h-20 ${obtenerClaseColor(0)} rounded-full md:h-24 md:w-24 sm:w-20 sm:h-20 lg:h-24 lg:w-24 xl:h-28 xl:w-28  shrink-0`}>
                            <p className="text-sm xl:text-base">Enviando</p>
                        </span>
                    </li>
                    <li className={`flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-black-100 after:border-4 after:inline-block dark:after:border-black-500`}>
                        <span className={`flex items-center text-white sm:md:text-xs md:text-sm justify-center w-20 h-20 ${obtenerClaseColor(1)} rounded-full md:h-24 md:w-24 sm:w-20 sm:h-20 lg:h-24 lg:w-24 xl:h-28 xl:w-28  shrink-0`}>
                            <p className="text-sm xl:text-base">Validando</p>
                        </span>
                    </li>
                    <li className={`flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-black-100 after:border-4 after:inline-block dark:after:border-black-500`}>
                        <span className={`flex items-center text-white sm:md:text-xs md:text-sm justify-center w-20 h-20 ${obtenerClaseColor(2)} rounded-full md:h-24 md:w-24 sm:w-20 sm:h-20 lg:h-24 lg:w-24 xl:h-28 xl:w-28  shrink-0`}>
                            <p className="text-sm xl:text-base">Rectificando</p>
                        </span>
                    </li>
                    <li className={`flex items-center w-full`}>
                        <span className={`flex items-center text-white text-center sm:md:text-xs md:text-sm justify-center w-20 h-20 ${obtenerClaseColor(3)} rounded-full md:h-24 md:w-24 sm:w-20 sm:h-20 lg:h-24 lg:w-24 xl:h-28 xl:w-28 shrink-0`}>
                            <p className="text-sm xl:text-base">Aprobado <br />o <br /> Rechazado</p>
                        </span>
                    </li>
                </ol>
            </div>
        </>
    );
}

export default Iconos;