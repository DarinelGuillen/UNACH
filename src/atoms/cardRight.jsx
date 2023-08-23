import React from 'react'
import arrow from '../assets/img/Icon/arrow.png'
import logoUnach from '../assets/img/Icon/LOGO-UNACH.png'

const CardRight = () => {
    return (
        <div className='font-sans'>
            <div className='flex flex-col w-[95%] ml-[1%] h-[208px] bg-white rounded-[12px] rounded-3xl border-[1px] border-black md:w-[90%]'>
                <div className='flex ml-5 gap-2 justify-center h-full'>

                    <div className="flex flex-col justify-center mt-9 md:w-[60%] md:mt-[9%]">
                        <p className='text-base text-[#868686] md:text-lg'>Fecha de entrega</p>
                        <h2 className='text-xl font-bold md:text-2xl'>Nombre del proyecto</h2>
                        <p className='text-base text-[#868686] md:text-lg'>Escuela</p>
                        <p className='text-[#5964E0] text-sm font-semibold mt-3 w-full md:text-lg'>Nombre del alumno</p>
                    </div>

                    <img src={logoUnach} alt="" className='flex w-[50px] h-[40px] mt-[6%] mr-[6%] md:w-[70px] md:h-[60px] '/>
                </div>

                <div className="flex justify-end">
                    <div className='flex items-center justify-center w-[50px] h-[30px] bg-[#18386B] rounded-tl-[12px] rounded-br-[12px]'>
                        <img src={arrow} className='h-[15px]' alt="" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CardRight