import React from 'react'
import componentitoUnachLogo from '../assets/img/Icon/componenteUnachLogo.svg';
// import logoMobile from '../assets/img/Icon/LOGO-UNACH.png'
import Card from '../atoms/card';
import CardRight from '../atoms/cardRight';
import Footer from '../atoms/Footer';
import arrow from '../assets/img/Icon/arrow.png'


const RegistroProyectos = () => {
    return (
        <>
            <div className='bg-white font-sans'>
                <div className="flex w-full bg-[#25313A] mb-5 rounded-b-3xl">

                    <img src={componentitoUnachLogo} className='h-20 mt-[3%] mb-[3%] ml-[3%]' alt="Componentito UNACH Logo" />
                    {/* hidden md:block md:ml-10  */}
                    {/* <img src={logoMobile} className='flex h-20 mt-[3%] mb-[3%] ml-[3%] md:hidden' alt="" /> */}

                    <div className="flex-col">
                        <p className='text-white text-xs text-center mt-[15%]'>XXXXXX-0000-000 Revisión:00</p>
                        <p className='text-white text-xs text-center'>Registro de proyecto de investigación</p>
                    </div>

                </div>

                <div className="flex justify-center">
                    <input className='rounded-3xl border-[1px] border-black w-5/6 h-10' type="text" />
                </div>

                <div className="pb-10 mt-5">
                    <div className="grid grid-cols-2 grid-rows-3 gap-10 bg-white ">
                        <Card />
                        <CardRight />
                        <Card />
                        <CardRight />
                        <Card />
                        <CardRight />
                    </div>
                </div>


                <div className="flex justify-center pb-7">
                    <button>
                        <div className="flex w-[50px] h-[30px] w-full rounded-md justify-center items-center bg-[#18386B] ">
                            {/* <img src={arrow} className='h-[20px]' alt="" /> */}
                            <p className='text-white w-full p-4'>Siguiente</p>
                        </div>
                    </button>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default RegistroProyectos