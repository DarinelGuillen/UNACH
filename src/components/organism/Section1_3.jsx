import { Link } from 'react-router-dom';
import { useContext } from 'react';
import arrowselector from '../../assets/img/Icon/arrow.svg';
import Header from '../atoms/Header';
import VerticalText from '../atoms/VerticalText';
import ClaveDeAcceso from '../atoms/ClaveDeAcceso';
import Footer from '../atoms/Footer';
import logoSinNadita from "../../assets/img/Icon/checkSinNada.svg";
import ButtonSaveInfo from '../atoms/ButtonSaveInfo';
import SharedDataContext from '../../contexts/SharedDataContext';

import '../../assets/css/botoncito.css';


function Section1_3() {
    const { isShareData } = useContext(SharedDataContext);
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

                    <div className="flex items-center place-content-around text-center w-full mt-5 lg:mt-20">

                        <img src={logoSinNadita} className='h-[40px] lg:h-[50px] md:h-[40px] sm:h-[40px] xl:h-[40px] xl:ml-2'></img>

                        <div className="bg-[#BCB785] w-[86%] sm:w-[87%] lg:w-[85%] md:w-[89%] xl:w-[83%] text-white p-3 rounded-md items-center">
                            <p className='text-xl lg:text-3xl'>1.5 Redes y grupos de investigación</p>
                        </div>

                        {/*  TIENES QUE DARLE 2 VECES AL BOTÓN PARA GUARDAR LOS DATOS */}
                        <ButtonSaveInfo/>
                    </div>

                    <div className='flex flex-col w-full items-center'>
                        <simple-input className="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]" value={isShareData.name || ''} height="30px" placeholder="Nombre del Cuerpo Académico (CA)" id="name"></simple-input>

                        <simple-input className="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]" value={isShareData.status || ''} height="30px" placeholder="Estatus del (CA)" id="status"></simple-input>

                        <simple-input className="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]" value={isShareData.research_group_name || ''} height="30px" placeholder="Nombre del grupo colegiado de investigación" id="research_group_name"></simple-input>

                        <simple-input className="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]" value={isShareData.group_instance || ''} height="30px" placeholder="Instancia donde está formalizado el grupo o CA (Ej. PRODEP, DGIP-UNACH...)" id="group_instance"></simple-input>

                        <simple-input className="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]" value={isShareData.collaboration_networks || ''} height="30px" placeholder="Redes de colaboración" id="collaboration_networks"></simple-input>

                        <simple-input className="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]" value={isShareData.network_name || ''} height="30px" placeholder="Indicar nombre de la red" id="network_name"></simple-input>

                        <simple-input className="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]" value={isShareData.research_line || ''} height="30px" placeholder="Línea de investigación a desarrollar en el proyecto" id="research_line"></simple-input>

                    </div>

                    <div className="flex items-center place-content-around text-center w-full mt-10 lg:mt-10">

                    <img src={logoSinNadita} className='h-[40px] lg:h-[50px] md:h-[40px] sm:h-[40px] xl:h-[40px] xl:ml-2'></img>

                        <div className="bg-[#BCB785] w-[86%] sm:w-[87%] lg:w-[85%] md:w-[89%] xl:w-[83%] text-white p-3 rounded-md items-center">
                            <p className='text-xl lg:text-3xl'>1.6 Tipo de financiamiento</p>
                        </div>

                        {/*  TIENES QUE DARLE 2 VECES AL BOTÓN PARA GUARDAR LOS DATOS */}
                        <ButtonSaveInfo/>
                    </div>

                    <div className='text-center'>
                        <p className='font-bold text-base mt-3 lg:text-xl text-gray-500'>Escriba “No aplica”, donde corresponda</p>
                    </div>

                    <div className='flex flex-col w-full items-center'>
                        <simple-input className="w-[83%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]" value={isShareData.funding_type || ''} height="30px" placeholder="Tipo de financiamiento" id="funding_type"></simple-input>

                        <simple-input className="w-[83%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]" value={isShareData.funding_source_institution || ''} height="30px" placeholder="Institución/fuente" id="funding_source_institution"></simple-input>

                        <simple-input className="w-[83%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]" value={isShareData.program || ''} height="30px" placeholder="Convocatoria/programa" id="program"></simple-input>

                        <simple-input className="w-[83%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]" value={isShareData.program_link || ''} height="30px" placeholder="Enlace de la convocatoria" id="program_link"></simple-input>

                        <simple-input className="w-[83%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]" value={isShareData.year || ''} height="30px" placeholder="Año de la convocatoria" id="year"></simple-input>

                        <simple-input className="w-[83%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]" value={isShareData.evaluating_instance || ''} height="30px" placeholder="Instancia dictaminadora" id="evaluating_instance"></simple-input>

                    </div>

                    <div className='flex place-content-around mt-10 mb-10 lg:mt-24'>
                        <Link to="/seccion1Pag2">
                            <button>
                                <div className='grid'>
                                    <div className='grid place-content-center bg-[#BCB785] w-[3rem] h-[3rem] rounded-md lg:h-[4rem] lg:w-[6rem]'>
                                        <img src={arrowselector}></img>
                                    </div>
                                </div>
                            </button>
                        </Link>
                        <Link to="/seccion1Pag4">
                            <button>
                                <div className='grid'>
                                    <div className='grid place-content-center bg-[#BCB785] text-white w-[10rem] h-[3rem] rounded-md lg:h-[4rem] lg:w-[16rem]'>
                                        <p className='text-2xl lg:text-3xl'>Siguiente</p>
                                    </div>
                                </div>
                            </button>
                        </Link>
                        <div className='flex'>
                            <p className='grid bg-[#BCB785] w-[4rem] h-[3rem] place-content-center text-white text-xl rounded-md lg:text-3xl lg:h-[4rem] lg:w-[6rem]'>3 - 5</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Section1_3;