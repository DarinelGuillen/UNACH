import React from 'react'
import componentitoUnachLogo from '../assets/img/Icon/componenteUnachLogo.svg'
import more from '../assets/img/Icon/more.svg'
import { Link } from 'react-router-dom';

const Header2 = () => {
    return (
        <div className="flex w-full bg-[#25313A] mb-5 rounded-b-3xl">
            <img src={componentitoUnachLogo} className='h-[60px] mt-[1%] mb-[1%] ml-[3%]' alt="Componentito UNACH Logo" />

            {/* <div className="flex flex-col mt-[7%] ml-[10%] ">
                <div>
                    <p className='text-white text-xs xl:text-base text-center'>XXXXXX-0000-000 Revisión:00</p>
                    <p className='text-white text-xs text-center xl:text-base'>Registro de proyecto de investigación</p>
                </div>
            </div> */}

            <div className="flex w-full justify-end">
                <Link to="/seccion1Pag1" className='mr-[6%] mt-[2.5%]'><img src={more} className='h-[35px] ' alt="" /></Link>
            </div>
        </div>
    )
}

export default Header2