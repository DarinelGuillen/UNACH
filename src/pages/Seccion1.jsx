import { useState } from 'react';
import '../assets/css/MyInput.css';
import '../assets/css/PlayGround.css';
import MyInput from '../webComponents/MyInput.jsx';
import componentitoUnachLogo from '../assets/img/Icon/componenteUnachLogo.svg';
import codiguitoQRcito from "../assets/img/Icon/qr-Unach.svg";

function Seccion1() {
    return ( 
        <>
        <div className="grid grid-cols-3 gap-4 my-2">
            <div className="m-1 grid place-items-center">
                <img src={componentitoUnachLogo}></img>
            </div>
            <div className="grid place-items-center">
                <div className='bg-gray-200 text-center rounded sm:h-15 lg:h-16 xl:h-16 p-3'>
                    Sello de Recibido. Coordinación de Investigación y Posgrado de la UA
                </div>
            </div>
            <div className="grid grid-cols-2 gap-2 place-items-center">
                <div className='text-center text-white '>
                    {/* Aquí ira el número de Registro de Proyecto de Investigación*/}
                    <p>Registro de Proyecto de Investigación</p>
                </div>
                <div className='sm:p-6 md:p-8 lg:p-8 xl:p-10'>
                    <img src={codiguitoQRcito}></img>
                </div>
            </div>
        </div>    
        <div className='grid'>
            <div className='bg-white rounded-tl-lg grid'>
                <div class="flex w-full justify-center items-center space-y-8">
                    <div class="w-full px-8 md:px-32 lg:px-24">
                        <form class="bg-white rounded-md shadow-2xl p-5">
                        <my-input placeholder="Título" width="100%" value=""></my-input>
                        <my-input  placeholder="Fecha de elaboración de propuesta" width="100%" value=""></my-input>
                        <my-input placeholder="Lugar de realización" width="100%" value=""></my-input>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}

export default Seccion1;