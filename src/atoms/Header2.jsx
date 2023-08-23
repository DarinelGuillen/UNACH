import React from 'react'
import componentitoUnachLogo from '../assets/img/Icon/componenteUnachLogo.svg';


const Header2 = () => {
    return (
        <div className="flex w-full bg-[#25313A] mb-5 rounded-b-3xl">
            <img src={componentitoUnachLogo} className='h-20 mt-[3%] mb-[3%] ml-[3%]' alt="Componentito UNACH Logo" />

            <div className="flex flex-col mt-[7%] ml-[10%] "> {/* Agregadas las clases justify-end y items-end */}
                <div>
                    <p className='text-white text-xs xl:text-base text-center'>XXXXXX-0000-000 Revisión:00</p>
                    <p className='text-white text-xs text-center xl:text-base'>Registro de proyecto de investigación</p>
                </div>
            </div>
        </div>


    )
}

export default Header2