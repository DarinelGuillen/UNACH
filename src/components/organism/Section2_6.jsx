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
                <div className="flex hidden lg:block lg:w-1/6 lg:justify-center bg-[#25313A]">
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
                        <simple-textarea
                          class="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]"
                          height="30px"
                          type="text"
                          placeholder="Diseño metodológico"
                          id="methodological_design"
                          value={Current.methodological_design
                          ||
                          ''}></simple-textarea>
                          <simple-textarea
                          class="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]"
                          height="40px"
                          type="text"
                          placeholder="Participantes/muestra
                          Indicar cantidad de participantes, la muestra y el tipo de
                          muestreo/selección de participantes"
                          id="participants_sample"
                          value={Current.participants_sample
                          ||
                          ''}></simple-textarea>
                          <simple-textarea
                          class="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]"
                          height="30px"
                          type="text"
                          placeholder="Técnicas e instrumentos"
                          id="techniques_instruments"
                          value={Current.techniques_instruments
                          ||
                          ''}></simple-textarea>
                          <simple-textarea
                          class="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]"
                          height="30px"
                          type="text"
                          placeholder="Materiales"
                          id="materials"
                          value={Current.materials
                          ||
                          ''}></simple-textarea>
                          <simple-textarea
                          class="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]"
                          height="30px"
                          type="text"
                          placeholder="Procedimiento para la recolección de datos"
                          id="data_collection_procedure"
                          value={Current.data_collection_procedure
                          ||
                          ''}></simple-textarea>
                          <simple-textarea
                          class="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]"
                          height="30px"
                          type="text"
                          placeholder="Procedimiento para el análisis"
                          id="procedure_for_analysis"
                          value={Current.procedure_for_analysis
                          ||
                          ''}></simple-textarea>
                          <simple-textarea
                          class="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]"
                          height="30px"
                          type="text"
                          placeholder="Riesgos o amenazas posibles"
                          id="risks_or_threats"
                          value={Current.risks_or_threats
                          ||
                          ''}></simple-textarea>
                          <simple-textarea
                          class="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]"
                          height="30px"
                          type="text"
                          placeholder="Formas de afrontar los riesgos y amenazas"
                          id="ways_to_face_risks_and_threats"
                          value={Current.ways_to_face_risks_and_threats
                          ||
                          ''}></simple-textarea>
                          <simple-textarea
                          class="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]"
                          height="70px"
                          type="text"
                          placeholder="Consentimiento informado
                          Describir la forma en la que los participantes aceptan
                          participar libremente en el desarrollo de la propuesta"
                          id="informed_consent"
                          value={Current.informed_consent
                          ||
                          ''}></simple-textarea>
                          <simple-textarea
                          class="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]"
                          height="70px"
                          type="text"
                          placeholder="
                          Comités éticos, bioéticas y/o de bioseguridad
                          Indicar si algún Comité ha avalado la propuesta
                          *Indispensable para investigaciones en ciencias de la
                          salud"
                          id="ethical_committees_bioethics_biosafety"
                          value={Current.ethical_committees_bioethics_biosafety
                          ||
                          ''}></simple-textarea>
                          
                    </div>

                    <ButtonSections caseValue={3}/>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Section2_6;