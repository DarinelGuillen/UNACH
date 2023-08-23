import React from 'react'
import Card from '../atoms/card';
import CardRight from '../atoms/cardRight';
import Footer from '../atoms/Footer';
import CardXl from '../atoms/cardXl';
import Header2 from '../atoms/header2';

const RegistroProyectos = () => {
    return (
        <>
            <div className='bg-white font-sans'>

                <Header2 /> 

                <div className="flex justify-center xl:mt-14">
                    <input className='rounded-3xl border-[1px] border-black h-10 w-5/6 md:w-[80%] lg:h-14 lg:mb-5' type="text" />
                </div>

                <div className="pb-5 mt-5">
                    <div className="grid grid-cols-2 grid-rows-3 gap-10 bg-white xl:grid-cols-3 xl:grid-rows-2 xl:ml-[3%] xl:mt-10 xl:mb-10">
                        <Card />
                        <CardRight />
                        <Card />
                        <CardRight />
                        <Card />
                        <CardRight />

                        <CardXl
                            date="Fecha 1"
                            projectName="Proyecto 1"
                            school="Escuela 1"
                            studentName="Alumno 1"
                            buttonUrl="/seccion1Pag1"
                        />
                        <CardXl
                            date="Fecha 2"
                            projectName="Proyecto 2"
                            school="Escuela 2"
                            studentName="Alumno 2"
                            buttonUrl="/seccion1Pag2"
                        />
                        <CardXl
                            date="Fecha 3"
                            projectName="Proyecto 3"
                            school="Escuela 3"
                            studentName="Alumno 3"
                            buttonUrl="/seccion1Pag3"
                        />
                        <CardXl
                            date="Fecha 4"
                            projectName="Proyecto 4"
                            school="Escuela 4"
                            studentName="Alumno 4"
                            buttonUrl="/seccion1Pag4"
                        />
                        <CardXl
                            date="Fecha 5"
                            projectName="Proyecto 5"
                            school="Escuela 5"
                            studentName="Alumno 5"
                            buttonUrl="/seccion2Pag1"
                        />
                        <CardXl
                            date="Fecha 6"
                            projectName="Proyecto 6"
                            school="Escuela 6"
                            studentName="Alumno 6"
                            buttonUrl="/seccion2Pag2"
                        />

                    </div>
                </div>


                <div className="flex justify-center pb-10">
                    <button>
                        <div className="flex w-[50px] h-[30px] w-full rounded-md justify-center items-center bg-[#18386B] lg:w-[110px] h-[45px]">
                            {/* <img src={arrow} className='h-[20px]' alt="" /> */}
                            <p className='text-base text-white w-full p-3 lg:text-xl'>Siguiente</p>
                        </div>
                    </button>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default RegistroProyectos