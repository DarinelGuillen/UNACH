import React from 'react'
import arrow from '../assets/img/Icon/arrow.png'
import logoUnach from '../assets/img/Icon/LOGO-UNACH.png'
import arrowBlack from '../assets/img/Icon/arrowBlack.png'

const CardRight = () => {
    return (
        <div className='font-sans xl:hidden'>
            <div className='flex flex-col w-[95%] ml-[1%] h-[208px] bg-white rounded-[12px] rounded-3xl border-[1px] border-black md:w-[90%] xl:ml-0 xl:mr-0'>
                <div className='flex ml-5 gap-2 justify-center h-full'>

                    <div className="flex flex-col justify-center mt-9 md:w-[60%] md:mt-[9%]">
                        <p className='text-base text-[#868686] md:text-lg'>Fecha de entrega</p>
                        <p className='text-xl font-bold md:text-2xl'>Nombre del proyecto</p>
                        <p className='text-base text-[#868686] md:text-lg'>Escuela</p>
                        <p className='text-[#5964E0] text-sm font-semibold mt-3 w-full md:text-lg'>Nombre del alumno</p>
                    </div>

                    <img src={logoUnach} alt="" className='flex w-[50px] h-[40px] mt-[6%] mr-[6%] md:w-[70px] md:h-[60px] xl:mr-[0%]' />
                </div>

                <div className="flex justify-end">
                    <button className='flex items-center justify-center w-[50px] h-[30px] bg-[#CACACA] rounded-tl-[12px] rounded-br-[12px] hover:bg-[#BABABA]'>
                        {/* <img src={arrow} className='h-[25px] absolute hidden hover:block' alt="" /> */}
                        <img src={arrowBlack} className='h-[25px]' alt="" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CardRight