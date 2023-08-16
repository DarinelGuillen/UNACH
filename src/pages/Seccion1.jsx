import { useState } from 'react';
import '../assets/css/MyInput.css';
import '../assets/css/PlayGround.css';
import MyInput from '../webComponents/MyInput.jsx';
import componentitoUnachLogo from '../assets/img/Icon/componenteUnachLogo.svg';

function Seccion1() {
    return ( 
        <>
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