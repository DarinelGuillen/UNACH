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
import ButtonSections from '../molecules/ButtonSections';
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
                        <ButtonSaveInfo casefetch={2}/>
                    </div>

                    <div className='flex flex-col w-full items-center'>
                        <simple-input class="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]" value={isShareData.academic_body_name || ''} height="30px" placeholder="Nombre del Cuerpo Académico (CA)" id="academic_body_name"></simple-input>
                        {/*TODO CheckBOX */}
                        <simple-input class="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]" value={isShareData.ca_status || ''} height="30px" placeholder="Estatus del (CA)" id="ca_status"></simple-input>
                        {/*TODO CheckBOX */}
                        <simple-input class="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]" value={isShareData.collaboration_networks || ''} height="30px" placeholder="Redes de colaboración" id="collaboration_networks"></simple-input>

                        <simple-input class="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]" value={isShareData.specify_network_name || ''} height="30px" placeholder="Indicar nombre de la red decolaboración" id="specify_network_name"></simple-input>

                        <simple-input class="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]" value={isShareData.collegiate_research_group_name || ''} height="30px" placeholder="Nombre del grupo colegiado de investigación" id="collegiate_research_group_name"></simple-input>

                        <simple-input class="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]" value={isShareData.formalization_instance || ''} height="30px" placeholder="Instancia donde está formalizado el grupo o CA (Ej. PRODEP, DGIP-UNACH...)" id="formalization_instance"></simple-input>

                        <simple-input class="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]" value={isShareData.research_line_to_develop || ''} height="30px" placeholder="Línea de investigación a desarrollar en el proyecto" id="research_line_to_develop"></simple-input>

                    </div>

                    <div className="flex items-center place-content-around text-center w-full mt-10 lg:mt-10">

                    <img src={logoSinNadita} className='h-[40px] lg:h-[50px] md:h-[40px] sm:h-[40px] xl:h-[40px] xl:ml-2'></img>

                        <div className="bg-[#BCB785] w-[86%] sm:w-[87%] lg:w-[85%] md:w-[89%] xl:w-[83%] text-white p-3 rounded-md items-center">
                            <p className='text-xl lg:text-3xl'>1.6 Tipo de financiamiento</p>
                        </div>

                        {/*  TIENES QUE DARLE 2 VECES AL BOTÓN PARA GUARDAR LOS DATOS */}
                        <ButtonSaveInfo casefetch={2}/>
                    </div>

                    <div className='text-center'>
                        <p className='font-bold text-base mt-3 lg:text-xl text-gray-500'>Escriba “No aplica”, donde corresponda</p>
                    </div>

                    <div className='flex flex-col w-full items-center'>
                        {/*TODO CheckBOX */}
                        <simple-input  value={isShareData.funding_type || ''} height="30px" placeholder="Tipo de financiamiento" id="funding_type" class="w-[83%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]"></simple-input>

                        <simple-input  value={isShareData.institution_source || ''} height="30px" placeholder="Institución/fuente" id="institution_source" class="w-[83%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]"></simple-input>

                        <simple-input  value={isShareData.call_program || ''} height="30px" placeholder="Convocatoria/programa" id="call_program" class="w-[83%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]"></simple-input>

                        <simple-input  value={isShareData.call_link || ''} height="30px" placeholder="Enlace de la convocatoria" id="call_link" class="w-[83%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]"></simple-input>

                        <simple-input  value={isShareData.call_year || ''} height="30px" placeholder="Año de la convocatoria" id="call_year" class="w-[83%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]"></simple-input>
                        {/*TODO CheckBOX */}
                        <simple-input  value={isShareData.evaluating_instance || ''} height="30px" placeholder="Instancia dictaminadora" id="evaluating_instance" class="w-[83%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]"></simple-input>

                        <simple-input  value={isShareData.allocation_resources_agreement || ''} height="30px" placeholder="Existe Convenio de asignación de recursos formalizado, indicar número o clave" id="allocation_resources_agreement" class="w-[83%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]"></simple-input>
                        
                        <simple-input  value={isShareData.total_amount_mexican_pesos || ''} height="30px" placeholder="Monto total en pesos mexicanos" id="total_amount_mexican_pesos" class="w-[83%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]"></simple-input>
                    </div>

                    <ButtonSections caseValue={2}/>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Section1_3;