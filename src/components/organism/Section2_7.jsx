import { Link } from 'react-router-dom';
import React, { useState, useContext } from 'react';
import arrowselector from '../../assets/img/Icon/arrow.svg';
import Header from '../atoms/Header';
import VerticalText from '../atoms/VerticalText';
import ClaveDeAcceso from '../atoms/ClaveDeAcceso';
import Footer from '../atoms/Footer';
import logoSinNadita from "../../assets/img/Icon/checkSinNada.svg";
import ButtonSaveInfo from '../atoms/ButtonSaveInfo';
import SharedDataContext from '../../contexts/SharedDataContext';
import Table from '../atoms/Table';
import ButtonSections from '../molecules/ButtonSections';

import "../../assets/css/botoncito.css";
import { getItem, setItem } from '../../utils/storage';




function Section2_7() {
    const Current = getItem('currentProyect') || {};


    const ColumnsTable = [
        { id: "activity", title: "Actividades a desarrollar" },
        { id: "expected_product", title: "Producto esperado" },
    ];

    const ColumnsTable2 = [
        { id: "activity", title: "Actividades a desarrollar" },
        { id: "expected_product", title: "Producto esperado" },
    ];

    
    return (
        <>
            <Header />
            <div className="flex font-sans">
                <div className="flex hidden lg:block lg:w-1/6 lg:justify-center lg:mt-20 lg:mb-20">
                    <VerticalText />
                </div>

                <div className='flex flex-col w-full lg:w-5/6 bg-white lg:rounded-tl-lg'>
                    <div>
                        <ClaveDeAcceso />
                    </div>

                    <div className="flex items-center place-content-around text-center w-full mt-10 lg:mt-20">
                        <img src={logoSinNadita} className='h-[40px] lg:h-[50px] md:h-[40px] sm:h-[40px] xl:h-[40px]'></img>

                        <div className="bg-[#BCB785] w-[86%] sm:w-[87%] lg:w-[85%] md:w-[89%] xl:w-[83%] text-white p-3 rounded-md items-center">
                            <p className='text-xl lg:text-3xl'>2.12 Etapa y actividades</p>
                        </div>

                        <ButtonSaveInfo casefetch={3} />
                    </div>

                    <div className='text-center'>
                        <p className='font-bold text-gray-500 text-base lg:text-xl'>(El proyecto deberá ajustarse a un año de vigencia)</p>
                    </div>

                    <div className='text-center'>
                        <p className='font-bold text-gray-500 text-base lg:text-xl mt-5 mb-5'>*Inserte cuantas filas necesite*</p>
                    </div>

                    <div className='text-center'>
                        <p className='font-bold text-gray-500 text-base lg:text-xl mt-2 '>Etapa 1</p>
                    </div>

                    <table className="table-auto lg:ml-[90px] text-center w-full lg:w-10/12 mb-10 mt-5">
                        <thead className='bg-[#25313A] h-12 rounded text-white'>
                            <tr>
                                <th>Primer semestre de ejecución</th>
                            </tr>
                        </thead>
                        <tr>
                            <div className='flex flex-col w-full items-center'>
                                <simple-input class="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]" 
                                height="30px" 
                                placeholder="Inicio(Fecha)" 
                                id="start_date" 
                                value={Current.startDate || ''}  keyCurrent={"date_start"}
                                ></simple-input>

                                <simple-input class="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]" 
                                height="30px" 
                                placeholder="Fin(Fecha)"
                                id="end_date" 
                                value={Current.endDate || ''}  keyCurrent={"date_end"}
                                ></simple-input>
                            </div>
                        </tr>
                    </table>

                    <Table columns={ColumnsTable} savedInfo={Current.stages_and_activities||''}  keyCurrent={"stages_and_activities"}/>

                    <div className='text-center mt-10'>
                        <p className='font-bold text-gray-500 text-base lg:text-xl mt-5'>Etapa 2</p>
                    </div>

                    {/* ml-[30px] lg:ml-[90px] */}
                    <table className="table-auto lg:ml-[90px] text-center w-full lg:w-10/12 mb-10 mt-5">
                        <thead className='bg-[#25313A] h-12 rounded text-white'>
                            <tr>
                                <th>Segundo semestre de ejecución</th>
                            </tr>
                        </thead>
                        <tr>
                            <div className='flex flex-col w-full items-center'>
                                <simple-input class="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]" 
                                height="30px" 
                                placeholder="Inicio(Fecha)"
                                id="start_date" 
                                value={Current.start_date || ''} keyCurrent={"date_start2"}
                                ></simple-input>

                                <simple-input class="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]" 
                                height="30px"
                                placeholder="Fin(Fecha)" 
                                id="end_date" 
                                value={Current.end_date|| ''} keyCurrent={"date_end2"}
                                ></simple-input>
                            </div>
                        </tr>
                    </table >

                    <Table columns={ColumnsTable2} savedInfo={Current.test||''}  keyCurrent={"second_semester"}/>
                                        
                    <ButtonSections caseValue={3} />
                </div >
            </div >
            <Footer />
        </>
    );
}

export default Section2_7;