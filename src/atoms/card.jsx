import React from 'react'
import arrow from '../assets/img/Icon/arrow.png'
import logoUnach from '../assets/img/Icon/LOGO-UNACH.png'

const Card = () => {
    return (
        <>
            <div className='relative flex flex-col ml-2 w-[185px] h-[208px] bg-white rounded-[12px] font-sans rounded-3xl border-[1px] border-black'>

                <div className='flex ml-5 gap-2 justify-center h-full'>
                    <div className="flex flex-col justify-center mt-7">
                        <p className='text-base text-[#868686]'>Fecha de entrega</p>
                        <h2 className='text-xl font-bold'>Nombre del proyecto</h2>
                        <p className='text-base text-[#868686]'>Escuela</p>
                        <p className='text-[#5964E0] text-sm font-semibold relative top-3 w-full'>Nombre del alumno</p>
                    </div>
                    <img src={logoUnach} alt="" className='flex w-[50px] h-[40px] mt-[10%] mr-[8%]' />
                </div>

                <div className="flex justify-end">
                    <div className='flex items-center justify-center w-[50px] h-[30px] bg-[#18386B] rounded-tl-[12px] rounded-br-[12px]'>
                        <img src={arrow} className='h-[15px]' alt="" />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Card