import { Link } from 'react-router-dom';
import { useContext } from 'react';
import arrowselector from '../../assets/img/Icon/arrow.svg';
import Header from '../atoms/Header';

import VerticalText from '../atoms/VerticalText';
import ClaveDeAcceso from '../atoms/ClaveDeAcceso';
import Footer from '../atoms/Footer';
import logoSinNadita from "../../assets/img/Icon/checkSinNada.svg";
import logoSave from "../../assets/img/Icon/Save.svg";
import ButtonSaveInfo from '../atoms/ButtonSaveInfo';
import SharedDataContext from '../../contexts/SharedDataContext';
import ButtonSections from '../molecules/ButtonSections';

import "../../assets/css/botoncito.css";
import { getItem, setItem } from '../../utils/storage';

function Section2_6() {
    const Current = getItem('currentProyect') || {};
    // const { Current } = useContext(SharedDataContext);
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
                            <p className='text-xl lg:text-3xl'>2.11 Metodología</p>
                        </div>

                        {/* TIENES QUE DARLE 2 VECES PARA QUE SE GUARDEN LOS DATOS */}
                        <ButtonSaveInfo casefetch={3}/>
                    </div>

                    <div className='flex flex-col w-full items-center'>
                        <simple-input class="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]" height="30px" placeholder="Tipo de financiamiento" id="funding_type" value={Current.funding_type || ''}></simple-input>
                        <simple-input class="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]" height="30px" placeholder="Institución/fuente" id="funding_source_institution" value={Current.funding_source_institution || ''}></simple-input>
                        <simple-input class="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]" height="30px" placeholder="Convocatoria/programa" id="program" value={Current.program || ''}></simple-input>
                        <simple-input class="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]" height="30px" placeholder="Enlace de la convocatoria" id="program_link" value={Current.program_link || ''}></simple-input>
                        <simple-input class="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]" type="number" height="30px" placeholder="Año de la convocatoria" id="year" value={Current.year || ''}></simple-input>
                        <simple-input class="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]" height="30px" placeholder="Instancia dictaminadora" id="evaluating_instance" value={Current.evaluating_instance || ''}></simple-input>


                        <div className='text-center w-5/6 ml-10 lg:ml-[85px]'>
                            <p className='font-bold text-gray-500  text-base lg:text-xl mt-5 mb-5'>Consentimiento informado -Describir la forma en la que los participantes aceptan participar libremente en el desarrollo de la propuesta</p>
                        </div>
                        <simple-input class="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]" height="30px" placeholder="Escribir aquí" id="informed_consent" value={Current.informed_consent || ''}></simple-input>



                        <div className='text-center w-5/6 ml-10 lg:ml-[85px]'>
                            <p className='font-bold text-gray-500  text-base lg:text-xl mt-5 mb-5'>Comités éticos, bioéticas y/o debioseguridad Indicar si algún Comité ha avalado la propuesta *indispensable para investigaciones en ciencias de la salud</p>
                        </div>

                        <simple-input class="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]" height="30px" placeholder="Escribir aquí" id="committees" value={Current.committees || ''}></simple-input>

                    </div>

                    <ButtonSections caseValue={3}/>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Section2_6;