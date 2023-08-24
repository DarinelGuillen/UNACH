import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import arrowselector from '../assets/img/Icon/arrow.svg';
import Header from '../atoms/Header';
import VerticalText from '../atoms/VerticalText';
import ClaveDeAcceso from '../atoms/ClaveDeAcceso';
import Footer from '../atoms/Footer';
import logoSinNadita from "../assets/img/Icon/checkSinNada.svg";
import masIcono from "../assets/img/Icon/mas.svg";
import menosIcono from "../assets/img/Icon/menos.svg";
import "../assets/css/botoncito.css";
import ButtonSaveInfo from '../atoms/ButtonSaveInfo';
import SharedDataContext from '../contexts/SharedDataContext';
import Table from '../atoms/Table';
import { useContext } from 'react';

function Seccion1Pag5() {
    const { isShareData } = useContext(SharedDataContext);

    const ColumnsTable = [
        { id: "id", title: "Nombre del participante" },
        { id: "type", title: "Tipo de participante" },
        { id: "expected_product", title: "Producto esperado" },
        { id: "¿?", title: "Especifique" },
    ];

    const ColumnsTable2 = [
        { id: "name", title: "Nombre de la entidad" },
        { id: "description", title: "Describa el tipo de participación de forma breve" },
        { id: "contact_name", title: "Contacto (Número célular y correo eléctronico)" },
    ];
    return (
        <>
            <Header />
            <div className="flex font-sans">

                <div className="flex hidden lg:block lg:w-1/6 justify-center mt-20 mb-20">
                    <VerticalText />
                </div>

                <div className='flex flex-col w-full lg:w-5/6 bg-white lg:rounded-tl-lg'>
                    <div>
                        <ClaveDeAcceso />
                    </div>

                    <div class="flex items-center place-content-around text-center w-full mt-5 lg:mt-20">
                        <img src={logoSinNadita} className='h-[40px] lg:h-[50px] md:h-[40px] sm:h-[40px] xl:h-[40px] xl:ml-2'></img>

                        <div className="bg-[#BCB785] w-[86%] sm:w-[87%] lg:w-[85%] md:w-[89%] xl:w-[83%] text-white p-3 rounded-md items-center">
                            <p className='text-xl lg:text-3xl'>1.9 Formación de personas en investigación</p>
                        </div>

                        <ButtonSaveInfo />
                    </div>

                    <div className='text-center'>
                        <p className='font-bold text-xl text-gray-500'>Indicara las personas que formará el proyecto</p>
                    </div>

                    <div className='text-center'>
                        <p className='font-bold text-xl text-gray-500'>*Puede agregar cuantas celdas necesite*</p>
                    </div>

                    <Table columns={ColumnsTable} />


                    <div className='flex justify-center mt-9'>
                        {/* <button onClick={(e) => HandlerClickFetch(e)}><img src={logoSave} className=''></img></button> */}
                        <ButtonSaveInfo />
                        {/* NO GUARDA DATOS DE LAS TABLAS */}
                    </div>


                    <div class="flex items-center place-content-around text-center w-full mt-10 lg:mt-20">
                        <img src={logoSinNadita} className='h-[40px] lg:h-[50px] md:h-[40px] sm:h-[40px] xl:h-[40px] xl:ml-2'></img>

                        <div className="bg-[#BCB785] w-[86%] sm:w-[87%] lg:w-[85%] md:w-[89%] xl:w-[83%] text-white p-3 rounded-md items-center">
                            <p className='text-xl lg:text-3xl'>1.10 Entidades (instrucciones, organizaciones, grupos, etc.) participantes o beneficiarias</p>
                        </div>

                        <ButtonSaveInfo />
                    </div>

                    <div className='text-center'>
                        <p className='font-bold text-xl text-gray-500'>*Puede agregar cuantas celdas necesite*</p>
                    </div>

                    <Table columns={ColumnsTable2} />

                    <div className='flex justify-center mt-9'>
                        {/* <button onClick={(e) => HandlerClickFetch(e)}><img src={logoSave} className=''></img></button> */}
                        <ButtonSaveInfo />
                    </div>

                    <div className='flex place-content-around mt-10 mb-10 lg:mt-72'>
                        <Link to="/seccion1Pag4">
                            <button>
                                <div className='grid'>
                                    <div className='grid place-content-center bg-[#BCB785] w-[3rem] h-[3rem] rounded-md lg:h-[4rem] lg:w-[6rem]'>
                                        <img src={arrowselector}></img>
                                    </div>
                                </div>
                            </button>
                        </Link>
                        <Link to="/seccion2Pag1">
                            <button>
                                <div className='grid place-content-center bg-[#BCB785] text-white w-[10rem] h-[3rem] rounded-md lg:h-[4rem] lg:w-[16rem]'>
                                    <div className='grid place-content-center'>
                                        <p className='text-2xl lg:text-3xl'>Siguiente</p>
                                    </div>
                                </div>
                            </button>
                        </Link>
                        <div className='flex'>
                            <p className='grid bg-[#BCB785] w-[4rem] h-[3rem] place-content-center text-white text-xl rounded-md lg:text-3xl lg:h-[4rem] lg:w-[6rem]'>5 - 5</p>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />





        </>
    );
}

export default Seccion1Pag5;





