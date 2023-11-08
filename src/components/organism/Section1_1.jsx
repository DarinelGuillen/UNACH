import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import arrowselector from '../../assets/img/Icon/arrow.svg';
import Header from '../atoms/Header';
import VerticalText from '../atoms/VerticalText';
import ClaveDeAcceso from '../atoms/ClaveDeAcceso';
import Footer from '../atoms/Footer';
import logoSinNadita from "../../assets/img/Icon/checkSinNada.svg";
import "../../assets/css/botoncito.css";
import ButtonSaveInfo from '../atoms/ButtonSaveInfo';
import SharedDataContext from '../../contexts/SharedDataContext';

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
                            className="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]"
                            value={isShareData.title || ''}
                            height="30px"
                            placeholder="Título"
                            id="title"
                        ></simple-input>

                        <simple-input
                            className="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]"
                            value={isShareData.proposal_date || ''}
                            height="30px"
                            placeholder="Fecha de elaboración de propuesta"
                            id="proposal_date"
                        ></simple-input>

                        <simple-input
                            className="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]"
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
                            className="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]"
                            value={isShareData.start_date || ''}
                            height="30px"
                            placeholder="Vigencia:Inicio"
                            id="start_date"
                        ></simple-input>

                        <simple-input
                            className="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]"
                            value={isShareData.end_date || ''}
                            height="30px"
                            placeholder="Vigencia:Conclusión"
                            id="end_date"
                        ></simple-input>

                        <simple-input
                            className="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]"
                            value={isShareData.weekly_hours_dedicated || ''}
                            height="30px"
                            placeholder="Horas dedicadas semanalmente al proyecto (HSM)"
                            id="weekly_hours_dedicated"
                        ></simple-input>
                    </div>

                    <div className='flex place-content-around ml-2 mt-10 mb-10 lg:mt-24'>
                        <Link to="/">
                            <button>
                                <div className=''>
                                    <div className='grid place-content-center bg-[#BCB785] w-[3rem] h-[3rem] rounded-md lg:h-[4rem] lg:w-[6rem]'>
                                        <img src={arrowselector}></img>
                                    </div>
                                </div>
                            </button>
                        </Link>
                        <button>
                            <div className='flex'>
                                <div className='grid place-content-center bg-[#BCB785] text-white w-[10rem] h-[3rem] rounded-md lg:h-[4rem] lg:w-[16rem]'>
                                    <Link to="/seccion1Pag2"><p className='text-2xl lg:text-3xl'>Siguiente</p></Link>
                                </div>
                            </div>
                        </button>
                        <div className=''>
                            <p className='grid bg-[#BCB785] w-[4rem] h-[3rem] place-content-center text-white text-xl rounded-md lg:text-3xl lg:h-[4rem] lg:w-[6rem]'>1 - 5</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Section1_1;