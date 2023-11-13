import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Header from '../atoms/Header';
import VerticalText from '../atoms/VerticalText';
import ClaveDeAcceso from '../atoms/ClaveDeAcceso';
import Footer from '../atoms/Footer';
import logoSinNadita from "../../assets/img/Icon/checkSinNada.svg";
import "../../assets/css/botoncito.css";
import ButtonSaveInfo from '../atoms/ButtonSaveInfo';
import SharedDataContext from '../../contexts/SharedDataContext';
import ButtonSections from './../molecules/ButtonSections';

function Section1_1() {
    const { isShareData } = useContext(SharedDataContext);

    return (
        <>
            <Header />
            <div className="flex font-sans">
                <div className="flex hidden lg:block lg:w-1/6 lg:justify-center lg:mt-20 lg:mb-20">
                    <VerticalText />
                </div>

                <div className='flex grow flex-col lg:w-5/6 bg-white lg:rounded-tl-lg'>
                    <div>
                        <ClaveDeAcceso />
                    </div>
                    <div className='text-center font-bold mt-5 mb-2 lg:mb-0'>
                        <p className='text-[#BCB785] text-4xl '>Sección 0: Datos Del Proyecto</p>
                    </div>
                    {/* ! Start Section 0 */}
                    <div className='flex flex-col w-full items-center'>

                        <p className='font-bold text-base lg:text-xl text-gray-500'>
                            Titulo del Proyecto Acorde a la Investigacion que se hara
                        </p>
                        <simple-input
                            class="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]"
                            value={isShareData.title_project || ''}
                            height="30px"
                            placeholder=" Título del proyecto de investigación"
                            id="title_project"
                        ></simple-input>
                        <simple-input
                            class="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]"
                            value={isShareData.start_date || ''}
                            height="30px"
                            placeholder="Fecha de inicio del proyecto"
                            id="start_date"
                        ></simple-input>
                        <simple-input
                            class="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]"
                            value={isShareData.end_date || ''}
                            height="30px"
                            placeholder="Fecha de finalización del proyecto"
                            id="end_date"
                        ></simple-input>
                        <simple-input
                            class="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]"
                            value={isShareData.student_name || ''}
                            height="30px"
                            placeholder="Nombre completo del estudiante asociado al proyecto "
                            id="student_name"
                        ></simple-input>

                    </div>
                    {/* ! END  Section 0 */}

                    <div className='text-center font-bold mt-5 mb-2 lg:mb-0'>
                        <p className='text-[#BCB785] text-4xl '>Sección 1: <br />Protocolo del proyecto</p>
                    </div>
                    <div className="flex items-center place-content-around text-center w-full mt-5 lg:mt-10 xl:mt-20">
                        <img src={logoSinNadita} className='h-[40px] lg:h-[50px] md:h-[40px] sm:h-[40px] xl:h-[40px]'></img>

                        <div className="bg-[#BCB785] w-[86%] sm:w-[87%] lg:w-[85%] md:w-[89%] xl:w-[83%] text-white p-3 rounded-md items-center">
                            <p className='text-xl lg:text-3xl'>1.1 Titulo del proyecto</p>
                        </div>

                        {/* EL BOTÓN NO FUNCIONA CORRECTAMENTE, TIENES QUE DARLE VARIAS VECES PARA QUE GUARDE LOS DATOS 1 POR 1 */}
                        <ButtonSaveInfo />
                    </div>

                    <div className='text-center'>
                        <p className='font-bold text-base lg:text-xl text-gray-500'>Rellene los siguientes campos según como se requiera</p>
                    </div>
                    <div className='flex flex-col w-full items-center'>
                        <simple-input
                            class="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]"
                            value={isShareData.title || ''}
                            height="30px"
                            placeholder="Título"
                            id="title"
                        ></simple-input>

                        <simple-input
                            class="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]"
                            value={isShareData.proposal_date || ''}
                            height="30px"
                            placeholder="Fecha de elaboración de propuesta"
                            id="proposal_date"
                        ></simple-input>

                        <simple-input
                            class="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]"
                            value={isShareData.location || ''}
                            height="30px"
                            placeholder="Lugar de realización"
                            id="location"
                        ></simple-input>
                    </div>

                    <div className="flex items-center place-content-around text-center w-full mt-5 lg:mt-10 xl:mt-10">
                        <img src={logoSinNadita} className='h-[40px] lg:h-[50px] md:h-[40px] sm:h-[40px] xl:h-[40px]'></img>

                        <div className="bg-[#BCB785] w-[86%] sm:w-[87%] lg:w-[85%] md:w-[89%] xl:w-[83%] text-white p-3 rounded-md items-center">
                            <p className='text-xl lg:text-3xl'>1.2 Periodo de ejerción del proyecto</p>
                        </div>

                        {/* TIENES QUE DARLE 2 VECES PARA SALVAR LOS DATOS DE LOS INPUTS */}
                        <ButtonSaveInfo />
                    </div>


                    <div className='text-center'>
                        <p className='font-bold text-gray-500 text-base lg:text-xl'>(proyectos con recursos de la persona investigadora, la vigencia es de un año)</p>
                    </div>

                    <div className='flex flex-col w-full items-center'>
                        <simple-input
                            class="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]"
                            value={isShareData.start_date || ''}
                            height="30px"
                            placeholder="Vigencia:Inicio"
                            id="start_date"
                        ></simple-input>

                        <simple-input
                            class="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]"
                            value={isShareData.end_date || ''}
                            height="30px"
                            placeholder="Vigencia:Conclusión"
                            id="end_date"
                        ></simple-input>

                        <simple-input
                            class="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]"
                            value={isShareData.weekly_hours_dedicated || ''}
                            height="30px"
                            placeholder="Horas dedicadas semanalmente al proyecto (HSM)"
                            id="weekly_hours_dedicated"
                        ></simple-input>
                    </div>

                   <ButtonSections/>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Section1_1;